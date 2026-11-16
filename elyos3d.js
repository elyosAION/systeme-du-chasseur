(()=>{var Zd=0,rh=1,Jd=2;var Bu=1,fa=2,Bi=3,hs=0,pn=1,$t=2;var Pi=0,os=1,Bn=2,ah=3,oh=4,Kd=5,Ps=100,$d=101,jd=102,lh=103,ch=104,Qd=200,ef=201,tf=202,nf=203,Xl=204,ql=205,sf=206,rf=207,af=208,of=209,lf=210,cf=211,hf=212,uf=213,df=214,ff=0,pf=1,mf=2,so=3,gf=4,xf=5,yf=6,vf=7,kc=0,_f=1,Mf=2,Ii=0,Fc=1,Bc=2,Hc=3,pa=4,bf=5,Gc=6;var Hu=300,mr=301,gr=302,Yl=303,Zl=304,Bo=306,Qr=1e3,_i=1001,Jl=1002,Sn=1003,hh=1004;var ll=1005;var ci=1006,wf=1007;var ea=1008;var ls=1009,Sf=1010,Ef=1011,Vc=1012,Gu=1013,rs=1014,as=1015,Mi=1016,Vu=1017,Wu=1018,Ds=1020,Tf=1021,ii=1023,Af=1024,Rf=1025,zs=1026,xr=1027,Cf=1028,Xu=1029,Pf=1030,qu=1031,Yu=1033,cl=33776,hl=33777,ul=33778,dl=33779,uh=35840,dh=35841,fh=35842,ph=35843,Zu=36196,mh=37492,gh=37496,xh=37808,yh=37809,vh=37810,_h=37811,Mh=37812,bh=37813,wh=37814,Sh=37815,Eh=37816,Th=37817,Ah=37818,Rh=37819,Ch=37820,Ph=37821,fl=36492,Ih=36494,Lh=36495,If=36283,Dh=36284,zh=36285,Uh=36286;var ro=2300,ao=2301,pl=2302,Nh=2400,Oh=2401,kh=2402;var Ju=3e3,Us=3001,Lf=3200,Df=3201,Ho=0,zf=1,hi="",jt="srgb",Xi="srgb-linear",Wc="display-p3",Go="display-p3-linear",oo="linear",Jt="srgb",lo="rec709",co="p3";var Vs=7680;var Fh=519,Uf=512,Nf=513,Of=514,Ku=515,kf=516,Ff=517,Bf=518,Hf=519,Kl=35044;var Bh="300 es",$l=1035,Vi=2e3,ho=2001,us=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ml=Math.PI/180,uo=180/Math.PI;function Wi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]).toLowerCase()}function Fn(i,e,t){return Math.max(e,Math.min(t,i))}function Gf(i,e){return(i%e+e)%e}function gl(i,e,t){return(1-t)*i+t*e}function Hh(i){return(i&i-1)===0&&i!==0}function jl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Re=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Et=class i{constructor(e,t,n,s,r,a,o,c,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h)}set(e,t,n,s,r,a,o,c,h){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],f=n[7],p=n[2],d=n[5],y=n[8],v=s[0],g=s[3],m=s[6],M=s[1],_=s[4],S=s[7],L=s[2],R=s[5],A=s[8];return r[0]=a*v+o*M+c*L,r[3]=a*g+o*_+c*R,r[6]=a*m+o*S+c*A,r[1]=h*v+u*M+f*L,r[4]=h*g+u*_+f*R,r[7]=h*m+u*S+f*A,r[2]=p*v+d*M+y*L,r[5]=p*g+d*_+y*R,r[8]=p*m+d*S+y*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8];return t*a*u-t*o*h-n*r*u+n*o*c+s*r*h-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],f=u*a-o*h,p=o*c-u*r,d=h*r-a*c,y=t*f+n*p+s*d;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/y;return e[0]=f*v,e[1]=(s*h-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=p*v,e[4]=(u*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*c-h*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-s*h,s*c,-s*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xl.makeScale(e,t)),this}rotate(e){return this.premultiply(xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xl=new Et;function $u(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vf(){let i=fo("canvas");return i.style.display="block",i}var Gh={};function Jr(i){i in Gh||(Gh[i]=!0,console.warn(i))}var Vh=new Et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wh=new Et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ta={[Xi]:{transfer:oo,primaries:lo,toReference:i=>i,fromReference:i=>i},[jt]:{transfer:Jt,primaries:lo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Go]:{transfer:oo,primaries:co,toReference:i=>i.applyMatrix3(Wh),fromReference:i=>i.applyMatrix3(Vh)},[Wc]:{transfer:Jt,primaries:co,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Wh),fromReference:i=>i.applyMatrix3(Vh).convertLinearToSRGB()}},Wf=new Set([Xi,Go]),Ft={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Wf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ta[e].toReference,s=Ta[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ta[i].primaries},getTransfer:function(i){return i===hi?oo:Ta[i].transfer}};function fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ws,po=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ws===void 0&&(Ws=fo("canvas")),Ws.width=e.width,Ws.height=e.height;let n=Ws.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ws}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fr(t[n]/255)*255):t[n]=fr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xf=0,mo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(vl(s[a].image)):r.push(vl(s[a]))}else r=vl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function vl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?po.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qf=0,si=class i extends us{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=_i,s=_i,r=ci,a=ea,o=ii,c=ls,h=i.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Wi(),this.name="",this.source=new mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Us?jt:hi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case Jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case Jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===jt?Us:Ju}set encoding(e){Jr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Us?jt:hi}};si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=Hu;si.DEFAULT_ANISOTROPY=1;var tn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,h=c[0],u=c[4],f=c[8],p=c[1],d=c[5],y=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(u-p)<.01&&Math.abs(f-v)<.01&&Math.abs(y-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+v)<.1&&Math.abs(y+g)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(h+1)/2,S=(d+1)/2,L=(m+1)/2,R=(u+p)/4,A=(f+v)/4,B=(y+g)/4;return _>S&&_>L?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=R/n,r=A/n):S>L?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=R/s,r=B/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=B/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-y)*(g-y)+(f-v)*(f-v)+(p-u)*(p-u));return Math.abs(M)<.001&&(M=1),this.x=(g-y)/M,this.y=(f-v)/M,this.z=(p-u)/M,this.w=Math.acos((h+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ql=class extends us{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Jr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Us?jt:hi),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new si(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new mo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends Ql{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},go=class extends si{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ec=class extends si{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],h=n[s+1],u=n[s+2],f=n[s+3],p=r[a+0],d=r[a+1],y=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=p,e[t+1]=d,e[t+2]=y,e[t+3]=v;return}if(f!==v||c!==p||h!==d||u!==y){let g=1-o,m=c*p+h*d+u*y+f*v,M=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let L=Math.sqrt(_),R=Math.atan2(L,m*M);g=Math.sin(g*R)/L,o=Math.sin(o*R)/L}let S=o*M;if(c=c*g+p*S,h=h*g+d*S,u=u*g+y*S,f=f*g+v*S,g===1-o){let L=1/Math.sqrt(c*c+h*h+u*u+f*f);c*=L,h*=L,u*=L,f*=L}}e[t]=c,e[t+1]=h,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a],p=r[a+1],d=r[a+2],y=r[a+3];return e[t]=o*y+u*f+c*d-h*p,e[t+1]=c*y+u*p+h*f-o*d,e[t+2]=h*y+u*d+o*p-c*f,e[t+3]=u*y-o*f-c*p-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(s/2),f=o(r/2),p=c(n/2),d=c(s/2),y=c(r/2);switch(a){case"XYZ":this._x=p*u*f+h*d*y,this._y=h*d*f-p*u*y,this._z=h*u*y+p*d*f,this._w=h*u*f-p*d*y;break;case"YXZ":this._x=p*u*f+h*d*y,this._y=h*d*f-p*u*y,this._z=h*u*y-p*d*f,this._w=h*u*f+p*d*y;break;case"ZXY":this._x=p*u*f-h*d*y,this._y=h*d*f+p*u*y,this._z=h*u*y+p*d*f,this._w=h*u*f-p*d*y;break;case"ZYX":this._x=p*u*f-h*d*y,this._y=h*d*f+p*u*y,this._z=h*u*y-p*d*f,this._w=h*u*f+p*d*y;break;case"YZX":this._x=p*u*f+h*d*y,this._y=h*d*f+p*u*y,this._z=h*u*y-p*d*f,this._w=h*u*f-p*d*y;break;case"XZY":this._x=p*u*f-h*d*y,this._y=h*d*f-p*u*y,this._z=h*u*y+p*d*f,this._w=h*u*f+p*d*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],h=t[2],u=t[6],f=t[10],p=n+o+f;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,h=t._z,u=t._w;return this._x=n*u+a*o+s*h-r*c,this._y=s*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-s*o,this._w=a*u-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let h=Math.sqrt(c),u=Math.atan2(h,o),f=Math.sin((1-t)*u)/h,p=Math.sin(t*u)/h;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*h+a*f-o*u,this.y=n+c*u+o*h-r*f,this.z=s+c*f+r*u-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _l.copy(this).projectOnVector(e),this.sub(_l)}reflect(e){return this.sub(_l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_l=new Y,Xh=new Jn,qi=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xi):xi.fromBufferAttribute(r,a),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Aa.copy(n.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Ra.subVectors(this.max,Fr),Xs.subVectors(e.a,Fr),qs.subVectors(e.b,Fr),Ys.subVectors(e.c,Fr),es.subVectors(qs,Xs),ts.subVectors(Ys,qs),Es.subVectors(Xs,Ys);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Es.z,Es.y,es.z,0,-es.x,ts.z,0,-ts.x,Es.z,0,-Es.x,-es.y,es.x,0,-ts.y,ts.x,0,-Es.y,Es.x,0];return!Ml(t,Xs,qs,Ys,Ra)||(t=[1,0,0,0,1,0,0,0,1],!Ml(t,Xs,qs,Ys,Ra))?!1:(Ca.crossVectors(es,ts),t=[Ca.x,Ca.y,Ca.z],Ml(t,Xs,qs,Ys,Ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ui=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],xi=new Y,Aa=new qi,Xs=new Y,qs=new Y,Ys=new Y,es=new Y,ts=new Y,Es=new Y,Fr=new Y,Ra=new Y,Ca=new Y,Ts=new Y;function Ml(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ts.fromArray(i,r);let o=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),c=e.dot(Ts),h=t.dot(Ts),u=n.dot(Ts);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}var Yf=new qi,Br=new Y,bl=new Y,ds=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);let t=Br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(bl)),this.expandByPoint(Br.copy(e.center).sub(bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ni=new Y,wl=new Y,Pa=new Y,ns=new Y,Sl=new Y,Ia=new Y,El=new Y,ta=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wl.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(wl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Pa),o=ns.dot(this.direction),c=-ns.dot(Pa),h=ns.lengthSq(),u=Math.abs(1-a*a),f,p,d,y;if(u>0)if(f=a*c-o,p=a*o-c,y=r*u,f>=0)if(p>=-y)if(p<=y){let v=1/u;f*=v,p*=v,d=f*(f+a*p+2*o)+p*(a*f+p+2*c)+h}else p=r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*c)+h;else p=-r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*c)+h;else p<=-y?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+p*(p+2*c)+h):p<=y?(f=0,p=Math.min(Math.max(-r,-c),r),d=p*(p+2*c)+h):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+p*(p+2*c)+h);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(wl).addScaledVector(Pa,p),d}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);let n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,s=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,s=(e.min.x-p.x)*h),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,s,r){Sl.subVectors(t,e),Ia.subVectors(n,e),El.crossVectors(Sl,Ia);let a=this.direction.dot(El),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ns.subVectors(this.origin,e);let c=o*this.direction.dot(Ia.crossVectors(ns,Ia));if(c<0)return null;let h=o*this.direction.dot(Sl.cross(ns));if(h<0||c+h>a)return null;let u=-o*ns.dot(El);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ut=class i{constructor(e,t,n,s,r,a,o,c,h,u,f,p,d,y,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,h,u,f,p,d,y,v,g)}set(e,t,n,s,r,a,o,c,h,u,f,p,d,y,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=h,m[6]=u,m[10]=f,m[14]=p,m[3]=d,m[7]=y,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),a=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=a*u,d=a*f,y=o*u,v=o*f;t[0]=c*u,t[4]=-c*f,t[8]=h,t[1]=d+y*h,t[5]=p-v*h,t[9]=-o*c,t[2]=v-p*h,t[6]=y+d*h,t[10]=a*c}else if(e.order==="YXZ"){let p=c*u,d=c*f,y=h*u,v=h*f;t[0]=p+v*o,t[4]=y*o-d,t[8]=a*h,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-y,t[6]=v+p*o,t[10]=a*c}else if(e.order==="ZXY"){let p=c*u,d=c*f,y=h*u,v=h*f;t[0]=p-v*o,t[4]=-a*f,t[8]=y+d*o,t[1]=d+y*o,t[5]=a*u,t[9]=v-p*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let p=a*u,d=a*f,y=o*u,v=o*f;t[0]=c*u,t[4]=y*h-d,t[8]=p*h+v,t[1]=c*f,t[5]=v*h+p,t[9]=d*h-y,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let p=a*c,d=a*h,y=o*c,v=o*h;t[0]=c*u,t[4]=v-p*f,t[8]=y*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-h*u,t[6]=d*f+y,t[10]=p-v*f}else if(e.order==="XZY"){let p=a*c,d=a*h,y=o*c,v=o*h;t[0]=c*u,t[4]=-f,t[8]=h*u,t[1]=p*f+v,t[5]=a*u,t[9]=d*f-y,t[2]=y*f-d,t[6]=o*u,t[10]=v*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zf,e,Jf)}lookAt(e,t,n){let s=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),is.crossVectors(n,ti),is.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),is.crossVectors(n,ti)),is.normalize(),La.crossVectors(ti,is),s[0]=is.x,s[4]=La.x,s[8]=ti.x,s[1]=is.y,s[5]=La.y,s[9]=ti.y,s[2]=is.z,s[6]=La.z,s[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],f=n[5],p=n[9],d=n[13],y=n[2],v=n[6],g=n[10],m=n[14],M=n[3],_=n[7],S=n[11],L=n[15],R=s[0],A=s[4],B=s[8],E=s[12],x=s[1],F=s[5],O=s[9],Q=s[13],N=s[2],J=s[6],w=s[10],te=s[14],V=s[3],G=s[7],we=s[11],le=s[15];return r[0]=a*R+o*x+c*N+h*V,r[4]=a*A+o*F+c*J+h*G,r[8]=a*B+o*O+c*w+h*we,r[12]=a*E+o*Q+c*te+h*le,r[1]=u*R+f*x+p*N+d*V,r[5]=u*A+f*F+p*J+d*G,r[9]=u*B+f*O+p*w+d*we,r[13]=u*E+f*Q+p*te+d*le,r[2]=y*R+v*x+g*N+m*V,r[6]=y*A+v*F+g*J+m*G,r[10]=y*B+v*O+g*w+m*we,r[14]=y*E+v*Q+g*te+m*le,r[3]=M*R+_*x+S*N+L*V,r[7]=M*A+_*F+S*J+L*G,r[11]=M*B+_*O+S*w+L*we,r[15]=M*E+_*Q+S*te+L*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],h=e[13],u=e[2],f=e[6],p=e[10],d=e[14],y=e[3],v=e[7],g=e[11],m=e[15];return y*(+r*c*f-s*h*f-r*o*p+n*h*p+s*o*d-n*c*d)+v*(+t*c*d-t*h*p+r*a*p-s*a*d+s*h*u-r*c*u)+g*(+t*h*f-t*o*d-r*a*f+n*a*d+r*o*u-n*h*u)+m*(-s*o*u-t*c*f+t*o*p+s*a*f-n*a*p+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],u=e[8],f=e[9],p=e[10],d=e[11],y=e[12],v=e[13],g=e[14],m=e[15],M=f*g*h-v*p*h+v*c*d-o*g*d-f*c*m+o*p*m,_=y*p*h-u*g*h-y*c*d+a*g*d+u*c*m-a*p*m,S=u*v*h-y*f*h+y*o*d-a*v*d-u*o*m+a*f*m,L=y*f*c-u*v*c-y*o*p+a*v*p+u*o*g-a*f*g,R=t*M+n*_+s*S+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/R;return e[0]=M*A,e[1]=(v*p*r-f*g*r-v*s*d+n*g*d+f*s*m-n*p*m)*A,e[2]=(o*g*r-v*c*r+v*s*h-n*g*h-o*s*m+n*c*m)*A,e[3]=(f*c*r-o*p*r-f*s*h+n*p*h+o*s*d-n*c*d)*A,e[4]=_*A,e[5]=(u*g*r-y*p*r+y*s*d-t*g*d-u*s*m+t*p*m)*A,e[6]=(y*c*r-a*g*r-y*s*h+t*g*h+a*s*m-t*c*m)*A,e[7]=(a*p*r-u*c*r+u*s*h-t*p*h-a*s*d+t*c*d)*A,e[8]=S*A,e[9]=(y*f*r-u*v*r-y*n*d+t*v*d+u*n*m-t*f*m)*A,e[10]=(a*v*r-y*o*r+y*n*h-t*v*h-a*n*m+t*o*m)*A,e[11]=(u*o*r-a*f*r-u*n*h+t*f*h+a*n*d-t*o*d)*A,e[12]=L*A,e[13]=(u*v*s-y*f*s+y*n*p-t*v*p-u*n*g+t*f*g)*A,e[14]=(y*o*s-a*v*s-y*n*c+t*v*c+a*n*g-t*o*g)*A,e[15]=(a*f*s-u*o*s+u*n*c-t*f*c-a*n*p+t*o*p)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,u*o+n,u*c-s*a,0,h*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,h=r+r,u=a+a,f=o+o,p=r*h,d=r*u,y=r*f,v=a*u,g=a*f,m=o*f,M=c*h,_=c*u,S=c*f,L=n.x,R=n.y,A=n.z;return s[0]=(1-(v+m))*L,s[1]=(d+S)*L,s[2]=(y-_)*L,s[3]=0,s[4]=(d-S)*R,s[5]=(1-(p+m))*R,s[6]=(g+M)*R,s[7]=0,s[8]=(y+_)*A,s[9]=(g-M)*A,s[10]=(1-(p+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Zs.set(s[0],s[1],s[2]).length(),a=Zs.set(s[4],s[5],s[6]).length(),o=Zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yi.copy(this);let h=1/r,u=1/a,f=1/o;return yi.elements[0]*=h,yi.elements[1]*=h,yi.elements[2]*=h,yi.elements[4]*=u,yi.elements[5]*=u,yi.elements[6]*=u,yi.elements[8]*=f,yi.elements[9]*=f,yi.elements[10]*=f,t.setFromRotationMatrix(yi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Vi){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),d,y;if(o===Vi)d=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ho)d=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Vi){let c=this.elements,h=1/(t-e),u=1/(n-s),f=1/(a-r),p=(t+e)*h,d=(n+s)*u,y,v;if(o===Vi)y=(a+r)*f,v=-2*f;else if(o===ho)y=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Zs=new Y,yi=new Ut,Zf=new Y(0,0,0),Jf=new Y(1,1,1),is=new Y,La=new Y,ti=new Y,qh=new Ut,Yh=new Jn,fs=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],u=s[9],f=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Fn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Fn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Fn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yh.setFromEuler(this),this.setFromQuaternion(Yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fs.DEFAULT_ORDER="XYZ";var na=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kf=0,Zh=new Y,Js=new Jn,Oi=new Ut,Da=new Y,Hr=new Y,$f=new Y,jf=new Jn,Jh=new Y(1,0,0),Kh=new Y(0,1,0),$h=new Y(0,0,1),Qf={type:"added"},e0={type:"removed"},cn=class i extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new Y,t=new fs,n=new Jn,s=new Y(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Et}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(Kh,e)}rotateZ(e){return this.rotateOnAxis($h,e)}translateOnAxis(e,t){return Zh.copy(e).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(Kh,e)}translateZ(e){return this.translateOnAxis($h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Da.copy(e):Da.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Hr,Da,this.up):Oi.lookAt(Da,Hr,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(Oi),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,$f),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,jf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){let f=c[h];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),h=a(e.textures),u=a(e.images),f=a(e.shapes),p=a(e.skeletons),d=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let c=[];for(let h in o){let u=o[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};cn.DEFAULT_UP=new Y(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vi=new Y,ki=new Y,Tl=new Y,Fi=new Y,Ks=new Y,$s=new Y,jh=new Y,Al=new Y,Rl=new Y,Cl=new Y,za=!1,Ls=class i{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),vi.subVectors(e,t),s.cross(vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){vi.subVectors(s,t),ki.subVectors(n,t),Tl.subVectors(e,t);let a=vi.dot(vi),o=vi.dot(ki),c=vi.dot(Tl),h=ki.dot(ki),u=ki.dot(Tl),f=a*h-o*o;if(f===0)return r.set(0,0,0),null;let p=1/f,d=(h*c-o*u)*p,y=(a*u-o*c)*p;return r.set(1-d-y,y,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getUV(e,t,n,s,r,a,o,c){return za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),za=!0),this.getInterpolation(e,t,n,s,r,a,o,c)}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fi.x),c.addScaledVector(a,Fi.y),c.addScaledVector(o,Fi.z),c)}static isFrontFacing(e,t,n,s){return vi.subVectors(n,t),ki.subVectors(e,t),vi.cross(ki).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),vi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return za===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),za=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ks.subVectors(s,n),$s.subVectors(r,n),Al.subVectors(e,n);let c=Ks.dot(Al),h=$s.dot(Al);if(c<=0&&h<=0)return t.copy(n);Rl.subVectors(e,s);let u=Ks.dot(Rl),f=$s.dot(Rl);if(u>=0&&f<=u)return t.copy(s);let p=c*f-u*h;if(p<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Ks,a);Cl.subVectors(e,r);let d=Ks.dot(Cl),y=$s.dot(Cl);if(y>=0&&d<=y)return t.copy(r);let v=d*h-c*y;if(v<=0&&h>=0&&y<=0)return o=h/(h-y),t.copy(n).addScaledVector($s,o);let g=u*y-d*f;if(g<=0&&f-u>=0&&d-y>=0)return jh.subVectors(r,s),o=(f-u)/(f-u+(d-y)),t.copy(s).addScaledVector(jh,o);let m=1/(g+v+p);return a=v*m,o=p*m,t.copy(n).addScaledVector(Ks,a).addScaledVector($s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function Pl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var rt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ft.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ft.workingColorSpace){if(e=Gf(e,1),t=Fn(t,0,1),n=Fn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Pl(a,r,e+1/3),this.g=Pl(a,r,e),this.b=Pl(a,r,e-1/3)}return Ft.toWorkingColorSpace(this,s),this}setStyle(e,t=jt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=yl(e.r),this.g=yl(e.g),this.b=yl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return Ft.fromWorkingColorSpace(kn.copy(this),e),Math.round(Fn(kn.r*255,0,255))*65536+Math.round(Fn(kn.g*255,0,255))*256+Math.round(Fn(kn.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.fromWorkingColorSpace(kn.copy(this),t);let n=kn.r,s=kn.g,r=kn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,h,u=(o+a)/2;if(o===a)c=0,h=0;else{let f=a-o;switch(h=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=h,e.l=u,e}getRGB(e,t=Ft.workingColorSpace){return Ft.fromWorkingColorSpace(kn.copy(this),t),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=jt){Ft.fromWorkingColorSpace(kn.copy(this),e);let t=kn.r,n=kn.g,s=kn.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Ua);let n=gl(ss.h,Ua.h,t),s=gl(ss.s,Ua.s,t),r=gl(ss.l,Ua.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kn=new rt;rt.NAMES=ju;var t0=0,ui=class extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=os,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=ql,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==hs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xl&&(n.blendSrc=this.blendSrc),this.blendDst!==ql&&(n.blendDst=this.blendDst),this.blendEquation!==Ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Nt=class extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var fn=new Y,Na=new Re,mn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=as,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Na.fromBufferAttribute(this,t),Na.applyMatrix3(e),this.setXY(t,Na.x,Na.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),e}};var xo=class extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var yo=class extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var n0=0,li=new Ut,Il=new cn,js=new Y,ni=new qi,Gr=new qi,Pn=new Y,Gt=class i extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($u(e)?yo:xo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,t,n){return li.makeTranslation(e,t,n),this.applyMatrix4(li),this}scale(e,t,n){return li.makeScale(e,t,n),this.applyMatrix4(li),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){let n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Pn.addVectors(ni.min,Gr.min),ni.expandByPoint(Pn),Pn.addVectors(ni.max,Gr.max),ni.expandByPoint(Pn)):(ni.expandByPoint(Gr.min),ni.expandByPoint(Gr.max))}ni.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Pn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Pn.fromBufferAttribute(o,h),c&&(js.fromBufferAttribute(e,h),Pn.add(js)),s=Math.max(s,n.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,h=[],u=[];for(let x=0;x<o;x++)h[x]=new Y,u[x]=new Y;let f=new Y,p=new Y,d=new Y,y=new Re,v=new Re,g=new Re,m=new Y,M=new Y;function _(x,F,O){f.fromArray(s,x*3),p.fromArray(s,F*3),d.fromArray(s,O*3),y.fromArray(a,x*2),v.fromArray(a,F*2),g.fromArray(a,O*2),p.sub(f),d.sub(f),v.sub(y),g.sub(y);let Q=1/(v.x*g.y-g.x*v.y);isFinite(Q)&&(m.copy(p).multiplyScalar(g.y).addScaledVector(d,-v.y).multiplyScalar(Q),M.copy(d).multiplyScalar(v.x).addScaledVector(p,-g.x).multiplyScalar(Q),h[x].add(m),h[F].add(m),h[O].add(m),u[x].add(M),u[F].add(M),u[O].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let x=0,F=S.length;x<F;++x){let O=S[x],Q=O.start,N=O.count;for(let J=Q,w=Q+N;J<w;J+=3)_(n[J+0],n[J+1],n[J+2])}let L=new Y,R=new Y,A=new Y,B=new Y;function E(x){A.fromArray(r,x*3),B.copy(A);let F=h[x];L.copy(F),L.sub(A.multiplyScalar(A.dot(F))).normalize(),R.crossVectors(B,F);let Q=R.dot(u[x])<0?-1:1;c[x*4]=L.x,c[x*4+1]=L.y,c[x*4+2]=L.z,c[x*4+3]=Q}for(let x=0,F=S.length;x<F;++x){let O=S[x],Q=O.start,N=O.count;for(let J=Q,w=Q+N;J<w;J+=3)E(n[J+0]),E(n[J+1]),E(n[J+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let s=new Y,r=new Y,a=new Y,o=new Y,c=new Y,h=new Y,u=new Y,f=new Y;if(e)for(let p=0,d=e.count;p<d;p+=3){let y=e.getX(p+0),v=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,y),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),o.add(u),c.add(u),h.add(u),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(o,c){let h=o.array,u=o.itemSize,f=o.normalized,p=new h.constructor(c.length*u),d=0,y=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*u;for(let m=0;m<u;m++)p[y++]=h[d++]}return new mn(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],h=e(c,n);t.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let c=[],h=r[o];for(let u=0,f=h.length;u<f;u++){let p=h[u],d=e(p,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let h=n[c];e.data.attributes[c]=h.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],u=[];for(let f=0,p=h.length;f<p;f++){let d=h[f];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(t))}let r=e.morphAttributes;for(let h in r){let u=[],f=r[h];for(let p=0,d=f.length;p<d;p++)u.push(f[p].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,u=a.length;h<u;h++){let f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qh=new Ut,As=new ta,Oa=new ds,eu=new Y,Qs=new Y,er=new Y,tr=new Y,Ll=new Y,ka=new Y,Fa=new Re,Ba=new Re,Ha=new Re,tu=new Y,nu=new Y,iu=new Y,Ga=new Y,Va=new Y,Oe=class extends cn{constructor(e=new Gt,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ka.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let u=o[c],f=r[c];u!==0&&(Ll.fromBufferAttribute(f,e),a?ka.addScaledVector(Ll,u):ka.addScaledVector(Ll.sub(t),u))}t.add(ka)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(Oa.containsPoint(As.origin)===!1&&(As.intersectSphere(Oa,eu)===null||As.origin.distanceToSquared(eu)>(e.far-e.near)**2))&&(Qh.copy(r).invert(),As.copy(e.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,v=p.length;y<v;y++){let g=p[y],m=a[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let S=M,L=_;S<L;S+=3){let R=o.getX(S),A=o.getX(S+1),B=o.getX(S+2);s=Wa(this,m,e,n,h,u,f,R,A,B),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=y,m=v;g<m;g+=3){let M=o.getX(g),_=o.getX(g+1),S=o.getX(g+2);s=Wa(this,a,e,n,h,u,f,M,_,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,v=p.length;y<v;y++){let g=p[y],m=a[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let S=M,L=_;S<L;S+=3){let R=S,A=S+1,B=S+2;s=Wa(this,m,e,n,h,u,f,R,A,B),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let g=y,m=v;g<m;g+=3){let M=g,_=g+1,S=g+2;s=Wa(this,a,e,n,h,u,f,M,_,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function i0(i,e,t,n,s,r,a,o){let c;if(e.side===pn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===hs,o),c===null)return null;Va.copy(o),Va.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(Va);return h<t.near||h>t.far?null:{distance:h,point:Va.clone(),object:i}}function Wa(i,e,t,n,s,r,a,o,c,h){i.getVertexPosition(o,Qs),i.getVertexPosition(c,er),i.getVertexPosition(h,tr);let u=i0(i,e,t,n,Qs,er,tr,Ga);if(u){s&&(Fa.fromBufferAttribute(s,o),Ba.fromBufferAttribute(s,c),Ha.fromBufferAttribute(s,h),u.uv=Ls.getInterpolation(Ga,Qs,er,tr,Fa,Ba,Ha,new Re)),r&&(Fa.fromBufferAttribute(r,o),Ba.fromBufferAttribute(r,c),Ha.fromBufferAttribute(r,h),u.uv1=Ls.getInterpolation(Ga,Qs,er,tr,Fa,Ba,Ha,new Re),u.uv2=u.uv1),a&&(tu.fromBufferAttribute(a,o),nu.fromBufferAttribute(a,c),iu.fromBufferAttribute(a,h),u.normal=Ls.getInterpolation(Ga,Qs,er,tr,tu,nu,iu,new Y),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:c,c:h,normal:new Y,materialIndex:0};Ls.getNormal(Qs,er,tr,f.normal),u.face=f}return u}var Kn=class i extends Gt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],h=[],u=[],f=[],p=0,d=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new yt(h,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(f,2));function y(v,g,m,M,_,S,L,R,A,B,E){let x=S/A,F=L/B,O=S/2,Q=L/2,N=R/2,J=A+1,w=B+1,te=0,V=0,G=new Y;for(let we=0;we<w;we++){let le=we*F-Q;for(let Ue=0;Ue<J;Ue++){let ce=Ue*x-O;G[v]=ce*M,G[g]=le*_,G[m]=N,h.push(G.x,G.y,G.z),G[v]=0,G[g]=0,G[m]=R>0?1:-1,u.push(G.x,G.y,G.z),f.push(Ue/A),f.push(1-we/B),te+=1}}for(let we=0;we<B;we++)for(let le=0;le<A;le++){let Ue=p+le+J*we,ce=p+le+J*(we+1),ye=p+(le+1)+J*(we+1),Ae=p+(le+1)+J*we;c.push(Ue,ce,Ae),c.push(ce,ye,Ae),V+=6}o.addGroup(d,V,E),d+=V,p+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function yr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Vn(i){let e={};for(let t=0;t<i.length;t++){let n=yr(i[t]);for(let s in n)e[s]=n[s]}return e}function s0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qu(i){return i.getRenderTarget()===null?i.outputColorSpace:Ft.workingColorSpace}var ys={clone:yr,merge:Vn},r0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r0,this.fragmentShader=a0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=s0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},vo=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},En=class extends vo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ml*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ml*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},nr=-90,ir=1,tc=class extends cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new En(nr,ir,e,t);s.layers=this.layers,this.add(s);let r=new En(nr,ir,e,t);r.layers=this.layers,this.add(r);let a=new En(nr,ir,e,t);a.layers=this.layers,this.add(a);let o=new En(nr,ir,e,t);o.layers=this.layers,this.add(o);let c=new En(nr,ir,e,t);c.layers=this.layers,this.add(c);let h=new En(nr,ir,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let h of t)this.remove(h);if(e===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,h,u]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,p,d),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},_o=class extends si{constructor(e,t,n,s,r,a,o,c,h,u){e=e!==void 0?e:[],t=t!==void 0?t:mr,super(e,t,n,s,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nc=class extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Jr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Us?jt:hi),this.texture=new _o(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ci}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kn(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Pi});r.uniforms.tEquirect.value=t;let a=new Oe(s,r),o=t.minFilter;return t.minFilter===ea&&(t.minFilter=ci),new tc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Dl=new Y,o0=new Y,l0=new Et,Hi=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Dl.subVectors(n,t).cross(o0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Dl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||l0.getNormalMatrix(e),s=this.coplanarPoint(Dl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rs=new ds,Xa=new Y,ia=class{constructor(e=new Hi,t=new Hi,n=new Hi,s=new Hi,r=new Hi,a=new Hi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],h=s[4],u=s[5],f=s[6],p=s[7],d=s[8],y=s[9],v=s[10],g=s[11],m=s[12],M=s[13],_=s[14],S=s[15];if(n[0].setComponents(c-r,p-h,g-d,S-m).normalize(),n[1].setComponents(c+r,p+h,g+d,S+m).normalize(),n[2].setComponents(c+a,p+u,g+y,S+M).normalize(),n[3].setComponents(c-a,p-u,g-y,S-M).normalize(),n[4].setComponents(c-o,p-f,g-v,S-_).normalize(),t===Vi)n[5].setComponents(c+o,p+f,g+v,S+_).normalize();else if(t===ho)n[5].setComponents(o,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){return Rs.center.set(0,0,0),Rs.radius=.7071067811865476,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Xa.x=s.normal.x>0?e.max.x:e.min.x,Xa.y=s.normal.y>0?e.max.y:e.min.y,Xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ed(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function c0(i,e){let t=e.isWebGL2,n=new WeakMap;function s(h,u){let f=h.array,p=h.usage,d=f.byteLength,y=i.createBuffer();i.bindBuffer(u,y),i.bufferData(u,f,p),h.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:y,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:d}}function r(h,u,f){let p=u.array,d=u._updateRange,y=u.updateRanges;if(i.bindBuffer(f,h),d.count===-1&&y.length===0&&i.bufferSubData(f,0,p),y.length!==0){for(let v=0,g=y.length;v<g;v++){let m=y[v];t?i.bufferSubData(f,m.start*p.BYTES_PER_ELEMENT,p,m.start,m.count):i.bufferSubData(f,m.start*p.BYTES_PER_ELEMENT,p.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(f,d.offset*p.BYTES_PER_ELEMENT,p,d.offset,d.count):i.bufferSubData(f,d.offset*p.BYTES_PER_ELEMENT,p.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let u=n.get(h);u&&(i.deleteBuffer(u.buffer),n.delete(h))}function c(h,u){if(h.isGLBufferAttribute){let p=n.get(h);(!p||p.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let f=n.get(h);if(f===void 0)n.set(h,s(h,u));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,h,u),f.version=h.version}}return{get:a,remove:o,update:c}}var ps=class i extends Gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),h=o+1,u=c+1,f=e/o,p=t/c,d=[],y=[],v=[],g=[];for(let m=0;m<u;m++){let M=m*p-a;for(let _=0;_<h;_++){let S=_*f-r;y.push(S,-M,0),v.push(0,0,1),g.push(_/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let M=0;M<o;M++){let _=M+h*m,S=M+h*(m+1),L=M+1+h*(m+1),R=M+1+h*m;d.push(_,S,R),d.push(S,L,R)}this.setIndex(d),this.setAttribute("position",new yt(y,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},h0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u0=`#ifdef USE_ALPHAHASH
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
#endif`,d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g0=`#ifdef USE_AOMAP
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
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y0=`#ifdef USE_BATCHING
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
#endif`,v0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w0=`#ifdef USE_IRIDESCENCE
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
#endif`,S0=`#ifdef USE_BUMPMAP
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,D0=`#define PI 3.141592653589793
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
} // validated`,z0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U0=`vec3 transformedNormal = objectNormal;
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
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`
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
}`,G0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,Y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$0=`#ifdef USE_GRADIENTMAP
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
}`,j0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
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
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lp=`PhysicalMaterial material;
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
#endif`,cp=`struct PhysicalMaterial {
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
}`,hp=`
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_p=`#if defined( USE_POINTS_UV )
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
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sp=`#ifdef USE_MORPHNORMALS
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
#endif`,Ep=`#ifdef USE_MORPHTARGETS
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
#endif`,Tp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lp=`#ifdef USE_NORMALMAP
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
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zp=`float getShadowMask() {
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
}`,Jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
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
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
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
}`,gm=`#if DEPTH_PACKING == 3200
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
}`,xm=`#define DISTANCE
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
}`,ym=`#define DISTANCE
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_m=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
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
}`,bm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Em=`#define LAMBERT
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
}`,Tm=`#define LAMBERT
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
}`,Am=`#define MATCAP
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define NORMAL
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
}`,Pm=`#define NORMAL
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
}`,Im=`#define PHONG
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
}`,Lm=`#define PHONG
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
}`,Dm=`#define STANDARD
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
}`,zm=`#define STANDARD
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
}`,Um=`#define TOON
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
}`,Nm=`#define TOON
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
}`,Om=`uniform float size;
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
}`,km=`uniform vec3 diffuse;
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
}`,Fm=`#include <common>
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
}`,Bm=`uniform vec3 color;
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
}`,Hm=`uniform float rotation;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:h0,alphahash_pars_fragment:u0,alphamap_fragment:d0,alphamap_pars_fragment:f0,alphatest_fragment:p0,alphatest_pars_fragment:m0,aomap_fragment:g0,aomap_pars_fragment:x0,batching_pars_vertex:y0,batching_vertex:v0,begin_vertex:_0,beginnormal_vertex:M0,bsdfs:b0,iridescence_fragment:w0,bumpmap_pars_fragment:S0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:R0,color_fragment:C0,color_pars_fragment:P0,color_pars_vertex:I0,color_vertex:L0,common:D0,cube_uv_reflection_fragment:z0,defaultnormal_vertex:U0,displacementmap_pars_vertex:N0,displacementmap_vertex:O0,emissivemap_fragment:k0,emissivemap_pars_fragment:F0,colorspace_fragment:B0,colorspace_pars_fragment:H0,envmap_fragment:G0,envmap_common_pars_fragment:V0,envmap_pars_fragment:W0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:ip,envmap_vertex:q0,fog_vertex:Y0,fog_pars_vertex:Z0,fog_fragment:J0,fog_pars_fragment:K0,gradientmap_pars_fragment:$0,lightmap_fragment:j0,lightmap_pars_fragment:Q0,lights_lambert_fragment:ep,lights_lambert_pars_fragment:tp,lights_pars_begin:np,lights_toon_fragment:sp,lights_toon_pars_fragment:rp,lights_phong_fragment:ap,lights_phong_pars_fragment:op,lights_physical_fragment:lp,lights_physical_pars_fragment:cp,lights_fragment_begin:hp,lights_fragment_maps:up,lights_fragment_end:dp,logdepthbuf_fragment:fp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:mp,logdepthbuf_vertex:gp,map_fragment:xp,map_pars_fragment:yp,map_particle_fragment:vp,map_particle_pars_fragment:_p,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:bp,morphcolor_vertex:wp,morphnormal_vertex:Sp,morphtarget_pars_vertex:Ep,morphtarget_vertex:Tp,normal_fragment_begin:Ap,normal_fragment_maps:Rp,normal_pars_fragment:Cp,normal_pars_vertex:Pp,normal_vertex:Ip,normalmap_pars_fragment:Lp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:zp,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Np,opaque_fragment:Op,packing:kp,premultiplied_alpha_fragment:Fp,project_vertex:Bp,dithering_fragment:Hp,dithering_pars_fragment:Gp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:qp,shadowmap_vertex:Yp,shadowmask_pars_fragment:Zp,skinbase_vertex:Jp,skinning_pars_vertex:Kp,skinning_vertex:$p,skinnormal_vertex:jp,specularmap_fragment:Qp,specularmap_pars_fragment:em,tonemapping_fragment:tm,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:am,uv_vertex:om,worldpos_vertex:lm,background_vert:cm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:dm,cube_vert:fm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distanceRGBA_vert:xm,distanceRGBA_frag:ym,equirect_vert:vm,equirect_frag:_m,linedashed_vert:Mm,linedashed_frag:bm,meshbasic_vert:wm,meshbasic_frag:Sm,meshlambert_vert:Em,meshlambert_frag:Tm,meshmatcap_vert:Am,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Pm,meshphong_vert:Im,meshphong_frag:Lm,meshphysical_vert:Dm,meshphysical_frag:zm,meshtoon_vert:Um,meshtoon_frag:Nm,points_vert:Om,points_frag:km,shadow_vert:Fm,shadow_frag:Bm,sprite_vert:Hm,sprite_frag:Gm},qe={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},Ci={basic:{uniforms:Vn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Vn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new rt(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Vn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Vn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Vn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new rt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Vn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Vn([qe.points,qe.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Vn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Vn([qe.common,qe.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Vn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Vn([qe.sprite,qe.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:Vn([qe.common,qe.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:Vn([qe.lights,qe.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Ci.physical={uniforms:Vn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};var qa={r:0,b:0,g:0};function Vm(i,e,t,n,s,r,a){let o=new rt(0),c=r===!0?0:1,h,u,f=null,p=0,d=null;function y(g,m){let M=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,c):_&&_.isColor&&(v(_,1),M=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Bo)?(u===void 0&&(u=new Oe(new Kn(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:yr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=Ft.getTransfer(_.colorSpace)!==Jt,(f!==_||p!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=_,p=_.version,d=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new Oe(new ps(2,2),new gn({name:"BackgroundMaterial",uniforms:yr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Ft.getTransfer(_.colorSpace)!==Jt,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=_,p=_.version,d=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null))}function v(g,m){g.getRGB(qa,Qu(i)),n.buffers.color.setClear(qa.r,qa.g,qa.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),c=m,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,v(o,c)},render:y}}function Wm(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=g(null),h=c,u=!1;function f(N,J,w,te,V){let G=!1;if(a){let we=v(te,w,J);h!==we&&(h=we,d(h.object)),G=m(N,te,w,V),G&&M(N,te,w,V)}else{let we=J.wireframe===!0;(h.geometry!==te.id||h.program!==w.id||h.wireframe!==we)&&(h.geometry=te.id,h.program=w.id,h.wireframe=we,G=!0)}V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(G||u)&&(u=!1,B(N,J,w,te),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function y(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function v(N,J,w){let te=w.wireframe===!0,V=o[N.id];V===void 0&&(V={},o[N.id]=V);let G=V[J.id];G===void 0&&(G={},V[J.id]=G);let we=G[te];return we===void 0&&(we=g(p()),G[te]=we),we}function g(N){let J=[],w=[],te=[];for(let V=0;V<s;V++)J[V]=0,w[V]=0,te[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:w,attributeDivisors:te,object:N,attributes:{},index:null}}function m(N,J,w,te){let V=h.attributes,G=J.attributes,we=0,le=w.getAttributes();for(let Ue in le)if(le[Ue].location>=0){let ye=V[Ue],Ae=G[Ue];if(Ae===void 0&&(Ue==="instanceMatrix"&&N.instanceMatrix&&(Ae=N.instanceMatrix),Ue==="instanceColor"&&N.instanceColor&&(Ae=N.instanceColor)),ye===void 0||ye.attribute!==Ae||Ae&&ye.data!==Ae.data)return!0;we++}return h.attributesNum!==we||h.index!==te}function M(N,J,w,te){let V={},G=J.attributes,we=0,le=w.getAttributes();for(let Ue in le)if(le[Ue].location>=0){let ye=G[Ue];ye===void 0&&(Ue==="instanceMatrix"&&N.instanceMatrix&&(ye=N.instanceMatrix),Ue==="instanceColor"&&N.instanceColor&&(ye=N.instanceColor));let Ae={};Ae.attribute=ye,ye&&ye.data&&(Ae.data=ye.data),V[Ue]=Ae,we++}h.attributes=V,h.attributesNum=we,h.index=te}function _(){let N=h.newAttributes;for(let J=0,w=N.length;J<w;J++)N[J]=0}function S(N){L(N,0)}function L(N,J){let w=h.newAttributes,te=h.enabledAttributes,V=h.attributeDivisors;w[N]=1,te[N]===0&&(i.enableVertexAttribArray(N),te[N]=1),V[N]!==J&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,J),V[N]=J)}function R(){let N=h.newAttributes,J=h.enabledAttributes;for(let w=0,te=J.length;w<te;w++)J[w]!==N[w]&&(i.disableVertexAttribArray(w),J[w]=0)}function A(N,J,w,te,V,G,we){we===!0?i.vertexAttribIPointer(N,J,w,V,G):i.vertexAttribPointer(N,J,w,te,V,G)}function B(N,J,w,te){if(n.isWebGL2===!1&&(N.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let V=te.attributes,G=w.getAttributes(),we=J.defaultAttributeValues;for(let le in G){let Ue=G[le];if(Ue.location>=0){let ce=V[le];if(ce===void 0&&(le==="instanceMatrix"&&N.instanceMatrix&&(ce=N.instanceMatrix),le==="instanceColor"&&N.instanceColor&&(ce=N.instanceColor)),ce!==void 0){let ye=ce.normalized,Ae=ce.itemSize,et=t.get(ce);if(et===void 0)continue;let We=et.buffer,at=et.type,ke=et.bytesPerElement,Ge=n.isWebGL2===!0&&(at===i.INT||at===i.UNSIGNED_INT||ce.gpuType===Gu);if(ce.isInterleavedBufferAttribute){let ot=ce.data,q=ot.stride,Le=ce.offset;if(ot.isInstancedInterleavedBuffer){for(let he=0;he<Ue.locationSize;he++)L(Ue.location+he,ot.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let he=0;he<Ue.locationSize;he++)S(Ue.location+he);i.bindBuffer(i.ARRAY_BUFFER,We);for(let he=0;he<Ue.locationSize;he++)A(Ue.location+he,Ae/Ue.locationSize,at,ye,q*ke,(Le+Ae/Ue.locationSize*he)*ke,Ge)}else{if(ce.isInstancedBufferAttribute){for(let ot=0;ot<Ue.locationSize;ot++)L(Ue.location+ot,ce.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ot=0;ot<Ue.locationSize;ot++)S(Ue.location+ot);i.bindBuffer(i.ARRAY_BUFFER,We);for(let ot=0;ot<Ue.locationSize;ot++)A(Ue.location+ot,Ae/Ue.locationSize,at,ye,Ae*ke,Ae/Ue.locationSize*ot*ke,Ge)}}else if(we!==void 0){let ye=we[le];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(Ue.location,ye);break;case 3:i.vertexAttrib3fv(Ue.location,ye);break;case 4:i.vertexAttrib4fv(Ue.location,ye);break;default:i.vertexAttrib1fv(Ue.location,ye)}}}}R()}function E(){O();for(let N in o){let J=o[N];for(let w in J){let te=J[w];for(let V in te)y(te[V].object),delete te[V];delete J[w]}delete o[N]}}function x(N){if(o[N.id]===void 0)return;let J=o[N.id];for(let w in J){let te=J[w];for(let V in te)y(te[V].object),delete te[V];delete J[w]}delete o[N.id]}function F(N){for(let J in o){let w=o[J];if(w[N.id]===void 0)continue;let te=w[N.id];for(let V in te)y(te[V].object),delete te[V];delete w[N.id]}}function O(){Q(),u=!0,h!==c&&(h=c,d(h.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:O,resetDefaultState:Q,dispose:E,releaseStatesOfGeometry:x,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:S,disableUnusedAttributes:R}}function Xm(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}function o(u,f){i.drawArrays(r,u,f),t.update(f,r,1)}function c(u,f,p){if(p===0)return;let d,y;if(s)d=i,y="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[y](r,u,f,p),t.update(f,r,p)}function h(u,f,p){if(p===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let y=0;y<p;y++)this.render(u[y],f[y]);else{d.multiDrawArraysWEBGL(r,u,0,f,0,p);let y=0;for(let v=0;v<p;v++)y+=f[v];t.update(y,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function qm(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let h=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,S=a||e.has("OES_texture_float"),L=_&&S,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:d,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:L,maxSamples:R}}function Ym(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Hi,o=new Et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let d=f.length!==0||p||n!==0||s;return s=p,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=u(f,p,0)},this.setState=function(f,p,d){let y=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||y===null||y.length===0||r&&!g)r?u(null):h();else{let M=r?0:n,_=M*4,S=m.clippingState||null;c.value=S,S=u(y,p,_,d);for(let L=0;L!==_;++L)S[L]=t[L];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,p,d,y){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=c.value,y!==!0||g===null){let m=d+v*4,M=p.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,S=d;_!==v;++_,S+=4)a.copy(f[_]).applyMatrix4(M,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Zm(i){let e=new WeakMap;function t(a,o){return o===Yl?a.mapping=mr:o===Zl&&(a.mapping=gr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Yl||o===Zl)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let h=new nc(c.height/2);return h.fromEquirectangularTexture(i,a),e.set(a,h),a.addEventListener("dispose",s),t(h.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var vr=class extends vo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hr=4,su=[.125,.215,.35,.446,.526,.582],Is=20,zl=new vr,ru=new rt,Ul=null,Nl=0,Ol=0,Cs=(1+Math.sqrt(5))/2,sr=1/Cs,au=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,Cs,sr),new Y(0,Cs,-sr),new Y(sr,0,Cs),new Y(-sr,0,Cs),new Y(Cs,sr,0),new Y(-Cs,sr,0)],ms=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul,Nl,Ol),e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mr||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Ol=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Mi,format:ii,colorSpace:Xi,depthBuffer:!1},s=ou(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ou(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(r)),this._blurMaterial=Km(r,e,t)}return s}_compileMaterial(e){let t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,zl)}_sceneToCubeUV(e,t,n,s){let o=new En(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(ru),u.toneMapping=Ii,u.autoClear=!1;let d=new Nt({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),y=new Oe(new Kn,d),v=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(ru),v=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(o.up.set(0,c[m],0),o.lookAt(h[m],0,0)):M===1?(o.up.set(0,0,c[m]),o.lookAt(0,h[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,h[m]));let _=this._cubeSize;Ya(s,M*_,m>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(y,o),u.render(e,o)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===mr||e.mapping===gr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Oe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Ya(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,zl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=au[(s-1)%au.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new Oe(this._lodPlanes[s],h),p=h.uniforms,d=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Is-1),v=r/y,g=isFinite(r)?1+Math.floor(u*v):Is;g>Is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Is}`);let m=[],M=0;for(let A=0;A<Is;++A){let B=A/v,E=Math.exp(-B*B/2);m.push(E),A===0?M+=E:A<g&&(M+=2*E)}for(let A=0;A<m.length;A++)m[A]=m[A]/M;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=m,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:_}=this;p.dTheta.value=y,p.mipInt.value=_-n;let S=this._sizeLods[s],L=3*S*(s>_-hr?s-_+hr:0),R=4*(this._cubeSize-S);Ya(t,L,R,3*S,2*S),c.setRenderTarget(t),c.render(f,zl)}};function Jm(i){let e=[],t=[],n=[],s=i,r=i-hr+1+su.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-hr?c=su[a-i+hr-1]:a===0&&(c=0),n.push(c);let h=1/(o-2),u=-h,f=1+h,p=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,y=6,v=3,g=2,m=1,M=new Float32Array(v*y*d),_=new Float32Array(g*y*d),S=new Float32Array(m*y*d);for(let R=0;R<d;R++){let A=R%3*2/3-1,B=R>2?0:-1,E=[A,B,0,A+2/3,B,0,A+2/3,B+1,0,A,B,0,A+2/3,B+1,0,A,B+1,0];M.set(E,v*y*R),_.set(p,g*y*R);let x=[R,R,R,R,R,R];S.set(x,m*y*R)}let L=new Gt;L.setAttribute("position",new mn(M,v)),L.setAttribute("uv",new mn(_,g)),L.setAttribute("faceIndex",new mn(S,m)),e.push(L),s>hr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ou(i,e,t){let n=new Wn(i,e,t);return n.texture.mapping=Bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ya(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Km(i,e,t){let n=new Float32Array(Is),s=new Y(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function lu(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function cu(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}function $m(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,h=c===Yl||c===Zl,u=c===mr||c===gr;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new ms(i)),f=h?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{let f=o.image;if(h&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new ms(i));let p=h?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let c=0,h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function r(o){let c=o.target;c.removeEventListener("dispose",r);let h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function jm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qm(i,e,t,n){let s={},r=new WeakMap;function a(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let y in p.attributes)e.remove(p.attributes[y]);for(let y in p.morphAttributes){let v=p.morphAttributes[y];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}p.removeEventListener("dispose",a),delete s[p.id];let d=r.get(p);d&&(e.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function c(f){let p=f.attributes;for(let y in p)e.update(p[y],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let y in d){let v=d[y];for(let g=0,m=v.length;g<m;g++)e.update(v[g],i.ARRAY_BUFFER)}}function h(f){let p=[],d=f.index,y=f.attributes.position,v=0;if(d!==null){let M=d.array;v=d.version;for(let _=0,S=M.length;_<S;_+=3){let L=M[_+0],R=M[_+1],A=M[_+2];p.push(L,R,R,A,A,L)}}else if(y!==void 0){let M=y.array;v=y.version;for(let _=0,S=M.length/3-1;_<S;_+=3){let L=_+0,R=_+1,A=_+2;p.push(L,R,R,A,A,L)}}else return;let g=new($u(p)?yo:xo)(p,1);g.version=v;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function u(f){let p=r.get(f);if(p){let d=f.index;d!==null&&p.version<d.version&&h(f)}else h(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function eg(i,e,t,n){let s=n.isWebGL2,r;function a(d){r=d}let o,c;function h(d){o=d.type,c=d.bytesPerElement}function u(d,y){i.drawElements(r,y,o,d*c),t.update(y,r,1)}function f(d,y,v){if(v===0)return;let g,m;if(s)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,y,o,d*c,v),t.update(y,r,v)}function p(d,y,v){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(d[m]/c,y[m]);else{g.multiDrawElementsWEBGL(r,y,0,o,d,0,v);let m=0;for(let M=0;M<v;M++)m+=y[M];t.update(m,r,1)}}this.setMode=a,this.setIndex=h,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function tg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ng(i,e){return i[0]-e[0]}function ig(i,e){return Math.abs(e[1])-Math.abs(i[1])}function sg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new tn,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function c(h,u,f){let p=h.morphTargetInfluences;if(e.isWebGL2===!0){let d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=d!==void 0?d.length:0,v=r.get(u);if(v===void 0||v.count!==y){let N=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",N)};v!==void 0&&v.texture.dispose();let M=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],A=u.morphAttributes.color||[],B=0;M===!0&&(B=1),_===!0&&(B=2),S===!0&&(B=3);let E=u.attributes.position.count*B,x=1;E>e.maxTextureSize&&(x=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let F=new Float32Array(E*x*4*y),O=new go(F,E,x,y);O.type=as,O.needsUpdate=!0;let Q=B*4;for(let J=0;J<y;J++){let w=L[J],te=R[J],V=A[J],G=E*x*4*J;for(let we=0;we<w.count;we++){let le=we*Q;M===!0&&(a.fromBufferAttribute(w,we),F[G+le+0]=a.x,F[G+le+1]=a.y,F[G+le+2]=a.z,F[G+le+3]=0),_===!0&&(a.fromBufferAttribute(te,we),F[G+le+4]=a.x,F[G+le+5]=a.y,F[G+le+6]=a.z,F[G+le+7]=0),S===!0&&(a.fromBufferAttribute(V,we),F[G+le+8]=a.x,F[G+le+9]=a.y,F[G+le+10]=a.z,F[G+le+11]=V.itemSize===4?a.w:1)}}v={count:y,texture:O,size:new Re(E,x)},r.set(u,v),u.addEventListener("dispose",N)}let g=0;for(let M=0;M<p.length;M++)g+=p[M];let m=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(i,"morphTargetBaseInfluence",m),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let d=p===void 0?0:p.length,y=n[u.id];if(y===void 0||y.length!==d){y=[];for(let _=0;_<d;_++)y[_]=[_,0];n[u.id]=y}for(let _=0;_<d;_++){let S=y[_];S[0]=_,S[1]=p[_]}y.sort(ig);for(let _=0;_<8;_++)_<d&&y[_][1]?(o[_][0]=y[_][0],o[_][1]=y[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(ng);let v=u.morphAttributes.position,g=u.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let S=o[_],L=S[0],R=S[1];L!==Number.MAX_SAFE_INTEGER&&R?(v&&u.getAttribute("morphTarget"+_)!==v[L]&&u.setAttribute("morphTarget"+_,v[L]),g&&u.getAttribute("morphNormal"+_)!==g[L]&&u.setAttribute("morphNormal"+_,g[L]),s[_]=R,m+=R):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),g&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}let M=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function rg(i,e,t,n){let s=new WeakMap;function r(c){let h=n.render.frame,u=c.geometry,f=e.get(c,u);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function a(){s=new WeakMap}function o(c){let h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}var Mo=class extends si{constructor(e,t,n,s,r,a,o,c,h,u){if(u=u!==void 0?u:zs,u!==zs&&u!==xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zs&&(n=rs),n===void 0&&u===xr&&(n=Ds),super(null,s,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Sn,this.minFilter=c!==void 0?c:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},td=new si,nd=new Mo(1,1);nd.compareFunction=Ku;var id=new go,sd=new ec,rd=new _o,hu=[],uu=[],du=new Float32Array(16),fu=new Float32Array(9),pu=new Float32Array(4);function Sr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=hu[s];if(r===void 0&&(r=new Float32Array(s),hu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function An(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vo(i,e){let t=uu[e];t===void 0&&(t=new Int32Array(e),uu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ag(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2fv(this.addr,e),An(t,e)}}function lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;i.uniform3fv(this.addr,e),An(t,e)}}function cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4fv(this.addr,e),An(t,e)}}function hg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,n))return;pu.set(n),i.uniformMatrix2fv(this.addr,!1,pu),An(t,n)}}function ug(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,n))return;fu.set(n),i.uniformMatrix3fv(this.addr,!1,fu),An(t,n)}}function dg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),An(t,e)}else{if(Tn(t,n))return;du.set(n),i.uniformMatrix4fv(this.addr,!1,du),An(t,n)}}function fg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2iv(this.addr,e),An(t,e)}}function mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;i.uniform3iv(this.addr,e),An(t,e)}}function gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4iv(this.addr,e),An(t,e)}}function xg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2uiv(this.addr,e),An(t,e)}}function vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;i.uniform3uiv(this.addr,e),An(t,e)}}function _g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4uiv(this.addr,e),An(t,e)}}function Mg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?nd:td;t.setTexture2D(e||r,s)}function bg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sd,s)}function wg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rd,s)}function Sg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||id,s)}function Eg(i){switch(i){case 5126:return ag;case 35664:return og;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return xg;case 36294:return yg;case 36295:return vg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Sg}}function Tg(i,e){i.uniform1fv(this.addr,e)}function Ag(i,e){let t=Sr(e,this.size,2);i.uniform2fv(this.addr,t)}function Rg(i,e){let t=Sr(e,this.size,3);i.uniform3fv(this.addr,t)}function Cg(i,e){let t=Sr(e,this.size,4);i.uniform4fv(this.addr,t)}function Pg(i,e){let t=Sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ig(i,e){let t=Sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Lg(i,e){let t=Sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Dg(i,e){i.uniform1iv(this.addr,e)}function zg(i,e){i.uniform2iv(this.addr,e)}function Ug(i,e){i.uniform3iv(this.addr,e)}function Ng(i,e){i.uniform4iv(this.addr,e)}function Og(i,e){i.uniform1uiv(this.addr,e)}function kg(i,e){i.uniform2uiv(this.addr,e)}function Fg(i,e){i.uniform3uiv(this.addr,e)}function Bg(i,e){i.uniform4uiv(this.addr,e)}function Hg(i,e,t){let n=this.cache,s=e.length,r=Vo(t,s);Tn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||td,r[a])}function Gg(i,e,t){let n=this.cache,s=e.length,r=Vo(t,s);Tn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||sd,r[a])}function Vg(i,e,t){let n=this.cache,s=e.length,r=Vo(t,s);Tn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||rd,r[a])}function Wg(i,e,t){let n=this.cache,s=e.length,r=Vo(t,s);Tn(n,r)||(i.uniform1iv(this.addr,r),An(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||id,r[a])}function Xg(i){switch(i){case 5126:return Tg;case 35664:return Ag;case 35665:return Rg;case 35666:return Cg;case 35674:return Pg;case 35675:return Ig;case 35676:return Lg;case 5124:case 35670:return Dg;case 35667:case 35671:return zg;case 35668:case 35672:return Ug;case 35669:case 35673:return Ng;case 5125:return Og;case 36294:return kg;case 36295:return Fg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Wg}}var ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Eg(t.type)}},sc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xg(t.type)}},rc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},kl=/(\w+)(\])?(\[|\.)?/g;function mu(i,e){i.seq.push(e),i.map[e.id]=e}function qg(i,e,t){let n=i.name,s=n.length;for(kl.lastIndex=0;;){let r=kl.exec(n),a=kl.lastIndex,o=r[1],c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){mu(t,h===void 0?new ic(o,i,e):new sc(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new rc(o),mu(t,f)),t=f}}}var pr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);qg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function gu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Yg=37297,Zg=0;function Jg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Kg(i){let e=Ft.getPrimaries(Ft.workingColorSpace),t=Ft.getPrimaries(i),n;switch(e===t?n="":e===co&&t===lo?n="LinearDisplayP3ToLinearSRGB":e===lo&&t===co&&(n="LinearSRGBToLinearDisplayP3"),i){case Xi:case Go:return[n,"LinearTransferOETF"];case jt:case Wc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function xu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Jg(i.getShaderSource(e),a)}else return s}function $g(i,e){let t=Kg(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jg(i,e){let t;switch(e){case Fc:t="Linear";break;case Bc:t="Reinhard";break;case Hc:t="OptimizedCineon";break;case pa:t="ACESFilmic";break;case Gc:t="AgX";break;case bf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Qg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ur).join(`
`)}function ex(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ur).join(`
`)}function tx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function nx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ur(i){return i!==""}function yu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function ac(i){return i.replace(ix,rx)}var sx=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rx(i,e){let t=wt[e];if(t===void 0){let n=sx.get(e);if(n!==void 0)t=wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ac(t)}var ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(i){return i.replace(ax,ox)}function ox(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===fa?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function cx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case mr:case gr:e="ENVMAP_TYPE_CUBE";break;case Bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hx(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===gr&&(e="ENVMAP_MODE_REFRACTION"),e}function ux(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kc:e="ENVMAP_BLENDING_MULTIPLY";break;case _f:e="ENVMAP_BLENDING_MIX";break;case Mf:e="ENVMAP_BLENDING_ADD";break}return e}function dx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=lx(t),h=cx(t),u=hx(t),f=ux(t),p=dx(t),d=t.isWebGL2?"":Qg(t),y=ex(t),v=tx(r),g=s.createProgram(),m,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ur).join(`
`),m.length>0&&(m+=`
`),M=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ur).join(`
`),M.length>0&&(M+=`
`)):(m=[Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),M=[d,Mu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?wt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?jg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,$g("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),a=ac(a),a=yu(a,t),a=vu(a,t),o=ac(o),o=yu(o,t),o=vu(o,t),a=_u(a),o=_u(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let S=_+m+a,L=_+M+o,R=gu(s,s.VERTEX_SHADER,S),A=gu(s,s.FRAGMENT_SHADER,L);s.attachShader(g,R),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function B(O){if(i.debug.checkShaderErrors){let Q=s.getProgramInfoLog(g).trim(),N=s.getShaderInfoLog(R).trim(),J=s.getShaderInfoLog(A).trim(),w=!0,te=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(w=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,R,A);else{let V=xu(s,R,"vertex"),G=xu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+V+`
`+G)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(N===""||J==="")&&(te=!1);te&&(O.diagnostics={runnable:w,programLog:Q,vertexShader:{log:N,prefix:m},fragmentShader:{log:J,prefix:M}})}s.deleteShader(R),s.deleteShader(A),E=new pr(s,g),x=nx(s,g)}let E;this.getUniforms=function(){return E===void 0&&B(this),E};let x;this.getAttributes=function(){return x===void 0&&B(this),x};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(g,Yg)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zg++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=A,this}var px=0,oc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new lc(e),t.set(e,n)),n}},lc=class{constructor(e){this.id=px++,this.code=e,this.usedTimes=0}};function mx(i,e,t,n,s,r,a){let o=new na,c=new oc,h=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,p=s.vertexTextures,d=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return E===0?"uv":`uv${E}`}function g(E,x,F,O,Q){let N=O.fog,J=Q.geometry,w=E.isMeshStandardMaterial?O.environment:null,te=(E.isMeshStandardMaterial?t:e).get(E.envMap||w),V=te&&te.mapping===Bo?te.image.height:null,G=y[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let we=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,le=we!==void 0?we.length:0,Ue=0;J.morphAttributes.position!==void 0&&(Ue=1),J.morphAttributes.normal!==void 0&&(Ue=2),J.morphAttributes.color!==void 0&&(Ue=3);let ce,ye,Ae,et;if(G){let Wt=Ci[G];ce=Wt.vertexShader,ye=Wt.fragmentShader}else ce=E.vertexShader,ye=E.fragmentShader,c.update(E),Ae=c.getVertexShaderID(E),et=c.getFragmentShaderID(E);let We=i.getRenderTarget(),at=Q.isInstancedMesh===!0,ke=Q.isBatchedMesh===!0,Ge=!!E.map,ot=!!E.matcap,q=!!te,Le=!!E.aoMap,he=!!E.lightMap,Ce=!!E.bumpMap,_e=!!E.normalMap,Ne=!!E.displacementMap,De=!!E.emissiveMap,z=!!E.metalnessMap,C=!!E.roughnessMap,ne=E.anisotropy>0,xe=E.clearcoat>0,Me=E.iridescence>0,Te=E.sheen>0,Ve=E.transmission>0,Fe=ne&&!!E.anisotropyMap,Ye=xe&&!!E.clearcoatMap,it=xe&&!!E.clearcoatNormalMap,ht=xe&&!!E.clearcoatRoughnessMap,ve=Me&&!!E.iridescenceMap,mt=Me&&!!E.iridescenceThicknessMap,ct=Te&&!!E.sheenColorMap,ut=Te&&!!E.sheenRoughnessMap,lt=!!E.specularMap,Ke=!!E.specularColorMap,Qe=!!E.specularIntensityMap,ft=Ve&&!!E.transmissionMap,Pt=Ve&&!!E.thicknessMap,pt=!!E.gradientMap,Pe=!!E.alphaMap,j=E.alphaTest>0,Be=!!E.alphaHash,He=!!E.extensions,st=!!J.attributes.uv1,je=!!J.attributes.uv2,_t=!!J.attributes.uv3,Ot=Ii;return E.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(Ot=i.toneMapping),{isWebGL2:u,shaderID:G,shaderType:E.type,shaderName:E.name,vertexShader:ce,fragmentShader:ye,defines:E.defines,customVertexShaderID:Ae,customFragmentShaderID:et,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:ke,instancing:at,instancingColor:at&&Q.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:We===null?i.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:Xi,map:Ge,matcap:ot,envMap:q,envMapMode:q&&te.mapping,envMapCubeUVHeight:V,aoMap:Le,lightMap:he,bumpMap:Ce,normalMap:_e,displacementMap:p&&Ne,emissiveMap:De,normalMapObjectSpace:_e&&E.normalMapType===zf,normalMapTangentSpace:_e&&E.normalMapType===Ho,metalnessMap:z,roughnessMap:C,anisotropy:ne,anisotropyMap:Fe,clearcoat:xe,clearcoatMap:Ye,clearcoatNormalMap:it,clearcoatRoughnessMap:ht,iridescence:Me,iridescenceMap:ve,iridescenceThicknessMap:mt,sheen:Te,sheenColorMap:ct,sheenRoughnessMap:ut,specularMap:lt,specularColorMap:Ke,specularIntensityMap:Qe,transmission:Ve,transmissionMap:ft,thicknessMap:Pt,gradientMap:pt,opaque:E.transparent===!1&&E.blending===os,alphaMap:Pe,alphaTest:j,alphaHash:Be,combine:E.combine,mapUv:Ge&&v(E.map.channel),aoMapUv:Le&&v(E.aoMap.channel),lightMapUv:he&&v(E.lightMap.channel),bumpMapUv:Ce&&v(E.bumpMap.channel),normalMapUv:_e&&v(E.normalMap.channel),displacementMapUv:Ne&&v(E.displacementMap.channel),emissiveMapUv:De&&v(E.emissiveMap.channel),metalnessMapUv:z&&v(E.metalnessMap.channel),roughnessMapUv:C&&v(E.roughnessMap.channel),anisotropyMapUv:Fe&&v(E.anisotropyMap.channel),clearcoatMapUv:Ye&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:it&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:ut&&v(E.sheenRoughnessMap.channel),specularMapUv:lt&&v(E.specularMap.channel),specularColorMapUv:Ke&&v(E.specularColorMap.channel),specularIntensityMapUv:Qe&&v(E.specularIntensityMap.channel),transmissionMapUv:ft&&v(E.transmissionMap.channel),thicknessMapUv:Pt&&v(E.thicknessMap.channel),alphaMapUv:Pe&&v(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(_e||ne),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUv1s:st,vertexUv2s:je,vertexUv3s:_t,pointsUvs:Q.isPoints===!0&&!!J.attributes.uv&&(Ge||Pe),fog:!!N,useFog:E.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ue,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ge&&E.map.isVideoTexture===!0&&Ft.getTransfer(E.map.colorSpace)===Jt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===$t,flipSided:E.side===pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:He&&E.extensions.derivatives===!0,extensionFragDepth:He&&E.extensions.fragDepth===!0,extensionDrawBuffers:He&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:He&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:He&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function m(E){let x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(let F in E.defines)x.push(F),x.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(M(x,E),_(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function M(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function _(E,x){o.disableAll(),x.isWebGL2&&o.enable(0),x.supportsVertexTextures&&o.enable(1),x.instancing&&o.enable(2),x.instancingColor&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),E.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.useLegacyLights&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function S(E){let x=y[E.type],F;if(x){let O=Ci[x];F=ys.clone(O.uniforms)}else F=E.uniforms;return F}function L(E,x){let F;for(let O=0,Q=h.length;O<Q;O++){let N=h[O];if(N.cacheKey===x){F=N,++F.usedTimes;break}}return F===void 0&&(F=new fx(i,x,E,r),h.push(F)),F}function R(E){if(--E.usedTimes===0){let x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function A(E){c.remove(E)}function B(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:S,acquireProgram:L,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:B}}function gx(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function xx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function wu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,p,d,y,v,g){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:p,material:d,groupOrder:y,renderOrder:f.renderOrder,z:v,group:g},i[e]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=d,m.groupOrder=y,m.renderOrder=f.renderOrder,m.z=v,m.group=g),e++,m}function o(f,p,d,y,v,g){let m=a(f,p,d,y,v,g);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):t.push(m)}function c(f,p,d,y,v,g){let m=a(f,p,d,y,v,g);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function h(f,p){t.length>1&&t.sort(f||xx),n.length>1&&n.sort(p||bu),s.length>1&&s.sort(p||bu)}function u(){for(let f=e,p=i.length;f<p;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:h}}function yx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new wu,i.set(n,[a])):s>=r.length?(a=new wu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function vx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new rt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[e.id]=t,t}}}function _x(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Mx=0;function bx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wx(i,e){let t=new vx,n=_x(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new Y);let r=new Y,a=new Ut,o=new Ut;function c(u,f){let p=0,d=0,y=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let v=0,g=0,m=0,M=0,_=0,S=0,L=0,R=0,A=0,B=0,E=0;u.sort(bx);let x=f===!0?Math.PI:1;for(let O=0,Q=u.length;O<Q;O++){let N=u[O],J=N.color,w=N.intensity,te=N.distance,V=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)p+=J.r*w*x,d+=J.g*w*x,y+=J.b*w*x;else if(N.isLightProbe){for(let G=0;G<9;G++)s.probe[G].addScaledVector(N.sh.coefficients[G],w);E++}else if(N.isDirectionalLight){let G=t.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity*x),N.castShadow){let we=N.shadow,le=n.get(N);le.shadowBias=we.bias,le.shadowNormalBias=we.normalBias,le.shadowRadius=we.radius,le.shadowMapSize=we.mapSize,s.directionalShadow[v]=le,s.directionalShadowMap[v]=V,s.directionalShadowMatrix[v]=N.shadow.matrix,S++}s.directional[v]=G,v++}else if(N.isSpotLight){let G=t.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(J).multiplyScalar(w*x),G.distance=te,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,s.spot[m]=G;let we=N.shadow;if(N.map&&(s.spotLightMap[A]=N.map,A++,we.updateMatrices(N),N.castShadow&&B++),s.spotLightMatrix[m]=we.matrix,N.castShadow){let le=n.get(N);le.shadowBias=we.bias,le.shadowNormalBias=we.normalBias,le.shadowRadius=we.radius,le.shadowMapSize=we.mapSize,s.spotShadow[m]=le,s.spotShadowMap[m]=V,R++}m++}else if(N.isRectAreaLight){let G=t.get(N);G.color.copy(J).multiplyScalar(w),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),s.rectArea[M]=G,M++}else if(N.isPointLight){let G=t.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity*x),G.distance=N.distance,G.decay=N.decay,N.castShadow){let we=N.shadow,le=n.get(N);le.shadowBias=we.bias,le.shadowNormalBias=we.normalBias,le.shadowRadius=we.radius,le.shadowMapSize=we.mapSize,le.shadowCameraNear=we.camera.near,le.shadowCameraFar=we.camera.far,s.pointShadow[g]=le,s.pointShadowMap[g]=V,s.pointShadowMatrix[g]=N.shadow.matrix,L++}s.point[g]=G,g++}else if(N.isHemisphereLight){let G=t.get(N);G.skyColor.copy(N.color).multiplyScalar(w*x),G.groundColor.copy(N.groundColor).multiplyScalar(w*x),s.hemi[_]=G,_++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=qe.LTC_FLOAT_1,s.rectAreaLTC2=qe.LTC_FLOAT_2):(s.rectAreaLTC1=qe.LTC_HALF_1,s.rectAreaLTC2=qe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=qe.LTC_FLOAT_1,s.rectAreaLTC2=qe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=qe.LTC_HALF_1,s.rectAreaLTC2=qe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=d,s.ambient[2]=y;let F=s.hash;(F.directionalLength!==v||F.pointLength!==g||F.spotLength!==m||F.rectAreaLength!==M||F.hemiLength!==_||F.numDirectionalShadows!==S||F.numPointShadows!==L||F.numSpotShadows!==R||F.numSpotMaps!==A||F.numLightProbes!==E)&&(s.directional.length=v,s.spot.length=m,s.rectArea.length=M,s.point.length=g,s.hemi.length=_,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=R+A-B,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=E,F.directionalLength=v,F.pointLength=g,F.spotLength=m,F.rectAreaLength=M,F.hemiLength=_,F.numDirectionalShadows=S,F.numPointShadows=L,F.numSpotShadows=R,F.numSpotMaps=A,F.numLightProbes=E,s.version=Mx++)}function h(u,f){let p=0,d=0,y=0,v=0,g=0,m=f.matrixWorldInverse;for(let M=0,_=u.length;M<_;M++){let S=u[M];if(S.isDirectionalLight){let L=s.directional[p];L.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(m),p++}else if(S.isSpotLight){let L=s.spot[y];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(m),L.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(m),y++}else if(S.isRectAreaLight){let L=s.rectArea[v];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(m),o.identity(),a.copy(S.matrixWorld),a.premultiply(m),o.extractRotation(a),L.halfWidth.set(S.width*.5,0,0),L.halfHeight.set(0,S.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){let L=s.point[d];L.position.setFromMatrixPosition(S.matrixWorld),L.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let L=s.hemi[g];L.direction.setFromMatrixPosition(S.matrixWorld),L.direction.transformDirection(m),g++}}}return{setup:c,setupView:h,state:s}}function Su(i,e){let t=new wx(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function c(f){t.setup(n,f)}function h(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}function Sx(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new Su(i,e),t.set(r,[c])):a>=o.length?(c=new Su(i,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var cc=class extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hc=class extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tx=`uniform sampler2D shadow_pass;
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
}`;function Ax(i,e,t){let n=new ia,s=new Re,r=new Re,a=new tn,o=new cc({depthPacking:Df}),c=new hc,h={},u=t.maxTextureSize,f={[hs]:pn,[pn]:hs,[$t]:$t},p=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:Ex,fragmentShader:Tx}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let y=new Gt;y.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Oe(y,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bu;let m=this.type;this.render=function(R,A,B){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let E=i.getRenderTarget(),x=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Pi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let Q=m!==Bi&&this.type===Bi,N=m===Bi&&this.type!==Bi;for(let J=0,w=R.length;J<w;J++){let te=R[J],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let G=V.getFrameExtents();if(s.multiply(G),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/G.x),s.x=r.x*G.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/G.y),s.y=r.y*G.y,V.mapSize.y=r.y)),V.map===null||Q===!0||N===!0){let le=this.type!==Bi?{minFilter:Sn,magFilter:Sn}:{};V.map!==null&&V.map.dispose(),V.map=new Wn(s.x,s.y,le),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let we=V.getViewportCount();for(let le=0;le<we;le++){let Ue=V.getViewport(le);a.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),O.viewport(a),V.updateMatrices(te,le),n=V.getFrustum(),S(A,B,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===Bi&&M(V,B),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(E,x,F)};function M(R,A){let B=e.update(v);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Wn(s.x,s.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,B,p,v,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,B,d,v,null)}function _(R,A,B,E){let x=null,F=B.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(F!==void 0)x=F;else if(x=B.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let O=x.uuid,Q=A.uuid,N=h[O];N===void 0&&(N={},h[O]=N);let J=N[Q];J===void 0&&(J=x.clone(),N[Q]=J,A.addEventListener("dispose",L)),x=J}if(x.visible=A.visible,x.wireframe=A.wireframe,E===Bi?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:f[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,B.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let O=i.properties.get(x);O.light=B}return x}function S(R,A,B,E,x){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Bi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld);let Q=e.update(R),N=R.material;if(Array.isArray(N)){let J=Q.groups;for(let w=0,te=J.length;w<te;w++){let V=J[w],G=N[V.materialIndex];if(G&&G.visible){let we=_(R,G,E,x);R.onBeforeShadow(i,R,A,B,Q,we,V),i.renderBufferDirect(B,null,Q,we,R,V),R.onAfterShadow(i,R,A,B,Q,we,V)}}}else if(N.visible){let J=_(R,N,E,x);R.onBeforeShadow(i,R,A,B,Q,J,null),i.renderBufferDirect(B,null,Q,J,R,null),R.onAfterShadow(i,R,A,B,Q,J,null)}}let O=R.children;for(let Q=0,N=O.length;Q<N;Q++)S(O[Q],A,B,E,x)}function L(R){R.target.removeEventListener("dispose",L);for(let B in h){let E=h[B],x=R.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}function Rx(i,e,t){let n=t.isWebGL2;function s(){let j=!1,Be=new tn,He=null,st=new tn(0,0,0,0);return{setMask:function(je){He!==je&&!j&&(i.colorMask(je,je,je,je),He=je)},setLocked:function(je){j=je},setClear:function(je,_t,Ot,kt,Wt){Wt===!0&&(je*=kt,_t*=kt,Ot*=kt),Be.set(je,_t,Ot,kt),st.equals(Be)===!1&&(i.clearColor(je,_t,Ot,kt),st.copy(Be))},reset:function(){j=!1,He=null,st.set(-1,0,0,0)}}}function r(){let j=!1,Be=null,He=null,st=null;return{setTest:function(je){je?ke(i.DEPTH_TEST):Ge(i.DEPTH_TEST)},setMask:function(je){Be!==je&&!j&&(i.depthMask(je),Be=je)},setFunc:function(je){if(He!==je){switch(je){case ff:i.depthFunc(i.NEVER);break;case pf:i.depthFunc(i.ALWAYS);break;case mf:i.depthFunc(i.LESS);break;case so:i.depthFunc(i.LEQUAL);break;case gf:i.depthFunc(i.EQUAL);break;case xf:i.depthFunc(i.GEQUAL);break;case yf:i.depthFunc(i.GREATER);break;case vf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}He=je}},setLocked:function(je){j=je},setClear:function(je){st!==je&&(i.clearDepth(je),st=je)},reset:function(){j=!1,Be=null,He=null,st=null}}}function a(){let j=!1,Be=null,He=null,st=null,je=null,_t=null,Ot=null,kt=null,Wt=null;return{setTest:function(It){j||(It?ke(i.STENCIL_TEST):Ge(i.STENCIL_TEST))},setMask:function(It){Be!==It&&!j&&(i.stencilMask(It),Be=It)},setFunc:function(It,Zt,At){(He!==It||st!==Zt||je!==At)&&(i.stencilFunc(It,Zt,At),He=It,st=Zt,je=At)},setOp:function(It,Zt,At){(_t!==It||Ot!==Zt||kt!==At)&&(i.stencilOp(It,Zt,At),_t=It,Ot=Zt,kt=At)},setLocked:function(It){j=It},setClear:function(It){Wt!==It&&(i.clearStencil(It),Wt=It)},reset:function(){j=!1,Be=null,He=null,st=null,je=null,_t=null,Ot=null,kt=null,Wt=null}}}let o=new s,c=new r,h=new a,u=new WeakMap,f=new WeakMap,p={},d={},y=new WeakMap,v=[],g=null,m=!1,M=null,_=null,S=null,L=null,R=null,A=null,B=null,E=new rt(0,0,0),x=0,F=!1,O=null,Q=null,N=null,J=null,w=null,te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,G=0,we=i.getParameter(i.VERSION);we.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(we)[1]),V=G>=1):we.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(we)[1]),V=G>=2);let le=null,Ue={},ce=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),Ae=new tn().fromArray(ce),et=new tn().fromArray(ye);function We(j,Be,He,st){let je=new Uint8Array(4),_t=i.createTexture();i.bindTexture(j,_t),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<He;Ot++)n&&(j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY)?i.texImage3D(Be,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,je):i.texImage2D(Be+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,je);return _t}let at={};at[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(at[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),h.setClear(0),ke(i.DEPTH_TEST),c.setFunc(so),De(!1),z(rh),ke(i.CULL_FACE),_e(Pi);function ke(j){p[j]!==!0&&(i.enable(j),p[j]=!0)}function Ge(j){p[j]!==!1&&(i.disable(j),p[j]=!1)}function ot(j,Be){return d[j]!==Be?(i.bindFramebuffer(j,Be),d[j]=Be,n&&(j===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Be),j===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Be)),!0):!1}function q(j,Be){let He=v,st=!1;if(j)if(He=y.get(Be),He===void 0&&(He=[],y.set(Be,He)),j.isWebGLMultipleRenderTargets){let je=j.texture;if(He.length!==je.length||He[0]!==i.COLOR_ATTACHMENT0){for(let _t=0,Ot=je.length;_t<Ot;_t++)He[_t]=i.COLOR_ATTACHMENT0+_t;He.length=je.length,st=!0}}else He[0]!==i.COLOR_ATTACHMENT0&&(He[0]=i.COLOR_ATTACHMENT0,st=!0);else He[0]!==i.BACK&&(He[0]=i.BACK,st=!0);st&&(t.isWebGL2?i.drawBuffers(He):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(He))}function Le(j){return g!==j?(i.useProgram(j),g=j,!0):!1}let he={[Ps]:i.FUNC_ADD,[$d]:i.FUNC_SUBTRACT,[jd]:i.FUNC_REVERSE_SUBTRACT};if(n)he[lh]=i.MIN,he[ch]=i.MAX;else{let j=e.get("EXT_blend_minmax");j!==null&&(he[lh]=j.MIN_EXT,he[ch]=j.MAX_EXT)}let Ce={[Qd]:i.ZERO,[ef]:i.ONE,[tf]:i.SRC_COLOR,[Xl]:i.SRC_ALPHA,[lf]:i.SRC_ALPHA_SATURATE,[af]:i.DST_COLOR,[sf]:i.DST_ALPHA,[nf]:i.ONE_MINUS_SRC_COLOR,[ql]:i.ONE_MINUS_SRC_ALPHA,[of]:i.ONE_MINUS_DST_COLOR,[rf]:i.ONE_MINUS_DST_ALPHA,[cf]:i.CONSTANT_COLOR,[hf]:i.ONE_MINUS_CONSTANT_COLOR,[uf]:i.CONSTANT_ALPHA,[df]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(j,Be,He,st,je,_t,Ot,kt,Wt,It){if(j===Pi){m===!0&&(Ge(i.BLEND),m=!1);return}if(m===!1&&(ke(i.BLEND),m=!0),j!==Kd){if(j!==M||It!==F){if((_!==Ps||R!==Ps)&&(i.blendEquation(i.FUNC_ADD),_=Ps,R=Ps),It)switch(j){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFunc(i.ONE,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}S=null,L=null,A=null,B=null,E.set(0,0,0),x=0,M=j,F=It}return}je=je||Be,_t=_t||He,Ot=Ot||st,(Be!==_||je!==R)&&(i.blendEquationSeparate(he[Be],he[je]),_=Be,R=je),(He!==S||st!==L||_t!==A||Ot!==B)&&(i.blendFuncSeparate(Ce[He],Ce[st],Ce[_t],Ce[Ot]),S=He,L=st,A=_t,B=Ot),(kt.equals(E)===!1||Wt!==x)&&(i.blendColor(kt.r,kt.g,kt.b,Wt),E.copy(kt),x=Wt),M=j,F=!1}function Ne(j,Be){j.side===$t?Ge(i.CULL_FACE):ke(i.CULL_FACE);let He=j.side===pn;Be&&(He=!He),De(He),j.blending===os&&j.transparent===!1?_e(Pi):_e(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),o.setMask(j.colorWrite);let st=j.stencilWrite;h.setTest(st),st&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),ne(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ke(i.SAMPLE_ALPHA_TO_COVERAGE):Ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(j){O!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),O=j)}function z(j){j!==Zd?(ke(i.CULL_FACE),j!==Q&&(j===rh?i.cullFace(i.BACK):j===Jd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ge(i.CULL_FACE),Q=j}function C(j){j!==N&&(V&&i.lineWidth(j),N=j)}function ne(j,Be,He){j?(ke(i.POLYGON_OFFSET_FILL),(J!==Be||w!==He)&&(i.polygonOffset(Be,He),J=Be,w=He)):Ge(i.POLYGON_OFFSET_FILL)}function xe(j){j?ke(i.SCISSOR_TEST):Ge(i.SCISSOR_TEST)}function Me(j){j===void 0&&(j=i.TEXTURE0+te-1),le!==j&&(i.activeTexture(j),le=j)}function Te(j,Be,He){He===void 0&&(le===null?He=i.TEXTURE0+te-1:He=le);let st=Ue[He];st===void 0&&(st={type:void 0,texture:void 0},Ue[He]=st),(st.type!==j||st.texture!==Be)&&(le!==He&&(i.activeTexture(He),le=He),i.bindTexture(j,Be||at[j]),st.type=j,st.texture=Be)}function Ve(){let j=Ue[le];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Fe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ye(){try{i.compressedTexImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ht(){try{i.texSubImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ve(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ct(){try{i.texStorage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function lt(){try{i.texImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ke(){try{i.texImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Qe(j){Ae.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),Ae.copy(j))}function ft(j){et.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),et.copy(j))}function Pt(j,Be){let He=f.get(Be);He===void 0&&(He=new WeakMap,f.set(Be,He));let st=He.get(j);st===void 0&&(st=i.getUniformBlockIndex(Be,j.name),He.set(j,st))}function pt(j,Be){let st=f.get(Be).get(j);u.get(Be)!==st&&(i.uniformBlockBinding(Be,st,j.__bindingPointIndex),u.set(Be,st))}function Pe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},le=null,Ue={},d={},y=new WeakMap,v=[],g=null,m=!1,M=null,_=null,S=null,L=null,R=null,A=null,B=null,E=new rt(0,0,0),x=0,F=!1,O=null,Q=null,N=null,J=null,w=null,Ae.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),h.reset()}return{buffers:{color:o,depth:c,stencil:h},enable:ke,disable:Ge,bindFramebuffer:ot,drawBuffers:q,useProgram:Le,setBlending:_e,setMaterial:Ne,setFlipSided:De,setCullFace:z,setLineWidth:C,setPolygonOffset:ne,setScissorTest:xe,activeTexture:Me,bindTexture:Te,unbindTexture:Ve,compressedTexImage2D:Fe,compressedTexImage3D:Ye,texImage2D:lt,texImage3D:Ke,updateUBOMapping:Pt,uniformBlockBinding:pt,texStorage2D:ct,texStorage3D:ut,texSubImage2D:it,texSubImage3D:ht,compressedTexSubImage2D:ve,compressedTexSubImage3D:mt,scissor:Qe,viewport:ft,reset:Pe}}function Cx(i,e,t,n,s,r,a){let o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,f,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(z,C){return d?new OffscreenCanvas(z,C):fo("canvas")}function v(z,C,ne,xe){let Me=1;if((z.width>xe||z.height>xe)&&(Me=xe/Math.max(z.width,z.height)),Me<1||C===!0)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap){let Te=C?jl:Math.floor,Ve=Te(Me*z.width),Fe=Te(Me*z.height);f===void 0&&(f=y(Ve,Fe));let Ye=ne?y(Ve,Fe):f;return Ye.width=Ve,Ye.height=Fe,Ye.getContext("2d").drawImage(z,0,0,Ve,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+Ve+"x"+Fe+")."),Ye}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),z;return z}function g(z){return Hh(z.width)&&Hh(z.height)}function m(z){return o?!1:z.wrapS!==_i||z.wrapT!==_i||z.minFilter!==Sn&&z.minFilter!==ci}function M(z,C){return z.generateMipmaps&&C&&z.minFilter!==Sn&&z.minFilter!==ci}function _(z){i.generateMipmap(z)}function S(z,C,ne,xe,Me=!1){if(o===!1)return C;if(z!==null){if(i[z]!==void 0)return i[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Te=C;if(C===i.RED&&(ne===i.FLOAT&&(Te=i.R32F),ne===i.HALF_FLOAT&&(Te=i.R16F),ne===i.UNSIGNED_BYTE&&(Te=i.R8)),C===i.RED_INTEGER&&(ne===i.UNSIGNED_BYTE&&(Te=i.R8UI),ne===i.UNSIGNED_SHORT&&(Te=i.R16UI),ne===i.UNSIGNED_INT&&(Te=i.R32UI),ne===i.BYTE&&(Te=i.R8I),ne===i.SHORT&&(Te=i.R16I),ne===i.INT&&(Te=i.R32I)),C===i.RG&&(ne===i.FLOAT&&(Te=i.RG32F),ne===i.HALF_FLOAT&&(Te=i.RG16F),ne===i.UNSIGNED_BYTE&&(Te=i.RG8)),C===i.RGBA){let Ve=Me?oo:Ft.getTransfer(xe);ne===i.FLOAT&&(Te=i.RGBA32F),ne===i.HALF_FLOAT&&(Te=i.RGBA16F),ne===i.UNSIGNED_BYTE&&(Te=Ve===Jt?i.SRGB8_ALPHA8:i.RGBA8),ne===i.UNSIGNED_SHORT_4_4_4_4&&(Te=i.RGBA4),ne===i.UNSIGNED_SHORT_5_5_5_1&&(Te=i.RGB5_A1)}return(Te===i.R16F||Te===i.R32F||Te===i.RG16F||Te===i.RG32F||Te===i.RGBA16F||Te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Te}function L(z,C,ne){return M(z,ne)===!0||z.isFramebufferTexture&&z.minFilter!==Sn&&z.minFilter!==ci?Math.log2(Math.max(C.width,C.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?C.mipmaps.length:1}function R(z){return z===Sn||z===hh||z===ll?i.NEAREST:i.LINEAR}function A(z){let C=z.target;C.removeEventListener("dispose",A),E(C),C.isVideoTexture&&u.delete(C)}function B(z){let C=z.target;C.removeEventListener("dispose",B),F(C)}function E(z){let C=n.get(z);if(C.__webglInit===void 0)return;let ne=z.source,xe=p.get(ne);if(xe){let Me=xe[C.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&x(z),Object.keys(xe).length===0&&p.delete(ne)}n.remove(z)}function x(z){let C=n.get(z);i.deleteTexture(C.__webglTexture);let ne=z.source,xe=p.get(ne);delete xe[C.__cacheKey],a.memory.textures--}function F(z){let C=z.texture,ne=n.get(z),xe=n.get(C);if(xe.__webglTexture!==void 0&&(i.deleteTexture(xe.__webglTexture),a.memory.textures--),z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(ne.__webglFramebuffer[Me]))for(let Te=0;Te<ne.__webglFramebuffer[Me].length;Te++)i.deleteFramebuffer(ne.__webglFramebuffer[Me][Te]);else i.deleteFramebuffer(ne.__webglFramebuffer[Me]);ne.__webglDepthbuffer&&i.deleteRenderbuffer(ne.__webglDepthbuffer[Me])}else{if(Array.isArray(ne.__webglFramebuffer))for(let Me=0;Me<ne.__webglFramebuffer.length;Me++)i.deleteFramebuffer(ne.__webglFramebuffer[Me]);else i.deleteFramebuffer(ne.__webglFramebuffer);if(ne.__webglDepthbuffer&&i.deleteRenderbuffer(ne.__webglDepthbuffer),ne.__webglMultisampledFramebuffer&&i.deleteFramebuffer(ne.__webglMultisampledFramebuffer),ne.__webglColorRenderbuffer)for(let Me=0;Me<ne.__webglColorRenderbuffer.length;Me++)ne.__webglColorRenderbuffer[Me]&&i.deleteRenderbuffer(ne.__webglColorRenderbuffer[Me]);ne.__webglDepthRenderbuffer&&i.deleteRenderbuffer(ne.__webglDepthRenderbuffer)}if(z.isWebGLMultipleRenderTargets)for(let Me=0,Te=C.length;Me<Te;Me++){let Ve=n.get(C[Me]);Ve.__webglTexture&&(i.deleteTexture(Ve.__webglTexture),a.memory.textures--),n.remove(C[Me])}n.remove(C),n.remove(z)}let O=0;function Q(){O=0}function N(){let z=O;return z>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),O+=1,z}function J(z){let C=[];return C.push(z.wrapS),C.push(z.wrapT),C.push(z.wrapR||0),C.push(z.magFilter),C.push(z.minFilter),C.push(z.anisotropy),C.push(z.internalFormat),C.push(z.format),C.push(z.type),C.push(z.generateMipmaps),C.push(z.premultiplyAlpha),C.push(z.flipY),C.push(z.unpackAlignment),C.push(z.colorSpace),C.join()}function w(z,C){let ne=n.get(z);if(z.isVideoTexture&&Ne(z),z.isRenderTargetTexture===!1&&z.version>0&&ne.__version!==z.version){let xe=z.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(ne,z,C);return}}t.bindTexture(i.TEXTURE_2D,ne.__webglTexture,i.TEXTURE0+C)}function te(z,C){let ne=n.get(z);if(z.version>0&&ne.__version!==z.version){Ae(ne,z,C);return}t.bindTexture(i.TEXTURE_2D_ARRAY,ne.__webglTexture,i.TEXTURE0+C)}function V(z,C){let ne=n.get(z);if(z.version>0&&ne.__version!==z.version){Ae(ne,z,C);return}t.bindTexture(i.TEXTURE_3D,ne.__webglTexture,i.TEXTURE0+C)}function G(z,C){let ne=n.get(z);if(z.version>0&&ne.__version!==z.version){et(ne,z,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture,i.TEXTURE0+C)}let we={[Qr]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[Jl]:i.MIRRORED_REPEAT},le={[Sn]:i.NEAREST,[hh]:i.NEAREST_MIPMAP_NEAREST,[ll]:i.NEAREST_MIPMAP_LINEAR,[ci]:i.LINEAR,[wf]:i.LINEAR_MIPMAP_NEAREST,[ea]:i.LINEAR_MIPMAP_LINEAR},Ue={[Uf]:i.NEVER,[Hf]:i.ALWAYS,[Nf]:i.LESS,[Ku]:i.LEQUAL,[Of]:i.EQUAL,[Bf]:i.GEQUAL,[kf]:i.GREATER,[Ff]:i.NOTEQUAL};function ce(z,C,ne){if(ne?(i.texParameteri(z,i.TEXTURE_WRAP_S,we[C.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,we[C.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,we[C.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,le[C.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,le[C.minFilter])):(i.texParameteri(z,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(z,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(C.wrapS!==_i||C.wrapT!==_i)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(z,i.TEXTURE_MAG_FILTER,R(C.magFilter)),i.texParameteri(z,i.TEXTURE_MIN_FILTER,R(C.minFilter)),C.minFilter!==Sn&&C.minFilter!==ci&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),C.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,Ue[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let xe=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===Sn||C.minFilter!==ll&&C.minFilter!==ea||C.type===as&&e.has("OES_texture_float_linear")===!1||o===!1&&C.type===Mi&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(i.texParameterf(z,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function ye(z,C){let ne=!1;z.__webglInit===void 0&&(z.__webglInit=!0,C.addEventListener("dispose",A));let xe=C.source,Me=p.get(xe);Me===void 0&&(Me={},p.set(xe,Me));let Te=J(C);if(Te!==z.__cacheKey){Me[Te]===void 0&&(Me[Te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ne=!0),Me[Te].usedTimes++;let Ve=Me[z.__cacheKey];Ve!==void 0&&(Me[z.__cacheKey].usedTimes--,Ve.usedTimes===0&&x(C)),z.__cacheKey=Te,z.__webglTexture=Me[Te].texture}return ne}function Ae(z,C,ne){let xe=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(xe=i.TEXTURE_3D);let Me=ye(z,C),Te=C.source;t.bindTexture(xe,z.__webglTexture,i.TEXTURE0+ne);let Ve=n.get(Te);if(Te.version!==Ve.__version||Me===!0){t.activeTexture(i.TEXTURE0+ne);let Fe=Ft.getPrimaries(Ft.workingColorSpace),Ye=C.colorSpace===hi?null:Ft.getPrimaries(C.colorSpace),it=C.colorSpace===hi||Fe===Ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ht=m(C)&&g(C.image)===!1,ve=v(C.image,ht,!1,s.maxTextureSize);ve=De(C,ve);let mt=g(ve)||o,ct=r.convert(C.format,C.colorSpace),ut=r.convert(C.type),lt=S(C.internalFormat,ct,ut,C.colorSpace,C.isVideoTexture);ce(xe,C,mt);let Ke,Qe=C.mipmaps,ft=o&&C.isVideoTexture!==!0&&lt!==Zu,Pt=Ve.__version===void 0||Me===!0,pt=L(C,ve,mt);if(C.isDepthTexture)lt=i.DEPTH_COMPONENT,o?C.type===as?lt=i.DEPTH_COMPONENT32F:C.type===rs?lt=i.DEPTH_COMPONENT24:C.type===Ds?lt=i.DEPTH24_STENCIL8:lt=i.DEPTH_COMPONENT16:C.type===as&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===zs&&lt===i.DEPTH_COMPONENT&&C.type!==Vc&&C.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=rs,ut=r.convert(C.type)),C.format===xr&&lt===i.DEPTH_COMPONENT&&(lt=i.DEPTH_STENCIL,C.type!==Ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Ds,ut=r.convert(C.type))),Pt&&(ft?t.texStorage2D(i.TEXTURE_2D,1,lt,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,lt,ve.width,ve.height,0,ct,ut,null));else if(C.isDataTexture)if(Qe.length>0&&mt){ft&&Pt&&t.texStorage2D(i.TEXTURE_2D,pt,lt,Qe[0].width,Qe[0].height);for(let Pe=0,j=Qe.length;Pe<j;Pe++)Ke=Qe[Pe],ft?t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,Ke.width,Ke.height,ct,ut,Ke.data):t.texImage2D(i.TEXTURE_2D,Pe,lt,Ke.width,Ke.height,0,ct,ut,Ke.data);C.generateMipmaps=!1}else ft?(Pt&&t.texStorage2D(i.TEXTURE_2D,pt,lt,ve.width,ve.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve.width,ve.height,ct,ut,ve.data)):t.texImage2D(i.TEXTURE_2D,0,lt,ve.width,ve.height,0,ct,ut,ve.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ft&&Pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,lt,Qe[0].width,Qe[0].height,ve.depth);for(let Pe=0,j=Qe.length;Pe<j;Pe++)Ke=Qe[Pe],C.format!==ii?ct!==null?ft?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,0,Ke.width,Ke.height,ve.depth,ct,Ke.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Pe,lt,Ke.width,Ke.height,ve.depth,0,Ke.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Pe,0,0,0,Ke.width,Ke.height,ve.depth,ct,ut,Ke.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Pe,lt,Ke.width,Ke.height,ve.depth,0,ct,ut,Ke.data)}else{ft&&Pt&&t.texStorage2D(i.TEXTURE_2D,pt,lt,Qe[0].width,Qe[0].height);for(let Pe=0,j=Qe.length;Pe<j;Pe++)Ke=Qe[Pe],C.format!==ii?ct!==null?ft?t.compressedTexSubImage2D(i.TEXTURE_2D,Pe,0,0,Ke.width,Ke.height,ct,Ke.data):t.compressedTexImage2D(i.TEXTURE_2D,Pe,lt,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,Ke.width,Ke.height,ct,ut,Ke.data):t.texImage2D(i.TEXTURE_2D,Pe,lt,Ke.width,Ke.height,0,ct,ut,Ke.data)}else if(C.isDataArrayTexture)ft?(Pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,lt,ve.width,ve.height,ve.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,ct,ut,ve.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,lt,ve.width,ve.height,ve.depth,0,ct,ut,ve.data);else if(C.isData3DTexture)ft?(Pt&&t.texStorage3D(i.TEXTURE_3D,pt,lt,ve.width,ve.height,ve.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,ct,ut,ve.data)):t.texImage3D(i.TEXTURE_3D,0,lt,ve.width,ve.height,ve.depth,0,ct,ut,ve.data);else if(C.isFramebufferTexture){if(Pt)if(ft)t.texStorage2D(i.TEXTURE_2D,pt,lt,ve.width,ve.height);else{let Pe=ve.width,j=ve.height;for(let Be=0;Be<pt;Be++)t.texImage2D(i.TEXTURE_2D,Be,lt,Pe,j,0,ct,ut,null),Pe>>=1,j>>=1}}else if(Qe.length>0&&mt){ft&&Pt&&t.texStorage2D(i.TEXTURE_2D,pt,lt,Qe[0].width,Qe[0].height);for(let Pe=0,j=Qe.length;Pe<j;Pe++)Ke=Qe[Pe],ft?t.texSubImage2D(i.TEXTURE_2D,Pe,0,0,ct,ut,Ke):t.texImage2D(i.TEXTURE_2D,Pe,lt,ct,ut,Ke);C.generateMipmaps=!1}else ft?(Pt&&t.texStorage2D(i.TEXTURE_2D,pt,lt,ve.width,ve.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,ut,ve)):t.texImage2D(i.TEXTURE_2D,0,lt,ct,ut,ve);M(C,mt)&&_(xe),Ve.__version=Te.version,C.onUpdate&&C.onUpdate(C)}z.__version=C.version}function et(z,C,ne){if(C.image.length!==6)return;let xe=ye(z,C),Me=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+ne);let Te=n.get(Me);if(Me.version!==Te.__version||xe===!0){t.activeTexture(i.TEXTURE0+ne);let Ve=Ft.getPrimaries(Ft.workingColorSpace),Fe=C.colorSpace===hi?null:Ft.getPrimaries(C.colorSpace),Ye=C.colorSpace===hi||Ve===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let it=C.isCompressedTexture||C.image[0].isCompressedTexture,ht=C.image[0]&&C.image[0].isDataTexture,ve=[];for(let Pe=0;Pe<6;Pe++)!it&&!ht?ve[Pe]=v(C.image[Pe],!1,!0,s.maxCubemapSize):ve[Pe]=ht?C.image[Pe].image:C.image[Pe],ve[Pe]=De(C,ve[Pe]);let mt=ve[0],ct=g(mt)||o,ut=r.convert(C.format,C.colorSpace),lt=r.convert(C.type),Ke=S(C.internalFormat,ut,lt,C.colorSpace),Qe=o&&C.isVideoTexture!==!0,ft=Te.__version===void 0||xe===!0,Pt=L(C,mt,ct);ce(i.TEXTURE_CUBE_MAP,C,ct);let pt;if(it){Qe&&ft&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Ke,mt.width,mt.height);for(let Pe=0;Pe<6;Pe++){pt=ve[Pe].mipmaps;for(let j=0;j<pt.length;j++){let Be=pt[j];C.format!==ii?ut!==null?Qe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,j,0,0,Be.width,Be.height,ut,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,j,Ke,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,j,0,0,Be.width,Be.height,ut,lt,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,j,Ke,Be.width,Be.height,0,ut,lt,Be.data)}}}else{pt=C.mipmaps,Qe&&ft&&(pt.length>0&&Pt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,Ke,ve[0].width,ve[0].height));for(let Pe=0;Pe<6;Pe++)if(ht){Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ve[Pe].width,ve[Pe].height,ut,lt,ve[Pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ke,ve[Pe].width,ve[Pe].height,0,ut,lt,ve[Pe].data);for(let j=0;j<pt.length;j++){let He=pt[j].image[Pe].image;Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,j+1,0,0,He.width,He.height,ut,lt,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,j+1,Ke,He.width,He.height,0,ut,lt,He.data)}}else{Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ut,lt,ve[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ke,ut,lt,ve[Pe]);for(let j=0;j<pt.length;j++){let Be=pt[j];Qe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,j+1,0,0,ut,lt,Be.image[Pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,j+1,Ke,ut,lt,Be.image[Pe])}}}M(C,ct)&&_(i.TEXTURE_CUBE_MAP),Te.__version=Me.version,C.onUpdate&&C.onUpdate(C)}z.__version=C.version}function We(z,C,ne,xe,Me,Te){let Ve=r.convert(ne.format,ne.colorSpace),Fe=r.convert(ne.type),Ye=S(ne.internalFormat,Ve,Fe,ne.colorSpace);if(!n.get(C).__hasExternalTextures){let ht=Math.max(1,C.width>>Te),ve=Math.max(1,C.height>>Te);Me===i.TEXTURE_3D||Me===i.TEXTURE_2D_ARRAY?t.texImage3D(Me,Te,Ye,ht,ve,C.depth,0,Ve,Fe,null):t.texImage2D(Me,Te,Ye,ht,ve,0,Ve,Fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,z),_e(C)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,Me,n.get(ne).__webglTexture,0,Ce(C)):(Me===i.TEXTURE_2D||Me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,Me,n.get(ne).__webglTexture,Te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(z,C,ne){if(i.bindRenderbuffer(i.RENDERBUFFER,z),C.depthBuffer&&!C.stencilBuffer){let xe=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(ne||_e(C)){let Me=C.depthTexture;Me&&Me.isDepthTexture&&(Me.type===as?xe=i.DEPTH_COMPONENT32F:Me.type===rs&&(xe=i.DEPTH_COMPONENT24));let Te=Ce(C);_e(C)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,xe,C.width,C.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,xe,C.width,C.height)}else i.renderbufferStorage(i.RENDERBUFFER,xe,C.width,C.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,z)}else if(C.depthBuffer&&C.stencilBuffer){let xe=Ce(C);ne&&_e(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,C.width,C.height):_e(C)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,z)}else{let xe=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let Me=0;Me<xe.length;Me++){let Te=xe[Me],Ve=r.convert(Te.format,Te.colorSpace),Fe=r.convert(Te.type),Ye=S(Te.internalFormat,Ve,Fe,Te.colorSpace),it=Ce(C);ne&&_e(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Ye,C.width,C.height):_e(C)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,Ye,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Ye,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(z,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,z),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),w(C.depthTexture,0);let xe=n.get(C.depthTexture).__webglTexture,Me=Ce(C);if(C.depthTexture.format===zs)_e(C)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(C.depthTexture.format===xr)_e(C)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Ge(z){let C=n.get(z),ne=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!C.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");ke(C.__webglFramebuffer,z)}else if(ne){C.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[xe]),C.__webglDepthbuffer[xe]=i.createRenderbuffer(),at(C.__webglDepthbuffer[xe],z,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=i.createRenderbuffer(),at(C.__webglDepthbuffer,z,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(z,C,ne){let xe=n.get(z);C!==void 0&&We(xe.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ne!==void 0&&Ge(z)}function q(z){let C=z.texture,ne=n.get(z),xe=n.get(C);z.addEventListener("dispose",B),z.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=C.version,a.memory.textures++);let Me=z.isWebGLCubeRenderTarget===!0,Te=z.isWebGLMultipleRenderTargets===!0,Ve=g(z)||o;if(Me){ne.__webglFramebuffer=[];for(let Fe=0;Fe<6;Fe++)if(o&&C.mipmaps&&C.mipmaps.length>0){ne.__webglFramebuffer[Fe]=[];for(let Ye=0;Ye<C.mipmaps.length;Ye++)ne.__webglFramebuffer[Fe][Ye]=i.createFramebuffer()}else ne.__webglFramebuffer[Fe]=i.createFramebuffer()}else{if(o&&C.mipmaps&&C.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Fe=0;Fe<C.mipmaps.length;Fe++)ne.__webglFramebuffer[Fe]=i.createFramebuffer()}else ne.__webglFramebuffer=i.createFramebuffer();if(Te)if(s.drawBuffers){let Fe=z.texture;for(let Ye=0,it=Fe.length;Ye<it;Ye++){let ht=n.get(Fe[Ye]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&z.samples>0&&_e(z)===!1){let Fe=Te?C:[C];ne.__webglMultisampledFramebuffer=i.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Ye=0;Ye<Fe.length;Ye++){let it=Fe[Ye];ne.__webglColorRenderbuffer[Ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ne.__webglColorRenderbuffer[Ye]);let ht=r.convert(it.format,it.colorSpace),ve=r.convert(it.type),mt=S(it.internalFormat,ht,ve,it.colorSpace,z.isXRRenderTarget===!0),ct=Ce(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,mt,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,ne.__webglColorRenderbuffer[Ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(ne.__webglDepthRenderbuffer=i.createRenderbuffer(),at(ne.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),ce(i.TEXTURE_CUBE_MAP,C,Ve);for(let Fe=0;Fe<6;Fe++)if(o&&C.mipmaps&&C.mipmaps.length>0)for(let Ye=0;Ye<C.mipmaps.length;Ye++)We(ne.__webglFramebuffer[Fe][Ye],z,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Ye);else We(ne.__webglFramebuffer[Fe],z,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0);M(C,Ve)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){let Fe=z.texture;for(let Ye=0,it=Fe.length;Ye<it;Ye++){let ht=Fe[Ye],ve=n.get(ht);t.bindTexture(i.TEXTURE_2D,ve.__webglTexture),ce(i.TEXTURE_2D,ht,Ve),We(ne.__webglFramebuffer,z,ht,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,0),M(ht,Ve)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Fe=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(o?Fe=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Fe,xe.__webglTexture),ce(Fe,C,Ve),o&&C.mipmaps&&C.mipmaps.length>0)for(let Ye=0;Ye<C.mipmaps.length;Ye++)We(ne.__webglFramebuffer[Ye],z,C,i.COLOR_ATTACHMENT0,Fe,Ye);else We(ne.__webglFramebuffer,z,C,i.COLOR_ATTACHMENT0,Fe,0);M(C,Ve)&&_(Fe),t.unbindTexture()}z.depthBuffer&&Ge(z)}function Le(z){let C=g(z)||o,ne=z.isWebGLMultipleRenderTargets===!0?z.texture:[z.texture];for(let xe=0,Me=ne.length;xe<Me;xe++){let Te=ne[xe];if(M(Te,C)){let Ve=z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Fe=n.get(Te).__webglTexture;t.bindTexture(Ve,Fe),_(Ve),t.unbindTexture()}}}function he(z){if(o&&z.samples>0&&_e(z)===!1){let C=z.isWebGLMultipleRenderTargets?z.texture:[z.texture],ne=z.width,xe=z.height,Me=i.COLOR_BUFFER_BIT,Te=[],Ve=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(z),Ye=z.isWebGLMultipleRenderTargets===!0;if(Ye)for(let it=0;it<C.length;it++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let it=0;it<C.length;it++){Te.push(i.COLOR_ATTACHMENT0+it),z.depthBuffer&&Te.push(Ve);let ht=Fe.__ignoreDepthValues!==void 0?Fe.__ignoreDepthValues:!1;if(ht===!1&&(z.depthBuffer&&(Me|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&(Me|=i.STENCIL_BUFFER_BIT)),Ye&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[it]),ht===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ve]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ve])),Ye){let ve=n.get(C[it]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ve,0)}i.blitFramebuffer(0,0,ne,xe,0,0,ne,xe,Me,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ye)for(let it=0;it<C.length;it++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[it]);let ht=n.get(C[it]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.TEXTURE_2D,ht,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}}function Ce(z){return Math.min(s.maxSamples,z.samples)}function _e(z){let C=n.get(z);return o&&z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ne(z){let C=a.render.frame;u.get(z)!==C&&(u.set(z,C),z.update())}function De(z,C){let ne=z.colorSpace,xe=z.format,Me=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||z.format===$l||ne!==Xi&&ne!==hi&&(Ft.getTransfer(ne)===Jt?o===!1?e.has("EXT_sRGB")===!0&&xe===ii?(z.format=$l,z.minFilter=ci,z.generateMipmaps=!1):C=po.sRGBToLinear(C):(xe!==ii||Me!==ls)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),C}this.allocateTextureUnit=N,this.resetTextureUnits=Q,this.setTexture2D=w,this.setTexture2DArray=te,this.setTexture3D=V,this.setTextureCube=G,this.rebindTextures=ot,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=We,this.useMultisampledRTT=_e}function Px(i,e,t){let n=t.isWebGL2;function s(r,a=hi){let o,c=Ft.getTransfer(a);if(r===ls)return i.UNSIGNED_BYTE;if(r===Vu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Wu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Sf)return i.BYTE;if(r===Ef)return i.SHORT;if(r===Vc)return i.UNSIGNED_SHORT;if(r===Gu)return i.INT;if(r===rs)return i.UNSIGNED_INT;if(r===as)return i.FLOAT;if(r===Mi)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Tf)return i.ALPHA;if(r===ii)return i.RGBA;if(r===Af)return i.LUMINANCE;if(r===Rf)return i.LUMINANCE_ALPHA;if(r===zs)return i.DEPTH_COMPONENT;if(r===xr)return i.DEPTH_STENCIL;if(r===$l)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Cf)return i.RED;if(r===Xu)return i.RED_INTEGER;if(r===Pf)return i.RG;if(r===qu)return i.RG_INTEGER;if(r===Yu)return i.RGBA_INTEGER;if(r===cl||r===hl||r===ul||r===dl)if(c===Jt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===cl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ul)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===cl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ul)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===dl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uh||r===dh||r===fh||r===ph)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===uh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===dh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ph)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===mh||r===gh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===mh)return c===Jt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===gh)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xh||r===yh||r===vh||r===_h||r===Mh||r===bh||r===wh||r===Sh||r===Eh||r===Th||r===Ah||r===Rh||r===Ch||r===Ph)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===xh)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===yh)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vh)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===_h)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Mh)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bh)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===wh)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sh)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Eh)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Th)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ah)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rh)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ch)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ph)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fl||r===Ih||r===Lh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===fl)return c===Jt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ih)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===If||r===Dh||r===zh||r===Uh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===fl)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Dh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ds?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var uc=class extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},xt=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ix={type:"move"},Kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(h,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],p=u.position.distanceTo(f.position),d=.02,y=.005;h.inputState.pinching&&p>d+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=d-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ix)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dc=class extends us{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,f=null,p=null,d=null,y=null,v=t.getContextAttributes(),g=null,m=null,M=[],_=[],S=new Re,L=null,R=new En;R.layers.enable(1),R.viewport=new tn;let A=new En;A.layers.enable(2),A.viewport=new tn;let B=[R,A],E=new uc;E.layers.enable(1),E.layers.enable(2);let x=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let ye=M[ce];return ye===void 0&&(ye=new Kr,M[ce]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ce){let ye=M[ce];return ye===void 0&&(ye=new Kr,M[ce]=ye),ye.getGripSpace()},this.getHand=function(ce){let ye=M[ce];return ye===void 0&&(ye=new Kr,M[ce]=ye),ye.getHandSpace()};function O(ce){let ye=_.indexOf(ce.inputSource);if(ye===-1)return;let Ae=M[ye];Ae!==void 0&&(Ae.update(ce.inputSource,ce.frame,h||a),Ae.dispatchEvent({type:ce.type,data:ce.inputSource}))}function Q(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",N);for(let ce=0;ce<M.length;ce++){let ye=_[ce];ye!==null&&(_[ce]=null,M[ce].disconnect(ye))}x=null,F=null,e.setRenderTarget(g),d=null,p=null,f=null,s=null,m=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){r=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){o=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ce){h=ce},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(ce){if(s=ce,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(S),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ye={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new Wn(d.framebufferWidth,d.framebufferHeight,{format:ii,type:ls,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ye=null,Ae=null,et=null;v.depth&&(et=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=v.stencil?xr:zs,Ae=v.stencil?Ds:rs);let We={colorFormat:t.RGBA8,depthFormat:et,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(We),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),m=new Wn(p.textureWidth,p.textureHeight,{format:ii,type:ls,depthTexture:new Mo(p.textureWidth,p.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let at=e.properties.get(m);at.__ignoreDepthValues=p.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(ce){for(let ye=0;ye<ce.removed.length;ye++){let Ae=ce.removed[ye],et=_.indexOf(Ae);et>=0&&(_[et]=null,M[et].disconnect(Ae))}for(let ye=0;ye<ce.added.length;ye++){let Ae=ce.added[ye],et=_.indexOf(Ae);if(et===-1){for(let at=0;at<M.length;at++)if(at>=_.length){_.push(Ae),et=at;break}else if(_[at]===null){_[at]=Ae,et=at;break}if(et===-1)break}let We=M[et];We&&We.connect(Ae)}}let J=new Y,w=new Y;function te(ce,ye,Ae){J.setFromMatrixPosition(ye.matrixWorld),w.setFromMatrixPosition(Ae.matrixWorld);let et=J.distanceTo(w),We=ye.projectionMatrix.elements,at=Ae.projectionMatrix.elements,ke=We[14]/(We[10]-1),Ge=We[14]/(We[10]+1),ot=(We[9]+1)/We[5],q=(We[9]-1)/We[5],Le=(We[8]-1)/We[0],he=(at[8]+1)/at[0],Ce=ke*Le,_e=ke*he,Ne=et/(-Le+he),De=Ne*-Le;ye.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(De),ce.translateZ(Ne),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert();let z=ke+Ne,C=Ge+Ne,ne=Ce-De,xe=_e+(et-De),Me=ot*Ge/C*z,Te=q*Ge/C*z;ce.projectionMatrix.makePerspective(ne,xe,Me,Te,z,C),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}function V(ce,ye){ye===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(ye.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(s===null)return;E.near=A.near=R.near=ce.near,E.far=A.far=R.far=ce.far,(x!==E.near||F!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),x=E.near,F=E.far);let ye=ce.parent,Ae=E.cameras;V(E,ye);for(let et=0;et<Ae.length;et++)V(Ae[et],ye);Ae.length===2?te(E,R,A):E.projectionMatrix.copy(R.projectionMatrix),G(ce,E,ye)};function G(ce,ye,Ae){Ae===null?ce.matrix.copy(ye.matrixWorld):(ce.matrix.copy(Ae.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(ye.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(ye.projectionMatrix),ce.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=uo*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(ce){c=ce,p!==null&&(p.fixedFoveation=ce),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ce)};let we=null;function le(ce,ye){if(u=ye.getViewerPose(h||a),y=ye,u!==null){let Ae=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let et=!1;Ae.length!==E.cameras.length&&(E.cameras.length=0,et=!0);for(let We=0;We<Ae.length;We++){let at=Ae[We],ke=null;if(d!==null)ke=d.getViewport(at);else{let ot=f.getViewSubImage(p,at);ke=ot.viewport,We===0&&(e.setRenderTargetTextures(m,ot.colorTexture,p.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(m))}let Ge=B[We];Ge===void 0&&(Ge=new En,Ge.layers.enable(We),Ge.viewport=new tn,B[We]=Ge),Ge.matrix.fromArray(at.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(at.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ke.x,ke.y,ke.width,ke.height),We===0&&(E.matrix.copy(Ge.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),et===!0&&E.cameras.push(Ge)}}for(let Ae=0;Ae<M.length;Ae++){let et=_[Ae],We=M[Ae];et!==null&&We!==void 0&&We.update(et,ye,h||a)}we&&we(ce,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),y=null}let Ue=new ed;Ue.setAnimationLoop(le),this.setAnimationLoop=function(ce){we=ce},this.dispose=function(){}}};function Lx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Qu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,_,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),p(g,m),m.isMeshPhysicalMaterial&&d(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),y(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,M,_):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===pn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===pn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*_,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,M,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dx(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,_){let S=_.program;n.uniformBlockBinding(M,S)}function h(M,_){let S=s[M.id];S===void 0&&(y(M),S=u(M),s[M.id]=S,M.addEventListener("dispose",g));let L=_.program;n.updateUBOMapping(M,L);let R=e.render.frame;r[M.id]!==R&&(p(M),r[M.id]=R)}function u(M){let _=f();M.__bindingPointIndex=_;let S=i.createBuffer(),L=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,S),S}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){let _=s[M.id],S=M.uniforms,L=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let R=0,A=S.length;R<A;R++){let B=Array.isArray(S[R])?S[R]:[S[R]];for(let E=0,x=B.length;E<x;E++){let F=B[E];if(d(F,R,E,L)===!0){let O=F.__offset,Q=Array.isArray(F.value)?F.value:[F.value],N=0;for(let J=0;J<Q.length;J++){let w=Q[J],te=v(w);typeof w=="number"||typeof w=="boolean"?(F.__data[0]=w,i.bufferSubData(i.UNIFORM_BUFFER,O+N,F.__data)):w.isMatrix3?(F.__data[0]=w.elements[0],F.__data[1]=w.elements[1],F.__data[2]=w.elements[2],F.__data[3]=0,F.__data[4]=w.elements[3],F.__data[5]=w.elements[4],F.__data[6]=w.elements[5],F.__data[7]=0,F.__data[8]=w.elements[6],F.__data[9]=w.elements[7],F.__data[10]=w.elements[8],F.__data[11]=0):(w.toArray(F.__data,N),N+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,_,S,L){let R=M.value,A=_+"_"+S;if(L[A]===void 0)return typeof R=="number"||typeof R=="boolean"?L[A]=R:L[A]=R.clone(),!0;{let B=L[A];if(typeof R=="number"||typeof R=="boolean"){if(B!==R)return L[A]=R,!0}else if(B.equals(R)===!1)return B.copy(R),!0}return!1}function y(M){let _=M.uniforms,S=0,L=16;for(let A=0,B=_.length;A<B;A++){let E=Array.isArray(_[A])?_[A]:[_[A]];for(let x=0,F=E.length;x<F;x++){let O=E[x],Q=Array.isArray(O.value)?O.value:[O.value];for(let N=0,J=Q.length;N<J;N++){let w=Q[N],te=v(w),V=S%L;V!==0&&L-V<te.boundary&&(S+=L-V),O.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=te.storage}}}let R=S%L;return R>0&&(S+=L-R),M.__size=S,M.__cache={},this}function v(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){let _=M.target;_.removeEventListener("dispose",g);let S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:h,dispose:m}}var Ns=class{constructor(e={}){let{canvas:t=Vf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;let d=new Uint32Array(4),y=new Int32Array(4),v=null,g=null,m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jt,this._useLegacyLights=!1,this.toneMapping=Ii,this.toneMappingExposure=1;let _=this,S=!1,L=0,R=0,A=null,B=-1,E=null,x=new tn,F=new tn,O=null,Q=new rt(0),N=0,J=t.width,w=t.height,te=1,V=null,G=null,we=new tn(0,0,J,w),le=new tn(0,0,J,w),Ue=!1,ce=new ia,ye=!1,Ae=!1,et=null,We=new Ut,at=new Re,ke=new Y,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return A===null?te:1}let q=n;function Le(U,ee){for(let se=0;se<U.length;se++){let re=U[se],ue=t.getContext(re,ee);if(ue!==null)return ue}return null}try{let U={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",Be,!1),q===null){let ee=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&ee.shift(),q=Le(ee,U),q===null)throw Le(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let he,Ce,_e,Ne,De,z,C,ne,xe,Me,Te,Ve,Fe,Ye,it,ht,ve,mt,ct,ut,lt,Ke,Qe,ft;function Pt(){he=new jm(q),Ce=new qm(q,he,e),he.init(Ce),Ke=new Px(q,he,Ce),_e=new Rx(q,he,Ce),Ne=new tg(q),De=new gx,z=new Cx(q,he,_e,De,Ce,Ke,Ne),C=new Zm(_),ne=new $m(_),xe=new c0(q,Ce),Qe=new Wm(q,he,xe,Ce),Me=new Qm(q,xe,Ne,Qe),Te=new rg(q,Me,xe,Ne),ct=new sg(q,Ce,z),ht=new Ym(De),Ve=new mx(_,C,ne,he,Ce,Qe,ht),Fe=new Lx(_,De),Ye=new yx,it=new Sx(he,Ce),mt=new Vm(_,C,ne,_e,Te,p,c),ve=new Ax(_,Te,Ce),ft=new Dx(q,Ne,Ce,_e),ut=new Xm(q,he,Ne,Ce),lt=new eg(q,he,Ne,Ce),Ne.programs=Ve.programs,_.capabilities=Ce,_.extensions=he,_.properties=De,_.renderLists=Ye,_.shadowMap=ve,_.state=_e,_.info=Ne}Pt();let pt=new dc(_,q);this.xr=pt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let U=he.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=he.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(U){U!==void 0&&(te=U,this.setSize(J,w,!1))},this.getSize=function(U){return U.set(J,w)},this.setSize=function(U,ee,se=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=U,w=ee,t.width=Math.floor(U*te),t.height=Math.floor(ee*te),se===!0&&(t.style.width=U+"px",t.style.height=ee+"px"),this.setViewport(0,0,U,ee)},this.getDrawingBufferSize=function(U){return U.set(J*te,w*te).floor()},this.setDrawingBufferSize=function(U,ee,se){J=U,w=ee,te=se,t.width=Math.floor(U*se),t.height=Math.floor(ee*se),this.setViewport(0,0,U,ee)},this.getCurrentViewport=function(U){return U.copy(x)},this.getViewport=function(U){return U.copy(we)},this.setViewport=function(U,ee,se,re){U.isVector4?we.set(U.x,U.y,U.z,U.w):we.set(U,ee,se,re),_e.viewport(x.copy(we).multiplyScalar(te).floor())},this.getScissor=function(U){return U.copy(le)},this.setScissor=function(U,ee,se,re){U.isVector4?le.set(U.x,U.y,U.z,U.w):le.set(U,ee,se,re),_e.scissor(F.copy(le).multiplyScalar(te).floor())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(U){_e.setScissorTest(Ue=U)},this.setOpaqueSort=function(U){V=U},this.setTransparentSort=function(U){G=U},this.getClearColor=function(U){return U.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(U=!0,ee=!0,se=!0){let re=0;if(U){let ue=!1;if(A!==null){let Je=A.texture.format;ue=Je===Yu||Je===qu||Je===Xu}if(ue){let Je=A.texture.type,P=Je===ls||Je===rs||Je===Vc||Je===Ds||Je===Vu||Je===Wu,W=mt.getClearColor(),K=mt.getClearAlpha(),Ee=W.r,Se=W.g,I=W.b;P?(d[0]=Ee,d[1]=Se,d[2]=I,d[3]=K,q.clearBufferuiv(q.COLOR,0,d)):(y[0]=Ee,y[1]=Se,y[2]=I,y[3]=K,q.clearBufferiv(q.COLOR,0,y))}else re|=q.COLOR_BUFFER_BIT}ee&&(re|=q.DEPTH_BUFFER_BIT),se&&(re|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),Ye.dispose(),it.dispose(),De.dispose(),C.dispose(),ne.dispose(),Te.dispose(),Qe.dispose(),ft.dispose(),Ve.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Wt),pt.removeEventListener("sessionend",It),et&&(et.dispose(),et=null),Zt.stop()};function Pe(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let U=Ne.autoReset,ee=ve.enabled,se=ve.autoUpdate,re=ve.needsUpdate,ue=ve.type;Pt(),Ne.autoReset=U,ve.enabled=ee,ve.autoUpdate=se,ve.needsUpdate=re,ve.type=ue}function Be(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function He(U){let ee=U.target;ee.removeEventListener("dispose",He),st(ee)}function st(U){je(U),De.remove(U)}function je(U){let ee=De.get(U).programs;ee!==void 0&&(ee.forEach(function(se){Ve.releaseProgram(se)}),U.isShaderMaterial&&Ve.releaseShaderCache(U))}this.renderBufferDirect=function(U,ee,se,re,ue,Je){ee===null&&(ee=Ge);let P=ue.isMesh&&ue.matrixWorld.determinant()<0,W=Xt(U,ee,se,re,ue);_e.setMaterial(re,P);let K=se.index,Ee=1;if(re.wireframe===!0){if(K=Me.getWireframeAttribute(se),K===void 0)return;Ee=2}let Se=se.drawRange,I=se.attributes.position,Z=Se.start*Ee,ie=(Se.start+Se.count)*Ee;Je!==null&&(Z=Math.max(Z,Je.start*Ee),ie=Math.min(ie,(Je.start+Je.count)*Ee)),K!==null?(Z=Math.max(Z,0),ie=Math.min(ie,K.count)):I!=null&&(Z=Math.max(Z,0),ie=Math.min(ie,I.count));let $=ie-Z;if($<0||$===1/0)return;Qe.setup(ue,re,W,se,K);let be,me=ut;if(K!==null&&(be=xe.get(K),me=lt,me.setIndex(be)),ue.isMesh)re.wireframe===!0?(_e.setLineWidth(re.wireframeLinewidth*ot()),me.setMode(q.LINES)):me.setMode(q.TRIANGLES);else if(ue.isLine){let fe=re.linewidth;fe===void 0&&(fe=1),_e.setLineWidth(fe*ot()),ue.isLineSegments?me.setMode(q.LINES):ue.isLineLoop?me.setMode(q.LINE_LOOP):me.setMode(q.LINE_STRIP)}else ue.isPoints?me.setMode(q.POINTS):ue.isSprite&&me.setMode(q.TRIANGLES);if(ue.isBatchedMesh)me.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else if(ue.isInstancedMesh)me.renderInstances(Z,$,ue.count);else if(se.isInstancedBufferGeometry){let fe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Xe=Math.min(se.instanceCount,fe);me.renderInstances(Z,$,Xe)}else me.render(Z,$)};function _t(U,ee,se){U.transparent===!0&&U.side===$t&&U.forceSinglePass===!1?(U.side=pn,U.needsUpdate=!0,Yn(U,ee,se),U.side=hs,U.needsUpdate=!0,Yn(U,ee,se),U.side=$t):Yn(U,ee,se)}this.compile=function(U,ee,se=null){se===null&&(se=U),g=it.get(se),g.init(),M.push(g),se.traverseVisible(function(ue){ue.isLight&&ue.layers.test(ee.layers)&&(g.pushLight(ue),ue.castShadow&&g.pushShadow(ue))}),U!==se&&U.traverseVisible(function(ue){ue.isLight&&ue.layers.test(ee.layers)&&(g.pushLight(ue),ue.castShadow&&g.pushShadow(ue))}),g.setupLights(_._useLegacyLights);let re=new Set;return U.traverse(function(ue){let Je=ue.material;if(Je)if(Array.isArray(Je))for(let P=0;P<Je.length;P++){let W=Je[P];_t(W,se,ue),re.add(W)}else _t(Je,se,ue),re.add(Je)}),M.pop(),g=null,re},this.compileAsync=function(U,ee,se=null){let re=this.compile(U,ee,se);return new Promise(ue=>{function Je(){if(re.forEach(function(P){De.get(P).currentProgram.isReady()&&re.delete(P)}),re.size===0){ue(U);return}setTimeout(Je,10)}he.get("KHR_parallel_shader_compile")!==null?Je():setTimeout(Je,10)})};let Ot=null;function kt(U){Ot&&Ot(U)}function Wt(){Zt.stop()}function It(){Zt.start()}let Zt=new ed;Zt.setAnimationLoop(kt),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(U){Ot=U,pt.setAnimationLoop(U),U===null?Zt.stop():Zt.start()},pt.addEventListener("sessionstart",Wt),pt.addEventListener("sessionend",It),this.render=function(U,ee){if(ee!==void 0&&ee.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(ee),ee=pt.getCamera()),U.isScene===!0&&U.onBeforeRender(_,U,ee,A),g=it.get(U,M.length),g.init(),M.push(g),We.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),ce.setFromProjectionMatrix(We),Ae=this.localClippingEnabled,ye=ht.init(this.clippingPlanes,Ae),v=Ye.get(U,m.length),v.init(),m.push(v),At(U,ee,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(V,G),this.info.render.frame++,ye===!0&&ht.beginShadows();let se=g.state.shadowsArray;if(ve.render(se,U,ee),ye===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),mt.render(v,U),g.setupLights(_._useLegacyLights),ee.isArrayCamera){let re=ee.cameras;for(let ue=0,Je=re.length;ue<Je;ue++){let P=re[ue];rn(v,U,P,P.viewport)}}else rn(v,U,ee);A!==null&&(z.updateMultisampleRenderTarget(A),z.updateRenderTargetMipmap(A)),U.isScene===!0&&U.onAfterRender(_,U,ee),Qe.resetDefaultState(),B=-1,E=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function At(U,ee,se,re){if(U.visible===!1)return;if(U.layers.test(ee.layers)){if(U.isGroup)se=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(ee);else if(U.isLight)g.pushLight(U),U.castShadow&&g.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||ce.intersectsSprite(U)){re&&ke.setFromMatrixPosition(U.matrixWorld).applyMatrix4(We);let P=Te.update(U),W=U.material;W.visible&&v.push(U,P,W,se,ke.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||ce.intersectsObject(U))){let P=Te.update(U),W=U.material;if(re&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),ke.copy(U.boundingSphere.center)):(P.boundingSphere===null&&P.computeBoundingSphere(),ke.copy(P.boundingSphere.center)),ke.applyMatrix4(U.matrixWorld).applyMatrix4(We)),Array.isArray(W)){let K=P.groups;for(let Ee=0,Se=K.length;Ee<Se;Ee++){let I=K[Ee],Z=W[I.materialIndex];Z&&Z.visible&&v.push(U,P,Z,se,ke.z,I)}}else W.visible&&v.push(U,P,W,se,ke.z,null)}}let Je=U.children;for(let P=0,W=Je.length;P<W;P++)At(Je[P],ee,se,re)}function rn(U,ee,se,re){let ue=U.opaque,Je=U.transmissive,P=U.transparent;g.setupLightsView(se),ye===!0&&ht.setGlobalState(_.clippingPlanes,se),Je.length>0&&Rt(ue,Je,ee,se),re&&_e.viewport(x.copy(re)),ue.length>0&&gi(ue,ee,se),Je.length>0&&gi(Je,ee,se),P.length>0&&gi(P,ee,se),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Rt(U,ee,se,re){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;let Je=Ce.isWebGL2;et===null&&(et=new Wn(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?Mi:ls,minFilter:ea,samples:Je?4:0})),_.getDrawingBufferSize(at),Je?et.setSize(at.x,at.y):et.setSize(jl(at.x),jl(at.y));let P=_.getRenderTarget();_.setRenderTarget(et),_.getClearColor(Q),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear();let W=_.toneMapping;_.toneMapping=Ii,gi(U,se,re),z.updateMultisampleRenderTarget(et),z.updateRenderTargetMipmap(et);let K=!1;for(let Ee=0,Se=ee.length;Ee<Se;Ee++){let I=ee[Ee],Z=I.object,ie=I.geometry,$=I.material,be=I.group;if($.side===$t&&Z.layers.test(re.layers)){let me=$.side;$.side=pn,$.needsUpdate=!0,zn(Z,se,re,ie,$,be),$.side=me,$.needsUpdate=!0,K=!0}}K===!0&&(z.updateMultisampleRenderTarget(et),z.updateRenderTargetMipmap(et)),_.setRenderTarget(P),_.setClearColor(Q,N),_.toneMapping=W}function gi(U,ee,se){let re=ee.isScene===!0?ee.overrideMaterial:null;for(let ue=0,Je=U.length;ue<Je;ue++){let P=U[ue],W=P.object,K=P.geometry,Ee=re===null?P.material:re,Se=P.group;W.layers.test(se.layers)&&zn(W,ee,se,K,Ee,Se)}}function zn(U,ee,se,re,ue,Je){U.onBeforeRender(_,ee,se,re,ue,Je),U.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ue.onBeforeRender(_,ee,se,re,U,Je),ue.transparent===!0&&ue.side===$t&&ue.forceSinglePass===!1?(ue.side=pn,ue.needsUpdate=!0,_.renderBufferDirect(se,ee,re,ue,U,Je),ue.side=hs,ue.needsUpdate=!0,_.renderBufferDirect(se,ee,re,ue,U,Je),ue.side=$t):_.renderBufferDirect(se,ee,re,ue,U,Je),U.onAfterRender(_,ee,se,re,ue,Je)}function Yn(U,ee,se){ee.isScene!==!0&&(ee=Ge);let re=De.get(U),ue=g.state.lights,Je=g.state.shadowsArray,P=ue.state.version,W=Ve.getParameters(U,ue.state,Je,ee,se),K=Ve.getProgramCacheKey(W),Ee=re.programs;re.environment=U.isMeshStandardMaterial?ee.environment:null,re.fog=ee.fog,re.envMap=(U.isMeshStandardMaterial?ne:C).get(U.envMap||re.environment),Ee===void 0&&(U.addEventListener("dispose",He),Ee=new Map,re.programs=Ee);let Se=Ee.get(K);if(Se!==void 0){if(re.currentProgram===Se&&re.lightsStateVersion===P)return Un(U,W),Se}else W.uniforms=Ve.getUniforms(U),U.onBuild(se,W,_),U.onBeforeCompile(W,_),Se=Ve.acquireProgram(W,K),Ee.set(K,Se),re.uniforms=W.uniforms;let I=re.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(I.clippingPlanes=ht.uniform),Un(U,W),re.needsLights=Ht(U),re.lightsStateVersion=P,re.needsLights&&(I.ambientLightColor.value=ue.state.ambient,I.lightProbe.value=ue.state.probe,I.directionalLights.value=ue.state.directional,I.directionalLightShadows.value=ue.state.directionalShadow,I.spotLights.value=ue.state.spot,I.spotLightShadows.value=ue.state.spotShadow,I.rectAreaLights.value=ue.state.rectArea,I.ltc_1.value=ue.state.rectAreaLTC1,I.ltc_2.value=ue.state.rectAreaLTC2,I.pointLights.value=ue.state.point,I.pointLightShadows.value=ue.state.pointShadow,I.hemisphereLights.value=ue.state.hemi,I.directionalShadowMap.value=ue.state.directionalShadowMap,I.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,I.spotShadowMap.value=ue.state.spotShadowMap,I.spotLightMatrix.value=ue.state.spotLightMatrix,I.spotLightMap.value=ue.state.spotLightMap,I.pointShadowMap.value=ue.state.pointShadowMap,I.pointShadowMatrix.value=ue.state.pointShadowMatrix),re.currentProgram=Se,re.uniformsList=null,Se}function Cn(U){if(U.uniformsList===null){let ee=U.currentProgram.getUniforms();U.uniformsList=pr.seqWithValue(ee.seq,U.uniforms)}return U.uniformsList}function Un(U,ee){let se=De.get(U);se.outputColorSpace=ee.outputColorSpace,se.batching=ee.batching,se.instancing=ee.instancing,se.instancingColor=ee.instancingColor,se.skinning=ee.skinning,se.morphTargets=ee.morphTargets,se.morphNormals=ee.morphNormals,se.morphColors=ee.morphColors,se.morphTargetsCount=ee.morphTargetsCount,se.numClippingPlanes=ee.numClippingPlanes,se.numIntersection=ee.numClipIntersection,se.vertexAlphas=ee.vertexAlphas,se.vertexTangents=ee.vertexTangents,se.toneMapping=ee.toneMapping}function Xt(U,ee,se,re,ue){ee.isScene!==!0&&(ee=Ge),z.resetTextureUnits();let Je=ee.fog,P=re.isMeshStandardMaterial?ee.environment:null,W=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Xi,K=(re.isMeshStandardMaterial?ne:C).get(re.envMap||P),Ee=re.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Se=!!se.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),I=!!se.morphAttributes.position,Z=!!se.morphAttributes.normal,ie=!!se.morphAttributes.color,$=Ii;re.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&($=_.toneMapping);let be=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,me=be!==void 0?be.length:0,fe=De.get(re),Xe=g.state.lights;if(ye===!0&&(Ae===!0||U!==E)){let qt=U===E&&re.id===B;ht.setState(re,U,qt)}let tt=!1;re.version===fe.__version?(fe.needsLights&&fe.lightsStateVersion!==Xe.state.version||fe.outputColorSpace!==W||ue.isBatchedMesh&&fe.batching===!1||!ue.isBatchedMesh&&fe.batching===!0||ue.isInstancedMesh&&fe.instancing===!1||!ue.isInstancedMesh&&fe.instancing===!0||ue.isSkinnedMesh&&fe.skinning===!1||!ue.isSkinnedMesh&&fe.skinning===!0||ue.isInstancedMesh&&fe.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&fe.instancingColor===!1&&ue.instanceColor!==null||fe.envMap!==K||re.fog===!0&&fe.fog!==Je||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==ht.numPlanes||fe.numIntersection!==ht.numIntersection)||fe.vertexAlphas!==Ee||fe.vertexTangents!==Se||fe.morphTargets!==I||fe.morphNormals!==Z||fe.morphColors!==ie||fe.toneMapping!==$||Ce.isWebGL2===!0&&fe.morphTargetsCount!==me)&&(tt=!0):(tt=!0,fe.__version=re.version);let vt=fe.currentProgram;tt===!0&&(vt=Yn(re,ee,ue));let St=!1,Mt=!1,Mn=!1,Lt=vt.getUniforms(),Ct=fe.uniforms;if(_e.useProgram(vt.program)&&(St=!0,Mt=!0,Mn=!0),re.id!==B&&(B=re.id,Mt=!0),St||E!==U){Lt.setValue(q,"projectionMatrix",U.projectionMatrix),Lt.setValue(q,"viewMatrix",U.matrixWorldInverse);let qt=Lt.map.cameraPosition;qt!==void 0&&qt.setValue(q,ke.setFromMatrixPosition(U.matrixWorld)),Ce.logarithmicDepthBuffer&&Lt.setValue(q,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Lt.setValue(q,"isOrthographic",U.isOrthographicCamera===!0),E!==U&&(E=U,Mt=!0,Mn=!0)}if(ue.isSkinnedMesh){Lt.setOptional(q,ue,"bindMatrix"),Lt.setOptional(q,ue,"bindMatrixInverse");let qt=ue.skeleton;qt&&(Ce.floatVertexTextures?(qt.boneTexture===null&&qt.computeBoneTexture(),Lt.setValue(q,"boneTexture",qt.boneTexture,z)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ue.isBatchedMesh&&(Lt.setOptional(q,ue,"batchingTexture"),Lt.setValue(q,"batchingTexture",ue._matricesTexture,z));let un=se.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0&&Ce.isWebGL2===!0)&&ct.update(ue,se,vt),(Mt||fe.receiveShadow!==ue.receiveShadow)&&(fe.receiveShadow=ue.receiveShadow,Lt.setValue(q,"receiveShadow",ue.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Ct.envMap.value=K,Ct.flipEnvMap.value=K.isCubeTexture&&K.isRenderTargetTexture===!1?-1:1),Mt&&(Lt.setValue(q,"toneMappingExposure",_.toneMappingExposure),fe.needsLights&&_n(Ct,Mn),Je&&re.fog===!0&&Fe.refreshFogUniforms(Ct,Je),Fe.refreshMaterialUniforms(Ct,re,te,w,et),pr.upload(q,Cn(fe),Ct,z)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(pr.upload(q,Cn(fe),Ct,z),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Lt.setValue(q,"center",ue.center),Lt.setValue(q,"modelViewMatrix",ue.modelViewMatrix),Lt.setValue(q,"normalMatrix",ue.normalMatrix),Lt.setValue(q,"modelMatrix",ue.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){let qt=re.uniformsGroups;for(let bn=0,Ri=qt.length;bn<Ri;bn++)if(Ce.isWebGL2){let Ze=qt[bn];ft.update(Ze,vt),ft.bind(Ze,vt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vt}function _n(U,ee){U.ambientLightColor.needsUpdate=ee,U.lightProbe.needsUpdate=ee,U.directionalLights.needsUpdate=ee,U.directionalLightShadows.needsUpdate=ee,U.pointLights.needsUpdate=ee,U.pointLightShadows.needsUpdate=ee,U.spotLights.needsUpdate=ee,U.spotLightShadows.needsUpdate=ee,U.rectAreaLights.needsUpdate=ee,U.hemisphereLights.needsUpdate=ee}function Ht(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(U,ee,se){De.get(U.texture).__webglTexture=ee,De.get(U.depthTexture).__webglTexture=se;let re=De.get(U);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=se===void 0,re.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(U,ee){let se=De.get(U);se.__webglFramebuffer=ee,se.__useDefaultFramebuffer=ee===void 0},this.setRenderTarget=function(U,ee=0,se=0){A=U,L=ee,R=se;let re=!0,ue=null,Je=!1,P=!1;if(U){let K=De.get(U);K.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(q.FRAMEBUFFER,null),re=!1):K.__webglFramebuffer===void 0?z.setupRenderTarget(U):K.__hasExternalTextures&&z.rebindTextures(U,De.get(U.texture).__webglTexture,De.get(U.depthTexture).__webglTexture);let Ee=U.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(P=!0);let Se=De.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Se[ee])?ue=Se[ee][se]:ue=Se[ee],Je=!0):Ce.isWebGL2&&U.samples>0&&z.useMultisampledRTT(U)===!1?ue=De.get(U).__webglMultisampledFramebuffer:Array.isArray(Se)?ue=Se[se]:ue=Se,x.copy(U.viewport),F.copy(U.scissor),O=U.scissorTest}else x.copy(we).multiplyScalar(te).floor(),F.copy(le).multiplyScalar(te).floor(),O=Ue;if(_e.bindFramebuffer(q.FRAMEBUFFER,ue)&&Ce.drawBuffers&&re&&_e.drawBuffers(U,ue),_e.viewport(x),_e.scissor(F),_e.setScissorTest(O),Je){let K=De.get(U.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+ee,K.__webglTexture,se)}else if(P){let K=De.get(U.texture),Ee=ee||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,K.__webglTexture,se||0,Ee)}B=-1},this.readRenderTargetPixels=function(U,ee,se,re,ue,Je,P){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let W=De.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&P!==void 0&&(W=W[P]),W){_e.bindFramebuffer(q.FRAMEBUFFER,W);try{let K=U.texture,Ee=K.format,Se=K.type;if(Ee!==ii&&Ke.convert(Ee)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let I=Se===Mi&&(he.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&he.has("EXT_color_buffer_float"));if(Se!==ls&&Ke.convert(Se)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Se===as&&(Ce.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!I){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=U.width-re&&se>=0&&se<=U.height-ue&&q.readPixels(ee,se,re,ue,Ke.convert(Ee),Ke.convert(Se),Je)}finally{let K=A!==null?De.get(A).__webglFramebuffer:null;_e.bindFramebuffer(q.FRAMEBUFFER,K)}}},this.copyFramebufferToTexture=function(U,ee,se=0){let re=Math.pow(2,-se),ue=Math.floor(ee.image.width*re),Je=Math.floor(ee.image.height*re);z.setTexture2D(ee,0),q.copyTexSubImage2D(q.TEXTURE_2D,se,0,0,U.x,U.y,ue,Je),_e.unbindTexture()},this.copyTextureToTexture=function(U,ee,se,re=0){let ue=ee.image.width,Je=ee.image.height,P=Ke.convert(se.format),W=Ke.convert(se.type);z.setTexture2D(se,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,se.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,se.unpackAlignment),ee.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,re,U.x,U.y,ue,Je,P,W,ee.image.data):ee.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,re,U.x,U.y,ee.mipmaps[0].width,ee.mipmaps[0].height,P,ee.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,re,U.x,U.y,P,W,ee.image),re===0&&se.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(U,ee,se,re,ue=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Je=U.max.x-U.min.x+1,P=U.max.y-U.min.y+1,W=U.max.z-U.min.z+1,K=Ke.convert(re.format),Ee=Ke.convert(re.type),Se;if(re.isData3DTexture)z.setTexture3D(re,0),Se=q.TEXTURE_3D;else if(re.isDataArrayTexture||re.isCompressedArrayTexture)z.setTexture2DArray(re,0),Se=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,re.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,re.unpackAlignment);let I=q.getParameter(q.UNPACK_ROW_LENGTH),Z=q.getParameter(q.UNPACK_IMAGE_HEIGHT),ie=q.getParameter(q.UNPACK_SKIP_PIXELS),$=q.getParameter(q.UNPACK_SKIP_ROWS),be=q.getParameter(q.UNPACK_SKIP_IMAGES),me=se.isCompressedTexture?se.mipmaps[ue]:se.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,me.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,me.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,U.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,U.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,U.min.z),se.isDataTexture||se.isData3DTexture?q.texSubImage3D(Se,ue,ee.x,ee.y,ee.z,Je,P,W,K,Ee,me.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Se,ue,ee.x,ee.y,ee.z,Je,P,W,K,me.data)):q.texSubImage3D(Se,ue,ee.x,ee.y,ee.z,Je,P,W,K,Ee,me),q.pixelStorei(q.UNPACK_ROW_LENGTH,I),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Z),q.pixelStorei(q.UNPACK_SKIP_PIXELS,ie),q.pixelStorei(q.UNPACK_SKIP_ROWS,$),q.pixelStorei(q.UNPACK_SKIP_IMAGES,be),ue===0&&re.generateMipmaps&&q.generateMipmap(Se),_e.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?z.setTextureCube(U,0):U.isData3DTexture?z.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?z.setTexture2DArray(U,0):z.setTexture2D(U,0),_e.unbindTexture()},this.resetState=function(){L=0,R=0,A=null,_e.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Wc?"display-p3":"srgb",t.unpackColorSpace=Ft.workingColorSpace===Go?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===jt?Us:Ju}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Us?jt:Xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},fc=class extends Ns{};fc.prototype.isWebGL1Renderer=!0;var bo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new rt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},gs=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},wo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gn=new Y,sa=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Gi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array),r=Kt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Li=class extends ui{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rr,Vr=new Y,ar=new Y,or=new Y,lr=new Re,Wr=new Re,ad=new Ut,Za=new Y,Xr=new Y,Ja=new Y,Eu=new Re,Fl=new Re,Tu=new Re,Yi=class extends cn{constructor(e=new Li){if(super(),this.isSprite=!0,this.type="Sprite",rr===void 0){rr=new Gt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wo(t,5);rr.setIndex([0,1,2,0,2,3]),rr.setAttribute("position",new sa(n,3,0,!1)),rr.setAttribute("uv",new sa(n,2,3,!1))}this.geometry=rr,this.material=e,this.center=new Re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ar.setFromMatrixScale(this.matrixWorld),ad.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ar.multiplyScalar(-or.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ka(Za.set(-.5,-.5,0),or,a,ar,s,r),Ka(Xr.set(.5,-.5,0),or,a,ar,s,r),Ka(Ja.set(.5,.5,0),or,a,ar,s,r),Eu.set(0,0),Fl.set(1,0),Tu.set(1,1);let o=e.ray.intersectTriangle(Za,Xr,Ja,!1,Vr);if(o===null&&(Ka(Xr.set(-.5,.5,0),or,a,ar,s,r),Fl.set(0,1),o=e.ray.intersectTriangle(Za,Ja,Xr,!1,Vr),o===null))return;let c=e.ray.origin.distanceTo(Vr);c<e.near||c>e.far||t.push({distance:c,point:Vr.clone(),uv:Ls.getInterpolation(Vr,Za,Xr,Ja,Eu,Fl,Tu,new Re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ka(i,e,t,n,s,r){lr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Wr.x=r*lr.x-s*lr.y,Wr.y=s*lr.x+r*lr.y):Wr.copy(lr),i.copy(e),i.x+=Wr.x,i.y+=Wr.y,i.applyMatrix4(ad)}var So=class extends si{constructor(e=null,t=1,n=1,s,r,a,o,c,h=Sn,u=Sn,f,p){super(null,a,o,c,h,u,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ra=class extends mn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},cr=new Ut,Au=new Ut,$a=[],Ru=new qi,zx=new Ut,qr=new Oe,Yr=new ds,Eo=class extends Oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ra(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),Ru.copy(e.boundingBox).applyMatrix4(cr),this.boundingBox.union(Ru)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ds),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),Yr.copy(e.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),e.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cr),Au.multiplyMatrices(n,cr),qr.matrixWorld=Au,qr.raycast(e,$a);for(let a=0,o=$a.length;a<o;a++){let c=$a[a];c.instanceId=r,c.object=this,t.push(c)}$a.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ra(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var aa=class extends ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Cu=new Ut,pc=new ta,ja=new ds,Qa=new Y,To=class extends cn{constructor(e=new Gt,t=new aa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(s),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;Cu.copy(s).invert(),pc.copy(e.ray).applyMatrix4(Cu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let y=p,v=d;y<v;y++){let g=h.getX(y);Qa.fromBufferAttribute(f,g),Pu(Qa,g,c,s,e,t,this)}}else{let p=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let y=p,v=d;y<v;y++)Qa.fromBufferAttribute(f,y),Pu(Qa,y,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Pu(i,e,t,n,s,r,a){let o=pc.distanceSqToPoint(i);if(o<t){let c=new Y;pc.closestPointToPoint(i,c),c.applyMatrix4(n);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var Xn=class extends si{constructor(e,t,n,s,r,a,o,c,h){super(e,t,n,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},di=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,d=(a-u)/p;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Re:new Y);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new Y,s=[],r=[],a=[],o=new Y,c=new Ut;for(let d=0;d<=e;d++){let y=d/e;s[d]=this.getTangentAt(y,new Y)}r[0]=new Y,a[0]=new Y;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),p<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos(Fn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,y))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Fn(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let y=1;y<=e;y++)r[y].applyMatrix4(c.makeRotationAxis(s[y],d*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},oa=class extends di{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){let n=t||new Re,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=c-this.aX,d=h-this.aY;c=p*u-d*f+this.aX,h=p*f+d*u+this.aY}return n.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},mc=class extends oa{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function qc(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,u,f){let p=(a-r)/h-(o-r)/(h+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+f)+(c-o)/f;p*=u,d*=u,s(a,o,p,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var eo=new Y,Bl=new qc,Hl=new qc,Gl=new qc,gc=class extends di{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new Y){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,u;this.closed||o>0?h=s[(o-1)%r]:(eo.subVectors(s[0],s[1]).add(s[0]),h=eo);let f=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(eo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=eo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,y=Math.pow(h.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(p),d),g=Math.pow(p.distanceToSquared(u),d);v<1e-4&&(v=1),y<1e-4&&(y=v),g<1e-4&&(g=v),Bl.initNonuniformCatmullRom(h.x,f.x,p.x,u.x,y,v,g),Hl.initNonuniformCatmullRom(h.y,f.y,p.y,u.y,y,v,g),Gl.initNonuniformCatmullRom(h.z,f.z,p.z,u.z,y,v,g)}else this.curveType==="catmullrom"&&(Bl.initCatmullRom(h.x,f.x,p.x,u.x,this.tension),Hl.initCatmullRom(h.y,f.y,p.y,u.y,this.tension),Gl.initCatmullRom(h.z,f.z,p.z,u.z,this.tension));return n.set(Bl.calc(c),Hl.calc(c),Gl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Y().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Iu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Ux(i,e){let t=1-i;return t*t*e}function Nx(i,e){return 2*(1-i)*i*e}function Ox(i,e){return i*i*e}function $r(i,e,t,n){return Ux(i,e)+Nx(i,t)+Ox(i,n)}function kx(i,e){let t=1-i;return t*t*t*e}function Fx(i,e){let t=1-i;return 3*t*t*i*e}function Bx(i,e){return 3*(1-i)*i*i*e}function Hx(i,e){return i*i*i*e}function jr(i,e,t,n,s){return kx(i,e)+Fx(i,t)+Bx(i,n)+Hx(i,s)}var Ao=class extends di{constructor(e=new Re,t=new Re,n=new Re,s=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Re){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(jr(e,s.x,r.x,a.x,o.x),jr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},xc=class extends di{constructor(e=new Y,t=new Y,n=new Y,s=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Y){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(jr(e,s.x,r.x,a.x,o.x),jr(e,s.y,r.y,a.y,o.y),jr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ro=class extends di{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yc=class extends di{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Co=class extends di{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set($r(e,s.x,r.x,a.x),$r(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vc=class extends di{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set($r(e,s.x,r.x,a.x),$r(e,s.y,r.y,a.y),$r(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Iu(o,c.x,h.x,u.x,f.x),Iu(o,c.y,h.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Re().fromArray(s))}return this}},_c=Object.freeze({__proto__:null,ArcCurve:mc,CatmullRomCurve3:gc,CubicBezierCurve:Ao,CubicBezierCurve3:xc,EllipseCurve:oa,LineCurve:Ro,LineCurve3:yc,QuadraticBezierCurve:Co,QuadraticBezierCurve3:vc,SplineCurve:Po}),Mc=class extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new _c[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let h=0;h<c.length;h++){let u=c[h];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new _c[s.type]().fromJSON(s))}return this}},Io=class extends Mc{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ro(this.currentPoint.clone(),new Re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Co(this.currentPoint.clone(),new Re(e,t),new Re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ao(this.currentPoint.clone(),new Re(e,t),new Re(n,s),new Re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Po(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+h,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let h=new oa(e,t,n,s,r,a,o,c);if(this.curves.length>0){let f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Di=class i extends Gt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],h=new Y,u=new Re;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){let d=n+f/t*s;h.x=e*Math.cos(d),h.y=e*Math.sin(d),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[p]/e+1)/2,u.y=(a[p+1]/e+1)/2,c.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(o,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},In=class i extends Gt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],p=[],d=[],y=0,v=[],g=n/2,m=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new yt(f,3)),this.setAttribute("normal",new yt(p,3)),this.setAttribute("uv",new yt(d,2));function M(){let S=new Y,L=new Y,R=0,A=(t-e)/n;for(let B=0;B<=r;B++){let E=[],x=B/r,F=x*(t-e)+e;for(let O=0;O<=s;O++){let Q=O/s,N=Q*c+o,J=Math.sin(N),w=Math.cos(N);L.x=F*J,L.y=-x*n+g,L.z=F*w,f.push(L.x,L.y,L.z),S.set(J,A,w).normalize(),p.push(S.x,S.y,S.z),d.push(Q,1-x),E.push(y++)}v.push(E)}for(let B=0;B<s;B++)for(let E=0;E<r;E++){let x=v[E][B],F=v[E+1][B],O=v[E+1][B+1],Q=v[E][B+1];u.push(x,F,Q),u.push(F,O,Q),R+=6}h.addGroup(m,R,0),m+=R}function _(S){let L=y,R=new Re,A=new Y,B=0,E=S===!0?e:t,x=S===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,g*x,0),p.push(0,x,0),d.push(.5,.5),y++;let F=y;for(let O=0;O<=s;O++){let N=O/s*c+o,J=Math.cos(N),w=Math.sin(N);A.x=E*w,A.y=g*x,A.z=E*J,f.push(A.x,A.y,A.z),p.push(0,x,0),R.x=J*.5+.5,R.y=w*.5*x+.5,d.push(R.x,R.y),y++}for(let O=0;O<s;O++){let Q=L+O,N=F+O;S===!0?u.push(N,N+1,Q):u.push(N+1,N,Q),B+=3}h.addGroup(m,B,S===!0?1:2),m+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},xn=class i extends In{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Lo=class i extends Gt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),h(n),u(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let _=new Y,S=new Y,L=new Y;for(let R=0;R<t.length;R+=3)d(t[R+0],_),d(t[R+1],S),d(t[R+2],L),c(_,S,L,M)}function c(M,_,S,L){let R=L+1,A=[];for(let B=0;B<=R;B++){A[B]=[];let E=M.clone().lerp(S,B/R),x=_.clone().lerp(S,B/R),F=R-B;for(let O=0;O<=F;O++)O===0&&B===R?A[B][O]=E:A[B][O]=E.clone().lerp(x,O/F)}for(let B=0;B<R;B++)for(let E=0;E<2*(R-B)-1;E++){let x=Math.floor(E/2);E%2===0?(p(A[B][x+1]),p(A[B+1][x]),p(A[B][x])):(p(A[B][x+1]),p(A[B+1][x+1]),p(A[B+1][x]))}}function h(M){let _=new Y;for(let S=0;S<r.length;S+=3)_.x=r[S+0],_.y=r[S+1],_.z=r[S+2],_.normalize().multiplyScalar(M),r[S+0]=_.x,r[S+1]=_.y,r[S+2]=_.z}function u(){let M=new Y;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let S=g(M)/2/Math.PI+.5,L=m(M)/Math.PI+.5;a.push(S,1-L)}y(),f()}function f(){for(let M=0;M<a.length;M+=6){let _=a[M+0],S=a[M+2],L=a[M+4],R=Math.max(_,S,L),A=Math.min(_,S,L);R>.9&&A<.1&&(_<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),L<.2&&(a[M+4]+=1))}}function p(M){r.push(M.x,M.y,M.z)}function d(M,_){let S=M*3;_.x=e[S+0],_.y=e[S+1],_.z=e[S+2]}function y(){let M=new Y,_=new Y,S=new Y,L=new Y,R=new Re,A=new Re,B=new Re;for(let E=0,x=0;E<r.length;E+=9,x+=6){M.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),S.set(r[E+6],r[E+7],r[E+8]),R.set(a[x+0],a[x+1]),A.set(a[x+2],a[x+3]),B.set(a[x+4],a[x+5]),L.copy(M).add(_).add(S).divideScalar(3);let F=g(L);v(R,x+0,M,F),v(A,x+2,_,F),v(B,x+4,S,F)}}function v(M,_,S,L){L<0&&M.x===1&&(a[_]=M.x-1),S.x===0&&S.z===0&&(a[_]=L/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var $n=class extends Io{constructor(e){super(e),this.uuid=Wi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Io().fromJSON(s))}return this}},Gx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=od(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,h,u,f,p,d;if(n&&(r=Yx(i,e,r,t)),i.length>80*t){o=h=i[0],c=u=i[1];for(let y=t;y<s;y+=t)f=i[y],p=i[y+1],f<o&&(o=f),p<c&&(c=p),f>h&&(h=f),p>u&&(u=p);d=Math.max(h-o,u-c),d=d!==0?32767/d:0}return la(r,a,t,o,c,d,0),a}};function od(i,e,t,n,s){let r,a;if(s===s1(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Lu(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Lu(r,i[r],i[r+1],a);return a&&Wo(a,a.next)&&(ha(a),a=a.next),a}function Os(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Wo(t,t.next)||an(t.prev,t,t.next)===0)){if(ha(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function la(i,e,t,n,s,r,a){if(!i)return;!a&&r&&jx(i,n,s,r);let o=i,c,h;for(;i.prev!==i.next;){if(c=i.prev,h=i.next,r?Wx(i,n,s,r):Vx(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(h.i/t|0),ha(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=Xx(Os(i),e,t),la(i,e,t,n,s,r,2)):a===2&&qx(i,e,t,n,s,r):la(Os(i),e,t,n,s,r,1);break}}}function Vx(i){let e=i.prev,t=i,n=i.next;if(an(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,h=n.y,u=s<r?s<a?s:a:r<a?r:a,f=o<c?o<h?o:h:c<h?c:h,p=s>r?s>a?s:a:r>a?r:a,d=o>c?o>h?o:h:c>h?c:h,y=n.next;for(;y!==e;){if(y.x>=u&&y.x<=p&&y.y>=f&&y.y<=d&&dr(s,o,r,c,a,h,y.x,y.y)&&an(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Wx(i,e,t,n){let s=i.prev,r=i,a=i.next;if(an(s,r,a)>=0)return!1;let o=s.x,c=r.x,h=a.x,u=s.y,f=r.y,p=a.y,d=o<c?o<h?o:h:c<h?c:h,y=u<f?u<p?u:p:f<p?f:p,v=o>c?o>h?o:h:c>h?c:h,g=u>f?u>p?u:p:f>p?f:p,m=bc(d,y,e,t,n),M=bc(v,g,e,t,n),_=i.prevZ,S=i.nextZ;for(;_&&_.z>=m&&S&&S.z<=M;){if(_.x>=d&&_.x<=v&&_.y>=y&&_.y<=g&&_!==s&&_!==a&&dr(o,u,c,f,h,p,_.x,_.y)&&an(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=d&&S.x<=v&&S.y>=y&&S.y<=g&&S!==s&&S!==a&&dr(o,u,c,f,h,p,S.x,S.y)&&an(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=v&&_.y>=y&&_.y<=g&&_!==s&&_!==a&&dr(o,u,c,f,h,p,_.x,_.y)&&an(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=M;){if(S.x>=d&&S.x<=v&&S.y>=y&&S.y<=g&&S!==s&&S!==a&&dr(o,u,c,f,h,p,S.x,S.y)&&an(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Xx(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Wo(s,r)&&ld(s,n,n.next,r)&&ca(s,r)&&ca(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ha(n),ha(n.next),n=i=r),n=n.next}while(n!==i);return Os(n)}function qx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&t1(a,o)){let c=cd(a,o);a=Os(a,a.next),c=Os(c,c.next),la(a,e,t,n,s,r,0),la(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Yx(i,e,t,n){let s=[],r,a,o,c,h;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,h=od(i,o,c,n,!1),h===h.next&&(h.steiner=!0),s.push(e1(h));for(s.sort(Zx),r=0;r<s.length;r++)t=Jx(s[r],t);return t}function Zx(i,e){return i.x-e.x}function Jx(i,e){let t=Kx(i,e);if(!t)return e;let n=cd(t,i);return Os(n,n.next),Os(t,t.next)}function Kx(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,c=s.x,h=s.y,u=1/0,f;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&dr(a<h?r:n,a,c,h,a<h?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),ca(t,i)&&(f<u||f===u&&(t.x>s.x||t.x===s.x&&$x(s,t)))&&(s=t,u=f)),t=t.next;while(t!==o);return s}function $x(i,e){return an(i.prev,i,e.prev)<0&&an(e.next,i,i.next)<0}function jx(i,e,t,n){let s=i;do s.z===0&&(s.z=bc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qx(s)}function Qx(i){let e,t,n,s,r,a,o,c,h=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<h&&(o++,n=n.nextZ,!!n);e++);for(c=h;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,h*=2}while(a>1);return i}function bc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function e1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function dr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function t1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!n1(i,e)&&(ca(i,e)&&ca(e,i)&&i1(i,e)&&(an(i.prev,i,e.prev)||an(i,e.prev,e))||Wo(i,e)&&an(i.prev,i,i.next)>0&&an(e.prev,e,e.next)>0)}function an(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Wo(i,e){return i.x===e.x&&i.y===e.y}function ld(i,e,t,n){let s=no(an(i,e,t)),r=no(an(i,e,n)),a=no(an(t,n,i)),o=no(an(t,n,e));return!!(s!==r&&a!==o||s===0&&to(i,t,e)||r===0&&to(i,n,e)||a===0&&to(t,i,n)||o===0&&to(t,e,n))}function to(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function no(i){return i>0?1:i<0?-1:0}function n1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ld(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ca(i,e){return an(i.prev,i,i.next)<0?an(i,e,i.next)>=0&&an(i,i.prev,e)>=0:an(i,e,i.prev)<0||an(i,i.next,e)<0}function i1(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function cd(i,e){let t=new wc(i.i,i.x,i.y),n=new wc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Lu(i,e,t,n){let s=new wc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ha(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function wc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function s1(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var cs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Du(e),zu(n,e);let a=e.length;t.forEach(Du);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,zu(n,t[c]);let o=Gx.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Du(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function zu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var _r=class i extends Gt{constructor(e=new $n([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let h=e[o];a(h)}this.setAttribute("position",new yt(s,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function a(o){let c=[],h=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:r1,_,S=!1,L,R,A,B;m&&(_=m.getSpacedPoints(u),S=!0,p=!1,L=m.computeFrenetFrames(u,!1),R=new Y,A=new Y,B=new Y),p||(g=0,d=0,y=0,v=0);let E=o.extractPoints(h),x=E.shape,F=E.holes;if(!cs.isClockWise(x)){x=x.reverse();for(let q=0,Le=F.length;q<Le;q++){let he=F[q];cs.isClockWise(he)&&(F[q]=he.reverse())}}let Q=cs.triangulateShape(x,F),N=x;for(let q=0,Le=F.length;q<Le;q++){let he=F[q];x=x.concat(he)}function J(q,Le,he){return Le||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(Le,he)}let w=x.length,te=Q.length;function V(q,Le,he){let Ce,_e,Ne,De=q.x-Le.x,z=q.y-Le.y,C=he.x-q.x,ne=he.y-q.y,xe=De*De+z*z,Me=De*ne-z*C;if(Math.abs(Me)>Number.EPSILON){let Te=Math.sqrt(xe),Ve=Math.sqrt(C*C+ne*ne),Fe=Le.x-z/Te,Ye=Le.y+De/Te,it=he.x-ne/Ve,ht=he.y+C/Ve,ve=((it-Fe)*ne-(ht-Ye)*C)/(De*ne-z*C);Ce=Fe+De*ve-q.x,_e=Ye+z*ve-q.y;let mt=Ce*Ce+_e*_e;if(mt<=2)return new Re(Ce,_e);Ne=Math.sqrt(mt/2)}else{let Te=!1;De>Number.EPSILON?C>Number.EPSILON&&(Te=!0):De<-Number.EPSILON?C<-Number.EPSILON&&(Te=!0):Math.sign(z)===Math.sign(ne)&&(Te=!0),Te?(Ce=-z,_e=De,Ne=Math.sqrt(xe)):(Ce=De,_e=z,Ne=Math.sqrt(xe/2))}return new Re(Ce/Ne,_e/Ne)}let G=[];for(let q=0,Le=N.length,he=Le-1,Ce=q+1;q<Le;q++,he++,Ce++)he===Le&&(he=0),Ce===Le&&(Ce=0),G[q]=V(N[q],N[he],N[Ce]);let we=[],le,Ue=G.concat();for(let q=0,Le=F.length;q<Le;q++){let he=F[q];le=[];for(let Ce=0,_e=he.length,Ne=_e-1,De=Ce+1;Ce<_e;Ce++,Ne++,De++)Ne===_e&&(Ne=0),De===_e&&(De=0),le[Ce]=V(he[Ce],he[Ne],he[De]);we.push(le),Ue=Ue.concat(le)}for(let q=0;q<g;q++){let Le=q/g,he=d*Math.cos(Le*Math.PI/2),Ce=y*Math.sin(Le*Math.PI/2)+v;for(let _e=0,Ne=N.length;_e<Ne;_e++){let De=J(N[_e],G[_e],Ce);We(De.x,De.y,-he)}for(let _e=0,Ne=F.length;_e<Ne;_e++){let De=F[_e];le=we[_e];for(let z=0,C=De.length;z<C;z++){let ne=J(De[z],le[z],Ce);We(ne.x,ne.y,-he)}}}let ce=y+v;for(let q=0;q<w;q++){let Le=p?J(x[q],Ue[q],ce):x[q];S?(A.copy(L.normals[0]).multiplyScalar(Le.x),R.copy(L.binormals[0]).multiplyScalar(Le.y),B.copy(_[0]).add(A).add(R),We(B.x,B.y,B.z)):We(Le.x,Le.y,0)}for(let q=1;q<=u;q++)for(let Le=0;Le<w;Le++){let he=p?J(x[Le],Ue[Le],ce):x[Le];S?(A.copy(L.normals[q]).multiplyScalar(he.x),R.copy(L.binormals[q]).multiplyScalar(he.y),B.copy(_[q]).add(A).add(R),We(B.x,B.y,B.z)):We(he.x,he.y,f/u*q)}for(let q=g-1;q>=0;q--){let Le=q/g,he=d*Math.cos(Le*Math.PI/2),Ce=y*Math.sin(Le*Math.PI/2)+v;for(let _e=0,Ne=N.length;_e<Ne;_e++){let De=J(N[_e],G[_e],Ce);We(De.x,De.y,f+he)}for(let _e=0,Ne=F.length;_e<Ne;_e++){let De=F[_e];le=we[_e];for(let z=0,C=De.length;z<C;z++){let ne=J(De[z],le[z],Ce);S?We(ne.x,ne.y+_[u-1].y,_[u-1].x+he):We(ne.x,ne.y,f+he)}}}ye(),Ae();function ye(){let q=s.length/3;if(p){let Le=0,he=w*Le;for(let Ce=0;Ce<te;Ce++){let _e=Q[Ce];at(_e[2]+he,_e[1]+he,_e[0]+he)}Le=u+g*2,he=w*Le;for(let Ce=0;Ce<te;Ce++){let _e=Q[Ce];at(_e[0]+he,_e[1]+he,_e[2]+he)}}else{for(let Le=0;Le<te;Le++){let he=Q[Le];at(he[2],he[1],he[0])}for(let Le=0;Le<te;Le++){let he=Q[Le];at(he[0]+w*u,he[1]+w*u,he[2]+w*u)}}n.addGroup(q,s.length/3-q,0)}function Ae(){let q=s.length/3,Le=0;et(N,Le),Le+=N.length;for(let he=0,Ce=F.length;he<Ce;he++){let _e=F[he];et(_e,Le),Le+=_e.length}n.addGroup(q,s.length/3-q,1)}function et(q,Le){let he=q.length;for(;--he>=0;){let Ce=he,_e=he-1;_e<0&&(_e=q.length-1);for(let Ne=0,De=u+g*2;Ne<De;Ne++){let z=w*Ne,C=w*(Ne+1),ne=Le+Ce+z,xe=Le+_e+z,Me=Le+_e+C,Te=Le+Ce+C;ke(ne,xe,Me,Te)}}}function We(q,Le,he){c.push(q),c.push(Le),c.push(he)}function at(q,Le,he){Ge(q),Ge(Le),Ge(he);let Ce=s.length/3,_e=M.generateTopUV(n,s,Ce-3,Ce-2,Ce-1);ot(_e[0]),ot(_e[1]),ot(_e[2])}function ke(q,Le,he,Ce){Ge(q),Ge(Le),Ge(Ce),Ge(Le),Ge(he),Ge(Ce);let _e=s.length/3,Ne=M.generateSideWallUV(n,s,_e-6,_e-3,_e-2,_e-1);ot(Ne[0]),ot(Ne[1]),ot(Ne[3]),ot(Ne[1]),ot(Ne[2]),ot(Ne[3])}function Ge(q){s.push(c[q*3+0]),s.push(c[q*3+1]),s.push(c[q*3+2])}function ot(q){r.push(q.x),r.push(q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return a1(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new _c[s.type]().fromJSON(s)),new i(n,e.options)}},r1={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],h=e[s*3],u=e[s*3+1];return[new Re(r,a),new Re(o,c),new Re(h,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],h=e[n*3],u=e[n*3+1],f=e[n*3+2],p=e[s*3],d=e[s*3+1],y=e[s*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new Re(a,1-c),new Re(h,1-f),new Re(p,1-y),new Re(v,1-m)]:[new Re(o,1-c),new Re(u,1-f),new Re(d,1-y),new Re(g,1-m)]}};function a1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Do=class i extends Lo{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Rn=class i extends Lo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},fi=class i extends Gt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],h=[],u=[],f=e,p=(t-e)/s,d=new Y,y=new Re;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let m=r+g/n*a;d.x=f*Math.cos(m),d.y=f*Math.sin(m),c.push(d.x,d.y,d.z),h.push(0,0,1),y.x=(d.x/t+1)/2,y.y=(d.y/t+1)/2,u.push(y.x,y.y)}f+=p}for(let v=0;v<s;v++){let g=v*(n+1);for(let m=0;m<n;m++){let M=m+g,_=M,S=M+n+1,L=M+n+2,R=M+1;o.push(_,S,R),o.push(S,L,R)}}this.setIndex(o),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},bi=class i extends Gt{constructor(e=new $n([new Re(0,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)h(e);else for(let u=0;u<e.length;u++)h(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(r,3)),this.setAttribute("uv",new yt(a,2));function h(u){let f=s.length/3,p=u.extractPoints(t),d=p.shape,y=p.holes;cs.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=y.length;g<m;g++){let M=y[g];cs.isClockWise(M)===!0&&(y[g]=M.reverse())}let v=cs.triangulateShape(d,y);for(let g=0,m=y.length;g<m;g++){let M=y[g];d=d.concat(M)}for(let g=0,m=d.length;g<m;g++){let M=d[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,m=v.length;g<m;g++){let M=v[g],_=M[0]+f,S=M[1]+f,L=M[2]+f;n.push(_,S,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return o1(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function o1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var pi=class i extends Gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),h=0,u=[],f=new Y,p=new Y,d=[],y=[],v=[],g=[];for(let m=0;m<=n;m++){let M=[],_=m/n,S=0;m===0&&a===0?S=.5/t:m===n&&c===Math.PI&&(S=-.5/t);for(let L=0;L<=t;L++){let R=L/t;f.x=-e*Math.cos(s+R*r)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(s+R*r)*Math.sin(a+_*o),y.push(f.x,f.y,f.z),p.copy(f).normalize(),v.push(p.x,p.y,p.z),g.push(R+S,1-_),M.push(h++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let _=u[m][M+1],S=u[m][M],L=u[m+1][M],R=u[m+1][M+1];(m!==0||a>0)&&d.push(_,S,R),(m!==n-1||c<Math.PI)&&d.push(S,L,R)}this.setIndex(d),this.setAttribute("position",new yt(y,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var jn=class i extends Gt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],h=[],u=new Y,f=new Y,p=new Y;for(let d=0;d<=n;d++)for(let y=0;y<=s;y++){let v=y/s*r,g=d/n*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(v),f.y=(e+t*Math.cos(g))*Math.sin(v),f.z=t*Math.sin(g),o.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),p.subVectors(f,u).normalize(),c.push(p.x,p.y,p.z),h.push(y/s),h.push(d/n)}for(let d=1;d<=n;d++)for(let y=1;y<=s;y++){let v=(s+1)*d+y-1,g=(s+1)*(d-1)+y-1,m=(s+1)*(d-1)+y,M=(s+1)*d+y;a.push(v,g,M),a.push(g,m,M)}this.setIndex(a),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var zo=class extends ui{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new rt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Uo=class extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},on=class extends ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ks=class extends ui{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new rt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var No=class extends ui{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ho,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function io(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function l1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Mr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Sc=class extends Mr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nh,endingEnd:Nh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Oh:r=e,o=2*t-n;break;case kh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Oh:a=e,c=2*n-t;break;case kh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,d=this._weightNext,y=(n-t)/(s-t),v=y*y,g=v*y,m=-p*g+2*p*v-p*y,M=(1+p)*g+(-1.5-2*p)*v+(-.5+p)*y+1,_=(-1-d)*g+(1.5+d)*v+.5*y,S=d*g-d*v;for(let L=0;L!==o;++L)r[L]=m*a[u+L]+M*a[h+L]+_*a[c+L]+S*a[f+L];return r}},Ec=class extends Mr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,u=(n-t)/(s-t),f=1-u;for(let p=0;p!==o;++p)r[p]=a[h+p]*f+a[c+p]*u;return r}},Tc=class extends Mr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=io(t,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:io(e.times,Array),values:io(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ro:t=this.InterpolantFactoryMethodDiscrete;break;case ao:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&l1(s))for(let o=0,c=s.length;o!==c;++o){let h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pl,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,h=e[o],u=e[o+1];if(h!==u&&(o!==1||h!==e[0]))if(s)c=!0;else{let f=o*n,p=f-n,d=f+n;for(let y=0;y!==n;++y){let v=t[f+y];if(v!==t[p+y]||v!==t[d+y]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,p=a*n;for(let d=0;d!==n;++d)t[p+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)t[c+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=ao;var Fs=class extends wi{};Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=ro;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ac=class extends wi{};Ac.prototype.ValueTypeName="color";var Rc=class extends wi{};Rc.prototype.ValueTypeName="number";var Cc=class extends Mr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),h=e*o;for(let u=h+o;h!==u;h+=4)Jn.slerpFlat(r,0,a,h-o,a,h,c);return r}},ua=class extends wi{InterpolantFactoryMethodLinear(e){return new Cc(this.times,this.values,this.getValueSize(),e)}};ua.prototype.ValueTypeName="quaternion";ua.prototype.DefaultInterpolation=ao;ua.prototype.InterpolantFactoryMethodSmooth=void 0;var Bs=class extends wi{};Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=ro;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var Pc=class extends wi{};Pc.prototype.ValueTypeName="vector";var Ic=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return h.push(u,f),this},this.removeHandler=function(u){let f=h.indexOf(u);return f!==-1&&h.splice(f,2),this},this.getHandler=function(u){for(let f=0,p=h.length;f<p;f+=2){let d=h[f],y=h[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return y}return null}}},c1=new Ic,Lc=class{constructor(e){this.manager=e!==void 0?e:c1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Lc.DEFAULT_MATERIAL_NAME="__DEFAULT";var br=class extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},wr=class extends br{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Vl=new Ut,Uu=new Y,Nu=new Y,da=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ia,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uu),Nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nu),t.updateMatrixWorld(),Vl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Dc=class extends da{constructor(){super(new En(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=uo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Oo=class extends br{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Dc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ou=new Ut,Zr=new Y,Wl=new Y,zc=class extends da{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new tn(2,1,1,1),new tn(0,1,1,1),new tn(3,1,1,1),new tn(1,1,1,1),new tn(3,0,1,1),new tn(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zr),Wl.copy(n.position),Wl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Wl),n.updateMatrixWorld(),s.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou)}},ri=class extends br{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Uc=class extends da{constructor(){super(new vr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xs=class extends br{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new Uc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ko=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ku(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ku();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ku(){return(typeof performance>"u"?Date:performance).now()}var Yc="\\[\\]\\.:\\/",h1=new RegExp("["+Yc+"]","g"),Zc="[^"+Yc+"]",u1="[^"+Yc.replace("\\.","")+"]",d1=/((?:WC+[\/:])*)/.source.replace("WC",Zc),f1=/(WCOD+)?/.source.replace("WCOD",u1),p1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zc),m1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zc),g1=new RegExp("^"+d1+f1+p1+m1+"$"),x1=["material","materials","bones","map"],Nc=class{constructor(e,t,n){let s=n||en.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},en=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(h1,"")}static parseTrackName(e){let t=g1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);x1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let a=e[s];if(a===void 0){let h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};en.Composite=Nc;en.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};en.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};en.prototype.GetterByBindingType=[en.prototype._getValue_direct,en.prototype._getValue_array,en.prototype._getValue_arrayElement,en.prototype._getValue_toArray];en.prototype.SetterByBindingTypeAndVersioning=[[en.prototype._setValue_direct,en.prototype._setValue_direct_setNeedsUpdate,en.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[en.prototype._setValue_array,en.prototype._setValue_array_setNeedsUpdate,en.prototype._setValue_array_setMatrixWorldNeedsUpdate],[en.prototype._setValue_arrayElement,en.prototype._setValue_arrayElement_setNeedsUpdate,en.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[en.prototype._setValue_fromArray,en.prototype._setValue_fromArray_setNeedsUpdate,en.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var G1=new Float32Array(1);var Fo=class{constructor(e,t,n=0,s=1/0){this.ray=new ta(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new na,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Oc(e,this,n,t),n.sort(Fu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Oc(e[s],this,n,t);return n.sort(Fu),n}};function Fu(i,e){return i.distance-e.distance}function Oc(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Oc(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Ar=class extends gs{constructor(e=null){super();let t=new Kn;t.deleteAttribute("uv");let n=new on({side:pn}),s=new on,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new ri(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Oe(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new Oe(t,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let h=new Oe(t,s);h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),this.add(h);let u=new Oe(t,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let f=new Oe(t,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let p=new Oe(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let d=new Oe(t,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let y=new Oe(t,Tr(50));y.position.set(-16.116,14.37,8.208),y.scale.set(.1,2.428,2.739),this.add(y);let v=new Oe(t,Tr(50));v.position.set(-16.109,18.021,-8.207),v.scale.set(.1,2.425,2.751),this.add(v);let g=new Oe(t,Tr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let m=new Oe(t,Tr(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let M=new Oe(t,Tr(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let _=new Oe(t,Tr(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Tr(i){let e=new Nt;return e.color.setScalar(i),e}function ma(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Gt,h=0;for(let u=0;u<i.length;++u){let f=i[u],p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,d,u),h+=d}}if(t){let u=0,f=[];for(let p=0;p<i.length;++p){let d=i[p].index;for(let y=0;y<d.count;++y)f.push(d.getX(y)+u);u+=i[p].attributes.position.count}c.setIndex(f)}for(let u in r){let f=hd(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let p=0;p<f;++p){let d=[];for(let v=0;v<a[u].length;++v)d.push(a[u][v][p]);let y=hd(d);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(y)}}return c}function hd(i){let e,t,n,s=-1,r=0;for(let h=0;h<i.length;++h){let u=i[h];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let a=new e(r),o=0;for(let h=0;h<i.length;++h)a.set(i[h].array,o),o+=i[h].array.length;let c=new mn(a,t,n);return s!==void 0&&(c.gpuType=s),c}function yn(i,e=18,t=!0,n=!0){let s=[],r=[];for(let c of i)for(let h=0;h<e;h++){let u=h/e*Math.PI*2,f=Math.cos(u);s.push((c.x||0)+Math.sin(u)*c.rx,c.y,(c.z||0)+f*(f>=0?c.rz:c.rb??c.rz))}for(let c=0;c<i.length-1;c++)for(let h=0;h<e;h++){let u=c*e+h,f=c*e+(h+1)%e,p=u+e,d=f+e;r.push(u,f,p,f,d,p)}let a=i.length;if(t){let c=i[0],h=s.length/3;s.push(c.x||0,c.y,c.z||0);for(let u=0;u<e;u++)r.push(h,(u+1)%e,u)}if(n){let c=i[a-1],h=s.length/3,u=(a-1)*e;s.push(c.x||0,c.y,c.z||0);for(let f=0;f<e;f++)r.push(h,u+f,u+(f+1)%e)}let o=new Gt;return o.setAttribute("position",new yt(s,3)),o.setIndex(r),o.computeVertexNormals(),o}function vs(i,e,t,n=12,s=1){let r=[];r.push({y:e*.55,rx:e*.55,rz:e*.55*s});for(let o=0;o<=6;o++){let c=o/6,h=e+(t-e)*c;r.push({y:-i*c,rx:h,rz:h*s})}return r.push({y:-i-t*.5,rx:t*.6,rz:t*.6*s}),r.reverse(),yn(r,n)}function ae(i,e,t=0,n=0,s=0){let r=new Oe(i,e);return r.position.set(t,n,s),r.castShadow=!0,r}function hn(i=0,e=0,t=0,...n){let s=new xt;return s.position.set(i,e,t),n.forEach(r=>r&&s.add(r)),s}var zt=(i,e,t)=>new Kn(i,e,t),Vt=(i,e=14,t=10)=>new pi(i,e,t),nn=(i,e,t,n=12,s=!1)=>new In(i,e,t,n,1,s),Dn=(i,e,t=10)=>new xn(i,e,t),Qt=(i,e,t)=>i+(e-i)*t;function Si(i){i.traverse(e=>{e.userData.dispose&&e.userData.dispose(),e.geometry&&!e.userData.sharedGeo&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.userData.shared||(t.map&&t.userData.ownMap&&t.map.dispose(),t.dispose())})})}var Xo=[[12173e3,6975353],[11915199,6126956],[11127270,5207705],[12824816,6967984],[15780966,10119698],[3814208,1380890],[16774354,14268512],[15793919,7325912]],Qn=[10725556,4906624,3718648,11566335,16096779,16731501,16773560,10484991];function Ei(i,e=2){let t=[],n=["rx","rz","rb","x","z"],s=(a,o)=>a[o]??(o==="rb"?a.rz:0);for(let a=0;a<i.length-1;a++){let o=i[Math.max(0,a-1)],c=i[a],h=i[a+1],u=i[Math.min(i.length-1,a+2)];for(let f=0;f<e;f++){let p=f/e,d={y:Qt(c.y,h.y,p)};for(let y of n){let v=s(o,y),g=s(c,y),m=s(h,y),M=s(u,y),_=.5*(2*g+(-v+m)*p+(2*v-5*g+4*m-M)*p*p+(-v+3*g-3*m+M)*p*p*p);y[0]==="r"&&(_=Math.max(8e-4,Math.min(Math.max(g,m)*1.08,_))),d[y]=_}t.push(d)}}let r=i[i.length-1];return t.push({y:r.y,rx:r.rx,rz:r.rz,rb:r.rb??r.rz,x:r.x||0,z:r.z||0}),t}function dd(i,e=24){let t=[],n=[],s=[],r=i.length,a=i[0].y,o=i[r-1].y,c=e+1;for(let f of i)for(let p=0;p<=e;p++){let d=-Math.PI+p/e*Math.PI*2,y=Math.cos(d);t.push((f.x||0)+Math.sin(d)*f.rx,f.y,(f.z||0)+y*(y>=0?f.rz:f.rb??f.rz)),n.push(p/e,(f.y-a)/(o-a))}for(let f=0;f<r-1;f++)for(let p=0;p<e;p++){let d=f*c+p,y=d+1,v=d+c,g=y+c;s.push(d,y,v,y,g,v)}{let f=i[0],p=t.length/3;t.push(f.x||0,f.y,f.z||0),n.push(.5,0);for(let d=0;d<e;d++)s.push(p,d+1,d)}{let f=i[r-1],p=t.length/3,d=(r-1)*c;t.push(f.x||0,f.y,f.z||0),n.push(.5,1);for(let y=0;y<e;y++)s.push(p,d+y,d+y+1)}let h=new Gt;h.setAttribute("position",new yt(t,3)),h.setAttribute("uv",new yt(n,2)),h.setIndex(s),h.computeVertexNormals();let u=h.attributes.normal;for(let f=0;f<r;f++){let p=f*c,d=p+e,y=u.getX(p)+u.getX(d),v=u.getY(p)+u.getY(d),g=u.getZ(p)+u.getZ(d),m=Math.hypot(y,v,g)||1;u.setXYZ(p,y/m,v/m,g/m),u.setXYZ(d,y/m,v/m,g/m)}return h}function Zi(i,e,t=12,n=.55){let s=[],r=e[0],a=e[e.length-1];s.push({y:r[1]*n,rx:r[1]*.5,rz:r[1]*.5*(r[3]||1),z:r[2]||0});for(let o of e)s.push({y:-i*o[0],rx:o[1],rz:o[1]*(o[3]||1),z:o[2]||0});return s.push({y:-i-a[1]*n,rx:a[1]*.5,rz:a[1]*.5*(a[3]||1),z:a[2]||0}),s.reverse(),yn(Ei(s,2),t)}var ud={};function fd(i){let e=i?"s":"h",t=ud[e];if(t)return t;let n=i?[168,168,168,172,222,255,255,255]:[98,98,98,102,184,255,255,255],s=new Uint8Array(n.length*4);return n.forEach((r,a)=>{s[a*4]=s[a*4+1]=s[a*4+2]=r,s[a*4+3]=255}),t=ud[e]=new So(s,n.length,1,ii),t.minFilter=t.magFilter=Sn,t.generateMipmaps=!1,t.needsUpdate=!0,t}function Jc(i,e){return new ks(Object.assign({color:i,gradientMap:fd(!0)},e||{}))}function vn(i,e){return new ks(Object.assign({color:i,gradientMap:fd()},e||{}))}var Rr=null;function pd(){return Rr||(Rr=new Nt({color:1314586,side:pn}),Rr.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 { vec3 inkN = normalize(normalMatrix * normal); float inkW = clamp(-mvPosition.z * 0.0025, 0.0012, 0.012); mvPosition.xyz += inkN * inkW; gl_Position = projectionMatrix * mvPosition; }`)},Rr.userData.shared=!0,Rr)}var y1=(i,e)=>{let t=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();for(let n of Object.keys(t.attributes))n!=="position"&&n!=="normal"&&!(n==="uv"&&e)&&t.deleteAttribute(n);return t};function md(i,e){i.updateMatrixWorld(!0);let t=[],n=[],s=new Ut,r=new Ut;i.traverse(a=>{(a===i||a.userData.joint)&&t.push(a)});for(let a of t){let o=new Map,c=[];r.copy(a.matrixWorld).invert();let h=f=>{for(let p of f.children)if(!(p.userData.joint||p.userData.keep))if(p.isMesh){if(p.material.transparent||p.userData.noBake)continue;let d=y1(p,!!p.material.map);d.applyMatrix4(s.multiplyMatrices(r,p.matrixWorld)),o.has(p.material)||o.set(p.material,[]),o.get(p.material).push(d),c.push(p)}else!p.isLight&&!p.isSprite&&h(p)};h(a);for(let f of c)f.parent.remove(f),f.geometry.dispose();let u=[];for(let[f,p]of o){let d=p.length>1?ma(p,!1):p[0];p.length>1&&p.forEach(v=>v.dispose());let y=new Oe(d,f);y.castShadow=!0,a.add(y),!f.isMeshBasicMaterial&&!f.userData.noInk&&u.push(d)}if(e&&u.length){let f=u.map(y=>{let v=y.clone();return v.attributes.uv&&v.deleteAttribute("uv"),v}),p=f.length>1?ma(f,!1):f[0];f.length>1&&f.forEach(y=>y.dispose());let d=new Oe(p,pd());d.userData.ink=!0,d.castShadow=!1,a.add(d),n.push(d)}}for(;;){let a=[];if(i.traverse(o=>{o!==i&&o.isGroup&&!o.children.length&&!o.userData.joint&&!o.userData.keep&&o.parent&&a.push(o)}),!a.length)break;a.forEach(o=>o.parent.remove(o))}return n}function qo(i){let e=[],t=[];i.traverse(n=>{n.isMesh&&!n.userData.ink&&!n.userData.noInk&&n.material&&!n.material.transparent&&!n.material.isMeshBasicMaterial&&t.push(n)});for(let n of t){let s=new Oe(n.geometry,pd());s.userData.ink=!0,s.castShadow=!1,s.userData.sharedGeo=!0,n.add(s),e.push(s)}return e}function Cr(i,e){let t=Xo[i][e?1:0];return vn(t,i===6?{emissive:16769696,emissiveIntensity:e?.3:.45}:i===5?{emissive:5899794,emissiveIntensity:e?.3:.42}:i===4?{emissive:6965760,emissiveIntensity:.2}:void 0)}var Bt=(i,e,t,n)=>vn(i,n||void 0),Lr={},Ms=(i,e)=>Lr[i]||(Lr[i]=e()),Pr=()=>Ms("wood",()=>vn(8016432)),Yo=()=>Ms("leather",()=>vn(4861984)),Ai=null,ei=i=>Ai?Ms("sk",()=>vn(Ai.c[0],{emissive:Ai.c[1],emissiveIntensity:.5})):Ms("m"+i,()=>Cr(i)),Hn=i=>Ai?Ms("skd",()=>vn(new rt(Ai.c[0]).multiplyScalar(.45).getHex(),{emissive:Ai.c[1],emissiveIntensity:.22})):Ms("d"+i,()=>Cr(i,!0)),Ti=(i,e=1)=>Ai?Ms("skg"+e,()=>vn(Ai.c[1],{emissive:Ai.c[1],emissiveIntensity:e})):Ms("g"+i+e,()=>vn(Qn[i],{emissive:Qn[i],emissiveIntensity:e})),Zo=new xn(.5,1,5).translate(0,.5,0),Ir=new Rn(1),$c=new In(1,1,1,10,1,!0),xd=new jn(1,.05,6,40),ln=(i,e)=>new Nt({color:i,transparent:!0,opacity:e,blending:Bn,depthWrite:!1,side:$t}),qn=(i,e,t)=>{let n=new Oe(i,e);return n.userData.sharedGeo=!0,n.castShadow=!1,t.add(n),n};function Dr(i,e,t){if(e<3)return null;let n=[],s=t.x||0,r=t.z||0,a=t.y1-t.y0,o=t.r,c=(h,u,f,p)=>{let d=ln(u,.95),y=[];for(let v=0;v<h;v++){let g=qn(Ir,d,i);g.scale.set(f,f*1.7,f),y.push(g)}n.push(v=>y.forEach((g,m)=>{let M=v*(1.5+m*.27)+m*2.1,_=(m/h+v*p)%1,S=Math.sin(_*Math.PI);g.position.set(s+Math.cos(M)*(o+.035),t.y0+a*_,r+Math.sin(M)*(o+.035)),g.rotation.y=v*3+m,g.scale.set(f*S,f*1.7*S,f*S)}))};if(e===3)c(3,13215999,.014,.1);else if(e===4){c(6,16767088,.014,.16);let h=qn($c,ln(16762960,.13),i);h.position.set(s,t.y0+a/2,r),h.scale.set(o*1.6+.02,a*1.05,o*1.6+.02),n.push(u=>{h.material.opacity=.1+Math.sin(u*3)*.05})}else if(e===5){let h=ln(16725012,.7),u=ln(16760906,.85),f=t.mode==="lite",p=f?2:Math.max(3,Math.min(8,Math.round(a/.13))),d=[],y=Math.min(.075,o*1.2+.03)*(f?.62:1);for(let v=0;v<=p;v++){let g=v===p,m=v%2?1:-1,M=y*(g?1.35:1),_=qn(Zo,h,i);qn(Zo,u,_).scale.set(.5,.62,.5),_.position.set(s+(g?0:m*Math.min(o,.09)*.7),g?t.y1-M*.4:t.y0+a*(v+.4)/p,r),d.push({f:_,side:g?0:m,sz:M,i:v})}n.push(v=>{for(let g of d){let m=1+.32*Math.sin(v*11+g.i*1.7)+.18*Math.sin(v*17.3+g.i*.6);g.f.scale.set(g.sz*(.85+.15*Math.sin(v*9+g.i)),g.sz*2.3*m,g.sz*.55),g.f.rotation.z=-g.side*(.5+.16*Math.sin(v*7+g.i))}}),f||c(4,16742970,.011,.5)}else if(e>=6){let h=t.mode==="lite",u=t.mode==="halo";if(!h&&!u&&o<=.1){let f=qn($c,ln(16773312,.2),i);f.position.set(s,t.y0+a/2,r),f.scale.set(o*1.25+.016,a*1.06,o*1.25+.016),n.push(p=>{f.material.opacity=.17+Math.sin(p*2.4)*.06})}if(!h){let f=qn(xd,ln(16771496,.9),i);f.position.set(s,t.y1,r),f.scale.setScalar(Math.min(o+.06,.17)),f.rotation.x=Math.PI/2,n.push(p=>{f.rotation.z=p*1.4,u||(f.rotation.y=Math.sin(p*.9)*.35)})}if(!u){let f=new xt;f.position.set(s,t.y1+.03,r);let p=ln(16777215,.95),d=h?.6:1;for(let[y,v,g]of[[.011,.075,.011],[.075,.011,.011],[.011,.011,.075]])qn(Ir,p,f).scale.set(y*d,v*d,g*d);i.add(f),n.push(y=>{f.rotation.set(y*.7,y*1.1,0),f.scale.setScalar(1+.3*Math.sin(y*4))})}c(h||u?3:6,16774872,.011,.22)}return h=>{for(let u of n)u(h)}}var yd=(i,e)=>new Nt({color:i,transparent:!0,opacity:e,depthWrite:!1,side:$t});function v1(i,e,t){let n=[],s=t.x||0,r=t.z||0,a=t.y1-t.y0,o=t.r,c=Math.max(0,Math.min(6,e.r||0)),h=e.c[2],u=e.c[3]||e.c[1],f=m=>{let M=Math.sin(m*127.1+311.7)*43758.5453;return M-Math.floor(M)},p=(m,M,_,S,L={})=>{let R=L.m||ln(M,.95),A=[];for(let B=0;B<m;B++){let E=qn(Ir,R,i);A.push(E)}n.push(B=>A.forEach((E,x)=>{let F,O;if(L.jump){let J=Math.floor(B*14+x*3.3);F=f(J+x*17),O=f(J*1.7+x)*6.28}else F=((x/m+B*S)%1+1)%1,O=B*(L.orbit??1.5+x*.27)+x*2.1;let Q=L.twinkle?.4+.6*Math.abs(Math.sin(B*(3+x)+x*1.9)):Math.sin(F*Math.PI),N=o+.035+(L.rad||0);E.position.set(s+Math.cos(O)*N,t.y0+a*F,r+Math.sin(O)*N),E.rotation.y=B*3+x,E.scale.set(_*Q,_*(L.sy??1.7)*Q,_*Q)}))},d=(m,M,_=1.6)=>{let S=qn($c,ln(m,M),i);return S.position.set(s,t.y0+a/2,r),S.scale.set(o*_+.02,a*1.05,o*_+.02),n.push(L=>{S.material.opacity=M*(.8+Math.sin(L*3)*.3)}),S},y=(m,M,_=1)=>{let S=ln(m,.7),L=ln(M,.85),R=Math.max(2,Math.min(3+c,Math.round(a/.13))),A=[],B=Math.min(.075,o*1.2+.03)*(.7+c*.06)*_;for(let E=0;E<=R;E++){let x=E===R,F=E%2?1:-1,O=B*(x?1.35:1),Q=qn(Zo,S,i);qn(Zo,L,Q).scale.set(.5,.62,.5),Q.position.set(s+(x?0:F*Math.min(o,.09)*.7),x?t.y1-O*.4:t.y0+a*(E+.4)/R,r),A.push({f:Q,side:x?0:F,sz:O,i:E})}n.push(E=>{for(let x of A){let F=1+.32*Math.sin(E*11+x.i*1.7)+.18*Math.sin(E*17.3+x.i*.6);x.f.scale.set(x.sz*(.85+.15*Math.sin(E*9+x.i)),x.sz*2.3*F,x.sz*.55),x.f.rotation.z=-x.side*(.5+.16*Math.sin(E*7+x.i))}})},v=m=>{let M=new xt;M.position.set(s,t.y1+.03,r);let _=ln(m,.95);for(let[S,L,R]of[[.011,.075,.011],[.075,.011,.011],[.011,.011,.075]])qn(Ir,_,M).scale.set(S,L,R);i.add(M),n.push(S=>{M.rotation.set(S*.7,S*1.1,0),M.scale.setScalar(1+.3*Math.sin(S*4))})},g=2+c;switch(e.fx){case"flame":y(h,u),c>=2&&p(Math.ceil(g/2),u,.011,.5);break;case"frost":d(h,.13),p(g,u,.012,-.12,{sy:1});{let m=ln(h,.75),M=2+Math.floor(c/2);for(let _=0;_<M;_++){let S=qn(Ir,m,i),L=_%2?1:-1;S.position.set(s+L*(o+.012),t.y0+a*(_+.6)/(M+.4),r),S.scale.set(.012,.05+c*.004,.006),S.rotation.z=-L*.5}}break;case"shadow":{let m=yd(h,.5);p(g+1,h,.03,.22,{m,sy:1.2,rad:-.02}),p(Math.ceil(g/2),u,.01,.3),d(u,.07,2.2)}break;case"light":if(d(h,.2,1.4),p(g,u,.011,.22),c>=3&&v(16777215),c>=4){let m=qn(xd,ln(h,.9),i);m.position.set(s,t.y1,r),m.scale.setScalar(Math.min(o+.06,.17)),m.rotation.x=Math.PI/2,n.push(M=>{m.rotation.z=M*1.4})}break;case"water":d(h,.16,1.9),p(g+1,u,.009,-.55,{sy:3,orbit:.4});break;case"bolt":d(h,.1,1.2),p(g+1,u,.008,0,{jump:1,sy:5});break;case"leaf":p(g,h,.016,.1,{sy:.35,orbit:.9,rad:.02}),p(Math.ceil(g/2),u,.008,.2);break;case"blood":d(h,.1),p(g,h,.01,-.28,{sy:2.6,orbit:.2});break;case"wind":p(g+2,h,.008,.35,{sy:.5,orbit:5,rad:.05});break;case"star":p(g+3,h,.012,.03,{twinkle:1,sy:1,rad:.03}),d(u,.08,2),v(h);break;case"prism":{let m=d(16777215,.2,1.5),M=ln(16777215,.95);p(g+1,16777215,.012,.25,{m:M}),n.push(_=>{m.material.color.setHSL(_*.25%1,1,.6),M.color.setHSL((_*.25+.4)%1,1,.65)}),c>=4&&v(16777215)}break}return m=>{for(let M of n)M(m)}}var _1=[.8,.95,1.15,1.45,1.85,2.4,3.1,3.9];function gd(i,e,t,n){let s=e/1.3,r=[],a=[],o=[],c=[],h=p=>[s*.78*p,s*(.52*Math.sin(p*1.75)-.12*p*p)],u=(p,d,y,v,g)=>{let m=Math.cos(y),M=Math.sin(y),_=(L,R)=>[p+L*m-R*M,d+L*M+R*m],S=new $n;return S.moveTo(p,d),t==="blade"?(S.lineTo(..._(v*.25,g)),S.lineTo(..._(v,0)),S.lineTo(..._(v*.25,-g))):(S.bezierCurveTo(..._(v*.2,g*1.25),..._(v*.8,g*1.1),..._(v,0)),S.bezierCurveTo(..._(v*.8,-g),..._(v*.2,-g*1.1),p,d)),[S,_(v,0)]};for(let p=0;p<i;p++){let d=i>1?p/(i-1):.5,[y,v]=h(d),g=-1.5+1.62*Math.pow(d,1.25),m=s*(.4+.5*d)*(d>.86?1-(d-.86)*1.6:1),[M,_]=u(y,v,g,m,m*n);r.push(M),o.push(_),c.push([y,v]),a.push(u(y,v,g+.06,m*.46,m*n*.8)[0])}let f=new $n;f.moveTo(0,-s*.05);for(let p=0;p<=8;p++){let[d,y]=h(p/8);f.lineTo(d,y+s*.045*(1-p/9))}for(let p=8;p>=0;p--){let[d,y]=h(p/8);f.lineTo(d,y-s*.05*(1-p/10))}return a.push(f),{shapes:r,cov:a,tips:o,bone:c,arm:f}}function M1(i){let e=new $n,t=i.tips,n=i.bone;e.moveTo(0,0);for(let r of n)e.lineTo(r[0],r[1]);let s=t.length;e.lineTo(t[s-1][0],t[s-1][1]);for(let r=s-2;r>=0;r--){let a=t[r+1],o=t[r],c=[(a[0]+o[0])/2,(a[1]+o[1])/2],h=[(n[r][0]+n[r+1][0])/2,(n[r][1]+n[r+1][1])/2];e.quadraticCurveTo(c[0]+(h[0]-c[0])*.3,c[1]+(h[1]-c[1])*.3,o[0],o[1])}return e.lineTo(0,-.04),e}function b1(i){let e=(t,n,s)=>{let r=Math.cos(t),a=Math.sin(t),o=(h,u)=>[h*r-u*a,h*a+u*r],c=new $n;return c.moveTo(0,0),c.bezierCurveTo(...o(n*.1,s*1.5),...o(n*1.05,s*1.3),...o(n,0)),c.bezierCurveTo(...o(n*1,-s*.9),...o(n*.3,-s*.7),0,0),c};return[[e(.62,i*.78,i*.3),e(-.5,i*.56,i*.24)],[e(.62,i*.42,i*.17),e(-.5,i*.3,i*.13)]]}function vd(i,e,t,n){let s=Math.max(0,Math.min(7,n.r||0)),r=_1[s],a=n.kind||"plume",o=new rt(n.c[0]).getHex(),c=new rt(n.c[1]||n.c[0]).getHex(),h=a==="flamme"||a==="lumiere",u=a==="ombre",f=a==="cristal",p=(B,E)=>new ks({color:B,side:$t,emissive:B,emissiveIntensity:E}),d=h?ln(o,.5):u?yd(o,.74):f?new Nt({color:o,transparent:!0,opacity:.6,side:$t,depthWrite:!1}):p(o,s>=4?.55:.38),y=h?ln(c,.55):u?ln(c,.4):f?ln(c,.5):p(c,a==="meca"||s>=5?.7:.4),v=s>=4?ln(c,.13):null,g=[],m=[],M=B=>{let E=r*B;if(a==="papillon"){let O=b1(E);return[[new bi(O[0],12),d,0],[new bi(O[1],10),y,.008]]}if(a==="cuir"){let O=gd(4+Math.min(2,Math.floor(s/2)),E,"blade",.03);return[[new bi(M1(O),8),d,0],[new bi(O.shapes.concat([O.arm]),4),y,.008]]}let x=a==="plume"||a==="flamme"||a==="ombre"?"leaf":"blade",F=gd(Math.min(14,7+s),E,x,a==="meca"?.1:x==="blade"?.085:.13);return[[new bi(F.shapes,6),d,0],[new bi(F.cov,6),y,.008]]},_=s>=6?[[1,0,0],[.6,-.62,-.12],[.44,.5,.12]]:s>=4?[[1,0,0],[.56,-.62,-.12]]:[[1,0,0]];for(let[B,E,x]of _){let F=M(B);for(let[O]of F)m.push(O);for(let O of[-1,1]){let Q=new xt;Q.position.set(O*.05,e+x,t-.01-Math.abs(E)*.04);let N=new xt;N.rotation.z=O*E,N.scale.x=O,Q.add(N);for(let[J,w,te]of F){let V=new Oe(J,w);V.position.z=te,V.castShadow=!w.transparent,V.userData.sharedGeo=!0,V.userData.noBake=!0,N.add(V)}if(v){let J=new Oe(F[0][0],v);J.scale.setScalar(1.06),J.position.z=-.012,J.castShadow=!1,J.userData.sharedGeo=!0,N.add(J)}i.add(Q),g.push({piv:Q,s:O,k:B,tilt:E})}}let S=[];if(s>=5){let B=ln(c,.9);for(let E=0;E<(s>=6?14:8);E++){let x=qn(Ir,B,i);S.push(x)}}let L=4.2-s*.32,R=0,A=(B,E=0)=>{R+=(E-R)*.12;for(let x of g){let F=Math.sin(B*L+Math.abs(x.tilt)*1.3)*(.34+.05*x.k),O=.2+F+Math.sin(B*1.3)*.03;x.piv.rotation.y=x.s*(O*R+(1.05+Math.sin(B*1.1)*.025)*(1-R)),x.piv.rotation.z=-x.s*.3*(1-R),x.piv.scale.setScalar(.72+.28*R)}S.forEach((x,F)=>{let O=B*(.5+F*.07)+F*2.4,Q=r*(.3+.6*(F*.37%1)),N=(F/S.length+B*.12)%1,J=Math.sin(N*Math.PI)*(.012+s*.002);x.position.set(Math.cos(O)*Q*(F%2?1:-1),e-.3+N*r*.9,t-.15-Math.abs(Math.sin(O))*.5),x.scale.set(J,J*1.7,J)})};return A(0,0),R=0,g[0].piv.userData.dispose=()=>{for(let B of m)B.dispose()},A}function _d(i,e,t){let n=new $n;n.moveTo(0,0),n.bezierCurveTo(.25,.1,.75,.09,1,0),n.bezierCurveTo(.75,-.07,.25,-.08,0,0);let s=new bi(n,8),r=[ln(16771504,.34),ln(16777215,.3)],a=[],o=[[1,.56,.9],[.72,.68,1],[.45,.7,1],[.18,.62,.95],[-.1,.52,.9],[-.38,.42,.85],[-.66,.33,.8],[-.95,.24,.7]],c=!0;for(let h of[-1,1]){let u=new xt;u.position.set(h*.05,e,t),o.forEach(([f,p,d],y)=>{let v=new Oe(s,r[y%2]);v.castShadow=!1,c||(v.userData.sharedGeo=!0),c=!1,v.scale.set(h*p,d*p*1.5,1),v.rotation.z=h*f,v.position.z=-y*.004,u.add(v)}),i.add(u),a.push({piv:u,s:h})}return h=>{for(let u of a)u.piv.rotation.y=-u.s*(.38+Math.sin(h*1.8)*.16);r[0].opacity=.3+Math.sin(h*2.6)*.07}}var Kc={epee:{y0:.12,y1:.9,r:.035},dague:{y0:.08,y1:.38,r:.028},espadon:{y0:.2,y1:1.4,r:.06},lamecle:{y0:.1,y1:1,r:.035},masse:{y0:.5,y1:.78,r:.1},guisarme:{y0:1.1,y1:1.66,r:.06},baton:{y0:1.22,y1:1.5,r:.08},arc:{y0:-.36,y1:.76,r:.03,x:.1},orbe:{y0:-.13,y1:.13,r:.12},grimoire:{y0:-.15,y1:.15,r:.13},pistolet:{y0:.05,y1:.3,r:.03},repercuteur:{y0:0,y1:.82,r:.09},harpe:{y0:.05,y1:.92,r:.06,x:.2},anneaux:{y0:-.2,y1:.24,r:.2}};function Md(i,e=0,t=null){Lr={},Ai=t;let n=new xt,s=(r,a,o,c)=>{let h=ae(zt(a,r,.012),ei(e),0,c/2+r/2,0);n.add(h);let u=ae(Dn(a/2,a*1.4,4),ei(e),0,c/2+r+a*.7,0);if(u.scale.z=.14,u.rotation.y=Math.PI/4,n.add(u),n.add(ae(zt(a*.22,r*.9,.016),Hn(e),0,c/2+r*.47,0)),n.add(ae(zt(o,.03,.035),Hn(e),0,c/2+.005,0)),n.add(ae(nn(.016,.016,c,8),Yo())),n.add(ae(Vt(.026,8,6),Hn(e),0,-c/2-.015,0)),e>=2&&n.add(ae(new Rn(.02),Ti(e),0,c/2+.005,.022)),e>=3&&n.add(ae(zt(.008,r*.75,.02),Ti(e,1.4),0,c/2+r*.45,0)),e>=3&&n.add(ae(new Rn(.017),Ti(e),0,-c/2-.045,0)),e>=4)for(let f of[-1,1]){let p=ae(Dn(.018,.09+(e-4)*.025,5),ei(e),f*o/2,c/2+.045,0);p.rotation.z=-f*.55,n.add(p);let d=ae(Dn(.014,.06,5),Hn(e),f*o*.3,c/2-.03,0);d.rotation.z=Math.PI+f*.5,n.add(d)}if(e>=5)for(let f=0;f<3;f++)for(let p of[-1,1]){let d=ae(Dn(.012,a*.9,4),Hn(e),p*a*.62,c/2+r*(.25+f*.22),0);d.rotation.z=-p*1.2,d.scale.z=.4,n.add(d)}};switch(i){case"epee":s(.78,.06,.22,.16);break;case"dague":s(.3,.045,.12,.11);break;case"espadon":s(1.15,.11,.36,.3);break;case"lamecle":s(.9,.055,.14,.14),n.add(ae(zt(.09,.05,.014),Hn(e),.07,.86,0)),n.add(ae(zt(.07,.05,.014),Hn(e),.06,.74,0));{let r=ae(new jn(.06,.014,8,20),Hn(e),0,-.14,0);n.add(r)}break;case"masse":n.add(ae(nn(.018,.02,.7,8),Pr(),0,.25,0)),n.add(ae(Vt(.085,12,8),ei(e),0,.64,0));for(let r=0;r<6;r++){let a=r/6*Math.PI*2,o=ae(Dn(.025,.07,5),Hn(e),Math.sin(a)*.1,.64,Math.cos(a)*.1);o.rotation.set(Math.PI/2*Math.cos(a),0,-Math.PI/2*Math.sin(a)),n.add(o)}e>=2&&n.add(ae(new Rn(.03),Ti(e),0,.745,0));break;case"guisarme":n.add(ae(nn(.017,.017,1.9,8),Pr(),0,.5,0));{let r=ae(Dn(.03,.26,4),ei(e),0,1.57,0);r.scale.z=.3,n.add(r);let a=ae(nn(.2,.2,.014,16,!1),ei(e),.1,1.28,0);a.rotation.x=Math.PI/2,a.scale.set(1,1,1.25),n.add(a);let o=ae(Dn(.04,.16,4),Hn(e),-.08,1.3,0);o.rotation.z=Math.PI/2,o.scale.z=.3,n.add(o),e>=2&&n.add(ae(new Rn(.024),Ti(e),.02,1.28,.02))}break;case"baton":n.add(ae(nn(.016,.02,1.6,8),Pr(),0,.5,0));{let r=ae(new jn(.085,.014,8,20,Math.PI*1.4),ei(e),0,1.37,0);r.rotation.z=Math.PI*.8,n.add(r);let a=ae(Vt(.055,14,10),Ti(e,1.5),0,1.38,0);n.add(a);let o=new ri(Qn[e],.5,2.5);o.position.set(0,1.38,0),n.add(o)}break;case"arc":{let r=ae(new jn(.62,.016,8,28,Math.PI*.8),Pr(),-.5,.2,0);r.rotation.z=-Math.PI*.4,n.add(r);let a=.2+Math.sin(Math.PI*.4)*.62,o=-.5+Math.cos(Math.PI*.4)*.62;n.add(ae(nn(.003,.003,(a-.2)*2,4),Bt(15658734,.5),o,.2,0)),n.add(ae(nn(.022,.022,.14,8),Yo(),.12,.2,0)),e>=2&&n.add(ae(new Rn(.02),Ti(e),.13,.3,0))}break;case"orbe":{n.add(ae(Vt(.09,18,14),Bt(Qn[e],.1,.1,{emissive:Qn[e],emissiveIntensity:1.1})));let r=ae(new jn(.13,.008,6,28),ei(e));if(r.rotation.x=1.2,n.add(r),e>=3){let o=ae(new jn(.15,.006,6,28),ei(e));o.rotation.set(.4,.8,0),n.add(o)}let a=new ri(Qn[e],.6,3);n.add(a)}break;case"grimoire":n.add(ae(zt(.2,.27,.06),Yo())),n.add(ae(zt(.18,.25,.064),Bt(15327174,.9),.012,0,0)),n.add(ae(zt(.205,.275,.05),Bt(Xo[e][1],.6,.3),-.004,0,0)),n.add(ae(new Rn(.03),Ti(e),0,0,.034));break;case"pistolet":n.add(ae(zt(.035,.26,.03),ei(e),0,.16,0)),n.add(ae(nn(.028,.028,.06,10),Hn(e),0,.07,0));{let r=ae(zt(.034,.13,.04),Pr(),0,-.02,-.03);r.rotation.x=-.35,n.add(r)}break;case"repercuteur":{let r=ae(nn(.075,.075,.9,14),ei(e),0,.35,0);n.add(r),n.add(ae(nn(.09,.09,.06,14),Hn(e),0,.78,0)),n.add(ae(nn(.085,.085,.07,14),Hn(e),0,.2,0)),n.add(ae(Vt(.055,12,8),Ti(e,1.6),0,.8,0)),n.add(ae(zt(.04,.16,.05),Yo(),0,.05,-.1))}break;case"harpe":{let r=e>=4?ei(e):Bt(14264636,.3,.85);n.add(ae(nn(.02,.024,.95,8),r,.2,.42,0));let a=ae(new jn(.3,.02,8,18,Math.PI*.6),r,-.04,.72,0);a.rotation.z=Math.PI*.28,n.add(a);let o=ae(zt(.05,.92,.07),Pr(),-.1,.36,0);o.rotation.z=-.52,n.add(o);for(let c=0;c<7;c++){let h=-.2+c*.055,u=.28+c*.09;n.add(ae(nn(.0022,.0022,u,4),Bt(c%3?15985878:Qn[e],.4,0,{emissive:c%3?0:Qn[e],emissiveIntensity:.8}),h,.84-u/2-Math.abs(3-c)*.012,0))}}break;case"anneaux":{let r=[16734842,4704511,16765514];[[-.12,.1],[.12,.1],[0,-.1]].forEach(([a,o],c)=>{n.add(ae(new jn(.14,.018,8,24),ei(e),a,o,c*.02)),n.add(ae(Vt(.05,10,8),Bt(r[c],.3,0,{emissive:r[c],emissiveIntensity:.6}),a,o,c*.02))})}break}return n.userData.tick=Kc[i]?t?v1(n,t,Kc[i]):Dr(n,e,Kc[i]):null,Ai=null,n}function bd(i=0){Lr={};let e=new $n;e.moveTo(-.24,.3),e.quadraticCurveTo(0,.37,.24,.3),e.lineTo(.24,.02),e.quadraticCurveTo(.24,-.26,0,-.42),e.quadraticCurveTo(-.24,-.26,-.24,.02),e.closePath();let t=new _r(e,{depth:.03,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2}),n=hn(0,0,0,ae(t,ei(i)));if(n.add(ae(zt(.05,.66,.012),Hn(i),0,-.04,.05)),n.add(ae(zt(.44,.05,.012),Hn(i),0,.06,.05)),n.add(ae(Vt(.06,12,8),Hn(i),0,.06,.05)),i>=2&&n.add(ae(new Rn(.034),Ti(i),0,.06,.1)),i>=4)for(let[s,r]of[[-.2,.26],[.2,.26],[0,-.34]])n.add(ae(new Rn(.022),Ti(i),s,r,.05));return n.userData.tick=Dr(n,i,{y0:.2,y1:.36,r:.1,z:.03,mode:"lite"}),n}function _s(i){Lr={};let e=new xt,t=Bt(i.b,.85),n=Bt(i.d,.85),s=i.len,r=i.h,a=i.r,o=r-a*.9,c=hn(0,r,0);e.add(c);let h=ae(yn([{y:-s/2,rx:a*.55,rz:a*.6},{y:-s*.36,rx:a*.95,rz:a},{y:0,rx:a*(i.belly||1),rz:a*1.02},{y:s*.3,rx:a*1.02,rz:a*1.08},{y:s/2,rx:a*.62,rz:a*.75}],16),t);h.rotation.x=Math.PI/2,c.add(h);let u=hn(0,a*.35,s*.42);u.rotation.x=i.neckA??.9,c.add(u),u.add(ae(vs(i.neck,a*.62,a*.42,12),t).rotateX(Math.PI));let f=hn(0,i.neck,0);f.rotation.x=-(i.neckA??.9)+(i.headA??.25),u.add(f);let p=i.hs||a*.55,d=ae(Vt(p,12,10),t);if(d.scale.set(.9,.95,1.1),f.add(d),i.beak){let M=ae(Dn(p*.42,p*1.3,8),Bt(15116602,.5),0,-p*.15,p*1.25);M.rotation.x=Math.PI/2+.25,f.add(M)}else{let M=ae(yn([{y:0,rx:p*.7,rz:p*.62},{y:i.snout,rx:p*.42,rz:p*.4,z:-p*.1}],10),i.sn?Bt(i.sn,.85):t,0,-p*.2,p*.5);M.rotation.x=Math.PI/2,f.add(M),f.add(ae(Vt(p*.14,6,5),Bt(723728,.4),0,-p*.15,p*.5+i.snout+p*.02))}for(let M of[-1,1]){if(f.add(ae(Vt(p*.13,8,6),Bt(i.eye||723728,.3,0,i.eyeGlow?{emissive:i.eye,emissiveIntensity:1.5}:null),M*p*.72,p*.2,p*.55)),i.ear==="point"){let _=ae(Dn(p*.3,p*.75,5),t,M*p*.5,p*.95,-p*.05);_.rotation.z=-M*.25,f.add(_)}else if(i.ear==="round")f.add(ae(Vt(p*.28,8,6),t,M*p*.65,p*.75,0));else if(i.ear==="long"){let _=ae(vs(p*1.25,p*.34,p*.14,8,.45),t,M*p*.5,p*.6,-p*.1);_.rotation.set(Math.PI+.2,0,M*.35),f.add(_)}if(i.horns){let _=ae(Dn(p*.2,p*1.3,6),Bt(i.horns,.5),M*p*.5,p*.9,-p*.5);_.rotation.x=-1,_.rotation.z=-M*.2,f.add(_)}}if(i.mane){let M=ae(zt(a*.16,i.neck*1.1,a*.5),Bt(i.mane,.9),0,i.neck*.5,-a*.62);u.add(M)}let y=[];for(let[M,_]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let S=hn(M*a*.62,-a*.3,_*s*.33);c.add(S);let L=o*.52,R=o*.5;S.add(ae(vs(L,i.lw*1.35,i.lw,8),t));let A=hn(0,-L,0);S.add(A),A.add(ae(vs(R,i.lw*.9,i.lw*.7,8),_>0||!i.d2?t:n));let B=ae(Vt(i.lw*1.05,8,6),Bt(i.hoof||1381658,.6),0,-R-i.lw*.2,i.paw?i.lw*.5:0);B.scale.set(1,.6,i.paw?1.5:1),A.add(B),y.push({hip:S,knee:A,ph:(M*_>0?0:Math.PI)+(_<0?.6:0)})}let v=hn(0,a*.35,-s*.48);if(c.add(v),i.tail==="bush"){let M=ae(vs(s*.4,a*.3,a*.14,8),t);M.rotation.x=1.9,v.add(M)}else if(i.tail==="hair"){let M=ae(vs(r*.55,a*.16,a*.26,8),Bt(i.mane||i.d,.9));M.rotation.x=.3,v.add(M)}else if(i.tail==="long"){let M=v;for(let S=0;S<6;S++){let L=hn(0,S?-s*.16:0,0);L.rotation.x=S?-.2:1.85,L.add(ae(vs(s*.17,a*(.42-S*.06),a*(.36-S*.06),8),t)),M.add(L),M=L}let _=ae(Dn(a*.2,a*.5,4),n,0,-s*.2,0);_.rotation.x=Math.PI,M.add(_),e.userData.tail=v}else{let M=ae(Vt(a*.22,8,6),t);v.add(M)}let g=[];if(i.wings)for(let M of[-1,1]){let _=hn(M*a*.7,a*.75,s*.12);c.add(_);let S=new $n,L=i.wings;S.moveTo(0,0),S.quadraticCurveTo(L*.5,L*.5,L,L*.28),S.lineTo(L*.82,0),S.lineTo(L*.72,-L*.22),S.lineTo(L*.52,-L*.08),S.lineTo(L*.42,-L*.3),S.lineTo(L*.22,-L*.14),S.lineTo(L*.12,-L*.3),S.closePath();let R=ae(new bi(S),Bt(i.wd||i.d,.8,0,{side:$t,emissive:i.wd||i.d,emissiveIntensity:.28}));R.scale.x=M,R.rotation.x=1.15,R.castShadow=!1,_.add(R),g.push({w:_,s:M})}(i.extra||(()=>{}))(e,c,f,{body:t,dark:n});let m=0;return{group:e,seat:{y:r+a*.72,z:i.seatZ??0},wide:i.wide||.5,update(M,_){m+=M*(3+_*5)*(_>.02?1:0);let S=_>.02?.35+Math.min(1,_)*.3:0;for(let L of y){let R=Math.sin(m+L.ph);L.hip.rotation.x=R*S,L.knee.rotation.x=Math.max(0,Math.cos(m+L.ph))*S*1.3}c.position.y=r+(_>.02?Math.abs(Math.sin(m*2))*.03*r:Math.sin(performance.now()/700)*.005),u.rotation.x=(i.neckA??.9)+Math.sin(m*2)*.04;for(let{w:L,s:R}of g)L.rotation.z=R*(.25+Math.sin(performance.now()/(_>.02?160:600))*(_>.02?.45:.1))}}}function w1(i){Lr={};let e=new xt,t=Bt(921107,.35,.6),n=Bt(13225430,.2,.95),s=Bt(526346,.9),r=[];for(let f of[-.72,.78]){let p=hn(0,.34,f),d=ae(new jn(.27,.085,10,24),s);d.rotation.y=Math.PI/2,p.add(d);let y=ae(nn(.12,.12,.08,12),n);y.rotation.z=Math.PI/2,p.add(y);for(let v=0;v<5;v++){let g=ae(zt(.02,.5,.03),n);g.rotation.x=v/5*Math.PI,p.add(g)}e.add(p),r.push(p)}let a=ae(Vt(.26,14,10),t,0,.82,.2);a.scale.set(.7,.62,1.3),e.add(a),e.add(ae(zt(.3,.3,.55),Bt(2763312,.4,.8),0,.5,.05));let o=ae(zt(.3,.1,.62),Bt(1708560,.8),0,.8,-.38);e.add(o);let c=ae(nn(.025,.025,.8,8),n,0,.7,.66);c.rotation.x=-.42,e.add(c),e.add(ae(zt(.66,.03,.03),n,0,1.06,.5));let h=ae(Vt(.2,12,8),t,0,.95,.62);h.scale.set(.9,.9,.7),e.add(h),e.add(ae(Vt(.075,10,8),Bt(16774857,.2,0,{emissive:16773808,emissiveIntensity:2}),0,.93,.76)),e.add(ae(zt(.31,.02,.5),Bt(i,.3,0,{emissive:i,emissiveIntensity:1.2}),0,.665,.05));for(let f of[-1,1]){let p=ae(nn(.035,.045,.7,8),n,f*.17,.36,-.55);p.rotation.x=Math.PI/2-.12,e.add(p)}let u=new Oo(16773824,2.2,22,.5,.6);return u.position.set(0,.93,.8),u.target.position.set(0,.2,8),e.add(u,u.target),{group:e,seat:{y:.86,z:-.32},wide:.42,update(f,p){for(let d of r)d.rotation.x+=f*p*22;e.position.y=0}}}var zi={m0:{speed:1.7,make:()=>_s({b:7302776,d:4013125,sn:9144979,len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",eye:16757575,eyeGlow:!0,paw:!0,wide:.5})},m1:{speed:1.9,make:()=>_s({b:8016179,d:4861724,mane:2890769,len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",hoof:15327954,wide:.6,extra:(i,e)=>{let t=ae(zt(.5,.08,.6),Bt(3877406,.8),0,.37,-.05);e.add(t)}})},m2:{speed:2,make:()=>_s({b:6112820,d:3811870,sn:9071184,len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,wide:.78,extra:(i,e)=>{let t=ae(yn([{y:-.6,rx:.5,rz:.2},{y:0,rx:.56,rz:.26},{y:.6,rx:.5,rz:.2}],14),Bt(Xo[2][0],.3,.9),0,.33,0);t.rotation.x=Math.PI/2,e.add(t)}})},m3:{speed:2.9,make:()=>w1(Qn[3])},m4:{speed:2.5,make:()=>_s({b:13214570,d:9071162,wd:15331061,wings:1.6,beak:!0,len:2,h:1.25,r:.36,neck:.6,neckA:.5,headA:.6,hs:.2,lw:.07,ear:"point",tail:"long",eye:1708552,paw:!0,wide:.62,extra:(i,e,t)=>{let n=ae(Vt(.2,10,8),Bt(15987699,.9),0,.02,-.04);n.scale.set(1.05,1.1,1.1),t.add(n)}})},m5:{speed:2.8,make:()=>_s({b:2893368,d:1380892,wd:4865378,wings:2.6,horns:9076896,len:3,h:1.55,r:.5,neck:1.1,neckA:.45,headA:.75,hs:.26,snout:.5,sn:3814216,lw:.11,tail:"long",eye:16731501,eyeGlow:!0,paw:!0,wide:.8,extra:(i,e)=>{for(let t=0;t<7;t++){let n=ae(Dn(.06,.2,4),Bt(4865378,.6),0,.52,1-t*.33);e.add(n)}}})},m6:{speed:3.2,make:()=>_s({b:10130831,d:6972767,sn:15130838,mane:4867391,len:1.5,h:1,r:.27,neck:.48,neckA:.75,headA:.6,hs:.16,snout:.26,lw:.05,ear:"long",tail:"hair",wide:.52,extra:(i,e)=>{let t=ae(yn([{y:-.3,rx:.3,rz:.12},{y:.3,rx:.3,rz:.12}],12),Bt(8007466,.9),0,.2,-.02);t.rotation.x=Math.PI/2,e.add(t);let n=new ri(16773312,.7,6);n.position.set(0,1.2,0),i.add(n)}})}},wd={wolf:()=>_s({b:2761792,d:1380895,sn:4011356,len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",eye:16731501,eyeGlow:!0,paw:!0}),brute:()=>_s({b:2893368,d:1380892,sn:4602976,len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,eye:16757575,eyeGlow:!0,horns:9076896}),drake:()=>{let i=zi.m5.make();return i.group.scale.setScalar(.85),i}};var Qc={gender:"m",height:1,build:1,shoulders:1,legs:1,headSize:1,eyes:1,eyeGap:1,jaw:1,nose:1,brows:0,mouth:1,arms:1,limbs:1,waist:1,chest:1,hips:1,stance:"neutre",move:"neutre",skin:"#e2b594",hair:"court",hairColor:"#2b2019",eyeColor:"#4a6b8a",beard:"aucune",lips:"#b9695f"},$o=["neutre","ninja","souverain","digne","humble","timide"],jo=["neutre","ninja","levitation"],Ed=["court","brosse","mi-long","long","queue","chignon","boucles","rase"],jc={epee:"1h",dague:"1h",masse:"1h",lamecle:"1h",anneaux:"rings",espadon:"2h",guisarme:"2h",baton:"staff",arc:"bow",pistolet:"gun",repercuteur:"cannon",orbe:"magic",grimoire:"magic",harpe:"harp"},Hs=.252;function S1(i,e=1){let t=.6+i*.4;return[[0,.012*i,.015,.018,.058],[.01,.027*i,.026,.032,.047],[.032,.049*i,.043,.056,.032],[.062,.071*t,.057,.08,.018],[.098,.087,.066,.096,.01],[.138,.094,.07,.104,.006],[.178,.092,.07,.104,.004],[.213,.079,.06,.09,.002],[.238,.052,.04,.06,0],[Hs,.014,.011,.016,0]].map(([n,s,r,a,o])=>({y:n,rx:s*e,rz:r*e,rb:a*e,z:o}))}function ga(i,e){if(e<=i[0].y)return i[0];for(let t=0;t<i.length-1;t++)if(e<=i[t+1].y){let n=(e-i[t].y)/(i[t+1].y-i[t].y),s=i[t],r=i[t+1];return{rx:Qt(s.rx,r.rx,n),rz:Qt(s.rz,r.rz,n),rb:Qt(s.rb??s.rz,r.rb??r.rz,n),z:Qt(s.z,r.z,n)}}return i[i.length-1]}var Jo=(i,e,t,n=1)=>{let s=ga(i,t),r=Math.cos(e);return[Math.sin(e)*s.rx*n,t+(n-1)*.1*(t/Hs)**2,s.z+r*(r>=0?s.rz:s.rb)*n]};function Ko(i,e,t){let n=ga(i,t),s=Math.min(.98,Math.abs(e)/n.rx);return n.z+n.rz*Math.sqrt(1-s*s)}var Ki=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function Td(i){return i<.8?.198-.014*(i/.8)**2:i<1.3?Qt(.184,.128,Ki((i-.8)/.5)):i<1.8?Qt(.128,.088,Ki((i-1.3)/.5)):Qt(.088,.04,Ki((i-1.8)/.7))}function Ad(i,e,t,n=28,s=6){let r=[],a=[],o=Hs-.006,c=s+1;for(let f=0;f<n;f++){let p=-Math.PI+f/n*2*Math.PI,d=e(Math.abs(p));for(let y=0;y<=s;y++)r.push(...Jo(i,p,Qt(d,o,Math.sin(y/s*Math.PI/2)),t))}for(let f=0;f<n;f++)for(let p=0;p<s;p++){let d=f*c+p,y=(f+1)%n*c+p,v=d+1,g=y+1;a.push(d,y,v,y,g,v)}let h=r.length/3;r.push(0,Hs+(t-1)*.11,0);for(let f=0;f<n;f++)a.push(h,f*c+s,(f+1)%n*c+s);let u=new Gt;return u.setAttribute("position",new yt(r,3)),u.setIndex(a),u.computeVertexNormals(),u}function Ji(i,e,t,n=0,s=0,r=6,a=6){let o=[];for(let c=a;c>=0;c--){let h=c/a,u=h<.22?Qt(.72,1,h/.22):Math.max(.03,1-Math.pow((h-.22)/.78,1.5));o.push({y:-i*h,x:s*i*h*h,z:n*i*h*h,rx:e/2*u,rz:t/2*u})}return o.push({y:t*.22,rx:e*.22,rz:t*.22}),yn(o,r)}var ai=(i,e=0,t="#000000")=>"#"+new rt(i).lerp(new rt(t),e).getHexString();function Sd(i,e,t){let n=t.lod?512:1024,s=n/2,r=document.createElement("canvas");r.width=n,r.height=s;let a=r.getContext("2d"),o=i.gender==="f",c=Math.PI*2;a.fillStyle=i.skin,a.fillRect(0,0,n,s);let h=(F,O)=>Math.asin(Math.max(-.99,Math.min(.99,F/ga(e,O).rx))),u=(F,O)=>(.5+h(F,O)/c)*n,f=F=>(1-F/Hs)*s,p=s/Hs,d=(F,O)=>n/c/(ga(e,O).rx*Math.cos(h(F,O))),y=(F,O,Q,N)=>{a.save(),a.translate(u(F,O),f(O)),a.scale(Q*d(F,O),-p),N(),a.restore()};if(i.hair){a.fillStyle=ai(i.hairColor,i.hair==="rase"?0:.2),a.globalAlpha=i.hair==="rase"?.62:1;for(let F=0;F<n;F+=2){let O=Math.abs((F/n-.5)*c);a.fillRect(F,0,2,f(Td(O)+(i.hair==="rase"?-.004:.004)))}a.globalAlpha=1}let v=!o&&i.beard&&i.beard!=="aucune"?i.beard:null;if(v){let F=v==="pleine",O=(.5-1.75/c)*n,Q=(.5+1.75/c)*n;if(F){a.fillStyle=i.hairColor,a.beginPath(),a.moveTo(O,f(.125));for(let N=0;N<=40;N++){let J=N/40,w=-1.75+J*3.5,te=Math.abs(w)>1.05?Qt(.066,.125,Ki((Math.abs(w)-1.05)/.6)):.05+.016*Ki(Math.abs(w)/1.05);a.lineTo((.5+w/c)*n,f(te))}a.lineTo(Q,s),a.lineTo(O,s),a.closePath(),a.fill(),y(0,.0445,1,()=>{a.beginPath(),a.moveTo(-.024,-.003),a.quadraticCurveTo(-.012,.0062,0,.0028),a.quadraticCurveTo(.012,.0062,.024,-.003),a.quadraticCurveTo(0,5e-4,-.024,-.003),a.fill()})}else{let N=a.createLinearGradient(0,s,0,f(.066));N.addColorStop(0,ai(i.hairColor)),N.addColorStop(1,i.skin),a.globalAlpha=.42,a.fillStyle=N,a.fillRect(O,f(.066),Q-O,s-f(.066)),a.globalAlpha=.3,a.fillStyle=i.hairColor,y(0,.0445,1,()=>{a.beginPath(),a.ellipse(0,0,.022,.0042,0,0,7),a.fill()}),a.globalAlpha=1}y(0,.037,1,()=>{a.fillStyle=i.skin,a.globalAlpha=F?1:.8,a.beginPath(),a.ellipse(0,-.0015,.017,.0052,0,0,7),a.fill(),a.globalAlpha=1})}let g=o?.13:.05;for(let F of[-1,1])y(F*.047,.071,F,()=>{let O=a.createRadialGradient(0,0,0,0,0,.02);O.addColorStop(0,`rgba(238,104,104,${g})`),O.addColorStop(1,"rgba(238,104,104,0)"),a.fillStyle=O,a.fillRect(-.02,-.02,.04,.04)});y(0,.064,1,()=>{let F=i.nose;a.strokeStyle=ai(i.skin,.4,"#6a2e2a"),a.lineWidth=.0012,a.lineCap="round",a.globalAlpha=.7,a.beginPath(),a.moveTo(-.0042*F,-.0052*F),a.quadraticCurveTo(0,-.0072*F,.0042*F,-.0052*F),a.stroke(),a.globalAlpha=1}),y(0,.037,1,()=>{let F=.0152*i.mouth*(o?.9:1.04);o&&(a.globalAlpha=.62,a.fillStyle=i.lips,a.beginPath(),a.moveTo(-F*.78,0),a.quadraticCurveTo(0,-.0082,F*.78,0),a.quadraticCurveTo(0,-.0016,-F*.78,0),a.fill(),a.beginPath(),a.moveTo(-F*.85,0),a.quadraticCurveTo(-F*.3,.0034,0,.0016),a.quadraticCurveTo(F*.3,.0034,F*.85,0),a.quadraticCurveTo(0,-.0012,-F*.85,0),a.fill(),a.globalAlpha=1),a.strokeStyle=ai(i.lips,.6),a.lineWidth=.0015,a.lineCap="round",a.beginPath(),a.moveTo(-F,9e-4),a.quadraticCurveTo(0,-.0026,F,9e-4),a.stroke(),o||(a.globalAlpha=.32,a.lineWidth=.0012,a.beginPath(),a.moveTo(-F*.36,-.006),a.quadraticCurveTo(0,-.0074,F*.36,-.006),a.stroke(),a.globalAlpha=1)});let m=i.eyes*(o?1.06:1),M=.0202*m,_=(o?.0176:.0136)*m,S=(o?.0114:.0096)*m,L=.1,R=.0398*i.eyeGap+(m-1)*.004,A=ai(i.hairColor,.72,"#120c10"),B=i.eyeColor;for(let F of[-1,1])y(F*R,L,F,()=>{if(t.closed){if(a.strokeStyle=A,a.lineCap="round",a.lineWidth=o?.0028:.0023,a.beginPath(),a.moveTo(-M,.001),a.quadraticCurveTo(0,-S*.95,M*1.08,.0025),a.stroke(),o){a.lineWidth=.0012;for(let G of[.45,.75,1])a.beginPath(),a.moveTo(M*G,-S*.5*(1.1-G)-4e-4),a.lineTo(M*(G+.14),-S*.5*(1.1-G)-.0042),a.stroke()}return}a.save(),a.beginPath(),a.moveTo(-M,-.0012),a.bezierCurveTo(-M*.6,_*1.2,M*.4,_*1.32,M,.0032),a.bezierCurveTo(M*.62,-S*1.15,-M*.45,-S*1.2,-M,-.0012),a.closePath(),a.clip(),a.fillStyle="#fbfbff",a.fillRect(-M*1.2,-S*1.6,M*2.4,(_+S)*1.8);let O=a.createLinearGradient(0,_*1.05,0,_*.15);O.addColorStop(0,"rgba(112,122,168,.8)"),O.addColorStop(1,"rgba(112,122,168,0)"),a.fillStyle=O,a.fillRect(-M*1.2,0,M*2.4,_*1.5);let Q=-M*.05,N=M*.61,J=Math.max(_,S)*1.14,w=(_-S)*.3,te=a.createLinearGradient(0,w+J,0,w-J);te.addColorStop(0,ai(B,.74)),te.addColorStop(.48,ai(B,.12)),te.addColorStop(1,ai(B,.42,"#ffffff")),a.fillStyle=te,a.beginPath(),a.ellipse(Q,w,N,J,0,0,7),a.fill(),a.lineWidth=.0014,a.strokeStyle=ai(B,.78),a.stroke(),a.fillStyle=ai(B,.9),a.beginPath(),a.ellipse(Q,w+J*.1,N*.42,J*.46,0,0,7),a.fill(),a.globalAlpha=.55,a.fillStyle=ai(B,.62,"#ffffff"),a.beginPath(),a.ellipse(Q,w-J*.58,N*.6,J*.26,0,0,7),a.fill(),a.globalAlpha=1,a.fillStyle="#ffffff",a.beginPath(),a.ellipse(Q-F*N*.36,w+J*.42,N*.3,J*.25,0,0,7),a.fill(),a.beginPath(),a.ellipse(Q+F*N*.42,w-J*.4,N*.14,J*.11,0,0,7),a.fill(),a.restore();let V=o?.0037:.0028;if(a.fillStyle=A,a.beginPath(),a.moveTo(-M*1.03,-.0016),a.bezierCurveTo(-M*.6,_*1.2,M*.4,_*1.32,M,.0032),a.lineTo(M*1.24,.0064+(o?.0024:0)),a.bezierCurveTo(M*.55,_*1.32+V*1.7,-M*.5,_*1.2+V*1.2,-M*1.06,3e-4),a.closePath(),a.fill(),o)for(let[G,we,le,Ue]of[[M*.96,.0062,M*1.34,.012],[M*.72,_*.95,M*1.02,_*1.62]])a.beginPath(),a.moveTo(G-.0024,we),a.lineTo(le,Ue),a.lineTo(G+.0012,we-.0018),a.closePath(),a.fill();a.strokeStyle=A,a.lineCap="round",a.globalAlpha=.75,a.lineWidth=.0011,a.beginPath(),a.moveTo(M*.98,.0012),a.bezierCurveTo(M*.78,-S*.9,M*.36,-S*1.14,-M*.08,-S*1.12),a.stroke(),a.strokeStyle=ai(i.skin,.36,"#5a2a2a"),a.lineWidth=.001,a.globalAlpha=.65,a.beginPath(),a.moveTo(-M*.55,_*1.16+V+.0034),a.quadraticCurveTo(M*.1,_*1.36+V+.0042,M*.82,_*.95+V+.004),a.stroke(),a.globalAlpha=1});let E=ai(i.hairColor,.3);for(let F of[-1,1])y(F*R,L+_*1.32+(o?.0128:.0108),F,()=>{let O=o?.0027:.0046,Q=i.brows,N=-Q*.0055,J=Q*.0034+8e-4,w=N*.3+J*.7+.0034;a.fillStyle=E,a.beginPath(),a.moveTo(-M*1.05,N-O*.5),a.quadraticCurveTo(0,w+O*.15,M*1.22,J),a.quadraticCurveTo(0,w+O*.95+8e-4,-M*1.05,N+O*.5),a.closePath(),a.fill()});let x=new Xn(r);return x.colorSpace=jt,x.anisotropy=4,x}function E1(i,e,t){let n=i.gender==="f",s=new xt,r=S1(i.jaw*(n?.92:1.05)),a=Ei(r,3),o=e.shadow?t.skin:Jc(16777215,{map:Sd(i,r,{lod:e.lod,closed:e.closedEyes})});e.shadow||(o.userData.ownMap=!0);let c=dd(a,32);{let d=c.attributes.position,y=c.attributes.normal,v=new Y,g=new Y;for(let m=0;m<d.count;m++)v.set(d.getX(m),d.getY(m)-.118,d.getZ(m)+.012).normalize(),g.set(y.getX(m),y.getY(m),y.getZ(m)).lerp(v,.8).normalize(),y.setXYZ(m,g.x,g.y,g.z)}let h=ae(c,o);s.add(h);let u=null;if(!e.lod&&!e.closedEyes&&!e.shadow){let d=o.map,y=Sd(i,r,{closed:!0});u=v=>{o.map=v?y:d},s.userData.dispose=()=>{d.dispose(),y.dispose()}}for(let d of[-1,1]){let y=ae(Vt(.024,10,8),t.skin,d*.0905,.098,-.006);y.scale.set(.42,1,.72),y.rotation.y=d*.25,s.add(y)}let f=ae(yn([{y:-.007,rx:.0062,rz:.005,z:.001},{y:.003,rx:.0078,rz:.0105,z:.003},{y:.03,rx:.0036,rz:.003,z:-.005}],8),t.skin,0,.066,Ko(r,0,.068)-.0035);if(f.scale.set(i.nose*(n?.85:1),1,.75+i.nose*.4),f.userData.noBake=!0,f.castShadow=!1,s.add(f),!n&&i.beard==="pleine"){let d=ae(yn(Ei([{y:-.05,rx:.012,rz:.012,z:.05},{y:-.025,rx:.036,rz:.028,z:.044},{y:.004,rx:.058*i.jaw,rz:.04,rb:.03,z:.04},{y:.03,rx:.064*i.jaw,rz:.046,rb:.03,z:.033},{y:.048,rx:.05,rz:.03,rb:.02,z:.04}],2),14),t.hair);s.add(d)}let p=T1(i,t.hair,n,r);return p.name="hair",s.add(p),s.userData.rings=r,s.userData.blink=u,s}function T1(i,e,t,n){let s=new xt,r=i.hair,a=new xt,o=new xt,c=new xt;if(a.name="top",o.name="front",c.name="back",s.add(a,o,c),r==="rase")return s;let h=(m,M,_,S,L,R=0,A=1.06)=>{let B=Jo(n,_,S,A),E=ae(M,e,B[0],B[1],B[2]);return E.rotation.order="YXZ",E.rotation.set(-L,_,R),m.add(E),E},u=r==="boucles"?1.1:r==="brosse"?1.05:1.06;a.add(ae(Ad(n,Td,u),e));let f=(m,M=.021,_=.36)=>m.forEach(([S,L,R,A,B])=>h(o,Ji(L,R,M,-.1,B||0),S,.211-Math.abs(S)*.016,_,A,u+.012)),p=(m,M=.04)=>{for(let _ of[-1,1])h(o,Ji(m,M,.022,-.05,0),_*1.08,.172,.1,-_*.06,u),h(o,Ji(m*.7,M*.8,.02,-.05,0),_*1.32,.16,.1,_*.06,u)},d=(m,M,_,S=1.12,L=-.45,R=.236,A=.2)=>{for(let B=0;B<m;B++)h(a,Ji(M*(.9+B*7%5*.05),_,.03,L),A+B/m*6.2832,R,S,B%2?.14:-.12,u)},y=(m,M,_,S,L,R,A,B,E,x=.026)=>{for(let F=0;F<M;F++){let O=Qt(_,S,M>1?F/(M-1):.5);h(m,Ji(R*(.92+F*5%4*.05),A,x,E),O,L,B,F%2?.1:-.1,u)}},v=[[-.84,.066,.046,.3],[-.56,.086,.052,.16],[-.26,.098,.056,.06],[.04,.104,.06,-.08],[.34,.094,.054,-.18],[.62,.082,.05,-.26],[.88,.064,.044,-.32]],g=[[-.88,.07,.05,.42],[-.56,.1,.06,.4],[-.2,.118,.066,.46],[.22,.118,.066,-.46],[.56,.1,.06,-.4],[.88,.07,.05,-.42]];switch(r){case"court":f(v),p(t?.11:.085),d(9,.105,.062),y(a,9,1.5,4.78,.2,.1,.06,.5,-.3),y(c,7,1.75,4.53,.13,.085,.05,.22,-.12);break;case"brosse":f([[-.8,.05,.045,.5],[-.45,.062,.05,.3],[-.12,.07,.05,.1],[.2,.066,.05,-.2],[.55,.06,.05,-.4],[.85,.05,.045,-.55]],.024,.75),p(.07);for(let[m,M,_,S,L]of[[-.62,.218,2.45,.1,.25],[-.2,.224,2.6,.115,.08],[.24,.224,2.6,.12,-.1],[.66,.218,2.45,.1,-.25],[-1.35,.2,2.15,.11,.2],[1.35,.2,2.15,.11,-.2],[-2.05,.2,2.05,.12,.1],[2.05,.2,2.05,.12,-.1],[-2.7,.195,1.95,.125,.1],[2.7,.195,1.95,.125,-.1],[3.14,.2,2,.13,0],[.6,.244,2.95,.1,0],[-1.4,.244,2.9,.1,0],[2.6,.244,2.85,.11,0]])h(a,Ji(S,.074,.05,.14),m,M,_,L,.99);y(c,7,1.6,4.68,.155,.07,.056,1.2,.1);break;case"mi-long":f(v),p(.19,.045),d(9,.12,.066),y(c,9,1.45,4.83,.17,.25,.066,.13,.12,.03),y(a,8,1.6,4.68,.205,.14,.064,.42,-.25);break;case"long":f(t?g:v),p(.34,.044),d(9,.13,.068),y(c,9,1.4,4.88,.17,.56,.074,.1,.03,.032),y(c,6,1.9,4.38,.19,.46,.08,.16,.02,.034);break;case"queue":f(v),p(t?.15:.1),d(8,.1,.062,1.2,-.5);{let m=ae(Vt(.026,10,8),e,...Jo(n,Math.PI,.2,1.1));a.add(m);for(let[M,_,S]of[[0,.4,.62],[.22,.34,.5],[-.22,.34,.5],[0,.28,.82]])h(a,Ji(_,.066,.046,-.3,0),Math.PI,.2,S,M,1.14)}break;case"chignon":f(t?g:v),p(t?.13:.08),d(8,.095,.06,1.2,-.5);{let m=Jo(n,Math.PI,.185,1.3),M=ae(Vt(.05,14,10),e,m[0],m[1],m[2]);M.scale.set(1,.92,.9),a.add(M);for(let _=0;_<5;_++){let S=ae(Ji(.06,.035,.026,.3),e,m[0],m[1],m[2]-.01);S.rotation.set(-1.9,0,_*1.257),a.add(S)}}break;case"boucles":f([[-.8,.07,.056,.3],[-.45,.085,.06,.2],[-.1,.09,.064,0],[.26,.088,.064,-.15],[.6,.08,.06,-.25],[.88,.068,.054,-.3]],.034,.5);for(let[m,M,_,S]of[[.232,8,.1,1.25],[.2,11,.11,.85],[.165,10,.12,.5],[.125,7,.1,.4]])for(let L=0;L<M;L++){let R=m<.19?Qt(1.15,5.13,L/(M-1)):L/M*6.2832+m*9;m<.215&&Math.cos(R)>.5||h(m<.15?c:a,Ji(_,.07,.052,.55,L%2?.25:-.25),R,m,S,L%2?.25:-.25,u)}p(t?.14:.09,.05);break}return s}function bs(i={}){let e=Object.assign({},Qc,i.look||{}),t=i.fx||{},n=e.gender==="f",s=e.build,r=e.shoulders,a=r*(.55+s*.45),o=(.4+s*.6)*e.limbs,c=.5+s*.5,h=i.outfit||{cut:"uniform",c:["#3b4452","#222831","#19c8d8"]},u=i.showArmor!==!1&&i.armor||{},f=(I,Z)=>h.glow?{emissive:I,emissiveIntensity:Z}:void 0,p={skin:Jc(e.skin),hair:vn(e.hairColor)},d=p.skin,y=vn(h.c[0],f(h.c[0],.1)),v=vn(h.c[1],f(h.c[1],.1)),g=vn(h.c[2],f(h.c[2],.22)),m=vn(1907492),M=vn(1250072),_=vn(5922920),S=I=>I._dbl||(I._dbl=Object.assign(I.clone(),{side:$t})),L=[],R={},A=I=>R["m"+I]||(R["m"+I]=Cr(I)),B=I=>R["d"+I]||(R["d"+I]=Cr(I,!0)),E=I=>R["g"+I]||(R["g"+I]=vn(Qn[I],{emissive:Qn[I],emissiveIntensity:.9})),x=I=>(I.userData.joint=!0,I),F=I=>(I.userData.keep=!0,I),O=.47*e.legs,Q=.44*e.legs,N=O+Q+.105,J=new xt,w=x(hn(0,N,0));J.add(w);let te=x(hn(0,0,0));w.add(te);let V={hips:w,spine:te},G=(n?[[-.095,.08,.07,.075,0],[-.03,.158,.1,.108,0],[.05,.15,.094,.1,0],[.165,.106,.076,.078,0],[.26,.124,.09,.086,.004],[.345,.142,.112,.09,.008],[.425,.152*r,.088,.088,0],[.475,.126*r,.07,.074,0],[.505,.058,.052,.056,-.004],[.53,.04,.04,.042,-.006]]:[[-.095,.085,.072,.078,0],[-.03,.15,.098,.106,0],[.06,.146,.094,.1,0],[.165,.13,.086,.09,0],[.27,.152,.1,.098,.004],[.365,.18,.114,.104,.006],[.435,.192*r,.1,.1,0],[.482,.16*r,.08,.084,0],[.51,.07,.06,.064,-.004],[.535,.05,.05,.052,-.006]]).map(([I,Z,ie,$,be],me)=>{let fe=me===1||me===2?e.hips:me===3?e.waist:me===4||me===5?e.chest:1;return{y:I,rx:Z*(me>7?1:s)*fe,rz:ie*(me>7?1:c)*(me===4||me===5?e.chest:me===3?(1+e.waist)/2:1),rb:$*(me>7?1:c)*(me===4||me===5?(1+e.chest)/2:1),z:be}}),we=Ei(G,3),le=I=>ga(we,I),Ue=G[3],ce=G[1],ye=I=>{let Z=le(I);return Z.z+Z.rz},Ae=h.cut,et=Ae==="plate",We=(n?.088:.082)*s*e.hips;te.add(ae(yn(we,24),Ae==="cape"?_:y));let at=n?.037:.046;te.add(ae(nn(at,at*1.1,.12,12),d,0,.555,-.006));let ke=x(hn(0,.57,.012)),Ge=e.headSize*1.06*(e.height<1?1+(1-e.height)*.55:1-(e.height-1)*.18);ke.scale.setScalar(Ge),te.add(ke),V.head=ke;let ot=E1(e,t,p);ke.add(ot);let q=(I,Z)=>{let ie=I.attributes.position,$=I.index.array,be=[];for(let me=0;me<$.length;me+=3){let fe=$[me],Xe=$[me+1],tt=$[me+2];Z((ie.getX(fe)+ie.getX(Xe)+ie.getX(tt))/3,(ie.getY(fe)+ie.getY(Xe)+ie.getY(tt))/3,(ie.getZ(fe)+ie.getZ(Xe)+ie.getZ(tt))/3)&&be.push(fe,Xe,tt)}return I.setIndex(be),I},Le=(I,Z,ie,$=24)=>{let be=Ei(I,3),me=yn(be,$,!1,!1);if(ie){let fe=me.index.array,Xe=[];for(let tt=0;tt<fe.length/6;tt++){let vt=Math.floor(tt/$),St=(tt%$+.5)/$*6.2832;if(ie(St>Math.PI?St-6.2832:St,(be[vt].y+be[vt+1].y)/2))for(let Mt=0;Mt<6;Mt++)Xe.push(fe[tt*6+Mt])}me.setIndex(Xe)}return ae(me,S(Z))},he=(I,Z,ie,$,be=.168)=>{Z=Math.max(Z,(We+.098*o)/ce.rx),te.add(Le([{y:I,rx:ce.rx*Z,rz:ce.rz*Z*1.05,rb:ce.rb*Z*1.05},{y:Qt(I,-.03,.55),rx:ce.rx*Qt(1.09,Z,.6),rz:ce.rz*Qt(1.12,Z*1.05,.6),rb:ce.rb*Qt(1.12,Z*1.05,.6)},{y:-.03,rx:Math.max(ce.rx*1.075,We+.1*o),rz:ce.rz*1.13,rb:ce.rb*1.13},{y:be,rx:Ue.rx*1.06,rz:Ue.rz*1.1,rb:Ue.rb*1.1}],ie,$))},Ce=(I=.27)=>(Z,ie)=>!(Math.abs(Z)<I&&ie<.1),_e=(I,Z,ie,$=1.07)=>{let be=le(I),me=le(Z);te.add(ae(yn([{y:I,rx:be.rx*$,rz:be.rz*$,rb:be.rb*$,z:be.z},{y:Z,rx:me.rx*$,rz:me.rz*$,rb:me.rb*$,z:me.z}],24),ie))},Ne=()=>{_e(.126,.174,M,1.14),te.add(ae(zt(.052,.052,.02),g,0,.15,ye(.15)*1.14+.004))},De=(I,Z,ie,$,be,me=1.014,fe=10)=>{let Xe=[],tt=[];for(let Mt=0;Mt<=fe;Mt++){let Mn=Mt/fe,Lt=Qt(I,Z,Mn),Ct=Qt(ie,$,Mn),un=le(Lt),qt=un.z+un.rz*Math.sqrt(Math.max(.05,1-(Ct/un.rx)**2))*me+.002;if(Xe.push(-Ct,Lt,qt,Ct,Lt,qt),Mt<fe){let bn=Mt*2;tt.push(bn,bn+1,bn+2,bn+1,bn+3,bn+2)}}let vt=new Gt;vt.setAttribute("position",new yt(Xe,3)),vt.setIndex(tt),vt.computeVertexNormals();let St=ae(vt,S(be));St.castShadow=!1,te.add(St)},z=(I,Z,ie,$=1)=>te.add(Le([{y:.488,rx:.086*$,rz:.07*$,rb:.074*$,z:-.004},{y:.488+I,rx:.064*$,rz:.058*$,rb:.062*$,z:-.006}],Z,ie?be=>Math.abs(be)>ie:null,20)),C=(n?.168:.208)*a,ne=.447,xe=(n?.8:1)*o,Me=.275*e.arms,Te=.25*e.arms,Ve=Ae==="robe",Fe=Ae==="cape"?_:y,Ye=Ae==="apron"?d:Fe,it=()=>yn(Ei([{y:-.105,rx:.004,rz:.011},{y:-.094,rx:.009,rz:.024},{y:-.07,rx:.013,rz:.031},{y:-.045,rx:.016,rz:.034},{y:-.015,rx:.016,rz:.028},{y:.012,rx:.014,rz:.018}],2),10);for(let I of[-1,1]){let Z=I<0?"M":"O",ie=x(hn(I*C,ne,0));te.add(ie),ie.add(ae(Zi(Me,[[0,.046*xe],[.16,.051*xe],[.5,.043*xe],[.85,.037*xe],[1,.035*xe]],12),Fe));let $=x(hn(0,-Me,0));if(ie.add($),t.oneArm&&I===-1)$.add(ae(Vt(.04*xe,8,6),Fe));else{$.add(ae(Zi(Te,Ve?[[0,.042*xe],[.5,.06*xe],[1,.082*xe,0,.8]]:[[0,.036*xe],[.22,.041*xe],[.6,.034*xe],[1,.026*xe]],12,Ve?.15:.55),Ye));let me=n?.88:1,fe=ae(it(),Ae==="plate"?v:d,0,-Te,0);fe.scale.setScalar(me),$.add(fe);let Xe=ae(Zi(.045,[[0,.0095],[1,.0065]],8),Ae==="plate"?v:d,0,-Te-.022*me,.028*me);Xe.rotation.x=-.75,Xe.scale.setScalar(me),$.add(Xe),Ae!=="apron"&&!Ve&&$.add(ae(nn(.031*xe,.034*xe,.034,12),Ae==="cape"?v:g,0,-Te+.03,0)),V["hand"+Z]=F(hn(0,-Te-.058*me,.004)),$.add(V["hand"+Z])}V["arm"+Z]=ie,V["elbow"+Z]=$}V.armL=V.armM,V.armR=V.armO,V.elbowL=V.elbowM,V.elbowR=V.elbowO;let ht=We,ve=o,mt=Ae==="track"||Ae==="suit"||Ae==="tail"||Ae==="plate"?y:v,ct=()=>{let I=[[-.058,.022,.02],[-.03,.04,.036],[.03,.046,.036],[.09,.05,.028],[.142,.042,.02],[.168,.02,.011]].map(([ie,$,be])=>({y:ie,rx:$,rz:be,z:.036-be})),Z=yn(Ei(I,2),12);return Z.rotateX(Math.PI/2),Z};for(let I of[-1,1]){let Z=I<0?"M":"O",ie=x(hn(I*ht,-.02,0));w.add(ie),ie.add(ae(Zi(O,n?[[0,.09*ve],[.3,.09*ve],[.7,.066*ve],[1,.052*ve]]:[[0,.086*ve],[.3,.088*ve],[.7,.069*ve],[1,.056*ve]],14),mt));let $=x(hn(0,-O,0));ie.add($);let be=n?.92:1;$.add(ae(Zi(Q,[[0,.054*ve*be],[.25,.06*ve*be,-.008],[.7,.043*ve*be],[1,.036*ve*be]],12),mt)),$.add(ae(Zi(Q*.56,[[0,.054*ve*be*1.16],[.4,.047*ve*be*1.14],[1,.04*ve*be*1.12]],12,.2),m,0,-Q*.44,-.002)),$.add(ae(nn(.062*ve*be,.058*ve*be,.03,12),Ae==="plate"?g:m,0,-Q*.44,-.004));let me=ae(ct(),m,0,-Q-.049,.004);if(me.scale.setScalar(n?.9:1),$.add(me),u.jambieres!=null){let fe=u.jambieres;$.add(ae(Zi(Q*.8,[[0,.07*ve],[.3,.074*ve,-.004],[1,.052*ve]],12,.15),A(fe),0,-Q*.1,.004));let Xe=ae(Vt(.062*ve,10,8),B(fe),0,0,.03);if(Xe.scale.set(1,1.2,.8),$.add(Xe),fe>=2&&$.add(ae(new Rn(.016),E(fe),0,0,.082*ve)),fe>=5){let vt=Dr($,fe,{y0:-.02,y1:.08,r:.03,z:.05,mode:"lite"});vt&&L.push(vt)}let tt=ae(ct(),B(fe),0,-Q-.044,.008);tt.scale.set(1.12,1.1,1.06),$.add(tt)}V["leg"+Z]=ie,V["knee"+Z]=$}V.legL=V.legM,V.legR=V.legO,V.kneeL=V.kneeM,V.kneeR=V.kneeO;let ut=!1,lt=()=>{for(let I of[-1,1])V[I<0?"armM":"armO"].add(ae(zt(.008,Me*.86,.022),g,I*.05*xe,-Me*.5,0)),V[I<0?"legM":"legO"].add(ae(zt(.008,O*.9,.024),g,I*.079*ve,-O*.5,0)),V[I<0?"kneeM":"kneeO"].add(ae(zt(.008,Q*.42,.02),g,I*.055*ve,-Q*.2,0))};switch(Ae){case"uniform":he(-.125,1.1,y),Ne(),De(.175,.488,.009,.009,g),z(.05,g,.17);for(let I of[-1,1]){let Z=ae(zt(.085,.014,.05),g,I*C*.86,.478,0);Z.rotation.z=-I*.32,te.add(Z)}break;case"track":De(.02,.5,.007,.007,g),z(.06,g,.17,1.04),_e(-.045,-.015,v,1.03),lt();break;case"apron":te.add(Le([{y:-O*.92,rx:ce.rx*1.24,rz:ce.rz*1.3},{y:-.03,rx:ce.rx*1.08,rz:ce.rz*1.15},{y:.168,rx:Ue.rx*1.06,rz:Ue.rz*1.13}],g,I=>Math.abs(I)<1.25)),De(.17,.43,.1,.075,g,1.03),Ne(),z(.03,y,.35);break;case"coat":he(-O*.94,n?1.5:1.32,y,Ce()),Ne(),De(.3,.5,.012,.045,g),z(.07,v,.45,1.16);break;case"blouse":he(-O*.8,1.22,y,Ce(.14)),De(.36,.5,.01,.04,v),z(.04,y,.4,1.1);{let I=ae(zt(.055,.05,.012),g,C*.42,.33,ye(.33)*.96+.006);te.add(I),V.armM.add(ae(nn(.06*xe,.06*xe,.05,12),g,0,-.12,0))}break;case"robe":he(-(N-.1),n?1.9:1.55,y),ut=!0,_e(.125,.2,g,1.085),De(.2,.5,.01,.05,g),z(.045,g,.35,1.12);{let I=ae(zt(.05,.34,.012),g,0,-.03,ce.rz*1.24);I.rotation.x=-.08,te.add(I)}break;case"suit":he(-.12,1.07,y,Ce(.14)),De(.24,.5,.006,.05,g),De(.25,.48,.014,.012,v,1.03),z(.035,g,.35);break;case"cape":{he(-.15,1.12,_),Ne(),te.add(ae(yn(Ei([{y:-N*.66,rx:.3,rz:.03,z:-.2},{y:-.12,rx:.27,rz:.045,z:-.165},{y:.3,rx:.215*a,rz:.055,z:-.105},{y:.46,rx:.2*a,rz:.06,z:-.06}],3),16),y)),te.add(Le([{y:.385,rx:.25*a,rz:.135,rb:.14},{y:.455,rx:.215*a,rz:.115,rb:.125},{y:.525,rx:.075,rz:.07,rb:.08}],y));{let I=ae(Vt(.075,12,8),y,0,.535,-.085);I.scale.set(1.25,.6,.8),te.add(I)}te.add(ae(new Rn(.024),E(2),0,.455,.12));break}case"plate":{for(let I of[-1,1]){let Z=ae(Vt(.098,12,8),y,I*C*1.02,ne+.036,0);Z.scale.set(1.15,.72,1.1),te.add(Z),V[I<0?"elbowM":"elbowO"].add(ae(Zi(Te*.7,[[0,.052*xe],[1,.04*xe]],12,.2),y,0,-.02,0))}te.add(ae(new Rn(.028),vn(h.c[2],{emissive:h.c[2],emissiveIntensity:.8}),0,.36,ye(.36)+.012)),he(-O*.5,1.22,g,Ce(.14)),Ne(),z(.05,v,.17,1.1);break}case"tail":{De(.2,.5,.03,.06,g),he(-.1,1.05,y,I=>Math.abs(I)>.6);for(let I of[-1,1]){let Z=ae(zt(.115,.44,.014),v,I*.064,-.22,-ce.rb*1.12);Z.rotation.x=.1,te.add(Z)}for(let I of[-1,1]){let Z=ae(Dn(.022,.05,4),v,I*.024,.497,ye(.49)+.014);Z.rotation.z=I*Math.PI/2,Z.scale.z=.5,te.add(Z)}z(.035,g,.35);break}}if(u.plastron!=null){let I=u.plastron,Z=we.filter(ie=>ie.y>=.175&&ie.y<=.492).map(ie=>({y:ie.y,rx:ie.rx*1.09,rz:ie.rz*1.14,rb:ie.rb*1.12,z:ie.z}));Z.push({y:.522,rx:.088,rz:.08,rb:.084,z:-.004}),te.add(ae(yn(Z,24,!1,!1),S(A(I)))),_e(.175,.2,B(I),1.16);for(let ie of[-1,1]){let $=ae(Vt(.094,12,8),B(I),ie*C*1.04,ne+.042,0);$.scale.set(1.2+I*.03,.7,1.14),te.add($);let be=ae(Vt(.075,12,8),A(I),ie*C*1.12,ne-.02,0);if(be.scale.set(1,.8,1.1),te.add(be),I>=4){let me=ae(Dn(.028,.11,6),A(I),ie*C*1.2,ne+.095,0);me.rotation.z=-ie*.7,te.add(me)}}if(De(.2,.49,.012,.012,B(I),1.16),I>=2&&te.add(ae(new Rn(.03),E(I),0,.375,ye(.375)*1.14+.016)),I>=4)for(let ie of[-1,1])te.add(ae(new Rn(.02),E(I),ie*C*1.04,ne+.1,.03));if(I>=3)for(let ie of[-1,1]){let $=Dr(te,I,{x:ie*C*1.06,y0:ne+.07,y1:ne+(I>=5?.2:.16),r:.05,mode:"lite"});$&&L.push($)}I>=6&&L.push(_d(te,.4,-(G[5].rb+.03)))}if(u.casque!=null){let I=u.casque,Z=ot.userData.rings,ie=S(A(I)),$=me=>me<.55?.138:me<1?Qt(.138,.05,Ki((me-.55)/.3)):me<2.2?.05:.035;ke.add(ae(Ad(Z,$,1.13,32,7),ie)),ke.add(ae(zt(.016,.07,.014),B(I),0,.118,Ko(Z,0,.12)*1.13+.006));{let me=ae(yn(Ei([{y:0,rx:.011,rz:.11,z:-.01},{y:.03,rx:.011,rz:.118,z:-.02},{y:.055,rx:.004,rz:.07,z:-.05}],2),8),B(I),0,.262,0);ke.add(me)}if(I>=2&&ke.add(ae(new Rn(.015),E(I),0,.2,Ko(Z,0,.2)*1.13+.012)),I>=3){let me=ae(yn(Ei([{y:0,rx:.012,rz:.09,z:-.02},{y:.07,rx:.01,rz:.11,z:-.06},{y:.12,rx:.004,rz:.05,z:-.13}],2),8),vn(Qn[I]),0,.285,0);ke.add(me)}if(I>=5)for(let me of[-1,1]){let fe=ae(Dn(.024,.13,6),A(I),me*.112,.215,-.02);fe.rotation.z=-me*.9,ke.add(fe)}if(I>=5){let me=Dr(ke,I,{y0:I>=6?.3:.27,y1:I>=6?.33:.38,r:I>=6?.1:.03,z:-.02,mode:I>=6?"halo":"lite"});me&&L.push(me)}let be=ot.getObjectByName("hair");if(be){be.remove(be.getObjectByName("top"));let me=be.getObjectByName("front");me.children.slice(0,Math.max(0,me.children.length-4)).forEach(fe=>me.remove(fe))}}let Ke=F(hn(0,.3,-(G[4].rb+.05)));te.add(Ke);let Qe=i.main&&i.main.type,ft=i.off&&i.off.type,Pt=Qe?jc[Qe]||"1h":"fist",pt=[],Pe=(I,Z,ie)=>new Jn().setFromEuler(new fs(I,Z,ie));function j(I,Z,ie){let $=x(Md(I.type,I.r,i.skin||null)),be=I.type,me={g:$,type:be,hand:V[ie]},fe={parent:Ke,p:[0,0,0],q:Pe(0,0,0),s:1},Xe={p:[0,0,0],q:Pe(Math.PI/2,Math.PI/2,0),s:1};return be==="orbe"?(fe.parent=te,fe.p=[Z*.3,.52,.12],me.orb=!0,V.orb=$):be==="grimoire"?(fe.parent=te,fe.p=[Z*(ce.rx+.035),.02,.02],fe.q=Pe(0,Z*Math.PI/2,.1),Xe.p=[0,0,.05],Xe.q=Pe(-1.2,Math.PI/2,0),me.hand=V.handO||V.handM):be==="pistolet"?(fe.parent=te,fe.p=[Z*(ce.rx+.04),.03,0],fe.q=Pe(Math.PI+.25,0,0),fe.s=.9,Xe.q=Pe(0,0,Math.PI),Xe.p=[0,.01,.03]):be==="dague"?(fe.p=[Z*.17,.2,0],fe.q=Pe(0,0,Z*(Math.PI-.5))):be==="anneaux"?(fe.p=[0,.02,.01],fe.q=Pe(Math.PI/2-.2,0,0),fe.s=.85,Xe.q=Pe(Math.PI/2,0,0),Xe.p=[0,0,.12],Xe.s=.7):be==="guisarme"||be==="baton"?(fe.p=[-Z*.12,-.62,0],fe.q=Pe(0,0,Z*.3),Xe.p=[0,0,-.1]):be==="arc"?(fe.p=[Z*.1,0,0],fe.q=Pe(0,0,Z*.25),Xe.q=new Jn().setFromRotationMatrix(new Ut().makeBasis(new Y(0,-1,0),new Y(0,0,1),new Y(-1,0,0))),Xe.p=[0,.12,-.2],me.hand=V.handO||V.handM):be==="harpe"?(fe.p=[0,-.45,-.03],fe.s=.85,Xe.q=Pe(Math.PI/2,0,0),Xe.p=[.02,.06,-.42],Xe.s=.64,me.hand=V.handO||V.handM):be==="repercuteur"?(fe.p=[Z*.17,.2,0],fe.q=Pe(0,0,Z*(Math.PI-.5)),Xe.q=Pe(0,0,Math.PI),Xe.p=[0,.06,.1]):(fe.p=[Z*.17,.2,0],fe.q=Pe(0,0,Z*(Math.PI-.5))),$.userData.tick&&L.push($.userData.tick),me.S=fe,me.H=Xe,pt.push(me),Be(me,!1),me}function Be(I,Z){let ie=Z&&I.hand&&!I.orb?I.H:I.S;(Z&&I.hand&&!I.orb?I.hand:I.S.parent).add(I.g),I.g.position.set(ie.p[0],ie.p[1],ie.p[2]),I.g.quaternion.copy(ie.q),I.g.scale.setScalar(ie.s)}Qe&&j(i.main,-1,"handM"),ft&&ft!=="bouclier"&&j(i.off,1,"handO");let He=pt.length>1&&jc[ft]===jc[Qe],st=ft==="bouclier"?i.off.r:u.bouclier;if(st!=null){let I=x(bd(st));I.position.set(.055,-.13,0),I.rotation.y=Math.PI/2,I.scale.setScalar(.8),V.elbowO.add(I),I.userData.tick&&L.push(I.userData.tick)}if(i.aura){let I=new rt(i.aura),Z=new Oe(new fi(.42,.56,40),new Nt({color:I,transparent:!0,opacity:.55,side:$t,blending:Bn,depthWrite:!1}));Z.rotation.x=-Math.PI/2,Z.position.y=.02,J.add(Z),V.aura=Z;let ie=new Oe(nn(.5,.42,1.5,24,!0),new Nt({color:I,transparent:!0,opacity:.1,side:$t,blending:Bn,depthWrite:!1}));ie.position.y=.75,J.add(ie),V.auraCol=ie}J.scale.setScalar(e.height);let je=md(J,!t.shadow&&!t.noInk);if(t.shadow){let I=typeof t.shadow=="string"?t.shadow:"#14141f",Z=new No({color:I,transparent:!0,opacity:.8,emissive:new rt(I).multiplyScalar(.6)});J.traverse(be=>{be.isMesh&&be.material&&!be.material.transparent&&!(be.material.emissiveIntensity>.4)&&(be.material.map&&be.material.userData.ownMap&&be.material.map.dispose(),be.material=Z)});let ie=new Nt({color:t.eyes||"#bfe4ff"}),$=ot.userData.rings;for(let be of[-1,1]){let me=new Oe(Vt(.012,8,6),ie);me.position.set(be*.037,.1,Ko($,.037,.1)+.002),me.scale.set(1.5,.7,.5),ke.add(me)}}J.traverse(I=>{I.isMesh&&(I.castShadow=!I.material.transparent&&!I.userData.ink&&I.userData.noBake!==!0)});let _t=null,Ot=!1,kt=new xt;te.add(kt),i.wings&&(_t=vd(kt,.4,-(G[5].rb+.02),i.wings)),kt.visible=!!i.wings&&i.wings.ground!==!1;let Wt=(I,Z)=>new Nt({color:I,transparent:!0,opacity:Z,side:$t,blending:Bn,depthWrite:!1}),It=[];{let I=new xn(.5,1,6).rotateX(Math.PI).translate(0,-.5,0),Z=Wt("#ff2410",.62),ie=Wt("#ffb27a",.7),$=!0;for(let be of[V.kneeM,V.kneeO]){let me=new Oe(I,Z),fe=new Oe(I,ie);me.castShadow=fe.castShadow=!1,$||(me.userData.sharedGeo=!0),fe.userData.sharedGeo=!0,$=!1,fe.scale.set(.5,.55,.5),me.add(fe),me.position.set(0,-Q-.07,.04),me.visible=!1,be.add(me),It.push(me)}}let Zt=new xt;Zt.visible=!1,J.add(Zt);{let I=i.aura||"#bfe8ff",Z=new Oe(nn(.52,.34,2.3,20,!0),Wt(I,.16));Z.position.y=1.15,Z.castShadow=!1,Zt.add(Z);let ie=Wt("#ffffff",.7),$=zt(.012,.3,.012);for(let me=0;me<9;me++){let fe=new Oe($,ie);fe.castShadow=!1,me&&(fe.userData.sharedGeo=!0),Zt.add(fe)}let be=new Oe(new fi(.3,.62,32).rotateX(-Math.PI/2),Wt(I,.5));be.position.y=.03,be.castShadow=!1,Zt.add(be)}let At={aMx:0,aMy:0,aMz:.08,aOx:0,aOy:0,aOz:.08,eM:-.12,eO:-.12,sX:0,sY:0,hdX:0,hdY:0,hdZ:0,dy:0,rZ:0},rn=i.runPose||null,Rt={};V.armM.rotation.order=V.armO.rotation.order="XZY";let gi={epee:1,dague:1,masse:1,espadon:.75,guisarme:.7,baton:.7,lamecle:1,pistolet:1,repercuteur:.7},zn=new Jn,Yn=new Y(1,0,0),Cn=0,Un=Math.random()*6,Xt=null,_n=!1,Ht=1.5+Math.random()*4,U=0,ee=$o.includes(e.stance)?e.stance:"neutre",se=jo.includes(e.move)?e.move:"neutre",re=st!=null,ue=Qe==="grimoire"||ft==="grimoire";function Je(){Rt.aMx=.04,Rt.aMz=.13,Rt.eM=-.05,Rt.aOx=.04,Rt.aOz=.13,Rt.eO=-.05,Rt.aMy=0,Rt.aOy=0}let P=I=>Object.assign(Rt,I),W=I=>{let Z={};for(let ie in I){let $=ie==="sY"||ie==="aMy"||ie==="aOy",be=ie.replace(/M/,"#").replace(/O/,"M").replace(/#/,"O");Z[ie==="sY"?ie:be]=$?-I[ie]:I[ie]}return Z};function K(I){switch(ee){case"ninja":return P({dy:-.09,sX:.3,hdX:-.24,aMx:-.95,aMy:.8,aMz:.1,eM:-1.95,aOx:-.95,aOy:-.8,aOz:.1,eO:-1.95}),[-.55,.75,.2,.55,.14];case"souverain":return P({sX:-.08,hdX:-.1,aMx:.3,aMy:1.35,aMz:.7,eM:-1.75,aOx:.3,aOy:-1.35,aOz:.7,eO:-1.75}),[0,0,0,0,.13];case"digne":return P({sX:-.04,hdX:.05,aMx:-.6,aMy:1.42,aMz:.04,eM:-1.8,aOx:-.5,aOy:-1.42,aOz:.04,eO:-1.95}),[0,0,0,0,.1];case"humble":return P({sX:.2,hdX:.28,aMx:-.32,aMy:1,aMz:.05,eM:-.85,aOx:-.32,aOy:-1,aOz:.05,eO:-.85}),[0,0,0,0,.01];case"timide":return P({sX:.1,sY:.12+Math.sin(I*.9)*.05,hdX:.24,hdZ:.16,hdY:-.2,aMx:.05,aMz:.04,eM:-.1,aOx:-.15,aOy:-1.3,aOz:.02,eO:-1.25}),[.02,.05,.2,.5,-.02]}return null}let Ee={slash(I,Z){let ie=I<.36,$=I<.66,be=He&&Z%2===1,me=He?(Z>>1)%3:Z%3,fe=me===0?ie?{aMx:-2.55,aMz:.45,eM:-1.1,sY:-.5,sX:-.08}:$?{aMx:-.5,aMz:-.75,eM:-.1,sY:.55,sX:.2}:null:me===1?ie?{aMx:-1.4,aMz:-.95,eM:-1.35,sY:.5}:$?{aMx:-1.4,aMz:.95,eM:-.08,sY:-.55,sX:.1}:null:ie?{aMx:.35,aMz:.2,eM:-2.1,sY:-.45}:$?{aMx:-1.5,aMz:-.12,eM:-.03,sY:.4,sX:.24}:null;fe&&P(be?W(fe):fe)},heavy(I,Z){let ie=I<.42,$=I<.72;Z%2===0?ie?P({aMx:-2.9,aOx:-2.9,aMz:-.2,aOz:-.3,eM:-.8,eO:-.8,sX:-.3,dy:.03}):$&&P({aMx:-.75,aOx:-.75,aMz:-.3,aOz:-.4,eM:-.3,eO:-.3,sX:.5,dy:-.09}):ie?P({aMx:-1.3,aMz:.9,eM:-.6,aOx:-1.3,aOz:-1.2,eO:-.9,sY:-.8}):$&&P({aMx:-1.3,aMz:-.9,eM:-.3,aOx:-1.3,aOz:.6,eO:-.6,sY:.8,sX:.15})},shoot(I,Z){if(I>.8)return;if(Pt==="cannon"){P({aMx:-1.3,aMz:-.05,eM:-.55,aOx:-1.42,aOz:-.5,eO:-.3}),I>.3&&I<.5&&P({sX:-.16,aMx:-1.45});return}let ie=I>.3&&I<.48?{aMx:-1.78,aMz:-.06,eM:-.5}:{aMx:-1.52,aMz:-.06,eM:-.04};P(He&&Z%2===1?W(ie):ie)},bow(I){I<.55?P({aOx:-1.5,aOz:.38,eO:-.04,aMx:-1.5,aMz:.3,eM:-2.35,sY:-.45}):I<.82&&P({aOx:-1.5,aOz:.38,eO:-.04,aMx:-1.45,aMz:.7,eM:-1.2,sY:-.45})},cast(I){I<.4?P({aMx:-.7,aMz:.3,eM:-2.2,sY:-.35}):I<.75&&P({aMx:-1.5,aMz:-.1,eM:-.05,sY:.3,sX:.12})},castUp(I){I<.78&&P({aMx:-2.85,aOx:-2.85,aMz:.4,aOz:.4,eM:-.3,eO:-.3,sX:-.22,hdX:-.3})},slam(I){I<.45?P({aMx:-2.9,aOx:-2.9,aMz:-.15,aOz:-.25,eM:-.6,eO:-.6,sX:-.3,dy:.5*Math.sin(I/.45*Math.PI*.6)}):I<.82&&P({aMx:-.6,aOx:-.6,aMz:-.2,aOz:-.3,eM:-.2,eO:-.2,sX:.7,dy:-.3})},strum(I){P({aOx:-.8,aOz:-.2,eO:-1.6}),I<.35?P({aMx:-1.25,aMz:.4,eM:-1.5}):I<.72&&P({aMx:-1,aMz:-.55,eM:-1.15,sY:.2})},punch(I,Z){let ie=I<.32?{aMx:.3,eM:-2.2,sY:-.4}:I<.66?{aMx:-1.5,aMz:-.15,eM:-.03,sY:.45,sX:.15}:null;ie&&P(Z%2?W(ie):ie)},spin(I){P({aMx:-.35,aOx:-.35,aMz:1.2,aOz:1.2,eM:-.1,eO:-.1,sX:.12})},roll(I){P({aMx:-.9,aOx:-.9,eM:-2,eO:-2,sX:.9,dy:-.4})},flip(I){P({aMx:-.7,aOx:-.7,aMz:.3,aOz:.3,eM:-1.6,eO:-1.6,sX:.55,hdX:.2})},dash(I){P({sX:.85,hdX:-.55,aMx:1,aOx:1,aMz:.28,aOz:.28,eM:-.25,eO:-.25,dy:-.24})},hurt(I){P({sX:-.28,aMz:.5,aOz:.5,hdX:-.25})}};return{group:J,joints:V,height:(N+.57+Hs*Ge)*e.height,seatDrop:N*e.height,cat:Pt,dual:He,inks:je,scale:e.height,get armed(){return _n},get acting(){return Xt?Xt.name:null},get move(){return se},get stance(){return ee},setArmed(I){if(I=!!I,I!==_n){_n=I;for(let Z of pt)Be(Z,I)}},setStyle(I){I.stance&&$o.includes(I.stance)&&(ee=I.stance),I.move&&jo.includes(I.move)&&(se=I.move)},play(I,Z=.5,ie=0,$=1){Ee[I]&&(Xt={name:I,t:0,dur:Z,c:ie,turns:$})},hand(I,Z){let ie=V[Z?"handO":"handM"]||V.handO||V.handM;return ie?ie.getWorldPosition(I):J.getWorldPosition(I)},update(I,Z={}){let ie=Math.min(3.2,Z.speed||0),$=U+=I,be=Math.sin($*1.6),me=!!Z.fly&&!Z.riding&&!Z.down,fe=se==="levitation"&&!me&&!Z.riding&&!Z.down,Xe=ie>.02,tt=se==="ninja"&&ie>.9&&!me&&!Z.riding&&!Z.down;Un+=I*(4.6+ie*3.4)*(tt?1.3:1)*(Xe?1:0),P({aMx:be*.02,aMy:0,aMz:.08,aOx:-be*.02,aOy:0,aOz:.08,eM:-.12,eO:-.12,sX:be*.008,sY:0,hdX:0,hdY:0,hdZ:0,dy:be*.003,rZ:0});let vt=null,St=!1,Mt=!1;if(Z.riding)vt=[-1.25,1.3,-1.25,1.3,Z.wide||.45],P({sX:.06+be*.01,aMx:-.75,aOx:-.75,eM:-.5,eO:-.5,dy:0}),St=!0;else if(Z.down)vt=[-1.48,1.5,.15,1.65,0],P({sX:.5,hdX:.45,dy:-(O-.06),aMx:-.35,aOx:-.2,eM:-.5,eO:-.3});else if(me){let Ze=Math.min(1,ie/2.2);vt=[.16+Ze*.16,.28-Ze*.1,.3+Ze*.12,.42-Ze*.2,.03],P({sX:.05+Ze*.1,hdX:-Ze*.55,aMx:.2+Ze*.5,aOx:.2+Ze*.5,aMz:.34,aOz:.34,eM:-.14,eO:-.14,dy:Math.sin($*2)*.03})}else if(Xe&&fe){let Ze=Math.min(1,ie/2),l=Math.sin($*1.7);vt=[-.3,.58,.04+Ze*.05,.1,0],P({sX:.05+Ze*.09,hdX:-.03-Ze*.06,aMx:.12+Ze*.16+l*.02,aOx:.12+Ze*.16-l*.02,aMz:.16+Ze*.05,aOz:.16+Ze*.05,eM:-.22,eO:-.22})}else if(Xe){let Ze=Math.max(0,Math.min(1,ie-.75)),l=tt?.72:(ut?.3:.55)+Math.min(ie,1.4)*(ut?.12:.3),T=Math.sin(Un),b=(.7+Ze)*l*1.5;vt=[T*l,Math.max(0,-Math.cos(Un))*b,-T*l,Math.max(0,Math.cos(Un))*b,0],St=!0,P(tt?{sX:.8,hdX:-.58,aMx:.72+T*.05,aOx:.72-T*.05,aMz:.1,aOz:.1,eM:-.08,eO:-.08,sY:T*.05,dy:-.1+Math.abs(Math.cos(Un))*.03}:{aMx:-T*l*.8,aOx:T*l*.8,eM:-.25-Ze*.9-Math.max(0,-T)*.4,eO:-.25-Ze*.9-Math.max(0,T)*.4,sX:.04+Ze*.2,sY:T*.07,dy:Math.abs(Math.cos(Un))*.025*(1+Ze)})}else!_n&&!Xt&&(vt=K($),Mt=!0);if(fe&&(Xe||(vt=[-.2,.42,.02,.08,0]),St=!1,Rt.dy=.24+Math.sin($*2.2)*.02),_n&&!me&&!Z.riding&&!Z.down&&!tt){let Ze=Rt.aMx,l=Rt.aOx,T=Rt.sY;fe&&(Rt.aMz=Rt.aOz=.08,Rt.eM=Rt.eO=-.12),Je(),Xe&&!fe&&(Rt.aMx+=Ze*.55,Rt.aOx+=l*.55,Rt.eM=Rt.eO=-.22,Rt.sY+=T)}if(rn==="aion"&&_n&&Xe&&ie>.9&&!me&&!Z.riding&&!Z.down){let Ze=Math.sin(Un);P({aOx:-1.3,aOy:-.95,aOz:.12,eO:-1.95,aMx:1+Ze*.05,aMy:0,aMz:.22,eM:-.04,sY:.26+Ze*.04}),fe||(Rt.sX=.5,Rt.hdX=-.36)}let Mn=0,Lt=0;if(Xt){Xt.t+=I;let Ze=Xt.t/Xt.dur;Ze>=1?Xt=null:(Ee[Xt.name](Ze,Xt.c),Xt.name==="spin"&&(Mn=Ki(Ze)*6.2832*Xt.turns),Xt.name==="roll"&&(Lt=Ki(Ze)*6.2832,vt=[-1.7,2.2,-1.7,2.2,0],St=!1),Xt.name==="flip"&&(Lt=-Ki(Ze)*6.2832,vt=[-1.75,2.25,-1.75,2.25,0],St=!1),Xt.name==="dash"&&!fe&&(vt=[-1.05,.55,.75,.95,0],St=!1),Xt.name==="slam"&&Ze<.45&&(vt=[-.5,1.1,.3,.9,0],St=!1))}let Ct=1-Math.exp(-(Xt||Z.riding?30:tt?16:12)*I);for(let Ze in At)At[Ze]+=(Rt[Ze]-At[Ze])*Ct;V.armM.rotation.set(At.aMx,At.aMy,-At.aMz),V.armO.rotation.set(At.aOx,At.aOy,At.aOz),V.elbowM.rotation.x=At.eM,V.elbowO.rotation.x=At.eO,te.rotation.x=At.sX,te.rotation.y=At.sY,w.position.y=N+At.dy,w.rotation.y=Mn,w.rotation.x=Lt,w.rotation.z=At.rZ,ke.rotation.set(At.hdX,At.hdY+(Xe||Xt||ee==="timide"?0:Math.sin($*.4)*.08),At.hdZ);let un=St?1:1-Math.exp(-(vt?16:8)*I),qt=vt||[0,0,0,0,0];if(V.legM.rotation.x+=(qt[0]-V.legM.rotation.x)*un,V.kneeM.rotation.x+=(qt[1]-V.kneeM.rotation.x)*un,V.legO.rotation.x+=(qt[2]-V.legO.rotation.x)*un,V.kneeO.rotation.x+=(qt[3]-V.kneeO.rotation.x)*un,V.legM.rotation.z+=(-qt[4]-V.legM.rotation.z)*un,V.legO.rotation.z+=((qt[5]??qt[4])-V.legO.rotation.z)*un,V.orb){let Ze=V.orb;_n?Ze.position.set(-.26,.42+Math.sin($*2)*.03,.34):Ze.position.set(-.3,.52+Math.sin($*2)*.03,.12),Ze.rotation.y=$}V.aura&&(V.aura.rotation.z=$*.5,V.aura.material.opacity=.42+Math.sin($*2.2)*.14,V.auraCol.material.opacity=.08+Math.sin($*1.7)*.03);{let Ze=_n&&!Xt&&!me&&!Z.riding&&!Z.down&&!tt&&!(rn==="aion"&&Xe&&ie>.9)?Xe?.5:.92:0;if(Cn+=(Ze-Cn)*(1-Math.exp(-(Xt?40:10)*I)),_n)for(let l of pt)l.hand&&!l.orb&&gi[l.type]&&l.g.quaternion.copy(zn.setFromAxisAngle(Yn,Cn*gi[l.type])).multiply(l.H.q)}for(let Ze of L)Ze($);_t&&(kt.visible=me||i.wings.ground!==!1,kt.visible&&_t($,me?1:0));for(let Ze=0;Ze<It.length;Ze++){let l=It[Ze];if(l.visible=fe,fe){let T=1+.28*Math.sin($*13+Ze*1.9)+.14*Math.sin($*21+Ze),b=Math.min(1,ie/2);l.scale.set(.04,(.075+b*.04)*T,.04),l.rotation.x=-.1-b*.45}}let bn=Mt&&ee==="digne";if(Zt.visible=bn,bn){let Ze=Zt.children;Ze[0].material.opacity=.13+Math.sin($*5)*.05,Ze[0].scale.set(1+Math.sin($*7)*.04,1,1+Math.sin($*7)*.04);for(let l=1;l<=9;l++){let T=($*.9+l*.37)%1,b=l*2.4+$*.6;Ze[l].position.set(Math.cos(b)*.44,T*2.2,Math.sin(b)*.44),Ze[l].scale.y=.6+T}Ze[1].material.opacity=.5+Math.sin($*6)*.2,Ze[10].rotation.y=-$,Ze[10].scale.setScalar(1+Math.sin($*5)*.06)}let Ri=ot.userData.blink;Ri&&(Ht-=I,Ht<0&&(Ri(Ht>-.11),Ht<=-.11&&(Ht=2.2+Math.random()*4)))}}}function Rd(i,e,t={}){let n=new Ns({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.outputColorSpace=jt,n.toneMapping=Ii,n.shadowMap.enabled=!0,n.shadowMap.type=fa;let s=new gs,r=new ms(n);s.environment=r.fromScene(new Ar,.04).texture,r.dispose();let a=new En(28,1,.1,50);s.add(new wr(16777215,9078440,1.15));let o=new xs(16774890,2.15);o.position.set(1.1,2.6,3.4),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-2,right:2,top:3,bottom:-1,near:.5,far:12}),o.shadow.bias=-.0015,s.add(o);let c=new xs(58879,1.1);c.position.set(-3,2,-3),s.add(c);let h=new xs(10185727,.9);h.position.set(3,1.5,-3),s.add(h);let u=document.createElement("canvas");u.width=u.height=256;let f=u.getContext("2d"),p=f.createRadialGradient(128,128,10,128,128,128);p.addColorStop(0,"rgba(0,240,255,.34)"),p.addColorStop(.45,"rgba(139,92,246,.16)"),p.addColorStop(1,"rgba(0,0,0,0)"),f.fillStyle=p,f.fillRect(0,0,256,256),f.strokeStyle="rgba(0,240,255,.5)",f.lineWidth=2,f.beginPath(),f.arc(128,128,84,0,7),f.stroke(),f.strokeStyle="rgba(0,240,255,.2)",f.beginPath(),f.arc(128,128,108,0,7),f.stroke();let d=new Oe(new Di(1.5,48),new Nt({map:new Xn(u),transparent:!0,depthWrite:!1}));d.rotation.x=-Math.PI/2,s.add(d);let y=new Oe(new Di(1.5,32),new zo({opacity:.45}));y.rotation.x=-Math.PI/2,y.position.y=.002,y.receiveShadow=!0,s.add(y);let v=new xt;s.add(v);let g=null,m=null,M=t.zoom||"body",_=t.yaw??-.35,S=null,L=0,R=!1,A=!!t.walk,B={y:.9,d:4.6};function E(w){g&&(v.remove(g.group),Si(g.group)),m&&(v.remove(m.group),Si(m.group),m=null),g=bs(w),v.add(g.group),w.armed&&g.setArmed(!0),w.mount&&zi[w.mount]?(m=zi[w.mount].make(),qo(m.group),v.add(m.group),g.group.position.set(0,m.seat.y-g.seatDrop,m.seat.z),g.wide=m.wide):g.group.position.set(0,0,0)}E(e);function x(){let w=i.clientWidth||300,te=i.clientHeight||400;(i.width!==Math.round(w*n.getPixelRatio())||i.height!==Math.round(te*n.getPixelRatio()))&&(n.setSize(w,te,!1),a.aspect=w/te,a.updateProjectionMatrix())}let F=w=>{S={x:w.clientX,yaw:_},L=performance.now(),i.setPointerCapture&&i.setPointerCapture(w.pointerId)},O=w=>{S&&(_=S.yaw+(w.clientX-S.x)*.012,L=performance.now())},Q=()=>{S=null};i.addEventListener("pointerdown",F),i.addEventListener("pointermove",O),i.addEventListener("pointerup",Q),i.addEventListener("pointercancel",Q),i.style.touchAction="pan-y";let N=performance.now();function J(w){if(R)return;requestAnimationFrame(J);let te=Math.min(.05,(w-N)/1e3);if(N=w,!i.isConnected||i.offsetParent===null)return;x(),t.spin&&M!=="face"&&!S&&w-L>2500&&(_+=te*.25),v.rotation.y=_;let V=g.height+(m?m.seat.y-g.seatDrop:0),G=a.aspect,we=Math.max(V,1.8),le=g.scale||1,Ue=M==="face"?{y:V-.15*le,d:1.12*Math.max(.75,le)/Math.min(1,G*.9)}:m?{y:V*.5,d:Math.max(V*2.6,3.4/Math.min(1,G*1.2))}:{y:we*.5,d:we*2.35/Math.min(1,G*1.9)};B.y+=(Ue.y-B.y)*Math.min(1,te*6),B.d+=(Ue.d-B.d)*Math.min(1,te*6),a.position.set(0,B.y+(M==="face"?.02:.25),B.d),a.lookAt(0,B.y,0),t.freeze||(g.update(te,{speed:A&&!m?2:0,riding:!!m,wide:g.wide}),m&&m.update(te,A?.8:0)),n.render(s,a)}return requestAnimationFrame(J),{set:E,setZoom(w){M=w},setArmed(w){g&&g.setArmed(w)},play(w,te,V,G){g&&(g.setArmed(!0),g.play(w,te,V,G))},get avatar(){return g},setWalk(w){A=w},setYaw(w){_=w,L=performance.now()},snapshot(){return n.render(s,a),i.toDataURL("image/png")},dispose(){R=!0,i.removeEventListener("pointerdown",F),i.removeEventListener("pointermove",O),i.removeEventListener("pointerup",Q),Si(s),n.dispose()}}}var Qo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var oi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},A1=new vr(-1,1,1,-1,0,1),eh=class extends Gt{constructor(){super(),this.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yt([0,2,0,0,2,0],2))}},R1=new eh,ws=class{constructor(e){this._mesh=new Oe(R1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,A1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var el=class extends oi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ys.clone(e.uniforms),this.material=new gn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ws(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var xa=class extends oi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},tl=class extends oi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var nl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new Wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new el(Qo),this.copyPass.material.blending=Pi,this.clock=new ko}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}xa!==void 0&&(a instanceof xa?n=!0:a instanceof tl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var il=class extends oi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Cd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var zr=class i extends oi{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Re(e.x,e.y):new Re(256,256),this.clearColor=new rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Wn(r,a,{type:Mi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let p=new Wn(r,a,{type:Mi});p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let d=new Wn(r,a,{type:Mi});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Cd;this.highPassUniforms=ys.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Re(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Qo;this.copyUniforms=ys.clone(u.uniforms),this.blendMaterial=new gn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Bn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new rt,this.oldClearAlpha=1,this.basic=new Nt,this.fsQuad=new ws(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new gn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Re(.5,.5)},direction:{value:new Re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new gn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};zr.BlurDirectionX=new Re(1,0);zr.BlurDirectionY=new Re(0,1);var Pd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var sl=class extends oi{constructor(){super();let e=Pd;this.uniforms=ys.clone(e.uniforms),this.material=new Uo({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ws(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ft.getTransfer(this._outputColorSpace)===Jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Hc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===pa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Gc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var va=[1,3,6,10,20],Id=120,Ld=7,th=.12,nh={templier:1.012,gladiateur:1.027,rodeur:1.046,assassin:.966,sorcier:1.027,spiritualiste:1.173,clerc:1.027,aede:1.017,pistolero:.982,ethertech:.99,peintre:1.021,barde:1.012,"templier:epee":1.012,"gladiateur:guisarme":1.027,"rodeur:arc":1.046,"assassin:dague+dague":.966,"assassin:epee+dague":.976,"sorcier:orbe":1.027,"spiritualiste:orbe":1.173,"clerc:baton":1.027,"aede:baton":1.017,"pistolero:pistolet+pistolet":.982,"ethertech:lamecle":.99,"peintre:anneaux":1.021,"templier:espadon":1.008,"gladiateur:espadon":.997,"rodeur:dague+epee":.984,"assassin:dague+epee":.962,"assassin:epee+epee":.966,"sorcier:grimoire":1.027,"spiritualiste:grimoire":1.173,"clerc:masse":1.036,"aede:masse":1.058,"pistolero:repercuteur":1.016,"barde:harpe":1.012},_a=[{id:"feu",name:"Esprit de feu",color:16742954,hp:4,mult:.9,iv:1.2,aoe:3.6,sc:1},{id:"terre",name:"Esprit de terre",color:11569738,hp:10,mult:1.05,iv:1.4,aoe:3,sc:1.25,taunt:28,cc:{slow:[.3,2]}},{id:"vent",name:"Esprit de vent",color:10217680,hp:3,mult:.3,iv:.4,aoe:2.6,sc:.9},{id:"eau",name:"Esprit d\u2019eau",color:4892927,hp:4,mult:.75,iv:1,aoe:2.8,sc:1,heal:2}],Ur=i=>i.busy??(i.cast??.25)+.2+(i.dmg&&i.dmg.hits>1?(i.dmg.hits-1)*(i.dmg.gap||.15):0),ya={dague:{spd:1.2,hits:1,crit:.1,cdm:2.3,var:.03,reach:2.1},epee:{spd:1.4,hits:2,crit:.05,cdm:2.1,var:.1,reach:2.6},masse:{spd:1.5,hits:2,crit:.01,cdm:2.1,var:.1,reach:2.5},espadon:{spd:2.4,hits:3,crit:.05,cdm:1.85,var:.06,reach:3.4,kd:.25},guisarme:{spd:2.8,hits:4,crit:.05,cdm:1.85,var:.25,reach:3.9,kd:.45},baton:{spd:2,hits:3,crit:.05,cdm:1.85,var:.1,reach:3.3,kd:.25},lamecle:{spd:2.4,hits:3,crit:.05,cdm:1.5,var:.1,reach:2.8,kd:.25},anneaux:{spd:2,hits:2,crit:.05,cdm:1.85,var:.06,range:15},arc:{spd:2.4,hits:2,crit:.05,cdm:1.85,var:.1,range:25,kb:2.5},orbe:{spd:2.2,hits:1,crit:.05,cdm:1.5,var:.18,range:15},grimoire:{spd:2.2,hits:1,crit:.05,cdm:1.5,var:.06,range:25},pistolet:{spd:1.8,hits:1,crit:.05,cdm:2.1,var:.06,range:15},repercuteur:{spd:2.8,hits:1,crit:.05,cdm:1.5,var:.18,range:25},harpe:{spd:2.4,hits:1,crit:.05,cdm:1.5,var:.1,range:25},poing:{spd:1.4,hits:1,crit:0,cdm:1.5,var:.1,reach:1.9}},C1=1/6,P1=1,$i={crit:.5,aspd:.5,dodge:.3,parry:.4,block:.5},Dd={espadon:1,guisarme:1,baton:1},I1={arc:"bow",pistolet:"shoot",repercuteur:"shoot",harpe:"strum",orbe:"cast",grimoire:"cast"};function zd(i,e,t){let n=ya[e]||ya.poing,s=t&&t!=="bouclier"&&ya[t]&&!n.range&&!Dd[e]?ya[t]:e==="pistolet"&&t==="pistolet"?ya.pistolet:null,r=Ud(i,e||"poing",n,!!s,t==="bouclier"),a=[1];s&&a.push(P1);for(let h=1;h<n.hits+(s?s.hits-1:0);h++)a.push(.1);let o=a.reduce((h,u)=>h+u,0),c=r.basic;return c.dur=n.spd*C1*(c.castK||1),c.seq=a,c.F=o,c.mult=c.rate*c.dur/o,c.kind==="melee"?c.reach=(n.reach||2.4)+(c.reachPlus||0):n.range&&!c.range&&(c.range=n.range),r.W=n,r.var=n.var,r.ref={crit:.05+n.crit,cdm:n.cdm},r.id=i+":"+(e||"poing")+(s?"+"+t:""),r}function Ud(i,e,t,n,s){let r=!!Dd[e],a=!!t.range,o=I1[e]||"slash",c=r?"heavy":"slash",h=(u,f)=>({name:u,ult:2,exec:1,cast:.5,busy:.95,lock:.8,cc:f});switch(i){case"templier":return{role:"Tank",melee:!0,sustain:!0,passive:{guard:.35,block:s?.25:0},basic:{kind:"melee",anim:c,hit:r?.56:.5,rate:3,arc:r?1.45:1.3},skills:[{name:"Capture",cd:8,anim:"cast",cast:.2,dmg:{kind:"target",mult:1.2,range:20},cc:{pull:1,kd:1.5}},{name:"Choc du bouclier",cd:10,anim:"heavy",cast:.3,dmg:{kind:"melee",mult:1.6,r:4.2,arc:1.6},cc:{kd:2.5}},{name:"Brise-armure",cd:14,anim:"slash",cast:.25,dmg:{kind:"melee",mult:1,r:4,arc:1.6},cc:{weak:[.3,8],aspd:[.3,8]}},{name:"Rempart inviolable",ult:1,anim:"castUp",cast:.4,lock:.5,dmg:{kind:"around",mult:3,r:7},cc:{kd:2},self:{inv:6,heal:25}},h("Ch\xE2timent",{kd:3})]};case"gladiateur":return{role:"Combattant de zone",melee:!0,sustain:!0,passive:{kdOnCrit:1.5,guard:.15},basic:{kind:"melee",anim:c,hit:r?.56:.5,rate:3.1,arc:r?1.9:1.6},skills:[{name:"Encha\xEEnement",cd:7,anim:"spin",cast:.12,turns:2,dmg:{kind:"melee",mult:[.9,1.2,1.8],hits:3,gap:.28,r:4.2,arc:1.9}},{name:"Onde entravante",cd:9,anim:"slam",cast:.34,lock:.3,dmg:{kind:"around",mult:1.3,r:7},cc:{slow:[.5,5]}},{name:"Posture de rage",cd:20,anim:"castUp",cast:.3,self:{atk:[.35,10]}},{name:"Tourbillon de guerre",ult:1,anim:"spin",cast:.12,turns:3,dmg:{kind:"around",mult:1.1,hits:5,gap:.17,r:6.5},self:{inv:1}},h("Ex\xE9cution")]};case"rodeur":return{role:"Archer",melee:!a,sustain:!a,basic:a?{kind:"shot",anim:o,hit:.58,rate:2.5,proj:"arrow",speed:60}:{kind:"melee",anim:c,hit:.5,rate:2.5,arc:1.3},skills:[{name:"Pi\xE8ge \xE0 pointes",cd:10,anim:"cast",cast:.2,special:"trap",dmg:{mult:2,r:4},cc:{root:4,slow:[.4,6],sil:4}},{name:"Tir de pr\xE9cision",cd:14,anim:o,cast:.3,dmg:{kind:"shot",mult:4.2,crit:1,pierce:1,size:1.8,proj:a?"arrow":"bolt",speed:70}},{name:"Camouflage",cd:16,anim:"cast",cast:.1,busy:.2,self:{stealth:[4,2.2],aspd:[.3,8]}},{name:"Pluie de fl\xE8ches",ult:1,anim:o,cast:.4,dmg:{kind:"zone",mult:.75,hits:8,gap:.22,r:6},cc:{slow:[.5,4]}},h("Fl\xE8che du silence",{sil:6})]};case"assassin":return{role:"Furtif",melee:!0,sustain:!0,passive:{dodge:.2,back:{crit:.25,cdm:.5}},basic:{kind:"melee",anim:"slash",hit:.5,rate:3.1,arc:1.2,rune:1},skills:[{name:"Embuscade",cd:6,anim:"slash",cast:.12,move:"tp",dmg:{kind:"target",mult:1.6,range:22,aoe:4},cc:{stun:1.5},self:{atk:[.25,3]},chain:{name:"Balayage",anim:"spin",cast:.1,dmg:{kind:"around",mult:.9,r:4.8},cc:{kd:1.5}}},{name:"Frappe runique",cd:9,anim:"spin",cast:.1,dmg:{kind:"around",mult:.6,hits:3,gap:.14,r:4.8},cc:{stun:1,runes:1},chain:{name:"Explosion de runes",anim:"slam",cast:.15,special:"runes",dmg:{kind:"around",mult:.6,per:.3,r:6}}},{name:"Dissimulation",cd:18,anim:"cast",cast:.1,busy:.2,self:{stealth:[8,3],reset:1}},{name:"Danse des mille lames",ult:1,anim:"spin",cast:.1,turns:3,dmg:{kind:"around",mult:.85,hits:6,gap:.14,r:5.5},cc:{stun:.8},self:{inv:1.2}},h("Assassinat",{stun:2})]};case"sorcier":return{role:"Mage de destruction",melee:!1,basic:{kind:"shot",anim:"cast",castK:2,hit:.62,rate:3.1,proj:"bolt",speed:30,aoe:2.6,size:1.5,slowSelf:.35},skills:[{name:"Sommeil",cd:12,anim:"cast",cast:.35,area:{kind:"zone",r:4.5},cc:{sleep:6},color:12167423},{name:"Racines de glace",cd:9,anim:"cast",cast:.45,lock:.4,dmg:{kind:"zone",mult:1.5,r:5.5},cc:{root:4,slow:[.5,6],sil:4},color:9428223},{name:"M\xE9tamorphose",cd:16,anim:"cast",cast:.4,area:{kind:"target"},cc:{tree:5},color:9166954},{name:"M\xE9t\xE9ore",ult:1,anim:"castUp",cast:1.1,lock:1.1,meteor:1,dmg:{kind:"zone",mult:6,r:7}},h("N\xE9ant")]};case"spiritualiste":return{role:"Invocateur",melee:!1,basic:{kind:"shot",anim:"cast",hit:.5,rate:1.4,proj:"bolt",speed:32,dot:[.3,6]},skills:[{name:"Esprit \xE9l\xE9mentaire",cd:10,anim:"castUp",cast:.4,special:"spirit"},{name:"Peur",cd:12,anim:"cast",cast:.35,area:{kind:"around",r:8},cc:{fear:4}},{name:"Absorption",cd:10,anim:"cast",cast:.35,dmg:{kind:"target",mult:1.6,steal:60,range:26},cc:{sap:[.3,8]},self:{shield:[20,8]}},{name:"Fureur \xE9l\xE9mentaire",ult:1,anim:"castUp",cast:.5,special:"enrage",eq:6,dmg:{kind:"zone",mult:3,r:6}},h("Marche des ombres",{fear:3})]};case"clerc":return{role:"Soigneur",melee:!1,passive:{guard:.2,rez:90},basic:{kind:"shot",anim:"cast",hit:.5,rate:3,proj:"bolt",speed:32,range:20,aoe:2.6},skills:[{name:"Soin \xE9clair",cd:4,anim:"cast",cast:.1,busy:.25,self:{heal:25,hot:[3,6]}},{name:"Ch\xE2timent paralysant",cd:10,anim:"cast",cast:.35,dmg:{kind:"zone",mult:1.7,r:4.5},cc:{para:3}},{name:"Grande gu\xE9rison",cd:12,anim:"castUp",cast:1.3,lock:1.3,self:{heal:70}},{name:"Jugement divin",ult:1,anim:"castUp",cast:.7,lock:.7,dmg:{kind:"zone",mult:5,r:7},cc:{root:4}},{name:"Barri\xE8re sacr\xE9e",ult:2,anim:"castUp",cast:.3,self:{inv:6,heal:100,guard:[.5,12]}}]};case"aede":return{role:"Soutien",melee:!0,sustain:!0,passive:{atk:.1,regen:.01,mantra:1},basic:{kind:"melee",anim:"heavy",hit:.56,rate:2.5,arc:1.8,reachPlus:r?0:.5},skills:[{name:"Jugement in\xE9luctable",cd:8,anim:"cast",cast:.25,dmg:{kind:"shot",mult:1.5,proj:"bolt",range:22,speed:40},cc:{stun:2.5}},{name:"Parole de vie",cd:5,anim:"cast",cast:.1,busy:.25,self:{heal:18}},{name:"Chant d\u2019inspiration",cd:16,anim:"castUp",cast:.3,self:{crit:[.4,10],aspd:[.2,10]},area:{kind:"around",r:9},cc:{aspd:[.4,8]}},{name:"Onde de choc",ult:1,anim:"slam",cast:.4,lock:.5,dmg:{kind:"around",mult:4.5,r:6.5},cc:{kd:2}},{name:"Mantra de victoire",ult:2,anim:"castUp",cast:.3,self:{atk:[.5,8],crit:[1,8],heal:40}}]};case"pistolero":return{role:"Tireur mobile",melee:!1,basic:e==="repercuteur"?{kind:"shot",anim:"shoot",hit:.36,rate:3,proj:"shell",speed:36,aoe:2.6,bounce:1}:{kind:"shot",anim:"shoot",hit:.34,rate:2.8,proj:"bullet",speed:85,bounce:2},skills:[{name:"Canon magique",cd:7,anim:o,cast:.3,lock:.25,dmg:{kind:"shot",mult:4.2,proj:"shell",aoe:3.8,size:2,speed:36},cc:{stun:1.5}},{name:"Tir entravant",cd:9,anim:o,cast:.2,dmg:{kind:"zone",mult:1.1,r:5},cc:{slow:[.6,5],root:2}},{name:"Saut de recul",cd:6,anim:"flip",cast:.05,move:"back",dmg:{kind:"shot",mult:.8,hits:3,gap:.08,proj:"bullet",speed:85},self:{inv:.5,atk:[.2,4]}},{name:"D\xE9luge de plomb",ult:1,anim:o,cast:.1,dmg:{kind:"shot",mult:.55,hits:12,gap:.07,proj:"bullet",speed:85}},h("Tir fatal")]};case"ethertech":return{role:"Pilote de Mecha",melee:!0,sustain:!0,basic:{kind:"melee",anim:"slash",hit:.5,rate:2.8,arc:1.3},mecha:{hp:2.5,dur:20,basic:{kind:"melee",anim:"punch",dur:.46,hit:.5,mult:1.7,reach:4.6,arc:1.7,mech:1,seq:[1],F:1}},skills:[{name:"Mecha",cd:12,anim:"castUp",cast:.5,special:"mecha"},{name:"Grappin",cd:8,anim:"cast",cast:.2,dmg:{kind:"target",mult:1.2,range:20},cc:{pull:1,stun:1.5}},{name:"Champ d\u2019entrave",cd:10,anim:"slam",cast:.3,dmg:{kind:"around",mult:1.3,r:6.5},cc:{root:3}},{name:"Salve de missiles",ult:1,anim:"castUp",cast:.4,dmg:{kind:"zone",mult:1,hits:5,gap:.16,r:5.5},cc:{stun:1}},h("Annihilation",{stun:2})]};case"barde":return{role:"Musicien",melee:!1,basic:{kind:"shot",anim:"strum",hit:.45,rate:1.75,proj:"wave",speed:24,thru:1,note:1},skills:[{name:"Accord final",cd:7,anim:o,cast:.25,special:"notes",dmg:{kind:"target",mult:1.2,range:24}},{name:"Berceuse",cd:12,anim:o,cast:.4,area:{kind:"around",r:7},cc:{sleep:5},color:12167423},{name:"M\xE9lodie de vie",cd:9,anim:o,cast:.3,self:{heal:22,gauge:30,shield:[15,8]},area:{kind:"around",r:8},cc:{slow:[.4,5]}},{name:"Symphonie",ult:1,anim:"castUp",cast:.5,eq:3,dmg:{kind:"around",mult:4,r:8},cc:{notes:5}},h("Requiem")]};case"peintre":return{role:"Contr\xF4le de zone",melee:!1,basic:{kind:"shot",anim:"slash",hit:.5,rate:2.35,proj:"paint",speed:32,aoe:1.2,every:{n:3,k:2,lock:.3}},skills:[{name:"Marque de couleur",cd:8,anim:"slash",cast:.2,dmg:{kind:"target",mult:1,range:16},cc:{weak:[.35,8],slow:[.3,5]}},{name:"Lien gravitationnel",cd:12,anim:"castUp",cast:.4,lock:.5,dmg:{kind:"around",mult:1.2,r:9},cc:{pull:1,root:2.5}},{name:"Toile d\u2019absorption",cd:14,anim:"cast",cast:.2,busy:.3,self:{absorb:[.4,8]}},{name:"Fr\xE9n\xE9sie chromatique",ult:1,anim:"castUp",cast:.4,eq:3,dmg:{kind:"around",mult:3,r:7},cc:{para:2},self:{aspd:[.4,10],crit:[.4,10]}},h("Chef-d\u2019\u0153uvre",{para:3})]}}return Ud(a?"rodeur":"gladiateur",e,t,n,s)}function Nd(i,e=30){let t=Math.min($i.crit,i.ref.crit),n=i.ref.cdm,s=i.passive||{},r=.01,a=0,o=0,c=0,h=0,u=0,f=0,p=-1,d=0,y=null,v=0,g=null,m=0,M=[0,0,0],_=[0,0],S=[0,0],L=[0,0],R=[0,0],A={},B=O=>a<O[1]?O[0]:0,E=(O,Q={})=>{let N=O*(1+(s.atk||0)+B(_))*(1+B(R)),J=!!Q.crit;d&&!Q.pet&&(N*=d,J=!0,d=0),N*=J?n:1+Math.min($i.crit,t+B(S))*(n-1),o+=N},x=O=>{O&&(O.atk&&(_[0]=O.atk[0],_[1]=a+O.atk[1]),O.crit&&(S[0]=O.crit[0],S[1]=a+O.crit[1]),O.aspd&&(L[0]=O.aspd[0],L[1]=a+O.aspd[1]),O.stealth&&(d=O.stealth[1]),O.reset!=null&&(M[O.reset-1]=0))},F=O=>{O&&(O.weak&&(R[0]=O.weak[0],R[1]=a+O.weak[1]),O.dot&&(A[O.key||"x"]=[O.dot[0],a+O.dot[1]]),O.notes&&(u=Math.min(5,u+O.notes),f=a+8))};for(;a<e;){for(let O in A)a<A[O][1]&&(o+=A[O][0]*(1+B(R))*(1+(s.atk||0))*(1+t*(n-1))*r);if(u&&a<f&&(o+=u*th*(1+B(R))*(1+t*(n-1))*r),y&&(v+=r,v>=y.iv&&(v-=y.iv,E(y.mult,{pet:1}))),a>=c){let O=-1;if(!g){for(let Q=0;Q<3;Q++)if(i.skills[Q]&&M[Q]<=a){O=Q;break}}if(g||O>=0){let Q=g||i.skills[O],N=Q.dmg;if(c=a+Ur(Q),g?g=null:(M[O]=a+Q.cd,Q.chain&&(g=Q.chain)),Q.special==="spirit"?(y=_a[0],v=0):Q.special==="mecha"&&(a>=p&&(p=a+i.mecha.dur),M[O]=p+Q.cd),N){let J=N.hits||1,w=0;Q.special==="notes"&&(w=.7*u,u=0),Q.special==="runes"&&(w=N.per*m,m=0);for(let te=0;te<J;te++)E((Array.isArray(N.mult)?N.mult[te]:N.mult)+(te===0?w:0),{crit:N.crit})}Q.cc&&Q.cc.runes&&(m=Math.min(5,m+Q.cc.runes*(N&&N.hits||1))),F(Q.cc),x(Q.self)}else{let Q=a<p?i.mecha.basic:i.basic,N=++h,J=Q.mult*Q.F,w=Q.dur*(1-Math.min($i.aspd,B(L)));Q.every&&N%Q.every.n===0&&(J*=Q.every.k,w+=Q.every.lock*.5),c=a+w,E(J),Q.dot&&(A.basic=[Q.dot[0],a+Q.dot[1]]),Q.note&&(u=Math.min(5,u+1),f=a+8),Q.rune&&(m=Math.min(5,m+1))}}a+=r}return o}var Od=i=>{let e=i.dmg;if(!e)return i.eq||0;let t=e.hits||1,n=0;for(let s=0;s<t;s++)n+=Array.isArray(e.mult)?e.mult[s]:e.mult;return n+(i.eq||0)};var nt={x:-200,z:70,r:22.4,wall:33.6,gate:.17},kd={gladiateur:16742970,templier:16769162,assassin:11566335,rodeur:10215546,sorcier:16738858,spiritualiste:10185727,clerc:16773296,aede:16765514,pistolero:8386303,ethertech:61695,barde:16751318,peintre:16734842},ih=[16734842,4704511,16765514,9166954],Fd={wolf:{name:"Ombre r\xF4deuse",hp:45,atk:7,spd:6.6,range:1.9,rad:.7,wind:.6,rest:1.1,h:1.3},shade:{name:"Ombre arm\xE9e",hp:70,atk:10,spd:4.8,range:2.4,rad:.5,wind:.7,rest:1,h:2.05},duel:{name:"Duelliste d\u2019ombre",hp:150,atk:13,spd:5.3,range:2.6,rad:.5,wind:.68,rest:.8,h:2.3,elite:!0},pvp:{name:"Daeva d\u2019ombre",hp:165,atk:13,spd:5.4,range:2.6,rad:.5,wind:.68,rest:.8,h:2.3,elite:!0},swift:{name:"Ombre vive",hp:34,atk:5,spd:7.6,range:2,rad:.45,wind:.42,rest:.45,h:1.9},leap:{name:"Ombre bondissante",hp:52,atk:9,spd:5.6,range:2.2,rad:.7,wind:.6,rest:1,h:1.3},archer:{name:"Ombre tireuse",hp:40,atk:7,spd:4.6,range:15,rad:.45,wind:.75,rest:1.1,h:2},brute:{name:"Ombre massive",hp:160,atk:17,spd:3.7,range:2.9,rad:1.1,wind:.85,rest:1.4,h:2},champion:{name:"Champion d\u2019ombre",hp:430,atk:22,spd:4.6,range:3.4,rad:.8,wind:.75,rest:1.1,h:2.95,boss:!0},drake:{name:"Drake d\u2019ombre",hp:640,atk:27,spd:5.2,range:3.9,rad:1.6,wind:.8,rest:1.2,h:2.9,boss:!0},dummy:{name:"Mannequin",hp:1e9,atk:0,spd:0,range:0,rad:.5,h:2}},L1=[[36,252,"wolf",2,1],[-34,318,"swift",3,4],[92,296,"brute",4,1],[150,-246,"pvp",4,1],[58,-292,"leap",5,4],[-176,-160,"archer",6,4],[-300,110,"brute",7,1],[262,130,"pvp",3,1],[-120,240,"shade",5,5],[330,-120,"pvp",8,1]],rl={templier:{name:"Templier d\u2019ombre",main:"epee",off:"bouclier",hp:1.4,atk:.85,range:2.6,wind:1,rest:1,sp:"bash",block:.35},gladiateur:{name:"Gladiateur d\u2019ombre",main:"guisarme",hp:1.15,atk:1.05,range:3.5,wind:1.15,rest:1.1,sp:"whirl"},assassin:{name:"Assassin d\u2019ombre",main:"dague",off:"dague",hp:.85,atk:.8,spd:1.2,range:2.1,wind:.65,rest:.55,sp:"blink"},rodeur:{name:"R\xF4deur d\u2019ombre",main:"arc",hp:.85,atk:.9,range:18,wind:1.05,rest:1.1,ranged:"arrow",kite:1,sp:"trap"},sorcier:{name:"Sorcier d\u2019ombre",main:"orbe",hp:.8,atk:1.15,range:16,wind:1.5,rest:1.1,ranged:"bolt",kite:1,sp:"meteor"},spiritualiste:{name:"Spiritualiste d\u2019ombre",main:"grimoire",hp:.85,atk:.8,range:15,wind:1.2,rest:1.1,ranged:"bolt",kite:1,sp:"summon"},clerc:{name:"Clerc d\u2019ombre",main:"masse",off:"bouclier",hp:1.15,atk:.8,range:13,wind:1.1,rest:1.1,ranged:"bolt",sp:"heal"},aede:{name:"A\xE8de d\u2019ombre",main:"baton",hp:1.15,atk:.9,range:3.2,wind:1.05,rest:1,sp:"stun"},pistolero:{name:"Pistolero d\u2019ombre",main:"pistolet",off:"pistolet",hp:.85,atk:.55,spd:1.1,range:14,wind:.6,rest:.45,ranged:"bullet",sp:"roll"},ethertech:{name:"\xC9thertech d\u2019ombre",main:"lamecle",hp:1.5,atk:1.05,range:3,wind:1.2,rest:1.15,sp:"grab"},barde:{name:"Barde d\u2019ombre",main:"harpe",hp:.85,atk:.85,range:16,wind:1.1,rest:1.1,ranged:"wave",kite:1,sp:"slow"},peintre:{name:"Peintre d\u2019ombre",main:"anneaux",hp:.95,atk:.9,range:11,wind:1,rest:1,ranged:"paint",sp:"slow"}},Bd=["gladiateur","rodeur","templier","sorcier","assassin","clerc","pistolero","spiritualiste","aede","barde","ethertech","peintre"],D1=[[1.5,41],[5,43.5],[-161,58],[-161,82],[-52,78]],z1=new Y(0,1,0),ji=(i,e)=>{let t=i-e;for(;t>Math.PI;)t-=6.2832;for(;t<-Math.PI;)t+=6.2832;return t};function Hd(i){let{scene:e,st:t,player:n,data:s,H:r,cam:a,root:o,pc:c,toast:h,cb:u}=i,f=Object.assign({atk:20,hp:180,def:6,crit:.05,critDmg:1.5,dodge:0},s.combat||{}),p=s.cls&&s.cls.id||"",d=kd[p]||8386303,y=s.hero&&s.hero.main&&s.hero.main.type,v=s.hero&&s.hero.off&&s.hero.off.type,g=zd(p,y,v),m=g.passive||{},M=g.skills;f.ref&&(f.crit=g.ref.crit,f.critDmg=g.ref.cdm);let _=Id/Nd(g)*(nh[g.id]||nh[p]||1),S=f.atk*_,L=M[3]?Ld/(Od(M[3])*_):1,R=[!1].concat(M.map((l,T)=>(s.level||1)<va[T])),A=g.basic,B=A.kind==="melee",E=p==="assassin"||p==="pistolero",x={hp:f.hp,max:f.hp,shield:0,shieldT:0,charge:0,cds:[0,0,0,0,0,0],cdMax:[1,1,1,1,1,1],busy:0,lock:0,combo:0,lastHit:99,inv:0,down:0,armed:!1,queue:!1,idle:0,dashCd:0,dealt:0,atkB:0,atkT:0,critB:0,critT:0,aspdB:0,aspdT:0,guardB:0,guardT:0,absorbB:0,absorbT:0,hot:0,hotT:0,stealthT:0,stealthK:1,rezCd:0,stunT:0,rootT:0,eslowT:0,eslowK:0,chain:[null,null,null,null,null,null],manual:!1,slowK:1,slowT:0,mecha:null,focus:null,focusT:0,spirit:-1},F=Math.min(60,Math.max(0,s.regen||0)),O=[],Q=[],N=[],J=[],w=[],te=[],V={on:!1,wave:0,best:s.arenaBest||0,pending:null,loop:!1},G={shake:0,held:!1,warnT:0,auto:!1,lock:!1,lockE:null,autoMove:null,enemies:O,arena:V,pl:x,allies:w,kit:g,norm:_},we=(l,T)=>J.push({t:l,fn:T}),le=(l,T,b,D)=>Math.hypot(l-b,T-D),Ue=(l,T)=>Math.atan2(l-t.x,T-t.z),ce=(l,T)=>le(l,T,nt.x,nt.z)<nt.r,ye={arc:new fi(.6,1,28,1,Math.PI/2-1.15,2.3).rotateX(Math.PI/2),ring:new fi(.84,1,48).rotateX(-Math.PI/2),tube:new In(1,1,1,24,1,!0).translate(0,.5,0),ball:new pi(1,14,10),arrow:new xn(.04,1,6).rotateX(Math.PI/2),tracer:new In(.03,.03,1.5,5).rotateX(Math.PI/2)};for(let l in ye)ye[l].userData.shared=!0;let Ae=(l,T=.9,b=!0)=>new Nt({color:l,transparent:!0,opacity:T,side:$t,blending:b?Bn:os,depthWrite:!1,fog:!1});function et(l,T,b){return e.add(l),N.push({obj:l,t:0,dur:T,upd:b}),l}function We(l){e.remove(l),l.traverse(T=>{T.material&&T.material.dispose(),T.geometry&&!T.geometry.userData.shared&&T.geometry.dispose()})}function at(l,T,b,D,X,H,k,de=.24){let pe=new xt;pe.position.set(l,T,b),pe.rotation.y=D;let oe=new Oe(ye.arc,Ae(k));oe.rotation.z=X,pe.add(oe),et(pe,de,ge=>{oe.material.opacity=.95*(1-ge),oe.scale.setScalar(H*(.82+ge*.3)),oe.rotation.y=(ge-.5)*.9})}function ke(l,T,b,D,X,H,k=.45,de=.9){let pe=new Oe(ye.ring,Ae(D,de));pe.position.set(l,T+.1,b),et(pe,k,oe=>{pe.scale.setScalar(X+(H-X)*(1-(1-oe)*(1-oe))),pe.material.opacity=de*(1-oe*oe)})}function Ge(l,T,b,D,X,H,k=.5){let de=new Oe(ye.tube,Ae(D,.55));de.position.set(l,T,b),et(de,k,pe=>{let oe=X*(1-pe*.55);de.scale.set(oe,H*Math.min(1,pe*5+.1),oe),de.material.opacity=.6*(1-pe)})}function ot(l,T,b,D,X,H=.25){let k=new Oe(ye.ball,Ae(D,.7));k.position.set(l,T,b),et(k,H,de=>{k.scale.setScalar(X*(.4+de*.8)),k.material.opacity=.7*(1-de)})}function q(l,T,b,D,X=12,H=5,k=.5){let de=new Float32Array(X*3),pe=new Float32Array(X*3);for(let Ie=0;Ie<X;Ie++){let gt=Math.random()*6.2832,bt=Math.random()*1.3-.2,Dt=H*(.4+Math.random()*.8);pe[Ie*3]=Math.cos(gt)*Math.cos(bt)*Dt,pe[Ie*3+1]=Math.sin(bt)*Dt+1.5,pe[Ie*3+2]=Math.sin(gt)*Math.cos(bt)*Dt,de[Ie*3]=l,de[Ie*3+1]=T,de[Ie*3+2]=b}let oe=new Gt;oe.setAttribute("position",new mn(de,3));let ge=new To(oe,new aa({color:D,size:c?.2:.28,transparent:!0,opacity:1,blending:Bn,depthWrite:!1,fog:!1}));ge.frustumCulled=!1;let ze=0;et(ge,k,Ie=>{let gt=(Ie-ze)*k;ze=Ie;for(let bt=0;bt<X*3;bt+=3)de[bt]+=pe[bt]*gt,de[bt+1]+=pe[bt+1]*gt,de[bt+2]+=pe[bt+2]*gt,pe[bt+1]-=9*gt;oe.attributes.position.needsUpdate=!0,ge.material.opacity=1-Ie})}let Le=new Y;function he(l,T,b,D,X){if(Le.set(l,T,b).project(a),Le.z>1||Math.abs(Le.x)>1.1)return;let H=document.createElement("span");H.className="ew-num "+(X||""),H.textContent=D,H.style.left=(Le.x*.5+.5)*o.clientWidth+(Math.random()-.5)*34+"px",H.style.top=(-Le.y*.5+.5)*o.clientHeight+(Math.random()-.5)*14+"px",o.appendChild(H),setTimeout(()=>H.remove(),850)}let Ce=new Oe(ye.ball,Ae(8378623,.16));Ce.scale.setScalar(1.25),Ce.visible=!1,e.add(Ce);let _e=new Oe(ye.ring,Ae(d,.7));_e.visible=!1,e.add(_e);let Ne=(()=>{let l=document.createElement("canvas");l.width=l.height=64;let T=l.getContext("2d");return T.beginPath(),T.moveTo(32,4),T.lineTo(61,58),T.lineTo(3,58),T.closePath(),T.fillStyle="#fff",T.fill(),T.lineWidth=4,T.strokeStyle="#000",T.stroke(),T.fillStyle="#000",T.fillRect(28.5,22,7,20),T.fillRect(28.5,46,7,7),new Xn(l)})();function De(l){let T=l.barCv.getContext("2d");if(T.clearRect(0,0,64,8),T.fillStyle="rgba(0,0,0,.75)",T.fillRect(0,0,64,8),T.fillStyle=l.type==="dummy"?"#ffd479":l.boss?"#ff4d6d":"#ff8a5a",T.fillRect(1,1,62*Math.max(0,Math.min(1,l.hp/l.max)),6),l.runes){T.fillStyle="#e9ddff";for(let b=0;b<l.runes;b++)T.fillRect(3+b*7,2,4,4)}l.barTex.needsUpdate=!0}function z(l,T,b,D=1,X={}){let H=Fd[l],k=l==="pvp"?rl[X.cls||Bd[Math.floor(Math.random()*12)]]:null,de=l==="dummy"||H.boss||k?[1,1,1]:[.85+Math.random()*.35,.85+Math.random()*.3,.8+Math.random()*.4],pe=Math.pow(1.2,D-1)*(X.hpK||1)*(k?k.hp:1)*de[0],oe={type:l,T:H,x:T,z:b,y:r(T,b),yaw:X.yaw??Math.random()*6.28,hp:Math.round(H.hp*pe),atk:H.atk*Math.pow(1.16,D-1)*(X.atkK||1)*(k?k.atk:1),def:4*Math.pow(1.15,D-1),spd:H.spd*(k&&k.spd||1)*de[1],range:k?k.range:H.range,rad:H.rad,P:k,ranged:k?k.ranged:l==="archer"?"arrow":null,wind:(H.wind||.6)*(k?k.wind:de[2]),rest:(H.rest||1)*(k?k.rest:de[2]),spT:k?1+Math.random()*1.5:3+Math.random()*3,side:Math.random()<.5?1:-1,combo:0,minion:!!X.minion,state:X.wild?"idle":"chase",t:0,stun:0,dots:[],flash:0,boss:!!H.boss,elite:!!H.elite,runes:0,runeT:0,tint:!1,home:[T,b],wild:X.wild||null,arena:!!X.arena,lvl:D,lunge:0,n:0,wobT:0,wT:0,rootT:0,slowT:0,slowK:0,silT:0,weakT:0,weakK:0,aspdT:0,aspdK:0,sapT:0,sapK:0,notes:0,noteT:0,noteAcc:0,kd:!1,kdCd:0,zT:0};oe.max=oe.hp;let ge=new xt;if(oe.obj=ge,l==="dummy"){let ze=new on({color:6965802,roughness:.9}),Ie=new on({color:13481066,roughness:1}),gt=new xt;oe.wob=gt,ge.add(new Oe(new In(.07,.1,1,8).translate(0,.5,0),ze)),gt.position.y=.95,gt.add(new Oe(new In(.27,.2,.78,10).translate(0,.42,0),Ie),new Oe(new pi(.19,10,8).translate(0,.98,0),Ie),new Oe(new Kn(1.15,.09,.09).translate(0,.62,0),ze));let bt=new Oe(new Di(.12,16).translate(0,.46,.262),new Nt({color:12597547}));gt.add(bt),ge.add(gt),ge.traverse(Dt=>{Dt.isMesh&&(Dt.castShadow=!0)})}else if(k||l==="swift"||l==="archer"){let ze=k?"#"+(kd[Object.keys(rl).find(Ie=>rl[Ie]===k)]||9133302).toString(16).padStart(6,"0"):l==="archer"?"#4a6a3a":"#3a5a6a";oe.av=bs({look:{gender:Math.random()<.3?"f":"m",height:k?1.1:.95,build:k?1.05:.9,hair:Math.random()<.5?"court":"brosse"},outfit:{cut:k?"coat":"suit",c:["#15121e","#08070c",ze]},armor:k?{plastron:4,casque:k.off==="bouclier"?4:void 0}:{},main:{type:k?k.main:l==="archer"?"arc":"dague",r:k?4:2},off:k&&k.off?{type:k.off,r:4}:l==="swift"?{type:"dague",r:2}:null,fx:{shadow:"#140f22",eyes:k?"#ffd24a":"#c8b6ff",lod:!0}}),oe.av.setArmed(!0),ge.add(oe.av.group),oe.model=oe.av.group,k&&(oe.name=k.name)}else if(l==="shade"||l==="champion"||l==="duel"){let ze=l==="champion",Ie=l==="duel";oe.av=bs({look:{gender:"m",height:ze?1.5:Ie?1.16:1+Math.random()*.08,build:ze?1.2:Ie?1.08:1,shoulders:ze?1.14:Ie?1.08:1,hair:ze?"brosse":"court"},outfit:{cut:ze?"plate":"coat",c:Ie?["#2a1016","#12080b","#8a2a3a"]:["#1a1626","#0e0c16","#3a2a5a"]},armor:ze?{casque:5,plastron:5,jambieres:5}:Ie?{plastron:4}:{},main:{type:ze?"espadon":Ie?Math.random()<.5?"epee":"espadon":Math.random()<.5?"epee":"guisarme",r:ze?5:Ie?4:3},fx:{shadow:ze?"#2a1234":Ie?"#2c1218":"#17152c",eyes:ze?"#ff4d6d":Ie?"#ffd24a":"#c8b6ff",lod:!0}}),oe.av.setArmed(!0),ge.add(oe.av.group),oe.model=oe.av.group}else{let ze=wd[l==="leap"?"wolf":l]();oe.beast=ze,ge.add(ze.group),oe.model=ze.group,l==="leap"&&(ze.group.scale.setScalar(.85),ze.group.traverse(Ie=>{Ie.isMesh&&Ie.material&&Ie.material.color&&(Ie.material=Ie.material.clone(),Ie.material.color.lerp(new rt(2779738),.45))}))}return oe.mats=[],ge.traverse(ze=>{ze.isMesh&&ze.material&&ze.material.emissive&&!oe.mats.includes(ze.material)&&oe.mats.push(ze.material)}),oe.mats.forEach(ze=>{ze.userData.e0=ze.emissive.getHex(),ze.userData.i0=ze.emissiveIntensity}),oe.barCv=document.createElement("canvas"),oe.barCv.width=64,oe.barCv.height=8,oe.barTex=new Xn(oe.barCv),oe.bar=new Yi(new Li({map:oe.barTex,transparent:!0,depthWrite:!1,fog:!1})),oe.bar.scale.set(oe.boss?2.6:1.3,oe.boss?.22:.14,1),oe.bar.position.y=H.h+.3,oe.bar.visible=l!=="dummy",ge.add(oe.bar),De(oe),l!=="dummy"&&(oe.warn=new Yi(new Li({map:Ne,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1})),oe.warn.position.y=H.h+(oe.boss?1.25:.95),oe.warn.visible=!1,oe.warn.renderOrder=9,ge.add(oe.warn)),ge.position.set(T,oe.y,b),ge.rotation.y=oe.yaw,e.add(ge),O.push(oe),!X.quiet&&l!=="dummy"&&(Ge(T,oe.y,b,6962431,1.2+oe.rad,6,.7),ke(T,oe.y,b,9133302,.3,2.4+oe.rad,.55)),oe}function C(l){let T=O.indexOf(l);if(T>=0&&O.splice(T,1),e.remove(l.obj),l.barTex.dispose(),Si(l.obj),l.wild){let b=l.wild;b.es=b.es.filter(D=>D!==l),!b.es.length&&l.state==="dead"&&(b.t=45)}}function ne(l){l.state!=="dead"&&(Fe(l),l.state="dead",l.t=0,l.hp=0,De(l),q(l.x,l.y+l.T.h*.5,l.z,9133302,l.boss?40:18,6,.7),ke(l.x,l.y,l.z,12167423,.4,l.boss?7:3,.6),l.boss&&(G.shake=Math.max(G.shake,.5),h(l.T.name+" terrass\xE9")))}let xe=l=>{x.charge=Math.min(100,x.charge+l)},Me=l=>{l<=0||x.down>0||(x.hp=Math.min(x.max,x.hp+l),he(t.x,t.y+2.1,t.z,"+"+l,"heal"))},Te=()=>(m.atk||0)+(x.atkT>0?x.atkB:0),Ve=(l,T,b)=>he(l.x,l.y+l.T.h+.35,l.z,T,b||"info");function Fe(l){l.treeM&&(l.obj.remove(l.treeM),l.treeM.traverse(T=>{T.geometry&&T.geometry.dispose(),T.material&&T.material.dispose()}),l.treeM=null,l.model&&(l.model.visible=!0))}function Ye(l,T,b,D){if(l.state==="dead")return;Fe(l),l.state==="leap"&&(l.hop=0),l.kind=null;let X=l.state===T;l.state=T,l.stun=Math.max(X?l.stun:0,b),l.kd=!1,Ve(l,D)}function it(l,T,b){if(!T||l.state==="dead"||(T.weak&&(l.weakK=T.weak[0],l.weakT=T.weak[1],Ve(l,"Vuln\xE9rable")),T.dot&&(l.dots=l.dots.filter(X=>X.k!==b),l.dots.push({k:b,v:S*(1+Te())*T.dot[0],n:T.dot[1],t:1})),T.notes&&(l.notes=Math.min(5,l.notes+T.notes),l.noteT=8),T.runes&&(l.runes=Math.min(5,l.runes+T.runes),l.runeT=10,De(l)),l.type==="dummy"))return;let D=l.boss?.5:l.elite?.75:1;if(T.pull&&!l.boss){let X=t.yaw+(Math.random()-.5)*.8,H=1.7+l.rad;at(t.x,t.y+1.1,t.z,Ue(l.x,l.z),1.57,le(t.x,t.z,l.x,l.z),16777215,.25),l.x=t.x+Math.sin(X)*H,l.z=t.z+Math.cos(X)*H}if(T.kd&&(Ye(l,"stun",T.kd*D,"\xC0 terre"),l.kd=!0),T.stun&&Ye(l,"stun",T.stun*D,"\xC9tourdi"),T.para&&Ye(l,"stun",T.para*D,"Paralys\xE9"),T.sleep&&Ye(l,"sleep",T.sleep*D,"Endormi"),T.fear&&Ye(l,"fear",T.fear*D,"Apeur\xE9"),T.tree)if(l.boss)Ye(l,"stun",1.5,"\xC9tourdi");else{Ye(l,"tree",T.tree,"M\xE9tamorphos\xE9");let X=new xt,H=new Oe(new In(.14,.2,.9,7).translate(0,.45,0),new on({color:5913890,roughness:1})),k=new Oe(new xn(.75,1.5,8).translate(0,1.55,0),new on({color:5216826,roughness:1}));X.add(H,k),l.obj.add(X),l.treeM=X,l.model&&(l.model.visible=!1),q(l.x,l.y+1,l.z,9166954,16,4,.5)}T.root&&(l.rootT=Math.max(l.rootT,T.root*D),Ve(l,"Enracin\xE9"),ke(l.x,l.y,l.z,9166954,l.rad+.6,l.rad+.7,T.root*D,.8)),T.slow&&(l.slowK=T.slow[0],l.slowT=T.slow[1],Ve(l,"Ralenti")),T.sil&&(l.silT=Math.max(l.silT,T.sil*D),Ve(l,"Silence")),T.aspd&&(l.aspdK=T.aspd[0],l.aspdT=T.aspd[1],Ve(l,"Gestes ralentis")),T.sap&&(l.sapK=T.sap[0],l.sapT=T.sap[1],Ve(l,"Affaibli"))}function ht(l,T,b={}){if(l.state==="dead")return 0;let D=S*(1+Te())*T*(G.avg?1:1-g.var+Math.random()*2*g.var),X=!!b.crit;if(x.stealthT>0&&!b.pet&&(D*=x.stealthK,X=!0,ct(0),Ve(l,"Surprise","crit")),l.state==="sleep"&&(D*=1.5,l.state="chase",l.stun=0),l.P&&l.P.block&&l.state!=="stun"&&Math.abs(ji(Math.atan2(t.x-l.x,t.z-l.z),l.yaw))<1.2&&Math.random()<l.P.block&&(D*=.3,Ve(l,"Bloqu\xE9")),l.P&&l.P.sp==="roll"&&l.spT<=0&&l.state==="chase"){l.spT=3.5;let pe=Math.atan2(t.x-l.x,t.z-l.z)+l.side*1.57;l.x+=Math.sin(pe)*3.5,l.z+=Math.cos(pe)*3.5,ke(l.x,l.y,l.z,16777215,.3,1.4,.25,.5)}let H=!!m.back&&!b.pet&&Math.abs(ji(Math.atan2(t.x-l.x,t.z-l.z),l.yaw))>2,k=f.critDmg+(H?m.back.cdm:0),de=Math.min($i.crit,f.crit+(x.critT>0?x.critB:0)+(H?m.back.crit:0));if(G.avg?D*=X?k:1+de*(k-1):(X=X||Math.random()<de,X&&(D*=k)),b.pierce||(D*=100/(100+l.def)),l.weakT>0&&(D*=1+l.weakK),D=Math.max(1,Math.round(D)),x.dealt+=D,l.type==="dummy"?l.wobT=.5:l.hp-=D,b.pet||(x.focus=l,x.focusT=6),l.flash=.09,De(l),he(l.x,l.y+l.T.h*.85,l.z,(H&&X?"\u2726\u2726 ":X?"\u2726 ":"")+D,X?"crit":""),q(l.x,l.y+l.T.h*.55,l.z,b.color||d,X?12:6,4,.35),b.acc&&(b.acc.d+=D),b.steal&&Me(Math.round(D*b.steal/100)),b.cc&&it(l,b.cc,b.key),l.type!=="dummy"){if(X&&m.kdOnCrit&&l.kdCd<=0&&l.hp>0?(l.kdCd=4,it(l,{kd:m.kdOnCrit})):X&&b.basic&&g.W.kd&&!x.mecha&&l.kdCd<=0&&l.hp>0&&Math.random()<g.W.kd&&(l.kdCd=4,it(l,{kd:1.5})),X&&b.basic&&g.W.kb&&!l.boss&&l.rootT<=0){let pe=Math.atan2(l.x-t.x,l.z-t.z);l.x+=Math.sin(pe)*g.W.kb,l.z+=Math.cos(pe)*g.W.kb}if(!l.boss&&l.rootT<=0){let pe=Math.atan2(l.x-t.x,l.z-t.z),oe=b.kb??.3;l.x+=Math.sin(pe)*oe,l.z+=Math.cos(pe)*oe}l.state==="idle"&&(l.state="chase"),l.hp<=0&&ne(l)}return D}function ve(l,T=1,b=null){if(x.down>0||x.inv>0)return;if(G.auto){he(t.x,t.y+2.1,t.z,"Esquive","info"),ke(t.x,t.y,t.z,16777215,.3,1.6,.25,.6),x.busy<=.05&&n.play("dash",.22);return}let D=Math.max(1,Math.round(l.atk*T*(l.sapT>0?1-l.sapK:1)*(.9+Math.random()*.2)*100/(100+f.def)));if(x.mecha){x.mecha.hp-=D,x.lastHit=0,he(t.x,t.y+3.4,t.z,"-"+D,"info"),G.shake=Math.max(G.shake,.12),x.mecha.hp<=0&&Pe(!0);return}if(Math.random()<Math.min($i.dodge,f.dodge+(m.dodge||0))){he(t.x,t.y+2.1,t.z,"Esquive","info");return}if(m.block&&Math.random()<Math.min($i.block,m.block)){he(t.x,t.y+2.1,t.z,"Bloqu\xE9","info"),ot(t.x,t.y+1.1,t.z,16777215,.7,.15);return}if(D=Math.max(1,Math.round(D*(1-Math.min(.8,(m.guard||0)+(x.guardT>0?x.guardB:0))))),x.absorbT>0){let X=Math.round(D*x.absorbB);D-=X,Me(X)}if(x.shield>0){let X=Math.min(x.shield,D);if(x.shield-=X,D-=X,D<=0){he(t.x,t.y+2.1,t.z,"Par\xE9","info");return}}if(!(D<=0)){if(x.hp-=D,x.lastHit=0,xe(2),he(t.x,t.y+2.1,t.z,"-"+D,"hurt"),G.shake=Math.max(G.shake,.22),b){if(b.pull){let X=b.pull.yaw;t.x=b.pull.x+Math.sin(X)*2,t.z=b.pull.z+Math.cos(X)*2}b.stun&&(x.stunT=Math.max(x.stunT,b.stun),he(t.x,t.y+2.5,t.z,"\xC9tourdi","info")),b.root&&(x.rootT=Math.max(x.rootT,b.root),he(t.x,t.y+2.5,t.z,"Enracin\xE9","info")),b.slow&&(x.eslowK=b.slow[0],x.eslowT=b.slow[1],he(t.x,t.y+2.5,t.z,"Ralenti","info"))}if(n.acting||n.play("hurt",.25),o.classList.add("ew-hit"),we(.2,()=>o.classList.remove("ew-hit")),x.hp<=0&&m.rez&&x.rezCd<=0){x.rezCd=m.rez,x.hp=Math.round(x.max*.5),x.inv=2.5,Ge(t.x,t.y,t.z,16773808,1.6,12,.9),ke(t.x,t.y,t.z,16773808,.4,5,.7),h("R\xE9surrection","De nouveau disponible dans "+m.rez+" s");return}x.hp<=0&&(x.hp=0,x.down=2.8,t.down=!0,x.queue=!1,ct(0),h("Vaincu",V.on?"Vague "+V.wave+" atteinte":"Les ombres se dispersent"))}}let mt=null;function ct(l,T){let b=l>0;x.stealthT=l,b&&(x.stealthK=T),mt||(mt=[],n.group.traverse(D=>{if(!(!D.isMesh||!D.material||D.userData.ink))for(let X of Array.isArray(D.material)?D.material:[D.material])!X.transparent&&!mt.includes(X)&&mt.push(X)}));for(let D of mt)D.transparent=b,D.opacity=b?.3:1,D.needsUpdate=!0;for(let D of n.inks||[])D.visible=!b}function ut(l){for(let ze of w.slice())Ke(ze);let T=new xt,b=new Nt({color:l.color,transparent:!0,opacity:.55,depthWrite:!1,fog:!1}),D=Ae(l.color,.13),X=new Nt({color:16777215,fog:!1}),H=(ze,Ie,gt,bt,Dt,Nn)=>{let wn=new Oe(ze,Ie);return wn.position.set(gt,bt,Dt),(Nn||T).add(wn),wn};H(new xn(.95,2.6,12).rotateX(Math.PI),b,0,1.3,0),H(ye.ball,b,0,2.75,0).scale.set(1.2,1.05,.85),H(ye.ball,D,0,2.7,0).scale.setScalar(1.7),H(ye.ball,b,0,3.95,.05).scale.setScalar(.52);for(let ze of[-1,1])H(ye.ball,X,ze*.2,4,.47).scale.set(.1,.05,.05),H(new xn(.14,.6,6),b,ze*.34,4.5,0).rotation.z=-ze*.5;let k=[];for(let ze of[-1,1]){let Ie=new xt;Ie.position.set(ze*1.3,3.15,0),H(ye.ball,b,0,0,0,Ie).scale.setScalar(.5),H(new In(.3,.36,1.6,8).translate(0,-.9,0),b,0,0,0,Ie),H(ye.ball,b,0,-1.9,0,Ie).scale.setScalar(.52),T.add(Ie),k.push(Ie)}T.scale.setScalar(l.sc);let de=t.yaw+.6,pe=t.x+Math.sin(de)*3,oe=t.z+Math.cos(de)*3,ge={S:l,obj:T,arms:k,x:pe,z:oe,y:r(pe,oe),yaw:t.yaw,hp:Math.round(x.max*l.hp),max:Math.round(x.max*l.hp),rad:1.2*l.sc,life:60,cd:.4,swing:0,t:0,rage:0};return ge.barCv=document.createElement("canvas"),ge.barCv.width=64,ge.barCv.height=8,ge.barTex=new Xn(ge.barCv),ge.bar=new Yi(new Li({map:ge.barTex,transparent:!0,depthWrite:!1,fog:!1})),ge.bar.scale.set(2.4,.2,1),ge.bar.position.y=5.3,T.add(ge.bar),lt(ge),T.position.set(pe,ge.y,oe),e.add(T),w.push(ge),Ge(pe,ge.y,oe,l.color,2.2,9,.8),ke(pe,ge.y,oe,l.color,.4,4.5,.7),q(pe,ge.y+2,oe,l.color,30,6,.8),h(l.name),ge}function lt(l){let T=l.barCv.getContext("2d");T.clearRect(0,0,64,8),T.fillStyle="rgba(0,0,0,.75)",T.fillRect(0,0,64,8),T.fillStyle="#7fe0ff",T.fillRect(1,1,62*Math.max(0,l.hp/l.max),6),l.barTex.needsUpdate=!0}function Ke(l){let T=w.indexOf(l);T>=0&&w.splice(T,1),q(l.x,l.y+2,l.z,l.S.color,24,5,.7),e.remove(l.obj),l.barTex.dispose(),l.obj.traverse(b=>{b.material&&b.material.dispose(),b.geometry&&!b.geometry.userData.shared&&b.geometry.dispose()})}function Qe(l,T){let b=Math.max(1,Math.round(T.atk*(.9+Math.random()*.2)*100/(100+f.def)));l.hp-=b,lt(l),he(l.x,l.y+4.6*l.S.sc,l.z,"-"+b,"info"),l.hp<=0&&(h(l.S.name+" dissip\xE9"),Ke(l))}function ft(l,T){if(l.t+=T,l.life-=T,l.cd-=T,l.rage>0&&(l.rage-=T),l.life<=0){Ke(l);return}let b=l.S,D=Rt(l.x,l.z,24)||(x.focusT>0&&x.focus&&x.focus.state!=="dead"&&le(l.x,l.z,x.focus.x,x.focus.z)<24?x.focus:null),X=0,H,k,de;D?(H=D.x,k=D.z,de=2.6*b.sc+D.rad):(H=t.x,k=t.z,de=4.5);let pe=H-l.x,oe=k-l.z,ge=Math.hypot(pe,oe);if(ge>de)X=Math.min(D?9:14,(ge-de)*4+2),l.yaw+=ji(Math.atan2(pe,oe),l.yaw)*Math.min(1,T*7),l.x+=Math.sin(l.yaw)*X*T,l.z+=Math.cos(l.yaw)*X*T;else if(D&&(l.yaw+=ji(Math.atan2(pe,oe),l.yaw)*Math.min(1,T*8),l.cd<=0)){l.cd=b.iv,l.swing=Math.min(.45,b.iv*.8);let Ie=()=>{if(!w.includes(l))return;let gt=l.x+Math.sin(l.yaw)*2,bt=l.z+Math.cos(l.yaw)*2,Dt=b.mult*(l.rage>0?2:1);at(l.x,l.y+2.2,l.z,l.yaw,.2,b.aoe*b.sc,b.color,.3),b.iv>.8&&ke(gt,l.y,bt,b.color,.4,b.aoe*b.sc,.4);let Nn=!0;for(let wn of O.slice())wn.state!=="dead"&&le(gt,bt,wn.x,wn.z)<b.aoe*b.sc+wn.rad&&(wn.type!=="dummy"||wn===x.focus)&&(ht(wn,Nn?Dt:Dt*.6,{color:b.color,kb:.5,pet:1,cc:b.cc,key:b.id}),Nn=!1)};b.iv>.8?we(.2,Ie):Ie()}b.heal&&x.hp<x.max&&x.down<=0&&le(l.x,l.z,t.x,t.z)<14&&(x.hp=Math.min(x.max,x.hp+x.max*b.heal/100*T)),l.y=Math.max(r(l.x,l.z),.2),l.swing>0&&(l.swing-=T);let ze=l.swing>0?Math.sin((1-l.swing/.45)*Math.PI):0;l.obj.scale.setScalar(b.sc*(l.rage>0?1.3:1)),l.obj.position.set(l.x,l.y+.25+Math.sin(l.t*2)*.15,l.z),l.obj.rotation.y=l.yaw,l.arms[0].rotation.x=-ze*2.1-.1,l.arms[1].rotation.x=-ze*1.6-.1+Math.sin(l.t*1.5)*.08,l.obj.visible=!t.inside}function Pt(){let l=new xt,T=new on({color:9148330,metalness:.3,roughness:.5}),b=new on({color:4015702,metalness:.3,roughness:.6}),D=new on({color:61695,emissive:61695,emissiveIntensity:1.6}),X=new on({color:10483455,emissive:2808063,emissiveIntensity:.6,transparent:!0,opacity:.55}),H=(oe,ge,ze,Ie,gt,bt,Dt,Nn)=>{let wn=new Oe(new Kn(oe,ge,ze),Ie);return wn.position.set(gt,bt,Dt),wn.castShadow=!0,(Nn||l).add(wn),wn};H(1.5,1.25,1.1,T,0,2.3,0),H(1.1,.5,.9,b,0,1.55,0),H(.5,.3,.44,b,0,3.1,.05),H(.4,.09,.05,D,0,3.12,.28),H(.18,.5,.05,D,0,2.3,.56);let k=new Oe(new pi(.46,14,10),X);k.position.set(0,2.62,.42),k.scale.set(1,.8,.8),l.add(k);for(let oe of[-1,1]){H(.34,.5,.5,b,oe*.5,2.9,-.5);let ge=new Oe(new xn(.16,.5,8),D);ge.position.set(oe*.5,2.5,-.62),ge.rotation.x=Math.PI,l.add(ge)}let de=[],pe=[];for(let oe of[-1,1]){let ge=new xt;ge.position.set(oe*.46,1.4,0),H(.42,.8,.48,T,0,-.38,0,ge),H(.48,.74,.56,b,0,-1.02,.02,ge),H(.56,.2,.86,T,0,-1.32,.12,ge),H(.1,.5,.05,D,0,-.9,.3,ge),l.add(ge),de.push(ge)}for(let oe of[-1,1]){let ge=new xt;ge.position.set(oe*1.08,2.7,0),H(.72,.5,.74,T,0,.06,0,ge),H(.76,.1,.78,D,0,-.22,0,ge),H(.36,.9,.42,b,0,-.6,0,ge),H(.62,.62,.62,T,0,-1.3,0,ge),H(.64,.1,.64,D,0,-.96,0,ge),l.add(ge),pe.push(ge)}return{g:l,legs:de,arms:pe}}function pt(){let l=Pt();e.add(l.g);let T=Math.round(x.max*g.mecha.hp);x.mecha={M:l,hp:T,max:T,t:g.mecha.dur,ph:0,swing:0,arm:0},n.group.visible=!1,A=g.mecha.basic,B=!0,o.classList.add("ew-mecha"),Ge(t.x,t.y,t.z,61695,2.6,11,.8),ke(t.x,t.y,t.z,61695,.5,6,.7),q(t.x,t.y+2,t.z,61695,40,8,.9),G.shake=.4,h("Mecha en ligne","Il encaisse \xE0 votre place")}function Pe(l){let T=x.mecha;T&&(x.mecha=null,e.remove(T.M.g),Si(T.M.g),n.group.visible=!0,A=g.basic,B=A.kind==="melee",o.classList.remove("ew-mecha"),x.cds[1]=x.cdMax[1]=M[0].cd,x.inv=Math.max(x.inv,.8),q(t.x,t.y+1.5,t.z,l?16742970:61695,40,9,.9),ke(t.x,t.y,t.z,61695,.5,6,.6),l&&(G.shake=.6,h("Mecha d\xE9truit")))}function j(l){for(;te.length>=2;){let D=te.shift();We(D.m)}let T=new xt,b=new Oe(ye.ring,Ae(d,.75));b.scale.setScalar(1.3),b.position.y=.08,T.add(b);for(let D=0;D<6;D++){let X=new Oe(new xn(.07,.4,5),new on({color:10134704,metalness:.8,roughness:.3}));X.position.set(Math.cos(D*1.047)*.7,.2,Math.sin(D*1.047)*.7),T.add(X)}T.position.set(t.x,t.y,t.z),e.add(T),te.push({m:T,x:t.x,z:t.z,y:t.y,t:25,s:l,ring:b})}function Be(l){for(let T=te.length-1;T>=0;T--){let b=te[T];b.t-=l,b.ring.rotation.y+=l*1.5;let D=b.t<=0?null:O.find(X=>X.state!=="dead"&&le(b.x,b.z,X.x,X.z)<2.6+X.rad&&(X.type!=="dummy"||X===x.focus));D&&(Ge(b.x,b.y,b.z,d,1.6,5,.5),Cn(b.x,b.y,b.z,b.s.dmg.r,b.s.dmg.mult,{cc:b.s.cc,key:b.s.name,color:d}),G.shake=Math.max(G.shake,.25)),(D||b.t<=0)&&(We(b.m),te.splice(T,1))}}function He(){x.hp=x.max,x.shield=0,t.down=!1,x.inv=2;for(let l of w.slice())Ke(l);if(V.on)St(),i.teleport(nt.x+17,nt.z);else{for(let l of O)l.wild&&(l.state="idle",l.hp=l.max,De(l));i.teleport(-6,34),h("Rue du Four","Vous reprenez connaissance devant la Maison")}}let st=[],je=[];function _t(l,T,b,D){l.state="wind",l.t=0,l.kind=T,l.windT=b*D;let X=T==="whirl"?5:l.ranged||T==="grab"||T==="stunshot"||T==="meteor"?1.2:l.range+.5;l.av&&l.av.play(T==="shot"||T==="stunshot"?l.av.cat==="bow"?"bow":l.ranged==="wave"?"strum":l.ranged==="bullet"?"shoot":"cast":T==="meteor"||T==="grab"?"castUp":T==="whirl"?"spin":l.av.cat==="2h"?"heavy":"slash",l.windT/.52+(T==="whirl"?.3:0),l.n++),ke(l.x,l.y,l.z,T==="whirl"?16715824:16724048,.3,X,l.windT,.85)}function Ot(l,T,b,D,X,H){let k=l.P,de=Math.atan2(b,D),pe=0,oe=de;if(k&&!H&&l.spT<=0&&l.silT<=0){if(k.sp==="blink"&&T<18){q(l.x,l.y+1,l.z,2759232,18,4,.4);let ge=1.6;return l.x=t.x-Math.sin(t.yaw)*ge,l.z=t.z-Math.cos(t.yaw)*ge,l.yaw=t.yaw,ot(l.x,l.y+1,l.z,9133302,1.2,.25),Ve(l,"Dans votre dos !","crit"),l.spT=7,_t(l,"hit",l.wind*1.1,X),[0,t.yaw]}if(k.sp==="grab"&&T>3.5&&T<17)return l.spT=9,_t(l,"grab",.75,X),[0,de];if(k.sp==="stun"&&T<18)return l.spT=8,_t(l,"stunshot",.65,X),[0,de];if(k.sp==="meteor"&&T<18)return l.spT=6.5,_t(l,"meteor",.9,X),[0,de];if(k.sp==="trap"&&T<9&&(l.spT=10,je.push(kt(t.x,t.z,2.4,1.1,{root:1.6,k:.6,color:8376394})),Ve(l,"Pi\xE8ge")),k.sp==="summon"&&O.filter(ge=>ge.minion&&ge.owner===l&&ge.state!=="dead").length<2){l.spT=14;let ge=l.yaw+1.5,ze=z("wolf",l.x+Math.sin(ge)*2,l.z+Math.cos(ge)*2,l.lvl,{arena:l.arena,hpK:.45,atkK:.55,minion:!0});ze.owner=l,ze.name="Esprit invoqu\xE9",Ge(ze.x,ze.y,ze.z,9133302,1,4,.5),Ve(l,"Invocation")}if(k.sp==="heal"&&l.hp<l.max*.6){l.spT=10;let ge=Math.round(l.max*.22);l.hp=Math.min(l.max,l.hp+ge),De(l),Ge(l.x,l.y,l.z,9306032,1,4,.6),Ve(l,"+"+ge,"heal")}}if(l.type==="leap"&&(l.spT<=0||T>9)&&T>4.5&&T<15&&l.rootT<=0&&!H)return l.spT=3.5+Math.random()*2,_t(l,"leap",.55,X),[0,de];if(l.ranged){let ge=l.range;return T>ge*.92?pe=l.spd:k&&k.kite&&T<ge*.4?(pe=l.spd*.85,oe=de+Math.PI+l.side*.5):(pe=l.spd*.35,oe=de+l.side*1.4,Math.random()<.004&&(l.side*=-1)),T<=ge&&l.silT<=0&&l.cdT<=0?(l.cdT=.2,_t(l,"shot",l.wind,X),[0,de]):[pe,oe]}return T>l.range*.82?[l.spd,de]:(l.silT<=0&&(l.combo++,_t(l,k&&k.sp==="whirl"&&l.combo%3===0?"whirl":k&&k.sp==="bash"&&l.combo%3===0?"bash":"hit",l.wind*(k&&k.sp==="whirl"&&l.combo%3===0?1.25:1),X)),[0,de])}function kt(l,T,b,D,X){let H=r(l,T);ke(l,H,T,X.color||16724048,b-.15,b,D,.8);let k=new Oe(ye.ring,Ae(X.color||16724048,.3));return k.scale.setScalar(.01),k.position.set(l,H+.06,T),k.rotation.x=-Math.PI/2,et(k,D,de=>k.scale.setScalar(b*de)),{x:l,z:T,y:H,r:b,t:D,fx:X}}function Wt(l,T,b,D,X,H){let k=l.kind||"hit",de=l.P;if(k==="leap"){l.state="leap",l.t=0,l.lx0=l.x,l.lz0=l.z;let pe=X?X.x:t.x,oe=X?X.z:t.z,ge=Math.atan2(l.x-pe,l.z-oe);l.lx1=pe+Math.sin(ge)*1.2,l.lz1=oe+Math.cos(ge)*1.2,ke(l.lx1,r(l.lx1,l.lz1),l.lz1,16724048,2.2,2.6,.6,.8);return}if(k==="shot"||k==="stunshot"){let pe=X?X.x:t.x,oe=X?X.z:t.z,ge=X?X.y+2:t.y+1.1;It(l,pe,ge,oe,k==="stunshot"?{stun:1.2,color:16765514}:de&&de.sp==="slow"?{slow:[.45,3]}:{},X);return}if(k==="meteor"){je.push(kt(t.x,t.z,3.4,1.25,{k:1.8,color:16734746,meteor:1}));return}if(k==="grab"){at(l.x,l.y+1.2,l.z,l.yaw,1.57,T,16777215,.3),H&&!X&&T<18&&ve(l,.6,{pull:l,stun:.7});return}if(l.lunge=.25,k==="whirl"){ke(l.x,l.y,l.z,16728160,.5,5,.35),at(l.x,l.y+1,l.z,l.yaw,.1,4.6,16728160,.3),(X?le(l.x,l.z,X.x,X.z)<5+X.rad:H&&T<5)&&(X?Qe(X,l):ve(l,1.4));return}at(l.x,l.y+l.T.h*.5,l.z,l.yaw,.3,l.range*.95,16728160,.2),H&&T<l.range+.7&&Math.abs(ji(Math.atan2(b,D),l.yaw))<1.25&&(X?Qe(X,l):ve(l,k==="bash"?1.1:1,k==="bash"?{stun:1}:null))}function It(l,T,b,D,X,H){let k=l.ranged||"bolt",de=new Y(l.x+Math.sin(l.yaw)*.6,l.y+1.3,l.z+Math.cos(l.yaw)*.6),pe=new Y(T,b,D),oe=pe.clone().sub(de).normalize(),ge={arrow:42,bullet:50,bolt:26,wave:22,paint:28}[k]||30,ze=X.color||(k==="bolt"?11832575:k==="wave"?8376575:k==="paint"?16739e3:16732240),Ie=new Oe(k==="arrow"?ye.arrow:k==="bullet"?ye.tracer:ye.ball,Ae(ze,.95));Ie.scale.setScalar(k==="arrow"||k==="bullet"?1:.32),Ie.position.copy(de),Ie.quaternion.setFromUnitVectors(new Y(0,0,1),oe),e.add(Ie),st.push({m:Ie,v:oe.multiplyScalar(ge),life:45/ge,e:l,fx:X,ally:H,atk:l.atk})}function Zt(l){for(let T=st.length-1;T>=0;T--){let b=st[T],D=b.m.position,X=D.x,H=D.z;D.addScaledVector(b.v,l),b.life-=l;let k=b.life<=0,de=D.x-X,pe=D.z-H,oe=de*de+pe*pe,ge=oe>0?Math.max(0,Math.min(1,((t.x-X)*de+(t.z-H)*pe)/oe)):1,ze=X+de*ge,Ie=H+pe*ge;k||(b.ally&&w.includes(b.ally)?le(D.x,D.z,b.ally.x,b.ally.z)<b.ally.rad+.5&&Math.abs(D.y-b.ally.y-2)<2.5&&(Qe(b.ally,b.e),k=!0):le(ze,Ie,t.x,t.z)<.75&&D.y>t.y-.2&&D.y<t.y+2.2&&!t.fly&&((x.inv<=0||G.auto)&&ve(b.e,1,b.fx),k=!0,q(D.x,D.y,D.z,16732240,6,3,.25))),k&&(e.remove(b.m),b.m.material.dispose(),st.splice(T,1))}for(let T=je.length-1;T>=0;T--){let b=je[T];if(b.t-=l,b.t>0)continue;je.splice(T,1),b.fx.meteor?(Ge(b.x,b.y,b.z,16734746,b.r*.5,9,.5),q(b.x,b.y+.5,b.z,16747066,24,7,.6),G.shake=Math.max(G.shake,.3)):ke(b.x,b.y,b.z,b.fx.color,.3,b.r,.3);let D=O.find(X=>X.state!=="dead"&&X.P)||{atk:10,sapT:0};le(b.x,b.z,t.x,t.z)<b.r&&!t.fly&&ve(D,b.fx.k||1,b.fx.root?{root:b.fx.root}:null)}}function At(l,T){let b=l.obj;if(l.flash>0){l.flash-=T;let dt=l.flash>0;for(let Tt of l.mats)dt?(Tt.emissive.setHex(16777215),Tt.emissiveIntensity=.9):(Tt.emissive.setHex(Tt.userData.e0),Tt.emissiveIntensity=Tt.userData.i0)}if(l.warn){let dt=l.state==="wind";if(dt){let Tt=l.t/(l.windT||l.wind),dn=Tt>.55,Zn=.5+.5*Math.sin(t.t*(dn?34:16));if(l.warn.material.color.setHex(dn?16720952:16765470),l.warn.scale.setScalar((l.boss?1.3:.85)*(1+Zn*(dn?.3:.12))),l.flash<=0){for(let Gs of l.mats)Gs.emissive.setHex(16717872),Gs.emissiveIntensity=.25+Zn*.5;l.tint=!0}}else if(l.tint&&l.flash<=0){l.tint=!1;for(let Tt of l.mats)Tt.emissive.setHex(Tt.userData.e0),Tt.emissiveIntensity=Tt.userData.i0}l.warn.visible=dt}if(l.state==="dead"){l.t+=T;let dt=l.t/.55;b.scale.setScalar(Math.max(.01,1-dt)),b.position.y=l.y-dt*.4,dt>=1&&C(l);return}let D=l.type==="dummy",X=(l.weakT>0?1+l.weakK:1)*(1+Math.min($i.crit,f.crit)*(f.critDmg-1));for(let dt of l.dots)if(dt.t-=T,dt.t<=0&&dt.n>0){dt.t+=1,dt.n--;let Tt=Math.max(1,Math.round(dt.v*X));if(x.dealt+=Tt,D||(l.hp-=Tt),he(l.x,l.y+l.T.h,l.z,Tt,"dot"),De(l),!D&&l.hp<=0){ne(l);return}}if(l.dots.length&&(l.dots=l.dots.filter(dt=>dt.n>0)),l.notes>0){if(l.noteT-=T,l.noteAcc+=T,l.noteAcc>=1){l.noteAcc-=1;let dt=Math.max(1,Math.round(S*th*l.notes*X));if(x.dealt+=dt,D||(l.hp-=dt),he(l.x,l.y+l.T.h+.2,l.z,"\u266A "+dt,"dot"),De(l),!D&&l.hp<=0){ne(l);return}}l.noteT<=0&&(l.notes=0)}if(l.weakT>0&&(l.weakT-=T),l.runes>0&&(l.runeT-=T)<=0&&(l.runes=0,De(l)),l.spT-=T,l.cdT=(l.cdT||0)-T,D){l.wobT>0&&(l.wobT-=T,l.wob.rotation.x=Math.sin(l.wobT*34)*.5*l.wobT);return}l.rootT>0&&(l.rootT-=T),l.slowT>0&&(l.slowT-=T),l.silT>0&&(l.silT-=T),l.aspdT>0&&(l.aspdT-=T),l.sapT>0&&(l.sapT-=T),l.kdCd>0&&(l.kdCd-=T);let H=null,k=18;for(let dt of w){if(dt.hp<=0)continue;let Tt=le(l.x,l.z,dt.x,dt.z);Tt<(dt.S.taunt||k)&&(!H||Tt<k)&&(k=Tt,H=dt)}let de=H?H.x:t.x,pe=H?H.z:t.z,oe=H?H.rad:x.mecha?.9:0,ge=de-l.x,ze=pe-l.z,Ie=Math.hypot(ge,ze)-oe,gt=H?!0:x.down<=0&&!t.inside&&x.stealthT<=0&&!t.fly,bt=l.aspdT>0?1+l.aspdK:1,Dt=0,Nn=null;if(l.state==="stun"||l.state==="sleep"||l.state==="tree"||l.state==="fear")l.stun-=T,l.state==="fear"&&(Nn=Math.atan2(l.x-t.x,l.z-t.z),Dt=l.spd*.9),l.state==="sleep"&&(l.zT-=T)<=0&&(l.zT=1.1,Ve(l,"z z")),l.stun<=0&&(Fe(l),l.state="chase",l.kd=!1);else if(l.state==="idle")if(gt&&Ie<15)l.state="chase";else{if(l.wT-=T,!l.wander||l.wT<=0){let dn=Math.random()*6.28,Zn=Math.random()*7;l.wander=[l.home[0]+Math.sin(dn)*Zn,l.home[1]+Math.cos(dn)*Zn],l.wT=3+Math.random()*5}let dt=l.wander[0]-l.x,Tt=l.wander[1]-l.z;Math.hypot(dt,Tt)>.7&&(Nn=Math.atan2(dt,Tt),Dt=l.spd*.3),l.hp<l.max&&(l.hp=Math.min(l.max,l.hp+l.max*.2*T),De(l))}else if(l.state==="chase")if(!gt||l.wild&&le(l.x,l.z,l.home[0],l.home[1])>40)l.wild&&(l.state="idle",l.wander=l.home.slice(),l.wT=6);else{let dt=Ot(l,Ie,ge,ze,bt,H);Dt=dt[0],Nn=dt[1]}else if(l.state==="wind")l.t+=T,l.t<l.windT*.6&&l.kind!=="leap"&&(Nn=Math.atan2(ge,ze)),!H&&gt&&(l.ranged||l.kind==="meteor"||l.kind==="grab"||l.kind==="stunshot"?Ie<40:Ie<l.range+(l.kind==="whirl"?5:3))&&(G.warnT=.12),l.t>=l.windT&&(l.state="rest",l.t=0,Wt(l,Ie,ge,ze,H,gt));else if(l.state==="leap"){l.t+=T;let dt=Math.min(1,l.t/.6);l.x=l.lx0+(l.lx1-l.lx0)*dt,l.z=l.lz0+(l.lz1-l.lz0)*dt,l.hop=Math.sin(dt*Math.PI)*3.2,dt>=1&&(l.hop=0,l.state="rest",l.t=0,ke(l.x,r(l.x,l.z),l.z,16728160,.4,2.6,.35),G.shake=Math.max(G.shake,.15),(H?le(l.x,l.z,H.x,H.z)<2.6+H.rad:gt&&le(l.x,l.z,t.x,t.z)<2.6)&&(H?Qe(H,l):ve(l,1.3)))}else l.state==="rest"&&(l.t+=T,l.t>=l.rest*bt&&(l.state="chase"));if(l.rootT>0?Dt=0:l.slowT>0&&(Dt*=1-l.slowK),Nn!=null&&(l.yaw+=ji(Nn,l.yaw)*Math.min(1,T*8)),Dt>0){let dt=l.x+Math.sin(l.yaw)*Dt*T,Tt=l.z+Math.cos(l.yaw)*Dt*T;for(let dn of O)if(dn!==l&&dn.state!=="dead"){let Zn=le(dt,Tt,dn.x,dn.z),Gs=l.rad+dn.rad;Zn<Gs&&Zn>.001&&(dt=dn.x+(dt-dn.x)/Zn*Gs,Tt=dn.z+(Tt-dn.z)/Zn*Gs)}if(l.arena){let dn=le(dt,Tt,nt.x,nt.z),Zn=nt.r-1-l.rad;dn>Zn&&(dt=nt.x+(dt-nt.x)/dn*Zn,Tt=nt.z+(Tt-nt.z)/dn*Zn)}l.x=dt,l.z=Tt}if(l.arena){let dt=le(l.x,l.z,nt.x,nt.z),Tt=nt.r-1-l.rad;dt>Tt&&(l.x=nt.x+(l.x-nt.x)/dt*Tt,l.z=nt.z+(l.z-nt.z)/dt*Tt)}l.y=Math.max(r(l.x,l.z),.2)+(l.hop||0),l.lunge>0&&(l.lunge-=T);let wn=l.lunge>0?Math.sin((1-l.lunge/.25)*Math.PI)*.7:0;b.position.set(l.x+Math.sin(l.yaw)*wn,l.y,l.z+Math.cos(l.yaw)*wn),b.rotation.y=l.yaw;let ol=l.kd&&l.state==="stun";l.av?(l.av.update(T,{speed:Dt/4.6}),l.av.group.rotation.x+=((ol?-1.4:0)-l.av.group.rotation.x)*Math.min(1,T*12),l.av.group.position.y=ol?.25:0):(l.beast.update(T,Dt/6),l.beast.group.rotation.x=l.state==="wind"?-.22*Math.min(1,l.t/(l.windT||l.wind)):l.state==="stun"?.12:0,l.beast.group.rotation.z+=((ol?1.45:0)-l.beast.group.rotation.z)*Math.min(1,T*12))}function rn(l,T=3.2,b){let D=G.lock||G.auto?G.lockE:null;if(D&&D.state!=="dead"&&le(t.x,t.z,D.x,D.z)<=l+D.rad)return D;let X=null,H=1e9;for(let k of O){if(k.state==="dead")continue;let de=le(t.x,t.z,k.x,k.z);if(de>l+k.rad)continue;let pe=Math.abs(ji(Ue(k.x,k.z),t.yaw));if(pe>T)continue;let oe=de+(b?0:pe*3)+(k.type==="dummy"?b?40:5:0)+(b&&k.state==="sleep"?30:0);oe<H&&(H=oe,X=k)}return X}let Rt=(l,T,b,D)=>{let X=null,H=b;for(let k of O){if(k.state==="dead"||k.type==="dummy"||k.state==="sleep"&&D==="awake"||D&&D.has&&D.has(k))continue;let de=le(l,T,k.x,k.z);de<H&&(H=de,X=k)}return X};function gi(l,T=!B){let b=rn(l,3.2,T);return b&&(!T||t.speed<1.5)&&(t.yaw=Ue(b.x,b.z)),b}let zn=l=>l&&l.state!=="dead"?l:null;function Yn(l,T,b,D={}){let X=0;for(let H of O.slice()){if(H.state==="dead")continue;let k=le(t.x,t.z,H.x,H.z);k>T+H.rad||b<3.1&&k>.9&&Math.abs(ji(Ue(H.x,H.z),t.yaw))>b||(ht(H,l,D),X++)}return X&&(G.shake=Math.max(G.shake,D.shake||.07)),X}function Cn(l,T,b,D,X,H={},k){ot(l,T+.4,b,H.color||d,D*.7),ke(l,T,b,H.color||d,.3,D,.4),q(l,T+.5,b,H.color||d,14,6,.5);let de=0;for(let pe of O.slice())pe!==k&&pe.state!=="dead"&&le(l,b,pe.x,pe.z)<D+pe.rad&&(ht(pe,X,H),de++);return de}function Un(l,T,b={}){let D=b.target&&b.target.state!=="dead"?b.target:rn(b.range||28,3.2,!0),X=n.hand(new Y,b.off);l==="wave"&&X.set(t.x+Math.sin(t.yaw)*.6,t.y+1.15,t.z+Math.cos(t.yaw)*.6);let H=D?new Y(D.x-X.x,D.y+D.T.h*.55-X.y,D.z-X.z).normalize():new Y(Math.sin(t.yaw),0,Math.cos(t.yaw));b.spread&&H.applyAxisAngle(z1,b.spread);let k=b.color||d,de=b.size||1,pe;if(l==="arrow")pe=new Oe(ye.arrow,Ae(k,1)),pe.scale.set(de,de,1.1);else if(l==="bullet")pe=new Oe(ye.tracer,Ae(k,1));else if(l==="wave")pe=new Oe(ye.arc,Ae(k,.85)),pe.scale.setScalar(1.2);else{pe=new Oe(ye.ball,Ae(k,l==="paint"?.95:.9,l!=="paint"));let ge=(l==="shell"?.3:l==="paint"?.2:.24)*de;if(pe.scale.setScalar(ge),l!=="paint"){let ze=new Oe(ye.ball,Ae(16777215,.9));ze.scale.setScalar(.5),pe.add(ze)}}let oe=b.speed||26;pe.position.copy(X),e.add(pe),l!=="wave"&&ot(X.x,X.y,X.z,k,.35,.12),Q.push({m:pe,kind:l,v:H.multiplyScalar(oe),life:(b.range||28)/oe+.25,mult:T,o:b,hit:new Set,target:D,homing:l!=="wave",age:0,bounce:b.bounce||0})}function Xt(l,T){l.age+=T,l.life-=T;let b=l.m.position;if(l.homing&&l.target&&l.target.state==="dead"&&(l.target=Rt(b.x,b.z,12,l.hit)),l.homing&&l.target){let ge=l.target,ze=l.v.length();Le.set(ge.x-b.x,ge.y+ge.T.h*.55-b.y,ge.z-b.z).normalize().multiplyScalar(ze),l.v.lerp(Le,Math.min(1,T*(l.kind==="bullet"||l.kind==="arrow"?18:9))).setLength(ze)}let D=b.x,X=b.z;b.addScaledVector(l.v,T);let H=b.x-D,k=b.z-X,de=H*H+k*k;l.kind==="wave"?(l.m.rotation.y=Math.atan2(l.v.x,l.v.z),l.m.scale.setScalar(1.2+l.age*3.2),l.m.material.opacity=.85*Math.min(1,l.life*3)):(l.kind==="arrow"||l.kind==="bullet")&&l.m.lookAt(b.x+l.v.x,b.y+l.v.y,b.z+l.v.z);let pe=l.kind==="wave"?l.m.scale.x*.8:.35*(l.o.size||1),oe=l.life<=0;for(let ge of O){if(ge.state==="dead"||l.hit.has(ge))continue;let ze=de>0?Math.max(0,Math.min(1,((ge.x-D)*H+(ge.z-X)*k)/de)):1;if(!(le(D+H*ze,X+k*ze,ge.x,ge.z)>ge.rad+pe||b.y<ge.y-.5-Math.abs(l.v.y)*T||b.y>ge.y+ge.T.h+.8+Math.abs(l.v.y)*T)){if(l.hit.add(ge),ht(ge,l.mult,l.o),l.o.aoe&&Cn(b.x,ge.y,b.z,l.o.aoe,l.mult*.6,l.o,ge),l.bounce>0){let Ie=Rt(b.x,b.z,14,l.hit);if(Ie){l.bounce--,l.mult*=.8,l.target=Ie;let gt=l.v.length();l.v.set(Ie.x-b.x,Ie.y+Ie.T.h*.55-b.y,Ie.z-b.z).setLength(gt),l.life=14/gt+.25,ot(b.x,b.y,b.z,16777215,.5,.12);break}}if(!l.o.thru){oe=!0;break}}}return!oe&&l.kind!=="wave"&&b.y<r(b.x,b.z)+.05?(oe=!0,l.o.aoe?Cn(b.x,r(b.x,b.z),b.z,l.o.aoe,l.mult*.6,l.o):q(b.x,b.y+.1,b.z,l.o.color||d,5,2.5,.3)):oe&&l.life<=0&&l.o.aoe&&l.kind==="shell"&&Cn(b.x,b.y,b.z,l.o.aoe,l.mult*.6,l.o),oe}function _n(l,T,b,D={},X=32){let H=zn(l)||rn(X,3.2,!0),k=H?H.x:t.x+Math.sin(t.yaw)*8,de=H?H.z:t.z+Math.cos(t.yaw)*8,pe=r(k,de);return Ge(k,pe,de,D.color||d,b*.5,5,.45),Cn(k,pe,de,b,T,D)}let Ht=()=>t.talking||t.paused||x.down>0||x.stunT>0?!1:t.fly?(P("Posez-vous pour combattre"),!1):(t.mount&&i.dismount(),!0);function U(l){if(l&&(x.idle=0),x.armed===l)return;x.armed=l,n.setArmed(l),o.classList.toggle("ew-armed",l);let T=o.querySelector('[data-c="draw"]');T&&T.classList.toggle("on",l)}let ee=()=>t.x,se=()=>t.y,re=()=>t.z;function ue(){if(!Ht())return!1;if(U(!0),x.busy>0)return x.queue=!0,!1;let l=gi(B?A.reach+4.5:A.range);if(B&&l){let pe=le(t.x,t.z,l.x,l.z)-l.rad;pe>A.reach*.7&&i.dash(pe-A.reach*.55,.09)}let T=x.combo++,b=A.dur*(1-Math.min($i.aspd,x.aspdT>0?x.aspdB:0)),D=A.every&&(T+1)%A.every.n===0,X=D?A.mult*A.F*A.every.k:A.mult,H=D?[1]:A.seq;n.play(D?"heavy":A.anim,b*1.3,T),x.busy=b+(D?A.every.lock*.5:0),D&&(x.lock=A.every.lock),A.slowSelf&&(x.slowK=A.slowSelf,x.slowT=b*.85),x.mecha&&(x.mecha.swing=.4,x.mecha.arm=T%2);let k=A.dot||A.note||A.rune?{dot:A.dot,notes:A.note,runes:A.rune}:null,de=Math.min(.07,b*.4/H.length);return H.forEach((pe,oe)=>we(b*A.hit+oe*de,()=>{if(x.down>0)return;let ge=oe===0,ze=pe>=.5,Ie=X*pe,gt={cc:ge?k:null,key:"basic",basic:1};if(B){if(ze){let Dt=n.dual?((T>>1)+oe)%3:T%3,Nn=A.anim==="heavy"?T%2?.12:1.45:A.anim==="punch"?T%2?.3:-.3:Dt===0?-.95:Dt===1?.2:1.57;at(ee(),se()+(A.mech?2.2:1.15),re(),t.yaw,ge?Nn:-Nn,A.reach*.95,d,A.mech?.3:.24),A.mech&&(ke(ee()+Math.sin(t.yaw)*2.4,se(),re()+Math.cos(t.yaw)*2.4,d,.4,2.6,.3),G.shake=Math.max(G.shake,.12))}let bt={d:0};gt.acc=bt,ze||(gt.kb=0),Yn(Ie,A.reach,A.arc,gt)&&ge&&g.sustain&&!x.mecha&&x.hp<x.max&&Me(Math.max(1,Math.round(bt.d*.1+x.max*.06*A.dur)))}else if(D){at(ee(),se()+1.1,re(),t.yaw,.15,7.5,ih[T%4],.3),at(ee(),se()+1.1,re(),t.yaw,-.2,6.5,16777215,.22);let bt=zn(l)||rn(A.range,3.2,!0);if(bt)for(let Dt of O.slice())Dt.state!=="dead"&&le(bt.x,bt.z,Dt.x,Dt.z)<2.6+Dt.rad&&ht(Dt,Dt===bt?Ie:Ie*.6,{color:ih[T%4],basic:1})}else Un(A.proj,Ie,Object.assign(gt,{range:A.range,speed:A.speed,aoe:ze?A.aoe:0,size:ze?A.size:.6,thru:A.thru,bounce:ze&&A.bounce||0,off:n.dual&&(T+oe)%2===1,target:zn(l)||l,color:A.proj==="paint"?ih[(T+oe)%4]:d}))})),!0}function Je(l){if(t.talking||t.paused||x.down>0||x.dashCd>0||x.stunT>0)return;t.mount&&i.dismount();let T=l??i.inputDir();T!=null&&(t.yaw=T),x.dashCd=.36,x.inv=Math.max(x.inv,.36),x.busy=0,x.queue=!1,x.lock=0,ke(ee(),se(),re(),16777215,.3,1.9,.3,.6),ot(ee(),se()+1,re(),d,.9,.22),i.dash(6.4,.22),n.play("dash",.28)}let P=l=>{let T=o.querySelector(".ew-skn");T&&(T.textContent=l,T.classList.remove("on"),T.offsetWidth,T.classList.add("on"))};function W(l,T){if(!l)return;let b=l.heal||l.hot?9306032:T.color||d;l.heal&&Me(Math.round(x.max*l.heal/100)),l.hot&&(x.hot=l.hot[0],x.hotT=l.hot[1]),l.atk&&(x.atkB=l.atk[0],x.atkT=l.atk[1]),l.crit&&(x.critB=l.crit[0],x.critT=l.crit[1]),l.aspd&&(x.aspdB=l.aspd[0],x.aspdT=l.aspd[1]),l.guard&&(x.guardB=l.guard[0],x.guardT=l.guard[1]),l.absorb&&(x.absorbB=l.absorb[0],x.absorbT=l.absorb[1]),l.inv&&(x.inv=Math.max(x.inv,l.inv)),l.gauge&&xe(l.gauge),l.shield&&(x.shield=Math.round(x.max*l.shield[0]/100),x.shieldT=l.shield[1]),l.stealth&&(ct(l.stealth[0],l.stealth[1]),q(ee(),se()+1,re(),10133696,20,3,.5)),l.reset!=null&&(x.cds[l.reset]=0),(l.heal||l.hot||l.atk||l.crit||l.aspd||l.guard||l.absorb||l.inv>1)&&(Ge(ee(),se(),re(),b,1.2,4.2,.6),ke(ee(),se(),re(),b,.4,3,.5),q(ee(),se()+1,re(),b,14,3,.6))}function K(l,T){let b=l.area,D=l.color||d;if(b.kind==="target"){let pe=zn(T)||rn(30,3.2,!0);pe&&(Ge(pe.x,pe.y,pe.z,D,1,4,.5),it(pe,l.cc,l.name));return}let X=b.kind==="zone"?zn(T)||rn(30,3.2,!0):null,H=b.kind==="zone"?X?X.x:t.x+Math.sin(t.yaw)*8:t.x,k=b.kind==="zone"?X?X.z:t.z+Math.cos(t.yaw)*8:t.z,de=r(H,k);ke(H,de,k,D,.4,b.r,.6),ot(H,de+.6,k,D,b.r*.5,.3);for(let pe of O.slice())pe.state!=="dead"&&le(H,k,pe.x,pe.z)<b.r+pe.rad&&it(pe,l.cc,l.name)}function Ee(l,T,b){if(x.down>0)return;let D=l.dmg,X=l.ult===1?L:1,H=l.color||d;if(l.special==="trap"){j(l);return}if(l.special==="spirit"){x.spirit=(x.spirit+1)%_a.length,ut(_a[x.spirit]);return}if(l.special==="mecha"){pt();return}if(l.special==="enrage"){w.length||(x.spirit=Math.max(0,x.spirit),ut(_a[x.spirit]));for(let k of w)k.rage=8,k.hp=k.max,lt(k),Ge(k.x,k.y,k.z,k.S.color,3,10,.8)}if(l.special==="runes"){let k=l.dmg;ke(ee(),se(),re(),13154047,.5,k.r,.5),Ge(ee(),se(),re(),13154047,k.r*.35,6,.5),q(ee(),se()+.6,re(),15326719,30,9,.7),G.shake=Math.max(G.shake,.35);for(let de of O.slice())if(de.state!=="dead"&&le(t.x,t.z,de.x,de.z)<k.r+de.rad){let pe=de.runes;de.runes=0,pe&&Ve(de,"Runes \xD7"+pe,"crit"),ht(de,(k.mult+k.per*pe)*X,{color:13154047,kb:.6,key:l.name,cc:{stun:Math.max(1,.5*pe)}})}return}if(l.exec){let k=zn(T)||rn(36,3.2,!0);if(G.shake=.7,!k){ke(ee(),se(),re(),d,.5,9,.8);return}Ge(k.x,k.y,k.z,16777215,1.4,18,.9),Ge(k.x,k.y,k.z,d,2.8,13,1),ke(k.x,k.y,k.z,d,.5,10,.9),q(k.x,k.y+1,k.z,d,40,9,.9),k.type!=="dummy"&&k.hp<=k.max*(k.boss?.15:.35)?(Ve(k,"R\xE9duit \xE0 n\xE9ant","crit"),ne(k)):ht(k,8/_,{pierce:1,color:d,kb:1.2,cc:l.cc,key:l.name});return}if(D){let k=D.hits||1,de=D.gap||.15,pe={crit:D.crit,pierce:D.pierce,steal:D.steal,cc:l.cc,key:l.name,color:H,kb:D.kind==="around"?.7:void 0};for(let oe=0;oe<k;oe++)we(oe*de,()=>{if(x.down>0)return;let ge=(Array.isArray(D.mult)?D.mult[oe]:D.mult)*X,ze=k===1&&ge>=2.5;if(D.kind==="melee")at(ee(),se()+1.15,re(),t.yaw,oe%3===0?-.9:oe%3===1?.25:1.5,D.r*(.9+oe*.08),H,.28),Yn(ge,D.r,D.arc||1.4,Object.assign({shake:.12+oe*.08},pe));else if(D.kind==="around")ke(ee(),se(),re(),H,.5,D.r,.45),ze?(Ge(ee(),se(),re(),H,D.r*.4,7,.6),q(ee(),se()+.5,re(),H,30,9,.7)):at(ee(),se()+1.1,re(),t.yaw+oe*1.3,oe%2?.2:-.2,D.r*.85,H,.3),Yn(ge,D.r,3.2,Object.assign({shake:ze?.5:.18},pe));else if(D.kind==="shot")k>1&&n.play(l.anim==="flip"?"shoot":l.anim||A.anim,.14,oe),Un(D.proj||A.proj||"bolt",ge,Object.assign({range:(D.range||30)+4,speed:D.speed||A.speed||36,aoe:D.aoe,size:D.size,bounce:D.proj==="bullet"?1:0,off:oe%2===1&&n.dual,target:zn(T)},pe));else if(D.kind==="zone")ze&&(G.shake=Math.max(G.shake,.5)),_n(T,ge,D.r,pe);else if(D.kind==="target"){let Ie=zn(T)||rn((D.range||26)+4,3.2,!0);if(!Ie)return;let gt=ge;if(l.special==="notes"&&(gt+=.7*Ie.notes,ke(Ie.x,Ie.y,Ie.z,H,.3,2+Ie.notes*.6,.4),Ie.notes=0),Ge(Ie.x,Ie.y,Ie.z,H,.7,4,.35),ot(Ie.x,Ie.y+Ie.T.h*.5,Ie.z,H,1.1,.2),ht(Ie,gt,pe),D.aoe){ke(Ie.x,Ie.y,Ie.z,H,.4,D.aoe,.4);for(let bt of O.slice())bt!==Ie&&bt.state!=="dead"&&le(Ie.x,Ie.z,bt.x,bt.z)<D.aoe+bt.rad&&ht(bt,gt*.5,pe)}}})}l.area&&K(l,T),W(l.self,l)}function Se(l){if(l===0)return ue();let T=M[l-1];if(!T||!Ht())return;let b=x.chain[l]&&x.chain[l].t>0?x.chain[l].s:null;if(b&&(T=b),R[l]){P("Niveau "+va[l-1]+" requis \xB7 "+T.name);return}if(T.special==="mecha"&&x.mecha){x.busy<=.15&&(P("\xC9jection"),Pe(!1));return}if(T.ult){if(x.charge<100){P("Jauge d\u2019ultime incompl\xE8te");return}}else if(!b&&x.cds[l]>0)return;if(x.busy>.15)return;U(!0),P(T.name),b?x.chain[l]=null:T.ult?x.charge=0:x.cds[l]=x.cdMax[l]=T.cd,T.chain&&(x.chain[l]={t:Ur(T)+4,s:T.chain});let D=T.dmg,X=T.cast??.25,H=D&&D.kind==="melee",k=H?rn(D.r+5):D||T.area||T.exec?rn((D&&D.range||30)+4,3.2,!0):null;if(k&&(H||D&&D.kind==="target"||T.exec||t.speed<1.5)&&(t.yaw=Ue(k.x,k.z)),H&&k){let de=le(t.x,t.z,k.x,k.z)-k.rad;de>D.r*.7&&i.dash(de-D.r*.55,.1)}if(T.move==="tp"&&k){q(ee(),se()+1,re(),d,16,4,.4);let de=k.rad+1.5;if(t.x=k.x-Math.sin(k.yaw)*de,t.z=k.z-Math.cos(k.yaw)*de,t.y=r(t.x,t.z),t.yaw=k.yaw,V.on){let pe=le(t.x,t.z,nt.x,nt.z);pe>nt.r-1.2&&(t.x=nt.x+(t.x-nt.x)/pe*(nt.r-1.2),t.z=nt.z+(t.z-nt.z)/pe*(nt.r-1.2))}ot(ee(),se()+1,re(),d,1.2,.25)}if(T.move==="back"&&(i.dash(-8.5,.26),ke(ee(),se(),re(),d,.4,2.2,.35)),n.play(T.anim||(B?"heavy":"cast"),Math.max(.42,Ur(T)*1.05),x.combo++,T.turns||1),x.busy=Ur(T),T.lock&&(x.lock=T.lock),T.ult&&(x.inv=Math.max(x.inv,Ur(T))),x.mecha&&(x.mecha.swing=.45,x.mecha.arm=2),T.meteor){let de=k,pe=de?de.x:t.x+Math.sin(t.yaw)*10,oe=de?de.z:t.z+Math.cos(t.yaw)*10,ge=r(pe,oe);ke(pe,ge,oe,d,D.r-.2,D.r,X,.7);let ze=new Oe(ye.ball,Ae(d,.95)),Ie=new Oe(ye.ball,Ae(16777215,.9));Ie.scale.setScalar(.55),ze.add(Ie),et(ze,X,gt=>{ze.position.set(pe-7*(1-gt),ge+22*(1-gt)*(1-gt)+.5,oe-4*(1-gt)),ze.scale.setScalar(1.4)})}we(X,()=>Ee(T,k,l))}let I=new Oe(new fi(.82,1,4),new Nt({color:16765514,transparent:!0,opacity:.9,side:$t,depthWrite:!1,fog:!1}));I.rotation.x=-Math.PI/2,I.visible=!1,e.add(I);function Z(){let l=G.lockE;if(l&&(l.state==="dead"||!O.includes(l)||le(t.x,t.z,l.x,l.z)>46)&&(l=null),!l){let T=40;for(let b of O){if(b.state==="dead"||b.type==="dummy")continue;let D=le(t.x,t.z,b.x,b.z);D<T&&(b.arena||b.state!=="idle"||D<18)&&(T=D,l=b)}if(!l&&!G.auto){T=14;for(let b of O)if(b.type==="dummy"){let D=le(t.x,t.z,b.x,b.z);D<T&&(T=D,l=b)}}}return G.lockE=l}function ie(){let l=O.filter(b=>b.state!=="dead"&&b.type!=="dummy"&&le(t.x,t.z,b.x,b.z)<40);if(l.length<2)return;let T=l.indexOf(G.lockE);G.lockE=l[(T+1)%l.length]}let $=l=>l.state==="stun"||l.state==="sleep"||l.state==="tree"||l.state==="fear";function be(){if(G.autoMove=null,t.talking||t.paused||t.inside||t.fly||x.down>0)return;let l=Z();if(!l)return;t.mount&&i.dismount(),U(!0);for(let H of O){if(H.state!=="wind")continue;let k=H.aspdT>0?1+H.aspdK:1,de=(H.windT||H.wind*k)-H.t,pe=le(t.x,t.z,H.x,H.z);if(de<.2&&pe<(H.ranged?40:H.kind==="whirl"?6:H.range+1.6)&&x.inv<de+.05&&x.dashCd<=0){let oe=Math.atan2(t.x-H.x,t.z-H.z)+(B?2.2:0);Je(oe);break}}let T=le(t.x,t.z,l.x,l.z)-l.rad,b=Ue(l.x,l.z);if(B)T>A.reach*.7&&(G.autoMove={yaw:b,mag:1});else{let H=A.range*.85,k=Math.min(6.5,A.range*.4);if(T>H)G.autoMove={yaw:b,mag:1};else if(T<k&&!$(l)&&l.rootT<=0){let de=b+Math.PI;V.on&&le(t.x,t.z,nt.x,nt.z)>nt.r-5&&(de=Math.atan2(nt.x-t.x,nt.z-t.z)+(ji(Math.atan2(nt.x-t.x,nt.z-t.z),b)>0?-1.2:1.2)),G.autoMove={yaw:de,mag:1}}}if(x.busy>0)return;x.dashCd<=0&&x.lock<=0&&t.dashT<=0&&(t.yaw=t.speed<2||B?b:t.yaw);for(let H=1;H<=3;H++)if(x.chain[H]&&x.chain[H].t>0){Se(H);return}let D=x.hp/x.max,X=O.filter(H=>H.state!=="dead"&&H.type!=="dummy"&&le(t.x,t.z,H.x,H.z)<12).length;if(x.charge>=100){let H=M[4],k=M[3];if(H&&H.exec&&!R[5]&&(l.hp<=l.max*(l.boss?.15:.35)||l.boss||l.elite||R[4])&&T<34){Se(5);return}if(k&&!R[4]&&(!k.dmg||T<(k.dmg.kind==="around"?k.dmg.r-.5:k.dmg.kind==="melee"?k.dmg.r+4:30))){Se(4);return}if(H&&!H.exec&&!R[5]&&R[4]){Se(5);return}}for(let H=1;H<=3;H++){let k=M[H-1];if(!k||R[H]||x.cds[H]>0)continue;let de=k.dmg,pe=k.self||{};if(k.special==="mecha"){if(x.mecha)continue;Se(H);return}if(k.special==="spirit"){if(w.length)continue;Se(H);return}if(k.special==="trap"){if(T>7)continue;Se(H);return}if(!de&&!k.area){if((pe.heal||pe.hot)&&!pe.atk&&!pe.crit&&!pe.stealth&&D>.7)continue;Se(H);return}if(!de&&k.area){if(k.cc&&(k.cc.sleep||k.cc.tree||k.cc.fear)&&($(l)||X<2&&!l.boss&&!l.elite)||k.area.kind==="around"&&T>k.area.r-1)continue;Se(H);return}if(!(de.kind==="around"&&T>de.r-.6)&&!(de.kind==="melee"&&T>de.r+4.5)&&!((de.kind==="shot"||de.kind==="zone"||de.kind==="target")&&T>(de.range||30))){Se(H);return}}(B?T<A.reach+4.5:T<A.range)&&ue()}function me(){if(!(x.busy>0)){for(let l=1;l<=3;l++)if(x.chain[l]&&x.chain[l].t>0){Se(l);return}for(let l=1;l<=3;l++)if(!R[l]&&x.cds[l]<=0&&!(M[l-1].special==="mecha"&&x.mecha)){Se(l);return}ue()}}function fe(l){if(l%10===0)return[{ty:"drake",hpK:1.35}];if(l%5===0)return[{ty:"champion",hpK:1.3}];let T=l-Math.floor(l/5)-1;if([1,0,1,0,1,1,0,1][T%8])return[{ty:"pvp",cls:Bd[T*5%12],hpK:1+Math.floor(T/12)*.15}];let D=Math.min(16,4+Math.floor((l-1)/3)),X=Math.pow(Math.min(1,3.4/D),.6),H=["wolf","swift","shade"].concat(l>=2?["leap"]:[],l>=3?["archer"]:[]),k=[];for(let de=0;de<D;de++)k.push({ty:l>=6&&de%5===0?"brute":H[(de*7+l)%H.length],hpK:X,atkK:X});return k}function Xe(){let l=++V.wave,T=fe(l),b=Math.random()*6.28;h("Vague "+l,T.length===1?"Duel \xB7 "+(T[0].cls?rl[T[0].cls].name:Fd[T[0].ty].name):"1 contre "+T.length),T.forEach((D,X)=>{let H=b+X/T.length*6.2832,k=13+X%3*2.5;z(D.ty,nt.x+Math.cos(H)*k,nt.z+Math.sin(H)*k,l,{arena:!0,hpK:D.hpK,atkK:D.atkK,cls:D.cls})})}let tt=()=>5*Math.floor(V.best/5)+1;function vt(l,T){V.on||(l=Math.max(1,Math.min(V.best+1,Math.round(l||tt()))),V.on=!0,V.loop=!!T,V.wave=l-1,V.pending=null,U(!0),x.hp=x.max,Xe())}function St(){V.on=!1,V.pending=null;for(let l of st.splice(0))e.remove(l.m),l.m.material.dispose();je.length=0;for(let l of O.slice())l.arena&&C(l);for(let l of w.slice())Ke(l);for(let l of te.splice(0))We(l.m)}let Mt=o.querySelector(".ew-cmb");if(Mt){let l=b=>c?b===0?"Clic":String(b):"",T=`<button type="button" class="ew-atk" data-c="0"><em>${l(0)}</em><span>Attaque</span></button>`;if(M.forEach((b,D)=>{let X=D+1;T+=`<button type="button" class="ew-sk k${X}${b.ult?" ult":""}${R[X]?" lock":""}" data-c="${X}" title="${b.name.replace(/"/g,"")}"><i></i><em>${l(X)}</em><span>${R[X]?"Niv. "+va[D]:b.name}</span></button>`}),Mt.insertAdjacentHTML("afterbegin",T),!c){let D=H=>Mt.querySelector(H),X=(H,k,de,pe)=>{if(!H)return;let oe=de*Math.PI/180;H.style.right=47+k*Math.cos(oe)-pe/2+"px",H.style.bottom=47+k*Math.sin(oe)-pe/2+"px"};['[data-c="dodge"]',".k1",".k2",".k3",'[data-w="jump"]'].forEach((H,k)=>X(D(H),122,1+k*24,50)),[".k4",".k5",'[data-c="draw"]','[data-w="mount"]','[data-w="run"]'].forEach((H,k)=>X(D(H),186,8+k*21,46))}}let Mn=o.querySelector('[data-c="dodge"]'),Lt=!1,Ct={hp:o.querySelector(".ew-hp i"),hpT:o.querySelector(".ew-hp span"),sh:o.querySelector(".ew-hp b"),ult:o.querySelector(".ew-ult i"),ultB:o.querySelector(".ew-ult"),stt:o.querySelector(".ew-st"),wave:o.querySelector(".ew-wave"),hud:o.querySelector(".ew-hud"),sk:Mt?[...Mt.querySelectorAll(".ew-sk")]:[]},un="";function qt(){let l=x.armed||x.hp<x.max||V.on,T=x.cds.map(H=>Math.ceil(H*2)).join(","),b=x.mecha?Math.round(x.mecha.hp):-1,D=[g.role,x.mecha?"Mecha "+Math.max(0,Math.round(x.mecha.hp/x.mecha.max*100))+" %":"",m.mantra?"Mantra":"",x.stealthT>0?"Dissimul\xE9":"",F>0&&x.hp<x.max?"R\xE9g\xE9n\xE9ration":"",x.hotT>0?"Soin continu":"",x.atkT>0?"Attaque +"+Math.round(x.atkB*100)+" %":"",x.critT>0?"Critique +"+Math.round(x.critB*100)+" %":"",x.aspdT>0?"Cadence +"+Math.round(x.aspdB*100)+" %":"",x.guardT>0?"Garde":"",x.absorbT>0?"Absorption":"",x.inv>1?"Invuln\xE9rable":"",w.length?w[0].S.name:""].filter(Boolean).join(" \xB7 "),X=[l,Math.round(x.hp),Math.round(x.shield),Math.round(x.charge),T,b,D,V.on,V.wave,O.length,x.chain.map(H=>H&&H.t>0?1:0).join("")].join("|");if(X!==un){if(un=X,Ct.hud&&Ct.hud.classList.toggle("on",l),Ct.hp&&(Ct.hp.style.width=x.hp/x.max*100+"%",Ct.hpT.textContent=Math.round(x.hp)+" / "+x.max,Ct.sh.style.width=(x.mecha?Math.max(0,x.mecha.hp/x.mecha.max*100):Math.min(100,x.shield/x.max*100))+"%"),Ct.ult&&(Ct.ult.style.width=x.charge+"%",Ct.ultB.classList.toggle("full",x.charge>=100)),Ct.stt&&(Ct.stt.textContent=D),Ct.wave){let H=O.filter(k=>k.arena&&k.state!=="dead").length;Ct.wave.textContent=V.on?"Vague "+(V.wave+(V.loop&&V.pending!=null?1:0))+(V.loop?" en boucle":"")+(H?" \xB7 "+H+" ombre"+(H>1?"s":""):"")+(V.best?" \xB7 record "+V.best:""):"",Ct.wave.classList.toggle("on",V.on)}Ct.sk.forEach(H=>{let k=+H.dataset.c,de=M[k-1],pe=H.querySelector("i"),oe=x.chain[k]&&x.chain[k].t>0?x.chain[k].s:null,ge=H.querySelector("span"),ze=R[k]?"Niv. "+va[k-1]:(oe||de).name;ge.textContent!==ze&&(ge.textContent=ze),H.classList.toggle("chain",!!oe),oe?pe.style.height="0%":de.ult?(H.classList.toggle("ready",!R[k]&&x.charge>=100),pe.style.height=R[k]?"0%":100-x.charge+"%"):(pe.style.height=(x.cds[k]>0?x.cds[k]/x.cdMax[k]*100:0)+"%",H.classList.toggle("ready",de.special==="mecha"&&!!x.mecha))})}}for(let[l,T]of D1)z("dummy",l,T,1,{quiet:!0,yaw:0});let bn=L1.map(([l,T,b,D,X])=>({x:l,z:T,type:b,lvl:D,n:X,es:[],t:0})).filter(l=>r(l.x,l.z)>1.6),Ri=0,Ze=0;return G.update=function(l){for(let b=J.length-1;b>=0;b--){let D=J[b];D.t-=l,D.t<=0&&(J.splice(b,1),D.fn())}x.busy-=l,x.lock-=l,x.inv-=l,x.lastHit+=l,x.dashCd-=l,x.slowT-=l,x.focusT-=l,x.rezCd-=l,x.stunT-=l,x.rootT-=l,x.eslowT-=l,G.warnT-=l;for(let b of x.chain)b&&(b.t-=l);for(let b=0;b<x.cds.length;b++)x.cds[b]>0&&!(b===1&&x.mecha)&&(x.cds[b]-=l);for(let b of["atkT","critT","aspdT","guardT","absorbT","hotT"])x[b]>0&&(x[b]-=l);if(x.shieldT>0&&(x.shieldT-=l,x.shieldT<=0&&(x.shield=0)),x.stealthT>0&&(x.stealthT-=l,x.stealthT<=0&&ct(0)),x.armed&&Rt(t.x,t.z,30)&&xe(3.4*l),x.down>0)x.down-=l,x.down<=0&&He();else if(x.hp<x.max){let b=0;F>0&&x.lastHit>2&&(b+=x.max*F/1e3*l),!V.on&&x.lastHit>6&&(b+=x.max*.07*l),m.regen&&(b+=x.max*m.regen*l),x.hotT>0&&(b+=x.max*x.hot/100*l),b&&(x.hp=Math.min(x.max,x.hp+b))}G.auto?be():(G.autoMove=null,G.lock?Z():G.lockE=null);{let b=(G.lock||G.auto)&&G.lockE&&G.lockE.state!=="dead"?G.lockE:null;I.visible=!!b&&!t.inside,b&&(I.position.set(b.x,b.y+.12,b.z),I.scale.setScalar(b.rad+.75+Math.sin(t.t*5)*.06),I.rotation.z=t.t*1.6)}(x.queue||G.held)&&x.busy<=0&&x.down<=0&&(x.queue=!1,ue());for(let b of w.slice())ft(b,l);if(Be(l),x.mecha){let b=x.mecha,D=b.M;b.t-=l,b.ph+=l*(2+Math.abs(t.speed)*.9);let X=Math.min(1,Math.abs(t.speed)/6)*Math.sin(b.ph)*.55;D.legs[0].rotation.x=X,D.legs[1].rotation.x=-X,b.swing>0&&(b.swing-=l);let H=b.swing>0?Math.sin((1-b.swing/.4)*Math.PI):0;D.arms[0].rotation.x=-(b.arm!==1?H:0)*1.9+X*.4,D.arms[1].rotation.x=-(b.arm!==0?H:0)*1.9-X*.4,D.g.position.set(t.x,t.y+Math.abs(Math.sin(b.ph))*.06*Math.min(1,Math.abs(t.speed)/6),t.z),D.g.rotation.y=t.yaw,D.g.visible=!t.inside,b.t<=0&&Pe(!1)}E&&!x.armed&&!x.manual&&!t.mount&&!t.inside&&!t.talking&&U(!0),x.armed&&!V.on&&!E&&!x.mecha&&(x.idle+=l,x.idle>25&&!O.some(b=>b.type!=="dummy"&&b.state!=="idle"&&b.state!=="dead")&&U(!1));for(let b of O.slice())b.obj.visible=!t.inside,!t.inside&&(b.arena||le(b.x,b.z,t.x,t.z)<80)&&At(b,l);Zt(l);for(let b=Q.length-1;b>=0;b--)Xt(Q[b],l)&&(We(Q[b].m),Q.splice(b,1));for(let b=N.length-1;b>=0;b--){let D=N[b];D.t+=l;let X=Math.min(1,D.t/D.dur);D.upd(X),X>=1&&(We(D.obj),N.splice(b,1))}if(G.shake=Math.max(0,G.shake-l*2.2),Ce.visible=(x.shield>0||x.inv>1||x.guardT>0||x.absorbT>0)&&!t.inside&&!x.mecha,Ce.visible&&(Ce.position.set(t.x,t.y+1,t.z),Ce.material.opacity=.14+Math.sin(t.t*5)*.04),_e.visible=x.atkT>0||x.critT>0||x.aspdT>0||!!m.mantra&&x.armed,_e.visible&&(_e.position.set(t.x,t.y+.12,t.z),_e.scale.setScalar((m.mantra&&x.atkT<=0&&x.critT<=0?.8:1.1)+Math.sin(t.t*6)*.12),_e.rotation.y=t.t*2),V.on)if(!ce(t.x,t.z)&&x.down<=0)h("D\xE9fi abandonn\xE9","Vague "+V.wave),St();else if(V.pending==null&&!O.some(b=>b.arena&&b.state!=="dead")){let b=V.wave>V.best;V.best=Math.max(V.best,V.wave),b&&u.onArena&&u.onArena(V.best);let D=u.onWave?u.onWave(V.wave):null;Me(Math.round(x.max*.3)),h("Vague "+V.wave+" termin\xE9e",[D?"+"+D.x+" XP \xB7 +"+D.k+" kinahs"+(D.first?"":" (d\xE9j\xE0 gagn\xE9e aujourd\u2019hui : 10 %)"):"",b?"nouveau record":""].filter(Boolean).join(" \xB7 ")),V.pending=V.loop?2.2:3.2,V.loop&&V.wave--}else V.pending!=null&&(V.pending-=l,V.pending<=0&&(V.pending=null,Xe()));if((Ri+=l)>.6){Ri=0;for(let b of bn){let D=le(b.x,b.z,t.x,t.z);if(b.t>0&&(b.t-=.6),D<85&&!b.es.length&&b.t<=0&&!t.inside)for(let X=0;X<b.n;X++){let H=X/b.n*6.28,k=b.x+Math.sin(H)*2.5*(b.n>1),de=b.z+Math.cos(H)*2.5*(b.n>1);b.es.push(z(b.type,k,de,b.lvl,{wild:b,quiet:!0}))}else if(D>150&&b.es.length)for(let X of b.es.slice())X.state="gone",C(X)}}G.warnT>0!==Lt&&(Lt=G.warnT>0,Mn&&Mn.classList.toggle("warn",Lt),o.classList.toggle("ew-warn",Lt)),(Ze+=l)>.08&&(Ze=0,qt())},Object.assign(G,{attack:ue,skill:Se,dodge:Je,rotate:me,arm:U,nextLock:ie,pickLock:Z,toggleArm:()=>{x.manual=x.armed,U(!x.armed)},startArena:vt,arenaStart:tt,inArena:ce,spawn:z,moveK:()=>x.down>0||x.lock>0||x.stunT>0||x.rootT>0?0:(x.slowT>0?x.slowK:1)*(x.eslowT>0?1-x.eslowK:1),dispose(){e.remove(I),I.geometry.dispose(),I.material.dispose(),x.mecha&&(e.remove(x.mecha.M.g),Si(x.mecha.M.g),x.mecha=null,n.group.visible=!0),ct(0);for(let l of w.slice())Ke(l);for(let l of te.splice(0))We(l.m);for(let l of N)We(l.obj);for(let l of Q)We(l.m);for(let l of O)l.barTex.dispose();for(let l in ye)ye[l].dispose()}}),E&&U(!0),qt(),G}var sh=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},Nr=(i,e)=>Math.exp(-(i*i)/(2*e*e)),Ss=i=>212+26*Math.sin(i*.009)+10*Math.sin(i*.023+1),U1=[[0,0,188,3],[-250,-250,52,76],[-292,-206,30,86],[190,-175,17,37],[120,-235,26,18],[0,-335,32,28],[318,300,105,1.2],[-200,70,56,3.4]];function Yt(i,e){let t=3.6+1.5*Math.sin(i*.012)*Math.cos(e*.01)+.8*Math.sin(i*.033+e*.027)+.35*Math.sin(i*.07-e*.05);t+=sh(160,330,e)*(5*Math.sin(i*.02)*Math.sin(e*.018)+3.5);let n=Math.hypot(i+335,e+335);t+=124*Nr(n,150)+13*Math.sin(i*.035)*Math.cos(e*.03)*Nr(n,230),t+=35*Nr(Math.hypot(i-190,e+175),55)+16*Nr(Math.hypot(i-120,e+235),50)+26*Nr(Math.hypot(i,e+335),72);for(let s of U1){let r=1-sh(s[2]*.62,s[2],Math.hypot(i-s[0],e-s[1]));r>0&&(t=t*(1-r)+s[3]*r)}return t-=7.5*Nr(Math.abs(i-Ss(e)),12),t}var qd=[[0,0,0,-78],[0,0,-60,100],[0,0,168,22],[0,0,0,185],[0,185,20,400],[-4,-20,-112,-22],[-112,-22,-150,-130],[-150,-130,-250,-250],[0,-110,0,-320],[168,22,196,-52],[228,-56,190,-160],[0,0,70,30],[60,-40,118,-220],[168,22,300,250],[-112,-22,-164,64]];function al(i,e){let t=1e9;for(let[n,s,r,a]of qd){let o=r-n,c=a-s,h=Math.max(0,Math.min(1,((i-n)*o+(e-s)*c)/(o*o+c*c)));t=Math.min(t,Math.hypot(i-n-o*h,e-s-c*h))}return t}function Gd(i,e,t,n){let s=.5+.5*Math.sin(i*.31+e*.17)*Math.sin(i*.07-e*.23),r=Math.abs(i-Ss(e)),a=Math.hypot(i,e),o;if(Math.hypot(i-318,e-300)<100)o=[.62,.78,.84];else if(r<15)o=[.5,.45,.34];else if(t>72)o=[.9,.93,.97];else if(t>44){let c=sh(44,72,t);o=[Qt(.4,.86,c*c),Qt(.37,.89,c*c),Qt(.36,.94,c*c)]}else a<180?o=[.4+s*.05,.36+s*.04,.34+s*.04]:e>165?o=[.3+s*.08,.26+s*.06,.13]:o=[.44+s*.12,.38+s*.08,.16+s*.04];t<=72&&r>=15&&al(i,e)<3.4&&(o=a<180?[.52,.47,.42]:[.56,.47,.33]),n[0]=o[0],n[1]=o[1],n[2]=o[2]}var Vd=[[-200,70,46,"Ar\xE8ne des Chasseurs","Le sable garde la m\xE9moire des coups"],[0,4,62,"Les Br\xE8ches","Rue du Four \xB7 rue des Cloches"],[0,-95,34,"Cath\xE9drale Sainte-Claire","La cloche de Th\xE9o sonne encore"],[-118,-22,44,"H\xF4pital de la Mis\xE9ricorde","La grille est rest\xE9e"],[-62,112,40,"Faille de la gare","Rang E \xB7 l\xE0 o\xF9 tout a commenc\xE9"],[70,30,20,"Galeries des Murmures","Rue des Tisserands"],[176,22,34,"Quartier des P\xEAcheurs","Le quai, la barque"],[212,-56,26,"Pont-de-l\u2019Est",""],[190,-175,34,"Colline des Vents","L\u2019observatoire"],[-250,-250,70,"Haute-Brume","Vingt-trois maisons, une chapelle, un puits"],[10,300,90,"Route de Vaumoise","La route du Sud"],[318,300,100,"Mer de verre",""],[120,-235,36,"Monast\xE8re en ruine",""],[0,-335,44,"La hauteur du Nord",""]],Wd={h0:[46,64,.6],h1:[76,22,-1.2],h2:[120,-238,0],h3:[96,-42,-.5],h4:[-292,-206,.9],h5:[-98,142,.9],h6:[0,-336,0]},N1={rolande:[-15,21,.4],gaspard:[-23,11,.9],helene:[-9,24,-.3],theo:[-34,30,1.2],mira:[8,-59,.3],anselme:[-7,-60,-.2],kael:[-96,-4,1.4],odile:[22,-20,-.6],yanis:[-42,92,2.4],nour:[64,37,-.9],zach:[181,27,-1.3],sera:[-243,-238,.8],ysolde:[-257,-247,.4]},O1={mira:{look:{gender:"f",height:.95,build:.92,hair:"mi-long",hairColor:"#1a1412",skin:"#d9a882",eyeColor:"#3a2a1c"},outfit:{cut:"coat",c:["#4a3b2e","#2a221b","#8a6a45"]}},theo:{look:{gender:"m",height:1.05,build:1.2,shoulders:1.14,hair:"rase",beard:"pleine",hairColor:"#5a5048",skin:"#cf9a72"},outfit:{cut:"apron",c:["#5a4634","#3a2a1e","#3a2f28"]},fx:{oneArm:!0}},anselme:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"courte"},outfit:{cut:"robe",c:["#5a4634","#3a2c20","#8a7a5a"]}},helene:{look:{gender:"f",hair:"chignon",hairColor:"#8a8a8a",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#2f3a4a","#1c232e","#b9c2cc"]}},sera:{look:{gender:"f",height:1.03,hair:"queue",hairColor:"#b03a2e",skin:"#ecc5a4"},outfit:{cut:"cape",c:["#3f5d78","#22303f","#bccad6"]},armor:{plastron:3,jambieres:3},main:{type:"epee",r:3}},nour:{look:{gender:"f",hair:"long",hairColor:"#0f0c0b",skin:"#b57d54"},outfit:{cut:"robe",c:["#5d3f80","#2e1f42","#dab66c"]},fx:{closedEyes:!0}},kael:{look:{gender:"m",hair:"court"},outfit:{cut:"blouse",c:["#dfe7ea","#9db3bd","#c0392b"]},fx:{shadow:!0}},odile:{look:{gender:"f",build:1.05,hair:"chignon",hairColor:"#4a2f1c"},outfit:{cut:"coat",c:["#6b6f78","#3b3e45","#d9b46a"]}},yanis:{look:{gender:"m",hair:"court",hairColor:"#0f0c0b",skin:"#6b4028",eyeColor:"#3a2a1c"},outfit:{cut:"suit",c:["#80858e","#3b3e45","#d5d8de"]}},ysolde:{look:{gender:"f",hair:"long",hairColor:"#8a5a2e",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#8b8e93","#55585e","#6e7176"]},off:{type:"bouclier",r:3}},gaspard:{look:{gender:"m",height:.97,hair:"boucles",hairColor:"#f0f0f0",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#6a3a3a","#3a2020","#d9b46a"]}},zach:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"pleine",skin:"#cf9a72"},outfit:{cut:"coat",c:["#3d4a3a","#232b22","#8a8a6a"]}},rolande:{look:{gender:"f",build:1.14,height:.96,hair:"chignon",hairColor:"#c9c9c9"},outfit:{cut:"apron",c:["#4a5a7a","#2a3448","#f4f4ee"]}}};function Sa(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Ea=class{constructor(){this.b={},this.boxes=[],this.m4=new Ut,this.q=new Jn,this.e=new fs}add(e,t,n,s,r,a=0,o=1,c=1,h=1,u=0,f=0){let p=t.index?t.toNonIndexed():t.clone();this.e.set(u,a,f,"YXZ"),this.q.setFromEuler(this.e),p.applyMatrix4(this.m4.compose(new Y(n,s,r),this.q,new Y(o,c,h)));for(let d of Object.keys(p.attributes))d!=="position"&&d!=="normal"&&p.deleteAttribute(d);(this.b[e]=this.b[e]||[]).push(p)}solid(e,t,n,s,r=0){let a=Math.abs(Math.cos(r)),o=Math.abs(Math.sin(r)),c=(n*a+s*o)/2,h=(n*o+s*a)/2;this.boxes.push([e-c,e+c,t-h,t+h])}build(e,t){let n=new xt;for(let s in this.b){let r=ma(this.b[s],!1);this.b[s].forEach(o=>o.dispose());let a=new Oe(r,e[s]);a.castShadow=t&&!e[s].transparent&&!e[s].isMeshBasicMaterial,a.receiveShadow=t,n.add(a)}return n}},$e=new Kn(1,1,1),ba=new xn(Math.SQRT1_2,1,4).rotateY(Math.PI/4),sn=new In(.5,.5,1,12),kr=new xn(.5,1,12),Qi=new pi(.5,12,8),Ln=new ps(1,1),k1=new pi(.5,16,8,0,Math.PI*2,0,Math.PI/2),Or=new In(.5,.5,1,56),wa=(()=>{let i=new $n;i.moveTo(-.5,0),i.lineTo(.5,0),i.lineTo(0,1),i.closePath();let e=new _r(i,{depth:1,bevelEnabled:!1});return e.translate(0,0,-.5),e})();function mi(i,e,t,n,s,r,a,o,c,h,u={}){let f=u.y??Yt(t,n);i.add(c,$e,t,f+a/2-.6,n,o,s,a+1.2,r);let p=u.roofH??Math.min(s,r)*.42;u.flat?i.add(h,$e,t,f+a+.25,n,o,s+.6,.5,r+.6):u.hip?i.add(h,ba,t,f+a+p/2,n,o,s+1,p,r+1):i.add(h,wa,t,f+a,n,o,s+1,p,r+1.2),u.chimney!==!1&&e()<.7&&i.add("stoneD",$e,t+Math.cos(o)*s*.25,f+a+p*.7,n-Math.sin(o)*s*.25,o,.9,p*1.1,.9);let d=Math.cos(o),y=Math.sin(o),v=Math.max(1,Math.floor(a/3.1));for(let[_,S,L,R]of[[0,1,s,r/2],[0,-1,s,r/2],[1,0,r,s/2],[-1,0,r,s/2]]){let A=Math.max(1,Math.floor(L/2.8));for(let B=0;B<v;B++)for(let E=0;E<A;E++){if(B===0&&S===1&&E===Math.floor(A/2))continue;let x=(E-(A-1)/2)*(L/A),F=_?_*(R+.04):x,O=S?S*(R+.04):x,Q=t+F*d+O*y,N=n-F*y+O*d,J=o+Math.atan2(_,S);i.add(e()<(u.lit??.55)?"winLit":"winDark",Ln,Q,f+1.9+B*3.1,N,J,.9,1.25,1)}}let g=r/2+.05,m=t+g*y,M=n+g*d;return i.add("wood",Ln,m,f+1.05,M,o,1.2,2.1,1),u.noSolid||i.solid(t,n,s,r,o),{door:[t+(r/2+1.6)*y,n+(r/2+1.6)*d]}}function Ma(i,e,t){let n=Yt(e,t);i.add("iron",sn,e,n+1.9,t,0,.14,3.8,.14),i.add("iron",$e,e,n+3.85,t,0,.5,.1,.5),i.add("lamp",Qi,e,n+3.55,t,0,.42,.5,.42)}function F1(i,e){let t=new Ea,n=Sa(20261112),s=[],r=[],a=(d,y,v,g)=>v.some(m=>Math.hypot(d-m[0],y-m[1])<(m[2]||g)),o=[[0,-95,40],[-118,-22,46],[-62,112,36],[70,30,20],[-18,18,26],[0,-30,20],[22,-20,14],[-40,92,12],[96,-42,24],[46,64,20],[-98,142,30],[176,22,30]],c=["wallA","wallB","wallC","wallW"],h=["roofA","roofB"];for(let d=-150;d<=150;d+=24)for(let y=-150;y<=160;y+=22){let v=d+(n()-.5)*6,g=y+(n()-.5)*5;if(Math.hypot(v,g)>158||a(v,g,o,0)||al(v,g)<8.5||Math.abs(v-Ss(g))<40||n()<.12)continue;let M=g>-10&&v>-70,_=9+n()*7,S=8+n()*6,L=(M?5.5:7)+n()*(M?4.5:8);mi(t,n,v,g,_,S,L,n()<.5?0:Math.PI/2,M?n()<.5?"wallB":"wallC":c[Math.floor(n()*4)],h[Math.floor(n()*2)],{lit:M?.4:.6,hip:n()<.25})}for(let[d,y,v,g]of qd.slice(0,6)){let m=Math.floor(Math.hypot(v-d,g-y)/22);for(let M=1;M<m;M++){let _=M/m,S=d+(v-d)*_,L=y+(g-y)*_,R=-(g-y),A=v-d,B=Math.hypot(R,A);Ma(t,S+R/B*4.6,L+A/B*4.6)}}{let d=Yt(-18,14);mi(t,n,-18,12,15,11,8.5,.35,"wallA","roofA",{lit:.9}),t.add("white",$e,-12,d+3.2,22.5,.35,5.5,1.4,.05),t.add("white",$e,-6.5,d+3,20.6,.35,2.4,1.7,.05),t.add("iron",sn,-15.5,d+2,24,0,.1,4,.1),t.add("iron",sn,-4.5,d+2,19.6,0,.1,4,.1),t.add("wood",$e,-37,d+4.1,33,1.2,9,.35,7);for(let[y,v]of[[-3.6,-2.6],[3.6,-2.6],[-3.6,2.6],[3.6,2.6]]){let g=Math.cos(1.2),m=Math.sin(1.2);t.add("wood",sn,-37+y*g+v*m,d+2,33-y*m+v*g,0,.35,4,.35)}t.add("stoneD",$e,-39.5,d+1,35,1.2,2.6,2,2.2),t.add("ember",$e,-39.5,d+2.05,35,1.2,1.9,.2,1.5),t.add("iron",$e,-35.5,d+.55,31.5,1.2,1.5,.5,.6),t.add("stoneD",$e,-35.5,d+.25,31.5,1.2,.7,.6,.5),r.push([-39.5,d+2.6,35,16742954,2.2,16]),t.solid(-39.5,35,3,3)}{let d=Yt(0,-95);t.add("stone",$e,0,d+10,-98,0,22,21,46),t.add("roofB",wa,0,d+20.4,-98,0,24,10,47),t.add("stone",$e,0,d+22,-70.5,0,11,45,10),t.add("roofB",ba,0,d+53,-70.5,0,12,18,11),t.add("gold",$e,0,d+64,-70.5,0,.3,4,.3),t.add("gold",$e,0,d+64.6,-70.5,0,1.8,.3,.3),t.add("rose",sn,0,d+16,-65.4,0,5.2,.2,5.2,Math.PI/2),t.add("wood",Ln,0,d+2.6,-65.42,0,3.4,5.2,1);for(let y=0;y<4;y++)t.add("stoneL",$e,0,d-.3+y*-0+.2*(3-y),-63.6+y*.9,0,12+y*1.4,.4,1);for(let y=0;y<6;y++)for(let v of[-1,1])t.add("rose",Ln,v*11.06,d+9,-116+y*7.2,v*Math.PI/2,2.2,8,1),t.add("stoneD",$e,v*12,d+6.5,-112.4+y*7.2,0,1.6,13,1.6);for(let y of[30,36])for(let[v,g]of[[0,1],[1,0],[-1,0]])t.add("winDark",Ln,v*5.56,d+y,-70.5+(g?5.06:0),Math.atan2(v,g),1.6,3.6,1);t.solid(0,-98,22,46),t.solid(0,-70.5,11,10),r.push([0,d+5,-61,16767392,1.6,22])}{let d=Yt(-118,-22);mi(t,n,-122,-24,22,58,15,0,"wallW","roofB",{lit:.35,flat:!0,chimney:!1}),mi(t,n,-106,-44,14,16,11,0,"wallW","roofB",{lit:.3,flat:!0,chimney:!1});for(let y=0;y<26;y++)t.add("iron",sn,-96,d+1.4,-52+y*2.2,0,.12,2.8,.12);t.add("iron",$e,-96,d+2.5,-24.5,0,.14,.14,56),t.add("iron",$e,-96,d+.5,-24.5,0,.14,.14,56),t.solid(-96,-40,.6,26),t.solid(-96,-6,.6,22)}{let d=Yt(-62,112);t.add("wallC",$e,-62,d+5,122,.9,30,11,12),t.add("iron",sn,-62,d+10.5,122,.9,12,30,12,0,Math.PI/2),t.add("winDark",Ln,-57.2,d+6,118.2,.9+Math.PI,7,6,1);for(let y=0;y<12;y++)t.add("wood",$e,-74+y*2.6,d+.12,102+y*2.05,.9,.5,.2,5);t.add("iron",$e,-60,d+.3,113,.9+Math.PI/2,.16,.2,34),t.add("iron",$e,-58.6,d+.3,111.9,.9+Math.PI/2,.16,.2,34),t.solid(-62,122,26,20)}{let d=Yt(70,30);for(let y of[-1,1])t.add("stoneD",$e,70+y*3.6*Math.cos(-1.2),d+3,30-y*3.6*Math.sin(-1.2),-1.2,2,7,3);t.add("stoneD",$e,70,d+7.2,30,-1.2,9.4,2,3.2),t.add("void",Ln,70+.4*Math.sin(-1.2),d+2.9,30+.4*Math.cos(-1.2),-1.2,5.2,6,1);for(let y of[-1,1]){let v=70+y*2.2*Math.cos(-1.2)-2.2*Math.sin(-1.2),g=30-y*2.2*Math.sin(-1.2)-2.2*Math.cos(-1.2);t.add("white",sn,v,d+.3,g,0,.16,.6,.16),t.add("lamp",Qi,v,d+.72,g,0,.2,.3,.2)}r.push([67,d+1.6,28,16762977,1.1,10])}mi(t,n,30,-22,14,12,10,Math.PI/2*3,"wallA","roofA",{lit:.8,hip:!0}),mi(t,n,-48,86,12,12,12,2.4,"wallB","roofB",{lit:.7,flat:!0,chimney:!1});{for(let M=0;M<9;M++)if(t.add("wood",$e,188+M*2.2,1.1,24,0,2,.25,4.6),M%2===0)for(let _ of[-1,1])t.add("wood",sn,188+M*2.2,1.1-1.6,24+_*2.1,0,.3,3.6,.3);let y=(M,_,S,L)=>{t.add(L,Qi,M,.55,_,S,2,1.3,5.2),t.add("void",$e,M,1,_,S,1.5,.3,4.2),t.add("wood",$e,M,.95,_,S,1.7,.1,.5)};y(206,29,.25,"wood"),y(203,6,-.2,"wallC"),y(204,48,.1,"wallB"),mi(t,n,172,40,9,8,5.5,-1.4,"wallB","roofA",{lit:.7}),mi(t,n,170,4,10,8,6,-1.6,"wallC","roofB",{lit:.5}),Ma(t,186,21);let v=-56,g=Ss(v),m=3.6;t.add("stone",$e,g,m,v,0,40,.8,6.5);for(let M of[-1,1])t.add("stone",$e,g,m+.9,v+M*3,0,40,1,.5);for(let M of[-9,9])t.add("stoneD",$e,g+M,m-3,v,0,2.4,6,6);Ma(t,g-19,v+2.6),Ma(t,g+19,v-2.6)}{let d=Yt(190,-175);t.add("stoneL",sn,190,d+4,-175,0,13,8,13),t.add("iron",k1,190,d+8,-175,0,13,13,13),t.add("void",$e,190,d+11.5,-171,0,1.6,5,6,-.6),t.add("wood",Ln,190,d+1.1,-168.46,0,1.3,2.2,1),t.solid(190,-175,11,11)}{let d=[[-236,-262,.3],[-262,-266,-.4],[-272,-244,1.2],[-232,-240,-.9],[-246,-278,.1],[-270,-228,.7],[-228,-224,-.2]];for(let[v,g,m]of d)mi(t,n,v,g,7.5,6.5,4.6,m,"wallA","snow",{lit:.7});let y=Yt(-250,-250);mi(t,n,-254,-232,7,11,6,.2,"stoneL","snow",{lit:.6,chimney:!1}),t.add("stoneL",$e,-253.2,y+6,-227.6,.2,3,12,3),t.add("snow",ba,-253.2,y+14,-227.6,.2,3.6,4.5,3.6),t.add("stoneD",sn,-252,y+.5,-252,0,2.2,1,2.2),t.add("void",sn,-252,y+1.02,-252,0,1.7,.02,1.7);for(let v of[-1,1])t.add("wood",sn,-252+v*1.1,y+1.6,-252,0,.16,2.4,.16);t.add("wood",wa,-252,y+2.7,-252,0,3.2,.9,2.4),t.solid(-252,-252,2.4,2.4),t.add("stoneD",sn,-246,y+.2,-244,0,1.6,.4,1.6),t.add("ember",kr,-246,y+.8,-244,0,.9,1.2,.9),r.push([-246,y+1.6,-244,16747066,2,18])}{let d=Yt(3,190);t.add("wood",sn,3,d+1.4,190,0,.18,2.8,.18),t.add("wood",$e,3.5,d+2.4,190,.2,2.2,.5,.08)}{let d=nt.x,y=nt.z,v=Yt(d,y),g=44;t.add("stoneD",Or,d,v+.02,y,0,72,.1,72),t.add("sand",Or,d,v+.06,y,0,45.6,.1,45.6),t.add("stoneD",Or,d,v+.09,y,0,5.4,.1,5.4),t.add("neon",Or,d,v+.1,y,0,4.6,.1,4.6),t.add("stoneD",Or,d,v+.11,y,0,4.2,.1,4.2),t.add("ember",Or,d,v+.12,y,0,1.1,.1,1.1);for(let m=0;m<g;m++){let M=(m+.5)/g*6.2832,_=Math.cos(M),S=Math.sin(M),L=-M+Math.PI/2,R=M>Math.PI?M-6.2832:M;if(Math.abs(R)<nt.gate+.05)continue;for(let E=0;E<4;E++){let x=24+E*2.1,F=6.2832*(x+1.1)/g+.06;t.add(E%2?"stone":"stoneL",$e,d+_*x,v+(.9+E)/2,y+S*x,L,F,.9+E,2.2)}let A=32.8,B=6.2832*(A+.8)/g+.06;t.add("stone",$e,d+_*A,v+4.3,y+S*A,L,B,8.6,1.4),m%2&&t.add("stoneL",$e,d+_*A,v+9.1,y+S*A,L,B*.6,1,1.4),m%4===1&&(t.add("iron",sn,d+_*A,v+11.4,y+S*A,0,.14,5,.14),t.add(m%8===1?"banner":"flag",$e,d+_*A-S*.95,v+13.1,y+S*A+_*.95,L,1.8,1.1,.06))}for(let m of[-1,1]){let M=m*(nt.gate+.11),_=d+Math.cos(M)*30.5,S=y+Math.sin(M)*30.5;t.add("stoneL",sn,_,v+6,S,0,4.6,12,4.6),t.add("roofA",kr,_,v+14.3,S,0,5.6,4.6,5.6),t.add("stoneD",sn,d+37.5,v+.6,y+m*5,0,1.2,1.2,1.2),t.add("ember",kr,d+37.5,v+1.6,y+m*5,0,.9,1.2,.9),r.push([d+37.5,v+2.6,y+m*5,16747066,1.8,18])}t.add("stone",$e,d+30.5,v+9.8,y,0,4.4,3,11),t.add("banner",$e,d+32.8,v+8.8,y,0,.08,3.4,3),t.add("gold",$e,d+32.86,v+8.8,y,0,.08,1.4,.4),t.add("gold",$e,d+32.86,v+9.1,y,0,.08,.4,1.3)}let u=[];for(let d of i.houses||[]){let y=Wd[d.id];if(!y)continue;let[v,g,m]=y,M=Yt(v,g),_=Math.cos(m),S=Math.sin(m),L,R=(A,B)=>[v+A*_+B*S,g-A*S+B*_];if(d.id==="h0"){for(let[F,O,Q,N]of[[-5,-3,9,7],[5,-3,9,8],[0,-7,11,10],[-8,-8,7,5],[8,-8,7,6]]){let[J,w]=R(F,O);t.add("rock",Qi,J,M+N*.2,w,n()*3,Q,N,Q)}let[A,B]=R(0,1.2);t.add("void",Qi,A,M+1.2,B,m,4.4,4.6,2.4);let[E,x]=R(0,3.5);t.add("ember",kr,E,M+.4,x,0,.7,.9,.7),r.push([E,M+1.3,x,16747066,1.6,12]),L=R(0,4.2),t.solid(...R(0,-5),16,9)}else if(d.id==="h1")L=[72,27];else if(d.id==="h2"){t.add("stoneL",$e,...(A=>[A[0],M+4,A[1]])(R(-5.5,0)),m,1,9,16),t.add("stoneL",$e,...(A=>[A[0],M+2.6,A[1]])(R(5.5,-2)),m,1,6.2,11),t.add("stoneL",$e,...(A=>[A[0],M+5,A[1]])(R(0,-8)),m,12,11,1),t.add("stoneL",wa,...(A=>[A[0],M+10.4,A[1]])(R(0,-8)),m,12,4,1),t.add("roofB",$e,...(A=>[A[0],M+8.4,A[1]])(R(-2.6,-3)),m,6.4,.3,9.5,0,-.5),t.add("rose",Ln,...(A=>[A[0],M+6.5,A[1]])(R(0,-7.44)),m,2,4.6,1),t.add("stoneD",$e,...(A=>[A[0],M+.6,A[1]])(R(0,-5.6)),m,3,1.2,1.6);for(let[A,B]of[[-1.5,"flowerA"],[0,"flowerB"],[1.4,"flowerC"],[2.6,"flowerA"]])t.add(B,Qi,...(E=>[E[0],M+.25,E[1]])(R(A,-3.4)),0,.7,.5,.7);L=R(0,9),t.solid(...R(-5.5,0),1.2,16,m),t.solid(...R(0,-8),12,1.2,m)}else if(d.id==="h3"){let A=mi(t,n,v,g,22,14,11,m,"wallA","roofA",{lit:.85,hip:!0});for(let B of[-1,1]){let[E,x]=R(B*13.5,1);mi(t,n,E,x,6,9,13,m,"wallA","roofA",{lit:.85,hip:!0,chimney:!1})}for(let B of[-1,1])Ma(t,...R(B*3,10));L=A.door}else if(d.id==="h4"){t.add("stone",$e,v,M+6,g,m,26,13,20);for(let[E,x]of[[-13,-10],[13,-10],[-13,10],[13,10]]){let[F,O]=R(E,x);t.add("stoneL",sn,F,M+9,O,0,7,19,7),t.add("roofB",kr,F,M+22,O,0,8.2,8,8.2),t.add("flag",$e,F+.9,M+27.2,O,m,1.8,1,.06),t.add("iron",sn,F,M+27,O,0,.12,3,.12)}for(let E=-5;E<=5;E++){let[x,F]=R(E*2.3,10.2);E%2&&t.add("stone",$e,x,M+13.4,F,m,1.2,1,.8)}let[A,B]=R(0,10.06);t.add("wood",Ln,A,M+2.4,B,m,4,5,1);for(let E of[-7,7])for(let x of[5,9]){let[F,O]=R(E,10.06);t.add("winLit",Ln,F,M+x,O,m,1.2,1.8,1)}L=R(0,12.5),t.solid(v,g,30,24,m)}else if(d.id==="h5"){t.add("obs",$e,v,M+9,g,m,20,18,16),t.add("obs",ba,v,M+24,g,m,16,12,13);for(let[E,x,F]of[[-12,6,22],[12,6,22],[-12,-6,16],[12,-6,16]]){let[O,Q]=R(E,x);t.add("obs",$e,O,M+F/2,Q,m,5,F,5),t.add("obs",ba,O,M+F+4,Q,m,5.6,8,5.6),t.add("umbra",Ln,...(N=>[N[0],M+F-3,N[1]])(R(E,x+2.54)),m,1,3,1)}let[A,B]=R(0,8.06);t.add("umbra",Ln,A,M+3.4,B,m,3.4,6.8,1),t.add("neon",Ln,A,M+3.4,B+.02*_,m,.3,6.8,1),L=R(0,10.6),t.solid(v,g,30,18,m),r.push([L[0],M+4,L[1],9133302,2.4,22])}else if(d.id==="h6"){t.add("light",$e,v,M+7,g,m,26,14,16),t.add("gold",wa,v,M+14,g,m,28,8,17.4);for(let E=-4;E<=4;E++)for(let x of[3,7,11]){if(E===0&&x===3)continue;let[F,O]=R(E*2.8,8.06);t.add("sun",Ln,F,M+x,O,m,1.3,2.2,1)}let[A,B]=R(0,8.08);t.add("sun",Ln,A,M+3,B,m,3,6,1);for(let E=0;E<6;E++){let[x,F]=R(0,9+E*1.1);t.add("light",$e,x,M-.2-E*.02,F,m,8+E,.5,1.1)}L=R(0,11.5),t.solid(v,g,26,16,m),r.push([L[0],M+6,L[1],16773312,3.2,40])}u.push({...d,x:L[0],z:L[1]})}let f=[],p=e.trees;for(let d=0;d<p*6&&f.length<p;d++){let y=(n()-.5)*860,v=(n()-.5)*860,g=Yt(y,v);if(Math.hypot(y,v)<176&&n()>.04||g<2.2||g>70||Math.abs(y-Ss(v))<16||al(y,v)<5||Math.hypot(y-318,v-300)<104||a(y,v,Object.values(Wd).map(_=>[_[0],_[1],24]),0)||a(y,v,[[-250,-250,44],[190,-175,16],[nt.x,nt.z,42]],0))continue;let M=v>150?1:.45;n()>M||f.push({x:y,y:g,z:v,s:.8+n()*.9,pine:g>30||n()<.25,c:n()})}return{B:t,doors:s,lights:r,houses:u,trees:f}}var Xd=[["rock","rock",9,8],["stoneD","stoneD",11,9],["stoneL","stone",13,11],["wallA","wood",16,12],["stone","stoneL",20,14],["obs","obs",22,15],["light","light",24,16]];function B1(i,e,t,n){let[s,r,a,o]=Xd[e.r]||Xd[0],c=5+e.r*.5,h=Sa(77+e.r);i.add(r,$e,0,n-.25,0,0,a,.5,o),i.add(s,$e,0,n+c/2,-o/2,0,a,c,.5),i.add(s,$e,-a/2,n+c/2,0,0,.5,c,o),i.add(s,$e,a/2,n+c/2,0,0,.5,c,o),i.add("rug",$e,0,n+.02,.5,0,a*.45,.04,o*.4),i.add("stoneD",$e,0,n+1.4,-o/2+.7,0,3.4,2.8,1),i.add("void",$e,0,n+.9,-o/2+1,0,2,1.5,.6),i.add("ember",kr,0,n+.6,-o/2+1.05,0,1,1.1,.5),i.add("stoneD",$e,0,n+3.8,-o/2+.6,0,1.6,c-3.2,.8),i.add("wood",$e,0,n+.95,1,0,Math.min(6,a*.34),.14,1.5);for(let[d,y]of[[-1,.4],[1,.4],[-1,1.6],[1,1.6]])i.add("wood",sn,d*Math.min(2.6,a*.15),n+.47,y,0,.16,.95,.16);for(let d=-1;d<=1;d++)for(let y of[-1,1])i.add("wood",sn,d*1.3,n+.3,1+y*1.4,0,.55,.6,.55);i.add("white",sn,-.6,n+1.1,1,0,.3,.16,.3),i.add("lamp",Qi,.5,n+1.25,1,0,.16,.3,.16);let u=Math.min(e.cap>=99?8:e.cap,8);for(let d=0;d<u;d++){let y=d%2?1:-1,v=Math.floor(d/2),g=y*(a/2-1.5),m=-o/2+2.6+v*2.6;if(m>o/2-1.5)break;i.add("wood",$e,g,n+.35,m,0,2.2,.5,1.1),i.add("white",$e,g,n+.66,m,0,2.1,.14,1),i.add(["flowerA","flowerB","flowerC","rug"][d%4],$e,g-y*.3,n+.75,m,0,1.5,.1,1.02)}for(let d of[-1,1])for(let y=-1;y<=1;y+=2)i.add(e.r>=6?"sun":e.r===5?"umbra":"winLit",Ln,d*(a/2-.27),n+2.6,y*o*.22,-d*Math.PI/2,1.3,1.9,1);let f=t.instruments||[],p=a/2-2;if(f.includes("i4")&&(i.add("wood",$e,p-1,n+.9,o/2-3.5,0,2.8,1.8,.9),i.add("white",$e,p-1,n+1,o/2-2.95,0,2.5,.08,.3)),f.includes("i5")){for(let d=0;d<7;d++)i.add("gold",sn,-p+d*.34,n+1.6+Math.abs(3-d)*.3,o/2-3.2,0,.26,3.2+Math.abs(3-d)*.6,.26);i.add("wood",$e,-p+1,n+.6,o/2-2.7,0,2.8,1.2,.7)}return f.includes("i1")&&(i.add("wood",Qi,2.6,n+.6,-o/2+1,0,.9,1.1,.3),i.add("wood",$e,2.6,n+1.5,-o/2+.95,0,.14,1.2,.08)),f.includes("i3")&&(i.add("wallC",Qi,-2.8,n+.9,-o/2+1,0,1.1,1.6,.4),i.add("void",$e,-2.8,n+2.2,-o/2+.95,0,.14,1.4,.08)),(f.includes("i6")||f.includes("i2")||f.includes("i0"))&&(i.add("gold",$e,-a/2+1,n+1.4,3,0,.12,2.6,.12),i.add("gold",$e,-a/2+1.5,n+2.6,3,0,1.1,.12,.12,0,.3),i.add("wood",$e,-a/2+1.5,n+1.3,3,0,.14,2.6,.14,0,-.42)),i.add("wood",Ln,0,n+1.2,o/2-.02,Math.PI,1.6,2.4,1),{W:a,D:o,h:c,door:[0,o/2-1.2],spots:[[-2.6,-1],[2.6,-1],[-3.4,2.4],[3.4,2.4],[0,-2.4],[-1.6,3.4],[1.6,3.4],[-4.6,.4],[4.6,.4],[0,3.8],[-3,-3],[3,-3]].filter(d=>Math.abs(d[0])<a/2-2&&Math.abs(d[1])<o/2-1.5)}}var H1=`
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
`;function Yd(i,e,t={}){let n=e.mode==="pc",s=n?{px:2,shadows:!0,seg:220,trees:1500,fog:[140,720],bloom:!0,grass:2600}:{px:1.5,shadows:!1,seg:150,trees:600,fog:[110,520],bloom:!1,grass:0};if(!document.getElementById("ew-css")){let P=document.createElement("style");P.id="ew-css",P.textContent=H1,document.head.appendChild(P)}let r=document.createElement("div");r.className="ew "+(n?"ew-pc":"ew-mob"),r.lang="fr",r.innerHTML=`<canvas class="ew-c"></canvas>
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
    <div class="ew-load">Vesp\xE9rane\u2026</div>`,i.appendChild(r);let a=P=>r.querySelector(P),o=a(".ew-c"),c=new Ns({canvas:o,antialias:n,powerPreference:"high-performance"});c.setPixelRatio(Math.min(window.devicePixelRatio||1,s.px)),c.outputColorSpace=jt,c.toneMapping=pa,c.toneMappingExposure=1.05,s.shadows&&(c.shadowMap.enabled=!0,c.shadowMap.type=fa);let h=new gs,u=new En(n?55:62,1,.3,2400),f=new rt(12085832);h.fog=new bo(f,s.fog[0],s.fog[1]);{let P=new ms(c);h.environment=P.fromScene(new Ar,.04).texture,P.dispose()}let p=new Y(-.62,.36,.5).normalize(),d=new wr(16769228,2761796,.75);h.add(d);let y=new xs(16768184,2.7);h.add(y,y.target),s.shadows&&(y.castShadow=!0,y.shadow.mapSize.set(2048,2048),Object.assign(y.shadow.camera,{left:-55,right:55,top:55,bottom:-55,near:1,far:260}),y.shadow.bias=-6e-4,y.shadow.normalBias=.06);let v=new Oe(new pi(2e3,32,16),new gn({side:pn,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:p},night:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 sunDir; uniform float night; varying vec3 vD; float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); } void main(){ vec3 d = normalize(vD); float h = max(0.0, d.y); vec3 hor = vec3(1.0, 0.66, 0.40), mid = vec3(0.70, 0.30, 0.19), top = vec3(0.10, 0.09, 0.22); vec3 c = mix(hor, mid, smoothstep(0.0, 0.2, h)); c = mix(c, top, smoothstep(0.14, 0.72, h)); float s = max(0.0, dot(d, sunDir)); c += vec3(1.0, 0.78, 0.5) * pow(s, 220.0) * 2.2 + vec3(1.0, 0.55, 0.28) * pow(s, 9.0) * 0.42; vec3 g = floor(d * 190.0); float st = step(0.9975, hash(g)) * smoothstep(0.25, 0.7, h); c += vec3(st) * 0.8; if (d.y < 0.0) c = mix(hor, vec3(0.16, 0.10, 0.10), min(1.0, -d.y * 5.0)); gl_FragColor = vec4(c, 1.0); }"}));h.add(v);let g=new xt;h.add(g);{let P=document.createElement("canvas");P.width=256,P.height=128;let W=P.getContext("2d"),K=Sa(5);for(let Se=0;Se<26;Se++){let I=40+K()*176,Z=46+K()*40,ie=18+K()*34,$=W.createRadialGradient(I,Z,0,I,Z,ie);$.addColorStop(0,"rgba(255,255,255,.5)"),$.addColorStop(1,"rgba(255,255,255,0)"),W.fillStyle=$,W.fillRect(0,0,256,128)}let Ee=new Xn(P);for(let Se=0;Se<16;Se++){let I=new Oe(new ps(1,1),new Nt({map:Ee,transparent:!0,depthWrite:!1,fog:!1,color:new rt().setHSL(.04+K()*.05,.75,.62+K()*.2),opacity:.75})),Z=K()*6.28,ie=500+K()*900;I.position.set(Math.cos(Z)*ie,190+K()*180,Math.sin(Z)*ie),I.scale.set(420+K()*380,120+K()*90,1),I.rotation.x=Math.PI/2,I.rotation.z=K()*6.28,g.add(I)}}{let P=new ps(900,900,s.seg,s.seg);P.rotateX(-Math.PI/2);let W=P.attributes.position,K=new Float32Array(W.count*3),Ee=[0,0,0];for(let fe=0;fe<W.count;fe++){let Xe=W.getX(fe),tt=W.getZ(fe),vt=Yt(Xe,tt);W.setY(fe,vt),Gd(Xe,tt,vt,Ee),K[fe*3]=Math.pow(Ee[0],2.2),K[fe*3+1]=Math.pow(Ee[1],2.2),K[fe*3+2]=Math.pow(Ee[2],2.2)}P.setAttribute("color",new mn(K,3));let Se=P.toNonIndexed();Se.computeVertexNormals(),P.dispose();let I=document.createElement("canvas");I.width=I.height=256;let Z=I.getContext("2d"),ie=Sa(31);Z.fillStyle="#e4e4e4",Z.fillRect(0,0,256,256);for(let fe=0;fe<2600;fe++){let Xe=190+Math.floor(ie()*65);Z.fillStyle=`rgba(${Xe},${Xe},${Xe},.55)`;let tt=1+ie()*5;Z.fillRect(ie()*256,ie()*256,tt,tt)}Z.strokeStyle="rgba(70,60,55,.3)",Z.lineWidth=1.6;for(let fe=0;fe<8;fe++)for(let Xe=0;Xe<8;Xe++){let tt=fe%2*16;Z.strokeRect(Xe*32+tt+(ie()-.5)*3,fe*32+(ie()-.5)*3,32,32)}let $=new Xn(I);$.wrapS=$.wrapT=Qr,$.repeat.set(140,140),$.anisotropy=4,$.colorSpace=jt;let be=new Oe(Se,new on({vertexColors:!0,map:$,roughness:.96,metalness:0,envMapIntensity:.25}));be.receiveShadow=s.shadows,h.add(be);let me=new Oe(new fi(440,2400,48,1),new on({color:4865826,roughness:1,envMapIntensity:.1}));me.rotation.x=-Math.PI/2,me.position.y=2.6,h.add(me)}let m=new Oe(new ps(2400,2400),new on({color:5914426,roughness:.12,metalness:.85,transparent:!0,opacity:.86,envMapIntensity:1.6}));m.rotation.x=-Math.PI/2,m.position.y=.35,h.add(m);let M=new Oe(new Di(96,48),new on({color:12576498,roughness:.03,metalness:.95,envMapIntensity:2.2,transparent:!0,opacity:.92}));M.rotation.x=-Math.PI/2,M.position.set(318,1.32,300),h.add(M);let _=(P,W=.9,K=0,Ee)=>new on(Object.assign({color:P,roughness:W,metalness:K,envMapIntensity:.35},Ee||{})),S=P=>new Nt({color:P,toneMapped:(s.bloom,!1)}),L={wallA:_(12098426),wallB:_(9405303),wallC:_(10246725),wallW:_(14867920),stone:_(9144208),stoneL:_(11644338),stoneD:_(4867664),roofA:_(5125424),roofB:_(3554376),wood:_(5913892),iron:_(3816774,.5,.7),snow:_(15660024,.7),white:_(16052712),rock:_(5591642,1),obs:_(1512479,.35,.6),gold:_(15254632,.3,.9),light:_(16775920,.6,0,{emissive:16773320,emissiveIntensity:.55}),flag:_(4029142),rug:_(8007466),flowerA:_(14243450),flowerB:_(15254090),flowerC:_(9071318),sand:_(13481610,1),banner:_(10234410),winLit:S(16762222),winDark:_(1712176,.2,.6),lamp:S(16767392),ember:S(16742954),rose:S(13208278),umbra:S(10976255),neon:S(61695),sun:S(16774084),void:_(197382,1)},R=F1(e,s),A=R.B.build(L,s.shadows);h.add(A);for(let[P,W,K,Ee,Se,I]of R.lights.slice(0,n?12:6)){let Z=new ri(Ee,Se*14,I,1.6);Z.position.set(P,W,K),h.add(Z)}let B=new xt;{let P=Yt(-70,100);B.position.set(-70,P+5.2,100);let W=new Oe(new jn(4.2,.28,10,48),S(8386303)),K=new Oe(new Di(4.1,40),new Nt({color:1723647,transparent:!0,opacity:.55,side:$t,blending:Bn,depthWrite:!1})),Ee=new Oe(new fi(1.2,3.6,40),new Nt({color:9133302,transparent:!0,opacity:.5,side:$t,blending:Bn,depthWrite:!1}));B.add(W,K,Ee),B.scale.set(.8,1.25,1),B.rotation.y=.9;let Se=new ri(3842303,60,46,1.5);B.add(Se),h.add(B),B.userData={m2:K,m3:Ee}}{let P=new In(.22,.34,1,6).translate(0,.5,0),W=new xn(1,1,7).translate(0,.5,0),K=new Do(1,1),Ee=R.trees.filter($=>$.pine),Se=R.trees.filter($=>!$.pine),I=new cn,Z=new rt,ie=($,be,me,fe)=>{let Xe=new Eo($,be,Math.max(1,me.length));return me.forEach((tt,vt)=>{fe(tt,I),I.updateMatrix(),Xe.setMatrixAt(vt,I.matrix),tt._c&&Xe.setColorAt(vt,tt._c)}),Xe.count=me.length,Xe.castShadow=s.shadows,Xe.receiveShadow=!1,h.add(Xe),Xe};if(ie(P,_(3811868,1),R.trees,($,be)=>{be.position.set($.x,$.y-.3,$.z),be.scale.set($.s,$.s*($.pine?2.2:3.2),$.s),be.rotation.set(0,0,0)}),Ee.forEach($=>{$._c=Z.clone().setHSL(.3+$.c*.06,.42,.11+$.c*.06)}),Se.forEach($=>{$._c=Z.clone().setHSL(.02+$.c*.11,.72,.36+$.c*.14)}),ie(W,_(16777215,1),Ee,($,be)=>{be.position.set($.x,$.y+$.s*1.3,$.z),be.scale.set($.s*2.1,$.s*6.2,$.s*2.1),be.rotation.set(0,$.c*6,0)}),ie(K,new on({color:16777215,roughness:1,flatShading:!0,envMapIntensity:.3}),Se,($,be)=>{be.position.set($.x,$.y+$.s*4.1,$.z),be.scale.set($.s*2.5,$.s*2.1,$.s*2.5),be.rotation.set($.c,$.c*6,0)}),s.grass){let $=Sa(9),be=[];for(let me=0;me<s.grass*5&&be.length<s.grass;me++){let fe=($()-.5)*760,Xe=($()-.5)*760,tt=Yt(fe,Xe);Math.hypot(fe,Xe)<184||Math.hypot(fe-nt.x,Xe-nt.z)<39||tt<2.3||tt>44||Math.abs(fe-Ss(Xe))<15||al(fe,Xe)<4||be.push({x:fe,y:tt,z:Xe,s:.5+$()*.9,c:$(),_c:Z.clone().setHSL(.08+$()*.1,.5,.3+$()*.12)})}ie(new xn(.5,1,4).translate(0,.5,0),_(16777215,1),be,(me,fe)=>{fe.position.set(me.x,me.y-.05,me.z),fe.scale.set(me.s*.9,me.s*1.1,me.s*.9),fe.rotation.set(0,me.c*6,0)}).castShadow=!1}}let E={},x=new Ea;R.houses.forEach((P,W)=>{let Ee=W*80,Se=new Ea,I=B1(Se,P,e,-400);for(let Z in Se.b)for(let ie of Se.b[Z])ie.translate(Ee,0,0),(x.b[Z]=x.b[Z]||[]).push(ie);E[P.id]={...I,ox:Ee,oy:-400,hs:P}});let F=x.build(L,!1);F.visible=!1,h.add(F);let O=new ri(16756848,0,40,1.4),Q=new ri(16773341,0,60,1.2);h.add(O,Q);let N=bs(e.hero);h.add(N.group),N.group.rotation.order="YXZ";let J=null;if(e.plate&&(e.plate.title||e.plate.name)){let P=document.createElement("canvas");P.width=512,P.height=128;let W=P.getContext("2d"),K=e.plate;W.textAlign="center",W.textBaseline="middle",W.lineJoin="round";let Ee=(I,Z,ie,$)=>{W.font=ie,W.lineWidth=7,W.strokeStyle="rgba(0,0,0,.85)",W.strokeText(I,256,Z),W.shadowColor=$,W.shadowBlur=14,W.fillStyle=$,W.fillText(I,256,Z),W.shadowBlur=0};K.title&&Ee("\xAB "+K.title+" \xBB",K.name?40:64,"700 38px Oxanium, Barlow, sans-serif",K.color||"#ffd56a"),K.name&&Ee(K.name,K.title?92:64,"600 34px Barlow, sans-serif","#ffffff");let Se=new Xn(P);Se.colorSpace=jt,J=new Yi(new Li({map:Se,transparent:!0,depthWrite:!1,fog:!1})),J.scale.set(2.6,.65,1),J.position.y=N.height+.62,J.renderOrder=8,N.group.add(J)}let w={pitch:0,fly:!1,x:e.pos?e.pos[0]:-6,z:e.pos?e.pos[1]:34,y:0,vy:0,yaw:Math.PI,speed:0,run:!1,onGround:!0,inside:null,mount:null,mountId:null,camYaw:e.pos?0:Math.PI*.15,camPitch:.22,camDist:n?7.5:6,talking:null,paused:!1,t:0,zone:"",down:!1,dashT:0,dashV:0,jumps:0,inDir:null};w.y=Yt(w.x,w.z);for(let P of Vd)if(Math.hypot(w.x-P[0],w.z-P[1])<P[2]){w.zone=P[3];break}let te=(e.mounts||[]).filter(P=>zi[P.id]),V=Math.max(0,te.findIndex(P=>P.id===e.mount)),G=null;function we(P){if(w.mount&&(h.remove(w.mount.group),Si(w.mount.group),w.mount=null,w.mountId=null),P&&te.length&&!w.inside){let W=te[V].id;w.mount=zi[W].make(),w.mountId=W,qo(w.mount.group),h.add(w.mount.group),G&&G.arm(!1),w.mount.group.traverse(K=>{K.isMesh&&(K.castShadow=s.shadows)}),ne("En selle",te[V].name)}a('[data-w="mount"]').classList.toggle("on",!!w.mount)}te.length||(a('[data-w="mount"]').disabled=!0);let le=[],Ue=P=>{let W=document.createElement("canvas");W.width=256,W.height=64;let K=W.getContext("2d");K.font="600 26px Oxanium, Barlow, sans-serif",K.textAlign="center",K.shadowColor="#000",K.shadowBlur=8,K.fillStyle="#eaffff",K.fillText(P,128,40);let Ee=new Yi(new Li({map:new Xn(W),transparent:!0,depthWrite:!1,fog:!1}));return Ee.scale.set(2.6,.65,1),Ee};function ce(P,W,K,Ee,Se,I){let Z=O1[P.id];if(!Z)return;let ie=bs(Object.assign({},Z,{fx:Object.assign({lod:!0},Z.fx)}));ie.group.position.set(W,K,Ee),ie.group.rotation.y=Se;let $=Ue(P.name.split(" ").slice(0,2).join(" "));$.position.y=ie.height/ie.group.scale.y+.32,ie.group.add($),ie.group.traverse(be=>{be.isMesh&&(be.castShadow=s.shadows&&!I)}),h.add(ie.group),le.push({...P,av:ie,x:W,y:K,z:Ee,ry:Se,inside:I||null,lb:$,li:0})}for(let P of e.npcs||[]){let W=N1[P.id];W&&ce(P,W[0],Yt(W[0],W[1]),W[1],W[2])}for(let P in E){let W=E[P];(e.npcs||[]).filter(K=>K.recruited).slice(0,W.spots.length).forEach((K,Ee)=>{let[Se,I]=W.spots[Ee];ce(K,W.ox+Se,W.oy,I,Math.atan2(-Se,1-I),P)})}F.visible=!1;function ye(P,W){Xt(!0),w.x=P,w.z=W,w.y=Yt(P,W),re=!0}G=Hd({scene:h,st:w,player:N,data:e,H:Yt,cam:u,root:r,pc:n,toast:(P,W)=>ne(P,W),cb:t,teleport:ye,dismount:()=>we(!1),dash:(P,W)=>{w.dashV=P/W,w.dashT=W},inputDir:()=>w.inDir});let Ae={neutre:"Course",ninja:"Ninja",levitation:"L\xE9vitation"},et={neutre:"Neutre",ninja:"Ninja",souverain:"Souverain",digne:"Digne \xB7 aura",humble:"Humble",timide:"Timide"},We=()=>{a('[data-w="mv"]').textContent="D\xE9placement : "+Ae[N.move],a('[data-w="stn"]').textContent="Position d\u2019attente : "+et[N.stance]},at=(P,W)=>{let K=Object.keys(P);return K[(K.indexOf(W)+1)%K.length]};We();let ke=P=>a('[data-o="'+P+'"]');function Ge(){ke("auto").classList.toggle("on",G.auto),ke("lock").classList.toggle("on",G.lock),ke("fly").classList.toggle("on",!!w.fly);let P=a('[data-w="mount"] span'),W=a('[data-w="jump"]');P&&(P.textContent=w.fly?"Descendre":"Monture"),W&&(W.textContent=w.fly?"Monter":"Saut")}function ot(P){P&&(w.inside||w.talking||w.down)||(P&&(we(!1),G.arena.on&&ne("Vol","Les ombres vous attendent au sol"),w.vy=14,w.onGround=!1,mt=0),w.fly=P,Me.up=Me.dn=null,Ge(),P&&ne("Vol",n?"Espace : monter \xB7 C : descendre \xB7 Maj : plus vite \xB7 B : se poser":"Maintenir Monter / Descendre \xB7 Sprint : plus vite"))}function q(P){if(P==="fly"){ot(!w.fly);return}if(P==="lock"){if(G.lock&&G.lockE&&performance.now()-Le<1500){G.nextLock(),Le=performance.now();return}G.lock=!G.lock,Le=performance.now(),G.lock&&(G.pickLock(),ne("Cam\xE9ra verrouill\xE9e",G.lockE?G.lockE.name||G.lockE.T.name:"Elle suivra le prochain ennemi"))}else P==="auto"&&(G.auto=!G.auto,ne(G.auto?"Combat automatique":"Combat manuel",G.auto?"Le personnage frappe et esquive tout seul":""));Ge(),t.onPref&&t.onPref({auto:G.auto,lock:G.lock})}let Le=0;{let P=e.prefs||{};G.auto=!!P.auto,G.lock=!!P.lock,Ge()}r.addEventListener("pointerdown",P=>{let W=P.target.closest("[data-o]");!W||w.paused||(P.preventDefault(),P.stopPropagation(),q(W.dataset.o))});let he=null;if(s.bloom)try{he=new nl(c),he.addPass(new il(h,u)),he.addPass(new zr(new Re(256,256),.42,.7,.82)),he.addPass(new sl)}catch{he=null}function Ce(){let P=r.clientWidth,W=r.clientHeight;if(P>W){let K=r.querySelector(".ew-rot");K&&K.classList.remove("on")}c.setSize(P,W,!1),u.aspect=P/W,u.fov=n?55:P>W?50:62,u.updateProjectionMatrix(),he&&he.setSize(P,W)}Ce(),window.addEventListener("resize",Ce);let _e=a(".ew-map"),Ne=_e.getContext("2d"),De=document.createElement("canvas");De.width=De.height=248;{let P=De.getContext("2d"),W=P.createImageData(248,248),K=[0,0,0];for(let Ee=0;Ee<248;Ee++)for(let Se=0;Se<248;Se++){let I=(Se/247-.5)*900,Z=(Ee/247-.5)*900,ie=Yt(I,Z);Gd(I,Z,ie,K);let $=(Ee*248+Se)*4,be=ie<.4;W.data[$]=be?70:K[0]*235,W.data[$+1]=be?90:K[1]*235,W.data[$+2]=be?120:K[2]*235,W.data[$+3]=255}P.putImageData(W,0,0),P.strokeStyle="#c9b48a",P.lineWidth=2,P.beginPath(),P.arc((nt.x/900+.5)*248,(nt.z/900+.5)*248,8,0,7),P.stroke(),P.fillStyle="#2a2420";for(let Ee of R.B.boxes){let Se=(Ee[0]/900+.5)*248,I=(Ee[2]/900+.5)*248;P.fillRect(Se,I,Math.max(1.5,(Ee[1]-Ee[0])/900*248),Math.max(1.5,(Ee[3]-Ee[2])/900*248))}}function z(){let W=w.inside?0:w.x,K=w.inside?0:w.z,Ee=(W/900+.5)*248,Se=(K/900+.5)*248;if(Ne.setTransform(1,0,0,1,0,0),Ne.fillStyle="#0b0b12",Ne.fillRect(0,0,248,248),w.inside){Ne.fillStyle="#7ff6ff",Ne.font="600 20px Oxanium, sans-serif",Ne.textAlign="center",Ne.fillText("Int\xE9rieur",124,130);return}Ne.translate(124,124),Ne.scale(2.2,2.2),Ne.translate(-Ee,-Se),Ne.drawImage(De,0,0);let I=(Z,ie,$,be)=>{Ne.fillStyle=$,Ne.beginPath(),Ne.arc((Z/900+.5)*248,(ie/900+.5)*248,be,0,7),Ne.fill()};for(let Z of R.houses)I(Z.x,Z.z,"#ffd479",2.6);for(let Z of le)Z.inside||I(Z.x,Z.z,"#7ff6ff",1.7);I(-70,100,"#3aa0ff",2.4),I(nt.x,nt.z,"#ff4d6d",2.2);for(let Z of G.enemies)Z.type!=="dummy"&&Z.state!=="dead"&&I(Z.x,Z.z,"#ff4d6d",1.5);Ne.setTransform(1,0,0,1,124,124),Ne.rotate(-w.yaw+Math.PI),Ne.fillStyle="#fff",Ne.strokeStyle="#000",Ne.lineWidth=2,Ne.beginPath(),Ne.moveTo(0,-9),Ne.lineTo(6.5,7),Ne.lineTo(0,3.5),Ne.lineTo(-6.5,7),Ne.closePath(),Ne.stroke(),Ne.fill()}let C=0;function ne(P,W=""){let K=a(".ew-zone");K.querySelector("b").textContent=P,K.querySelector("i").textContent=W,K.querySelector("i").style.display=W?"":"none",K.classList.add("on"),clearTimeout(C),C=setTimeout(()=>K.classList.remove("on"),3200)}let xe={},Me={mx:0,mz:0,jump:!1},Te=new Fo,Ve=new Y(0,-1,0),Fe=new Y,Ye=[];function it(P,W){Fe.set(P,2e3,W),Te.set(Fe,Ve),Te.far=2200;let K=Te.intersectObject(A,!0)[0];return K?K.point.y:-99}function ht(P){if(Ye[P]==null){let W=R.B.boxes[P],K=(W[0]+W[1])/2,Ee=(W[2]+W[3])/2,Se=(W[1]-W[0])*.3,I=(W[3]-W[2])*.3;Ye[P]=Math.max(it(K,Ee),it(K-Se,Ee-I),it(K+Se,Ee+I),it(K-Se,Ee+I),it(K+Se,Ee-I),Yt(K,Ee)+4)+.6}return Ye[P]}let ve=-99,mt=0,ct=null,ut=(P,W)=>{if(w.paused&&W&&P.code==="Escape"){st(!1);return}xe[P.code]=W;let K=(P.key||"").toLowerCase();W&&(P.code==="Escape"?w.talking?Yn():st(!0):w.talking?(K==="e"||K==="f"||P.code==="Enter"||P.code==="Space")&&(P.preventDefault(),zn()):K==="e"||K==="f"||P.code==="Enter"?At():K==="m"&&w.fly||(K==="m"?w.mount&&te.length>1&&xe.ShiftLeft?(V=(V+1)%te.length,we(!0)):we(!w.mount):K==="c"&&w.fly||(K==="c"&&te.length>1?(V=(V+1)%te.length,w.mount?we(!0):ne(te[V].name,"Monture choisie")):P.code==="Space"?(P.preventDefault(),w.fly||(Me.jump=!0)):K==="r"?G.toggleArm():K==="b"?q("fly"):K==="t"?q("lock"):K==="g"?q("auto"):K==="x"?G.attack():K==="v"?G.dodge():/^(Digit|Numpad)[1-5]$/.test(P.code)&&G.skill(+P.code.slice(-1)))))},lt=P=>ut(P,!0),Ke=P=>ut(P,!1);window.addEventListener("keydown",lt),window.addEventListener("keyup",Ke);let Qe=null,ft={id:null,ox:0,oy:0},Pt=a(".ew-stick"),pt=P=>{if(!P.target.closest("button,.ew-dlg,.ew-menu,.ew-map,.ew-opt")){if(!n&&P.clientX<r.clientWidth*.46&&P.clientY>r.clientHeight*(r.clientWidth>r.clientHeight?.26:.4)&&ft.id===null){ft.id=P.pointerId,ft.ox=P.clientX,ft.oy=P.clientY,Pt.style.display="block",Pt.style.left=P.clientX+"px",Pt.style.top=P.clientY-r.getBoundingClientRect().top-(r.clientHeight-r.querySelector(".ew-joy").clientHeight)+"px",Pt.firstChild.style.transform="";return}Qe||(Qe={id:P.pointerId,x:P.clientX,y:P.clientY,x0:P.clientX,y0:P.clientY,t:performance.now(),b:P.button})}},Pe=P=>{if(P.pointerId===ft.id){let W=P.clientX-ft.ox,K=P.clientY-ft.oy,Ee=Math.hypot(W,K),Se=52;Ee>Se&&(W*=Se/Ee,K*=Se/Ee),Pt.firstChild.style.transform=`translate(${W}px,${K}px)`,Me.mx=W/Se,Me.mz=K/Se}else Qe&&P.pointerId===Qe.id&&(w.camYaw-=(P.clientX-Qe.x)*(n?.0042:.0062),w.camPitch=Math.max(-.25,Math.min(1.2,w.camPitch+(P.clientY-Qe.y)*(n?.003:.0045))),Qe.x=P.clientX,Qe.y=P.clientY)},j=P=>{P.pointerId===ft.id&&(ft.id=null,Me.mx=Me.mz=0,Pt.style.display="none"),Qe&&P.pointerId===Qe.id&&(n&&P.type==="pointerup"&&performance.now()-Qe.t<300&&Math.hypot(P.clientX-Qe.x0,P.clientY-Qe.y0)<6&&(Qe.b===0?G.attack():Qe.b===2&&G.dodge()),Qe=null),P.pointerId===Be&&(Be=null,G.held=!1),P.pointerId===Me.up&&(Me.up=null),P.pointerId===Me.dn&&(Me.dn=null)},Be=null;r.addEventListener("pointerdown",P=>{let W=P.target.closest('[data-w="jump"],[data-w="run"],[data-w="mount"],[data-w="act"]');if(!W||w.paused)return;P.preventDefault(),W._pd=performance.now();let K=W.dataset.w;if(w.fly&&(K==="jump"||K==="mount")){Me[K==="jump"?"up":"dn"]=P.pointerId;return}K==="jump"?Me.jump=!0:K==="run"?(w.run=!w.run,W.classList.toggle("on",w.run)):K==="mount"?we(!w.mount):At()}),r.addEventListener("pointerdown",P=>{let W=P.target.closest("[data-c]");if(!W||w.paused)return;P.preventDefault();let K=W.dataset.c;K==="draw"?G.toggleArm():K==="dodge"?G.dodge():K==="0"?(G.attack(),G.held=!0,Be=P.pointerId):G.skill(+K)}),r.addEventListener("pointerdown",pt),r.addEventListener("pointermove",Pe),r.addEventListener("pointerup",j),r.addEventListener("pointercancel",j);let He=P=>{w.camDist=Math.max(2.6,Math.min(22,w.camDist*(P.deltaY>0?1.1:.9))),P.preventDefault()};r.addEventListener("wheel",He,{passive:!1}),r.addEventListener("contextmenu",P=>P.preventDefault()),r.addEventListener("click",P=>{let W=P.target.closest("[data-w]");if(!W)return;let K=W.dataset.w;if(W._pd&&performance.now()-W._pd<800){W._pd=0;return}if(!(w.fly&&(K==="jump"||K==="mount"))){if(K==="act")At();else if(K==="mount")we(!w.mount);else if(K==="run")w.run=!w.run,W.classList.toggle("on",w.run);else if(K==="jump")Me.jump=!0;else if(K==="dnext")zn();else if(K==="dclose")Yn();else if(K==="menu")st(!0);else if(K==="resume")st(!1);else if(K==="home")ye(-6,34),st(!1);else if(K==="arena")we(!1),ye(nt.x+40,nt.z),w.yaw=-Math.PI/2,w.camYaw=Math.PI/2,st(!1);else if(K==="mv"||K==="stn")N.setStyle(K==="mv"?{move:at(Ae,N.move)}:{stance:at(et,N.stance)}),We(),t.onStyle&&t.onStyle({move:N.move,stance:N.stance});else if(K==="fs")It(),a(".ew-rot").classList.remove("on"),st(!1);else if(K==="quit")Zt();else if(K==="mode"){let Ee=[w.x,w.z];Je.dispose(),t.onMode&&t.onMode(n?"mobile":"pc",w.inside?null:Ee)}}});function st(P){w.paused=P,a(".ew-mm").classList.toggle("on",P),P||a(".ew-wsel").classList.remove("on")}let je={n:1,loop:!1};function _t(){let P=G.arena.best+1;je.n=Math.max(1,Math.min(P,je.n));let W=je.n,K=t.wavePreview?t.wavePreview(W):null;a(".ew-ws-n").textContent=W,a(".ew-ws-sub").textContent="Vagues ouvertes : 1 \xE0 "+P+(G.arena.best?" \xB7 record "+G.arena.best:""),a(".ew-ws-rw").innerHTML=(W%10===0?"<b>Drake d\u2019ombre</b> \xB7 ":W%5===0?"<b>Champion d\u2019ombre</b> \xB7 ":"")+(K?"R\xE9compense : <b>+"+K.x+" XP</b> \xB7 <b>+"+K.k+" kinahs</b>"+(K.first===!1?" \xB7 d\xE9j\xE0 gagn\xE9e aujourd\u2019hui (10 %)":" \xB7 plein tarif une fois par jour, puis 10 %"):""),a('[data-ws="loop"]').classList.toggle("on",je.loop),a('[data-ws="loop"]').textContent=(je.loop?"\u2611":"\u2610")+" Rejouer cette vague en boucle";let Ee=5*Math.floor(P/5),Se=a('[data-ws="boss"]');Se.style.display=Ee>=5?"":"none",Se.textContent="Dernier champion ouvert : vague "+Ee}function Ot(){je.n=G.arenaStart(),w.paused=!0,_t(),a(".ew-wsel").classList.add("on")}r.addEventListener("click",P=>{let W=P.target.closest("[data-ws]");if(!W)return;let K=W.dataset.ws;if(K==="x"||K==="go"){a(".ew-wsel").classList.remove("on"),w.paused=!1,K==="go"&&G.startArena(je.n,je.loop);return}K==="loop"?je.loop=!je.loop:K==="boss"?je.n=5*Math.floor((G.arena.best+1)/5):je.n+=+K,_t()});let kt=!1,Wt=()=>{try{let P=screen.orientation;return P&&P.lock?P.lock("landscape").then(()=>!0,()=>!1):Promise.resolve(!1)}catch{return Promise.resolve(!1)}};function It(){let P=document.documentElement,W=P.requestFullscreen||P.webkitRequestFullscreen;if(!W)return Wt();let K=null;try{K=W.call(P,{navigationUI:"hide"}),kt=!0}catch{K=null}return(K&&K.then?K:Promise.resolve()).then(Wt,Wt)}n||Wt().then(P=>{if(!P&&r.clientHeight>r.clientWidth&&!ee){let W=a(".ew-rot");W.classList.add("on"),setTimeout(()=>W.classList.remove("on"),9e3)}});function Zt(){let P=w.inside?null:[Math.round(w.x),Math.round(w.z)];Je.dispose(),t.onExit&&t.onExit(P)}function At(){!ct||w.talking||(ct.kind==="npc"?gi(ct.npc):ct.kind==="house"?Un(ct.id):ct.kind==="exit"?Xt():ct.kind==="arena"?Ot():ct.kind==="rift"&&t.onRift&&(Je.dispose(),t.onRift([Math.round(w.x),Math.round(w.z)])))}let rn=0;function Rt(P){let W=P.lines&&P.lines.length?P.lines:["\u2026"],K=W[P.li%W.length],Ee=a(".ew-dlg p");Ee.textContent="",clearInterval(rn);let Se=0;rn=setInterval(()=>{Se+=2,Ee.textContent=K.slice(0,Se),Se>=K.length&&clearInterval(rn)},18),a(".ew-dlg h4").innerHTML="",a(".ew-dlg h4").append(P.name,Object.assign(document.createElement("small"),{textContent:P.role||""})),a(".ew-bond").textContent=P.bond?"Lien "+"\u2665".repeat(Math.min(10,P.bond)):"",a('[data-w="dnext"]').style.display=W.length>1?"":"none"}function gi(P){w.talking=P,a(".ew-dlg").classList.add("on"),a(".ew-prompt").classList.remove("on"),r.classList.add("ew-talk"),Rt(P);let W=Math.atan2(w.x-P.x,w.z-P.z);P.av.group.rotation.y=W,w.yaw=W+Math.PI,t.onTalk&&t.onTalk(P.id)}function zn(){let P=w.talking;if(!P)return;let W=a(".ew-dlg p"),K=P.lines||[],Ee=K[P.li%Math.max(1,K.length)]||"";if(W.textContent.length<Ee.length){clearInterval(rn),W.textContent=Ee;return}if(P.li++,P.li%Math.max(1,K.length)===0){Yn();return}Rt(P)}function Yn(){clearInterval(rn),w.talking=null,a(".ew-dlg").classList.remove("on"),r.classList.remove("ew-talk")}let Cn=null;function Un(P){let W=E[P];W&&(we(!1),Cn=[w.x,w.z,w.yaw],w.inside=P,w.x=W.ox+W.door[0],w.z=W.door[1]-.6,w.y=W.oy,w.yaw=Math.PI,w.camYaw=0,w.camDist=Math.min(w.camDist,6),F.visible=!0,A.visible=!1,h.fog.near=60,h.fog.far=200,O.position.set(W.ox,W.oy+1.6,-W.D/2+2.2),O.intensity=90,Q.position.set(W.ox,W.oy+W.h-.6,1.5),Q.intensity=W.hs.r>=6?160:W.hs.r===5?50:70,Q.color.set(W.hs.r>=6?16774084:W.hs.r===5?10976255:16773341),y.intensity=0,d.intensity=.35,ne(W.hs.name,W.hs.cap>=99?"Places illimit\xE9es":W.hs.cap+" places"))}function Xt(P){w.inside&&(w.inside=null,F.visible=!1,A.visible=!0,h.fog.near=s.fog[0],h.fog.far=s.fog[1],O.intensity=Q.intensity=0,y.intensity=2.9,d.intensity=.7,Cn&&!P&&(w.x=Cn[0],w.z=Cn[1],w.yaw=Cn[2]+Math.PI),w.y=Yt(w.x,w.z))}let _n=new Y,Ht=new Y,U=performance.now(),ee=!1,se=0,re=!0;function ue(P){if(ee)return;requestAnimationFrame(ue);let W=Math.min(.05,(P-U)/1e3);if(U=P,w.paused)return;w.t+=W;let K=Me.mx,Ee=Me.mz;(xe.KeyW||xe.ArrowUp)&&(Ee-=1),(xe.KeyS||xe.ArrowDown)&&(Ee+=1),(xe.KeyA||xe.ArrowLeft)&&(K-=1),(xe.KeyD||xe.ArrowRight)&&(K+=1);let Se=Math.min(1,Math.hypot(K,Ee)),I=Se<.05?G.autoMove:null;I&&(Se=I.mag),Se*=w.talking?0:G.moveK();let Z=!!w.fly,ie=w.run||xe.ShiftLeft||xe.ShiftRight,$=N.move,be=$==="levitation"&&!w.mount,me=$==="levitation"?[11,16]:$==="ninja"?[10.5,15.5]:[9.5,14],fe=(Z?ie?30:20:w.mount?9.5*zi[w.mountId].speed:ie?me[1]:me[0])*(w.inside?.45:1),Xe=Se*fe;if(w.speed+=(Xe-w.speed)*Math.min(1,W*(Z?4:w.mount?3:be?9:14)),w.inDir=I?I.yaw:Se>.05?Math.atan2(K,Ee)+w.camYaw:null,Se>.05&&w.dashT<=0){let D=w.inDir-w.yaw;for(;D>Math.PI;)D-=6.2832;for(;D<-Math.PI;)D+=6.2832;w.yaw+=D*Math.min(1,W*(Z?7:w.mount?5:be?13:18))}w.dashT>0&&(w.dashT-=W,w.speed=w.dashV);let tt=Math.sin(w.yaw)*w.speed*W,vt=Math.cos(w.yaw)*w.speed*W,St=w.x+tt,Mt=w.z+vt;if(w.inside){let b=E[w.inside];St=Math.max(b.ox-b.W/2+.8,Math.min(b.ox+b.W/2-.8,St)),Mt=Math.max(-b.D/2+1.9,Math.min(b.D/2-.7,Mt))}else{St=Math.max(-438,Math.min(438,St)),Mt=Math.max(-438,Math.min(438,Mt));let b=w.mount?1.1:.55,D=Z&&w.y-Math.max(0,Yt(w.x,w.z))>14;if(R.B.boxes.forEach((X,H)=>{if(St>X[0]-b&&St<X[1]+b&&Mt>X[2]-b&&Mt<X[3]+b){if(Z&&w.y>ht(H))return;Z&&(w.bump=.25);let k=St-(X[0]-b),de=X[1]+b-St,pe=Mt-(X[2]-b),oe=X[3]+b-Mt,ge=Math.min(k,de,pe,oe);ge===k?St=X[0]-b:ge===de?St=X[1]+b:ge===pe?Mt=X[2]-b:Mt=X[3]+b}}),!D){let X=St-nt.x,H=Mt-nt.z,k=Math.hypot(X,H);if(k>nt.r-.5&&k<nt.wall+.6&&Math.abs(Math.atan2(H,X))>nt.gate){let de=(k<(nt.r+nt.wall)/2?nt.r-.5:nt.wall+.6)/k;St=nt.x+X*de,Mt=nt.z+H*de}}if(!Z){for(let X of le)if(!X.inside){let H=Math.hypot(St-X.x,Mt-X.z);H<.8&&H>.001&&(St=X.x+(St-X.x)/H*.8,Mt=X.z+(Mt-X.z)/H*.8)}}}w.x=St,w.z=Mt;let Mn=w.inside?E[w.inside].oy:Math.max(Yt(w.x,w.z),Math.abs(w.x-Ss(w.z))<30&&Math.abs(w.z+56)<3.3&&Math.abs(w.x-Ss(-56))<20?4:-99,Math.abs(w.z-24)<2.3&&w.x>186&&w.x<208?1.22:-99,Math.hypot(w.x-318,w.z-300)<96?1.32:-99,be?.4:-99);if(Me.jump&&(w.onGround||w.jumps<2)&&!w.mount&&!w.talking&&!w.down){let b=!w.onGround;w.vy=b?8.2:8.6,w.jumps=b?2:1,w.onGround=!1,b&&N.play("flip",.62)}if(Me.jump=!1,Z){let b=Me.up!=null||xe.Space,D=Me.dn!=null||xe.KeyC||xe.ControlLeft||xe.ControlRight;(mt-=W)<=0&&(mt=.12,ve=it(w.x,w.z));let X=ve>Mn+.4?ve:-99,H=Math.max(Mn,X,-.4)+.5,k=ie?38:22;w.bump>0&&(w.bump-=W);let de=((b?1:0)-(D?1:0))*k+(w.bump>0&&!D?k*.8:0);w.vy+=(de-w.vy)*Math.min(1,W*4),w.y=Math.min(1500,w.y+w.vy*W),w.onGround=!1,w.jumps=2,w.y<=H&&(D&&X<-90?(w.y=Math.max(Mn,w.y),ot(!1)):(w.y=H,w.vy<0&&(w.vy=0))),(w.inside||w.down)&&ot(!1)}else w.vy-=24*W,w.y+=w.vy*W,w.y<=Mn?(w.y=Mn,w.vy=0,w.onGround=!0,w.jumps=0):w.y-Mn>.35&&(w.onGround=!1);{let b=(n?55:r.clientWidth>r.clientHeight?50:62)+Math.max(0,Math.min(1,(w.speed-10.5)/5))*7;Math.abs(u.fov-b)>.05&&(u.fov+=(b-u.fov)*Math.min(1,W*5),u.updateProjectionMatrix())}let Lt=!w.inside&&!be&&!Z&&w.y<-.75?-.75-w.y:0,Ct=N.group;if(w.mount){let b=w.mount;b.group.position.set(w.x,w.y+Lt,w.z),b.group.rotation.y=w.yaw,b.update(W,w.speed/8),Ct.position.set(w.x-Math.sin(w.yaw)*-b.seat.z,w.y+Lt+b.seat.y-N.seatDrop,w.z-Math.cos(w.yaw)*-b.seat.z),Ct.rotation.y=w.yaw,N.update(W,{riding:!0,wide:b.wide})}else Ct.position.set(w.x,w.y+Lt,w.z),Ct.rotation.y=w.yaw,w.pitch+=((Z?Math.min(1,w.speed/20)*1-w.vy*.03:0)-w.pitch)*Math.min(1,W*5),Ct.rotation.x=w.pitch,N.update(W,{speed:w.speed/4.6,down:w.down,fly:Z});if(G.update(W),(G.lock||G.auto)&&G.lockE&&G.lockE.state!=="dead"&&!w.inside&&!w.talking&&!Qe){let b=G.lockE,D=Math.atan2(b.x-w.x,b.z-w.z)+Math.PI-w.camYaw;for(;D>Math.PI;)D-=6.2832;for(;D<-Math.PI;)D+=6.2832;G.lock&&(w.camYaw+=D*Math.min(1,W*5))}if(!w.inside){let b=Math.max(0,w.y-25);h.fog.near=s.fog[0]+b*1.5,h.fog.far=Math.min(2300,s.fog[1]+b*3.5)}let un=!!G.pl.mecha,qt=un?2.5:(w.mount?w.mount.seat.y:0)+N.height*.82,bn=w.camDist*(w.mount?1.45:un?1.7:1)*(w.talking?.62:1),Ri=Math.cos(w.camPitch);_n.set(w.x,w.y+Lt+qt,w.z);for(let b of[1,.72,.5,.32,.18])if(Ht.set(_n.x+Math.sin(w.camYaw)*Ri*bn*b,_n.y+Math.sin(w.camPitch)*bn*b,_n.z+Math.cos(w.camYaw)*Ri*bn*b),w.inside||Ht.y-w.y>16||!R.B.boxes.some(D=>Ht.x>D[0]-.4&&Ht.x<D[1]+.4&&Ht.z>D[2]-.4&&Ht.z<D[3]+.4))break;if(w.inside){let b=E[w.inside];Ht.x=Math.max(b.ox-b.W/2+.5,Math.min(b.ox+b.W/2-.5,Ht.x)),Ht.z=Math.max(-b.D/2+.6,Math.min(b.D/2+9,Ht.z)),Ht.y=Math.max(b.oy+.6,Math.min(b.oy+b.h+4,Ht.y))}else{let b=Math.max(Yt(Ht.x,Ht.z),.35)+.7;Ht.y<b&&(Ht.y=b)}re?(u.position.copy(Ht),re=!1):u.position.lerp(Ht,Math.min(1,W*12)),u.lookAt(_n),G.shake>.01&&(u.position.x+=(Math.random()-.5)*G.shake*.5,u.position.y+=(Math.random()-.5)*G.shake*.4),v.position.copy(u.position),g.position.x=w.t*2.2%300,v.visible=g.visible=!w.inside,m.visible=M.visible=!w.inside,y.position.set(w.x+p.x*120,w.y+p.y*120+20,w.z+p.z*120),y.target.position.set(w.x,w.y,w.z),B.rotation.y+=W*.25,B.userData.m3.rotation.z-=W*1.4,B.userData.m2.material.opacity=.45+Math.sin(w.t*2.6)*.14;let Ze=null,l=1e9;for(let b of le){let D=b.inside===w.inside;if(b.av.group.visible=D,!D)continue;let X=Math.hypot(w.x-b.x,w.z-b.z);b.lb.visible=X<26&&X>2.6,X<40&&b.av.update(W,{});for(let H of b.av.inks)H.visible=X<32;if(X<9&&!w.talking){let H=Math.atan2(w.x-b.x,w.z-b.z)-b.av.group.rotation.y;for(;H>Math.PI;)H-=6.2832;for(;H<-Math.PI;)H+=6.2832;b.av.group.rotation.y+=H*Math.min(1,W*3)}X<3.2&&X<l&&(l=X,Ze={kind:"npc",npc:b,text:"Parler \xE0 "+b.name.split(" ")[0]})}if(w.inside){let b=E[w.inside];Math.hypot(w.x-b.ox-b.door[0],w.z-b.door[1])<2.2&&!Ze&&(Ze={kind:"exit",text:"Sortir"})}else{for(let b of R.houses){let D=Math.hypot(w.x-b.x,w.z-b.z);D<4.5&&D<l&&(l=D,Ze={kind:"house",id:b.id,text:"Entrer : "+b.name})}t.onRift&&Math.hypot(w.x+70,w.z-100)<6&&!Ze&&(Ze={kind:"rift",text:"Faille de la gare : partir en exp\xE9dition"}),!Ze&&!G.arena.on&&!w.down&&Math.hypot(w.x-nt.x,w.z-nt.z)<3.4&&(Ze={kind:"arena",text:"D\xE9fier l\u2019ar\xE8ne \xB7 vague "+G.arenaStart()})}ct=Ze;let T=a(".ew-prompt");if(Ze&&!w.talking){T.classList.add("on");let b=T.firstChild,D=(n?"[E]  ":"")+Ze.text;b.textContent!==D&&(b.textContent=D)}else T.classList.remove("on");if(!w.inside){let b="",D="";for(let X of Vd)if(Math.hypot(w.x-X[0],w.z-X[1])<X[2]){b=X[3],D=X[4];break}b&&b!==w.zone&&ne(b,D),w.zone=b}(se+=W)>.12&&(se=0,z()),he?he.render():c.render(h,u)}let Je={combat:G,player:N,dispose(){if(!ee){ee=!0,G.dispose();try{!n&&screen.orientation&&screen.orientation.unlock&&screen.orientation.unlock(),kt&&document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen()}catch{}clearInterval(rn),clearTimeout(C),window.removeEventListener("keydown",lt),window.removeEventListener("keyup",Ke),window.removeEventListener("resize",Ce),Si(h),he&&he.dispose&&he.dispose(),c.dispose(),c.forceContextLoss&&c.forceContextLoss(),r.remove()}},state:w,teleport:(P,W)=>ye(P,W),enter:Un,mountOn:()=>we(!0),look(P,W,K){w.camYaw=P,w.camPitch=W,K&&(w.camDist=K)}};return requestAnimationFrame(P=>{U=P,ue(P),setTimeout(()=>{let W=a(".ew-load");W.style.opacity=0,setTimeout(()=>W.remove(),900),ne("Vesp\xE9rane","Ciel couleur de rouille")},350)}),Je}window.Elyos3D={avatarView:Rd,startWorld:Yd,groundHeight:Yt,DEFAULT_LOOK:Qc,HAIR_STYLES:Ed,STANCES:$o,MOVES:jo,MOUNT_SPEED:Object.fromEntries(Object.entries(zi).map(([i,e])=>[i,e.speed]))};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
