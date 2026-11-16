(()=>{var Ud=0,Zc=1,zd=2;var Ru=1,ia=2,Ii=3,es=0,mn=1,jt=2;var bi=0,$i=1,zn=2,Jc=3,Kc=4,Nd=5,Ms=100,Od=101,kd=102,$c=103,jc=104,Fd=200,Bd=201,Hd=202,Gd=203,zl=204,Nl=205,Vd=206,Wd=207,Xd=208,qd=209,Yd=210,Zd=211,Jd=212,Kd=213,$d=214,jd=0,Qd=1,ef=2,Za=3,tf=4,nf=5,sf=6,rf=7,Ac=0,af=1,of=2,wi=0,Rc=1,Cc=2,Pc=3,sa=4,lf=5,Ic=6;var Cu=300,or=301,lr=302,Ol=303,kl=304,Io=306,Xr=1e3,fi=1001,Fl=1002,bn=1003,Qc=1004;var jo=1005;var ii=1006,cf=1007;var qr=1008;var ji=1009,hf=1010,uf=1011,Lc=1012,Pu=1013,Ji=1014,Ki=1015,pi=1016,Iu=1017,Lu=1018,Ss=1020,df=1021,$n=1023,ff=1024,pf=1025,Es=1026,cr=1027,mf=1028,Du=1029,gf=1030,Uu=1031,zu=1033,Qo=33776,el=33777,tl=33778,nl=33779,eh=35840,th=35841,nh=35842,ih=35843,Nu=36196,sh=37492,rh=37496,ah=37808,oh=37809,lh=37810,ch=37811,hh=37812,uh=37813,dh=37814,fh=37815,ph=37816,mh=37817,gh=37818,xh=37819,yh=37820,vh=37821,il=36492,_h=36494,Mh=36495,xf=36283,bh=36284,wh=36285,Sh=36286;var Ja=2300,Ka=2301,sl=2302,Eh=2400,Th=2401,Ah=2402;var Ou=3e3,Ts=3001,yf=3200,vf=3201,Lo=0,_f=1,si="",tn="srgb",Ni="srgb-linear",Dc="display-p3",Do="display-p3-linear",$a="linear",Yt="srgb",ja="rec709",Qa="p3";var zs=7680;var Rh=519,Mf=512,bf=513,wf=514,ku=515,Sf=516,Ef=517,Tf=518,Af=519,Bl=35044;var Ch="300 es",Hl=1035,Ui=2e3,eo=2001,ts=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var rl=Math.PI/180,to=180/Math.PI;function zi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[i&255]+Ln[i>>8&255]+Ln[i>>16&255]+Ln[i>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function Un(i,e,t){return Math.max(e,Math.min(t,i))}function Rf(i,e){return(i%e+e)%e}function al(i,e,t){return(1-t)*i+t*e}function Ph(i){return(i&i-1)===0&&i!==0}function Gl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Re=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},St=class i{constructor(e,t,n,s,r,a,o,l,h){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,h)}set(e,t,n,s,r,a,o,l,h){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],h=n[1],u=n[4],f=n[7],p=n[2],d=n[5],y=n[8],v=s[0],g=s[3],m=s[6],M=s[1],_=s[4],E=s[7],I=s[2],P=s[5],A=s[8];return r[0]=a*v+o*M+l*I,r[3]=a*g+o*_+l*P,r[6]=a*m+o*E+l*A,r[1]=h*v+u*M+f*I,r[4]=h*g+u*_+f*P,r[7]=h*m+u*E+f*A,r[2]=p*v+d*M+y*I,r[5]=p*g+d*_+y*P,r[8]=p*m+d*E+y*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],u=e[8];return t*a*u-t*o*h-n*r*u+n*o*l+s*r*h-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],u=e[8],f=u*a-o*h,p=o*l-u*r,d=h*r-a*l,y=t*f+n*p+s*d;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/y;return e[0]=f*v,e[1]=(s*h-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=p*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(n*l-h*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*a+h*o)+a+e,-s*h,s*l,-s*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ol.makeScale(e,t)),this}rotate(e){return this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ol=new St;function Fu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cf(){let i=no("canvas");return i.style.display="block",i}var Ih={};function Hr(i){i in Ih||(Ih[i]=!0,console.warn(i))}var Lh=new St().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dh=new St().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ga={[Ni]:{transfer:$a,primaries:ja,toReference:i=>i,fromReference:i=>i},[tn]:{transfer:Yt,primaries:ja,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Do]:{transfer:$a,primaries:Qa,toReference:i=>i.applyMatrix3(Dh),fromReference:i=>i.applyMatrix3(Lh)},[Dc]:{transfer:Yt,primaries:Qa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Dh),fromReference:i=>i.applyMatrix3(Lh).convertLinearToSRGB()}},Pf=new Set([Ni,Do]),Ht={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Pf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=ga[e].toReference,s=ga[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ga[i].primaries},getTransfer:function(i){return i===si?$a:ga[i].transfer}};function rr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ll(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ns,io=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ns===void 0&&(Ns=no("canvas")),Ns.width=e.width,Ns.height=e.height;let n=Ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=no("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=rr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rr(t[n]/255)*255):t[n]=rr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},If=0,so=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=zi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(cl(s[a].image)):r.push(cl(s[a]))}else r=cl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?io.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lf=0,jn=class i extends ts{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=fi,s=fi,r=ii,a=qr,o=$n,l=ji,h=i.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=zi(),this.name="",this.source=new so(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ts?tn:si),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===tn?Ts:Ou}set encoding(e){Hr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ts?tn:si}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=Cu;jn.DEFAULT_ANISOTROPY=1;var nn=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,h=l[0],u=l[4],f=l[8],p=l[1],d=l[5],y=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-p)<.01&&Math.abs(f-v)<.01&&Math.abs(y-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(f+v)<.1&&Math.abs(y+g)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(h+1)/2,E=(d+1)/2,I=(m+1)/2,P=(u+p)/4,A=(f+v)/4,F=(y+g)/4;return _>E&&_>I?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=P/n,r=A/n):E>I?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=P/s,r=F/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=A/r,s=F/r),this.set(n,s,r,t),this}let M=Math.sqrt((g-y)*(g-y)+(f-v)*(f-v)+(p-u)*(p-u));return Math.abs(M)<.001&&(M=1),this.x=(g-y)/M,this.y=(f-v)/M,this.z=(p-u)/M,this.w=Math.acos((h+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vl=class extends ts{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Hr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ts?tn:si),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new jn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new so(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends Vl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ro=class extends jn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wl=class extends jn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],h=n[s+1],u=n[s+2],f=n[s+3],p=r[a+0],d=r[a+1],y=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=h,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=p,e[t+1]=d,e[t+2]=y,e[t+3]=v;return}if(f!==v||l!==p||h!==d||u!==y){let g=1-o,m=l*p+h*d+u*y+f*v,M=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let I=Math.sqrt(_),P=Math.atan2(I,m*M);g=Math.sin(g*P)/I,o=Math.sin(o*P)/I}let E=o*M;if(l=l*g+p*E,h=h*g+d*E,u=u*g+y*E,f=f*g+v*E,g===1-o){let I=1/Math.sqrt(l*l+h*h+u*u+f*f);l*=I,h*=I,u*=I,f*=I}}e[t]=l,e[t+1]=h,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],h=n[s+2],u=n[s+3],f=r[a],p=r[a+1],d=r[a+2],y=r[a+3];return e[t]=o*y+u*f+l*d-h*p,e[t+1]=l*y+u*p+h*f-o*d,e[t+2]=h*y+u*d+o*p-l*f,e[t+3]=u*y-o*f-l*p-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(n/2),u=o(s/2),f=o(r/2),p=l(n/2),d=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=p*u*f+h*d*y,this._y=h*d*f-p*u*y,this._z=h*u*y+p*d*f,this._w=h*u*f-p*d*y;break;case"YXZ":this._x=p*u*f+h*d*y,this._y=h*d*f-p*u*y,this._z=h*u*y-p*d*f,this._w=h*u*f+p*d*y;break;case"ZXY":this._x=p*u*f-h*d*y,this._y=h*d*f+p*u*y,this._z=h*u*y+p*d*f,this._w=h*u*f-p*d*y;break;case"ZYX":this._x=p*u*f-h*d*y,this._y=h*d*f+p*u*y,this._z=h*u*y-p*d*f,this._w=h*u*f+p*d*y;break;case"YZX":this._x=p*u*f+h*d*y,this._y=h*d*f+p*u*y,this._z=h*u*y-p*d*f,this._w=h*u*f-p*d*y;break;case"XZY":this._x=p*u*f-h*d*y,this._y=h*d*f-p*u*y,this._z=h*u*y+p*d*f,this._w=h*u*f+p*d*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],h=t[2],u=t[6],f=t[10],p=n+o+f;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Un(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,h=t._z,u=t._w;return this._x=n*u+a*o+s*h-r*l,this._y=s*u+a*l+r*o-n*h,this._z=r*u+a*h+n*l-s*o,this._w=a*u-n*o-s*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let h=Math.sqrt(l),u=Math.atan2(h,o),f=Math.sin((1-t)*u)/h,p=Math.sin(t*u)/h;return this._w=a*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Uh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Uh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*h+a*f-o*u,this.y=n+l*u+o*h-r*f,this.z=s+l*f+r*u-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hl.copy(this).projectOnVector(e),this.sub(hl)}reflect(e){return this.sub(hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Un(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hl=new V,Uh=new Gn,Oi=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),ya.subVectors(this.max,Ir),Os.subVectors(e.a,Ir),ks.subVectors(e.b,Ir),Fs.subVectors(e.c,Ir),Wi.subVectors(ks,Os),Xi.subVectors(Fs,ks),gs.subVectors(Os,Fs);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-gs.z,gs.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,gs.z,0,-gs.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-gs.y,gs.x,0];return!ul(t,Os,ks,Fs,ya)||(t=[1,0,0,0,1,0,0,0,1],!ul(t,Os,ks,Fs,ya))?!1:(va.crossVectors(Wi,Xi),t=[va.x,va.y,va.z],ul(t,Os,ks,Fs,ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ti=[new V,new V,new V,new V,new V,new V,new V,new V],hi=new V,xa=new Oi,Os=new V,ks=new V,Fs=new V,Wi=new V,Xi=new V,gs=new V,Ir=new V,ya=new V,va=new V,xs=new V;function ul(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){xs.fromArray(i,r);let o=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),l=e.dot(xs),h=t.dot(xs),u=n.dot(xs);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}var Df=new Oi,Lr=new V,dl=new V,ns=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Df.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);let t=Lr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Lr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(dl)),this.expandByPoint(Lr.copy(e.center).sub(dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ai=new V,fl=new V,_a=new V,qi=new V,pl=new V,Ma=new V,ml=new V,ao=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){fl.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(fl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(_a),o=qi.dot(this.direction),l=-qi.dot(_a),h=qi.lengthSq(),u=Math.abs(1-a*a),f,p,d,y;if(u>0)if(f=a*l-o,p=a*o-l,y=r*u,f>=0)if(p>=-y)if(p<=y){let v=1/u;f*=v,p*=v,d=f*(f+a*p+2*o)+p*(a*f+p+2*l)+h}else p=r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+h;else p=-r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+h;else p<=-y?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+p*(p+2*l)+h):p<=y?(f=0,p=Math.min(Math.max(-r,-l),r),d=p*(p+2*l)+h):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+p*(p+2*l)+h);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),d=-f*f+p*(p+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(fl).addScaledVector(_a,p),d}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);let n=Ai.dot(this.direction),s=Ai.dot(Ai)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,h=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,s=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,s=(e.min.x-p.x)*h),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,n,s,r){pl.subVectors(t,e),Ma.subVectors(n,e),ml.crossVectors(pl,Ma);let a=this.direction.dot(ml),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);let l=o*this.direction.dot(Ma.crossVectors(qi,Ma));if(l<0)return null;let h=o*this.direction.dot(pl.cross(qi));if(h<0||l+h>a)return null;let u=-o*qi.dot(ml);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Nt=class i{constructor(e,t,n,s,r,a,o,l,h,u,f,p,d,y,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,h,u,f,p,d,y,v,g)}set(e,t,n,s,r,a,o,l,h,u,f,p,d,y,v,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=h,m[6]=u,m[10]=f,m[14]=p,m[3]=d,m[7]=y,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),a=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=a*u,d=a*f,y=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=h,t[1]=d+y*h,t[5]=p-v*h,t[9]=-o*l,t[2]=v-p*h,t[6]=y+d*h,t[10]=a*l}else if(e.order==="YXZ"){let p=l*u,d=l*f,y=h*u,v=h*f;t[0]=p+v*o,t[4]=y*o-d,t[8]=a*h,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-y,t[6]=v+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*u,d=l*f,y=h*u,v=h*f;t[0]=p-v*o,t[4]=-a*f,t[8]=y+d*o,t[1]=d+y*o,t[5]=a*u,t[9]=v-p*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*u,d=a*f,y=o*u,v=o*f;t[0]=l*u,t[4]=y*h-d,t[8]=p*h+v,t[1]=l*f,t[5]=v*h+p,t[9]=d*h-y,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,d=a*h,y=o*l,v=o*h;t[0]=l*u,t[4]=v-p*f,t[8]=y*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-h*u,t[6]=d*f+y,t[10]=p-v*f}else if(e.order==="XZY"){let p=a*l,d=a*h,y=o*l,v=o*h;t[0]=l*u,t[4]=-f,t[8]=h*u,t[1]=p*f+v,t[5]=a*u,t[9]=d*f-y,t[2]=y*f-d,t[6]=o*u,t[10]=v*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Uf,e,zf)}lookAt(e,t,n){let s=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Yi.crossVectors(n,Jn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Yi.crossVectors(n,Jn)),Yi.normalize(),ba.crossVectors(Jn,Yi),s[0]=Yi.x,s[4]=ba.x,s[8]=Jn.x,s[1]=Yi.y,s[5]=ba.y,s[9]=Jn.y,s[2]=Yi.z,s[6]=ba.z,s[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],h=n[12],u=n[1],f=n[5],p=n[9],d=n[13],y=n[2],v=n[6],g=n[10],m=n[14],M=n[3],_=n[7],E=n[11],I=n[15],P=s[0],A=s[4],F=s[8],T=s[12],x=s[1],k=s[5],O=s[9],j=s[13],N=s[2],b=s[6],X=s[10],ne=s[14],D=s[3],$=s[7],we=s[11],de=s[15];return r[0]=a*P+o*x+l*N+h*D,r[4]=a*A+o*k+l*b+h*$,r[8]=a*F+o*O+l*X+h*we,r[12]=a*T+o*j+l*ne+h*de,r[1]=u*P+f*x+p*N+d*D,r[5]=u*A+f*k+p*b+d*$,r[9]=u*F+f*O+p*X+d*we,r[13]=u*T+f*j+p*ne+d*de,r[2]=y*P+v*x+g*N+m*D,r[6]=y*A+v*k+g*b+m*$,r[10]=y*F+v*O+g*X+m*we,r[14]=y*T+v*j+g*ne+m*de,r[3]=M*P+_*x+E*N+I*D,r[7]=M*A+_*k+E*b+I*$,r[11]=M*F+_*O+E*X+I*we,r[15]=M*T+_*j+E*ne+I*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],u=e[2],f=e[6],p=e[10],d=e[14],y=e[3],v=e[7],g=e[11],m=e[15];return y*(+r*l*f-s*h*f-r*o*p+n*h*p+s*o*d-n*l*d)+v*(+t*l*d-t*h*p+r*a*p-s*a*d+s*h*u-r*l*u)+g*(+t*h*f-t*o*d-r*a*f+n*a*d+r*o*u-n*h*u)+m*(-s*o*u-t*l*f+t*o*p+s*a*f-n*a*p+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],u=e[8],f=e[9],p=e[10],d=e[11],y=e[12],v=e[13],g=e[14],m=e[15],M=f*g*h-v*p*h+v*l*d-o*g*d-f*l*m+o*p*m,_=y*p*h-u*g*h-y*l*d+a*g*d+u*l*m-a*p*m,E=u*v*h-y*f*h+y*o*d-a*v*d-u*o*m+a*f*m,I=y*f*l-u*v*l-y*o*p+a*v*p+u*o*g-a*f*g,P=t*M+n*_+s*E+r*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/P;return e[0]=M*A,e[1]=(v*p*r-f*g*r-v*s*d+n*g*d+f*s*m-n*p*m)*A,e[2]=(o*g*r-v*l*r+v*s*h-n*g*h-o*s*m+n*l*m)*A,e[3]=(f*l*r-o*p*r-f*s*h+n*p*h+o*s*d-n*l*d)*A,e[4]=_*A,e[5]=(u*g*r-y*p*r+y*s*d-t*g*d-u*s*m+t*p*m)*A,e[6]=(y*l*r-a*g*r-y*s*h+t*g*h+a*s*m-t*l*m)*A,e[7]=(a*p*r-u*l*r+u*s*h-t*p*h-a*s*d+t*l*d)*A,e[8]=E*A,e[9]=(y*f*r-u*v*r-y*n*d+t*v*d+u*n*m-t*f*m)*A,e[10]=(a*v*r-y*o*r+y*n*h-t*v*h-a*n*m+t*o*m)*A,e[11]=(u*o*r-a*f*r-u*n*h+t*f*h+a*n*d-t*o*d)*A,e[12]=I*A,e[13]=(u*v*s-y*f*s+y*n*p-t*v*p-u*n*g+t*f*g)*A,e[14]=(y*o*s-a*v*s-y*n*l+t*v*l+a*n*g-t*o*g)*A,e[15]=(a*f*s-u*o*s+u*n*l-t*f*l-a*n*p+t*o*p)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-s*l,h*l+s*o,0,h*o+s*l,u*o+n,u*l-s*a,0,h*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,h=r+r,u=a+a,f=o+o,p=r*h,d=r*u,y=r*f,v=a*u,g=a*f,m=o*f,M=l*h,_=l*u,E=l*f,I=n.x,P=n.y,A=n.z;return s[0]=(1-(v+m))*I,s[1]=(d+E)*I,s[2]=(y-_)*I,s[3]=0,s[4]=(d-E)*P,s[5]=(1-(p+m))*P,s[6]=(g+M)*P,s[7]=0,s[8]=(y+_)*A,s[9]=(g-M)*A,s[10]=(1-(p+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Bs.set(s[0],s[1],s[2]).length(),a=Bs.set(s[4],s[5],s[6]).length(),o=Bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ui.copy(this);let h=1/r,u=1/a,f=1/o;return ui.elements[0]*=h,ui.elements[1]*=h,ui.elements[2]*=h,ui.elements[4]*=u,ui.elements[5]*=u,ui.elements[6]*=u,ui.elements[8]*=f,ui.elements[9]*=f,ui.elements[10]*=f,t.setFromRotationMatrix(ui),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Ui){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),d,y;if(o===Ui)d=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===eo)d=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Ui){let l=this.elements,h=1/(t-e),u=1/(n-s),f=1/(a-r),p=(t+e)*h,d=(n+s)*u,y,v;if(o===Ui)y=(a+r)*f,v=-2*f;else if(o===eo)y=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bs=new V,ui=new Nt,Uf=new V(0,0,0),zf=new V(1,1,1),Yi=new V,ba=new V,Jn=new V,zh=new Nt,Nh=new Gn,is=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],h=s[5],u=s[9],f=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Un(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Un(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};is.DEFAULT_ORDER="XYZ";var oo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Nf=0,Oh=new V,Hs=new Gn,Ri=new Nt,wa=new V,Dr=new V,Of=new V,kf=new Gn,kh=new V(1,0,0),Fh=new V(0,1,0),Bh=new V(0,0,1),Ff={type:"added"},Bf={type:"removed"},un=class i extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new V,t=new is,n=new Gn,s=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new St}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(kh,e)}rotateY(e){return this.rotateOnAxis(Fh,e)}rotateZ(e){return this.rotateOnAxis(Bh,e)}translateOnAxis(e,t){return Oh.copy(e).applyQuaternion(this.quaternion),this.position.add(Oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kh,e)}translateY(e){return this.translateOnAxis(Fh,e)}translateZ(e){return this.translateOnAxis(Bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Dr,wa,this.up):Ri.lookAt(wa,Dr,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(Ri),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ff)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bf)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,Of),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let f=l[h];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),h=a(e.textures),u=a(e.images),f=a(e.shapes),p=a(e.skeletons),d=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};un.DEFAULT_UP=new V(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var di=new V,Ci=new V,gl=new V,Pi=new V,Gs=new V,Vs=new V,Hh=new V,xl=new V,yl=new V,vl=new V,Sa=!1,ws=class i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),di.subVectors(e,t),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){di.subVectors(s,t),Ci.subVectors(n,t),gl.subVectors(e,t);let a=di.dot(di),o=di.dot(Ci),l=di.dot(gl),h=Ci.dot(Ci),u=Ci.dot(gl),f=a*h-o*o;if(f===0)return r.set(0,0,0),null;let p=1/f,d=(h*l-o*u)*p,y=(a*u-o*l)*p;return r.set(1-d-y,y,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getUV(e,t,n,s,r,a,o,l){return Sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sa=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static isFrontFacing(e,t,n,s){return di.subVectors(n,t),Ci.subVectors(e,t),di.cross(Ci).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),di.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Sa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Sa=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Gs.subVectors(s,n),Vs.subVectors(r,n),xl.subVectors(e,n);let l=Gs.dot(xl),h=Vs.dot(xl);if(l<=0&&h<=0)return t.copy(n);yl.subVectors(e,s);let u=Gs.dot(yl),f=Vs.dot(yl);if(u>=0&&f<=u)return t.copy(s);let p=l*f-u*h;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Gs,a);vl.subVectors(e,r);let d=Gs.dot(vl),y=Vs.dot(vl);if(y>=0&&d<=y)return t.copy(r);let v=d*h-l*y;if(v<=0&&h>=0&&y<=0)return o=h/(h-y),t.copy(n).addScaledVector(Vs,o);let g=u*y-d*f;if(g<=0&&f-u>=0&&d-y>=0)return Hh.subVectors(r,s),o=(f-u)/(f-u+(d-y)),t.copy(s).addScaledVector(Hh,o);let m=1/(g+v+p);return a=v*m,o=p*m,t.copy(n).addScaledVector(Gs,a).addScaledVector(Vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function _l(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var st=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ht.workingColorSpace){if(e=Rf(e,1),t=Un(t,0,1),n=Un(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=_l(a,r,e+1/3),this.g=_l(a,r,e),this.b=_l(a,r,e-1/3)}return Ht.toWorkingColorSpace(this,s),this}setStyle(e,t=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=tn){let n=Bu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=ll(e.r),this.g=ll(e.g),this.b=ll(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=tn){return Ht.fromWorkingColorSpace(Dn.copy(this),e),Math.round(Un(Dn.r*255,0,255))*65536+Math.round(Un(Dn.g*255,0,255))*256+Math.round(Un(Dn.b*255,0,255))}getHexString(e=tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ht.workingColorSpace){Ht.fromWorkingColorSpace(Dn.copy(this),t);let n=Dn.r,s=Dn.g,r=Dn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,h,u=(o+a)/2;if(o===a)l=0,h=0;else{let f=a-o;switch(h=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=h,e.l=u,e}getRGB(e,t=Ht.workingColorSpace){return Ht.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=tn){Ht.fromWorkingColorSpace(Dn.copy(this),e);let t=Dn.r,n=Dn.g,s=Dn.b;return e!==tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(Ea);let n=al(Zi.h,Ea.h,t),s=al(Zi.s,Ea.s,t),r=al(Zi.l,Ea.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new st;st.NAMES=Bu;var Hf=0,ri=class extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=$i,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Nl,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==es&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zl&&(n.blendSrc=this.blendSrc),this.blendDst!==Nl&&(n.blendDst=this.blendDst),this.blendEquation!==Ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Za&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ot=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var pn=new V,Ta=new Re,gn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bl&&(e.usage=this.usage),e}};var lo=class extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var co=class extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gt=class extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Gf=0,ni=new Nt,Ml=new un,Ws=new V,Kn=new Oi,Ur=new Oi,An=new V,Xt=class i extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fu(e)?co:lo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new St().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return Ml.lookAt(e),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new gt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ur.setFromBufferAttribute(o),this.morphTargetsRelative?(An.addVectors(Kn.min,Ur.min),Kn.expandByPoint(An),An.addVectors(Kn.max,Ur.max),Kn.expandByPoint(An)):(Kn.expandByPoint(Ur.min),Kn.expandByPoint(Ur.max))}Kn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)An.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(An));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)An.fromBufferAttribute(o,h),l&&(Ws.fromBufferAttribute(e,h),An.add(Ws)),s=Math.max(s,n.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,h=[],u=[];for(let x=0;x<o;x++)h[x]=new V,u[x]=new V;let f=new V,p=new V,d=new V,y=new Re,v=new Re,g=new Re,m=new V,M=new V;function _(x,k,O){f.fromArray(s,x*3),p.fromArray(s,k*3),d.fromArray(s,O*3),y.fromArray(a,x*2),v.fromArray(a,k*2),g.fromArray(a,O*2),p.sub(f),d.sub(f),v.sub(y),g.sub(y);let j=1/(v.x*g.y-g.x*v.y);isFinite(j)&&(m.copy(p).multiplyScalar(g.y).addScaledVector(d,-v.y).multiplyScalar(j),M.copy(d).multiplyScalar(v.x).addScaledVector(p,-g.x).multiplyScalar(j),h[x].add(m),h[k].add(m),h[O].add(m),u[x].add(M),u[k].add(M),u[O].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let x=0,k=E.length;x<k;++x){let O=E[x],j=O.start,N=O.count;for(let b=j,X=j+N;b<X;b+=3)_(n[b+0],n[b+1],n[b+2])}let I=new V,P=new V,A=new V,F=new V;function T(x){A.fromArray(r,x*3),F.copy(A);let k=h[x];I.copy(k),I.sub(A.multiplyScalar(A.dot(k))).normalize(),P.crossVectors(F,k);let j=P.dot(u[x])<0?-1:1;l[x*4]=I.x,l[x*4+1]=I.y,l[x*4+2]=I.z,l[x*4+3]=j}for(let x=0,k=E.length;x<k;++x){let O=E[x],j=O.start,N=O.count;for(let b=j,X=j+N;b<X;b+=3)T(n[b+0]),T(n[b+1]),T(n[b+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let s=new V,r=new V,a=new V,o=new V,l=new V,h=new V,u=new V,f=new V;if(e)for(let p=0,d=e.count;p<d;p+=3){let y=e.getX(p+0),v=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),o.add(u),l.add(u),h.add(u),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(o,l){let h=o.array,u=o.itemSize,f=o.normalized,p=new h.constructor(l.length*u),d=0,y=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let m=0;m<u;m++)p[y++]=h[d++]}return new gn(p,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],h=e(l,n);t.setAttribute(o,h)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let u=0,f=h.length;u<f;u++){let p=h[u],d=e(p,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let h=n[l];e.data.attributes[l]=h.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let f=0,p=h.length;f<p;f++){let d=h[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(t))}let r=e.morphAttributes;for(let h in r){let u=[],f=r[h];for(let p=0,d=f.length;p<d;p++)u.push(f[p].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,u=a.length;h<u;h++){let f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gh=new Nt,ys=new ao,Aa=new ns,Vh=new V,Xs=new V,qs=new V,Ys=new V,bl=new V,Ra=new V,Ca=new Re,Pa=new Re,Ia=new Re,Wh=new V,Xh=new V,qh=new V,La=new V,Da=new V,ze=class extends un{constructor(e=new Xt,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ra.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=o[l],f=r[l];u!==0&&(bl.fromBufferAttribute(f,e),a?Ra.addScaledVector(bl,u):Ra.addScaledVector(bl.sub(t),u))}t.add(Ra)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(r),ys.copy(e.ray).recast(e.near),!(Aa.containsPoint(ys.origin)===!1&&(ys.intersectSphere(Aa,Vh)===null||ys.origin.distanceToSquared(Vh)>(e.far-e.near)**2))&&(Gh.copy(r).invert(),ys.copy(e.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&ys.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,p=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,v=p.length;y<v;y++){let g=p[y],m=a[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let E=M,I=_;E<I;E+=3){let P=o.getX(E),A=o.getX(E+1),F=o.getX(E+2);s=Ua(this,m,e,n,h,u,f,P,A,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=y,m=v;g<m;g+=3){let M=o.getX(g),_=o.getX(g+1),E=o.getX(g+2);s=Ua(this,a,e,n,h,u,f,M,_,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,v=p.length;y<v;y++){let g=p[y],m=a[g.materialIndex],M=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let E=M,I=_;E<I;E+=3){let P=E,A=E+1,F=E+2;s=Ua(this,m,e,n,h,u,f,P,A,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=y,m=v;g<m;g+=3){let M=g,_=g+1,E=g+2;s=Ua(this,a,e,n,h,u,f,M,_,E),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Vf(i,e,t,n,s,r,a,o){let l;if(e.side===mn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===es,o),l===null)return null;Da.copy(o),Da.applyMatrix4(i.matrixWorld);let h=t.ray.origin.distanceTo(Da);return h<t.near||h>t.far?null:{distance:h,point:Da.clone(),object:i}}function Ua(i,e,t,n,s,r,a,o,l,h){i.getVertexPosition(o,Xs),i.getVertexPosition(l,qs),i.getVertexPosition(h,Ys);let u=Vf(i,e,t,n,Xs,qs,Ys,La);if(u){s&&(Ca.fromBufferAttribute(s,o),Pa.fromBufferAttribute(s,l),Ia.fromBufferAttribute(s,h),u.uv=ws.getInterpolation(La,Xs,qs,Ys,Ca,Pa,Ia,new Re)),r&&(Ca.fromBufferAttribute(r,o),Pa.fromBufferAttribute(r,l),Ia.fromBufferAttribute(r,h),u.uv1=ws.getInterpolation(La,Xs,qs,Ys,Ca,Pa,Ia,new Re),u.uv2=u.uv1),a&&(Wh.fromBufferAttribute(a,o),Xh.fromBufferAttribute(a,l),qh.fromBufferAttribute(a,h),u.normal=ws.getInterpolation(La,Xs,qs,Ys,Wh,Xh,qh,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c:h,normal:new V,materialIndex:0};ws.getNormal(Xs,qs,Ys,f.normal),u.face=f}return u}var Vn=class i extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],u=[],f=[],p=0,d=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(h,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function y(v,g,m,M,_,E,I,P,A,F,T){let x=E/A,k=I/F,O=E/2,j=I/2,N=P/2,b=A+1,X=F+1,ne=0,D=0,$=new V;for(let we=0;we<X;we++){let de=we*k-j;for(let Le=0;Le<b;Le++){let ce=Le*x-O;$[v]=ce*M,$[g]=de*_,$[m]=N,h.push($.x,$.y,$.z),$[v]=0,$[g]=0,$[m]=P>0?1:-1,u.push($.x,$.y,$.z),f.push(Le/A),f.push(1-we/F),ne+=1}}for(let we=0;we<F;we++)for(let de=0;de<A;de++){let Le=p+de+b*we,ce=p+de+b*(we+1),ve=p+(de+1)+b*(we+1),Ae=p+(de+1)+b*we;l.push(Le,ce,Ae),l.push(ce,ve,Ae),D+=6}o.addGroup(d,D,T),d+=D,p+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function hr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function kn(i){let e={};for(let t=0;t<i.length;t++){let n=hr(i[t]);for(let s in n)e[s]=n[s]}return e}function Wf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hu(i){return i.getRenderTarget()===null?i.outputColorSpace:Ht.workingColorSpace}var cs={clone:hr,merge:kn},Xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xf,this.fragmentShader=qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=Wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ho=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wn=class extends ho{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=to*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return to*2*Math.atan(Math.tan(rl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/h,s*=a.width/l,n*=a.height/h}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Zs=-90,Js=1,Xl=class extends un{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new wn(Zs,Js,e,t);s.layers=this.layers,this.add(s);let r=new wn(Zs,Js,e,t);r.layers=this.layers,this.add(r);let a=new wn(Zs,Js,e,t);a.layers=this.layers,this.add(a);let o=new wn(Zs,Js,e,t);o.layers=this.layers,this.add(o);let l=new wn(Zs,Js,e,t);l.layers=this.layers,this.add(l);let h=new wn(Zs,Js,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let h of t)this.remove(h);if(e===Ui)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,u]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,h),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(f,p,d),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},uo=class extends jn{constructor(e,t,n,s,r,a,o,l,h,u){e=e!==void 0?e:[],t=t!==void 0?t:or,super(e,t,n,s,r,a,o,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ql=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Hr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ts?tn:si),this.texture=new uo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ii}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vn(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:bi});r.uniforms.tEquirect.value=t;let a=new ze(s,r),o=t.minFilter;return t.minFilter===qr&&(t.minFilter=ii),new Xl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},wl=new V,Yf=new V,Zf=new St,Li=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=wl.subVectors(n,t).cross(Yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(wl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zf.getNormalMatrix(e),s=this.coplanarPoint(wl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vs=new ns,za=new V,Yr=class{constructor(e=new Li,t=new Li,n=new Li,s=new Li,r=new Li,a=new Li){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ui){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],h=s[4],u=s[5],f=s[6],p=s[7],d=s[8],y=s[9],v=s[10],g=s[11],m=s[12],M=s[13],_=s[14],E=s[15];if(n[0].setComponents(l-r,p-h,g-d,E-m).normalize(),n[1].setComponents(l+r,p+h,g+d,E+m).normalize(),n[2].setComponents(l+a,p+u,g+y,E+M).normalize(),n[3].setComponents(l-a,p-u,g-y,E-M).normalize(),n[4].setComponents(l-o,p-f,g-v,E-_).normalize(),t===Ui)n[5].setComponents(l+o,p+f,g+v,E+_).normalize();else if(t===eo)n[5].setComponents(o,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(za.x=s.normal.x>0?e.max.x:e.min.x,za.y=s.normal.y>0?e.max.y:e.min.y,za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Jf(i,e){let t=e.isWebGL2,n=new WeakMap;function s(h,u){let f=h.array,p=h.usage,d=f.byteLength,y=i.createBuffer();i.bindBuffer(u,y),i.bufferData(u,f,p),h.onUploadCallback();let v;if(f instanceof Float32Array)v=i.FLOAT;else if(f instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=i.SHORT;else if(f instanceof Uint32Array)v=i.UNSIGNED_INT;else if(f instanceof Int32Array)v=i.INT;else if(f instanceof Int8Array)v=i.BYTE;else if(f instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:y,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:d}}function r(h,u,f){let p=u.array,d=u._updateRange,y=u.updateRanges;if(i.bindBuffer(f,h),d.count===-1&&y.length===0&&i.bufferSubData(f,0,p),y.length!==0){for(let v=0,g=y.length;v<g;v++){let m=y[v];t?i.bufferSubData(f,m.start*p.BYTES_PER_ELEMENT,p,m.start,m.count):i.bufferSubData(f,m.start*p.BYTES_PER_ELEMENT,p.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(f,d.offset*p.BYTES_PER_ELEMENT,p,d.offset,d.count):i.bufferSubData(f,d.offset*p.BYTES_PER_ELEMENT,p.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);let u=n.get(h);u&&(i.deleteBuffer(u.buffer),n.delete(h))}function l(h,u){if(h.isGLBufferAttribute){let p=n.get(h);(!p||p.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let f=n.get(h);if(f===void 0)n.set(h,s(h,u));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,h,u),f.version=h.version}}return{get:a,remove:o,update:l}}var ss=class i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),h=o+1,u=l+1,f=e/o,p=t/l,d=[],y=[],v=[],g=[];for(let m=0;m<u;m++){let M=m*p-a;for(let _=0;_<h;_++){let E=_*f-r;y.push(E,-M,0),v.push(0,0,1),g.push(_/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let _=M+h*m,E=M+h*(m+1),I=M+1+h*(m+1),P=M+1+h*m;d.push(_,E,P),d.push(E,I,P)}this.setIndex(d),this.setAttribute("position",new gt(y,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$f=`#ifdef USE_ALPHAHASH
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
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,t0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n0=`#ifdef USE_AOMAP
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
#endif`,i0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s0=`#ifdef USE_BATCHING
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
#endif`,r0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,a0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c0=`#ifdef USE_IRIDESCENCE
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
#endif`,h0=`#ifdef USE_BUMPMAP
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
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,v0=`#define PI 3.141592653589793
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
} // validated`,_0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M0=`vec3 transformedNormal = objectNormal;
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
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T0="gl_FragColor = linearToOutputTexel( gl_FragColor );",A0=`
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
}`,R0=`#ifdef USE_ENVMAP
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
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O0=`#ifdef USE_GRADIENTMAP
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
}`,k0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,F0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,G0=`uniform bool receiveShadow;
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
#endif`,V0=`#ifdef USE_ENVMAP
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
#endif`,W0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z0=`PhysicalMaterial material;
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
#endif`,J0=`struct PhysicalMaterial {
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
}`,K0=`
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
#endif`,$0=`#if defined( RE_IndirectDiffuse )
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
#endif`,j0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Q0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ap=`#if defined( USE_POINTS_UV )
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
#endif`,op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
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
#endif`,up=`#ifdef USE_MORPHTARGETS
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
#endif`,dp=`#ifdef USE_MORPHTARGETS
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
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yp=`#ifdef USE_NORMALMAP
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
#endif`,vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_p=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ep=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Up=`float getShadowMask() {
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
}`,zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kp=`uniform sampler2D t2D;
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`#include <common>
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
}`,nm=`#if DEPTH_PACKING == 3200
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
}`,im=`#define DISTANCE
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
}`,sm=`#define DISTANCE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`uniform float scale;
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,hm=`uniform vec3 diffuse;
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
}`,um=`#define LAMBERT
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
}`,dm=`#define LAMBERT
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
}`,fm=`#define MATCAP
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
}`,pm=`#define MATCAP
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
}`,mm=`#define NORMAL
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
}`,gm=`#define NORMAL
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
}`,xm=`#define PHONG
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
}`,ym=`#define PHONG
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
}`,vm=`#define STANDARD
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
}`,_m=`#define STANDARD
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
}`,Mm=`#define TOON
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
}`,bm=`#define TOON
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
}`,wm=`uniform float size;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Tm=`uniform vec3 color;
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
}`,Am=`uniform float rotation;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:Kf,alphahash_pars_fragment:$f,alphamap_fragment:jf,alphamap_pars_fragment:Qf,alphatest_fragment:e0,alphatest_pars_fragment:t0,aomap_fragment:n0,aomap_pars_fragment:i0,batching_pars_vertex:s0,batching_vertex:r0,begin_vertex:a0,beginnormal_vertex:o0,bsdfs:l0,iridescence_fragment:c0,bumpmap_pars_fragment:h0,clipping_planes_fragment:u0,clipping_planes_pars_fragment:d0,clipping_planes_pars_vertex:f0,clipping_planes_vertex:p0,color_fragment:m0,color_pars_fragment:g0,color_pars_vertex:x0,color_vertex:y0,common:v0,cube_uv_reflection_fragment:_0,defaultnormal_vertex:M0,displacementmap_pars_vertex:b0,displacementmap_vertex:w0,emissivemap_fragment:S0,emissivemap_pars_fragment:E0,colorspace_fragment:T0,colorspace_pars_fragment:A0,envmap_fragment:R0,envmap_common_pars_fragment:C0,envmap_pars_fragment:P0,envmap_pars_vertex:I0,envmap_physical_pars_fragment:V0,envmap_vertex:L0,fog_vertex:D0,fog_pars_vertex:U0,fog_fragment:z0,fog_pars_fragment:N0,gradientmap_pars_fragment:O0,lightmap_fragment:k0,lightmap_pars_fragment:F0,lights_lambert_fragment:B0,lights_lambert_pars_fragment:H0,lights_pars_begin:G0,lights_toon_fragment:W0,lights_toon_pars_fragment:X0,lights_phong_fragment:q0,lights_phong_pars_fragment:Y0,lights_physical_fragment:Z0,lights_physical_pars_fragment:J0,lights_fragment_begin:K0,lights_fragment_maps:$0,lights_fragment_end:j0,logdepthbuf_fragment:Q0,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:tp,logdepthbuf_vertex:np,map_fragment:ip,map_pars_fragment:sp,map_particle_fragment:rp,map_particle_pars_fragment:ap,metalnessmap_fragment:op,metalnessmap_pars_fragment:lp,morphcolor_vertex:cp,morphnormal_vertex:hp,morphtarget_pars_vertex:up,morphtarget_vertex:dp,normal_fragment_begin:fp,normal_fragment_maps:pp,normal_pars_fragment:mp,normal_pars_vertex:gp,normal_vertex:xp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:vp,clearcoat_normal_fragment_maps:_p,clearcoat_pars_fragment:Mp,iridescence_pars_fragment:bp,opaque_fragment:wp,packing:Sp,premultiplied_alpha_fragment:Ep,project_vertex:Tp,dithering_fragment:Ap,dithering_pars_fragment:Rp,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Ip,shadowmap_pars_vertex:Lp,shadowmap_vertex:Dp,shadowmask_pars_fragment:Up,skinbase_vertex:zp,skinning_pars_vertex:Np,skinning_vertex:Op,skinnormal_vertex:kp,specularmap_fragment:Fp,specularmap_pars_fragment:Bp,tonemapping_fragment:Hp,tonemapping_pars_fragment:Gp,transmission_fragment:Vp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:qp,uv_vertex:Yp,worldpos_vertex:Zp,background_vert:Jp,background_frag:Kp,backgroundCube_vert:$p,backgroundCube_frag:jp,cube_vert:Qp,cube_frag:em,depth_vert:tm,depth_frag:nm,distanceRGBA_vert:im,distanceRGBA_frag:sm,equirect_vert:rm,equirect_frag:am,linedashed_vert:om,linedashed_frag:lm,meshbasic_vert:cm,meshbasic_frag:hm,meshlambert_vert:um,meshlambert_frag:dm,meshmatcap_vert:fm,meshmatcap_frag:pm,meshnormal_vert:mm,meshnormal_frag:gm,meshphong_vert:xm,meshphong_frag:ym,meshphysical_vert:vm,meshphysical_frag:_m,meshtoon_vert:Mm,meshtoon_frag:bm,points_vert:wm,points_frag:Sm,shadow_vert:Em,shadow_frag:Tm,sprite_vert:Am,sprite_frag:Rm},Ve={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},Mi={basic:{uniforms:kn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:kn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new st(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:kn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:kn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:kn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new st(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:kn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:kn([Ve.points,Ve.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:kn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:kn([Ve.common,Ve.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:kn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:kn([Ve.sprite,Ve.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:kn([Ve.common,Ve.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:kn([Ve.lights,Ve.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Mi.physical={uniforms:kn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};var Na={r:0,b:0,g:0};function Cm(i,e,t,n,s,r,a){let o=new st(0),l=r===!0?0:1,h,u,f=null,p=0,d=null;function y(g,m){let M=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),M=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Io)?(u===void 0&&(u=new ze(new Vn(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:hr(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,P,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=Ht.getTransfer(_.colorSpace)!==Yt,(f!==_||p!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=_,p=_.version,d=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new ze(new ss(2,2),new xn({name:"BackgroundMaterial",uniforms:hr(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=Ht.getTransfer(_.colorSpace)!==Yt,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=_,p=_.version,d=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null))}function v(g,m){g.getRGB(Na,Hu(i)),n.buffers.color.setClear(Na.r,Na.g,Na.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),l=m,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(o,l)},render:y}}function Pm(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=g(null),h=l,u=!1;function f(N,b,X,ne,D){let $=!1;if(a){let we=v(ne,X,b);h!==we&&(h=we,d(h.object)),$=m(N,ne,X,D),$&&M(N,ne,X,D)}else{let we=b.wireframe===!0;(h.geometry!==ne.id||h.program!==X.id||h.wireframe!==we)&&(h.geometry=ne.id,h.program=X.id,h.wireframe=we,$=!0)}D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,F(N,b,X,ne),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(N){return n.isWebGL2?i.bindVertexArray(N):r.bindVertexArrayOES(N)}function y(N){return n.isWebGL2?i.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function v(N,b,X){let ne=X.wireframe===!0,D=o[N.id];D===void 0&&(D={},o[N.id]=D);let $=D[b.id];$===void 0&&($={},D[b.id]=$);let we=$[ne];return we===void 0&&(we=g(p()),$[ne]=we),we}function g(N){let b=[],X=[],ne=[];for(let D=0;D<s;D++)b[D]=0,X[D]=0,ne[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:X,attributeDivisors:ne,object:N,attributes:{},index:null}}function m(N,b,X,ne){let D=h.attributes,$=b.attributes,we=0,de=X.getAttributes();for(let Le in de)if(de[Le].location>=0){let ve=D[Le],Ae=$[Le];if(Ae===void 0&&(Le==="instanceMatrix"&&N.instanceMatrix&&(Ae=N.instanceMatrix),Le==="instanceColor"&&N.instanceColor&&(Ae=N.instanceColor)),ve===void 0||ve.attribute!==Ae||Ae&&ve.data!==Ae.data)return!0;we++}return h.attributesNum!==we||h.index!==ne}function M(N,b,X,ne){let D={},$=b.attributes,we=0,de=X.getAttributes();for(let Le in de)if(de[Le].location>=0){let ve=$[Le];ve===void 0&&(Le==="instanceMatrix"&&N.instanceMatrix&&(ve=N.instanceMatrix),Le==="instanceColor"&&N.instanceColor&&(ve=N.instanceColor));let Ae={};Ae.attribute=ve,ve&&ve.data&&(Ae.data=ve.data),D[Le]=Ae,we++}h.attributes=D,h.attributesNum=we,h.index=ne}function _(){let N=h.newAttributes;for(let b=0,X=N.length;b<X;b++)N[b]=0}function E(N){I(N,0)}function I(N,b){let X=h.newAttributes,ne=h.enabledAttributes,D=h.attributeDivisors;X[N]=1,ne[N]===0&&(i.enableVertexAttribArray(N),ne[N]=1),D[N]!==b&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,b),D[N]=b)}function P(){let N=h.newAttributes,b=h.enabledAttributes;for(let X=0,ne=b.length;X<ne;X++)b[X]!==N[X]&&(i.disableVertexAttribArray(X),b[X]=0)}function A(N,b,X,ne,D,$,we){we===!0?i.vertexAttribIPointer(N,b,X,D,$):i.vertexAttribPointer(N,b,X,ne,D,$)}function F(N,b,X,ne){if(n.isWebGL2===!1&&(N.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let D=ne.attributes,$=X.getAttributes(),we=b.defaultAttributeValues;for(let de in $){let Le=$[de];if(Le.location>=0){let ce=D[de];if(ce===void 0&&(de==="instanceMatrix"&&N.instanceMatrix&&(ce=N.instanceMatrix),de==="instanceColor"&&N.instanceColor&&(ce=N.instanceColor)),ce!==void 0){let ve=ce.normalized,Ae=ce.itemSize,Ke=t.get(ce);if(Ke===void 0)continue;let Be=Ke.buffer,it=Ke.type,Oe=Ke.bytesPerElement,We=n.isWebGL2===!0&&(it===i.INT||it===i.UNSIGNED_INT||ce.gpuType===Pu);if(ce.isInterleavedBufferAttribute){let nt=ce.data,H=nt.stride,Te=ce.offset;if(nt.isInstancedInterleavedBuffer){for(let me=0;me<Le.locationSize;me++)I(Le.location+me,nt.meshPerAttribute);N.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let me=0;me<Le.locationSize;me++)E(Le.location+me);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let me=0;me<Le.locationSize;me++)A(Le.location+me,Ae/Le.locationSize,it,ve,H*Oe,(Te+Ae/Le.locationSize*me)*Oe,We)}else{if(ce.isInstancedBufferAttribute){for(let nt=0;nt<Le.locationSize;nt++)I(Le.location+nt,ce.meshPerAttribute);N.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let nt=0;nt<Le.locationSize;nt++)E(Le.location+nt);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let nt=0;nt<Le.locationSize;nt++)A(Le.location+nt,Ae/Le.locationSize,it,ve,Ae*Oe,Ae/Le.locationSize*nt*Oe,We)}}else if(we!==void 0){let ve=we[de];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(Le.location,ve);break;case 3:i.vertexAttrib3fv(Le.location,ve);break;case 4:i.vertexAttrib4fv(Le.location,ve);break;default:i.vertexAttrib1fv(Le.location,ve)}}}}P()}function T(){O();for(let N in o){let b=o[N];for(let X in b){let ne=b[X];for(let D in ne)y(ne[D].object),delete ne[D];delete b[X]}delete o[N]}}function x(N){if(o[N.id]===void 0)return;let b=o[N.id];for(let X in b){let ne=b[X];for(let D in ne)y(ne[D].object),delete ne[D];delete b[X]}delete o[N.id]}function k(N){for(let b in o){let X=o[b];if(X[N.id]===void 0)continue;let ne=X[N.id];for(let D in ne)y(ne[D].object),delete ne[D];delete X[N.id]}}function O(){j(),u=!0,h!==l&&(h=l,d(h.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:O,resetDefaultState:j,dispose:T,releaseStatesOfGeometry:x,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:E,disableUnusedAttributes:P}}function Im(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}function o(u,f){i.drawArrays(r,u,f),t.update(f,r,1)}function l(u,f,p){if(p===0)return;let d,y;if(s)d=i,y="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[y](r,u,f,p),t.update(f,r,p)}function h(u,f,p){if(p===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let y=0;y<p;y++)this.render(u[y],f[y]);else{d.multiDrawArraysWEBGL(r,u,0,f,0,p);let y=0;for(let v=0;v<p;v++)y+=f[v];t.update(y,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=h}function Lm(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let h=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,E=a||e.has("OES_texture_float"),I=_&&E,P=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:d,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:I,maxSamples:P}}function Dm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Li,o=new St,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let d=f.length!==0||p||n!==0||s;return s=p,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=u(f,p,0)},this.setState=function(f,p,d){let y=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,m=i.get(f);if(!s||y===null||y.length===0||r&&!g)r?u(null):h();else{let M=r?0:n,_=M*4,E=m.clippingState||null;l.value=E,E=u(y,p,_,d);for(let I=0;I!==_;++I)E[I]=t[I];m.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function h(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,p,d,y){let v=f!==null?f.length:0,g=null;if(v!==0){if(g=l.value,y!==!0||g===null){let m=d+v*4,M=p.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,E=d;_!==v;++_,E+=4)a.copy(f[_]).applyMatrix4(M,o),a.normal.toArray(g,E),g[E+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Um(i){let e=new WeakMap;function t(a,o){return o===Ol?a.mapping=or:o===kl&&(a.mapping=lr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ol||o===kl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let h=new ql(l.height/2);return h.fromEquirectangularTexture(i,a),e.set(a,h),a.addEventListener("dispose",s),t(h.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ur=class extends ho{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},nr=4,Yh=[.125,.215,.35,.446,.526,.582],bs=20,Sl=new ur,Zh=new st,El=null,Tl=0,Al=0,_s=(1+Math.sqrt(5))/2,Ks=1/_s,Jh=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,_s,Ks),new V(0,_s,-Ks),new V(Ks,0,_s),new V(-Ks,0,_s),new V(_s,Ks,0),new V(-_s,Ks,0)],rs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(El,Tl,Al),e.scissorTest=!1,Oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===or||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),El=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:pi,format:$n,colorSpace:Ni,depthBuffer:!1},s=Kh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zm(r)),this._blurMaterial=Nm(r,e,t)}return s}_compileMaterial(e){let t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,Sl)}_sceneToCubeUV(e,t,n,s){let o=new wn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Zh),u.toneMapping=wi,u.autoClear=!1;let d=new Ot({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),y=new ze(new Vn,d),v=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,v=!0):(d.color.copy(Zh),v=!0);for(let m=0;m<6;m++){let M=m%3;M===0?(o.up.set(0,l[m],0),o.lookAt(h[m],0,0)):M===1?(o.up.set(0,0,l[m]),o.lookAt(0,h[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,h[m]));let _=this._cubeSize;Oa(s,M*_,m>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(y,o),u.render(e,o)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===or||e.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$h());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ze(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Oa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Sl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Jh[(s-1)%Jh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new ze(this._lodPlanes[s],h),p=h.uniforms,d=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*bs-1),v=r/y,g=isFinite(r)?1+Math.floor(u*v):bs;g>bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${bs}`);let m=[],M=0;for(let A=0;A<bs;++A){let F=A/v,T=Math.exp(-F*F/2);m.push(T),A===0?M+=T:A<g&&(M+=2*T)}for(let A=0;A<m.length;A++)m[A]=m[A]/M;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=m,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:_}=this;p.dTheta.value=y,p.mipInt.value=_-n;let E=this._sizeLods[s],I=3*E*(s>_-nr?s-_+nr:0),P=4*(this._cubeSize-E);Oa(t,I,P,3*E,2*E),l.setRenderTarget(t),l.render(f,Sl)}};function zm(i){let e=[],t=[],n=[],s=i,r=i-nr+1+Yh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-nr?l=Yh[a-i+nr-1]:a===0&&(l=0),n.push(l);let h=1/(o-2),u=-h,f=1+h,p=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,y=6,v=3,g=2,m=1,M=new Float32Array(v*y*d),_=new Float32Array(g*y*d),E=new Float32Array(m*y*d);for(let P=0;P<d;P++){let A=P%3*2/3-1,F=P>2?0:-1,T=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];M.set(T,v*y*P),_.set(p,g*y*P);let x=[P,P,P,P,P,P];E.set(x,m*y*P)}let I=new Xt;I.setAttribute("position",new gn(M,v)),I.setAttribute("uv",new gn(_,g)),I.setAttribute("faceIndex",new gn(E,m)),e.push(I),s>nr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kh(i,e,t){let n=new Fn(i,e,t);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Nm(i,e,t){let n=new Float32Array(bs),s=new V(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function $h(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function jh(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Uc(){return`

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
	`}function Om(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,h=l===Ol||l===kl,u=l===or||l===lr;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new rs(i)),f=h?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{let f=o.image;if(h&&f&&f.height>0||u&&f&&s(f)){t===null&&(t=new rs(i));let p=h?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0,h=6;for(let u=0;u<h;u++)o[u]!==void 0&&l++;return l===h}function r(o){let l=o.target;l.removeEventListener("dispose",r);let h=e.get(l);h!==void 0&&(e.delete(l),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function km(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fm(i,e,t,n){let s={},r=new WeakMap;function a(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let y in p.attributes)e.remove(p.attributes[y]);for(let y in p.morphAttributes){let v=p.morphAttributes[y];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}p.removeEventListener("dispose",a),delete s[p.id];let d=r.get(p);d&&(e.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(f,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(f){let p=f.attributes;for(let y in p)e.update(p[y],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let y in d){let v=d[y];for(let g=0,m=v.length;g<m;g++)e.update(v[g],i.ARRAY_BUFFER)}}function h(f){let p=[],d=f.index,y=f.attributes.position,v=0;if(d!==null){let M=d.array;v=d.version;for(let _=0,E=M.length;_<E;_+=3){let I=M[_+0],P=M[_+1],A=M[_+2];p.push(I,P,P,A,A,I)}}else if(y!==void 0){let M=y.array;v=y.version;for(let _=0,E=M.length/3-1;_<E;_+=3){let I=_+0,P=_+1,A=_+2;p.push(I,P,P,A,A,I)}}else return;let g=new(Fu(p)?co:lo)(p,1);g.version=v;let m=r.get(f);m&&e.remove(m),r.set(f,g)}function u(f){let p=r.get(f);if(p){let d=f.index;d!==null&&p.version<d.version&&h(f)}else h(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Bm(i,e,t,n){let s=n.isWebGL2,r;function a(d){r=d}let o,l;function h(d){o=d.type,l=d.bytesPerElement}function u(d,y){i.drawElements(r,y,o,d*l),t.update(y,r,1)}function f(d,y,v){if(v===0)return;let g,m;if(s)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,y,o,d*l,v),t.update(y,r,v)}function p(d,y,v){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<v;m++)this.render(d[m]/l,y[m]);else{g.multiDrawElementsWEBGL(r,y,0,o,d,0,v);let m=0;for(let M=0;M<v;M++)m+=y[M];t.update(m,r,1)}}this.setMode=a,this.setIndex=h,this.render=u,this.renderInstances=f,this.renderMultiDraw=p}function Hm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Gm(i,e){return i[0]-e[0]}function Vm(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Wm(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new nn,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function l(h,u,f){let p=h.morphTargetInfluences;if(e.isWebGL2===!0){let d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=d!==void 0?d.length:0,v=r.get(u);if(v===void 0||v.count!==y){let N=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",N)};v!==void 0&&v.texture.dispose();let M=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],A=u.morphAttributes.color||[],F=0;M===!0&&(F=1),_===!0&&(F=2),E===!0&&(F=3);let T=u.attributes.position.count*F,x=1;T>e.maxTextureSize&&(x=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);let k=new Float32Array(T*x*4*y),O=new ro(k,T,x,y);O.type=Ki,O.needsUpdate=!0;let j=F*4;for(let b=0;b<y;b++){let X=I[b],ne=P[b],D=A[b],$=T*x*4*b;for(let we=0;we<X.count;we++){let de=we*j;M===!0&&(a.fromBufferAttribute(X,we),k[$+de+0]=a.x,k[$+de+1]=a.y,k[$+de+2]=a.z,k[$+de+3]=0),_===!0&&(a.fromBufferAttribute(ne,we),k[$+de+4]=a.x,k[$+de+5]=a.y,k[$+de+6]=a.z,k[$+de+7]=0),E===!0&&(a.fromBufferAttribute(D,we),k[$+de+8]=a.x,k[$+de+9]=a.y,k[$+de+10]=a.z,k[$+de+11]=D.itemSize===4?a.w:1)}}v={count:y,texture:O,size:new Re(T,x)},r.set(u,v),u.addEventListener("dispose",N)}let g=0;for(let M=0;M<p.length;M++)g+=p[M];let m=u.morphTargetsRelative?1:1-g;f.getUniforms().setValue(i,"morphTargetBaseInfluence",m),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let d=p===void 0?0:p.length,y=n[u.id];if(y===void 0||y.length!==d){y=[];for(let _=0;_<d;_++)y[_]=[_,0];n[u.id]=y}for(let _=0;_<d;_++){let E=y[_];E[0]=_,E[1]=p[_]}y.sort(Vm);for(let _=0;_<8;_++)_<d&&y[_][1]?(o[_][0]=y[_][0],o[_][1]=y[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Gm);let v=u.morphAttributes.position,g=u.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let E=o[_],I=E[0],P=E[1];I!==Number.MAX_SAFE_INTEGER&&P?(v&&u.getAttribute("morphTarget"+_)!==v[I]&&u.setAttribute("morphTarget"+_,v[I]),g&&u.getAttribute("morphNormal"+_)!==g[I]&&u.setAttribute("morphNormal"+_,g[I]),s[_]=P,m+=P):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),g&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}let M=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Xm(i,e,t,n){let s=new WeakMap;function r(l){let h=n.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function a(){s=new WeakMap}function o(l){let h=l.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}var fo=class extends jn{constructor(e,t,n,s,r,a,o,l,h,u){if(u=u!==void 0?u:Es,u!==Es&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Es&&(n=Ji),n===void 0&&u===cr&&(n=Ss),super(null,s,r,a,o,l,u,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Vu=new jn,Wu=new fo(1,1);Wu.compareFunction=ku;var Xu=new ro,qu=new Wl,Yu=new uo,Qh=[],eu=[],tu=new Float32Array(16),nu=new Float32Array(9),iu=new Float32Array(4);function gr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Qh[s];if(r===void 0&&(r=new Float32Array(s),Qh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function En(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Uo(i,e){let t=eu[e];t===void 0&&(t=new Int32Array(e),eu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function qm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2fv(this.addr,e),En(t,e)}}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;i.uniform3fv(this.addr,e),En(t,e)}}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4fv(this.addr,e),En(t,e)}}function Km(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),En(t,e)}else{if(Sn(t,n))return;iu.set(n),i.uniformMatrix2fv(this.addr,!1,iu),En(t,n)}}function $m(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),En(t,e)}else{if(Sn(t,n))return;nu.set(n),i.uniformMatrix3fv(this.addr,!1,nu),En(t,n)}}function jm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),En(t,e)}else{if(Sn(t,n))return;tu.set(n),i.uniformMatrix4fv(this.addr,!1,tu),En(t,n)}}function Qm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2iv(this.addr,e),En(t,e)}}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;i.uniform3iv(this.addr,e),En(t,e)}}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4iv(this.addr,e),En(t,e)}}function ig(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function sg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2uiv(this.addr,e),En(t,e)}}function rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;i.uniform3uiv(this.addr,e),En(t,e)}}function ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4uiv(this.addr,e),En(t,e)}}function og(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Wu:Vu;t.setTexture2D(e||r,s)}function lg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qu,s)}function cg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Yu,s)}function hg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Xu,s)}function ug(i){switch(i){case 5126:return qm;case 35664:return Ym;case 35665:return Zm;case 35666:return Jm;case 35674:return Km;case 35675:return $m;case 35676:return jm;case 5124:case 35670:return Qm;case 35667:case 35671:return eg;case 35668:case 35672:return tg;case 35669:case 35673:return ng;case 5125:return ig;case 36294:return sg;case 36295:return rg;case 36296:return ag;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return lg;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return hg}}function dg(i,e){i.uniform1fv(this.addr,e)}function fg(i,e){let t=gr(e,this.size,2);i.uniform2fv(this.addr,t)}function pg(i,e){let t=gr(e,this.size,3);i.uniform3fv(this.addr,t)}function mg(i,e){let t=gr(e,this.size,4);i.uniform4fv(this.addr,t)}function gg(i,e){let t=gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xg(i,e){let t=gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function yg(i,e){let t=gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vg(i,e){i.uniform1iv(this.addr,e)}function _g(i,e){i.uniform2iv(this.addr,e)}function Mg(i,e){i.uniform3iv(this.addr,e)}function bg(i,e){i.uniform4iv(this.addr,e)}function wg(i,e){i.uniform1uiv(this.addr,e)}function Sg(i,e){i.uniform2uiv(this.addr,e)}function Eg(i,e){i.uniform3uiv(this.addr,e)}function Tg(i,e){i.uniform4uiv(this.addr,e)}function Ag(i,e,t){let n=this.cache,s=e.length,r=Uo(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),En(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Vu,r[a])}function Rg(i,e,t){let n=this.cache,s=e.length,r=Uo(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),En(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||qu,r[a])}function Cg(i,e,t){let n=this.cache,s=e.length,r=Uo(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),En(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Yu,r[a])}function Pg(i,e,t){let n=this.cache,s=e.length,r=Uo(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),En(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Xu,r[a])}function Ig(i){switch(i){case 5126:return dg;case 35664:return fg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return xg;case 35676:return yg;case 5124:case 35670:return vg;case 35667:case 35671:return _g;case 35668:case 35672:return Mg;case 35669:case 35673:return bg;case 5125:return wg;case 36294:return Sg;case 36295:return Eg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}var Yl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ug(t.type)}},Zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ig(t.type)}},Jl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Rl=/(\w+)(\])?(\[|\.)?/g;function su(i,e){i.seq.push(e),i.map[e.id]=e}function Lg(i,e,t){let n=i.name,s=n.length;for(Rl.lastIndex=0;;){let r=Rl.exec(n),a=Rl.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===s){su(t,h===void 0?new Yl(o,i,e):new Zl(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Jl(o),su(t,f)),t=f}}}var ar=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Lg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ru(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Dg=37297,Ug=0;function zg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Ng(i){let e=Ht.getPrimaries(Ht.workingColorSpace),t=Ht.getPrimaries(i),n;switch(e===t?n="":e===Qa&&t===ja?n="LinearDisplayP3ToLinearSRGB":e===ja&&t===Qa&&(n="LinearSRGBToLinearDisplayP3"),i){case Ni:case Do:return[n,"LinearTransferOETF"];case tn:case Dc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function au(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+zg(i.getShaderSource(e),a)}else return s}function Og(i,e){let t=Ng(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kg(i,e){let t;switch(e){case Rc:t="Linear";break;case Cc:t="Reinhard";break;case Pc:t="OptimizedCineon";break;case sa:t="ACESFilmic";break;case Ic:t="AgX";break;case lf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ir).join(`
`)}function Bg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ir).join(`
`)}function Hg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ir(i){return i!==""}function ou(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Vg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(i){return i.replace(Vg,Xg)}var Wg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Xg(i,e){let t=Mt[e];if(t===void 0){let n=Wg.get(e);if(n!==void 0)t=Mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Kl(t)}var qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cu(i){return i.replace(qg,Yg)}function Yg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ru?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ia?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Jg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case or:case lr:e="ENVMAP_TYPE_CUBE";break;case Io:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===lr&&(e="ENVMAP_MODE_REFRACTION"),e}function $g(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ac:e="ENVMAP_BLENDING_MULTIPLY";break;case af:e="ENVMAP_BLENDING_MIX";break;case of:e="ENVMAP_BLENDING_ADD";break}return e}function jg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Qg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Zg(t),h=Jg(t),u=Kg(t),f=$g(t),p=jg(t),d=t.isWebGL2?"":Fg(t),y=Bg(t),v=Hg(r),g=s.createProgram(),m,M,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ir).join(`
`),m.length>0&&(m+=`
`),M=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ir).join(`
`),M.length>0&&(M+=`
`)):(m=[hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),M=[d,hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Mt.tonemapping_pars_fragment:"",t.toneMapping!==wi?kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,Og("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ir).join(`
`)),a=Kl(a),a=ou(a,t),a=lu(a,t),o=Kl(o),o=ou(o,t),o=lu(o,t),a=cu(a),o=cu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let E=_+m+a,I=_+M+o,P=ru(s,s.VERTEX_SHADER,E),A=ru(s,s.FRAGMENT_SHADER,I);s.attachShader(g,P),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function F(O){if(i.debug.checkShaderErrors){let j=s.getProgramInfoLog(g).trim(),N=s.getShaderInfoLog(P).trim(),b=s.getShaderInfoLog(A).trim(),X=!0,ne=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,P,A);else{let D=au(s,P,"vertex"),$=au(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+D+`
`+$)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(N===""||b==="")&&(ne=!1);ne&&(O.diagnostics={runnable:X,programLog:j,vertexShader:{log:N,prefix:m},fragmentShader:{log:b,prefix:M}})}s.deleteShader(P),s.deleteShader(A),T=new ar(s,g),x=Gg(s,g)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let x;this.getAttributes=function(){return x===void 0&&F(this),x};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(g,Dg)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ug++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=A,this}var ex=0,$l=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jl(e),t.set(e,n)),n}},jl=class{constructor(e){this.id=ex++,this.code=e,this.usedTimes=0}};function tx(i,e,t,n,s,r,a){let o=new oo,l=new $l,h=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,p=s.vertexTextures,d=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return T===0?"uv":`uv${T}`}function g(T,x,k,O,j){let N=O.fog,b=j.geometry,X=T.isMeshStandardMaterial?O.environment:null,ne=(T.isMeshStandardMaterial?t:e).get(T.envMap||X),D=ne&&ne.mapping===Io?ne.image.height:null,$=y[T.type];T.precision!==null&&(d=s.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));let we=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,de=we!==void 0?we.length:0,Le=0;b.morphAttributes.position!==void 0&&(Le=1),b.morphAttributes.normal!==void 0&&(Le=2),b.morphAttributes.color!==void 0&&(Le=3);let ce,ve,Ae,Ke;if($){let kt=Mi[$];ce=kt.vertexShader,ve=kt.fragmentShader}else ce=T.vertexShader,ve=T.fragmentShader,l.update(T),Ae=l.getVertexShaderID(T),Ke=l.getFragmentShaderID(T);let Be=i.getRenderTarget(),it=j.isInstancedMesh===!0,Oe=j.isBatchedMesh===!0,We=!!T.map,nt=!!T.matcap,H=!!ne,Te=!!T.aoMap,me=!!T.lightMap,Pe=!!T.bumpMap,ae=!!T.normalMap,$e=!!T.displacementMap,De=!!T.emissiveMap,L=!!T.metalnessMap,R=!!T.roughnessMap,te=T.anisotropy>0,fe=T.clearcoat>0,be=T.iridescence>0,Ee=T.sheen>0,Xe=T.transmission>0,Ne=te&&!!T.anisotropyMap,Ue=fe&&!!T.clearcoatMap,je=fe&&!!T.clearcoatNormalMap,at=fe&&!!T.clearcoatRoughnessMap,Me=be&&!!T.iridescenceMap,xt=be&&!!T.iridescenceThicknessMap,ft=Ee&&!!T.sheenColorMap,ht=Ee&&!!T.sheenRoughnessMap,ot=!!T.specularMap,Ge=!!T.specularColorMap,rt=!!T.specularIntensityMap,_t=Xe&&!!T.transmissionMap,Vt=Xe&&!!T.thicknessMap,pt=!!T.gradientMap,Ce=!!T.alphaMap,Y=T.alphaTest>0,He=!!T.alphaHash,ke=!!T.extensions,lt=!!b.attributes.uv1,Qe=!!b.attributes.uv2,Et=!!b.attributes.uv3,Ut=wi;return T.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(Ut=i.toneMapping),{isWebGL2:u,shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:ce,fragmentShader:ve,defines:T.defines,customVertexShaderID:Ae,customFragmentShaderID:Ke,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Oe,instancing:it,instancingColor:it&&j.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Be===null?i.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:Ni,map:We,matcap:nt,envMap:H,envMapMode:H&&ne.mapping,envMapCubeUVHeight:D,aoMap:Te,lightMap:me,bumpMap:Pe,normalMap:ae,displacementMap:p&&$e,emissiveMap:De,normalMapObjectSpace:ae&&T.normalMapType===_f,normalMapTangentSpace:ae&&T.normalMapType===Lo,metalnessMap:L,roughnessMap:R,anisotropy:te,anisotropyMap:Ne,clearcoat:fe,clearcoatMap:Ue,clearcoatNormalMap:je,clearcoatRoughnessMap:at,iridescence:be,iridescenceMap:Me,iridescenceThicknessMap:xt,sheen:Ee,sheenColorMap:ft,sheenRoughnessMap:ht,specularMap:ot,specularColorMap:Ge,specularIntensityMap:rt,transmission:Xe,transmissionMap:_t,thicknessMap:Vt,gradientMap:pt,opaque:T.transparent===!1&&T.blending===$i,alphaMap:Ce,alphaTest:Y,alphaHash:He,combine:T.combine,mapUv:We&&v(T.map.channel),aoMapUv:Te&&v(T.aoMap.channel),lightMapUv:me&&v(T.lightMap.channel),bumpMapUv:Pe&&v(T.bumpMap.channel),normalMapUv:ae&&v(T.normalMap.channel),displacementMapUv:$e&&v(T.displacementMap.channel),emissiveMapUv:De&&v(T.emissiveMap.channel),metalnessMapUv:L&&v(T.metalnessMap.channel),roughnessMapUv:R&&v(T.roughnessMap.channel),anisotropyMapUv:Ne&&v(T.anisotropyMap.channel),clearcoatMapUv:Ue&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:je&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:ht&&v(T.sheenRoughnessMap.channel),specularMapUv:ot&&v(T.specularMap.channel),specularColorMapUv:Ge&&v(T.specularColorMap.channel),specularIntensityMapUv:rt&&v(T.specularIntensityMap.channel),transmissionMapUv:_t&&v(T.transmissionMap.channel),thicknessMapUv:Vt&&v(T.thicknessMap.channel),alphaMapUv:Ce&&v(T.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(ae||te),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vertexUv1s:lt,vertexUv2s:Qe,vertexUv3s:Et,pointsUvs:j.isPoints===!0&&!!b.attributes.uv&&(We||Ce),fog:!!N,useFog:T.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Le,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,useLegacyLights:i._useLegacyLights,decodeVideoTexture:We&&T.map.isVideoTexture===!0&&Ht.getTransfer(T.map.colorSpace)===Yt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===jt,flipSided:T.side===mn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:ke&&T.extensions.derivatives===!0,extensionFragDepth:ke&&T.extensions.fragDepth===!0,extensionDrawBuffers:ke&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:ke&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ke&&T.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function m(T){let x=[];if(T.shaderID?x.push(T.shaderID):(x.push(T.customVertexShaderID),x.push(T.customFragmentShaderID)),T.defines!==void 0)for(let k in T.defines)x.push(k),x.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(M(x,T),_(x,T),x.push(i.outputColorSpace)),x.push(T.customProgramCacheKey),x.join()}function M(T,x){T.push(x.precision),T.push(x.outputColorSpace),T.push(x.envMapMode),T.push(x.envMapCubeUVHeight),T.push(x.mapUv),T.push(x.alphaMapUv),T.push(x.lightMapUv),T.push(x.aoMapUv),T.push(x.bumpMapUv),T.push(x.normalMapUv),T.push(x.displacementMapUv),T.push(x.emissiveMapUv),T.push(x.metalnessMapUv),T.push(x.roughnessMapUv),T.push(x.anisotropyMapUv),T.push(x.clearcoatMapUv),T.push(x.clearcoatNormalMapUv),T.push(x.clearcoatRoughnessMapUv),T.push(x.iridescenceMapUv),T.push(x.iridescenceThicknessMapUv),T.push(x.sheenColorMapUv),T.push(x.sheenRoughnessMapUv),T.push(x.specularMapUv),T.push(x.specularColorMapUv),T.push(x.specularIntensityMapUv),T.push(x.transmissionMapUv),T.push(x.thicknessMapUv),T.push(x.combine),T.push(x.fogExp2),T.push(x.sizeAttenuation),T.push(x.morphTargetsCount),T.push(x.morphAttributeCount),T.push(x.numDirLights),T.push(x.numPointLights),T.push(x.numSpotLights),T.push(x.numSpotLightMaps),T.push(x.numHemiLights),T.push(x.numRectAreaLights),T.push(x.numDirLightShadows),T.push(x.numPointLightShadows),T.push(x.numSpotLightShadows),T.push(x.numSpotLightShadowsWithMaps),T.push(x.numLightProbes),T.push(x.shadowMapType),T.push(x.toneMapping),T.push(x.numClippingPlanes),T.push(x.numClipIntersection),T.push(x.depthPacking)}function _(T,x){o.disableAll(),x.isWebGL2&&o.enable(0),x.supportsVertexTextures&&o.enable(1),x.instancing&&o.enable(2),x.instancingColor&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),T.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.useLegacyLights&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function E(T){let x=y[T.type],k;if(x){let O=Mi[x];k=cs.clone(O.uniforms)}else k=T.uniforms;return k}function I(T,x){let k;for(let O=0,j=h.length;O<j;O++){let N=h[O];if(N.cacheKey===x){k=N,++k.usedTimes;break}}return k===void 0&&(k=new Qg(i,x,T,r),h.push(k)),k}function P(T){if(--T.usedTimes===0){let x=h.indexOf(T);h[x]=h[h.length-1],h.pop(),T.destroy()}}function A(T){l.remove(T)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:E,acquireProgram:I,releaseProgram:P,releaseShaderCache:A,programs:h,dispose:F}}function nx(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function ix(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function uu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function du(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,p,d,y,v,g){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:p,material:d,groupOrder:y,renderOrder:f.renderOrder,z:v,group:g},i[e]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=d,m.groupOrder=y,m.renderOrder=f.renderOrder,m.z=v,m.group=g),e++,m}function o(f,p,d,y,v,g){let m=a(f,p,d,y,v,g);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(f,p,d,y,v,g){let m=a(f,p,d,y,v,g);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function h(f,p){t.length>1&&t.sort(f||ix),n.length>1&&n.sort(p||uu),s.length>1&&s.sort(p||uu)}function u(){for(let f=e,p=i.length;f<p;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:h}}function sx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new du,i.set(n,[a])):s>=r.length?(a=new du,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function rx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new st};break;case"SpotLight":t={position:new V,direction:new V,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function ax(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ox=0;function lx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function cx(i,e){let t=new rx,n=ax(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new V);let r=new V,a=new Nt,o=new Nt;function l(u,f){let p=0,d=0,y=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let v=0,g=0,m=0,M=0,_=0,E=0,I=0,P=0,A=0,F=0,T=0;u.sort(lx);let x=f===!0?Math.PI:1;for(let O=0,j=u.length;O<j;O++){let N=u[O],b=N.color,X=N.intensity,ne=N.distance,D=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)p+=b.r*X*x,d+=b.g*X*x,y+=b.b*X*x;else if(N.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(N.sh.coefficients[$],X);T++}else if(N.isDirectionalLight){let $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity*x),N.castShadow){let we=N.shadow,de=n.get(N);de.shadowBias=we.bias,de.shadowNormalBias=we.normalBias,de.shadowRadius=we.radius,de.shadowMapSize=we.mapSize,s.directionalShadow[v]=de,s.directionalShadowMap[v]=D,s.directionalShadowMatrix[v]=N.shadow.matrix,E++}s.directional[v]=$,v++}else if(N.isSpotLight){let $=t.get(N);$.position.setFromMatrixPosition(N.matrixWorld),$.color.copy(b).multiplyScalar(X*x),$.distance=ne,$.coneCos=Math.cos(N.angle),$.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),$.decay=N.decay,s.spot[m]=$;let we=N.shadow;if(N.map&&(s.spotLightMap[A]=N.map,A++,we.updateMatrices(N),N.castShadow&&F++),s.spotLightMatrix[m]=we.matrix,N.castShadow){let de=n.get(N);de.shadowBias=we.bias,de.shadowNormalBias=we.normalBias,de.shadowRadius=we.radius,de.shadowMapSize=we.mapSize,s.spotShadow[m]=de,s.spotShadowMap[m]=D,P++}m++}else if(N.isRectAreaLight){let $=t.get(N);$.color.copy(b).multiplyScalar(X),$.halfWidth.set(N.width*.5,0,0),$.halfHeight.set(0,N.height*.5,0),s.rectArea[M]=$,M++}else if(N.isPointLight){let $=t.get(N);if($.color.copy(N.color).multiplyScalar(N.intensity*x),$.distance=N.distance,$.decay=N.decay,N.castShadow){let we=N.shadow,de=n.get(N);de.shadowBias=we.bias,de.shadowNormalBias=we.normalBias,de.shadowRadius=we.radius,de.shadowMapSize=we.mapSize,de.shadowCameraNear=we.camera.near,de.shadowCameraFar=we.camera.far,s.pointShadow[g]=de,s.pointShadowMap[g]=D,s.pointShadowMatrix[g]=N.shadow.matrix,I++}s.point[g]=$,g++}else if(N.isHemisphereLight){let $=t.get(N);$.skyColor.copy(N.color).multiplyScalar(X*x),$.groundColor.copy(N.groundColor).multiplyScalar(X*x),s.hemi[_]=$,_++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=d,s.ambient[2]=y;let k=s.hash;(k.directionalLength!==v||k.pointLength!==g||k.spotLength!==m||k.rectAreaLength!==M||k.hemiLength!==_||k.numDirectionalShadows!==E||k.numPointShadows!==I||k.numSpotShadows!==P||k.numSpotMaps!==A||k.numLightProbes!==T)&&(s.directional.length=v,s.spot.length=m,s.rectArea.length=M,s.point.length=g,s.hemi.length=_,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=P+A-F,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=T,k.directionalLength=v,k.pointLength=g,k.spotLength=m,k.rectAreaLength=M,k.hemiLength=_,k.numDirectionalShadows=E,k.numPointShadows=I,k.numSpotShadows=P,k.numSpotMaps=A,k.numLightProbes=T,s.version=ox++)}function h(u,f){let p=0,d=0,y=0,v=0,g=0,m=f.matrixWorldInverse;for(let M=0,_=u.length;M<_;M++){let E=u[M];if(E.isDirectionalLight){let I=s.directional[p];I.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(m),p++}else if(E.isSpotLight){let I=s.spot[y];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),I.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(m),y++}else if(E.isRectAreaLight){let I=s.rectArea[v];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),o.identity(),a.copy(E.matrixWorld),a.premultiply(m),o.extractRotation(a),I.halfWidth.set(E.width*.5,0,0),I.halfHeight.set(0,E.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){let I=s.point[d];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){let I=s.hemi[g];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(m),g++}}}return{setup:l,setupView:h,state:s}}function fu(i,e){let t=new cx(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(f){n.push(f)}function o(f){s.push(f)}function l(f){t.setup(n,f)}function h(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o}}function hx(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new fu(i,e),t.set(r,[l])):a>=o.length?(l=new fu(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ql=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ec=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dx=`uniform sampler2D shadow_pass;
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
}`;function fx(i,e,t){let n=new Yr,s=new Re,r=new Re,a=new nn,o=new Ql({depthPacking:vf}),l=new ec,h={},u=t.maxTextureSize,f={[es]:mn,[mn]:es,[jt]:jt},p=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:ux,fragmentShader:dx}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let y=new Xt;y.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ze(y,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru;let m=this.type;this.render=function(P,A,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;let T=i.getRenderTarget(),x=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),O=i.state;O.setBlending(bi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let j=m!==Ii&&this.type===Ii,N=m===Ii&&this.type!==Ii;for(let b=0,X=P.length;b<X;b++){let ne=P[b],D=ne.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let $=D.getFrameExtents();if(s.multiply($),r.copy(D.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/$.x),s.x=r.x*$.x,D.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/$.y),s.y=r.y*$.y,D.mapSize.y=r.y)),D.map===null||j===!0||N===!0){let de=this.type!==Ii?{minFilter:bn,magFilter:bn}:{};D.map!==null&&D.map.dispose(),D.map=new Fn(s.x,s.y,de),D.map.texture.name=ne.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let we=D.getViewportCount();for(let de=0;de<we;de++){let Le=D.getViewport(de);a.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),O.viewport(a),D.updateMatrices(ne,de),n=D.getFrustum(),E(A,F,D.camera,ne,this.type)}D.isPointLightShadow!==!0&&this.type===Ii&&M(D,F),D.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,x,k)};function M(P,A){let F=e.update(v);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Fn(s.x,s.y)),p.uniforms.shadow_pass.value=P.map.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(A,null,F,p,v,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(A,null,F,d,v,null)}function _(P,A,F,T){let x=null,k=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)x=k;else if(x=F.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let O=x.uuid,j=A.uuid,N=h[O];N===void 0&&(N={},h[O]=N);let b=N[j];b===void 0&&(b=x.clone(),N[j]=b,A.addEventListener("dispose",I)),x=b}if(x.visible=A.visible,x.wireframe=A.wireframe,T===Ii?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:f[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let O=i.properties.get(x);O.light=F}return x}function E(P,A,F,T,x){if(P.visible===!1)return;if(P.layers.test(A.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===Ii)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);let j=e.update(P),N=P.material;if(Array.isArray(N)){let b=j.groups;for(let X=0,ne=b.length;X<ne;X++){let D=b[X],$=N[D.materialIndex];if($&&$.visible){let we=_(P,$,T,x);P.onBeforeShadow(i,P,A,F,j,we,D),i.renderBufferDirect(F,null,j,we,P,D),P.onAfterShadow(i,P,A,F,j,we,D)}}}else if(N.visible){let b=_(P,N,T,x);P.onBeforeShadow(i,P,A,F,j,b,null),i.renderBufferDirect(F,null,j,b,P,null),P.onAfterShadow(i,P,A,F,j,b,null)}}let O=P.children;for(let j=0,N=O.length;j<N;j++)E(O[j],A,F,T,x)}function I(P){P.target.removeEventListener("dispose",I);for(let F in h){let T=h[F],x=P.target.uuid;x in T&&(T[x].dispose(),delete T[x])}}}function px(i,e,t){let n=t.isWebGL2;function s(){let Y=!1,He=new nn,ke=null,lt=new nn(0,0,0,0);return{setMask:function(Qe){ke!==Qe&&!Y&&(i.colorMask(Qe,Qe,Qe,Qe),ke=Qe)},setLocked:function(Qe){Y=Qe},setClear:function(Qe,Et,Ut,Tt,kt){kt===!0&&(Qe*=Tt,Et*=Tt,Ut*=Tt),He.set(Qe,Et,Ut,Tt),lt.equals(He)===!1&&(i.clearColor(Qe,Et,Ut,Tt),lt.copy(He))},reset:function(){Y=!1,ke=null,lt.set(-1,0,0,0)}}}function r(){let Y=!1,He=null,ke=null,lt=null;return{setTest:function(Qe){Qe?Oe(i.DEPTH_TEST):We(i.DEPTH_TEST)},setMask:function(Qe){He!==Qe&&!Y&&(i.depthMask(Qe),He=Qe)},setFunc:function(Qe){if(ke!==Qe){switch(Qe){case jd:i.depthFunc(i.NEVER);break;case Qd:i.depthFunc(i.ALWAYS);break;case ef:i.depthFunc(i.LESS);break;case Za:i.depthFunc(i.LEQUAL);break;case tf:i.depthFunc(i.EQUAL);break;case nf:i.depthFunc(i.GEQUAL);break;case sf:i.depthFunc(i.GREATER);break;case rf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ke=Qe}},setLocked:function(Qe){Y=Qe},setClear:function(Qe){lt!==Qe&&(i.clearDepth(Qe),lt=Qe)},reset:function(){Y=!1,He=null,ke=null,lt=null}}}function a(){let Y=!1,He=null,ke=null,lt=null,Qe=null,Et=null,Ut=null,Tt=null,kt=null;return{setTest:function(bt){Y||(bt?Oe(i.STENCIL_TEST):We(i.STENCIL_TEST))},setMask:function(bt){He!==bt&&!Y&&(i.stencilMask(bt),He=bt)},setFunc:function(bt,Wt,At){(ke!==bt||lt!==Wt||Qe!==At)&&(i.stencilFunc(bt,Wt,At),ke=bt,lt=Wt,Qe=At)},setOp:function(bt,Wt,At){(Et!==bt||Ut!==Wt||Tt!==At)&&(i.stencilOp(bt,Wt,At),Et=bt,Ut=Wt,Tt=At)},setLocked:function(bt){Y=bt},setClear:function(bt){kt!==bt&&(i.clearStencil(bt),kt=bt)},reset:function(){Y=!1,He=null,ke=null,lt=null,Qe=null,Et=null,Ut=null,Tt=null,kt=null}}}let o=new s,l=new r,h=new a,u=new WeakMap,f=new WeakMap,p={},d={},y=new WeakMap,v=[],g=null,m=!1,M=null,_=null,E=null,I=null,P=null,A=null,F=null,T=new st(0,0,0),x=0,k=!1,O=null,j=null,N=null,b=null,X=null,ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,$=0,we=i.getParameter(i.VERSION);we.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(we)[1]),D=$>=1):we.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(we)[1]),D=$>=2);let de=null,Le={},ce=i.getParameter(i.SCISSOR_BOX),ve=i.getParameter(i.VIEWPORT),Ae=new nn().fromArray(ce),Ke=new nn().fromArray(ve);function Be(Y,He,ke,lt){let Qe=new Uint8Array(4),Et=i.createTexture();i.bindTexture(Y,Et),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<ke;Ut++)n&&(Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY)?i.texImage3D(He,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,Qe):i.texImage2D(He+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Qe);return Et}let it={};it[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(it[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),h.setClear(0),Oe(i.DEPTH_TEST),l.setFunc(Za),De(!1),L(Zc),Oe(i.CULL_FACE),ae(bi);function Oe(Y){p[Y]!==!0&&(i.enable(Y),p[Y]=!0)}function We(Y){p[Y]!==!1&&(i.disable(Y),p[Y]=!1)}function nt(Y,He){return d[Y]!==He?(i.bindFramebuffer(Y,He),d[Y]=He,n&&(Y===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=He),Y===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=He)),!0):!1}function H(Y,He){let ke=v,lt=!1;if(Y)if(ke=y.get(He),ke===void 0&&(ke=[],y.set(He,ke)),Y.isWebGLMultipleRenderTargets){let Qe=Y.texture;if(ke.length!==Qe.length||ke[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,Ut=Qe.length;Et<Ut;Et++)ke[Et]=i.COLOR_ATTACHMENT0+Et;ke.length=Qe.length,lt=!0}}else ke[0]!==i.COLOR_ATTACHMENT0&&(ke[0]=i.COLOR_ATTACHMENT0,lt=!0);else ke[0]!==i.BACK&&(ke[0]=i.BACK,lt=!0);lt&&(t.isWebGL2?i.drawBuffers(ke):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ke))}function Te(Y){return g!==Y?(i.useProgram(Y),g=Y,!0):!1}let me={[Ms]:i.FUNC_ADD,[Od]:i.FUNC_SUBTRACT,[kd]:i.FUNC_REVERSE_SUBTRACT};if(n)me[$c]=i.MIN,me[jc]=i.MAX;else{let Y=e.get("EXT_blend_minmax");Y!==null&&(me[$c]=Y.MIN_EXT,me[jc]=Y.MAX_EXT)}let Pe={[Fd]:i.ZERO,[Bd]:i.ONE,[Hd]:i.SRC_COLOR,[zl]:i.SRC_ALPHA,[Yd]:i.SRC_ALPHA_SATURATE,[Xd]:i.DST_COLOR,[Vd]:i.DST_ALPHA,[Gd]:i.ONE_MINUS_SRC_COLOR,[Nl]:i.ONE_MINUS_SRC_ALPHA,[qd]:i.ONE_MINUS_DST_COLOR,[Wd]:i.ONE_MINUS_DST_ALPHA,[Zd]:i.CONSTANT_COLOR,[Jd]:i.ONE_MINUS_CONSTANT_COLOR,[Kd]:i.CONSTANT_ALPHA,[$d]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(Y,He,ke,lt,Qe,Et,Ut,Tt,kt,bt){if(Y===bi){m===!0&&(We(i.BLEND),m=!1);return}if(m===!1&&(Oe(i.BLEND),m=!0),Y!==Nd){if(Y!==M||bt!==k){if((_!==Ms||P!==Ms)&&(i.blendEquation(i.FUNC_ADD),_=Ms,P=Ms),bt)switch(Y){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFunc(i.ONE,i.ONE);break;case Jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Jc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}E=null,I=null,A=null,F=null,T.set(0,0,0),x=0,M=Y,k=bt}return}Qe=Qe||He,Et=Et||ke,Ut=Ut||lt,(He!==_||Qe!==P)&&(i.blendEquationSeparate(me[He],me[Qe]),_=He,P=Qe),(ke!==E||lt!==I||Et!==A||Ut!==F)&&(i.blendFuncSeparate(Pe[ke],Pe[lt],Pe[Et],Pe[Ut]),E=ke,I=lt,A=Et,F=Ut),(Tt.equals(T)===!1||kt!==x)&&(i.blendColor(Tt.r,Tt.g,Tt.b,kt),T.copy(Tt),x=kt),M=Y,k=!1}function $e(Y,He){Y.side===jt?We(i.CULL_FACE):Oe(i.CULL_FACE);let ke=Y.side===mn;He&&(ke=!ke),De(ke),Y.blending===$i&&Y.transparent===!1?ae(bi):ae(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),l.setFunc(Y.depthFunc),l.setTest(Y.depthTest),l.setMask(Y.depthWrite),o.setMask(Y.colorWrite);let lt=Y.stencilWrite;h.setTest(lt),lt&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),te(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Oe(i.SAMPLE_ALPHA_TO_COVERAGE):We(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(Y){O!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),O=Y)}function L(Y){Y!==Ud?(Oe(i.CULL_FACE),Y!==j&&(Y===Zc?i.cullFace(i.BACK):Y===zd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):We(i.CULL_FACE),j=Y}function R(Y){Y!==N&&(D&&i.lineWidth(Y),N=Y)}function te(Y,He,ke){Y?(Oe(i.POLYGON_OFFSET_FILL),(b!==He||X!==ke)&&(i.polygonOffset(He,ke),b=He,X=ke)):We(i.POLYGON_OFFSET_FILL)}function fe(Y){Y?Oe(i.SCISSOR_TEST):We(i.SCISSOR_TEST)}function be(Y){Y===void 0&&(Y=i.TEXTURE0+ne-1),de!==Y&&(i.activeTexture(Y),de=Y)}function Ee(Y,He,ke){ke===void 0&&(de===null?ke=i.TEXTURE0+ne-1:ke=de);let lt=Le[ke];lt===void 0&&(lt={type:void 0,texture:void 0},Le[ke]=lt),(lt.type!==Y||lt.texture!==He)&&(de!==ke&&(i.activeTexture(ke),de=ke),i.bindTexture(Y,He||it[Y]),lt.type=Y,lt.texture=He)}function Xe(){let Y=Le[de];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ue(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function je(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function at(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ot(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ge(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function rt(Y){Ae.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),Ae.copy(Y))}function _t(Y){Ke.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),Ke.copy(Y))}function Vt(Y,He){let ke=f.get(He);ke===void 0&&(ke=new WeakMap,f.set(He,ke));let lt=ke.get(Y);lt===void 0&&(lt=i.getUniformBlockIndex(He,Y.name),ke.set(Y,lt))}function pt(Y,He){let lt=f.get(He).get(Y);u.get(He)!==lt&&(i.uniformBlockBinding(He,lt,Y.__bindingPointIndex),u.set(He,lt))}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},de=null,Le={},d={},y=new WeakMap,v=[],g=null,m=!1,M=null,_=null,E=null,I=null,P=null,A=null,F=null,T=new st(0,0,0),x=0,k=!1,O=null,j=null,N=null,b=null,X=null,Ae.set(0,0,i.canvas.width,i.canvas.height),Ke.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),h.reset()}return{buffers:{color:o,depth:l,stencil:h},enable:Oe,disable:We,bindFramebuffer:nt,drawBuffers:H,useProgram:Te,setBlending:ae,setMaterial:$e,setFlipSided:De,setCullFace:L,setLineWidth:R,setPolygonOffset:te,setScissorTest:fe,activeTexture:be,bindTexture:Ee,unbindTexture:Xe,compressedTexImage2D:Ne,compressedTexImage3D:Ue,texImage2D:ot,texImage3D:Ge,updateUBOMapping:Vt,uniformBlockBinding:pt,texStorage2D:ft,texStorage3D:ht,texSubImage2D:je,texSubImage3D:at,compressedTexSubImage2D:Me,compressedTexSubImage3D:xt,scissor:rt,viewport:_t,reset:Ce}}function mx(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,f,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,R){return d?new OffscreenCanvas(L,R):no("canvas")}function v(L,R,te,fe){let be=1;if((L.width>fe||L.height>fe)&&(be=fe/Math.max(L.width,L.height)),be<1||R===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){let Ee=R?Gl:Math.floor,Xe=Ee(be*L.width),Ne=Ee(be*L.height);f===void 0&&(f=y(Xe,Ne));let Ue=te?y(Xe,Ne):f;return Ue.width=Xe,Ue.height=Ne,Ue.getContext("2d").drawImage(L,0,0,Xe,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Xe+"x"+Ne+")."),Ue}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function g(L){return Ph(L.width)&&Ph(L.height)}function m(L){return o?!1:L.wrapS!==fi||L.wrapT!==fi||L.minFilter!==bn&&L.minFilter!==ii}function M(L,R){return L.generateMipmaps&&R&&L.minFilter!==bn&&L.minFilter!==ii}function _(L){i.generateMipmap(L)}function E(L,R,te,fe,be=!1){if(o===!1)return R;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Ee=R;if(R===i.RED&&(te===i.FLOAT&&(Ee=i.R32F),te===i.HALF_FLOAT&&(Ee=i.R16F),te===i.UNSIGNED_BYTE&&(Ee=i.R8)),R===i.RED_INTEGER&&(te===i.UNSIGNED_BYTE&&(Ee=i.R8UI),te===i.UNSIGNED_SHORT&&(Ee=i.R16UI),te===i.UNSIGNED_INT&&(Ee=i.R32UI),te===i.BYTE&&(Ee=i.R8I),te===i.SHORT&&(Ee=i.R16I),te===i.INT&&(Ee=i.R32I)),R===i.RG&&(te===i.FLOAT&&(Ee=i.RG32F),te===i.HALF_FLOAT&&(Ee=i.RG16F),te===i.UNSIGNED_BYTE&&(Ee=i.RG8)),R===i.RGBA){let Xe=be?$a:Ht.getTransfer(fe);te===i.FLOAT&&(Ee=i.RGBA32F),te===i.HALF_FLOAT&&(Ee=i.RGBA16F),te===i.UNSIGNED_BYTE&&(Ee=Xe===Yt?i.SRGB8_ALPHA8:i.RGBA8),te===i.UNSIGNED_SHORT_4_4_4_4&&(Ee=i.RGBA4),te===i.UNSIGNED_SHORT_5_5_5_1&&(Ee=i.RGB5_A1)}return(Ee===i.R16F||Ee===i.R32F||Ee===i.RG16F||Ee===i.RG32F||Ee===i.RGBA16F||Ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Ee}function I(L,R,te){return M(L,te)===!0||L.isFramebufferTexture&&L.minFilter!==bn&&L.minFilter!==ii?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function P(L){return L===bn||L===Qc||L===jo?i.NEAREST:i.LINEAR}function A(L){let R=L.target;R.removeEventListener("dispose",A),T(R),R.isVideoTexture&&u.delete(R)}function F(L){let R=L.target;R.removeEventListener("dispose",F),k(R)}function T(L){let R=n.get(L);if(R.__webglInit===void 0)return;let te=L.source,fe=p.get(te);if(fe){let be=fe[R.__cacheKey];be.usedTimes--,be.usedTimes===0&&x(L),Object.keys(fe).length===0&&p.delete(te)}n.remove(L)}function x(L){let R=n.get(L);i.deleteTexture(R.__webglTexture);let te=L.source,fe=p.get(te);delete fe[R.__cacheKey],a.memory.textures--}function k(L){let R=L.texture,te=n.get(L),fe=n.get(R);if(fe.__webglTexture!==void 0&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let be=0;be<6;be++){if(Array.isArray(te.__webglFramebuffer[be]))for(let Ee=0;Ee<te.__webglFramebuffer[be].length;Ee++)i.deleteFramebuffer(te.__webglFramebuffer[be][Ee]);else i.deleteFramebuffer(te.__webglFramebuffer[be]);te.__webglDepthbuffer&&i.deleteRenderbuffer(te.__webglDepthbuffer[be])}else{if(Array.isArray(te.__webglFramebuffer))for(let be=0;be<te.__webglFramebuffer.length;be++)i.deleteFramebuffer(te.__webglFramebuffer[be]);else i.deleteFramebuffer(te.__webglFramebuffer);if(te.__webglDepthbuffer&&i.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&i.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let be=0;be<te.__webglColorRenderbuffer.length;be++)te.__webglColorRenderbuffer[be]&&i.deleteRenderbuffer(te.__webglColorRenderbuffer[be]);te.__webglDepthRenderbuffer&&i.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let be=0,Ee=R.length;be<Ee;be++){let Xe=n.get(R[be]);Xe.__webglTexture&&(i.deleteTexture(Xe.__webglTexture),a.memory.textures--),n.remove(R[be])}n.remove(R),n.remove(L)}let O=0;function j(){O=0}function N(){let L=O;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),O+=1,L}function b(L){let R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function X(L,R){let te=n.get(L);if(L.isVideoTexture&&$e(L),L.isRenderTargetTexture===!1&&L.version>0&&te.__version!==L.version){let fe=L.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(te,L,R);return}}t.bindTexture(i.TEXTURE_2D,te.__webglTexture,i.TEXTURE0+R)}function ne(L,R){let te=n.get(L);if(L.version>0&&te.__version!==L.version){Ae(te,L,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,te.__webglTexture,i.TEXTURE0+R)}function D(L,R){let te=n.get(L);if(L.version>0&&te.__version!==L.version){Ae(te,L,R);return}t.bindTexture(i.TEXTURE_3D,te.__webglTexture,i.TEXTURE0+R)}function $(L,R){let te=n.get(L);if(L.version>0&&te.__version!==L.version){Ke(te,L,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture,i.TEXTURE0+R)}let we={[Xr]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[Fl]:i.MIRRORED_REPEAT},de={[bn]:i.NEAREST,[Qc]:i.NEAREST_MIPMAP_NEAREST,[jo]:i.NEAREST_MIPMAP_LINEAR,[ii]:i.LINEAR,[cf]:i.LINEAR_MIPMAP_NEAREST,[qr]:i.LINEAR_MIPMAP_LINEAR},Le={[Mf]:i.NEVER,[Af]:i.ALWAYS,[bf]:i.LESS,[ku]:i.LEQUAL,[wf]:i.EQUAL,[Tf]:i.GEQUAL,[Sf]:i.GREATER,[Ef]:i.NOTEQUAL};function ce(L,R,te){if(te?(i.texParameteri(L,i.TEXTURE_WRAP_S,we[R.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,we[R.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,we[R.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,de[R.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,de[R.minFilter])):(i.texParameteri(L,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(L,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(R.wrapS!==fi||R.wrapT!==fi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,i.TEXTURE_MAG_FILTER,P(R.magFilter)),i.texParameteri(L,i.TEXTURE_MIN_FILTER,P(R.minFilter)),R.minFilter!==bn&&R.minFilter!==ii&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Le[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let fe=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===bn||R.minFilter!==jo&&R.minFilter!==qr||R.type===Ki&&e.has("OES_texture_float_linear")===!1||o===!1&&R.type===pi&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||n.get(R).__currentAnisotropy)&&(i.texParameterf(L,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy)}}function ve(L,R){let te=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",A));let fe=R.source,be=p.get(fe);be===void 0&&(be={},p.set(fe,be));let Ee=b(R);if(Ee!==L.__cacheKey){be[Ee]===void 0&&(be[Ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,te=!0),be[Ee].usedTimes++;let Xe=be[L.__cacheKey];Xe!==void 0&&(be[L.__cacheKey].usedTimes--,Xe.usedTimes===0&&x(R)),L.__cacheKey=Ee,L.__webglTexture=be[Ee].texture}return te}function Ae(L,R,te){let fe=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(fe=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(fe=i.TEXTURE_3D);let be=ve(L,R),Ee=R.source;t.bindTexture(fe,L.__webglTexture,i.TEXTURE0+te);let Xe=n.get(Ee);if(Ee.version!==Xe.__version||be===!0){t.activeTexture(i.TEXTURE0+te);let Ne=Ht.getPrimaries(Ht.workingColorSpace),Ue=R.colorSpace===si?null:Ht.getPrimaries(R.colorSpace),je=R.colorSpace===si||Ne===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let at=m(R)&&g(R.image)===!1,Me=v(R.image,at,!1,s.maxTextureSize);Me=De(R,Me);let xt=g(Me)||o,ft=r.convert(R.format,R.colorSpace),ht=r.convert(R.type),ot=E(R.internalFormat,ft,ht,R.colorSpace,R.isVideoTexture);ce(fe,R,xt);let Ge,rt=R.mipmaps,_t=o&&R.isVideoTexture!==!0&&ot!==Nu,Vt=Xe.__version===void 0||be===!0,pt=I(R,Me,xt);if(R.isDepthTexture)ot=i.DEPTH_COMPONENT,o?R.type===Ki?ot=i.DEPTH_COMPONENT32F:R.type===Ji?ot=i.DEPTH_COMPONENT24:R.type===Ss?ot=i.DEPTH24_STENCIL8:ot=i.DEPTH_COMPONENT16:R.type===Ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===Es&&ot===i.DEPTH_COMPONENT&&R.type!==Lc&&R.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=Ji,ht=r.convert(R.type)),R.format===cr&&ot===i.DEPTH_COMPONENT&&(ot=i.DEPTH_STENCIL,R.type!==Ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=Ss,ht=r.convert(R.type))),Vt&&(_t?t.texStorage2D(i.TEXTURE_2D,1,ot,Me.width,Me.height):t.texImage2D(i.TEXTURE_2D,0,ot,Me.width,Me.height,0,ft,ht,null));else if(R.isDataTexture)if(rt.length>0&&xt){_t&&Vt&&t.texStorage2D(i.TEXTURE_2D,pt,ot,rt[0].width,rt[0].height);for(let Ce=0,Y=rt.length;Ce<Y;Ce++)Ge=rt[Ce],_t?t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,Ge.width,Ge.height,ft,ht,Ge.data):t.texImage2D(i.TEXTURE_2D,Ce,ot,Ge.width,Ge.height,0,ft,ht,Ge.data);R.generateMipmaps=!1}else _t?(Vt&&t.texStorage2D(i.TEXTURE_2D,pt,ot,Me.width,Me.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me.width,Me.height,ft,ht,Me.data)):t.texImage2D(i.TEXTURE_2D,0,ot,Me.width,Me.height,0,ft,ht,Me.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){_t&&Vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,ot,rt[0].width,rt[0].height,Me.depth);for(let Ce=0,Y=rt.length;Ce<Y;Ce++)Ge=rt[Ce],R.format!==$n?ft!==null?_t?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,Ge.width,Ge.height,Me.depth,ft,Ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ce,ot,Ge.width,Ge.height,Me.depth,0,Ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ce,0,0,0,Ge.width,Ge.height,Me.depth,ft,ht,Ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ce,ot,Ge.width,Ge.height,Me.depth,0,ft,ht,Ge.data)}else{_t&&Vt&&t.texStorage2D(i.TEXTURE_2D,pt,ot,rt[0].width,rt[0].height);for(let Ce=0,Y=rt.length;Ce<Y;Ce++)Ge=rt[Ce],R.format!==$n?ft!==null?_t?t.compressedTexSubImage2D(i.TEXTURE_2D,Ce,0,0,Ge.width,Ge.height,ft,Ge.data):t.compressedTexImage2D(i.TEXTURE_2D,Ce,ot,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,Ge.width,Ge.height,ft,ht,Ge.data):t.texImage2D(i.TEXTURE_2D,Ce,ot,Ge.width,Ge.height,0,ft,ht,Ge.data)}else if(R.isDataArrayTexture)_t?(Vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,ot,Me.width,Me.height,Me.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ft,ht,Me.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ot,Me.width,Me.height,Me.depth,0,ft,ht,Me.data);else if(R.isData3DTexture)_t?(Vt&&t.texStorage3D(i.TEXTURE_3D,pt,ot,Me.width,Me.height,Me.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ft,ht,Me.data)):t.texImage3D(i.TEXTURE_3D,0,ot,Me.width,Me.height,Me.depth,0,ft,ht,Me.data);else if(R.isFramebufferTexture){if(Vt)if(_t)t.texStorage2D(i.TEXTURE_2D,pt,ot,Me.width,Me.height);else{let Ce=Me.width,Y=Me.height;for(let He=0;He<pt;He++)t.texImage2D(i.TEXTURE_2D,He,ot,Ce,Y,0,ft,ht,null),Ce>>=1,Y>>=1}}else if(rt.length>0&&xt){_t&&Vt&&t.texStorage2D(i.TEXTURE_2D,pt,ot,rt[0].width,rt[0].height);for(let Ce=0,Y=rt.length;Ce<Y;Ce++)Ge=rt[Ce],_t?t.texSubImage2D(i.TEXTURE_2D,Ce,0,0,ft,ht,Ge):t.texImage2D(i.TEXTURE_2D,Ce,ot,ft,ht,Ge);R.generateMipmaps=!1}else _t?(Vt&&t.texStorage2D(i.TEXTURE_2D,pt,ot,Me.width,Me.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,ht,Me)):t.texImage2D(i.TEXTURE_2D,0,ot,ft,ht,Me);M(R,xt)&&_(fe),Xe.__version=Ee.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function Ke(L,R,te){if(R.image.length!==6)return;let fe=ve(L,R),be=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+te);let Ee=n.get(be);if(be.version!==Ee.__version||fe===!0){t.activeTexture(i.TEXTURE0+te);let Xe=Ht.getPrimaries(Ht.workingColorSpace),Ne=R.colorSpace===si?null:Ht.getPrimaries(R.colorSpace),Ue=R.colorSpace===si||Xe===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let je=R.isCompressedTexture||R.image[0].isCompressedTexture,at=R.image[0]&&R.image[0].isDataTexture,Me=[];for(let Ce=0;Ce<6;Ce++)!je&&!at?Me[Ce]=v(R.image[Ce],!1,!0,s.maxCubemapSize):Me[Ce]=at?R.image[Ce].image:R.image[Ce],Me[Ce]=De(R,Me[Ce]);let xt=Me[0],ft=g(xt)||o,ht=r.convert(R.format,R.colorSpace),ot=r.convert(R.type),Ge=E(R.internalFormat,ht,ot,R.colorSpace),rt=o&&R.isVideoTexture!==!0,_t=Ee.__version===void 0||fe===!0,Vt=I(R,xt,ft);ce(i.TEXTURE_CUBE_MAP,R,ft);let pt;if(je){rt&&_t&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Vt,Ge,xt.width,xt.height);for(let Ce=0;Ce<6;Ce++){pt=Me[Ce].mipmaps;for(let Y=0;Y<pt.length;Y++){let He=pt[Y];R.format!==$n?ht!==null?rt?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Y,0,0,He.width,He.height,ht,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Y,Ge,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Y,0,0,He.width,He.height,ht,ot,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Y,Ge,He.width,He.height,0,ht,ot,He.data)}}}else{pt=R.mipmaps,rt&&_t&&(pt.length>0&&Vt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Vt,Ge,Me[0].width,Me[0].height));for(let Ce=0;Ce<6;Ce++)if(at){rt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Me[Ce].width,Me[Ce].height,ht,ot,Me[Ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Ge,Me[Ce].width,Me[Ce].height,0,ht,ot,Me[Ce].data);for(let Y=0;Y<pt.length;Y++){let ke=pt[Y].image[Ce].image;rt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Y+1,0,0,ke.width,ke.height,ht,ot,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Y+1,Ge,ke.width,ke.height,0,ht,ot,ke.data)}}else{rt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,ht,ot,Me[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Ge,ht,ot,Me[Ce]);for(let Y=0;Y<pt.length;Y++){let He=pt[Y];rt?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Y+1,0,0,ht,ot,He.image[Ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Y+1,Ge,ht,ot,He.image[Ce])}}}M(R,ft)&&_(i.TEXTURE_CUBE_MAP),Ee.__version=be.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function Be(L,R,te,fe,be,Ee){let Xe=r.convert(te.format,te.colorSpace),Ne=r.convert(te.type),Ue=E(te.internalFormat,Xe,Ne,te.colorSpace);if(!n.get(R).__hasExternalTextures){let at=Math.max(1,R.width>>Ee),Me=Math.max(1,R.height>>Ee);be===i.TEXTURE_3D||be===i.TEXTURE_2D_ARRAY?t.texImage3D(be,Ee,Ue,at,Me,R.depth,0,Xe,Ne,null):t.texImage2D(be,Ee,Ue,at,Me,0,Xe,Ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),ae(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,fe,be,n.get(te).__webglTexture,0,Pe(R)):(be===i.TEXTURE_2D||be>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,fe,be,n.get(te).__webglTexture,Ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(L,R,te){if(i.bindRenderbuffer(i.RENDERBUFFER,L),R.depthBuffer&&!R.stencilBuffer){let fe=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(te||ae(R)){let be=R.depthTexture;be&&be.isDepthTexture&&(be.type===Ki?fe=i.DEPTH_COMPONENT32F:be.type===Ji&&(fe=i.DEPTH_COMPONENT24));let Ee=Pe(R);ae(R)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,fe,R.width,R.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,fe,R.width,R.height)}else i.renderbufferStorage(i.RENDERBUFFER,fe,R.width,R.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,L)}else if(R.depthBuffer&&R.stencilBuffer){let fe=Pe(R);te&&ae(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,i.DEPTH24_STENCIL8,R.width,R.height):ae(R)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,i.DEPTH24_STENCIL8,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,L)}else{let fe=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let be=0;be<fe.length;be++){let Ee=fe[be],Xe=r.convert(Ee.format,Ee.colorSpace),Ne=r.convert(Ee.type),Ue=E(Ee.internalFormat,Xe,Ne,Ee.colorSpace),je=Pe(R);te&&ae(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,Ue,R.width,R.height):ae(R)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,Ue,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),X(R.depthTexture,0);let fe=n.get(R.depthTexture).__webglTexture,be=Pe(R);if(R.depthTexture.format===Es)ae(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0);else if(R.depthTexture.format===cr)ae(R)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function We(L){let R=n.get(L),te=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Oe(R.__webglFramebuffer,L)}else if(te){R.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[fe]),R.__webglDepthbuffer[fe]=i.createRenderbuffer(),it(R.__webglDepthbuffer[fe],L,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=i.createRenderbuffer(),it(R.__webglDepthbuffer,L,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(L,R,te){let fe=n.get(L);R!==void 0&&Be(fe.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),te!==void 0&&We(L)}function H(L){let R=L.texture,te=n.get(L),fe=n.get(R);L.addEventListener("dispose",F),L.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture()),fe.__version=R.version,a.memory.textures++);let be=L.isWebGLCubeRenderTarget===!0,Ee=L.isWebGLMultipleRenderTargets===!0,Xe=g(L)||o;if(be){te.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(o&&R.mipmaps&&R.mipmaps.length>0){te.__webglFramebuffer[Ne]=[];for(let Ue=0;Ue<R.mipmaps.length;Ue++)te.__webglFramebuffer[Ne][Ue]=i.createFramebuffer()}else te.__webglFramebuffer[Ne]=i.createFramebuffer()}else{if(o&&R.mipmaps&&R.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ne=0;Ne<R.mipmaps.length;Ne++)te.__webglFramebuffer[Ne]=i.createFramebuffer()}else te.__webglFramebuffer=i.createFramebuffer();if(Ee)if(s.drawBuffers){let Ne=L.texture;for(let Ue=0,je=Ne.length;Ue<je;Ue++){let at=n.get(Ne[Ue]);at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&ae(L)===!1){let Ne=Ee?R:[R];te.__webglMultisampledFramebuffer=i.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Ne.length;Ue++){let je=Ne[Ue];te.__webglColorRenderbuffer[Ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,te.__webglColorRenderbuffer[Ue]);let at=r.convert(je.format,je.colorSpace),Me=r.convert(je.type),xt=E(je.internalFormat,at,Me,je.colorSpace,L.isXRRenderTarget===!0),ft=Pe(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,xt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,te.__webglColorRenderbuffer[Ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(te.__webglDepthRenderbuffer=i.createRenderbuffer(),it(te.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,fe.__webglTexture),ce(i.TEXTURE_CUBE_MAP,R,Xe);for(let Ne=0;Ne<6;Ne++)if(o&&R.mipmaps&&R.mipmaps.length>0)for(let Ue=0;Ue<R.mipmaps.length;Ue++)Be(te.__webglFramebuffer[Ne][Ue],L,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ue);else Be(te.__webglFramebuffer[Ne],L,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);M(R,Xe)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){let Ne=L.texture;for(let Ue=0,je=Ne.length;Ue<je;Ue++){let at=Ne[Ue],Me=n.get(at);t.bindTexture(i.TEXTURE_2D,Me.__webglTexture),ce(i.TEXTURE_2D,at,Xe),Be(te.__webglFramebuffer,L,at,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,0),M(at,Xe)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ne=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?Ne=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ne,fe.__webglTexture),ce(Ne,R,Xe),o&&R.mipmaps&&R.mipmaps.length>0)for(let Ue=0;Ue<R.mipmaps.length;Ue++)Be(te.__webglFramebuffer[Ue],L,R,i.COLOR_ATTACHMENT0,Ne,Ue);else Be(te.__webglFramebuffer,L,R,i.COLOR_ATTACHMENT0,Ne,0);M(R,Xe)&&_(Ne),t.unbindTexture()}L.depthBuffer&&We(L)}function Te(L){let R=g(L)||o,te=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let fe=0,be=te.length;fe<be;fe++){let Ee=te[fe];if(M(Ee,R)){let Xe=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ne=n.get(Ee).__webglTexture;t.bindTexture(Xe,Ne),_(Xe),t.unbindTexture()}}}function me(L){if(o&&L.samples>0&&ae(L)===!1){let R=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],te=L.width,fe=L.height,be=i.COLOR_BUFFER_BIT,Ee=[],Xe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ne=n.get(L),Ue=L.isWebGLMultipleRenderTargets===!0;if(Ue)for(let je=0;je<R.length;je++)t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let je=0;je<R.length;je++){Ee.push(i.COLOR_ATTACHMENT0+je),L.depthBuffer&&Ee.push(Xe);let at=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;if(at===!1&&(L.depthBuffer&&(be|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&(be|=i.STENCIL_BUFFER_BIT)),Ue&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[je]),at===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Xe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Xe])),Ue){let Me=n.get(R[je]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Me,0)}i.blitFramebuffer(0,0,te,fe,0,0,te,fe,be,i.NEAREST),h&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ue)for(let je=0;je<R.length;je++){t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.RENDERBUFFER,Ne.__webglColorRenderbuffer[je]);let at=n.get(R[je]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ne.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+je,i.TEXTURE_2D,at,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}}function Pe(L){return Math.min(s.maxSamples,L.samples)}function ae(L){let R=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function $e(L){let R=a.render.frame;u.get(L)!==R&&(u.set(L,R),L.update())}function De(L,R){let te=L.colorSpace,fe=L.format,be=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Hl||te!==Ni&&te!==si&&(Ht.getTransfer(te)===Yt?o===!1?e.has("EXT_sRGB")===!0&&fe===$n?(L.format=Hl,L.minFilter=ii,L.generateMipmaps=!1):R=io.sRGBToLinear(R):(fe!==$n||be!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),R}this.allocateTextureUnit=N,this.resetTextureUnits=j,this.setTexture2D=X,this.setTexture2DArray=ne,this.setTexture3D=D,this.setTextureCube=$,this.rebindTextures=nt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=ae}function gx(i,e,t){let n=t.isWebGL2;function s(r,a=si){let o,l=Ht.getTransfer(a);if(r===ji)return i.UNSIGNED_BYTE;if(r===Iu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Lu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===hf)return i.BYTE;if(r===uf)return i.SHORT;if(r===Lc)return i.UNSIGNED_SHORT;if(r===Pu)return i.INT;if(r===Ji)return i.UNSIGNED_INT;if(r===Ki)return i.FLOAT;if(r===pi)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===df)return i.ALPHA;if(r===$n)return i.RGBA;if(r===ff)return i.LUMINANCE;if(r===pf)return i.LUMINANCE_ALPHA;if(r===Es)return i.DEPTH_COMPONENT;if(r===cr)return i.DEPTH_STENCIL;if(r===Hl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===mf)return i.RED;if(r===Du)return i.RED_INTEGER;if(r===gf)return i.RG;if(r===Uu)return i.RG_INTEGER;if(r===zu)return i.RGBA_INTEGER;if(r===Qo||r===el||r===tl||r===nl)if(l===Yt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Qo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===el)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Qo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===el)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===eh||r===th||r===nh||r===ih)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===eh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===th)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ih)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===sh||r===rh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===sh)return l===Yt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===rh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ah||r===oh||r===lh||r===ch||r===hh||r===uh||r===dh||r===fh||r===ph||r===mh||r===gh||r===xh||r===yh||r===vh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ah)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ch)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ph)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vh)return l===Yt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===il||r===_h||r===Mh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===il)return l===Yt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_h)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xf||r===bh||r===wh||r===Sh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===il)return o.COMPRESSED_RED_RGTC1_EXT;if(r===bh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ss?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var tc=class extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},mt=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},xx={type:"move"},Gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),m=this._getHandJoint(h,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],p=u.position.distanceTo(f.position),d=.02,y=.005;h.inputState.pinching&&p>d+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=d-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xx)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nc=class extends ts{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,h=null,u=null,f=null,p=null,d=null,y=null,v=t.getContextAttributes(),g=null,m=null,M=[],_=[],E=new Re,I=null,P=new wn;P.layers.enable(1),P.viewport=new nn;let A=new wn;A.layers.enable(2),A.viewport=new nn;let F=[P,A],T=new tc;T.layers.enable(1),T.layers.enable(2);let x=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let ve=M[ce];return ve===void 0&&(ve=new Gr,M[ce]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ce){let ve=M[ce];return ve===void 0&&(ve=new Gr,M[ce]=ve),ve.getGripSpace()},this.getHand=function(ce){let ve=M[ce];return ve===void 0&&(ve=new Gr,M[ce]=ve),ve.getHandSpace()};function O(ce){let ve=_.indexOf(ce.inputSource);if(ve===-1)return;let Ae=M[ve];Ae!==void 0&&(Ae.update(ce.inputSource,ce.frame,h||a),Ae.dispatchEvent({type:ce.type,data:ce.inputSource}))}function j(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",N);for(let ce=0;ce<M.length;ce++){let ve=_[ce];ve!==null&&(_[ce]=null,M[ce].disconnect(ve))}x=null,k=null,e.setRenderTarget(g),d=null,p=null,f=null,s=null,m=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){r=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){o=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ce){h=ce},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(ce){if(s=ce,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",j),s.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ve={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),m=new Fn(d.framebufferWidth,d.framebufferHeight,{format:$n,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ve=null,Ae=null,Ke=null;v.depth&&(Ke=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=v.stencil?cr:Es,Ae=v.stencil?Ss:Ji);let Be={colorFormat:t.RGBA8,depthFormat:Ke,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(Be),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),m=new Fn(p.textureWidth,p.textureHeight,{format:$n,type:ji,depthTexture:new fo(p.textureWidth,p.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let it=e.properties.get(m);it.__ignoreDepthValues=p.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await s.requestReferenceSpace(o),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(ce){for(let ve=0;ve<ce.removed.length;ve++){let Ae=ce.removed[ve],Ke=_.indexOf(Ae);Ke>=0&&(_[Ke]=null,M[Ke].disconnect(Ae))}for(let ve=0;ve<ce.added.length;ve++){let Ae=ce.added[ve],Ke=_.indexOf(Ae);if(Ke===-1){for(let it=0;it<M.length;it++)if(it>=_.length){_.push(Ae),Ke=it;break}else if(_[it]===null){_[it]=Ae,Ke=it;break}if(Ke===-1)break}let Be=M[Ke];Be&&Be.connect(Ae)}}let b=new V,X=new V;function ne(ce,ve,Ae){b.setFromMatrixPosition(ve.matrixWorld),X.setFromMatrixPosition(Ae.matrixWorld);let Ke=b.distanceTo(X),Be=ve.projectionMatrix.elements,it=Ae.projectionMatrix.elements,Oe=Be[14]/(Be[10]-1),We=Be[14]/(Be[10]+1),nt=(Be[9]+1)/Be[5],H=(Be[9]-1)/Be[5],Te=(Be[8]-1)/Be[0],me=(it[8]+1)/it[0],Pe=Oe*Te,ae=Oe*me,$e=Ke/(-Te+me),De=$e*-Te;ve.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(De),ce.translateZ($e),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert();let L=Oe+$e,R=We+$e,te=Pe-De,fe=ae+(Ke-De),be=nt*We/R*L,Ee=H*We/R*L;ce.projectionMatrix.makePerspective(te,fe,be,Ee,L,R),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}function D(ce,ve){ve===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(ve.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(s===null)return;T.near=A.near=P.near=ce.near,T.far=A.far=P.far=ce.far,(x!==T.near||k!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),x=T.near,k=T.far);let ve=ce.parent,Ae=T.cameras;D(T,ve);for(let Ke=0;Ke<Ae.length;Ke++)D(Ae[Ke],ve);Ae.length===2?ne(T,P,A):T.projectionMatrix.copy(P.projectionMatrix),$(ce,T,ve)};function $(ce,ve,Ae){Ae===null?ce.matrix.copy(ve.matrixWorld):(ce.matrix.copy(Ae.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(ve.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(ve.projectionMatrix),ce.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=to*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(ce){l=ce,p!==null&&(p.fixedFoveation=ce),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ce)};let we=null;function de(ce,ve){if(u=ve.getViewerPose(h||a),y=ve,u!==null){let Ae=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let Ke=!1;Ae.length!==T.cameras.length&&(T.cameras.length=0,Ke=!0);for(let Be=0;Be<Ae.length;Be++){let it=Ae[Be],Oe=null;if(d!==null)Oe=d.getViewport(it);else{let nt=f.getViewSubImage(p,it);Oe=nt.viewport,Be===0&&(e.setRenderTargetTextures(m,nt.colorTexture,p.ignoreDepthValues?void 0:nt.depthStencilTexture),e.setRenderTarget(m))}let We=F[Be];We===void 0&&(We=new wn,We.layers.enable(Be),We.viewport=new nn,F[Be]=We),We.matrix.fromArray(it.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(it.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Be===0&&(T.matrix.copy(We.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ke===!0&&T.cameras.push(We)}}for(let Ae=0;Ae<M.length;Ae++){let Ke=_[Ae],Be=M[Ae];Ke!==null&&Be!==void 0&&Be.update(Ke,ve,h||a)}we&&we(ce,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),y=null}let Le=new Gu;Le.setAnimationLoop(de),this.setAnimationLoop=function(ce){we=ce},this.dispose=function(){}}};function yx(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Hu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,_,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),p(g,m),m.isMeshPhysicalMaterial&&d(g,m,E)):m.isMeshMatcapMaterial?(r(g,m),y(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,_):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===mn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===mn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=e.get(m).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*_,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function p(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){let M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vx(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){let E=_.program;n.uniformBlockBinding(M,E)}function h(M,_){let E=s[M.id];E===void 0&&(y(M),E=u(M),s[M.id]=E,M.addEventListener("dispose",g));let I=_.program;n.updateUBOMapping(M,I);let P=e.render.frame;r[M.id]!==P&&(p(M),r[M.id]=P)}function u(M){let _=f();M.__bindingPointIndex=_;let E=i.createBuffer(),I=M.__size,P=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,I,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,E),E}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){let _=s[M.id],E=M.uniforms,I=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let P=0,A=E.length;P<A;P++){let F=Array.isArray(E[P])?E[P]:[E[P]];for(let T=0,x=F.length;T<x;T++){let k=F[T];if(d(k,P,T,I)===!0){let O=k.__offset,j=Array.isArray(k.value)?k.value:[k.value],N=0;for(let b=0;b<j.length;b++){let X=j[b],ne=v(X);typeof X=="number"||typeof X=="boolean"?(k.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,O+N,k.__data)):X.isMatrix3?(k.__data[0]=X.elements[0],k.__data[1]=X.elements[1],k.__data[2]=X.elements[2],k.__data[3]=0,k.__data[4]=X.elements[3],k.__data[5]=X.elements[4],k.__data[6]=X.elements[5],k.__data[7]=0,k.__data[8]=X.elements[6],k.__data[9]=X.elements[7],k.__data[10]=X.elements[8],k.__data[11]=0):(X.toArray(k.__data,N),N+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,_,E,I){let P=M.value,A=_+"_"+E;if(I[A]===void 0)return typeof P=="number"||typeof P=="boolean"?I[A]=P:I[A]=P.clone(),!0;{let F=I[A];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return I[A]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function y(M){let _=M.uniforms,E=0,I=16;for(let A=0,F=_.length;A<F;A++){let T=Array.isArray(_[A])?_[A]:[_[A]];for(let x=0,k=T.length;x<k;x++){let O=T[x],j=Array.isArray(O.value)?O.value:[O.value];for(let N=0,b=j.length;N<b;N++){let X=j[N],ne=v(X),D=E%I;D!==0&&I-D<ne.boundary&&(E+=I-D),O.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=ne.storage}}}let P=E%I;return P>0&&(E+=I-P),M.__size=E,M.__cache={},this}function v(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){let _=M.target;_.removeEventListener("dispose",g);let E=a.indexOf(_.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:h,dispose:m}}var As=class{constructor(e={}){let{canvas:t=Cf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;let d=new Uint32Array(4),y=new Int32Array(4),v=null,g=null,m=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this._useLegacyLights=!1,this.toneMapping=wi,this.toneMappingExposure=1;let _=this,E=!1,I=0,P=0,A=null,F=-1,T=null,x=new nn,k=new nn,O=null,j=new st(0),N=0,b=t.width,X=t.height,ne=1,D=null,$=null,we=new nn(0,0,b,X),de=new nn(0,0,b,X),Le=!1,ce=new Yr,ve=!1,Ae=!1,Ke=null,Be=new Nt,it=new Re,Oe=new V,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return A===null?ne:1}let H=n;function Te(C,W){for(let Z=0;Z<C.length;Z++){let J=C[Z],ie=t.getContext(J,W);if(ie!==null)return ie}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",He,!1),H===null){let W=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&W.shift(),H=Te(W,C),H===null)throw Te(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let me,Pe,ae,$e,De,L,R,te,fe,be,Ee,Xe,Ne,Ue,je,at,Me,xt,ft,ht,ot,Ge,rt,_t;function Vt(){me=new km(H),Pe=new Lm(H,me,e),me.init(Pe),Ge=new gx(H,me,Pe),ae=new px(H,me,Pe),$e=new Hm(H),De=new nx,L=new mx(H,me,ae,De,Pe,Ge,$e),R=new Um(_),te=new Om(_),fe=new Jf(H,Pe),rt=new Pm(H,me,fe,Pe),be=new Fm(H,fe,$e,rt),Ee=new Xm(H,be,fe,$e),ft=new Wm(H,Pe,L),at=new Dm(De),Xe=new tx(_,R,te,me,Pe,rt,at),Ne=new yx(_,De),Ue=new sx,je=new hx(me,Pe),xt=new Cm(_,R,te,ae,Ee,p,l),Me=new fx(_,Ee,Pe),_t=new vx(H,$e,Pe,ae),ht=new Im(H,me,$e,Pe),ot=new Bm(H,me,$e,Pe),$e.programs=Xe.programs,_.capabilities=Pe,_.extensions=me,_.properties=De,_.renderLists=Ue,_.shadowMap=Me,_.state=ae,_.info=$e}Vt();let pt=new nc(_,H);this.xr=pt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let C=me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(C){C!==void 0&&(ne=C,this.setSize(b,X,!1))},this.getSize=function(C){return C.set(b,X)},this.setSize=function(C,W,Z=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=C,X=W,t.width=Math.floor(C*ne),t.height=Math.floor(W*ne),Z===!0&&(t.style.width=C+"px",t.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(b*ne,X*ne).floor()},this.setDrawingBufferSize=function(C,W,Z){b=C,X=W,ne=Z,t.width=Math.floor(C*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(x)},this.getViewport=function(C){return C.copy(we)},this.setViewport=function(C,W,Z,J){C.isVector4?we.set(C.x,C.y,C.z,C.w):we.set(C,W,Z,J),ae.viewport(x.copy(we).multiplyScalar(ne).floor())},this.getScissor=function(C){return C.copy(de)},this.setScissor=function(C,W,Z,J){C.isVector4?de.set(C.x,C.y,C.z,C.w):de.set(C,W,Z,J),ae.scissor(k.copy(de).multiplyScalar(ne).floor())},this.getScissorTest=function(){return Le},this.setScissorTest=function(C){ae.setScissorTest(Le=C)},this.setOpaqueSort=function(C){D=C},this.setTransparentSort=function(C){$=C},this.getClearColor=function(C){return C.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(C=!0,W=!0,Z=!0){let J=0;if(C){let ie=!1;if(A!==null){let ue=A.texture.format;ie=ue===zu||ue===Uu||ue===Du}if(ie){let ue=A.texture.type,_e=ue===ji||ue===Ji||ue===Lc||ue===Ss||ue===Iu||ue===Lu,qe=xt.getClearColor(),Fe=xt.getClearAlpha(),Ze=qe.r,tt=qe.g,z=qe.b;_e?(d[0]=Ze,d[1]=tt,d[2]=z,d[3]=Fe,H.clearBufferuiv(H.COLOR,0,d)):(y[0]=Ze,y[1]=tt,y[2]=z,y[3]=Fe,H.clearBufferiv(H.COLOR,0,y))}else J|=H.COLOR_BUFFER_BIT}W&&(J|=H.DEPTH_BUFFER_BIT),Z&&(J|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",He,!1),Ue.dispose(),je.dispose(),De.dispose(),R.dispose(),te.dispose(),Ee.dispose(),rt.dispose(),_t.dispose(),Xe.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",kt),pt.removeEventListener("sessionend",bt),Ke&&(Ke.dispose(),Ke=null),Wt.stop()};function Ce(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let C=$e.autoReset,W=Me.enabled,Z=Me.autoUpdate,J=Me.needsUpdate,ie=Me.type;Vt(),$e.autoReset=C,Me.enabled=W,Me.autoUpdate=Z,Me.needsUpdate=J,Me.type=ie}function He(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ke(C){let W=C.target;W.removeEventListener("dispose",ke),lt(W)}function lt(C){Qe(C),De.remove(C)}function Qe(C){let W=De.get(C).programs;W!==void 0&&(W.forEach(function(Z){Xe.releaseProgram(Z)}),C.isShaderMaterial&&Xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,Z,J,ie,ue){W===null&&(W=We);let _e=ie.isMesh&&ie.matrixWorld.determinant()<0,qe=B(C,W,Z,J,ie);ae.setMaterial(J,_e);let Fe=Z.index,Ze=1;if(J.wireframe===!0){if(Fe=be.getWireframeAttribute(Z),Fe===void 0)return;Ze=2}let tt=Z.drawRange,z=Z.attributes.position,se=tt.start*Ze,he=(tt.start+tt.count)*Ze;ue!==null&&(se=Math.max(se,ue.start*Ze),he=Math.min(he,(ue.start+ue.count)*Ze)),Fe!==null?(se=Math.max(se,0),he=Math.min(he,Fe.count)):z!=null&&(se=Math.max(se,0),he=Math.min(he,z.count));let pe=he-se;if(pe<0||pe===1/0)return;rt.setup(ie,J,qe,Z,Fe);let Ie,ge=ht;if(Fe!==null&&(Ie=fe.get(Fe),ge=ot,ge.setIndex(Ie)),ie.isMesh)J.wireframe===!0?(ae.setLineWidth(J.wireframeLinewidth*nt()),ge.setMode(H.LINES)):ge.setMode(H.TRIANGLES);else if(ie.isLine){let xe=J.linewidth;xe===void 0&&(xe=1),ae.setLineWidth(xe*nt()),ie.isLineSegments?ge.setMode(H.LINES):ie.isLineLoop?ge.setMode(H.LINE_LOOP):ge.setMode(H.LINE_STRIP)}else ie.isPoints?ge.setMode(H.POINTS):ie.isSprite&&ge.setMode(H.TRIANGLES);if(ie.isBatchedMesh)ge.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else if(ie.isInstancedMesh)ge.renderInstances(se,pe,ie.count);else if(Z.isInstancedBufferGeometry){let xe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ut=Math.min(Z.instanceCount,xe);ge.renderInstances(se,pe,ut)}else ge.render(se,pe)};function Et(C,W,Z){C.transparent===!0&&C.side===jt&&C.forceSinglePass===!1?(C.side=mn,C.needsUpdate=!0,Lt(C,W,Z),C.side=es,C.needsUpdate=!0,Lt(C,W,Z),C.side=jt):Lt(C,W,Z)}this.compile=function(C,W,Z=null){Z===null&&(Z=C),g=je.get(Z),g.init(),M.push(g),Z.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(g.pushLight(ie),ie.castShadow&&g.pushShadow(ie))}),C!==Z&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(g.pushLight(ie),ie.castShadow&&g.pushShadow(ie))}),g.setupLights(_._useLegacyLights);let J=new Set;return C.traverse(function(ie){let ue=ie.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){let qe=ue[_e];Et(qe,Z,ie),J.add(qe)}else Et(ue,Z,ie),J.add(ue)}),M.pop(),g=null,J},this.compileAsync=function(C,W,Z=null){let J=this.compile(C,W,Z);return new Promise(ie=>{function ue(){if(J.forEach(function(_e){De.get(_e).currentProgram.isReady()&&J.delete(_e)}),J.size===0){ie(C);return}setTimeout(ue,10)}me.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ut=null;function Tt(C){Ut&&Ut(C)}function kt(){Wt.stop()}function bt(){Wt.start()}let Wt=new Gu;Wt.setAnimationLoop(Tt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(C){Ut=C,pt.setAnimationLoop(C),C===null?Wt.stop():Wt.start()},pt.addEventListener("sessionstart",kt),pt.addEventListener("sessionend",bt),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(W),W=pt.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,W,A),g=je.get(C,M.length),g.init(),M.push(g),Be.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ce.setFromProjectionMatrix(Be),Ae=this.localClippingEnabled,ve=at.init(this.clippingPlanes,Ae),v=Ue.get(C,m.length),v.init(),m.push(v),At(C,W,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(D,$),this.info.render.frame++,ve===!0&&at.beginShadows();let Z=g.state.shadowsArray;if(Me.render(Z,C,W),ve===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset(),xt.render(v,C),g.setupLights(_._useLegacyLights),W.isArrayCamera){let J=W.cameras;for(let ie=0,ue=J.length;ie<ue;ie++){let _e=J[ie];Kt(v,C,_e,_e.viewport)}}else Kt(v,C,W);A!==null&&(L.updateMultisampleRenderTarget(A),L.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(_,C,W),rt.resetDefaultState(),F=-1,T=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function At(C,W,Z,J){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ce.intersectsSprite(C)){J&&Oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Be);let _e=Ee.update(C),qe=C.material;qe.visible&&v.push(C,_e,qe,Z,Oe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ce.intersectsObject(C))){let _e=Ee.update(C),qe=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Oe.copy(C.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Oe.copy(_e.boundingSphere.center)),Oe.applyMatrix4(C.matrixWorld).applyMatrix4(Be)),Array.isArray(qe)){let Fe=_e.groups;for(let Ze=0,tt=Fe.length;Ze<tt;Ze++){let z=Fe[Ze],se=qe[z.materialIndex];se&&se.visible&&v.push(C,_e,se,Z,Oe.z,z)}}else qe.visible&&v.push(C,_e,qe,Z,Oe.z,null)}}let ue=C.children;for(let _e=0,qe=ue.length;_e<qe;_e++)At(ue[_e],W,Z,J)}function Kt(C,W,Z,J){let ie=C.opaque,ue=C.transmissive,_e=C.transparent;g.setupLightsView(Z),ve===!0&&at.setGlobalState(_.clippingPlanes,Z),ue.length>0&&Pt(ie,ue,W,Z),J&&ae.viewport(x.copy(J)),ie.length>0&&cn(ie,W,Z),ue.length>0&&cn(ue,W,Z),_e.length>0&&cn(_e,W,Z),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Pt(C,W,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let ue=Pe.isWebGL2;Ke===null&&(Ke=new Fn(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")?pi:ji,minFilter:qr,samples:ue?4:0})),_.getDrawingBufferSize(it),ue?Ke.setSize(it.x,it.y):Ke.setSize(Gl(it.x),Gl(it.y));let _e=_.getRenderTarget();_.setRenderTarget(Ke),_.getClearColor(j),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear();let qe=_.toneMapping;_.toneMapping=wi,cn(C,Z,J),L.updateMultisampleRenderTarget(Ke),L.updateRenderTargetMipmap(Ke);let Fe=!1;for(let Ze=0,tt=W.length;Ze<tt;Ze++){let z=W[Ze],se=z.object,he=z.geometry,pe=z.material,Ie=z.group;if(pe.side===jt&&se.layers.test(J.layers)){let ge=pe.side;pe.side=mn,pe.needsUpdate=!0,Bt(se,Z,J,he,pe,Ie),pe.side=ge,pe.needsUpdate=!0,Fe=!0}}Fe===!0&&(L.updateMultisampleRenderTarget(Ke),L.updateRenderTargetMipmap(Ke)),_.setRenderTarget(_e),_.setClearColor(j,N),_.toneMapping=qe}function cn(C,W,Z){let J=W.isScene===!0?W.overrideMaterial:null;for(let ie=0,ue=C.length;ie<ue;ie++){let _e=C[ie],qe=_e.object,Fe=_e.geometry,Ze=J===null?_e.material:J,tt=_e.group;qe.layers.test(Z.layers)&&Bt(qe,W,Z,Fe,Ze,tt)}}function Bt(C,W,Z,J,ie,ue){C.onBeforeRender(_,W,Z,J,ie,ue),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(_,W,Z,J,C,ue),ie.transparent===!0&&ie.side===jt&&ie.forceSinglePass===!1?(ie.side=mn,ie.needsUpdate=!0,_.renderBufferDirect(Z,W,J,ie,C,ue),ie.side=es,ie.needsUpdate=!0,_.renderBufferDirect(Z,W,J,ie,C,ue),ie.side=jt):_.renderBufferDirect(Z,W,J,ie,C,ue),C.onAfterRender(_,W,Z,J,ie,ue)}function Lt(C,W,Z){W.isScene!==!0&&(W=We);let J=De.get(C),ie=g.state.lights,ue=g.state.shadowsArray,_e=ie.state.version,qe=Xe.getParameters(C,ie.state,ue,W,Z),Fe=Xe.getProgramCacheKey(qe),Ze=J.programs;J.environment=C.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(C.isMeshStandardMaterial?te:R).get(C.envMap||J.environment),Ze===void 0&&(C.addEventListener("dispose",ke),Ze=new Map,J.programs=Ze);let tt=Ze.get(Fe);if(tt!==void 0){if(J.currentProgram===tt&&J.lightsStateVersion===_e)return hn(C,qe),tt}else qe.uniforms=Xe.getUniforms(C),C.onBuild(Z,qe,_),C.onBeforeCompile(qe,_),tt=Xe.acquireProgram(qe,Fe),Ze.set(Fe,tt),J.uniforms=qe.uniforms;let z=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(z.clippingPlanes=at.uniform),hn(C,qe),J.needsLights=oe(C),J.lightsStateVersion=_e,J.needsLights&&(z.ambientLightColor.value=ie.state.ambient,z.lightProbe.value=ie.state.probe,z.directionalLights.value=ie.state.directional,z.directionalLightShadows.value=ie.state.directionalShadow,z.spotLights.value=ie.state.spot,z.spotLightShadows.value=ie.state.spotShadow,z.rectAreaLights.value=ie.state.rectArea,z.ltc_1.value=ie.state.rectAreaLTC1,z.ltc_2.value=ie.state.rectAreaLTC2,z.pointLights.value=ie.state.point,z.pointLightShadows.value=ie.state.pointShadow,z.hemisphereLights.value=ie.state.hemi,z.directionalShadowMap.value=ie.state.directionalShadowMap,z.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,z.spotShadowMap.value=ie.state.spotShadowMap,z.spotLightMatrix.value=ie.state.spotLightMatrix,z.spotLightMap.value=ie.state.spotLightMap,z.pointShadowMap.value=ie.state.pointShadowMap,z.pointShadowMatrix.value=ie.state.pointShadowMatrix),J.currentProgram=tt,J.uniformsList=null,tt}function zt(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=ar.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function hn(C,W){let Z=De.get(C);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function B(C,W,Z,J,ie){W.isScene!==!0&&(W=We),L.resetTextureUnits();let ue=W.fog,_e=J.isMeshStandardMaterial?W.environment:null,qe=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ni,Fe=(J.isMeshStandardMaterial?te:R).get(J.envMap||_e),Ze=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,tt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),z=!!Z.morphAttributes.position,se=!!Z.morphAttributes.normal,he=!!Z.morphAttributes.color,pe=wi;J.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pe=_.toneMapping);let Ie=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ge=Ie!==void 0?Ie.length:0,xe=De.get(J),ut=g.state.lights;if(ve===!0&&(Ae===!0||C!==T)){let Q=C===T&&J.id===F;at.setState(J,C,Q)}let dt=!1;J.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==ut.state.version||xe.outputColorSpace!==qe||ie.isBatchedMesh&&xe.batching===!1||!ie.isBatchedMesh&&xe.batching===!0||ie.isInstancedMesh&&xe.instancing===!1||!ie.isInstancedMesh&&xe.instancing===!0||ie.isSkinnedMesh&&xe.skinning===!1||!ie.isSkinnedMesh&&xe.skinning===!0||ie.isInstancedMesh&&xe.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&xe.instancingColor===!1&&ie.instanceColor!==null||xe.envMap!==Fe||J.fog===!0&&xe.fog!==ue||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==at.numPlanes||xe.numIntersection!==at.numIntersection)||xe.vertexAlphas!==Ze||xe.vertexTangents!==tt||xe.morphTargets!==z||xe.morphNormals!==se||xe.morphColors!==he||xe.toneMapping!==pe||Pe.isWebGL2===!0&&xe.morphTargetsCount!==ge)&&(dt=!0):(dt=!0,xe.__version=J.version);let Rt=xe.currentProgram;dt===!0&&(Rt=Lt(J,W,ie));let Dt=!1,$t=!1,c=!1,w=Rt.getUniforms(),S=xe.uniforms;if(ae.useProgram(Rt.program)&&(Dt=!0,$t=!0,c=!0),J.id!==F&&(F=J.id,$t=!0),Dt||T!==C){w.setValue(H,"projectionMatrix",C.projectionMatrix),w.setValue(H,"viewMatrix",C.matrixWorldInverse);let Q=w.map.cameraPosition;Q!==void 0&&Q.setValue(H,Oe.setFromMatrixPosition(C.matrixWorld)),Pe.logarithmicDepthBuffer&&w.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&w.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,$t=!0,c=!0)}if(ie.isSkinnedMesh){w.setOptional(H,ie,"bindMatrix"),w.setOptional(H,ie,"bindMatrixInverse");let Q=ie.skeleton;Q&&(Pe.floatVertexTextures?(Q.boneTexture===null&&Q.computeBoneTexture(),w.setValue(H,"boneTexture",Q.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ie.isBatchedMesh&&(w.setOptional(H,ie,"batchingTexture"),w.setValue(H,"batchingTexture",ie._matricesTexture,L));let U=Z.morphAttributes;if((U.position!==void 0||U.normal!==void 0||U.color!==void 0&&Pe.isWebGL2===!0)&&ft.update(ie,Z,Rt),($t||xe.receiveShadow!==ie.receiveShadow)&&(xe.receiveShadow=ie.receiveShadow,w.setValue(H,"receiveShadow",ie.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(S.envMap.value=Fe,S.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),$t&&(w.setValue(H,"toneMappingExposure",_.toneMappingExposure),xe.needsLights&&ee(S,c),ue&&J.fog===!0&&Ne.refreshFogUniforms(S,ue),Ne.refreshMaterialUniforms(S,J,ne,X,Ke),ar.upload(H,zt(xe),S,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ar.upload(H,zt(xe),S,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&w.setValue(H,"center",ie.center),w.setValue(H,"modelViewMatrix",ie.modelViewMatrix),w.setValue(H,"normalMatrix",ie.normalMatrix),w.setValue(H,"modelMatrix",ie.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Q=J.uniformsGroups;for(let G=0,K=Q.length;G<K;G++)if(Pe.isWebGL2){let q=Q[G];_t.update(q,Rt),_t.bind(q,Rt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rt}function ee(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function oe(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,W,Z){De.get(C.texture).__webglTexture=W,De.get(C.depthTexture).__webglTexture=Z;let J=De.get(C);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){let Z=De.get(C);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,Z=0){A=C,I=W,P=Z;let J=!0,ie=null,ue=!1,_e=!1;if(C){let Fe=De.get(C);Fe.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(H.FRAMEBUFFER,null),J=!1):Fe.__webglFramebuffer===void 0?L.setupRenderTarget(C):Fe.__hasExternalTextures&&L.rebindTextures(C,De.get(C.texture).__webglTexture,De.get(C.depthTexture).__webglTexture);let Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(_e=!0);let tt=De.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(tt[W])?ie=tt[W][Z]:ie=tt[W],ue=!0):Pe.isWebGL2&&C.samples>0&&L.useMultisampledRTT(C)===!1?ie=De.get(C).__webglMultisampledFramebuffer:Array.isArray(tt)?ie=tt[Z]:ie=tt,x.copy(C.viewport),k.copy(C.scissor),O=C.scissorTest}else x.copy(we).multiplyScalar(ne).floor(),k.copy(de).multiplyScalar(ne).floor(),O=Le;if(ae.bindFramebuffer(H.FRAMEBUFFER,ie)&&Pe.drawBuffers&&J&&ae.drawBuffers(C,ie),ae.viewport(x),ae.scissor(k),ae.setScissorTest(O),ue){let Fe=De.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Fe.__webglTexture,Z)}else if(_e){let Fe=De.get(C.texture),Ze=W||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Fe.__webglTexture,Z||0,Ze)}F=-1},this.readRenderTargetPixels=function(C,W,Z,J,ie,ue,_e){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=De.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&_e!==void 0&&(qe=qe[_e]),qe){ae.bindFramebuffer(H.FRAMEBUFFER,qe);try{let Fe=C.texture,Ze=Fe.format,tt=Fe.type;if(Ze!==$n&&Ge.convert(Ze)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let z=tt===pi&&(me.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&me.has("EXT_color_buffer_float"));if(tt!==ji&&Ge.convert(tt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(tt===Ki&&(Pe.isWebGL2||me.has("OES_texture_float")||me.has("WEBGL_color_buffer_float")))&&!z){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-J&&Z>=0&&Z<=C.height-ie&&H.readPixels(W,Z,J,ie,Ge.convert(Ze),Ge.convert(tt),ue)}finally{let Fe=A!==null?De.get(A).__webglFramebuffer:null;ae.bindFramebuffer(H.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(C,W,Z=0){let J=Math.pow(2,-Z),ie=Math.floor(W.image.width*J),ue=Math.floor(W.image.height*J);L.setTexture2D(W,0),H.copyTexSubImage2D(H.TEXTURE_2D,Z,0,0,C.x,C.y,ie,ue),ae.unbindTexture()},this.copyTextureToTexture=function(C,W,Z,J=0){let ie=W.image.width,ue=W.image.height,_e=Ge.convert(Z.format),qe=Ge.convert(Z.type);L.setTexture2D(Z,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment),W.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,J,C.x,C.y,ie,ue,_e,qe,W.image.data):W.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,J,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,_e,W.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,J,C.x,C.y,_e,qe,W.image),J===0&&Z.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(C,W,Z,J,ie=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ue=C.max.x-C.min.x+1,_e=C.max.y-C.min.y+1,qe=C.max.z-C.min.z+1,Fe=Ge.convert(J.format),Ze=Ge.convert(J.type),tt;if(J.isData3DTexture)L.setTexture3D(J,0),tt=H.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)L.setTexture2DArray(J,0),tt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,J.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,J.unpackAlignment);let z=H.getParameter(H.UNPACK_ROW_LENGTH),se=H.getParameter(H.UNPACK_IMAGE_HEIGHT),he=H.getParameter(H.UNPACK_SKIP_PIXELS),pe=H.getParameter(H.UNPACK_SKIP_ROWS),Ie=H.getParameter(H.UNPACK_SKIP_IMAGES),ge=Z.isCompressedTexture?Z.mipmaps[ie]:Z.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,ge.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ge.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,C.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,C.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,C.min.z),Z.isDataTexture||Z.isData3DTexture?H.texSubImage3D(tt,ie,W.x,W.y,W.z,ue,_e,qe,Fe,Ze,ge.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(tt,ie,W.x,W.y,W.z,ue,_e,qe,Fe,ge.data)):H.texSubImage3D(tt,ie,W.x,W.y,W.z,ue,_e,qe,Fe,Ze,ge),H.pixelStorei(H.UNPACK_ROW_LENGTH,z),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,se),H.pixelStorei(H.UNPACK_SKIP_PIXELS,he),H.pixelStorei(H.UNPACK_SKIP_ROWS,pe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ie),ie===0&&J.generateMipmaps&&H.generateMipmap(tt),ae.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),ae.unbindTexture()},this.resetState=function(){I=0,P=0,A=null,ae.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Dc?"display-p3":"srgb",t.unpackColorSpace=Ht.workingColorSpace===Do?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===tn?Ts:Ou}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ts?tn:Ni}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ic=class extends As{};ic.prototype.isWebGL1Renderer=!0;var po=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new st(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},as=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},mo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},On=new V,Zr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Di(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ki=class extends ri{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$s,zr=new V,js=new V,Qs=new V,er=new Re,Nr=new Re,Zu=new Nt,ka=new V,Or=new V,Fa=new V,pu=new Re,Cl=new Re,mu=new Re,os=class extends un{constructor(e=new ki){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new Xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mo(t,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new Zr(n,3,0,!1)),$s.setAttribute("uv",new Zr(n,2,3,!1))}this.geometry=$s,this.material=e,this.center=new Re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),js.setFromMatrixScale(this.matrixWorld),Zu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&js.multiplyScalar(-Qs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ba(ka.set(-.5,-.5,0),Qs,a,js,s,r),Ba(Or.set(.5,-.5,0),Qs,a,js,s,r),Ba(Fa.set(.5,.5,0),Qs,a,js,s,r),pu.set(0,0),Cl.set(1,0),mu.set(1,1);let o=e.ray.intersectTriangle(ka,Or,Fa,!1,zr);if(o===null&&(Ba(Or.set(-.5,.5,0),Qs,a,js,s,r),Cl.set(0,1),o=e.ray.intersectTriangle(ka,Fa,Or,!1,zr),o===null))return;let l=e.ray.origin.distanceTo(zr);l<e.near||l>e.far||t.push({distance:l,point:zr.clone(),uv:ws.getInterpolation(zr,ka,Or,Fa,pu,Cl,mu,new Re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ba(i,e,t,n,s,r){er.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Nr.x=r*er.x-s*er.y,Nr.y=s*er.x+r*er.y):Nr.copy(er),i.copy(e),i.x+=Nr.x,i.y+=Nr.y,i.applyMatrix4(Zu)}var go=class extends jn{constructor(e=null,t=1,n=1,s,r,a,o,l,h=bn,u=bn,f,p){super(null,a,o,l,h,u,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jr=class extends gn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},tr=new Nt,gu=new Nt,Ha=[],xu=new Oi,_x=new Nt,kr=new ze,Fr=new ns,xo=class extends ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_x)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,tr),xu.copy(e.boundingBox).applyMatrix4(tr),this.boundingBox.union(xu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ns),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,tr),Fr.copy(e.boundingSphere).applyMatrix4(tr),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,tr),gu.multiplyMatrices(n,tr),kr.matrixWorld=gu,kr.raycast(e,Ha);for(let a=0,o=Ha.length;a<o;a++){let l=Ha[a];l.instanceId=r,l.object=this,t.push(l)}Ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jr(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Kr=class extends ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yu=new Nt,sc=new ao,Ga=new ns,Va=new V,yo=class extends un{constructor(e=new Xt,t=new Kr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;yu.copy(s).invert(),sc.copy(e.ray).applyMatrix4(yu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let y=p,v=d;y<v;y++){let g=h.getX(y);Va.fromBufferAttribute(f,g),vu(Va,g,l,s,e,t,this)}}else{let p=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let y=p,v=d;y<v;y++)Va.fromBufferAttribute(f,y),vu(Va,y,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function vu(i,e,t,n,s,r,a){let o=sc.distanceSqToPoint(i);if(o<t){let l=new V;sc.closestPointToPoint(i,l),l.applyMatrix4(n);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Wn=class extends jn{constructor(e,t,n,s,r,a,o,l,h){super(e,t,n,s,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,h;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,d=(a-u)/p;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Re:new V);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new V,s=[],r=[],a=[],o=new V,l=new Nt;for(let d=0;d<=e;d++){let y=d/e;s[d]=this.getTangentAt(y,new V)}r[0]=new V,a[0]=new V;let h=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=h&&(h=u,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),p<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos(Un(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,y))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Un(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let y=1;y<=e;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],d*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$r=class extends ai{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new Re,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,d=h-this.aY;l=p*u-d*f+this.aX,h=p*f+d*u+this.aY}return n.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},rc=class extends $r{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function zc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){s(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,u,f){let p=(a-r)/h-(o-r)/(h+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;p*=u,d*=u,s(a,o,p,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Wa=new V,Pl=new zc,Il=new zc,Ll=new zc,ac=class extends ai{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new V){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let h,u;this.closed||o>0?h=s[(o-1)%r]:(Wa.subVectors(s[0],s[1]).add(s[0]),h=Wa);let f=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Wa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Wa),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,y=Math.pow(h.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(p),d),g=Math.pow(p.distanceToSquared(u),d);v<1e-4&&(v=1),y<1e-4&&(y=v),g<1e-4&&(g=v),Pl.initNonuniformCatmullRom(h.x,f.x,p.x,u.x,y,v,g),Il.initNonuniformCatmullRom(h.y,f.y,p.y,u.y,y,v,g),Ll.initNonuniformCatmullRom(h.z,f.z,p.z,u.z,y,v,g)}else this.curveType==="catmullrom"&&(Pl.initCatmullRom(h.x,f.x,p.x,u.x,this.tension),Il.initCatmullRom(h.y,f.y,p.y,u.y,this.tension),Ll.initCatmullRom(h.z,f.z,p.z,u.z,this.tension));return n.set(Pl.calc(l),Il.calc(l),Ll.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new V().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function _u(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Mx(i,e){let t=1-i;return t*t*e}function bx(i,e){return 2*(1-i)*i*e}function wx(i,e){return i*i*e}function Vr(i,e,t,n){return Mx(i,e)+bx(i,t)+wx(i,n)}function Sx(i,e){let t=1-i;return t*t*t*e}function Ex(i,e){let t=1-i;return 3*t*t*i*e}function Tx(i,e){return 3*(1-i)*i*i*e}function Ax(i,e){return i*i*i*e}function Wr(i,e,t,n,s){return Sx(i,e)+Ex(i,t)+Tx(i,n)+Ax(i,s)}var vo=class extends ai{constructor(e=new Re,t=new Re,n=new Re,s=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Re){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Wr(e,s.x,r.x,a.x,o.x),Wr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oc=class extends ai{constructor(e=new V,t=new V,n=new V,s=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new V){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Wr(e,s.x,r.x,a.x,o.x),Wr(e,s.y,r.y,a.y,o.y),Wr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_o=class extends ai{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lc=class extends ai{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mo=class extends ai{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Vr(e,s.x,r.x,a.x),Vr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cc=class extends ai{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Vr(e,s.x,r.x,a.x),Vr(e,s.y,r.y,a.y),Vr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bo=class extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],h=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(_u(o,l.x,h.x,u.x,f.x),_u(o,l.y,h.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Re().fromArray(s))}return this}},hc=Object.freeze({__proto__:null,ArcCurve:rc,CatmullRomCurve3:ac,CubicBezierCurve:vo,CubicBezierCurve3:oc,EllipseCurve:$r,LineCurve:_o,LineCurve3:lc,QuadraticBezierCurve:Mo,QuadraticBezierCurve3:cc,SplineCurve:bo}),uc=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let h=0;h<l.length;h++){let u=l[h];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new hc[s.type]().fromJSON(s))}return this}},wo=class extends uc{constructor(e){super(),this.type="Path",this.currentPoint=new Re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new _o(this.currentPoint.clone(),new Re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Mo(this.currentPoint.clone(),new Re(e,t),new Re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new vo(this.currentPoint.clone(),new Re(e,t),new Re(n,s),new Re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new bo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+h,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let h=new $r(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);let u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Si=class i extends Xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],h=new V,u=new Re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){let d=n+f/t*s;h.x=e*Math.cos(d),h.y=e*Math.sin(d),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[p]/e+1)/2,u.y=(a[p+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Rn=class i extends Xt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],p=[],d=[],y=0,v=[],g=n/2,m=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new gt(f,3)),this.setAttribute("normal",new gt(p,3)),this.setAttribute("uv",new gt(d,2));function M(){let E=new V,I=new V,P=0,A=(t-e)/n;for(let F=0;F<=r;F++){let T=[],x=F/r,k=x*(t-e)+e;for(let O=0;O<=s;O++){let j=O/s,N=j*l+o,b=Math.sin(N),X=Math.cos(N);I.x=k*b,I.y=-x*n+g,I.z=k*X,f.push(I.x,I.y,I.z),E.set(b,A,X).normalize(),p.push(E.x,E.y,E.z),d.push(j,1-x),T.push(y++)}v.push(T)}for(let F=0;F<s;F++)for(let T=0;T<r;T++){let x=v[T][F],k=v[T+1][F],O=v[T+1][F+1],j=v[T][F+1];u.push(x,k,j),u.push(k,O,j),P+=6}h.addGroup(m,P,0),m+=P}function _(E){let I=y,P=new Re,A=new V,F=0,T=E===!0?e:t,x=E===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,g*x,0),p.push(0,x,0),d.push(.5,.5),y++;let k=y;for(let O=0;O<=s;O++){let N=O/s*l+o,b=Math.cos(N),X=Math.sin(N);A.x=T*X,A.y=g*x,A.z=T*b,f.push(A.x,A.y,A.z),p.push(0,x,0),P.x=b*.5+.5,P.y=X*.5*x+.5,d.push(P.x,P.y),y++}for(let O=0;O<s;O++){let j=I+O,N=k+O;E===!0?u.push(N,N+1,j):u.push(N+1,N,j),F+=3}h.addGroup(m,F,E===!0?1:2),m+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},yn=class i extends Rn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},So=class i extends Xt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),h(n),u(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let _=new V,E=new V,I=new V;for(let P=0;P<t.length;P+=3)d(t[P+0],_),d(t[P+1],E),d(t[P+2],I),l(_,E,I,M)}function l(M,_,E,I){let P=I+1,A=[];for(let F=0;F<=P;F++){A[F]=[];let T=M.clone().lerp(E,F/P),x=_.clone().lerp(E,F/P),k=P-F;for(let O=0;O<=k;O++)O===0&&F===P?A[F][O]=T:A[F][O]=T.clone().lerp(x,O/k)}for(let F=0;F<P;F++)for(let T=0;T<2*(P-F)-1;T++){let x=Math.floor(T/2);T%2===0?(p(A[F][x+1]),p(A[F+1][x]),p(A[F][x])):(p(A[F][x+1]),p(A[F+1][x+1]),p(A[F+1][x]))}}function h(M){let _=new V;for(let E=0;E<r.length;E+=3)_.x=r[E+0],_.y=r[E+1],_.z=r[E+2],_.normalize().multiplyScalar(M),r[E+0]=_.x,r[E+1]=_.y,r[E+2]=_.z}function u(){let M=new V;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let E=g(M)/2/Math.PI+.5,I=m(M)/Math.PI+.5;a.push(E,1-I)}y(),f()}function f(){for(let M=0;M<a.length;M+=6){let _=a[M+0],E=a[M+2],I=a[M+4],P=Math.max(_,E,I),A=Math.min(_,E,I);P>.9&&A<.1&&(_<.2&&(a[M+0]+=1),E<.2&&(a[M+2]+=1),I<.2&&(a[M+4]+=1))}}function p(M){r.push(M.x,M.y,M.z)}function d(M,_){let E=M*3;_.x=e[E+0],_.y=e[E+1],_.z=e[E+2]}function y(){let M=new V,_=new V,E=new V,I=new V,P=new Re,A=new Re,F=new Re;for(let T=0,x=0;T<r.length;T+=9,x+=6){M.set(r[T+0],r[T+1],r[T+2]),_.set(r[T+3],r[T+4],r[T+5]),E.set(r[T+6],r[T+7],r[T+8]),P.set(a[x+0],a[x+1]),A.set(a[x+2],a[x+3]),F.set(a[x+4],a[x+5]),I.copy(M).add(_).add(E).divideScalar(3);let k=g(I);v(P,x+0,M,k),v(A,x+2,_,k),v(F,x+4,E,k)}}function v(M,_,E,I){I<0&&M.x===1&&(a[_]=M.x-1),E.x===0&&E.z===0&&(a[_]=I/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Xn=class extends wo{constructor(e){super(e),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new wo().fromJSON(s))}return this}},Rx={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ju(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,h,u,f,p,d;if(n&&(r=Dx(i,e,r,t)),i.length>80*t){o=h=i[0],l=u=i[1];for(let y=t;y<s;y+=t)f=i[y],p=i[y+1],f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p);d=Math.max(h-o,u-l),d=d!==0?32767/d:0}return jr(r,a,t,o,l,d,0),a}};function Ju(i,e,t,n,s){let r,a;if(s===Wx(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Mu(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Mu(r,i[r],i[r+1],a);return a&&zo(a,a.next)&&(ea(a),a=a.next),a}function Rs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(zo(t,t.next)||an(t.prev,t,t.next)===0)){if(ea(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function jr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&kx(i,n,s,r);let o=i,l,h;for(;i.prev!==i.next;){if(l=i.prev,h=i.next,r?Px(i,n,s,r):Cx(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(h.i/t|0),ea(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=Ix(Rs(i),e,t),jr(i,e,t,n,s,r,2)):a===2&&Lx(i,e,t,n,s,r):jr(Rs(i),e,t,n,s,r,1);break}}}function Cx(i){let e=i.prev,t=i,n=i.next;if(an(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,h=n.y,u=s<r?s<a?s:a:r<a?r:a,f=o<l?o<h?o:h:l<h?l:h,p=s>r?s>a?s:a:r>a?r:a,d=o>l?o>h?o:h:l>h?l:h,y=n.next;for(;y!==e;){if(y.x>=u&&y.x<=p&&y.y>=f&&y.y<=d&&sr(s,o,r,l,a,h,y.x,y.y)&&an(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Px(i,e,t,n){let s=i.prev,r=i,a=i.next;if(an(s,r,a)>=0)return!1;let o=s.x,l=r.x,h=a.x,u=s.y,f=r.y,p=a.y,d=o<l?o<h?o:h:l<h?l:h,y=u<f?u<p?u:p:f<p?f:p,v=o>l?o>h?o:h:l>h?l:h,g=u>f?u>p?u:p:f>p?f:p,m=dc(d,y,e,t,n),M=dc(v,g,e,t,n),_=i.prevZ,E=i.nextZ;for(;_&&_.z>=m&&E&&E.z<=M;){if(_.x>=d&&_.x<=v&&_.y>=y&&_.y<=g&&_!==s&&_!==a&&sr(o,u,l,f,h,p,_.x,_.y)&&an(_.prev,_,_.next)>=0||(_=_.prevZ,E.x>=d&&E.x<=v&&E.y>=y&&E.y<=g&&E!==s&&E!==a&&sr(o,u,l,f,h,p,E.x,E.y)&&an(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=v&&_.y>=y&&_.y<=g&&_!==s&&_!==a&&sr(o,u,l,f,h,p,_.x,_.y)&&an(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;E&&E.z<=M;){if(E.x>=d&&E.x<=v&&E.y>=y&&E.y<=g&&E!==s&&E!==a&&sr(o,u,l,f,h,p,E.x,E.y)&&an(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Ix(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!zo(s,r)&&Ku(s,n,n.next,r)&&Qr(s,r)&&Qr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ea(n),ea(n.next),n=i=r),n=n.next}while(n!==i);return Rs(n)}function Lx(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Hx(a,o)){let l=$u(a,o);a=Rs(a,a.next),l=Rs(l,l.next),jr(a,e,t,n,s,r,0),jr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Dx(i,e,t,n){let s=[],r,a,o,l,h;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,h=Ju(i,o,l,n,!1),h===h.next&&(h.steiner=!0),s.push(Bx(h));for(s.sort(Ux),r=0;r<s.length;r++)t=zx(s[r],t);return t}function Ux(i,e){return i.x-e.x}function zx(i,e){let t=Nx(i,e);if(!t)return e;let n=$u(t,i);return Rs(n,n.next),Rs(t,t.next)}function Nx(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,h=s.y,u=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&sr(a<h?r:n,a,l,h,a<h?n:r,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(r-t.x),Qr(t,i)&&(f<u||f===u&&(t.x>s.x||t.x===s.x&&Ox(s,t)))&&(s=t,u=f)),t=t.next;while(t!==o);return s}function Ox(i,e){return an(i.prev,i,e.prev)<0&&an(e.next,i,i.next)<0}function kx(i,e,t,n){let s=i;do s.z===0&&(s.z=dc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Fx(s)}function Fx(i){let e,t,n,s,r,a,o,l,h=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<h&&(o++,n=n.nextZ,!!n);e++);for(l=h;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,h*=2}while(a>1);return i}function dc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Bx(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function sr(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Hx(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Gx(i,e)&&(Qr(i,e)&&Qr(e,i)&&Vx(i,e)&&(an(i.prev,i,e.prev)||an(i,e.prev,e))||zo(i,e)&&an(i.prev,i,i.next)>0&&an(e.prev,e,e.next)>0)}function an(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function zo(i,e){return i.x===e.x&&i.y===e.y}function Ku(i,e,t,n){let s=qa(an(i,e,t)),r=qa(an(i,e,n)),a=qa(an(t,n,i)),o=qa(an(t,n,e));return!!(s!==r&&a!==o||s===0&&Xa(i,t,e)||r===0&&Xa(i,n,e)||a===0&&Xa(t,i,n)||o===0&&Xa(t,e,n))}function Xa(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function qa(i){return i>0?1:i<0?-1:0}function Gx(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ku(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Qr(i,e){return an(i.prev,i,i.next)<0?an(i,e,i.next)>=0&&an(i,i.prev,e)>=0:an(i,e,i.prev)<0||an(i,i.next,e)<0}function Vx(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function $u(i,e){let t=new fc(i.i,i.x,i.y),n=new fc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Mu(i,e,t,n){let s=new fc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ea(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wx(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Qi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];bu(e),wu(n,e);let a=e.length;t.forEach(bu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,wu(n,t[l]);let o=Rx.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function bu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function wu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var dr=class i extends Xt{constructor(e=new Xn([new Re(.5,.5),new Re(-.5,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let h=e[o];a(h)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function a(o){let l=[],h=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Xx,_,E=!1,I,P,A,F;m&&(_=m.getSpacedPoints(u),E=!0,p=!1,I=m.computeFrenetFrames(u,!1),P=new V,A=new V,F=new V),p||(g=0,d=0,y=0,v=0);let T=o.extractPoints(h),x=T.shape,k=T.holes;if(!Qi.isClockWise(x)){x=x.reverse();for(let H=0,Te=k.length;H<Te;H++){let me=k[H];Qi.isClockWise(me)&&(k[H]=me.reverse())}}let j=Qi.triangulateShape(x,k),N=x;for(let H=0,Te=k.length;H<Te;H++){let me=k[H];x=x.concat(me)}function b(H,Te,me){return Te||console.error("THREE.ExtrudeGeometry: vec does not exist"),H.clone().addScaledVector(Te,me)}let X=x.length,ne=j.length;function D(H,Te,me){let Pe,ae,$e,De=H.x-Te.x,L=H.y-Te.y,R=me.x-H.x,te=me.y-H.y,fe=De*De+L*L,be=De*te-L*R;if(Math.abs(be)>Number.EPSILON){let Ee=Math.sqrt(fe),Xe=Math.sqrt(R*R+te*te),Ne=Te.x-L/Ee,Ue=Te.y+De/Ee,je=me.x-te/Xe,at=me.y+R/Xe,Me=((je-Ne)*te-(at-Ue)*R)/(De*te-L*R);Pe=Ne+De*Me-H.x,ae=Ue+L*Me-H.y;let xt=Pe*Pe+ae*ae;if(xt<=2)return new Re(Pe,ae);$e=Math.sqrt(xt/2)}else{let Ee=!1;De>Number.EPSILON?R>Number.EPSILON&&(Ee=!0):De<-Number.EPSILON?R<-Number.EPSILON&&(Ee=!0):Math.sign(L)===Math.sign(te)&&(Ee=!0),Ee?(Pe=-L,ae=De,$e=Math.sqrt(fe)):(Pe=De,ae=L,$e=Math.sqrt(fe/2))}return new Re(Pe/$e,ae/$e)}let $=[];for(let H=0,Te=N.length,me=Te-1,Pe=H+1;H<Te;H++,me++,Pe++)me===Te&&(me=0),Pe===Te&&(Pe=0),$[H]=D(N[H],N[me],N[Pe]);let we=[],de,Le=$.concat();for(let H=0,Te=k.length;H<Te;H++){let me=k[H];de=[];for(let Pe=0,ae=me.length,$e=ae-1,De=Pe+1;Pe<ae;Pe++,$e++,De++)$e===ae&&($e=0),De===ae&&(De=0),de[Pe]=D(me[Pe],me[$e],me[De]);we.push(de),Le=Le.concat(de)}for(let H=0;H<g;H++){let Te=H/g,me=d*Math.cos(Te*Math.PI/2),Pe=y*Math.sin(Te*Math.PI/2)+v;for(let ae=0,$e=N.length;ae<$e;ae++){let De=b(N[ae],$[ae],Pe);Be(De.x,De.y,-me)}for(let ae=0,$e=k.length;ae<$e;ae++){let De=k[ae];de=we[ae];for(let L=0,R=De.length;L<R;L++){let te=b(De[L],de[L],Pe);Be(te.x,te.y,-me)}}}let ce=y+v;for(let H=0;H<X;H++){let Te=p?b(x[H],Le[H],ce):x[H];E?(A.copy(I.normals[0]).multiplyScalar(Te.x),P.copy(I.binormals[0]).multiplyScalar(Te.y),F.copy(_[0]).add(A).add(P),Be(F.x,F.y,F.z)):Be(Te.x,Te.y,0)}for(let H=1;H<=u;H++)for(let Te=0;Te<X;Te++){let me=p?b(x[Te],Le[Te],ce):x[Te];E?(A.copy(I.normals[H]).multiplyScalar(me.x),P.copy(I.binormals[H]).multiplyScalar(me.y),F.copy(_[H]).add(A).add(P),Be(F.x,F.y,F.z)):Be(me.x,me.y,f/u*H)}for(let H=g-1;H>=0;H--){let Te=H/g,me=d*Math.cos(Te*Math.PI/2),Pe=y*Math.sin(Te*Math.PI/2)+v;for(let ae=0,$e=N.length;ae<$e;ae++){let De=b(N[ae],$[ae],Pe);Be(De.x,De.y,f+me)}for(let ae=0,$e=k.length;ae<$e;ae++){let De=k[ae];de=we[ae];for(let L=0,R=De.length;L<R;L++){let te=b(De[L],de[L],Pe);E?Be(te.x,te.y+_[u-1].y,_[u-1].x+me):Be(te.x,te.y,f+me)}}}ve(),Ae();function ve(){let H=s.length/3;if(p){let Te=0,me=X*Te;for(let Pe=0;Pe<ne;Pe++){let ae=j[Pe];it(ae[2]+me,ae[1]+me,ae[0]+me)}Te=u+g*2,me=X*Te;for(let Pe=0;Pe<ne;Pe++){let ae=j[Pe];it(ae[0]+me,ae[1]+me,ae[2]+me)}}else{for(let Te=0;Te<ne;Te++){let me=j[Te];it(me[2],me[1],me[0])}for(let Te=0;Te<ne;Te++){let me=j[Te];it(me[0]+X*u,me[1]+X*u,me[2]+X*u)}}n.addGroup(H,s.length/3-H,0)}function Ae(){let H=s.length/3,Te=0;Ke(N,Te),Te+=N.length;for(let me=0,Pe=k.length;me<Pe;me++){let ae=k[me];Ke(ae,Te),Te+=ae.length}n.addGroup(H,s.length/3-H,1)}function Ke(H,Te){let me=H.length;for(;--me>=0;){let Pe=me,ae=me-1;ae<0&&(ae=H.length-1);for(let $e=0,De=u+g*2;$e<De;$e++){let L=X*$e,R=X*($e+1),te=Te+Pe+L,fe=Te+ae+L,be=Te+ae+R,Ee=Te+Pe+R;Oe(te,fe,be,Ee)}}}function Be(H,Te,me){l.push(H),l.push(Te),l.push(me)}function it(H,Te,me){We(H),We(Te),We(me);let Pe=s.length/3,ae=M.generateTopUV(n,s,Pe-3,Pe-2,Pe-1);nt(ae[0]),nt(ae[1]),nt(ae[2])}function Oe(H,Te,me,Pe){We(H),We(Te),We(Pe),We(Te),We(me),We(Pe);let ae=s.length/3,$e=M.generateSideWallUV(n,s,ae-6,ae-3,ae-2,ae-1);nt($e[0]),nt($e[1]),nt($e[3]),nt($e[1]),nt($e[2]),nt($e[3])}function We(H){s.push(l[H*3+0]),s.push(l[H*3+1]),s.push(l[H*3+2])}function nt(H){r.push(H.x),r.push(H.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return qx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new hc[s.type]().fromJSON(s)),new i(n,e.options)}},Xx={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],h=e[s*3],u=e[s*3+1];return[new Re(r,a),new Re(o,l),new Re(h,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],h=e[n*3],u=e[n*3+1],f=e[n*3+2],p=e[s*3],d=e[s*3+1],y=e[s*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new Re(a,1-l),new Re(h,1-f),new Re(p,1-y),new Re(v,1-m)]:[new Re(o,1-l),new Re(u,1-f),new Re(d,1-y),new Re(g,1-m)]}};function qx(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Eo=class i extends So{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Tn=class i extends So{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},oi=class i extends Xt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],h=[],u=[],f=e,p=(t-e)/s,d=new V,y=new Re;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){let m=r+g/n*a;d.x=f*Math.cos(m),d.y=f*Math.sin(m),l.push(d.x,d.y,d.z),h.push(0,0,1),y.x=(d.x/t+1)/2,y.y=(d.y/t+1)/2,u.push(y.x,y.y)}f+=p}for(let v=0;v<s;v++){let g=v*(n+1);for(let m=0;m<n;m++){let M=m+g,_=M,E=M+n+1,I=M+n+2,P=M+1;o.push(_,E,P),o.push(E,I,P)}}this.setIndex(o),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},mi=class i extends Xt{constructor(e=new Xn([new Re(0,.5),new Re(-.5,-.5),new Re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let u=0;u<e.length;u++)h(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new gt(s,3)),this.setAttribute("normal",new gt(r,3)),this.setAttribute("uv",new gt(a,2));function h(u){let f=s.length/3,p=u.extractPoints(t),d=p.shape,y=p.holes;Qi.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=y.length;g<m;g++){let M=y[g];Qi.isClockWise(M)===!0&&(y[g]=M.reverse())}let v=Qi.triangulateShape(d,y);for(let g=0,m=y.length;g<m;g++){let M=y[g];d=d.concat(M)}for(let g=0,m=d.length;g<m;g++){let M=d[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,m=v.length;g<m;g++){let M=v[g],_=M[0]+f,E=M[1]+f,I=M[2]+f;n.push(_,E,I),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Yx(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Yx(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var li=class i extends Xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),h=0,u=[],f=new V,p=new V,d=[],y=[],v=[],g=[];for(let m=0;m<=n;m++){let M=[],_=m/n,E=0;m===0&&a===0?E=.5/t:m===n&&l===Math.PI&&(E=-.5/t);for(let I=0;I<=t;I++){let P=I/t;f.x=-e*Math.cos(s+P*r)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(s+P*r)*Math.sin(a+_*o),y.push(f.x,f.y,f.z),p.copy(f).normalize(),v.push(p.x,p.y,p.z),g.push(P+E,1-_),M.push(h++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){let _=u[m][M+1],E=u[m][M],I=u[m+1][M],P=u[m+1][M+1];(m!==0||a>0)&&d.push(_,E,P),(m!==n-1||l<Math.PI)&&d.push(E,I,P)}this.setIndex(d),this.setAttribute("position",new gt(y,3)),this.setAttribute("normal",new gt(v,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qn=class i extends Xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],h=[],u=new V,f=new V,p=new V;for(let d=0;d<=n;d++)for(let y=0;y<=s;y++){let v=y/s*r,g=d/n*Math.PI*2;f.x=(e+t*Math.cos(g))*Math.cos(v),f.y=(e+t*Math.cos(g))*Math.sin(v),f.z=t*Math.sin(g),o.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),p.subVectors(f,u).normalize(),l.push(p.x,p.y,p.z),h.push(y/s),h.push(d/n)}for(let d=1;d<=n;d++)for(let y=1;y<=s;y++){let v=(s+1)*d+y-1,g=(s+1)*(d-1)+y-1,m=(s+1)*(d-1)+y,M=(s+1)*d+y;a.push(v,g,M),a.push(g,m,M)}this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var To=class extends ri{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new st(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Ao=class extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},on=class extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Cs=class extends ri{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new st(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ro=class extends ri{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lo,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Ya(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Zx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var fr=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pc=class extends fr{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eh,endingEnd:Eh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Th:r=e,o=2*t-n;break;case Ah:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Th:a=e,l=2*n-t;break;case Ah:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let h=(n-t)*.5,u=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,u=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,d=this._weightNext,y=(n-t)/(s-t),v=y*y,g=v*y,m=-p*g+2*p*v-p*y,M=(1+p)*g+(-1.5-2*p)*v+(-.5+p)*y+1,_=(-1-d)*g+(1.5+d)*v+.5*y,E=d*g-d*v;for(let I=0;I!==o;++I)r[I]=m*a[u+I]+M*a[h+I]+_*a[l+I]+E*a[f+I];return r}},mc=class extends fr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,u=(n-t)/(s-t),f=1-u;for(let p=0;p!==o;++p)r[p]=a[h+p]*f+a[l+p]*u;return r}},gc=class extends fr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ya(t,this.TimeBufferType),this.values=Ya(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ya(e.times,Array),values:Ya(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ja:t=this.InterpolantFactoryMethodDiscrete;break;case Ka:t=this.InterpolantFactoryMethodLinear;break;case sl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ja;case this.InterpolantFactoryMethodLinear:return Ka;case this.InterpolantFactoryMethodSmooth:return sl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Zx(s))for(let o=0,l=s.length;o!==l;++o){let h=s[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===sl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=e[o],u=e[o+1];if(h!==u&&(o!==1||h!==e[0]))if(s)l=!0;else{let f=o*n,p=f-n,d=f+n;for(let y=0;y!==n;++y){let v=t[f+y];if(v!==t[p+y]||v!==t[d+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,p=a*n;for(let d=0;d!==n;++d)t[p+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,h=0;h!==n;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=Ka;var Ps=class extends gi{};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=Ja;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var xc=class extends gi{};xc.prototype.ValueTypeName="color";var yc=class extends gi{};yc.prototype.ValueTypeName="number";var vc=class extends fr{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),h=e*o;for(let u=h+o;h!==u;h+=4)Gn.slerpFlat(r,0,a,h-o,a,h,l);return r}},ta=class extends gi{InterpolantFactoryMethodLinear(e){return new vc(this.times,this.values,this.getValueSize(),e)}};ta.prototype.ValueTypeName="quaternion";ta.prototype.DefaultInterpolation=Ka;ta.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends gi{};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=Ja;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var _c=class extends gi{};_c.prototype.ValueTypeName="vector";var Mc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return h.push(u,f),this},this.removeHandler=function(u){let f=h.indexOf(u);return f!==-1&&h.splice(f,2),this},this.getHandler=function(u){for(let f=0,p=h.length;f<p;f+=2){let d=h[f],y=h[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return y}return null}}},Jx=new Mc,bc=class{constructor(e){this.manager=e!==void 0?e:Jx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};bc.DEFAULT_MATERIAL_NAME="__DEFAULT";var pr=class extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},mr=class extends pr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Dl=new Nt,Su=new V,Eu=new V,na=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Su.setFromMatrixPosition(e.matrixWorld),t.position.copy(Su),Eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Eu),t.updateMatrixWorld(),Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wc=class extends na{constructor(){super(new wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=to*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Co=class extends pr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new wc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Tu=new Nt,Br=new V,Ul=new V,Sc=class extends na{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new nn(2,1,1,1),new nn(0,1,1,1),new nn(3,1,1,1),new nn(1,1,1,1),new nn(3,0,1,1),new nn(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Br.setFromMatrixPosition(e.matrixWorld),n.position.copy(Br),Ul.copy(n.position),Ul.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ul),n.updateMatrixWorld(),s.makeTranslation(-Br.x,-Br.y,-Br.z),Tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu)}},Qn=class extends pr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ec=class extends na{constructor(){super(new ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ls=class extends pr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new Ec}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Po=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Au(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Au();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Au(){return(typeof performance>"u"?Date:performance).now()}var Nc="\\[\\]\\.:\\/",Kx=new RegExp("["+Nc+"]","g"),Oc="[^"+Nc+"]",$x="[^"+Nc.replace("\\.","")+"]",jx=/((?:WC+[\/:])*)/.source.replace("WC",Oc),Qx=/(WCOD+)?/.source.replace("WCOD",$x),e1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oc),t1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oc),n1=new RegExp("^"+jx+Qx+e1+t1+"$"),i1=["material","materials","bones","map"],Tc=class{constructor(e,t,n){let s=n||en.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},en=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Kx,"")}static parseTrackName(e){let t=n1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);i1.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let a=e[s];if(a===void 0){let h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};en.Composite=Tc;en.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};en.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};en.prototype.GetterByBindingType=[en.prototype._getValue_direct,en.prototype._getValue_array,en.prototype._getValue_arrayElement,en.prototype._getValue_toArray];en.prototype.SetterByBindingTypeAndVersioning=[[en.prototype._setValue_direct,en.prototype._setValue_direct_setNeedsUpdate,en.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[en.prototype._setValue_array,en.prototype._setValue_array_setNeedsUpdate,en.prototype._setValue_array_setMatrixWorldNeedsUpdate],[en.prototype._setValue_arrayElement,en.prototype._setValue_arrayElement_setNeedsUpdate,en.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[en.prototype._setValue_fromArray,en.prototype._setValue_fromArray_setNeedsUpdate,en.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var C1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var vr=class extends as{constructor(e=null){super();let t=new Vn;t.deleteAttribute("uv");let n=new on({side:mn}),s=new on,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new Qn(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new ze(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new ze(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let h=new ze(t,s);h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),this.add(h);let u=new ze(t,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let f=new ze(t,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let p=new ze(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let d=new ze(t,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let y=new ze(t,yr(50));y.position.set(-16.116,14.37,8.208),y.scale.set(.1,2.428,2.739),this.add(y);let v=new ze(t,yr(50));v.position.set(-16.109,18.021,-8.207),v.scale.set(.1,2.425,2.751),this.add(v);let g=new ze(t,yr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let m=new ze(t,yr(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let M=new ze(t,yr(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let _=new ze(t,yr(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function yr(i){let e=new Ot;return e.color.setScalar(i),e}function ra(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Xt,h=0;for(let u=0;u<i.length;++u){let f=i[u],p=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,d,u),h+=d}}if(t){let u=0,f=[];for(let p=0;p<i.length;++p){let d=i[p].index;for(let y=0;y<d.count;++y)f.push(d.getX(y)+u);u+=i[p].attributes.position.count}l.setIndex(f)}for(let u in r){let f=ju(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<f;++p){let d=[];for(let v=0;v<a[u].length;++v)d.push(a[u][v][p]);let y=ju(d);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(y)}}return l}function ju(i){let e,t,n,s=-1,r=0;for(let h=0;h<i.length;++h){let u=i[h];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let a=new e(r),o=0;for(let h=0;h<i.length;++h)a.set(i[h].array,o),o+=i[h].array.length;let l=new gn(a,t,n);return s!==void 0&&(l.gpuType=s),l}function vn(i,e=18,t=!0,n=!0){let s=[],r=[];for(let l of i)for(let h=0;h<e;h++){let u=h/e*Math.PI*2,f=Math.cos(u);s.push((l.x||0)+Math.sin(u)*l.rx,l.y,(l.z||0)+f*(f>=0?l.rz:l.rb??l.rz))}for(let l=0;l<i.length-1;l++)for(let h=0;h<e;h++){let u=l*e+h,f=l*e+(h+1)%e,p=u+e,d=f+e;r.push(u,f,p,f,d,p)}let a=i.length;if(t){let l=i[0],h=s.length/3;s.push(l.x||0,l.y,l.z||0);for(let u=0;u<e;u++)r.push(h,(u+1)%e,u)}if(n){let l=i[a-1],h=s.length/3,u=(a-1)*e;s.push(l.x||0,l.y,l.z||0);for(let f=0;f<e;f++)r.push(h,u+f,u+(f+1)%e)}let o=new Xt;return o.setAttribute("position",new gt(s,3)),o.setIndex(r),o.computeVertexNormals(),o}function hs(i,e,t,n=12,s=1){let r=[];r.push({y:e*.55,rx:e*.55,rz:e*.55*s});for(let o=0;o<=6;o++){let l=o/6,h=e+(t-e)*l;r.push({y:-i*l,rx:h,rz:h*s})}return r.push({y:-i-t*.5,rx:t*.6,rz:t*.6*s}),r.reverse(),vn(r,n)}function le(i,e,t=0,n=0,s=0){let r=new ze(i,e);return r.position.set(t,n,s),r.castShadow=!0,r}function dn(i=0,e=0,t=0,...n){let s=new mt;return s.position.set(i,e,t),n.forEach(r=>r&&s.add(r)),s}var It=(i,e,t)=>new Vn(i,e,t),qt=(i,e=14,t=10)=>new li(i,e,t),sn=(i,e,t,n=12,s=!1)=>new Rn(i,e,t,n,1,s),Pn=(i,e,t=10)=>new yn(i,e,t),Qt=(i,e,t)=>i+(e-i)*t;function xi(i){i.traverse(e=>{e.userData.dispose&&e.userData.dispose(),e.geometry&&!e.userData.sharedGeo&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.userData.shared||(t.map&&t.userData.ownMap&&t.map.dispose(),t.dispose())})})}var No=[[12173e3,6975353],[11915199,6126956],[11127270,5207705],[12824816,6967984],[15780966,10119698],[3814208,1380890],[16774354,14268512]],Yn=[10725556,4906624,3718648,11566335,16096779,16731501,16773560];function yi(i,e=2){let t=[],n=["rx","rz","rb","x","z"],s=(a,o)=>a[o]??(o==="rb"?a.rz:0);for(let a=0;a<i.length-1;a++){let o=i[Math.max(0,a-1)],l=i[a],h=i[a+1],u=i[Math.min(i.length-1,a+2)];for(let f=0;f<e;f++){let p=f/e,d={y:Qt(l.y,h.y,p)};for(let y of n){let v=s(o,y),g=s(l,y),m=s(h,y),M=s(u,y),_=.5*(2*g+(-v+m)*p+(2*v-5*g+4*m-M)*p*p+(-v+3*g-3*m+M)*p*p*p);y[0]==="r"&&(_=Math.max(8e-4,Math.min(Math.max(g,m)*1.08,_))),d[y]=_}t.push(d)}}let r=i[i.length-1];return t.push({y:r.y,rx:r.rx,rz:r.rz,rb:r.rb??r.rz,x:r.x||0,z:r.z||0}),t}function ed(i,e=24){let t=[],n=[],s=[],r=i.length,a=i[0].y,o=i[r-1].y,l=e+1;for(let f of i)for(let p=0;p<=e;p++){let d=-Math.PI+p/e*Math.PI*2,y=Math.cos(d);t.push((f.x||0)+Math.sin(d)*f.rx,f.y,(f.z||0)+y*(y>=0?f.rz:f.rb??f.rz)),n.push(p/e,(f.y-a)/(o-a))}for(let f=0;f<r-1;f++)for(let p=0;p<e;p++){let d=f*l+p,y=d+1,v=d+l,g=y+l;s.push(d,y,v,y,g,v)}{let f=i[0],p=t.length/3;t.push(f.x||0,f.y,f.z||0),n.push(.5,0);for(let d=0;d<e;d++)s.push(p,d+1,d)}{let f=i[r-1],p=t.length/3,d=(r-1)*l;t.push(f.x||0,f.y,f.z||0),n.push(.5,1);for(let y=0;y<e;y++)s.push(p,d+y,d+y+1)}let h=new Xt;h.setAttribute("position",new gt(t,3)),h.setAttribute("uv",new gt(n,2)),h.setIndex(s),h.computeVertexNormals();let u=h.attributes.normal;for(let f=0;f<r;f++){let p=f*l,d=p+e,y=u.getX(p)+u.getX(d),v=u.getY(p)+u.getY(d),g=u.getZ(p)+u.getZ(d),m=Math.hypot(y,v,g)||1;u.setXYZ(p,y/m,v/m,g/m),u.setXYZ(d,y/m,v/m,g/m)}return h}function Fi(i,e,t=12,n=.55){let s=[],r=e[0],a=e[e.length-1];s.push({y:r[1]*n,rx:r[1]*.5,rz:r[1]*.5*(r[3]||1),z:r[2]||0});for(let o of e)s.push({y:-i*o[0],rx:o[1],rz:o[1]*(o[3]||1),z:o[2]||0});return s.push({y:-i-a[1]*n,rx:a[1]*.5,rz:a[1]*.5*(a[3]||1),z:a[2]||0}),s.reverse(),vn(yi(s,2),t)}var Qu={};function td(i){let e=i?"s":"h",t=Qu[e];if(t)return t;let n=i?[168,168,168,172,222,255,255,255]:[98,98,98,102,184,255,255,255],s=new Uint8Array(n.length*4);return n.forEach((r,a)=>{s[a*4]=s[a*4+1]=s[a*4+2]=r,s[a*4+3]=255}),t=Qu[e]=new go(s,n.length,1,$n),t.minFilter=t.magFilter=bn,t.generateMipmaps=!1,t.needsUpdate=!0,t}function kc(i,e){return new Cs(Object.assign({color:i,gradientMap:td(!0)},e||{}))}function _n(i,e){return new Cs(Object.assign({color:i,gradientMap:td()},e||{}))}var _r=null;function nd(){return _r||(_r=new Ot({color:1314586,side:mn}),_r.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 { vec3 inkN = normalize(normalMatrix * normal); float inkW = clamp(-mvPosition.z * 0.0025, 0.0012, 0.012); mvPosition.xyz += inkN * inkW; gl_Position = projectionMatrix * mvPosition; }`)},_r.userData.shared=!0,_r)}var s1=(i,e)=>{let t=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();for(let n of Object.keys(t.attributes))n!=="position"&&n!=="normal"&&!(n==="uv"&&e)&&t.deleteAttribute(n);return t};function id(i,e){i.updateMatrixWorld(!0);let t=[],n=[],s=new Nt,r=new Nt;i.traverse(a=>{(a===i||a.userData.joint)&&t.push(a)});for(let a of t){let o=new Map,l=[];r.copy(a.matrixWorld).invert();let h=f=>{for(let p of f.children)if(!(p.userData.joint||p.userData.keep))if(p.isMesh){if(p.material.transparent||p.userData.noBake)continue;let d=s1(p,!!p.material.map);d.applyMatrix4(s.multiplyMatrices(r,p.matrixWorld)),o.has(p.material)||o.set(p.material,[]),o.get(p.material).push(d),l.push(p)}else!p.isLight&&!p.isSprite&&h(p)};h(a);for(let f of l)f.parent.remove(f),f.geometry.dispose();let u=[];for(let[f,p]of o){let d=p.length>1?ra(p,!1):p[0];p.length>1&&p.forEach(v=>v.dispose());let y=new ze(d,f);y.castShadow=!0,a.add(y),!f.isMeshBasicMaterial&&!f.userData.noInk&&u.push(d)}if(e&&u.length){let f=u.map(y=>{let v=y.clone();return v.attributes.uv&&v.deleteAttribute("uv"),v}),p=f.length>1?ra(f,!1):f[0];f.length>1&&f.forEach(y=>y.dispose());let d=new ze(p,nd());d.userData.ink=!0,d.castShadow=!1,a.add(d),n.push(d)}}for(;;){let a=[];if(i.traverse(o=>{o!==i&&o.isGroup&&!o.children.length&&!o.userData.joint&&!o.userData.keep&&o.parent&&a.push(o)}),!a.length)break;a.forEach(o=>o.parent.remove(o))}return n}function Oo(i){let e=[],t=[];i.traverse(n=>{n.isMesh&&!n.userData.ink&&!n.userData.noInk&&n.material&&!n.material.transparent&&!n.material.isMeshBasicMaterial&&t.push(n)});for(let n of t){let s=new ze(n.geometry,nd());s.userData.ink=!0,s.castShadow=!1,s.userData.sharedGeo=!0,n.add(s),e.push(s)}return e}function Mr(i,e){let t=No[i][e?1:0];return _n(t,i===6?{emissive:16769696,emissiveIntensity:e?.3:.45}:i===5?{emissive:5899794,emissiveIntensity:e?.3:.42}:i===4?{emissive:6965760,emissiveIntensity:.2}:void 0)}var Gt=(i,e,t,n)=>_n(i,n||void 0),Sr={},ds=(i,e)=>Sr[i]||(Sr[i]=e()),br=()=>ds("wood",()=>_n(8016432)),ko=()=>ds("leather",()=>_n(4861984)),_i=null,Zn=i=>_i?ds("sk",()=>_n(_i.c[0],{emissive:_i.c[1],emissiveIntensity:.5})):ds("m"+i,()=>Mr(i)),Nn=i=>_i?ds("skd",()=>_n(new st(_i.c[0]).multiplyScalar(.45).getHex(),{emissive:_i.c[1],emissiveIntensity:.22})):ds("d"+i,()=>Mr(i,!0)),vi=(i,e=1)=>_i?ds("skg"+e,()=>_n(_i.c[1],{emissive:_i.c[1],emissiveIntensity:e})):ds("g"+i+e,()=>_n(Yn[i],{emissive:Yn[i],emissiveIntensity:e})),Fo=new yn(.5,1,5).translate(0,.5,0),wr=new Tn(1),Bc=new Rn(1,1,1,10,1,!0),rd=new qn(1,.05,6,40),ln=(i,e)=>new Ot({color:i,transparent:!0,opacity:e,blending:zn,depthWrite:!1,side:jt}),Bn=(i,e,t)=>{let n=new ze(i,e);return n.userData.sharedGeo=!0,n.castShadow=!1,t.add(n),n};function Er(i,e,t){if(e<3)return null;let n=[],s=t.x||0,r=t.z||0,a=t.y1-t.y0,o=t.r,l=(h,u,f,p)=>{let d=ln(u,.95),y=[];for(let v=0;v<h;v++){let g=Bn(wr,d,i);g.scale.set(f,f*1.7,f),y.push(g)}n.push(v=>y.forEach((g,m)=>{let M=v*(1.5+m*.27)+m*2.1,_=(m/h+v*p)%1,E=Math.sin(_*Math.PI);g.position.set(s+Math.cos(M)*(o+.035),t.y0+a*_,r+Math.sin(M)*(o+.035)),g.rotation.y=v*3+m,g.scale.set(f*E,f*1.7*E,f*E)}))};if(e===3)l(3,13215999,.014,.1);else if(e===4){l(6,16767088,.014,.16);let h=Bn(Bc,ln(16762960,.13),i);h.position.set(s,t.y0+a/2,r),h.scale.set(o*1.6+.02,a*1.05,o*1.6+.02),n.push(u=>{h.material.opacity=.1+Math.sin(u*3)*.05})}else if(e===5){let h=ln(16725012,.7),u=ln(16760906,.85),f=t.mode==="lite",p=f?2:Math.max(3,Math.min(8,Math.round(a/.13))),d=[],y=Math.min(.075,o*1.2+.03)*(f?.62:1);for(let v=0;v<=p;v++){let g=v===p,m=v%2?1:-1,M=y*(g?1.35:1),_=Bn(Fo,h,i);Bn(Fo,u,_).scale.set(.5,.62,.5),_.position.set(s+(g?0:m*Math.min(o,.09)*.7),g?t.y1-M*.4:t.y0+a*(v+.4)/p,r),d.push({f:_,side:g?0:m,sz:M,i:v})}n.push(v=>{for(let g of d){let m=1+.32*Math.sin(v*11+g.i*1.7)+.18*Math.sin(v*17.3+g.i*.6);g.f.scale.set(g.sz*(.85+.15*Math.sin(v*9+g.i)),g.sz*2.3*m,g.sz*.55),g.f.rotation.z=-g.side*(.5+.16*Math.sin(v*7+g.i))}}),f||l(4,16742970,.011,.5)}else if(e>=6){let h=t.mode==="lite",u=t.mode==="halo";if(!h&&!u&&o<=.1){let f=Bn(Bc,ln(16773312,.2),i);f.position.set(s,t.y0+a/2,r),f.scale.set(o*1.25+.016,a*1.06,o*1.25+.016),n.push(p=>{f.material.opacity=.17+Math.sin(p*2.4)*.06})}if(!h){let f=Bn(rd,ln(16771496,.9),i);f.position.set(s,t.y1,r),f.scale.setScalar(Math.min(o+.06,.17)),f.rotation.x=Math.PI/2,n.push(p=>{f.rotation.z=p*1.4,u||(f.rotation.y=Math.sin(p*.9)*.35)})}if(!u){let f=new mt;f.position.set(s,t.y1+.03,r);let p=ln(16777215,.95),d=h?.6:1;for(let[y,v,g]of[[.011,.075,.011],[.075,.011,.011],[.011,.011,.075]])Bn(wr,p,f).scale.set(y*d,v*d,g*d);i.add(f),n.push(y=>{f.rotation.set(y*.7,y*1.1,0),f.scale.setScalar(1+.3*Math.sin(y*4))})}l(h||u?3:6,16774872,.011,.22)}return h=>{for(let u of n)u(h)}}var ad=(i,e)=>new Ot({color:i,transparent:!0,opacity:e,depthWrite:!1,side:jt});function r1(i,e,t){let n=[],s=t.x||0,r=t.z||0,a=t.y1-t.y0,o=t.r,l=Math.max(0,Math.min(6,e.r||0)),h=e.c[2],u=e.c[3]||e.c[1],f=m=>{let M=Math.sin(m*127.1+311.7)*43758.5453;return M-Math.floor(M)},p=(m,M,_,E,I={})=>{let P=I.m||ln(M,.95),A=[];for(let F=0;F<m;F++){let T=Bn(wr,P,i);A.push(T)}n.push(F=>A.forEach((T,x)=>{let k,O;if(I.jump){let b=Math.floor(F*14+x*3.3);k=f(b+x*17),O=f(b*1.7+x)*6.28}else k=((x/m+F*E)%1+1)%1,O=F*(I.orbit??1.5+x*.27)+x*2.1;let j=I.twinkle?.4+.6*Math.abs(Math.sin(F*(3+x)+x*1.9)):Math.sin(k*Math.PI),N=o+.035+(I.rad||0);T.position.set(s+Math.cos(O)*N,t.y0+a*k,r+Math.sin(O)*N),T.rotation.y=F*3+x,T.scale.set(_*j,_*(I.sy??1.7)*j,_*j)}))},d=(m,M,_=1.6)=>{let E=Bn(Bc,ln(m,M),i);return E.position.set(s,t.y0+a/2,r),E.scale.set(o*_+.02,a*1.05,o*_+.02),n.push(I=>{E.material.opacity=M*(.8+Math.sin(I*3)*.3)}),E},y=(m,M,_=1)=>{let E=ln(m,.7),I=ln(M,.85),P=Math.max(2,Math.min(3+l,Math.round(a/.13))),A=[],F=Math.min(.075,o*1.2+.03)*(.7+l*.06)*_;for(let T=0;T<=P;T++){let x=T===P,k=T%2?1:-1,O=F*(x?1.35:1),j=Bn(Fo,E,i);Bn(Fo,I,j).scale.set(.5,.62,.5),j.position.set(s+(x?0:k*Math.min(o,.09)*.7),x?t.y1-O*.4:t.y0+a*(T+.4)/P,r),A.push({f:j,side:x?0:k,sz:O,i:T})}n.push(T=>{for(let x of A){let k=1+.32*Math.sin(T*11+x.i*1.7)+.18*Math.sin(T*17.3+x.i*.6);x.f.scale.set(x.sz*(.85+.15*Math.sin(T*9+x.i)),x.sz*2.3*k,x.sz*.55),x.f.rotation.z=-x.side*(.5+.16*Math.sin(T*7+x.i))}})},v=m=>{let M=new mt;M.position.set(s,t.y1+.03,r);let _=ln(m,.95);for(let[E,I,P]of[[.011,.075,.011],[.075,.011,.011],[.011,.011,.075]])Bn(wr,_,M).scale.set(E,I,P);i.add(M),n.push(E=>{M.rotation.set(E*.7,E*1.1,0),M.scale.setScalar(1+.3*Math.sin(E*4))})},g=2+l;switch(e.fx){case"flame":y(h,u),l>=2&&p(Math.ceil(g/2),u,.011,.5);break;case"frost":d(h,.13),p(g,u,.012,-.12,{sy:1});{let m=ln(h,.75),M=2+Math.floor(l/2);for(let _=0;_<M;_++){let E=Bn(wr,m,i),I=_%2?1:-1;E.position.set(s+I*(o+.012),t.y0+a*(_+.6)/(M+.4),r),E.scale.set(.012,.05+l*.004,.006),E.rotation.z=-I*.5}}break;case"shadow":{let m=ad(h,.5);p(g+1,h,.03,.22,{m,sy:1.2,rad:-.02}),p(Math.ceil(g/2),u,.01,.3),d(u,.07,2.2)}break;case"light":if(d(h,.2,1.4),p(g,u,.011,.22),l>=3&&v(16777215),l>=4){let m=Bn(rd,ln(h,.9),i);m.position.set(s,t.y1,r),m.scale.setScalar(Math.min(o+.06,.17)),m.rotation.x=Math.PI/2,n.push(M=>{m.rotation.z=M*1.4})}break;case"water":d(h,.16,1.9),p(g+1,u,.009,-.55,{sy:3,orbit:.4});break;case"bolt":d(h,.1,1.2),p(g+1,u,.008,0,{jump:1,sy:5});break;case"leaf":p(g,h,.016,.1,{sy:.35,orbit:.9,rad:.02}),p(Math.ceil(g/2),u,.008,.2);break;case"blood":d(h,.1),p(g,h,.01,-.28,{sy:2.6,orbit:.2});break;case"wind":p(g+2,h,.008,.35,{sy:.5,orbit:5,rad:.05});break;case"star":p(g+3,h,.012,.03,{twinkle:1,sy:1,rad:.03}),d(u,.08,2),v(h);break;case"prism":{let m=d(16777215,.2,1.5),M=ln(16777215,.95);p(g+1,16777215,.012,.25,{m:M}),n.push(_=>{m.material.color.setHSL(_*.25%1,1,.6),M.color.setHSL((_*.25+.4)%1,1,.65)}),l>=4&&v(16777215)}break}return m=>{for(let M of n)M(m)}}var a1=[.8,.95,1.15,1.45,1.85,2.4,3.1];function sd(i,e,t,n){let s=e/1.3,r=[],a=[],o=[],l=[],h=p=>[s*.78*p,s*(.52*Math.sin(p*1.75)-.12*p*p)],u=(p,d,y,v,g)=>{let m=Math.cos(y),M=Math.sin(y),_=(I,P)=>[p+I*m-P*M,d+I*M+P*m],E=new Xn;return E.moveTo(p,d),t==="blade"?(E.lineTo(..._(v*.25,g)),E.lineTo(..._(v,0)),E.lineTo(..._(v*.25,-g))):(E.bezierCurveTo(..._(v*.2,g*1.25),..._(v*.8,g*1.1),..._(v,0)),E.bezierCurveTo(..._(v*.8,-g),..._(v*.2,-g*1.1),p,d)),[E,_(v,0)]};for(let p=0;p<i;p++){let d=i>1?p/(i-1):.5,[y,v]=h(d),g=-1.5+1.62*Math.pow(d,1.25),m=s*(.4+.5*d)*(d>.86?1-(d-.86)*1.6:1),[M,_]=u(y,v,g,m,m*n);r.push(M),o.push(_),l.push([y,v]),a.push(u(y,v,g+.06,m*.46,m*n*.8)[0])}let f=new Xn;f.moveTo(0,-s*.05);for(let p=0;p<=8;p++){let[d,y]=h(p/8);f.lineTo(d,y+s*.045*(1-p/9))}for(let p=8;p>=0;p--){let[d,y]=h(p/8);f.lineTo(d,y-s*.05*(1-p/10))}return a.push(f),{shapes:r,cov:a,tips:o,bone:l,arm:f}}function o1(i){let e=new Xn,t=i.tips,n=i.bone;e.moveTo(0,0);for(let r of n)e.lineTo(r[0],r[1]);let s=t.length;e.lineTo(t[s-1][0],t[s-1][1]);for(let r=s-2;r>=0;r--){let a=t[r+1],o=t[r],l=[(a[0]+o[0])/2,(a[1]+o[1])/2],h=[(n[r][0]+n[r+1][0])/2,(n[r][1]+n[r+1][1])/2];e.quadraticCurveTo(l[0]+(h[0]-l[0])*.3,l[1]+(h[1]-l[1])*.3,o[0],o[1])}return e.lineTo(0,-.04),e}function l1(i){let e=(t,n,s)=>{let r=Math.cos(t),a=Math.sin(t),o=(h,u)=>[h*r-u*a,h*a+u*r],l=new Xn;return l.moveTo(0,0),l.bezierCurveTo(...o(n*.1,s*1.5),...o(n*1.05,s*1.3),...o(n,0)),l.bezierCurveTo(...o(n*1,-s*.9),...o(n*.3,-s*.7),0,0),l};return[[e(.62,i*.78,i*.3),e(-.5,i*.56,i*.24)],[e(.62,i*.42,i*.17),e(-.5,i*.3,i*.13)]]}function od(i,e,t,n){let s=Math.max(0,Math.min(6,n.r||0)),r=a1[s],a=n.kind||"plume",o=new st(n.c[0]).getHex(),l=new st(n.c[1]||n.c[0]).getHex(),h=a==="flamme"||a==="lumiere",u=a==="ombre",f=a==="cristal",p=(F,T)=>new Cs({color:F,side:jt,emissive:F,emissiveIntensity:T}),d=h?ln(o,.5):u?ad(o,.74):f?new Ot({color:o,transparent:!0,opacity:.6,side:jt,depthWrite:!1}):p(o,s>=4?.55:.38),y=h?ln(l,.55):u?ln(l,.4):f?ln(l,.5):p(l,a==="meca"||s>=5?.7:.4),v=s>=4?ln(l,.13):null,g=[],m=[],M=F=>{let T=r*F;if(a==="papillon"){let O=l1(T);return[[new mi(O[0],12),d,0],[new mi(O[1],10),y,.008]]}if(a==="cuir"){let O=sd(4+Math.min(2,Math.floor(s/2)),T,"blade",.03);return[[new mi(o1(O),8),d,0],[new mi(O.shapes.concat([O.arm]),4),y,.008]]}let x=a==="plume"||a==="flamme"||a==="ombre"?"leaf":"blade",k=sd(Math.min(14,7+s),T,x,a==="meca"?.1:x==="blade"?.085:.13);return[[new mi(k.shapes,6),d,0],[new mi(k.cov,6),y,.008]]},_=s>=6?[[1,0,0],[.6,-.62,-.12],[.44,.5,.12]]:s>=4?[[1,0,0],[.56,-.62,-.12]]:[[1,0,0]];for(let[F,T,x]of _){let k=M(F);for(let[O]of k)m.push(O);for(let O of[-1,1]){let j=new mt;j.position.set(O*.05,e+x,t-.01-Math.abs(T)*.04);let N=new mt;N.rotation.z=O*T,N.scale.x=O,j.add(N);for(let[b,X,ne]of k){let D=new ze(b,X);D.position.z=ne,D.castShadow=!X.transparent,D.userData.sharedGeo=!0,D.userData.noBake=!0,N.add(D)}if(v){let b=new ze(k[0][0],v);b.scale.setScalar(1.06),b.position.z=-.012,b.castShadow=!1,b.userData.sharedGeo=!0,N.add(b)}i.add(j),g.push({piv:j,s:O,k:F,tilt:T})}}let E=[];if(s>=5){let F=ln(l,.9);for(let T=0;T<(s>=6?14:8);T++){let x=Bn(wr,F,i);E.push(x)}}let I=4.2-s*.32,P=0,A=(F,T=0)=>{P+=(T-P)*.12;for(let x of g){let k=Math.sin(F*I+Math.abs(x.tilt)*1.3)*(.34+.05*x.k),O=.2+k+Math.sin(F*1.3)*.03;x.piv.rotation.y=x.s*(O*P+(1.05+Math.sin(F*1.1)*.025)*(1-P)),x.piv.rotation.z=-x.s*.3*(1-P),x.piv.scale.setScalar(.72+.28*P)}E.forEach((x,k)=>{let O=F*(.5+k*.07)+k*2.4,j=r*(.3+.6*(k*.37%1)),N=(k/E.length+F*.12)%1,b=Math.sin(N*Math.PI)*(.012+s*.002);x.position.set(Math.cos(O)*j*(k%2?1:-1),e-.3+N*r*.9,t-.15-Math.abs(Math.sin(O))*.5),x.scale.set(b,b*1.7,b)})};return A(0,0),P=0,g[0].piv.userData.dispose=()=>{for(let F of m)F.dispose()},A}function ld(i,e,t){let n=new Xn;n.moveTo(0,0),n.bezierCurveTo(.25,.1,.75,.09,1,0),n.bezierCurveTo(.75,-.07,.25,-.08,0,0);let s=new mi(n,8),r=[ln(16771504,.34),ln(16777215,.3)],a=[],o=[[1,.56,.9],[.72,.68,1],[.45,.7,1],[.18,.62,.95],[-.1,.52,.9],[-.38,.42,.85],[-.66,.33,.8],[-.95,.24,.7]],l=!0;for(let h of[-1,1]){let u=new mt;u.position.set(h*.05,e,t),o.forEach(([f,p,d],y)=>{let v=new ze(s,r[y%2]);v.castShadow=!1,l||(v.userData.sharedGeo=!0),l=!1,v.scale.set(h*p,d*p*1.5,1),v.rotation.z=h*f,v.position.z=-y*.004,u.add(v)}),i.add(u),a.push({piv:u,s:h})}return h=>{for(let u of a)u.piv.rotation.y=-u.s*(.38+Math.sin(h*1.8)*.16);r[0].opacity=.3+Math.sin(h*2.6)*.07}}var Fc={epee:{y0:.12,y1:.9,r:.035},dague:{y0:.08,y1:.38,r:.028},espadon:{y0:.2,y1:1.4,r:.06},lamecle:{y0:.1,y1:1,r:.035},masse:{y0:.5,y1:.78,r:.1},guisarme:{y0:1.1,y1:1.66,r:.06},baton:{y0:1.22,y1:1.5,r:.08},arc:{y0:-.36,y1:.76,r:.03,x:.1},orbe:{y0:-.13,y1:.13,r:.12},grimoire:{y0:-.15,y1:.15,r:.13},pistolet:{y0:.05,y1:.3,r:.03},repercuteur:{y0:0,y1:.82,r:.09},harpe:{y0:.05,y1:.92,r:.06,x:.2},anneaux:{y0:-.2,y1:.24,r:.2}};function cd(i,e=0,t=null){Sr={},_i=t;let n=new mt,s=(r,a,o,l)=>{let h=le(It(a,r,.012),Zn(e),0,l/2+r/2,0);n.add(h);let u=le(Pn(a/2,a*1.4,4),Zn(e),0,l/2+r+a*.7,0);if(u.scale.z=.14,u.rotation.y=Math.PI/4,n.add(u),n.add(le(It(a*.22,r*.9,.016),Nn(e),0,l/2+r*.47,0)),n.add(le(It(o,.03,.035),Nn(e),0,l/2+.005,0)),n.add(le(sn(.016,.016,l,8),ko())),n.add(le(qt(.026,8,6),Nn(e),0,-l/2-.015,0)),e>=2&&n.add(le(new Tn(.02),vi(e),0,l/2+.005,.022)),e>=3&&n.add(le(It(.008,r*.75,.02),vi(e,1.4),0,l/2+r*.45,0)),e>=3&&n.add(le(new Tn(.017),vi(e),0,-l/2-.045,0)),e>=4)for(let f of[-1,1]){let p=le(Pn(.018,.09+(e-4)*.025,5),Zn(e),f*o/2,l/2+.045,0);p.rotation.z=-f*.55,n.add(p);let d=le(Pn(.014,.06,5),Nn(e),f*o*.3,l/2-.03,0);d.rotation.z=Math.PI+f*.5,n.add(d)}if(e>=5)for(let f=0;f<3;f++)for(let p of[-1,1]){let d=le(Pn(.012,a*.9,4),Nn(e),p*a*.62,l/2+r*(.25+f*.22),0);d.rotation.z=-p*1.2,d.scale.z=.4,n.add(d)}};switch(i){case"epee":s(.78,.06,.22,.16);break;case"dague":s(.3,.045,.12,.11);break;case"espadon":s(1.15,.11,.36,.3);break;case"lamecle":s(.9,.055,.14,.14),n.add(le(It(.09,.05,.014),Nn(e),.07,.86,0)),n.add(le(It(.07,.05,.014),Nn(e),.06,.74,0));{let r=le(new qn(.06,.014,8,20),Nn(e),0,-.14,0);n.add(r)}break;case"masse":n.add(le(sn(.018,.02,.7,8),br(),0,.25,0)),n.add(le(qt(.085,12,8),Zn(e),0,.64,0));for(let r=0;r<6;r++){let a=r/6*Math.PI*2,o=le(Pn(.025,.07,5),Nn(e),Math.sin(a)*.1,.64,Math.cos(a)*.1);o.rotation.set(Math.PI/2*Math.cos(a),0,-Math.PI/2*Math.sin(a)),n.add(o)}e>=2&&n.add(le(new Tn(.03),vi(e),0,.745,0));break;case"guisarme":n.add(le(sn(.017,.017,1.9,8),br(),0,.5,0));{let r=le(Pn(.03,.26,4),Zn(e),0,1.57,0);r.scale.z=.3,n.add(r);let a=le(sn(.2,.2,.014,16,!1),Zn(e),.1,1.28,0);a.rotation.x=Math.PI/2,a.scale.set(1,1,1.25),n.add(a);let o=le(Pn(.04,.16,4),Nn(e),-.08,1.3,0);o.rotation.z=Math.PI/2,o.scale.z=.3,n.add(o),e>=2&&n.add(le(new Tn(.024),vi(e),.02,1.28,.02))}break;case"baton":n.add(le(sn(.016,.02,1.6,8),br(),0,.5,0));{let r=le(new qn(.085,.014,8,20,Math.PI*1.4),Zn(e),0,1.37,0);r.rotation.z=Math.PI*.8,n.add(r);let a=le(qt(.055,14,10),vi(e,1.5),0,1.38,0);n.add(a);let o=new Qn(Yn[e],.5,2.5);o.position.set(0,1.38,0),n.add(o)}break;case"arc":{let r=le(new qn(.62,.016,8,28,Math.PI*.8),br(),-.5,.2,0);r.rotation.z=-Math.PI*.4,n.add(r);let a=.2+Math.sin(Math.PI*.4)*.62,o=-.5+Math.cos(Math.PI*.4)*.62;n.add(le(sn(.003,.003,(a-.2)*2,4),Gt(15658734,.5),o,.2,0)),n.add(le(sn(.022,.022,.14,8),ko(),.12,.2,0)),e>=2&&n.add(le(new Tn(.02),vi(e),.13,.3,0))}break;case"orbe":{n.add(le(qt(.09,18,14),Gt(Yn[e],.1,.1,{emissive:Yn[e],emissiveIntensity:1.1})));let r=le(new qn(.13,.008,6,28),Zn(e));if(r.rotation.x=1.2,n.add(r),e>=3){let o=le(new qn(.15,.006,6,28),Zn(e));o.rotation.set(.4,.8,0),n.add(o)}let a=new Qn(Yn[e],.6,3);n.add(a)}break;case"grimoire":n.add(le(It(.2,.27,.06),ko())),n.add(le(It(.18,.25,.064),Gt(15327174,.9),.012,0,0)),n.add(le(It(.205,.275,.05),Gt(No[e][1],.6,.3),-.004,0,0)),n.add(le(new Tn(.03),vi(e),0,0,.034));break;case"pistolet":n.add(le(It(.035,.26,.03),Zn(e),0,.16,0)),n.add(le(sn(.028,.028,.06,10),Nn(e),0,.07,0));{let r=le(It(.034,.13,.04),br(),0,-.02,-.03);r.rotation.x=-.35,n.add(r)}break;case"repercuteur":{let r=le(sn(.075,.075,.9,14),Zn(e),0,.35,0);n.add(r),n.add(le(sn(.09,.09,.06,14),Nn(e),0,.78,0)),n.add(le(sn(.085,.085,.07,14),Nn(e),0,.2,0)),n.add(le(qt(.055,12,8),vi(e,1.6),0,.8,0)),n.add(le(It(.04,.16,.05),ko(),0,.05,-.1))}break;case"harpe":{let r=e>=4?Zn(e):Gt(14264636,.3,.85);n.add(le(sn(.02,.024,.95,8),r,.2,.42,0));let a=le(new qn(.3,.02,8,18,Math.PI*.6),r,-.04,.72,0);a.rotation.z=Math.PI*.28,n.add(a);let o=le(It(.05,.92,.07),br(),-.1,.36,0);o.rotation.z=-.52,n.add(o);for(let l=0;l<7;l++){let h=-.2+l*.055,u=.28+l*.09;n.add(le(sn(.0022,.0022,u,4),Gt(l%3?15985878:Yn[e],.4,0,{emissive:l%3?0:Yn[e],emissiveIntensity:.8}),h,.84-u/2-Math.abs(3-l)*.012,0))}}break;case"anneaux":{let r=[16734842,4704511,16765514];[[-.12,.1],[.12,.1],[0,-.1]].forEach(([a,o],l)=>{n.add(le(new qn(.14,.018,8,24),Zn(e),a,o,l*.02)),n.add(le(qt(.05,10,8),Gt(r[l],.3,0,{emissive:r[l],emissiveIntensity:.6}),a,o,l*.02))})}break}return n.userData.tick=Fc[i]?t?r1(n,t,Fc[i]):Er(n,e,Fc[i]):null,_i=null,n}function hd(i=0){Sr={};let e=new Xn;e.moveTo(-.24,.3),e.quadraticCurveTo(0,.37,.24,.3),e.lineTo(.24,.02),e.quadraticCurveTo(.24,-.26,0,-.42),e.quadraticCurveTo(-.24,-.26,-.24,.02),e.closePath();let t=new dr(e,{depth:.03,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2}),n=dn(0,0,0,le(t,Zn(i)));if(n.add(le(It(.05,.66,.012),Nn(i),0,-.04,.05)),n.add(le(It(.44,.05,.012),Nn(i),0,.06,.05)),n.add(le(qt(.06,12,8),Nn(i),0,.06,.05)),i>=2&&n.add(le(new Tn(.034),vi(i),0,.06,.1)),i>=4)for(let[s,r]of[[-.2,.26],[.2,.26],[0,-.34]])n.add(le(new Tn(.022),vi(i),s,r,.05));return n.userData.tick=Er(n,i,{y0:.2,y1:.36,r:.1,z:.03,mode:"lite"}),n}function us(i){Sr={};let e=new mt,t=Gt(i.b,.85),n=Gt(i.d,.85),s=i.len,r=i.h,a=i.r,o=r-a*.9,l=dn(0,r,0);e.add(l);let h=le(vn([{y:-s/2,rx:a*.55,rz:a*.6},{y:-s*.36,rx:a*.95,rz:a},{y:0,rx:a*(i.belly||1),rz:a*1.02},{y:s*.3,rx:a*1.02,rz:a*1.08},{y:s/2,rx:a*.62,rz:a*.75}],16),t);h.rotation.x=Math.PI/2,l.add(h);let u=dn(0,a*.35,s*.42);u.rotation.x=i.neckA??.9,l.add(u),u.add(le(hs(i.neck,a*.62,a*.42,12),t).rotateX(Math.PI));let f=dn(0,i.neck,0);f.rotation.x=-(i.neckA??.9)+(i.headA??.25),u.add(f);let p=i.hs||a*.55,d=le(qt(p,12,10),t);if(d.scale.set(.9,.95,1.1),f.add(d),i.beak){let M=le(Pn(p*.42,p*1.3,8),Gt(15116602,.5),0,-p*.15,p*1.25);M.rotation.x=Math.PI/2+.25,f.add(M)}else{let M=le(vn([{y:0,rx:p*.7,rz:p*.62},{y:i.snout,rx:p*.42,rz:p*.4,z:-p*.1}],10),i.sn?Gt(i.sn,.85):t,0,-p*.2,p*.5);M.rotation.x=Math.PI/2,f.add(M),f.add(le(qt(p*.14,6,5),Gt(723728,.4),0,-p*.15,p*.5+i.snout+p*.02))}for(let M of[-1,1]){if(f.add(le(qt(p*.13,8,6),Gt(i.eye||723728,.3,0,i.eyeGlow?{emissive:i.eye,emissiveIntensity:1.5}:null),M*p*.72,p*.2,p*.55)),i.ear==="point"){let _=le(Pn(p*.3,p*.75,5),t,M*p*.5,p*.95,-p*.05);_.rotation.z=-M*.25,f.add(_)}else if(i.ear==="round")f.add(le(qt(p*.28,8,6),t,M*p*.65,p*.75,0));else if(i.ear==="long"){let _=le(hs(p*1.25,p*.34,p*.14,8,.45),t,M*p*.5,p*.6,-p*.1);_.rotation.set(Math.PI+.2,0,M*.35),f.add(_)}if(i.horns){let _=le(Pn(p*.2,p*1.3,6),Gt(i.horns,.5),M*p*.5,p*.9,-p*.5);_.rotation.x=-1,_.rotation.z=-M*.2,f.add(_)}}if(i.mane){let M=le(It(a*.16,i.neck*1.1,a*.5),Gt(i.mane,.9),0,i.neck*.5,-a*.62);u.add(M)}let y=[];for(let[M,_]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let E=dn(M*a*.62,-a*.3,_*s*.33);l.add(E);let I=o*.52,P=o*.5;E.add(le(hs(I,i.lw*1.35,i.lw,8),t));let A=dn(0,-I,0);E.add(A),A.add(le(hs(P,i.lw*.9,i.lw*.7,8),_>0||!i.d2?t:n));let F=le(qt(i.lw*1.05,8,6),Gt(i.hoof||1381658,.6),0,-P-i.lw*.2,i.paw?i.lw*.5:0);F.scale.set(1,.6,i.paw?1.5:1),A.add(F),y.push({hip:E,knee:A,ph:(M*_>0?0:Math.PI)+(_<0?.6:0)})}let v=dn(0,a*.35,-s*.48);if(l.add(v),i.tail==="bush"){let M=le(hs(s*.4,a*.3,a*.14,8),t);M.rotation.x=1.9,v.add(M)}else if(i.tail==="hair"){let M=le(hs(r*.55,a*.16,a*.26,8),Gt(i.mane||i.d,.9));M.rotation.x=.3,v.add(M)}else if(i.tail==="long"){let M=v;for(let E=0;E<6;E++){let I=dn(0,E?-s*.16:0,0);I.rotation.x=E?-.2:1.85,I.add(le(hs(s*.17,a*(.42-E*.06),a*(.36-E*.06),8),t)),M.add(I),M=I}let _=le(Pn(a*.2,a*.5,4),n,0,-s*.2,0);_.rotation.x=Math.PI,M.add(_),e.userData.tail=v}else{let M=le(qt(a*.22,8,6),t);v.add(M)}let g=[];if(i.wings)for(let M of[-1,1]){let _=dn(M*a*.7,a*.75,s*.12);l.add(_);let E=new Xn,I=i.wings;E.moveTo(0,0),E.quadraticCurveTo(I*.5,I*.5,I,I*.28),E.lineTo(I*.82,0),E.lineTo(I*.72,-I*.22),E.lineTo(I*.52,-I*.08),E.lineTo(I*.42,-I*.3),E.lineTo(I*.22,-I*.14),E.lineTo(I*.12,-I*.3),E.closePath();let P=le(new mi(E),Gt(i.wd||i.d,.8,0,{side:jt,emissive:i.wd||i.d,emissiveIntensity:.28}));P.scale.x=M,P.rotation.x=1.15,P.castShadow=!1,_.add(P),g.push({w:_,s:M})}(i.extra||(()=>{}))(e,l,f,{body:t,dark:n});let m=0;return{group:e,seat:{y:r+a*.72,z:i.seatZ??0},wide:i.wide||.5,update(M,_){m+=M*(3+_*5)*(_>.02?1:0);let E=_>.02?.35+Math.min(1,_)*.3:0;for(let I of y){let P=Math.sin(m+I.ph);I.hip.rotation.x=P*E,I.knee.rotation.x=Math.max(0,Math.cos(m+I.ph))*E*1.3}l.position.y=r+(_>.02?Math.abs(Math.sin(m*2))*.03*r:Math.sin(performance.now()/700)*.005),u.rotation.x=(i.neckA??.9)+Math.sin(m*2)*.04;for(let{w:I,s:P}of g)I.rotation.z=P*(.25+Math.sin(performance.now()/(_>.02?160:600))*(_>.02?.45:.1))}}}function c1(i){Sr={};let e=new mt,t=Gt(921107,.35,.6),n=Gt(13225430,.2,.95),s=Gt(526346,.9),r=[];for(let f of[-.72,.78]){let p=dn(0,.34,f),d=le(new qn(.27,.085,10,24),s);d.rotation.y=Math.PI/2,p.add(d);let y=le(sn(.12,.12,.08,12),n);y.rotation.z=Math.PI/2,p.add(y);for(let v=0;v<5;v++){let g=le(It(.02,.5,.03),n);g.rotation.x=v/5*Math.PI,p.add(g)}e.add(p),r.push(p)}let a=le(qt(.26,14,10),t,0,.82,.2);a.scale.set(.7,.62,1.3),e.add(a),e.add(le(It(.3,.3,.55),Gt(2763312,.4,.8),0,.5,.05));let o=le(It(.3,.1,.62),Gt(1708560,.8),0,.8,-.38);e.add(o);let l=le(sn(.025,.025,.8,8),n,0,.7,.66);l.rotation.x=-.42,e.add(l),e.add(le(It(.66,.03,.03),n,0,1.06,.5));let h=le(qt(.2,12,8),t,0,.95,.62);h.scale.set(.9,.9,.7),e.add(h),e.add(le(qt(.075,10,8),Gt(16774857,.2,0,{emissive:16773808,emissiveIntensity:2}),0,.93,.76)),e.add(le(It(.31,.02,.5),Gt(i,.3,0,{emissive:i,emissiveIntensity:1.2}),0,.665,.05));for(let f of[-1,1]){let p=le(sn(.035,.045,.7,8),n,f*.17,.36,-.55);p.rotation.x=Math.PI/2-.12,e.add(p)}let u=new Co(16773824,2.2,22,.5,.6);return u.position.set(0,.93,.8),u.target.position.set(0,.2,8),e.add(u,u.target),{group:e,seat:{y:.86,z:-.32},wide:.42,update(f,p){for(let d of r)d.rotation.x+=f*p*22;e.position.y=0}}}var Ei={m0:{speed:1.7,make:()=>us({b:7302776,d:4013125,sn:9144979,len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",eye:16757575,eyeGlow:!0,paw:!0,wide:.5})},m1:{speed:1.9,make:()=>us({b:8016179,d:4861724,mane:2890769,len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",hoof:15327954,wide:.6,extra:(i,e)=>{let t=le(It(.5,.08,.6),Gt(3877406,.8),0,.37,-.05);e.add(t)}})},m2:{speed:2,make:()=>us({b:6112820,d:3811870,sn:9071184,len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,wide:.78,extra:(i,e)=>{let t=le(vn([{y:-.6,rx:.5,rz:.2},{y:0,rx:.56,rz:.26},{y:.6,rx:.5,rz:.2}],14),Gt(No[2][0],.3,.9),0,.33,0);t.rotation.x=Math.PI/2,e.add(t)}})},m3:{speed:2.9,make:()=>c1(Yn[3])},m4:{speed:2.5,make:()=>us({b:13214570,d:9071162,wd:15331061,wings:1.6,beak:!0,len:2,h:1.25,r:.36,neck:.6,neckA:.5,headA:.6,hs:.2,lw:.07,ear:"point",tail:"long",eye:1708552,paw:!0,wide:.62,extra:(i,e,t)=>{let n=le(qt(.2,10,8),Gt(15987699,.9),0,.02,-.04);n.scale.set(1.05,1.1,1.1),t.add(n)}})},m5:{speed:2.8,make:()=>us({b:2893368,d:1380892,wd:4865378,wings:2.6,horns:9076896,len:3,h:1.55,r:.5,neck:1.1,neckA:.45,headA:.75,hs:.26,snout:.5,sn:3814216,lw:.11,tail:"long",eye:16731501,eyeGlow:!0,paw:!0,wide:.8,extra:(i,e)=>{for(let t=0;t<7;t++){let n=le(Pn(.06,.2,4),Gt(4865378,.6),0,.52,1-t*.33);e.add(n)}}})},m6:{speed:3.2,make:()=>us({b:10130831,d:6972767,sn:15130838,mane:4867391,len:1.5,h:1,r:.27,neck:.48,neckA:.75,headA:.6,hs:.16,snout:.26,lw:.05,ear:"long",tail:"hair",wide:.52,extra:(i,e)=>{let t=le(vn([{y:-.3,rx:.3,rz:.12},{y:.3,rx:.3,rz:.12}],12),Gt(8007466,.9),0,.2,-.02);t.rotation.x=Math.PI/2,e.add(t);let n=new Qn(16773312,.7,6);n.position.set(0,1.2,0),i.add(n)}})}},ud={wolf:()=>us({b:2761792,d:1380895,sn:4011356,len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",eye:16731501,eyeGlow:!0,paw:!0}),brute:()=>us({b:2893368,d:1380892,sn:4602976,len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,eye:16757575,eyeGlow:!0,horns:9076896}),drake:()=>{let i=Ei.m5.make();return i.group.scale.setScalar(.85),i}};var Gc={gender:"m",height:1,build:1,shoulders:1,legs:1,headSize:1,eyes:1,eyeGap:1,jaw:1,nose:1,brows:0,mouth:1,arms:1,limbs:1,waist:1,chest:1,hips:1,stance:"neutre",move:"neutre",skin:"#e2b594",hair:"court",hairColor:"#2b2019",eyeColor:"#4a6b8a",beard:"aucune",lips:"#b9695f"},Go=["neutre","ninja","souverain","digne","humble","timide"],Vo=["neutre","ninja","levitation"],fd=["court","brosse","mi-long","long","queue","chignon","boucles","rase"],Hc={epee:"1h",dague:"1h",masse:"1h",lamecle:"1h",anneaux:"rings",espadon:"2h",guisarme:"2h",baton:"staff",arc:"bow",pistolet:"gun",repercuteur:"cannon",orbe:"magic",grimoire:"magic",harpe:"harp"},Ls=.252;function h1(i,e=1){let t=.6+i*.4;return[[0,.012*i,.015,.018,.058],[.01,.027*i,.026,.032,.047],[.032,.049*i,.043,.056,.032],[.062,.071*t,.057,.08,.018],[.098,.087,.066,.096,.01],[.138,.094,.07,.104,.006],[.178,.092,.07,.104,.004],[.213,.079,.06,.09,.002],[.238,.052,.04,.06,0],[Ls,.014,.011,.016,0]].map(([n,s,r,a,o])=>({y:n,rx:s*e,rz:r*e,rb:a*e,z:o}))}function aa(i,e){if(e<=i[0].y)return i[0];for(let t=0;t<i.length-1;t++)if(e<=i[t+1].y){let n=(e-i[t].y)/(i[t+1].y-i[t].y),s=i[t],r=i[t+1];return{rx:Qt(s.rx,r.rx,n),rz:Qt(s.rz,r.rz,n),rb:Qt(s.rb??s.rz,r.rb??r.rz,n),z:Qt(s.z,r.z,n)}}return i[i.length-1]}var Bo=(i,e,t,n=1)=>{let s=aa(i,t),r=Math.cos(e);return[Math.sin(e)*s.rx*n,t+(n-1)*.1*(t/Ls)**2,s.z+r*(r>=0?s.rz:s.rb)*n]};function Ho(i,e,t){let n=aa(i,t),s=Math.min(.98,Math.abs(e)/n.rx);return n.z+n.rz*Math.sqrt(1-s*s)}var Hi=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function pd(i){return i<.8?.198-.014*(i/.8)**2:i<1.3?Qt(.184,.128,Hi((i-.8)/.5)):i<1.8?Qt(.128,.088,Hi((i-1.3)/.5)):Qt(.088,.04,Hi((i-1.8)/.7))}function md(i,e,t,n=28,s=6){let r=[],a=[],o=Ls-.006,l=s+1;for(let f=0;f<n;f++){let p=-Math.PI+f/n*2*Math.PI,d=e(Math.abs(p));for(let y=0;y<=s;y++)r.push(...Bo(i,p,Qt(d,o,Math.sin(y/s*Math.PI/2)),t))}for(let f=0;f<n;f++)for(let p=0;p<s;p++){let d=f*l+p,y=(f+1)%n*l+p,v=d+1,g=y+1;a.push(d,y,v,y,g,v)}let h=r.length/3;r.push(0,Ls+(t-1)*.11,0);for(let f=0;f<n;f++)a.push(h,f*l+s,(f+1)%n*l+s);let u=new Xt;return u.setAttribute("position",new gt(r,3)),u.setIndex(a),u.computeVertexNormals(),u}function Bi(i,e,t,n=0,s=0,r=6,a=6){let o=[];for(let l=a;l>=0;l--){let h=l/a,u=h<.22?Qt(.72,1,h/.22):Math.max(.03,1-Math.pow((h-.22)/.78,1.5));o.push({y:-i*h,x:s*i*h*h,z:n*i*h*h,rx:e/2*u,rz:t/2*u})}return o.push({y:t*.22,rx:e*.22,rz:t*.22}),vn(o,r)}var ei=(i,e=0,t="#000000")=>"#"+new st(i).lerp(new st(t),e).getHexString();function dd(i,e,t){let n=t.lod?512:1024,s=n/2,r=document.createElement("canvas");r.width=n,r.height=s;let a=r.getContext("2d"),o=i.gender==="f",l=Math.PI*2;a.fillStyle=i.skin,a.fillRect(0,0,n,s);let h=(k,O)=>Math.asin(Math.max(-.99,Math.min(.99,k/aa(e,O).rx))),u=(k,O)=>(.5+h(k,O)/l)*n,f=k=>(1-k/Ls)*s,p=s/Ls,d=(k,O)=>n/l/(aa(e,O).rx*Math.cos(h(k,O))),y=(k,O,j,N)=>{a.save(),a.translate(u(k,O),f(O)),a.scale(j*d(k,O),-p),N(),a.restore()};if(i.hair){a.fillStyle=ei(i.hairColor,i.hair==="rase"?0:.2),a.globalAlpha=i.hair==="rase"?.62:1;for(let k=0;k<n;k+=2){let O=Math.abs((k/n-.5)*l);a.fillRect(k,0,2,f(pd(O)+(i.hair==="rase"?-.004:.004)))}a.globalAlpha=1}let v=!o&&i.beard&&i.beard!=="aucune"?i.beard:null;if(v){let k=v==="pleine",O=(.5-1.75/l)*n,j=(.5+1.75/l)*n;if(k){a.fillStyle=i.hairColor,a.beginPath(),a.moveTo(O,f(.125));for(let N=0;N<=40;N++){let b=N/40,X=-1.75+b*3.5,ne=Math.abs(X)>1.05?Qt(.066,.125,Hi((Math.abs(X)-1.05)/.6)):.05+.016*Hi(Math.abs(X)/1.05);a.lineTo((.5+X/l)*n,f(ne))}a.lineTo(j,s),a.lineTo(O,s),a.closePath(),a.fill(),y(0,.0445,1,()=>{a.beginPath(),a.moveTo(-.024,-.003),a.quadraticCurveTo(-.012,.0062,0,.0028),a.quadraticCurveTo(.012,.0062,.024,-.003),a.quadraticCurveTo(0,5e-4,-.024,-.003),a.fill()})}else{let N=a.createLinearGradient(0,s,0,f(.066));N.addColorStop(0,ei(i.hairColor)),N.addColorStop(1,i.skin),a.globalAlpha=.42,a.fillStyle=N,a.fillRect(O,f(.066),j-O,s-f(.066)),a.globalAlpha=.3,a.fillStyle=i.hairColor,y(0,.0445,1,()=>{a.beginPath(),a.ellipse(0,0,.022,.0042,0,0,7),a.fill()}),a.globalAlpha=1}y(0,.037,1,()=>{a.fillStyle=i.skin,a.globalAlpha=k?1:.8,a.beginPath(),a.ellipse(0,-.0015,.017,.0052,0,0,7),a.fill(),a.globalAlpha=1})}let g=o?.13:.05;for(let k of[-1,1])y(k*.047,.071,k,()=>{let O=a.createRadialGradient(0,0,0,0,0,.02);O.addColorStop(0,`rgba(238,104,104,${g})`),O.addColorStop(1,"rgba(238,104,104,0)"),a.fillStyle=O,a.fillRect(-.02,-.02,.04,.04)});y(0,.064,1,()=>{let k=i.nose;a.strokeStyle=ei(i.skin,.4,"#6a2e2a"),a.lineWidth=.0012,a.lineCap="round",a.globalAlpha=.7,a.beginPath(),a.moveTo(-.0042*k,-.0052*k),a.quadraticCurveTo(0,-.0072*k,.0042*k,-.0052*k),a.stroke(),a.globalAlpha=1}),y(0,.037,1,()=>{let k=.0152*i.mouth*(o?.9:1.04);o&&(a.globalAlpha=.62,a.fillStyle=i.lips,a.beginPath(),a.moveTo(-k*.78,0),a.quadraticCurveTo(0,-.0082,k*.78,0),a.quadraticCurveTo(0,-.0016,-k*.78,0),a.fill(),a.beginPath(),a.moveTo(-k*.85,0),a.quadraticCurveTo(-k*.3,.0034,0,.0016),a.quadraticCurveTo(k*.3,.0034,k*.85,0),a.quadraticCurveTo(0,-.0012,-k*.85,0),a.fill(),a.globalAlpha=1),a.strokeStyle=ei(i.lips,.6),a.lineWidth=.0015,a.lineCap="round",a.beginPath(),a.moveTo(-k,9e-4),a.quadraticCurveTo(0,-.0026,k,9e-4),a.stroke(),o||(a.globalAlpha=.32,a.lineWidth=.0012,a.beginPath(),a.moveTo(-k*.36,-.006),a.quadraticCurveTo(0,-.0074,k*.36,-.006),a.stroke(),a.globalAlpha=1)});let m=i.eyes*(o?1.06:1),M=.0202*m,_=(o?.0176:.0136)*m,E=(o?.0114:.0096)*m,I=.1,P=.0398*i.eyeGap+(m-1)*.004,A=ei(i.hairColor,.72,"#120c10"),F=i.eyeColor;for(let k of[-1,1])y(k*P,I,k,()=>{if(t.closed){if(a.strokeStyle=A,a.lineCap="round",a.lineWidth=o?.0028:.0023,a.beginPath(),a.moveTo(-M,.001),a.quadraticCurveTo(0,-E*.95,M*1.08,.0025),a.stroke(),o){a.lineWidth=.0012;for(let $ of[.45,.75,1])a.beginPath(),a.moveTo(M*$,-E*.5*(1.1-$)-4e-4),a.lineTo(M*($+.14),-E*.5*(1.1-$)-.0042),a.stroke()}return}a.save(),a.beginPath(),a.moveTo(-M,-.0012),a.bezierCurveTo(-M*.6,_*1.2,M*.4,_*1.32,M,.0032),a.bezierCurveTo(M*.62,-E*1.15,-M*.45,-E*1.2,-M,-.0012),a.closePath(),a.clip(),a.fillStyle="#fbfbff",a.fillRect(-M*1.2,-E*1.6,M*2.4,(_+E)*1.8);let O=a.createLinearGradient(0,_*1.05,0,_*.15);O.addColorStop(0,"rgba(112,122,168,.8)"),O.addColorStop(1,"rgba(112,122,168,0)"),a.fillStyle=O,a.fillRect(-M*1.2,0,M*2.4,_*1.5);let j=-M*.05,N=M*.61,b=Math.max(_,E)*1.14,X=(_-E)*.3,ne=a.createLinearGradient(0,X+b,0,X-b);ne.addColorStop(0,ei(F,.74)),ne.addColorStop(.48,ei(F,.12)),ne.addColorStop(1,ei(F,.42,"#ffffff")),a.fillStyle=ne,a.beginPath(),a.ellipse(j,X,N,b,0,0,7),a.fill(),a.lineWidth=.0014,a.strokeStyle=ei(F,.78),a.stroke(),a.fillStyle=ei(F,.9),a.beginPath(),a.ellipse(j,X+b*.1,N*.42,b*.46,0,0,7),a.fill(),a.globalAlpha=.55,a.fillStyle=ei(F,.62,"#ffffff"),a.beginPath(),a.ellipse(j,X-b*.58,N*.6,b*.26,0,0,7),a.fill(),a.globalAlpha=1,a.fillStyle="#ffffff",a.beginPath(),a.ellipse(j-k*N*.36,X+b*.42,N*.3,b*.25,0,0,7),a.fill(),a.beginPath(),a.ellipse(j+k*N*.42,X-b*.4,N*.14,b*.11,0,0,7),a.fill(),a.restore();let D=o?.0037:.0028;if(a.fillStyle=A,a.beginPath(),a.moveTo(-M*1.03,-.0016),a.bezierCurveTo(-M*.6,_*1.2,M*.4,_*1.32,M,.0032),a.lineTo(M*1.24,.0064+(o?.0024:0)),a.bezierCurveTo(M*.55,_*1.32+D*1.7,-M*.5,_*1.2+D*1.2,-M*1.06,3e-4),a.closePath(),a.fill(),o)for(let[$,we,de,Le]of[[M*.96,.0062,M*1.34,.012],[M*.72,_*.95,M*1.02,_*1.62]])a.beginPath(),a.moveTo($-.0024,we),a.lineTo(de,Le),a.lineTo($+.0012,we-.0018),a.closePath(),a.fill();a.strokeStyle=A,a.lineCap="round",a.globalAlpha=.75,a.lineWidth=.0011,a.beginPath(),a.moveTo(M*.98,.0012),a.bezierCurveTo(M*.78,-E*.9,M*.36,-E*1.14,-M*.08,-E*1.12),a.stroke(),a.strokeStyle=ei(i.skin,.36,"#5a2a2a"),a.lineWidth=.001,a.globalAlpha=.65,a.beginPath(),a.moveTo(-M*.55,_*1.16+D+.0034),a.quadraticCurveTo(M*.1,_*1.36+D+.0042,M*.82,_*.95+D+.004),a.stroke(),a.globalAlpha=1});let T=ei(i.hairColor,.3);for(let k of[-1,1])y(k*P,I+_*1.32+(o?.0128:.0108),k,()=>{let O=o?.0027:.0046,j=i.brows,N=-j*.0055,b=j*.0034+8e-4,X=N*.3+b*.7+.0034;a.fillStyle=T,a.beginPath(),a.moveTo(-M*1.05,N-O*.5),a.quadraticCurveTo(0,X+O*.15,M*1.22,b),a.quadraticCurveTo(0,X+O*.95+8e-4,-M*1.05,N+O*.5),a.closePath(),a.fill()});let x=new Wn(r);return x.colorSpace=tn,x.anisotropy=4,x}function u1(i,e,t){let n=i.gender==="f",s=new mt,r=h1(i.jaw*(n?.92:1.05)),a=yi(r,3),o=e.shadow?t.skin:kc(16777215,{map:dd(i,r,{lod:e.lod,closed:e.closedEyes})});e.shadow||(o.userData.ownMap=!0);let l=ed(a,32);{let d=l.attributes.position,y=l.attributes.normal,v=new V,g=new V;for(let m=0;m<d.count;m++)v.set(d.getX(m),d.getY(m)-.118,d.getZ(m)+.012).normalize(),g.set(y.getX(m),y.getY(m),y.getZ(m)).lerp(v,.8).normalize(),y.setXYZ(m,g.x,g.y,g.z)}let h=le(l,o);s.add(h);let u=null;if(!e.lod&&!e.closedEyes&&!e.shadow){let d=o.map,y=dd(i,r,{closed:!0});u=v=>{o.map=v?y:d},s.userData.dispose=()=>{d.dispose(),y.dispose()}}for(let d of[-1,1]){let y=le(qt(.024,10,8),t.skin,d*.0905,.098,-.006);y.scale.set(.42,1,.72),y.rotation.y=d*.25,s.add(y)}let f=le(vn([{y:-.007,rx:.0062,rz:.005,z:.001},{y:.003,rx:.0078,rz:.0105,z:.003},{y:.03,rx:.0036,rz:.003,z:-.005}],8),t.skin,0,.066,Ho(r,0,.068)-.0035);if(f.scale.set(i.nose*(n?.85:1),1,.75+i.nose*.4),f.userData.noBake=!0,f.castShadow=!1,s.add(f),!n&&i.beard==="pleine"){let d=le(vn(yi([{y:-.05,rx:.012,rz:.012,z:.05},{y:-.025,rx:.036,rz:.028,z:.044},{y:.004,rx:.058*i.jaw,rz:.04,rb:.03,z:.04},{y:.03,rx:.064*i.jaw,rz:.046,rb:.03,z:.033},{y:.048,rx:.05,rz:.03,rb:.02,z:.04}],2),14),t.hair);s.add(d)}let p=d1(i,t.hair,n,r);return p.name="hair",s.add(p),s.userData.rings=r,s.userData.blink=u,s}function d1(i,e,t,n){let s=new mt,r=i.hair,a=new mt,o=new mt,l=new mt;if(a.name="top",o.name="front",l.name="back",s.add(a,o,l),r==="rase")return s;let h=(m,M,_,E,I,P=0,A=1.06)=>{let F=Bo(n,_,E,A),T=le(M,e,F[0],F[1],F[2]);return T.rotation.order="YXZ",T.rotation.set(-I,_,P),m.add(T),T},u=r==="boucles"?1.1:r==="brosse"?1.05:1.06;a.add(le(md(n,pd,u),e));let f=(m,M=.021,_=.36)=>m.forEach(([E,I,P,A,F])=>h(o,Bi(I,P,M,-.1,F||0),E,.211-Math.abs(E)*.016,_,A,u+.012)),p=(m,M=.04)=>{for(let _ of[-1,1])h(o,Bi(m,M,.022,-.05,0),_*1.08,.172,.1,-_*.06,u),h(o,Bi(m*.7,M*.8,.02,-.05,0),_*1.32,.16,.1,_*.06,u)},d=(m,M,_,E=1.12,I=-.45,P=.236,A=.2)=>{for(let F=0;F<m;F++)h(a,Bi(M*(.9+F*7%5*.05),_,.03,I),A+F/m*6.2832,P,E,F%2?.14:-.12,u)},y=(m,M,_,E,I,P,A,F,T,x=.026)=>{for(let k=0;k<M;k++){let O=Qt(_,E,M>1?k/(M-1):.5);h(m,Bi(P*(.92+k*5%4*.05),A,x,T),O,I,F,k%2?.1:-.1,u)}},v=[[-.84,.066,.046,.3],[-.56,.086,.052,.16],[-.26,.098,.056,.06],[.04,.104,.06,-.08],[.34,.094,.054,-.18],[.62,.082,.05,-.26],[.88,.064,.044,-.32]],g=[[-.88,.07,.05,.42],[-.56,.1,.06,.4],[-.2,.118,.066,.46],[.22,.118,.066,-.46],[.56,.1,.06,-.4],[.88,.07,.05,-.42]];switch(r){case"court":f(v),p(t?.11:.085),d(9,.105,.062),y(a,9,1.5,4.78,.2,.1,.06,.5,-.3),y(l,7,1.75,4.53,.13,.085,.05,.22,-.12);break;case"brosse":f([[-.8,.05,.045,.5],[-.45,.062,.05,.3],[-.12,.07,.05,.1],[.2,.066,.05,-.2],[.55,.06,.05,-.4],[.85,.05,.045,-.55]],.024,.75),p(.07);for(let[m,M,_,E,I]of[[-.62,.218,2.45,.1,.25],[-.2,.224,2.6,.115,.08],[.24,.224,2.6,.12,-.1],[.66,.218,2.45,.1,-.25],[-1.35,.2,2.15,.11,.2],[1.35,.2,2.15,.11,-.2],[-2.05,.2,2.05,.12,.1],[2.05,.2,2.05,.12,-.1],[-2.7,.195,1.95,.125,.1],[2.7,.195,1.95,.125,-.1],[3.14,.2,2,.13,0],[.6,.244,2.95,.1,0],[-1.4,.244,2.9,.1,0],[2.6,.244,2.85,.11,0]])h(a,Bi(E,.074,.05,.14),m,M,_,I,.99);y(l,7,1.6,4.68,.155,.07,.056,1.2,.1);break;case"mi-long":f(v),p(.19,.045),d(9,.12,.066),y(l,9,1.45,4.83,.17,.25,.066,.13,.12,.03),y(a,8,1.6,4.68,.205,.14,.064,.42,-.25);break;case"long":f(t?g:v),p(.34,.044),d(9,.13,.068),y(l,9,1.4,4.88,.17,.56,.074,.1,.03,.032),y(l,6,1.9,4.38,.19,.46,.08,.16,.02,.034);break;case"queue":f(v),p(t?.15:.1),d(8,.1,.062,1.2,-.5);{let m=le(qt(.026,10,8),e,...Bo(n,Math.PI,.2,1.1));a.add(m);for(let[M,_,E]of[[0,.4,.62],[.22,.34,.5],[-.22,.34,.5],[0,.28,.82]])h(a,Bi(_,.066,.046,-.3,0),Math.PI,.2,E,M,1.14)}break;case"chignon":f(t?g:v),p(t?.13:.08),d(8,.095,.06,1.2,-.5);{let m=Bo(n,Math.PI,.185,1.3),M=le(qt(.05,14,10),e,m[0],m[1],m[2]);M.scale.set(1,.92,.9),a.add(M);for(let _=0;_<5;_++){let E=le(Bi(.06,.035,.026,.3),e,m[0],m[1],m[2]-.01);E.rotation.set(-1.9,0,_*1.257),a.add(E)}}break;case"boucles":f([[-.8,.07,.056,.3],[-.45,.085,.06,.2],[-.1,.09,.064,0],[.26,.088,.064,-.15],[.6,.08,.06,-.25],[.88,.068,.054,-.3]],.034,.5);for(let[m,M,_,E]of[[.232,8,.1,1.25],[.2,11,.11,.85],[.165,10,.12,.5],[.125,7,.1,.4]])for(let I=0;I<M;I++){let P=m<.19?Qt(1.15,5.13,I/(M-1)):I/M*6.2832+m*9;m<.215&&Math.cos(P)>.5||h(m<.15?l:a,Bi(_,.07,.052,.55,I%2?.25:-.25),P,m,E,I%2?.25:-.25,u)}p(t?.14:.09,.05);break}return s}function Ds(i={}){let e=Object.assign({},Gc,i.look||{}),t=i.fx||{},n=e.gender==="f",s=e.build,r=e.shoulders,a=r*(.55+s*.45),o=(.4+s*.6)*e.limbs,l=.5+s*.5,h=i.outfit||{cut:"uniform",c:["#3b4452","#222831","#19c8d8"]},u=i.showArmor!==!1&&i.armor||{},f=(z,se)=>h.glow?{emissive:z,emissiveIntensity:se}:void 0,p={skin:kc(e.skin),hair:_n(e.hairColor)},d=p.skin,y=_n(h.c[0],f(h.c[0],.1)),v=_n(h.c[1],f(h.c[1],.1)),g=_n(h.c[2],f(h.c[2],.22)),m=_n(1907492),M=_n(1250072),_=_n(5922920),E=z=>z._dbl||(z._dbl=Object.assign(z.clone(),{side:jt})),I=[],P={},A=z=>P["m"+z]||(P["m"+z]=Mr(z)),F=z=>P["d"+z]||(P["d"+z]=Mr(z,!0)),T=z=>P["g"+z]||(P["g"+z]=_n(Yn[z],{emissive:Yn[z],emissiveIntensity:.9})),x=z=>(z.userData.joint=!0,z),k=z=>(z.userData.keep=!0,z),O=.47*e.legs,j=.44*e.legs,N=O+j+.105,b=new mt,X=x(dn(0,N,0));b.add(X);let ne=x(dn(0,0,0));X.add(ne);let D={hips:X,spine:ne},$=(n?[[-.095,.08,.07,.075,0],[-.03,.158,.1,.108,0],[.05,.15,.094,.1,0],[.165,.106,.076,.078,0],[.26,.124,.09,.086,.004],[.345,.142,.112,.09,.008],[.425,.152*r,.088,.088,0],[.475,.126*r,.07,.074,0],[.505,.058,.052,.056,-.004],[.53,.04,.04,.042,-.006]]:[[-.095,.085,.072,.078,0],[-.03,.15,.098,.106,0],[.06,.146,.094,.1,0],[.165,.13,.086,.09,0],[.27,.152,.1,.098,.004],[.365,.18,.114,.104,.006],[.435,.192*r,.1,.1,0],[.482,.16*r,.08,.084,0],[.51,.07,.06,.064,-.004],[.535,.05,.05,.052,-.006]]).map(([z,se,he,pe,Ie],ge)=>{let xe=ge===1||ge===2?e.hips:ge===3?e.waist:ge===4||ge===5?e.chest:1;return{y:z,rx:se*(ge>7?1:s)*xe,rz:he*(ge>7?1:l)*(ge===4||ge===5?e.chest:ge===3?(1+e.waist)/2:1),rb:pe*(ge>7?1:l)*(ge===4||ge===5?(1+e.chest)/2:1),z:Ie}}),we=yi($,3),de=z=>aa(we,z),Le=$[3],ce=$[1],ve=z=>{let se=de(z);return se.z+se.rz},Ae=h.cut,Ke=Ae==="plate",Be=(n?.088:.082)*s*e.hips;ne.add(le(vn(we,24),Ae==="cape"?_:y));let it=n?.037:.046;ne.add(le(sn(it,it*1.1,.12,12),d,0,.555,-.006));let Oe=x(dn(0,.57,.012)),We=e.headSize*1.06*(e.height<1?1+(1-e.height)*.55:1-(e.height-1)*.18);Oe.scale.setScalar(We),ne.add(Oe),D.head=Oe;let nt=u1(e,t,p);Oe.add(nt);let H=(z,se)=>{let he=z.attributes.position,pe=z.index.array,Ie=[];for(let ge=0;ge<pe.length;ge+=3){let xe=pe[ge],ut=pe[ge+1],dt=pe[ge+2];se((he.getX(xe)+he.getX(ut)+he.getX(dt))/3,(he.getY(xe)+he.getY(ut)+he.getY(dt))/3,(he.getZ(xe)+he.getZ(ut)+he.getZ(dt))/3)&&Ie.push(xe,ut,dt)}return z.setIndex(Ie),z},Te=(z,se,he,pe=24)=>{let Ie=yi(z,3),ge=vn(Ie,pe,!1,!1);if(he){let xe=ge.index.array,ut=[];for(let dt=0;dt<xe.length/6;dt++){let Rt=Math.floor(dt/pe),Dt=(dt%pe+.5)/pe*6.2832;if(he(Dt>Math.PI?Dt-6.2832:Dt,(Ie[Rt].y+Ie[Rt+1].y)/2))for(let $t=0;$t<6;$t++)ut.push(xe[dt*6+$t])}ge.setIndex(ut)}return le(ge,E(se))},me=(z,se,he,pe,Ie=.168)=>{se=Math.max(se,(Be+.098*o)/ce.rx),ne.add(Te([{y:z,rx:ce.rx*se,rz:ce.rz*se*1.05,rb:ce.rb*se*1.05},{y:Qt(z,-.03,.55),rx:ce.rx*Qt(1.09,se,.6),rz:ce.rz*Qt(1.12,se*1.05,.6),rb:ce.rb*Qt(1.12,se*1.05,.6)},{y:-.03,rx:Math.max(ce.rx*1.075,Be+.1*o),rz:ce.rz*1.13,rb:ce.rb*1.13},{y:Ie,rx:Le.rx*1.06,rz:Le.rz*1.1,rb:Le.rb*1.1}],he,pe))},Pe=(z=.27)=>(se,he)=>!(Math.abs(se)<z&&he<.1),ae=(z,se,he,pe=1.07)=>{let Ie=de(z),ge=de(se);ne.add(le(vn([{y:z,rx:Ie.rx*pe,rz:Ie.rz*pe,rb:Ie.rb*pe,z:Ie.z},{y:se,rx:ge.rx*pe,rz:ge.rz*pe,rb:ge.rb*pe,z:ge.z}],24),he))},$e=()=>{ae(.126,.174,M,1.14),ne.add(le(It(.052,.052,.02),g,0,.15,ve(.15)*1.14+.004))},De=(z,se,he,pe,Ie,ge=1.014,xe=10)=>{let ut=[],dt=[];for(let $t=0;$t<=xe;$t++){let c=$t/xe,w=Qt(z,se,c),S=Qt(he,pe,c),U=de(w),Q=U.z+U.rz*Math.sqrt(Math.max(.05,1-(S/U.rx)**2))*ge+.002;if(ut.push(-S,w,Q,S,w,Q),$t<xe){let G=$t*2;dt.push(G,G+1,G+2,G+1,G+3,G+2)}}let Rt=new Xt;Rt.setAttribute("position",new gt(ut,3)),Rt.setIndex(dt),Rt.computeVertexNormals();let Dt=le(Rt,E(Ie));Dt.castShadow=!1,ne.add(Dt)},L=(z,se,he,pe=1)=>ne.add(Te([{y:.488,rx:.086*pe,rz:.07*pe,rb:.074*pe,z:-.004},{y:.488+z,rx:.064*pe,rz:.058*pe,rb:.062*pe,z:-.006}],se,he?Ie=>Math.abs(Ie)>he:null,20)),R=(n?.168:.208)*a,te=.447,fe=(n?.8:1)*o,be=.275*e.arms,Ee=.25*e.arms,Xe=Ae==="robe",Ne=Ae==="cape"?_:y,Ue=Ae==="apron"?d:Ne,je=()=>vn(yi([{y:-.105,rx:.004,rz:.011},{y:-.094,rx:.009,rz:.024},{y:-.07,rx:.013,rz:.031},{y:-.045,rx:.016,rz:.034},{y:-.015,rx:.016,rz:.028},{y:.012,rx:.014,rz:.018}],2),10);for(let z of[-1,1]){let se=z<0?"M":"O",he=x(dn(z*R,te,0));ne.add(he),he.add(le(Fi(be,[[0,.046*fe],[.16,.051*fe],[.5,.043*fe],[.85,.037*fe],[1,.035*fe]],12),Ne));let pe=x(dn(0,-be,0));if(he.add(pe),t.oneArm&&z===-1)pe.add(le(qt(.04*fe,8,6),Ne));else{pe.add(le(Fi(Ee,Xe?[[0,.042*fe],[.5,.06*fe],[1,.082*fe,0,.8]]:[[0,.036*fe],[.22,.041*fe],[.6,.034*fe],[1,.026*fe]],12,Xe?.15:.55),Ue));let ge=n?.88:1,xe=le(je(),Ae==="plate"?v:d,0,-Ee,0);xe.scale.setScalar(ge),pe.add(xe);let ut=le(Fi(.045,[[0,.0095],[1,.0065]],8),Ae==="plate"?v:d,0,-Ee-.022*ge,.028*ge);ut.rotation.x=-.75,ut.scale.setScalar(ge),pe.add(ut),Ae!=="apron"&&!Xe&&pe.add(le(sn(.031*fe,.034*fe,.034,12),Ae==="cape"?v:g,0,-Ee+.03,0)),D["hand"+se]=k(dn(0,-Ee-.058*ge,.004)),pe.add(D["hand"+se])}D["arm"+se]=he,D["elbow"+se]=pe}D.armL=D.armM,D.armR=D.armO,D.elbowL=D.elbowM,D.elbowR=D.elbowO;let at=Be,Me=o,xt=Ae==="track"||Ae==="suit"||Ae==="tail"||Ae==="plate"?y:v,ft=()=>{let z=[[-.058,.022,.02],[-.03,.04,.036],[.03,.046,.036],[.09,.05,.028],[.142,.042,.02],[.168,.02,.011]].map(([he,pe,Ie])=>({y:he,rx:pe,rz:Ie,z:.036-Ie})),se=vn(yi(z,2),12);return se.rotateX(Math.PI/2),se};for(let z of[-1,1]){let se=z<0?"M":"O",he=x(dn(z*at,-.02,0));X.add(he),he.add(le(Fi(O,n?[[0,.09*Me],[.3,.09*Me],[.7,.066*Me],[1,.052*Me]]:[[0,.086*Me],[.3,.088*Me],[.7,.069*Me],[1,.056*Me]],14),xt));let pe=x(dn(0,-O,0));he.add(pe);let Ie=n?.92:1;pe.add(le(Fi(j,[[0,.054*Me*Ie],[.25,.06*Me*Ie,-.008],[.7,.043*Me*Ie],[1,.036*Me*Ie]],12),xt)),pe.add(le(Fi(j*.56,[[0,.054*Me*Ie*1.16],[.4,.047*Me*Ie*1.14],[1,.04*Me*Ie*1.12]],12,.2),m,0,-j*.44,-.002)),pe.add(le(sn(.062*Me*Ie,.058*Me*Ie,.03,12),Ae==="plate"?g:m,0,-j*.44,-.004));let ge=le(ft(),m,0,-j-.049,.004);if(ge.scale.setScalar(n?.9:1),pe.add(ge),u.jambieres!=null){let xe=u.jambieres;pe.add(le(Fi(j*.8,[[0,.07*Me],[.3,.074*Me,-.004],[1,.052*Me]],12,.15),A(xe),0,-j*.1,.004));let ut=le(qt(.062*Me,10,8),F(xe),0,0,.03);if(ut.scale.set(1,1.2,.8),pe.add(ut),xe>=2&&pe.add(le(new Tn(.016),T(xe),0,0,.082*Me)),xe>=5){let Rt=Er(pe,xe,{y0:-.02,y1:.08,r:.03,z:.05,mode:"lite"});Rt&&I.push(Rt)}let dt=le(ft(),F(xe),0,-j-.044,.008);dt.scale.set(1.12,1.1,1.06),pe.add(dt)}D["leg"+se]=he,D["knee"+se]=pe}D.legL=D.legM,D.legR=D.legO,D.kneeL=D.kneeM,D.kneeR=D.kneeO;let ht=!1,ot=()=>{for(let z of[-1,1])D[z<0?"armM":"armO"].add(le(It(.008,be*.86,.022),g,z*.05*fe,-be*.5,0)),D[z<0?"legM":"legO"].add(le(It(.008,O*.9,.024),g,z*.079*Me,-O*.5,0)),D[z<0?"kneeM":"kneeO"].add(le(It(.008,j*.42,.02),g,z*.055*Me,-j*.2,0))};switch(Ae){case"uniform":me(-.125,1.1,y),$e(),De(.175,.488,.009,.009,g),L(.05,g,.17);for(let z of[-1,1]){let se=le(It(.085,.014,.05),g,z*R*.86,.478,0);se.rotation.z=-z*.32,ne.add(se)}break;case"track":De(.02,.5,.007,.007,g),L(.06,g,.17,1.04),ae(-.045,-.015,v,1.03),ot();break;case"apron":ne.add(Te([{y:-O*.92,rx:ce.rx*1.24,rz:ce.rz*1.3},{y:-.03,rx:ce.rx*1.08,rz:ce.rz*1.15},{y:.168,rx:Le.rx*1.06,rz:Le.rz*1.13}],g,z=>Math.abs(z)<1.25)),De(.17,.43,.1,.075,g,1.03),$e(),L(.03,y,.35);break;case"coat":me(-O*.94,n?1.5:1.32,y,Pe()),$e(),De(.3,.5,.012,.045,g),L(.07,v,.45,1.16);break;case"blouse":me(-O*.8,1.22,y,Pe(.14)),De(.36,.5,.01,.04,v),L(.04,y,.4,1.1);{let z=le(It(.055,.05,.012),g,R*.42,.33,ve(.33)*.96+.006);ne.add(z),D.armM.add(le(sn(.06*fe,.06*fe,.05,12),g,0,-.12,0))}break;case"robe":me(-(N-.1),n?1.9:1.55,y),ht=!0,ae(.125,.2,g,1.085),De(.2,.5,.01,.05,g),L(.045,g,.35,1.12);{let z=le(It(.05,.34,.012),g,0,-.03,ce.rz*1.24);z.rotation.x=-.08,ne.add(z)}break;case"suit":me(-.12,1.07,y,Pe(.14)),De(.24,.5,.006,.05,g),De(.25,.48,.014,.012,v,1.03),L(.035,g,.35);break;case"cape":{me(-.15,1.12,_),$e(),ne.add(le(vn(yi([{y:-N*.66,rx:.3,rz:.03,z:-.2},{y:-.12,rx:.27,rz:.045,z:-.165},{y:.3,rx:.215*a,rz:.055,z:-.105},{y:.46,rx:.2*a,rz:.06,z:-.06}],3),16),y)),ne.add(Te([{y:.385,rx:.25*a,rz:.135,rb:.14},{y:.455,rx:.215*a,rz:.115,rb:.125},{y:.525,rx:.075,rz:.07,rb:.08}],y));{let z=le(qt(.075,12,8),y,0,.535,-.085);z.scale.set(1.25,.6,.8),ne.add(z)}ne.add(le(new Tn(.024),T(2),0,.455,.12));break}case"plate":{for(let z of[-1,1]){let se=le(qt(.098,12,8),y,z*R*1.02,te+.036,0);se.scale.set(1.15,.72,1.1),ne.add(se),D[z<0?"elbowM":"elbowO"].add(le(Fi(Ee*.7,[[0,.052*fe],[1,.04*fe]],12,.2),y,0,-.02,0))}ne.add(le(new Tn(.028),_n(h.c[2],{emissive:h.c[2],emissiveIntensity:.8}),0,.36,ve(.36)+.012)),me(-O*.5,1.22,g,Pe(.14)),$e(),L(.05,v,.17,1.1);break}case"tail":{De(.2,.5,.03,.06,g),me(-.1,1.05,y,z=>Math.abs(z)>.6);for(let z of[-1,1]){let se=le(It(.115,.44,.014),v,z*.064,-.22,-ce.rb*1.12);se.rotation.x=.1,ne.add(se)}for(let z of[-1,1]){let se=le(Pn(.022,.05,4),v,z*.024,.497,ve(.49)+.014);se.rotation.z=z*Math.PI/2,se.scale.z=.5,ne.add(se)}L(.035,g,.35);break}}if(u.plastron!=null){let z=u.plastron,se=we.filter(he=>he.y>=.175&&he.y<=.492).map(he=>({y:he.y,rx:he.rx*1.09,rz:he.rz*1.14,rb:he.rb*1.12,z:he.z}));se.push({y:.522,rx:.088,rz:.08,rb:.084,z:-.004}),ne.add(le(vn(se,24,!1,!1),E(A(z)))),ae(.175,.2,F(z),1.16);for(let he of[-1,1]){let pe=le(qt(.094,12,8),F(z),he*R*1.04,te+.042,0);pe.scale.set(1.2+z*.03,.7,1.14),ne.add(pe);let Ie=le(qt(.075,12,8),A(z),he*R*1.12,te-.02,0);if(Ie.scale.set(1,.8,1.1),ne.add(Ie),z>=4){let ge=le(Pn(.028,.11,6),A(z),he*R*1.2,te+.095,0);ge.rotation.z=-he*.7,ne.add(ge)}}if(De(.2,.49,.012,.012,F(z),1.16),z>=2&&ne.add(le(new Tn(.03),T(z),0,.375,ve(.375)*1.14+.016)),z>=4)for(let he of[-1,1])ne.add(le(new Tn(.02),T(z),he*R*1.04,te+.1,.03));if(z>=3)for(let he of[-1,1]){let pe=Er(ne,z,{x:he*R*1.06,y0:te+.07,y1:te+(z>=5?.2:.16),r:.05,mode:"lite"});pe&&I.push(pe)}z>=6&&I.push(ld(ne,.4,-($[5].rb+.03)))}if(u.casque!=null){let z=u.casque,se=nt.userData.rings,he=E(A(z)),pe=ge=>ge<.55?.138:ge<1?Qt(.138,.05,Hi((ge-.55)/.3)):ge<2.2?.05:.035;Oe.add(le(md(se,pe,1.13,32,7),he)),Oe.add(le(It(.016,.07,.014),F(z),0,.118,Ho(se,0,.12)*1.13+.006));{let ge=le(vn(yi([{y:0,rx:.011,rz:.11,z:-.01},{y:.03,rx:.011,rz:.118,z:-.02},{y:.055,rx:.004,rz:.07,z:-.05}],2),8),F(z),0,.262,0);Oe.add(ge)}if(z>=2&&Oe.add(le(new Tn(.015),T(z),0,.2,Ho(se,0,.2)*1.13+.012)),z>=3){let ge=le(vn(yi([{y:0,rx:.012,rz:.09,z:-.02},{y:.07,rx:.01,rz:.11,z:-.06},{y:.12,rx:.004,rz:.05,z:-.13}],2),8),_n(Yn[z]),0,.285,0);Oe.add(ge)}if(z>=5)for(let ge of[-1,1]){let xe=le(Pn(.024,.13,6),A(z),ge*.112,.215,-.02);xe.rotation.z=-ge*.9,Oe.add(xe)}if(z>=5){let ge=Er(Oe,z,{y0:z>=6?.3:.27,y1:z>=6?.33:.38,r:z>=6?.1:.03,z:-.02,mode:z>=6?"halo":"lite"});ge&&I.push(ge)}let Ie=nt.getObjectByName("hair");if(Ie){Ie.remove(Ie.getObjectByName("top"));let ge=Ie.getObjectByName("front");ge.children.slice(0,Math.max(0,ge.children.length-4)).forEach(xe=>ge.remove(xe))}}let Ge=k(dn(0,.3,-($[4].rb+.05)));ne.add(Ge);let rt=i.main&&i.main.type,_t=i.off&&i.off.type,Vt=rt?Hc[rt]||"1h":"fist",pt=[],Ce=(z,se,he)=>new Gn().setFromEuler(new is(z,se,he));function Y(z,se,he){let pe=x(cd(z.type,z.r,i.skin||null)),Ie=z.type,ge={g:pe,type:Ie,hand:D[he]},xe={parent:Ge,p:[0,0,0],q:Ce(0,0,0),s:1},ut={p:[0,0,0],q:Ce(Math.PI/2,Math.PI/2,0),s:1};return Ie==="orbe"?(xe.parent=ne,xe.p=[se*.3,.52,.12],ge.orb=!0,D.orb=pe):Ie==="grimoire"?(xe.parent=ne,xe.p=[se*(ce.rx+.035),.02,.02],xe.q=Ce(0,se*Math.PI/2,.1),ut.p=[0,0,.05],ut.q=Ce(-1.2,Math.PI/2,0),ge.hand=D.handO||D.handM):Ie==="pistolet"?(xe.parent=ne,xe.p=[se*(ce.rx+.04),.03,0],xe.q=Ce(Math.PI+.25,0,0),xe.s=.9,ut.q=Ce(0,0,Math.PI),ut.p=[0,.01,.03]):Ie==="dague"?(xe.p=[se*.17,.2,0],xe.q=Ce(0,0,se*(Math.PI-.5))):Ie==="anneaux"?(xe.p=[0,.02,.01],xe.q=Ce(Math.PI/2-.2,0,0),xe.s=.85,ut.q=Ce(Math.PI/2,0,0),ut.p=[0,0,.12],ut.s=.7):Ie==="guisarme"||Ie==="baton"?(xe.p=[-se*.12,-.62,0],xe.q=Ce(0,0,se*.3),ut.p=[0,0,-.1]):Ie==="arc"?(xe.p=[se*.1,0,0],xe.q=Ce(0,0,se*.25),ut.q=new Gn().setFromRotationMatrix(new Nt().makeBasis(new V(0,-1,0),new V(0,0,1),new V(-1,0,0))),ut.p=[0,.12,-.2],ge.hand=D.handO||D.handM):Ie==="harpe"?(xe.p=[0,-.45,-.03],xe.s=.85,ut.q=Ce(Math.PI/2,0,0),ut.p=[.02,.06,-.42],ut.s=.64,ge.hand=D.handO||D.handM):Ie==="repercuteur"?(xe.p=[se*.17,.2,0],xe.q=Ce(0,0,se*(Math.PI-.5)),ut.q=Ce(0,0,Math.PI),ut.p=[0,.06,.1]):(xe.p=[se*.17,.2,0],xe.q=Ce(0,0,se*(Math.PI-.5))),pe.userData.tick&&I.push(pe.userData.tick),ge.S=xe,ge.H=ut,pt.push(ge),He(ge,!1),ge}function He(z,se){let he=se&&z.hand&&!z.orb?z.H:z.S;(se&&z.hand&&!z.orb?z.hand:z.S.parent).add(z.g),z.g.position.set(he.p[0],he.p[1],he.p[2]),z.g.quaternion.copy(he.q),z.g.scale.setScalar(he.s)}rt&&Y(i.main,-1,"handM"),_t&&_t!=="bouclier"&&Y(i.off,1,"handO");let ke=pt.length>1&&Hc[_t]===Hc[rt],lt=_t==="bouclier"?i.off.r:u.bouclier;if(lt!=null){let z=x(hd(lt));z.position.set(.055,-.13,0),z.rotation.y=Math.PI/2,z.scale.setScalar(.8),D.elbowO.add(z),z.userData.tick&&I.push(z.userData.tick)}if(i.aura){let z=new st(i.aura),se=new ze(new oi(.42,.56,40),new Ot({color:z,transparent:!0,opacity:.55,side:jt,blending:zn,depthWrite:!1}));se.rotation.x=-Math.PI/2,se.position.y=.02,b.add(se),D.aura=se;let he=new ze(sn(.5,.42,1.5,24,!0),new Ot({color:z,transparent:!0,opacity:.1,side:jt,blending:zn,depthWrite:!1}));he.position.y=.75,b.add(he),D.auraCol=he}b.scale.setScalar(e.height);let Qe=id(b,!t.shadow&&!t.noInk);if(t.shadow){let z=typeof t.shadow=="string"?t.shadow:"#14141f",se=new Ro({color:z,transparent:!0,opacity:.8,emissive:new st(z).multiplyScalar(.6)});b.traverse(Ie=>{Ie.isMesh&&Ie.material&&!Ie.material.transparent&&!(Ie.material.emissiveIntensity>.4)&&(Ie.material.map&&Ie.material.userData.ownMap&&Ie.material.map.dispose(),Ie.material=se)});let he=new Ot({color:t.eyes||"#bfe4ff"}),pe=nt.userData.rings;for(let Ie of[-1,1]){let ge=new ze(qt(.012,8,6),he);ge.position.set(Ie*.037,.1,Ho(pe,.037,.1)+.002),ge.scale.set(1.5,.7,.5),Oe.add(ge)}}b.traverse(z=>{z.isMesh&&(z.castShadow=!z.material.transparent&&!z.userData.ink&&z.userData.noBake!==!0)});let Et=null,Ut=!1,Tt=new mt;ne.add(Tt),i.wings&&(Et=od(Tt,.4,-($[5].rb+.02),i.wings)),Tt.visible=!!i.wings&&i.wings.ground!==!1;let kt=(z,se)=>new Ot({color:z,transparent:!0,opacity:se,side:jt,blending:zn,depthWrite:!1}),bt=[];{let z=new yn(.5,1,6).rotateX(Math.PI).translate(0,-.5,0),se=kt("#ff2410",.62),he=kt("#ffb27a",.7),pe=!0;for(let Ie of[D.kneeM,D.kneeO]){let ge=new ze(z,se),xe=new ze(z,he);ge.castShadow=xe.castShadow=!1,pe||(ge.userData.sharedGeo=!0),xe.userData.sharedGeo=!0,pe=!1,xe.scale.set(.5,.55,.5),ge.add(xe),ge.position.set(0,-j-.07,.04),ge.visible=!1,Ie.add(ge),bt.push(ge)}}let Wt=new mt;Wt.visible=!1,b.add(Wt);{let z=i.aura||"#bfe8ff",se=new ze(sn(.52,.34,2.3,20,!0),kt(z,.16));se.position.y=1.15,se.castShadow=!1,Wt.add(se);let he=kt("#ffffff",.7),pe=It(.012,.3,.012);for(let ge=0;ge<9;ge++){let xe=new ze(pe,he);xe.castShadow=!1,ge&&(xe.userData.sharedGeo=!0),Wt.add(xe)}let Ie=new ze(new oi(.3,.62,32).rotateX(-Math.PI/2),kt(z,.5));Ie.position.y=.03,Ie.castShadow=!1,Wt.add(Ie)}let At={aMx:0,aMy:0,aMz:.08,aOx:0,aOy:0,aOz:.08,eM:-.12,eO:-.12,sX:0,sY:0,hdX:0,hdY:0,hdZ:0,dy:0,rZ:0},Kt=i.runPose||null,Pt={};D.armM.rotation.order=D.armO.rotation.order="XZY";let cn={epee:1,dague:1,masse:1,espadon:.75,guisarme:.7,baton:.7,lamecle:1,pistolet:1,repercuteur:.7},Bt=new Gn,Lt=new V(1,0,0),zt=0,hn=Math.random()*6,B=null,ee=!1,oe=1.5+Math.random()*4,C=0,W=Go.includes(e.stance)?e.stance:"neutre",Z=Vo.includes(e.move)?e.move:"neutre",J=lt!=null,ie=rt==="grimoire"||_t==="grimoire";function ue(){Pt.aMx=.04,Pt.aMz=.13,Pt.eM=-.05,Pt.aOx=.04,Pt.aOz=.13,Pt.eO=-.05,Pt.aMy=0,Pt.aOy=0}let _e=z=>Object.assign(Pt,z),qe=z=>{let se={};for(let he in z){let pe=he==="sY"||he==="aMy"||he==="aOy",Ie=he.replace(/M/,"#").replace(/O/,"M").replace(/#/,"O");se[he==="sY"?he:Ie]=pe?-z[he]:z[he]}return se};function Fe(z){switch(W){case"ninja":return _e({dy:-.09,sX:.3,hdX:-.24,aMx:-.95,aMy:.8,aMz:.1,eM:-1.95,aOx:-.95,aOy:-.8,aOz:.1,eO:-1.95}),[-.55,.75,.2,.55,.14];case"souverain":return _e({sX:-.08,hdX:-.1,aMx:.3,aMy:1.35,aMz:.7,eM:-1.75,aOx:.3,aOy:-1.35,aOz:.7,eO:-1.75}),[0,0,0,0,.13];case"digne":return _e({sX:-.04,hdX:.05,aMx:-.6,aMy:1.42,aMz:.04,eM:-1.8,aOx:-.5,aOy:-1.42,aOz:.04,eO:-1.95}),[0,0,0,0,.1];case"humble":return _e({sX:.2,hdX:.28,aMx:-.32,aMy:1,aMz:.05,eM:-.85,aOx:-.32,aOy:-1,aOz:.05,eO:-.85}),[0,0,0,0,.01];case"timide":return _e({sX:.1,sY:.12+Math.sin(z*.9)*.05,hdX:.24,hdZ:.16,hdY:-.2,aMx:.05,aMz:.04,eM:-.1,aOx:-.15,aOy:-1.3,aOz:.02,eO:-1.25}),[.02,.05,.2,.5,-.02]}return null}let Ze={slash(z,se){let he=z<.36,pe=z<.66,Ie=ke&&se%2===1,ge=ke?(se>>1)%3:se%3,xe=ge===0?he?{aMx:-2.55,aMz:.45,eM:-1.1,sY:-.5,sX:-.08}:pe?{aMx:-.5,aMz:-.75,eM:-.1,sY:.55,sX:.2}:null:ge===1?he?{aMx:-1.4,aMz:-.95,eM:-1.35,sY:.5}:pe?{aMx:-1.4,aMz:.95,eM:-.08,sY:-.55,sX:.1}:null:he?{aMx:.35,aMz:.2,eM:-2.1,sY:-.45}:pe?{aMx:-1.5,aMz:-.12,eM:-.03,sY:.4,sX:.24}:null;xe&&_e(Ie?qe(xe):xe)},heavy(z,se){let he=z<.42,pe=z<.72;se%2===0?he?_e({aMx:-2.9,aOx:-2.9,aMz:-.2,aOz:-.3,eM:-.8,eO:-.8,sX:-.3,dy:.03}):pe&&_e({aMx:-.75,aOx:-.75,aMz:-.3,aOz:-.4,eM:-.3,eO:-.3,sX:.5,dy:-.09}):he?_e({aMx:-1.3,aMz:.9,eM:-.6,aOx:-1.3,aOz:-1.2,eO:-.9,sY:-.8}):pe&&_e({aMx:-1.3,aMz:-.9,eM:-.3,aOx:-1.3,aOz:.6,eO:-.6,sY:.8,sX:.15})},shoot(z,se){if(z>.8)return;if(Vt==="cannon"){_e({aMx:-1.3,aMz:-.05,eM:-.55,aOx:-1.42,aOz:-.5,eO:-.3}),z>.3&&z<.5&&_e({sX:-.16,aMx:-1.45});return}let he=z>.3&&z<.48?{aMx:-1.78,aMz:-.06,eM:-.5}:{aMx:-1.52,aMz:-.06,eM:-.04};_e(ke&&se%2===1?qe(he):he)},bow(z){z<.55?_e({aOx:-1.5,aOz:.38,eO:-.04,aMx:-1.5,aMz:.3,eM:-2.35,sY:-.45}):z<.82&&_e({aOx:-1.5,aOz:.38,eO:-.04,aMx:-1.45,aMz:.7,eM:-1.2,sY:-.45})},cast(z){z<.4?_e({aMx:-.7,aMz:.3,eM:-2.2,sY:-.35}):z<.75&&_e({aMx:-1.5,aMz:-.1,eM:-.05,sY:.3,sX:.12})},castUp(z){z<.78&&_e({aMx:-2.85,aOx:-2.85,aMz:.4,aOz:.4,eM:-.3,eO:-.3,sX:-.22,hdX:-.3})},slam(z){z<.45?_e({aMx:-2.9,aOx:-2.9,aMz:-.15,aOz:-.25,eM:-.6,eO:-.6,sX:-.3,dy:.5*Math.sin(z/.45*Math.PI*.6)}):z<.82&&_e({aMx:-.6,aOx:-.6,aMz:-.2,aOz:-.3,eM:-.2,eO:-.2,sX:.7,dy:-.3})},strum(z){_e({aOx:-.8,aOz:-.2,eO:-1.6}),z<.35?_e({aMx:-1.25,aMz:.4,eM:-1.5}):z<.72&&_e({aMx:-1,aMz:-.55,eM:-1.15,sY:.2})},punch(z,se){let he=z<.32?{aMx:.3,eM:-2.2,sY:-.4}:z<.66?{aMx:-1.5,aMz:-.15,eM:-.03,sY:.45,sX:.15}:null;he&&_e(se%2?qe(he):he)},spin(z){_e({aMx:-.35,aOx:-.35,aMz:1.2,aOz:1.2,eM:-.1,eO:-.1,sX:.12})},roll(z){_e({aMx:-.9,aOx:-.9,eM:-2,eO:-2,sX:.9,dy:-.4})},flip(z){_e({aMx:-.7,aOx:-.7,aMz:.3,aOz:.3,eM:-1.6,eO:-1.6,sX:.55,hdX:.2})},dash(z){_e({sX:.85,hdX:-.55,aMx:1,aOx:1,aMz:.28,aOz:.28,eM:-.25,eO:-.25,dy:-.24})},hurt(z){_e({sX:-.28,aMz:.5,aOz:.5,hdX:-.25})}};return{group:b,joints:D,height:(N+.57+Ls*We)*e.height,seatDrop:N*e.height,cat:Vt,dual:ke,inks:Qe,scale:e.height,get armed(){return ee},get acting(){return B?B.name:null},get move(){return Z},get stance(){return W},setArmed(z){if(z=!!z,z!==ee){ee=z;for(let se of pt)He(se,z)}},setStyle(z){z.stance&&Go.includes(z.stance)&&(W=z.stance),z.move&&Vo.includes(z.move)&&(Z=z.move)},play(z,se=.5,he=0,pe=1){Ze[z]&&(B={name:z,t:0,dur:se,c:he,turns:pe})},hand(z,se){let he=D[se?"handO":"handM"]||D.handO||D.handM;return he?he.getWorldPosition(z):b.getWorldPosition(z)},update(z,se={}){let he=Math.min(3.2,se.speed||0),pe=C+=z,Ie=Math.sin(pe*1.6),ge=!!se.fly&&!se.riding&&!se.down,xe=Z==="levitation"&&!ge&&!se.riding&&!se.down,ut=he>.02,dt=Z==="ninja"&&he>.9&&!ge&&!se.riding&&!se.down;hn+=z*(4.6+he*3.4)*(dt?1.3:1)*(ut?1:0),_e({aMx:Ie*.02,aMy:0,aMz:.08,aOx:-Ie*.02,aOy:0,aOz:.08,eM:-.12,eO:-.12,sX:Ie*.008,sY:0,hdX:0,hdY:0,hdZ:0,dy:Ie*.003,rZ:0});let Rt=null,Dt=!1,$t=!1;if(se.riding)Rt=[-1.25,1.3,-1.25,1.3,se.wide||.45],_e({sX:.06+Ie*.01,aMx:-.75,aOx:-.75,eM:-.5,eO:-.5,dy:0}),Dt=!0;else if(se.down)Rt=[-1.48,1.5,.15,1.65,0],_e({sX:.5,hdX:.45,dy:-(O-.06),aMx:-.35,aOx:-.2,eM:-.5,eO:-.3});else if(ge){let q=Math.min(1,he/2.2);Rt=[.16+q*.16,.28-q*.1,.3+q*.12,.42-q*.2,.03],_e({sX:.05+q*.1,hdX:-q*.55,aMx:.2+q*.5,aOx:.2+q*.5,aMz:.34,aOz:.34,eM:-.14,eO:-.14,dy:Math.sin(pe*2)*.03})}else if(ut&&xe){let q=Math.min(1,he/2),re=Math.sin(pe*1.7);Rt=[-.3,.58,.04+q*.05,.1,0],_e({sX:.05+q*.09,hdX:-.03-q*.06,aMx:.12+q*.16+re*.02,aOx:.12+q*.16-re*.02,aMz:.16+q*.05,aOz:.16+q*.05,eM:-.22,eO:-.22})}else if(ut){let q=Math.max(0,Math.min(1,he-.75)),re=dt?.72:(ht?.3:.55)+Math.min(he,1.4)*(ht?.12:.3),ye=Math.sin(hn),Se=(.7+q)*re*1.5;Rt=[ye*re,Math.max(0,-Math.cos(hn))*Se,-ye*re,Math.max(0,Math.cos(hn))*Se,0],Dt=!0,_e(dt?{sX:.8,hdX:-.58,aMx:.72+ye*.05,aOx:.72-ye*.05,aMz:.1,aOz:.1,eM:-.08,eO:-.08,sY:ye*.05,dy:-.1+Math.abs(Math.cos(hn))*.03}:{aMx:-ye*re*.8,aOx:ye*re*.8,eM:-.25-q*.9-Math.max(0,-ye)*.4,eO:-.25-q*.9-Math.max(0,ye)*.4,sX:.04+q*.2,sY:ye*.07,dy:Math.abs(Math.cos(hn))*.025*(1+q)})}else!ee&&!B&&(Rt=Fe(pe),$t=!0);if(xe&&(ut||(Rt=[-.2,.42,.02,.08,0]),Dt=!1,Pt.dy=.24+Math.sin(pe*2.2)*.02),ee&&!ge&&!se.riding&&!se.down&&!dt){let q=Pt.aMx,re=Pt.aOx,ye=Pt.sY;xe&&(Pt.aMz=Pt.aOz=.08,Pt.eM=Pt.eO=-.12),ue(),ut&&!xe&&(Pt.aMx+=q*.55,Pt.aOx+=re*.55,Pt.eM=Pt.eO=-.22,Pt.sY+=ye)}if(Kt==="aion"&&ee&&ut&&he>.9&&!ge&&!se.riding&&!se.down){let q=Math.sin(hn);_e({aOx:-1.3,aOy:-.95,aOz:.12,eO:-1.95,aMx:1+q*.05,aMy:0,aMz:.22,eM:-.04,sY:.26+q*.04}),xe||(Pt.sX=.5,Pt.hdX=-.36)}let c=0,w=0;if(B){B.t+=z;let q=B.t/B.dur;q>=1?B=null:(Ze[B.name](q,B.c),B.name==="spin"&&(c=Hi(q)*6.2832*B.turns),B.name==="roll"&&(w=Hi(q)*6.2832,Rt=[-1.7,2.2,-1.7,2.2,0],Dt=!1),B.name==="flip"&&(w=-Hi(q)*6.2832,Rt=[-1.75,2.25,-1.75,2.25,0],Dt=!1),B.name==="dash"&&!xe&&(Rt=[-1.05,.55,.75,.95,0],Dt=!1),B.name==="slam"&&q<.45&&(Rt=[-.5,1.1,.3,.9,0],Dt=!1))}let S=1-Math.exp(-(B||se.riding?30:dt?16:12)*z);for(let q in At)At[q]+=(Pt[q]-At[q])*S;D.armM.rotation.set(At.aMx,At.aMy,-At.aMz),D.armO.rotation.set(At.aOx,At.aOy,At.aOz),D.elbowM.rotation.x=At.eM,D.elbowO.rotation.x=At.eO,ne.rotation.x=At.sX,ne.rotation.y=At.sY,X.position.y=N+At.dy,X.rotation.y=c,X.rotation.x=w,X.rotation.z=At.rZ,Oe.rotation.set(At.hdX,At.hdY+(ut||B||W==="timide"?0:Math.sin(pe*.4)*.08),At.hdZ);let U=Dt?1:1-Math.exp(-(Rt?16:8)*z),Q=Rt||[0,0,0,0,0];if(D.legM.rotation.x+=(Q[0]-D.legM.rotation.x)*U,D.kneeM.rotation.x+=(Q[1]-D.kneeM.rotation.x)*U,D.legO.rotation.x+=(Q[2]-D.legO.rotation.x)*U,D.kneeO.rotation.x+=(Q[3]-D.kneeO.rotation.x)*U,D.legM.rotation.z+=(-Q[4]-D.legM.rotation.z)*U,D.legO.rotation.z+=((Q[5]??Q[4])-D.legO.rotation.z)*U,D.orb){let q=D.orb;ee?q.position.set(-.26,.42+Math.sin(pe*2)*.03,.34):q.position.set(-.3,.52+Math.sin(pe*2)*.03,.12),q.rotation.y=pe}D.aura&&(D.aura.rotation.z=pe*.5,D.aura.material.opacity=.42+Math.sin(pe*2.2)*.14,D.auraCol.material.opacity=.08+Math.sin(pe*1.7)*.03);{let q=ee&&!B&&!ge&&!se.riding&&!se.down&&!dt&&!(Kt==="aion"&&ut&&he>.9)?ut?.5:.92:0;if(zt+=(q-zt)*(1-Math.exp(-(B?40:10)*z)),ee)for(let re of pt)re.hand&&!re.orb&&cn[re.type]&&re.g.quaternion.copy(Bt.setFromAxisAngle(Lt,zt*cn[re.type])).multiply(re.H.q)}for(let q of I)q(pe);Et&&(Tt.visible=ge||i.wings.ground!==!1,Tt.visible&&Et(pe,ge?1:0));for(let q=0;q<bt.length;q++){let re=bt[q];if(re.visible=xe,xe){let ye=1+.28*Math.sin(pe*13+q*1.9)+.14*Math.sin(pe*21+q),Se=Math.min(1,he/2);re.scale.set(.04,(.075+Se*.04)*ye,.04),re.rotation.x=-.1-Se*.45}}let G=$t&&W==="digne";if(Wt.visible=G,G){let q=Wt.children;q[0].material.opacity=.13+Math.sin(pe*5)*.05,q[0].scale.set(1+Math.sin(pe*7)*.04,1,1+Math.sin(pe*7)*.04);for(let re=1;re<=9;re++){let ye=(pe*.9+re*.37)%1,Se=re*2.4+pe*.6;q[re].position.set(Math.cos(Se)*.44,ye*2.2,Math.sin(Se)*.44),q[re].scale.y=.6+ye}q[1].material.opacity=.5+Math.sin(pe*6)*.2,q[10].rotation.y=-pe,q[10].scale.setScalar(1+Math.sin(pe*5)*.06)}let K=nt.userData.blink;K&&(oe-=z,oe<0&&(K(oe>-.11),oe<=-.11&&(oe=2.2+Math.random()*4)))}}}function gd(i,e,t={}){let n=new As({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.outputColorSpace=tn,n.toneMapping=wi,n.shadowMap.enabled=!0,n.shadowMap.type=ia;let s=new as,r=new rs(n);s.environment=r.fromScene(new vr,.04).texture,r.dispose();let a=new wn(28,1,.1,50);s.add(new mr(16777215,9078440,1.15));let o=new ls(16774890,2.15);o.position.set(1.1,2.6,3.4),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),Object.assign(o.shadow.camera,{left:-2,right:2,top:3,bottom:-1,near:.5,far:12}),o.shadow.bias=-.0015,s.add(o);let l=new ls(58879,1.1);l.position.set(-3,2,-3),s.add(l);let h=new ls(10185727,.9);h.position.set(3,1.5,-3),s.add(h);let u=document.createElement("canvas");u.width=u.height=256;let f=u.getContext("2d"),p=f.createRadialGradient(128,128,10,128,128,128);p.addColorStop(0,"rgba(0,240,255,.34)"),p.addColorStop(.45,"rgba(139,92,246,.16)"),p.addColorStop(1,"rgba(0,0,0,0)"),f.fillStyle=p,f.fillRect(0,0,256,256),f.strokeStyle="rgba(0,240,255,.5)",f.lineWidth=2,f.beginPath(),f.arc(128,128,84,0,7),f.stroke(),f.strokeStyle="rgba(0,240,255,.2)",f.beginPath(),f.arc(128,128,108,0,7),f.stroke();let d=new ze(new Si(1.5,48),new Ot({map:new Wn(u),transparent:!0,depthWrite:!1}));d.rotation.x=-Math.PI/2,s.add(d);let y=new ze(new Si(1.5,32),new To({opacity:.45}));y.rotation.x=-Math.PI/2,y.position.y=.002,y.receiveShadow=!0,s.add(y);let v=new mt;s.add(v);let g=null,m=null,M=t.zoom||"body",_=t.yaw??-.35,E=null,I=0,P=!1,A=!!t.walk,F={y:.9,d:4.6};function T(X){g&&(v.remove(g.group),xi(g.group)),m&&(v.remove(m.group),xi(m.group),m=null),g=Ds(X),v.add(g.group),X.armed&&g.setArmed(!0),X.mount&&Ei[X.mount]?(m=Ei[X.mount].make(),Oo(m.group),v.add(m.group),g.group.position.set(0,m.seat.y-g.seatDrop,m.seat.z),g.wide=m.wide):g.group.position.set(0,0,0)}T(e);function x(){let X=i.clientWidth||300,ne=i.clientHeight||400;(i.width!==Math.round(X*n.getPixelRatio())||i.height!==Math.round(ne*n.getPixelRatio()))&&(n.setSize(X,ne,!1),a.aspect=X/ne,a.updateProjectionMatrix())}let k=X=>{E={x:X.clientX,yaw:_},I=performance.now(),i.setPointerCapture&&i.setPointerCapture(X.pointerId)},O=X=>{E&&(_=E.yaw+(X.clientX-E.x)*.012,I=performance.now())},j=()=>{E=null};i.addEventListener("pointerdown",k),i.addEventListener("pointermove",O),i.addEventListener("pointerup",j),i.addEventListener("pointercancel",j),i.style.touchAction="pan-y";let N=performance.now();function b(X){if(P)return;requestAnimationFrame(b);let ne=Math.min(.05,(X-N)/1e3);if(N=X,!i.isConnected||i.offsetParent===null)return;x(),t.spin&&M!=="face"&&!E&&X-I>2500&&(_+=ne*.25),v.rotation.y=_;let D=g.height+(m?m.seat.y-g.seatDrop:0),$=a.aspect,we=Math.max(D,1.8),de=g.scale||1,Le=M==="face"?{y:D-.15*de,d:1.12*Math.max(.75,de)/Math.min(1,$*.9)}:m?{y:D*.5,d:Math.max(D*2.6,3.4/Math.min(1,$*1.2))}:{y:we*.5,d:we*2.35/Math.min(1,$*1.9)};F.y+=(Le.y-F.y)*Math.min(1,ne*6),F.d+=(Le.d-F.d)*Math.min(1,ne*6),a.position.set(0,F.y+(M==="face"?.02:.25),F.d),a.lookAt(0,F.y,0),t.freeze||(g.update(ne,{speed:A&&!m?2:0,riding:!!m,wide:g.wide}),m&&m.update(ne,A?.8:0)),n.render(s,a)}return requestAnimationFrame(b),{set:T,setZoom(X){M=X},setArmed(X){g&&g.setArmed(X)},play(X,ne,D,$){g&&(g.setArmed(!0),g.play(X,ne,D,$))},get avatar(){return g},setWalk(X){A=X},setYaw(X){_=X,I=performance.now()},snapshot(){return n.render(s,a),i.toDataURL("image/png")},dispose(){P=!0,i.removeEventListener("pointerdown",k),i.removeEventListener("pointermove",O),i.removeEventListener("pointerup",j),xi(s),n.dispose()}}}var Wo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ti=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},f1=new ur(-1,1,1,-1,0,1),Vc=class extends Xt{constructor(){super(),this.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gt([0,2,0,0,2,0],2))}},p1=new Vc,fs=class{constructor(e){this._mesh=new ze(p1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,f1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Xo=class extends ti{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof xn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cs.clone(e.uniforms),this.material=new xn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new fs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var oa=class extends ti{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},qo=class extends ti{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Yo=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Re);this._width=n.width,this._height=n.height,t=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xo(Wo),this.copyPass.material.blending=bi,this.clock=new Po}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}oa!==void 0&&(a instanceof oa?n=!0:a instanceof qo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Zo=class extends ti{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new st}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var xd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new st(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Tr=class i extends ti{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Re(e.x,e.y):new Re(256,256),this.clearColor=new st(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Fn(r,a,{type:pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let p=new Fn(r,a,{type:pi});p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let d=new Fn(r,a,{type:pi});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=xd;this.highPassUniforms=cs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Re(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Wo;this.copyUniforms=cs.clone(u.uniforms),this.blendMaterial=new xn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:zn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new st,this.oldClearAlpha=1,this.basic=new Ot,this.fsQuad=new fs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new xn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Re(.5,.5)},direction:{value:new Re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new xn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Tr.BlurDirectionX=new Re(1,0);Tr.BlurDirectionY=new Re(0,1);var yd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Jo=class extends ti{constructor(){super();let e=yd;this.uniforms=cs.clone(e.uniforms),this.material=new Ao({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new fs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ht.getTransfer(this._outputColorSpace)===Yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Rc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===sa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ic&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ca=[1,3,6,10,20],vd=120,_d=7,Wc=.12,Xc={templier:1.012,gladiateur:1.027,rodeur:1.046,assassin:.966,sorcier:1.027,spiritualiste:1.173,clerc:1.027,aede:1.017,pistolero:.982,ethertech:.99,peintre:1.021,barde:1.012,"templier:epee":1.012,"gladiateur:guisarme":1.027,"rodeur:arc":1.046,"assassin:dague+dague":.966,"assassin:epee+dague":.976,"sorcier:orbe":1.027,"spiritualiste:orbe":1.173,"clerc:baton":1.027,"aede:baton":1.017,"pistolero:pistolet+pistolet":.982,"ethertech:lamecle":.99,"peintre:anneaux":1.021,"templier:espadon":1.008,"gladiateur:espadon":.997,"rodeur:dague+epee":.984,"assassin:dague+epee":.962,"assassin:epee+epee":.966,"sorcier:grimoire":1.027,"spiritualiste:grimoire":1.173,"clerc:masse":1.036,"aede:masse":1.058,"pistolero:repercuteur":1.016,"barde:harpe":1.012},ha=[{id:"feu",name:"Esprit de feu",color:16742954,hp:4,mult:.9,iv:1.2,aoe:3.6,sc:1},{id:"terre",name:"Esprit de terre",color:11569738,hp:10,mult:1.05,iv:1.4,aoe:3,sc:1.25,taunt:28,cc:{slow:[.3,2]}},{id:"vent",name:"Esprit de vent",color:10217680,hp:3,mult:.3,iv:.4,aoe:2.6,sc:.9},{id:"eau",name:"Esprit d\u2019eau",color:4892927,hp:4,mult:.75,iv:1,aoe:2.8,sc:1,heal:2}],Ar=i=>i.busy??(i.cast??.25)+.2+(i.dmg&&i.dmg.hits>1?(i.dmg.hits-1)*(i.dmg.gap||.15):0),la={dague:{spd:1.2,hits:1,crit:.1,cdm:2.3,var:.03,reach:2.1},epee:{spd:1.4,hits:2,crit:.05,cdm:2.1,var:.1,reach:2.6},masse:{spd:1.5,hits:2,crit:.01,cdm:2.1,var:.1,reach:2.5},espadon:{spd:2.4,hits:3,crit:.05,cdm:1.85,var:.06,reach:3.4,kd:.25},guisarme:{spd:2.8,hits:4,crit:.05,cdm:1.85,var:.25,reach:3.9,kd:.45},baton:{spd:2,hits:3,crit:.05,cdm:1.85,var:.1,reach:3.3,kd:.25},lamecle:{spd:2.4,hits:3,crit:.05,cdm:1.5,var:.1,reach:2.8,kd:.25},anneaux:{spd:2,hits:2,crit:.05,cdm:1.85,var:.06,range:15},arc:{spd:2.4,hits:2,crit:.05,cdm:1.85,var:.1,range:25,kb:2.5},orbe:{spd:2.2,hits:1,crit:.05,cdm:1.5,var:.18,range:15},grimoire:{spd:2.2,hits:1,crit:.05,cdm:1.5,var:.06,range:25},pistolet:{spd:1.8,hits:1,crit:.05,cdm:2.1,var:.06,range:15},repercuteur:{spd:2.8,hits:1,crit:.05,cdm:1.5,var:.18,range:25},harpe:{spd:2.4,hits:1,crit:.05,cdm:1.5,var:.1,range:25},poing:{spd:1.4,hits:1,crit:0,cdm:1.5,var:.1,reach:1.9}},m1=1/6,g1=1,Gi={crit:.5,aspd:.5,dodge:.3,parry:.4,block:.5},Md={espadon:1,guisarme:1,baton:1},x1={arc:"bow",pistolet:"shoot",repercuteur:"shoot",harpe:"strum",orbe:"cast",grimoire:"cast"};function bd(i,e,t){let n=la[e]||la.poing,s=t&&t!=="bouclier"&&la[t]&&!n.range&&!Md[e]?la[t]:e==="pistolet"&&t==="pistolet"?la.pistolet:null,r=wd(i,e||"poing",n,!!s,t==="bouclier"),a=[1];s&&a.push(g1);for(let h=1;h<n.hits+(s?s.hits-1:0);h++)a.push(.1);let o=a.reduce((h,u)=>h+u,0),l=r.basic;return l.dur=n.spd*m1*(l.castK||1),l.seq=a,l.F=o,l.mult=l.rate*l.dur/o,l.kind==="melee"?l.reach=(n.reach||2.4)+(l.reachPlus||0):n.range&&!l.range&&(l.range=n.range),r.W=n,r.var=n.var,r.ref={crit:.05+n.crit,cdm:n.cdm},r.id=i+":"+(e||"poing")+(s?"+"+t:""),r}function wd(i,e,t,n,s){let r=!!Md[e],a=!!t.range,o=x1[e]||"slash",l=r?"heavy":"slash",h=(u,f)=>({name:u,ult:2,exec:1,cast:.5,busy:.95,lock:.8,cc:f});switch(i){case"templier":return{role:"Tank",melee:!0,sustain:!0,passive:{guard:.35,block:s?.25:0},basic:{kind:"melee",anim:l,hit:r?.56:.5,rate:3,arc:r?1.45:1.3},skills:[{name:"Capture",cd:8,anim:"cast",cast:.2,dmg:{kind:"target",mult:1.2,range:20},cc:{pull:1,kd:1.5}},{name:"Choc du bouclier",cd:10,anim:"heavy",cast:.3,dmg:{kind:"melee",mult:1.6,r:4.2,arc:1.6},cc:{kd:2.5}},{name:"Brise-armure",cd:14,anim:"slash",cast:.25,dmg:{kind:"melee",mult:1,r:4,arc:1.6},cc:{weak:[.3,8],aspd:[.3,8]}},{name:"Rempart inviolable",ult:1,anim:"castUp",cast:.4,lock:.5,dmg:{kind:"around",mult:3,r:7},cc:{kd:2},self:{inv:6,heal:25}},h("Ch\xE2timent",{kd:3})]};case"gladiateur":return{role:"Combattant de zone",melee:!0,sustain:!0,passive:{kdOnCrit:1.5,guard:.15},basic:{kind:"melee",anim:l,hit:r?.56:.5,rate:3.1,arc:r?1.9:1.6},skills:[{name:"Encha\xEEnement",cd:7,anim:"spin",cast:.12,turns:2,dmg:{kind:"melee",mult:[.9,1.2,1.8],hits:3,gap:.28,r:4.2,arc:1.9}},{name:"Onde entravante",cd:9,anim:"slam",cast:.34,lock:.3,dmg:{kind:"around",mult:1.3,r:7},cc:{slow:[.5,5]}},{name:"Posture de rage",cd:20,anim:"castUp",cast:.3,self:{atk:[.35,10]}},{name:"Tourbillon de guerre",ult:1,anim:"spin",cast:.12,turns:3,dmg:{kind:"around",mult:1.1,hits:5,gap:.17,r:6.5},self:{inv:1}},h("Ex\xE9cution")]};case"rodeur":return{role:"Archer",melee:!a,sustain:!a,basic:a?{kind:"shot",anim:o,hit:.58,rate:2.5,proj:"arrow",speed:60}:{kind:"melee",anim:l,hit:.5,rate:2.5,arc:1.3},skills:[{name:"Pi\xE8ge \xE0 pointes",cd:10,anim:"cast",cast:.2,special:"trap",dmg:{mult:2,r:4},cc:{root:4,slow:[.4,6],sil:4}},{name:"Tir de pr\xE9cision",cd:14,anim:o,cast:.3,dmg:{kind:"shot",mult:4.2,crit:1,pierce:1,size:1.8,proj:a?"arrow":"bolt",speed:70}},{name:"Camouflage",cd:16,anim:"cast",cast:.1,busy:.2,self:{stealth:[4,2.2],aspd:[.3,8]}},{name:"Pluie de fl\xE8ches",ult:1,anim:o,cast:.4,dmg:{kind:"zone",mult:.75,hits:8,gap:.22,r:6},cc:{slow:[.5,4]}},h("Fl\xE8che du silence",{sil:6})]};case"assassin":return{role:"Furtif",melee:!0,sustain:!0,passive:{dodge:.2,back:{crit:.25,cdm:.5}},basic:{kind:"melee",anim:"slash",hit:.5,rate:3.1,arc:1.2,rune:1},skills:[{name:"Embuscade",cd:6,anim:"slash",cast:.12,move:"tp",dmg:{kind:"target",mult:1.6,range:22,aoe:4},cc:{stun:1.5},self:{atk:[.25,3]},chain:{name:"Balayage",anim:"spin",cast:.1,dmg:{kind:"around",mult:.9,r:4.8},cc:{kd:1.5}}},{name:"Frappe runique",cd:9,anim:"spin",cast:.1,dmg:{kind:"around",mult:.6,hits:3,gap:.14,r:4.8},cc:{stun:1,runes:1},chain:{name:"Explosion de runes",anim:"slam",cast:.15,special:"runes",dmg:{kind:"around",mult:.6,per:.3,r:6}}},{name:"Dissimulation",cd:18,anim:"cast",cast:.1,busy:.2,self:{stealth:[8,3],reset:1}},{name:"Danse des mille lames",ult:1,anim:"spin",cast:.1,turns:3,dmg:{kind:"around",mult:.85,hits:6,gap:.14,r:5.5},cc:{stun:.8},self:{inv:1.2}},h("Assassinat",{stun:2})]};case"sorcier":return{role:"Mage de destruction",melee:!1,basic:{kind:"shot",anim:"cast",castK:2,hit:.62,rate:3.1,proj:"bolt",speed:30,aoe:2.6,size:1.5,slowSelf:.35},skills:[{name:"Sommeil",cd:12,anim:"cast",cast:.35,area:{kind:"zone",r:4.5},cc:{sleep:6},color:12167423},{name:"Racines de glace",cd:9,anim:"cast",cast:.45,lock:.4,dmg:{kind:"zone",mult:1.5,r:5.5},cc:{root:4,slow:[.5,6],sil:4},color:9428223},{name:"M\xE9tamorphose",cd:16,anim:"cast",cast:.4,area:{kind:"target"},cc:{tree:5},color:9166954},{name:"M\xE9t\xE9ore",ult:1,anim:"castUp",cast:1.1,lock:1.1,meteor:1,dmg:{kind:"zone",mult:6,r:7}},h("N\xE9ant")]};case"spiritualiste":return{role:"Invocateur",melee:!1,basic:{kind:"shot",anim:"cast",hit:.5,rate:1.4,proj:"bolt",speed:32,dot:[.3,6]},skills:[{name:"Esprit \xE9l\xE9mentaire",cd:10,anim:"castUp",cast:.4,special:"spirit"},{name:"Peur",cd:12,anim:"cast",cast:.35,area:{kind:"around",r:8},cc:{fear:4}},{name:"Absorption",cd:10,anim:"cast",cast:.35,dmg:{kind:"target",mult:1.6,steal:60,range:26},cc:{sap:[.3,8]},self:{shield:[20,8]}},{name:"Fureur \xE9l\xE9mentaire",ult:1,anim:"castUp",cast:.5,special:"enrage",eq:6,dmg:{kind:"zone",mult:3,r:6}},h("Marche des ombres",{fear:3})]};case"clerc":return{role:"Soigneur",melee:!1,passive:{guard:.2,rez:90},basic:{kind:"shot",anim:"cast",hit:.5,rate:3,proj:"bolt",speed:32,range:20,aoe:2.6},skills:[{name:"Soin \xE9clair",cd:4,anim:"cast",cast:.1,busy:.25,self:{heal:25,hot:[3,6]}},{name:"Ch\xE2timent paralysant",cd:10,anim:"cast",cast:.35,dmg:{kind:"zone",mult:1.7,r:4.5},cc:{para:3}},{name:"Grande gu\xE9rison",cd:12,anim:"castUp",cast:1.3,lock:1.3,self:{heal:70}},{name:"Jugement divin",ult:1,anim:"castUp",cast:.7,lock:.7,dmg:{kind:"zone",mult:5,r:7},cc:{root:4}},{name:"Barri\xE8re sacr\xE9e",ult:2,anim:"castUp",cast:.3,self:{inv:6,heal:100,guard:[.5,12]}}]};case"aede":return{role:"Soutien",melee:!0,sustain:!0,passive:{atk:.1,regen:.01,mantra:1},basic:{kind:"melee",anim:"heavy",hit:.56,rate:2.5,arc:1.8,reachPlus:r?0:.5},skills:[{name:"Jugement in\xE9luctable",cd:8,anim:"cast",cast:.25,dmg:{kind:"shot",mult:1.5,proj:"bolt",range:22,speed:40},cc:{stun:2.5}},{name:"Parole de vie",cd:5,anim:"cast",cast:.1,busy:.25,self:{heal:18}},{name:"Chant d\u2019inspiration",cd:16,anim:"castUp",cast:.3,self:{crit:[.4,10],aspd:[.2,10]},area:{kind:"around",r:9},cc:{aspd:[.4,8]}},{name:"Onde de choc",ult:1,anim:"slam",cast:.4,lock:.5,dmg:{kind:"around",mult:4.5,r:6.5},cc:{kd:2}},{name:"Mantra de victoire",ult:2,anim:"castUp",cast:.3,self:{atk:[.5,8],crit:[1,8],heal:40}}]};case"pistolero":return{role:"Tireur mobile",melee:!1,basic:e==="repercuteur"?{kind:"shot",anim:"shoot",hit:.36,rate:3,proj:"shell",speed:36,aoe:2.6,bounce:1}:{kind:"shot",anim:"shoot",hit:.34,rate:2.8,proj:"bullet",speed:85,bounce:2},skills:[{name:"Canon magique",cd:7,anim:o,cast:.3,lock:.25,dmg:{kind:"shot",mult:4.2,proj:"shell",aoe:3.8,size:2,speed:36},cc:{stun:1.5}},{name:"Tir entravant",cd:9,anim:o,cast:.2,dmg:{kind:"zone",mult:1.1,r:5},cc:{slow:[.6,5],root:2}},{name:"Saut de recul",cd:6,anim:"flip",cast:.05,move:"back",dmg:{kind:"shot",mult:.8,hits:3,gap:.08,proj:"bullet",speed:85},self:{inv:.5,atk:[.2,4]}},{name:"D\xE9luge de plomb",ult:1,anim:o,cast:.1,dmg:{kind:"shot",mult:.55,hits:12,gap:.07,proj:"bullet",speed:85}},h("Tir fatal")]};case"ethertech":return{role:"Pilote de Mecha",melee:!0,sustain:!0,basic:{kind:"melee",anim:"slash",hit:.5,rate:2.8,arc:1.3},mecha:{hp:2.5,dur:20,basic:{kind:"melee",anim:"punch",dur:.46,hit:.5,mult:1.7,reach:4.6,arc:1.7,mech:1,seq:[1],F:1}},skills:[{name:"Mecha",cd:12,anim:"castUp",cast:.5,special:"mecha"},{name:"Grappin",cd:8,anim:"cast",cast:.2,dmg:{kind:"target",mult:1.2,range:20},cc:{pull:1,stun:1.5}},{name:"Champ d\u2019entrave",cd:10,anim:"slam",cast:.3,dmg:{kind:"around",mult:1.3,r:6.5},cc:{root:3}},{name:"Salve de missiles",ult:1,anim:"castUp",cast:.4,dmg:{kind:"zone",mult:1,hits:5,gap:.16,r:5.5},cc:{stun:1}},h("Annihilation",{stun:2})]};case"barde":return{role:"Musicien",melee:!1,basic:{kind:"shot",anim:"strum",hit:.45,rate:1.75,proj:"wave",speed:24,thru:1,note:1},skills:[{name:"Accord final",cd:7,anim:o,cast:.25,special:"notes",dmg:{kind:"target",mult:1.2,range:24}},{name:"Berceuse",cd:12,anim:o,cast:.4,area:{kind:"around",r:7},cc:{sleep:5},color:12167423},{name:"M\xE9lodie de vie",cd:9,anim:o,cast:.3,self:{heal:22,gauge:30,shield:[15,8]},area:{kind:"around",r:8},cc:{slow:[.4,5]}},{name:"Symphonie",ult:1,anim:"castUp",cast:.5,eq:3,dmg:{kind:"around",mult:4,r:8},cc:{notes:5}},h("Requiem")]};case"peintre":return{role:"Contr\xF4le de zone",melee:!1,basic:{kind:"shot",anim:"slash",hit:.5,rate:2.35,proj:"paint",speed:32,aoe:1.2,every:{n:3,k:2,lock:.3}},skills:[{name:"Marque de couleur",cd:8,anim:"slash",cast:.2,dmg:{kind:"target",mult:1,range:16},cc:{weak:[.35,8],slow:[.3,5]}},{name:"Lien gravitationnel",cd:12,anim:"castUp",cast:.4,lock:.5,dmg:{kind:"around",mult:1.2,r:9},cc:{pull:1,root:2.5}},{name:"Toile d\u2019absorption",cd:14,anim:"cast",cast:.2,busy:.3,self:{absorb:[.4,8]}},{name:"Fr\xE9n\xE9sie chromatique",ult:1,anim:"castUp",cast:.4,eq:3,dmg:{kind:"around",mult:3,r:7},cc:{para:2},self:{aspd:[.4,10],crit:[.4,10]}},h("Chef-d\u2019\u0153uvre",{para:3})]}}return wd(a?"rodeur":"gladiateur",e,t,n,s)}function Sd(i,e=30){let t=Math.min(Gi.crit,i.ref.crit),n=i.ref.cdm,s=i.passive||{},r=.01,a=0,o=0,l=0,h=0,u=0,f=0,p=-1,d=0,y=null,v=0,g=null,m=0,M=[0,0,0],_=[0,0],E=[0,0],I=[0,0],P=[0,0],A={},F=O=>a<O[1]?O[0]:0,T=(O,j={})=>{let N=O*(1+(s.atk||0)+F(_))*(1+F(P)),b=!!j.crit;d&&!j.pet&&(N*=d,b=!0,d=0),N*=b?n:1+Math.min(Gi.crit,t+F(E))*(n-1),o+=N},x=O=>{O&&(O.atk&&(_[0]=O.atk[0],_[1]=a+O.atk[1]),O.crit&&(E[0]=O.crit[0],E[1]=a+O.crit[1]),O.aspd&&(I[0]=O.aspd[0],I[1]=a+O.aspd[1]),O.stealth&&(d=O.stealth[1]),O.reset!=null&&(M[O.reset-1]=0))},k=O=>{O&&(O.weak&&(P[0]=O.weak[0],P[1]=a+O.weak[1]),O.dot&&(A[O.key||"x"]=[O.dot[0],a+O.dot[1]]),O.notes&&(u=Math.min(5,u+O.notes),f=a+8))};for(;a<e;){for(let O in A)a<A[O][1]&&(o+=A[O][0]*(1+F(P))*(1+(s.atk||0))*(1+t*(n-1))*r);if(u&&a<f&&(o+=u*Wc*(1+F(P))*(1+t*(n-1))*r),y&&(v+=r,v>=y.iv&&(v-=y.iv,T(y.mult,{pet:1}))),a>=l){let O=-1;if(!g){for(let j=0;j<3;j++)if(i.skills[j]&&M[j]<=a){O=j;break}}if(g||O>=0){let j=g||i.skills[O],N=j.dmg;if(l=a+Ar(j),g?g=null:(M[O]=a+j.cd,j.chain&&(g=j.chain)),j.special==="spirit"?(y=ha[0],v=0):j.special==="mecha"&&(a>=p&&(p=a+i.mecha.dur),M[O]=p+j.cd),N){let b=N.hits||1,X=0;j.special==="notes"&&(X=.7*u,u=0),j.special==="runes"&&(X=N.per*m,m=0);for(let ne=0;ne<b;ne++)T((Array.isArray(N.mult)?N.mult[ne]:N.mult)+(ne===0?X:0),{crit:N.crit})}j.cc&&j.cc.runes&&(m=Math.min(5,m+j.cc.runes*(N&&N.hits||1))),k(j.cc),x(j.self)}else{let j=a<p?i.mecha.basic:i.basic,N=++h,b=j.mult*j.F,X=j.dur*(1-Math.min(Gi.aspd,F(I)));j.every&&N%j.every.n===0&&(b*=j.every.k,X+=j.every.lock*.5),l=a+X,T(b),j.dot&&(A.basic=[j.dot[0],a+j.dot[1]]),j.note&&(u=Math.min(5,u+1),f=a+8),j.rune&&(m=Math.min(5,m+1))}}a+=r}return o}var Ed=i=>{let e=i.dmg;if(!e)return i.eq||0;let t=e.hits||1,n=0;for(let s=0;s<t;s++)n+=Array.isArray(e.mult)?e.mult[s]:e.mult;return n+(i.eq||0)};var et={x:-200,z:70,r:22.4,wall:33.6,gate:.17},y1={gladiateur:16742970,templier:16769162,assassin:11566335,rodeur:10215546,sorcier:16738858,spiritualiste:10185727,clerc:16773296,aede:16765514,pistolero:8386303,ethertech:61695,barde:16751318,peintre:16734842},qc=[16734842,4704511,16765514,9166954],Td={wolf:{name:"Ombre r\xF4deuse",hp:45,atk:7,spd:6.6,range:1.9,rad:.7,wind:.6,rest:1.1,h:1.3},shade:{name:"Ombre arm\xE9e",hp:70,atk:10,spd:4.8,range:2.4,rad:.5,wind:.7,rest:1,h:2.05},duel:{name:"Duelliste d\u2019ombre",hp:150,atk:13,spd:5.3,range:2.6,rad:.5,wind:.68,rest:.8,h:2.3,elite:!0},brute:{name:"Ombre massive",hp:160,atk:17,spd:3.7,range:2.9,rad:1.1,wind:.85,rest:1.4,h:2},champion:{name:"Champion d\u2019ombre",hp:430,atk:22,spd:4.6,range:3.4,rad:.8,wind:.75,rest:1.1,h:2.95,boss:!0},drake:{name:"Drake d\u2019ombre",hp:640,atk:27,spd:5.2,range:3.9,rad:1.6,wind:.8,rest:1.2,h:2.9,boss:!0},dummy:{name:"Mannequin",hp:1e9,atk:0,spd:0,range:0,rad:.5,h:2}},v1=[[36,252,"wolf",2,1],[-34,318,"wolf",3,3],[92,296,"brute",4,1],[150,-246,"duel",4,1],[58,-292,"wolf",5,4],[-176,-160,"shade",6,2],[-300,110,"brute",7,1],[262,130,"duel",3,1],[-120,240,"shade",5,2],[330,-120,"duel",8,1]],_1=[[1.5,41],[5,43.5],[-161,58],[-161,82],[-52,78]],M1=new V(0,1,0),ps=(i,e)=>{let t=i-e;for(;t>Math.PI;)t-=6.2832;for(;t<-Math.PI;)t+=6.2832;return t};function Ad(i){let{scene:e,st:t,player:n,data:s,H:r,cam:a,root:o,pc:l,toast:h,cb:u}=i,f=Object.assign({atk:20,hp:180,def:6,crit:.05,critDmg:1.5,dodge:0},s.combat||{}),p=s.cls&&s.cls.id||"",d=y1[p]||8386303,y=s.hero&&s.hero.main&&s.hero.main.type,v=s.hero&&s.hero.off&&s.hero.off.type,g=bd(p,y,v),m=g.passive||{},M=g.skills;f.ref&&(f.crit=g.ref.crit,f.critDmg=g.ref.cdm);let _=vd/Sd(g)*(Xc[g.id]||Xc[p]||1),E=f.atk*_,I=M[3]?_d/(Ed(M[3])*_):1,P=[!1].concat(M.map((c,w)=>(s.level||1)<ca[w])),A=g.basic,F=A.kind==="melee",T=p==="assassin"||p==="pistolero",x={hp:f.hp,max:f.hp,shield:0,shieldT:0,charge:0,cds:[0,0,0,0,0,0],cdMax:[1,1,1,1,1,1],busy:0,lock:0,combo:0,lastHit:99,inv:0,down:0,armed:!1,queue:!1,idle:0,dashCd:0,dealt:0,atkB:0,atkT:0,critB:0,critT:0,aspdB:0,aspdT:0,guardB:0,guardT:0,absorbB:0,absorbT:0,hot:0,hotT:0,stealthT:0,stealthK:1,rezCd:0,chain:[null,null,null,null,null,null],manual:!1,slowK:1,slowT:0,mecha:null,focus:null,focusT:0,spirit:-1},k=Math.min(60,Math.max(0,s.regen||0)),O=[],j=[],N=[],b=[],X=[],ne=[],D={on:!1,wave:0,best:s.arenaBest||0,pending:null,loop:!1},$={shake:0,held:!1,warnT:0,auto:!1,lock:!1,lockE:null,autoMove:null,enemies:O,arena:D,pl:x,allies:X,kit:g,norm:_},we=(c,w)=>b.push({t:c,fn:w}),de=(c,w,S,U)=>Math.hypot(c-S,w-U),Le=(c,w)=>Math.atan2(c-t.x,w-t.z),ce=(c,w)=>de(c,w,et.x,et.z)<et.r,ve={arc:new oi(.6,1,28,1,Math.PI/2-1.15,2.3).rotateX(Math.PI/2),ring:new oi(.84,1,48).rotateX(-Math.PI/2),tube:new Rn(1,1,1,24,1,!0).translate(0,.5,0),ball:new li(1,14,10),arrow:new yn(.04,1,6).rotateX(Math.PI/2),tracer:new Rn(.03,.03,1.5,5).rotateX(Math.PI/2)};for(let c in ve)ve[c].userData.shared=!0;let Ae=(c,w=.9,S=!0)=>new Ot({color:c,transparent:!0,opacity:w,side:jt,blending:S?zn:$i,depthWrite:!1,fog:!1});function Ke(c,w,S){return e.add(c),N.push({obj:c,t:0,dur:w,upd:S}),c}function Be(c){e.remove(c),c.traverse(w=>{w.material&&w.material.dispose(),w.geometry&&!w.geometry.userData.shared&&w.geometry.dispose()})}function it(c,w,S,U,Q,G,K,q=.24){let re=new mt;re.position.set(c,w,S),re.rotation.y=U;let ye=new ze(ve.arc,Ae(K));ye.rotation.z=Q,re.add(ye),Ke(re,q,Se=>{ye.material.opacity=.95*(1-Se),ye.scale.setScalar(G*(.82+Se*.3)),ye.rotation.y=(Se-.5)*.9})}function Oe(c,w,S,U,Q,G,K=.45,q=.9){let re=new ze(ve.ring,Ae(U,q));re.position.set(c,w+.1,S),Ke(re,K,ye=>{re.scale.setScalar(Q+(G-Q)*(1-(1-ye)*(1-ye))),re.material.opacity=q*(1-ye*ye)})}function We(c,w,S,U,Q,G,K=.5){let q=new ze(ve.tube,Ae(U,.55));q.position.set(c,w,S),Ke(q,K,re=>{let ye=Q*(1-re*.55);q.scale.set(ye,G*Math.min(1,re*5+.1),ye),q.material.opacity=.6*(1-re)})}function nt(c,w,S,U,Q,G=.25){let K=new ze(ve.ball,Ae(U,.7));K.position.set(c,w,S),Ke(K,G,q=>{K.scale.setScalar(Q*(.4+q*.8)),K.material.opacity=.7*(1-q)})}function H(c,w,S,U,Q=12,G=5,K=.5){let q=new Float32Array(Q*3),re=new Float32Array(Q*3);for(let Je=0;Je<Q;Je++){let wt=Math.random()*6.2832,yt=Math.random()*1.3-.2,Ft=G*(.4+Math.random()*.8);re[Je*3]=Math.cos(wt)*Math.cos(yt)*Ft,re[Je*3+1]=Math.sin(yt)*Ft+1.5,re[Je*3+2]=Math.sin(wt)*Math.cos(yt)*Ft,q[Je*3]=c,q[Je*3+1]=w,q[Je*3+2]=S}let ye=new Xt;ye.setAttribute("position",new gn(q,3));let Se=new yo(ye,new Kr({color:U,size:l?.2:.28,transparent:!0,opacity:1,blending:zn,depthWrite:!1,fog:!1}));Se.frustumCulled=!1;let ct=0;Ke(Se,K,Je=>{let wt=(Je-ct)*K;ct=Je;for(let yt=0;yt<Q*3;yt+=3)q[yt]+=re[yt]*wt,q[yt+1]+=re[yt+1]*wt,q[yt+2]+=re[yt+2]*wt,re[yt+1]-=9*wt;ye.attributes.position.needsUpdate=!0,Se.material.opacity=1-Je})}let Te=new V;function me(c,w,S,U,Q){if(Te.set(c,w,S).project(a),Te.z>1||Math.abs(Te.x)>1.1)return;let G=document.createElement("span");G.className="ew-num "+(Q||""),G.textContent=U,G.style.left=(Te.x*.5+.5)*o.clientWidth+(Math.random()-.5)*34+"px",G.style.top=(-Te.y*.5+.5)*o.clientHeight+(Math.random()-.5)*14+"px",o.appendChild(G),setTimeout(()=>G.remove(),850)}let Pe=new ze(ve.ball,Ae(8378623,.16));Pe.scale.setScalar(1.25),Pe.visible=!1,e.add(Pe);let ae=new ze(ve.ring,Ae(d,.7));ae.visible=!1,e.add(ae);let $e=(()=>{let c=document.createElement("canvas");c.width=c.height=64;let w=c.getContext("2d");return w.beginPath(),w.moveTo(32,4),w.lineTo(61,58),w.lineTo(3,58),w.closePath(),w.fillStyle="#fff",w.fill(),w.lineWidth=4,w.strokeStyle="#000",w.stroke(),w.fillStyle="#000",w.fillRect(28.5,22,7,20),w.fillRect(28.5,46,7,7),new Wn(c)})();function De(c){let w=c.barCv.getContext("2d");if(w.clearRect(0,0,64,8),w.fillStyle="rgba(0,0,0,.75)",w.fillRect(0,0,64,8),w.fillStyle=c.type==="dummy"?"#ffd479":c.boss?"#ff4d6d":"#ff8a5a",w.fillRect(1,1,62*Math.max(0,Math.min(1,c.hp/c.max)),6),c.runes){w.fillStyle="#e9ddff";for(let S=0;S<c.runes;S++)w.fillRect(3+S*7,2,4,4)}c.barTex.needsUpdate=!0}function L(c,w,S,U=1,Q={}){let G=Td[c],K=Math.pow(1.2,U-1)*(Q.hpK||1),q={type:c,T:G,x:w,z:S,y:r(w,S),yaw:Q.yaw??Math.random()*6.28,hp:Math.round(G.hp*K),atk:G.atk*Math.pow(1.16,U-1),def:4*Math.pow(1.15,U-1),spd:G.spd,range:G.range,rad:G.rad,state:Q.wild?"idle":"chase",t:0,stun:0,dots:[],flash:0,boss:!!G.boss,elite:!!G.elite,runes:0,runeT:0,tint:!1,home:[w,S],wild:Q.wild||null,arena:!!Q.arena,lvl:U,lunge:0,n:0,wobT:0,wT:0,rootT:0,slowT:0,slowK:0,silT:0,weakT:0,weakK:0,aspdT:0,aspdK:0,sapT:0,sapK:0,notes:0,noteT:0,noteAcc:0,kd:!1,kdCd:0,zT:0};q.max=q.hp;let re=new mt;if(q.obj=re,c==="dummy"){let ye=new on({color:6965802,roughness:.9}),Se=new on({color:13481066,roughness:1}),ct=new mt;q.wob=ct,re.add(new ze(new Rn(.07,.1,1,8).translate(0,.5,0),ye)),ct.position.y=.95,ct.add(new ze(new Rn(.27,.2,.78,10).translate(0,.42,0),Se),new ze(new li(.19,10,8).translate(0,.98,0),Se),new ze(new Vn(1.15,.09,.09).translate(0,.62,0),ye));let Je=new ze(new Si(.12,16).translate(0,.46,.262),new Ot({color:12597547}));ct.add(Je),re.add(ct),re.traverse(wt=>{wt.isMesh&&(wt.castShadow=!0)})}else if(c==="shade"||c==="champion"||c==="duel"){let ye=c==="champion",Se=c==="duel";q.av=Ds({look:{gender:"m",height:ye?1.5:Se?1.16:1+Math.random()*.08,build:ye?1.2:Se?1.08:1,shoulders:ye?1.14:Se?1.08:1,hair:ye?"brosse":"court"},outfit:{cut:ye?"plate":"coat",c:Se?["#2a1016","#12080b","#8a2a3a"]:["#1a1626","#0e0c16","#3a2a5a"]},armor:ye?{casque:5,plastron:5,jambieres:5}:Se?{plastron:4}:{},main:{type:ye?"espadon":Se?Math.random()<.5?"epee":"espadon":Math.random()<.5?"epee":"guisarme",r:ye?5:Se?4:3},fx:{shadow:ye?"#2a1234":Se?"#2c1218":"#17152c",eyes:ye?"#ff4d6d":Se?"#ffd24a":"#c8b6ff",lod:!0}}),q.av.setArmed(!0),re.add(q.av.group),q.model=q.av.group}else{let ye=ud[c]();q.beast=ye,re.add(ye.group),q.model=ye.group}return q.mats=[],re.traverse(ye=>{ye.isMesh&&ye.material&&ye.material.emissive&&!q.mats.includes(ye.material)&&q.mats.push(ye.material)}),q.mats.forEach(ye=>{ye.userData.e0=ye.emissive.getHex(),ye.userData.i0=ye.emissiveIntensity}),q.barCv=document.createElement("canvas"),q.barCv.width=64,q.barCv.height=8,q.barTex=new Wn(q.barCv),q.bar=new os(new ki({map:q.barTex,transparent:!0,depthWrite:!1,fog:!1})),q.bar.scale.set(q.boss?2.6:1.3,q.boss?.22:.14,1),q.bar.position.y=G.h+.3,q.bar.visible=c!=="dummy",re.add(q.bar),De(q),c!=="dummy"&&(q.warn=new os(new ki({map:$e,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1})),q.warn.position.y=G.h+(q.boss?1.25:.95),q.warn.visible=!1,q.warn.renderOrder=9,re.add(q.warn)),re.position.set(w,q.y,S),re.rotation.y=q.yaw,e.add(re),O.push(q),!Q.quiet&&c!=="dummy"&&(We(w,q.y,S,6962431,1.2+q.rad,6,.7),Oe(w,q.y,S,9133302,.3,2.4+q.rad,.55)),q}function R(c){let w=O.indexOf(c);if(w>=0&&O.splice(w,1),e.remove(c.obj),c.barTex.dispose(),xi(c.obj),c.wild){let S=c.wild;S.es=S.es.filter(U=>U!==c),!S.es.length&&c.state==="dead"&&(S.t=45)}}function te(c){c.state!=="dead"&&(Ne(c),c.state="dead",c.t=0,c.hp=0,De(c),H(c.x,c.y+c.T.h*.5,c.z,9133302,c.boss?40:18,6,.7),Oe(c.x,c.y,c.z,12167423,.4,c.boss?7:3,.6),c.boss&&($.shake=Math.max($.shake,.5),h(c.T.name+" terrass\xE9")))}let fe=c=>{x.charge=Math.min(100,x.charge+c)},be=c=>{c<=0||x.down>0||(x.hp=Math.min(x.max,x.hp+c),me(t.x,t.y+2.1,t.z,"+"+c,"heal"))},Ee=()=>(m.atk||0)+(x.atkT>0?x.atkB:0),Xe=(c,w,S)=>me(c.x,c.y+c.T.h+.35,c.z,w,S||"info");function Ne(c){c.treeM&&(c.obj.remove(c.treeM),c.treeM.traverse(w=>{w.geometry&&w.geometry.dispose(),w.material&&w.material.dispose()}),c.treeM=null,c.model&&(c.model.visible=!0))}function Ue(c,w,S,U){if(c.state==="dead")return;Ne(c);let Q=c.state===w;c.state=w,c.stun=Math.max(Q?c.stun:0,S),c.kd=!1,Xe(c,U)}function je(c,w,S){if(!w||c.state==="dead"||(w.weak&&(c.weakK=w.weak[0],c.weakT=w.weak[1],Xe(c,"Vuln\xE9rable")),w.dot&&(c.dots=c.dots.filter(Q=>Q.k!==S),c.dots.push({k:S,v:E*(1+Ee())*w.dot[0],n:w.dot[1],t:1})),w.notes&&(c.notes=Math.min(5,c.notes+w.notes),c.noteT=8),w.runes&&(c.runes=Math.min(5,c.runes+w.runes),c.runeT=10,De(c)),c.type==="dummy"))return;let U=c.boss?.5:c.elite?.75:1;if(w.pull&&!c.boss){let Q=t.yaw+(Math.random()-.5)*.8,G=1.7+c.rad;it(t.x,t.y+1.1,t.z,Le(c.x,c.z),1.57,de(t.x,t.z,c.x,c.z),16777215,.25),c.x=t.x+Math.sin(Q)*G,c.z=t.z+Math.cos(Q)*G}if(w.kd&&(Ue(c,"stun",w.kd*U,"\xC0 terre"),c.kd=!0),w.stun&&Ue(c,"stun",w.stun*U,"\xC9tourdi"),w.para&&Ue(c,"stun",w.para*U,"Paralys\xE9"),w.sleep&&Ue(c,"sleep",w.sleep*U,"Endormi"),w.fear&&Ue(c,"fear",w.fear*U,"Apeur\xE9"),w.tree)if(c.boss)Ue(c,"stun",1.5,"\xC9tourdi");else{Ue(c,"tree",w.tree,"M\xE9tamorphos\xE9");let Q=new mt,G=new ze(new Rn(.14,.2,.9,7).translate(0,.45,0),new on({color:5913890,roughness:1})),K=new ze(new yn(.75,1.5,8).translate(0,1.55,0),new on({color:5216826,roughness:1}));Q.add(G,K),c.obj.add(Q),c.treeM=Q,c.model&&(c.model.visible=!1),H(c.x,c.y+1,c.z,9166954,16,4,.5)}w.root&&(c.rootT=Math.max(c.rootT,w.root*U),Xe(c,"Enracin\xE9"),Oe(c.x,c.y,c.z,9166954,c.rad+.6,c.rad+.7,w.root*U,.8)),w.slow&&(c.slowK=w.slow[0],c.slowT=w.slow[1],Xe(c,"Ralenti")),w.sil&&(c.silT=Math.max(c.silT,w.sil*U),Xe(c,"Silence")),w.aspd&&(c.aspdK=w.aspd[0],c.aspdT=w.aspd[1],Xe(c,"Gestes ralentis")),w.sap&&(c.sapK=w.sap[0],c.sapT=w.sap[1],Xe(c,"Affaibli"))}function at(c,w,S={}){if(c.state==="dead")return 0;let U=E*(1+Ee())*w*($.avg?1:1-g.var+Math.random()*2*g.var),Q=!!S.crit;x.stealthT>0&&!S.pet&&(U*=x.stealthK,Q=!0,ft(0),Xe(c,"Surprise","crit")),c.state==="sleep"&&(U*=1.5,c.state="chase",c.stun=0);let G=!!m.back&&!S.pet&&Math.abs(ps(Math.atan2(t.x-c.x,t.z-c.z),c.yaw))>2,K=f.critDmg+(G?m.back.cdm:0),q=Math.min(Gi.crit,f.crit+(x.critT>0?x.critB:0)+(G?m.back.crit:0));if($.avg?U*=Q?K:1+q*(K-1):(Q=Q||Math.random()<q,Q&&(U*=K)),S.pierce||(U*=100/(100+c.def)),c.weakT>0&&(U*=1+c.weakK),U=Math.max(1,Math.round(U)),x.dealt+=U,c.type==="dummy"?c.wobT=.5:c.hp-=U,S.pet||(x.focus=c,x.focusT=6),c.flash=.09,De(c),me(c.x,c.y+c.T.h*.85,c.z,(G&&Q?"\u2726\u2726 ":Q?"\u2726 ":"")+U,Q?"crit":""),H(c.x,c.y+c.T.h*.55,c.z,S.color||d,Q?12:6,4,.35),S.acc&&(S.acc.d+=U),S.steal&&be(Math.round(U*S.steal/100)),S.cc&&je(c,S.cc,S.key),c.type!=="dummy"){if(Q&&m.kdOnCrit&&c.kdCd<=0&&c.hp>0?(c.kdCd=4,je(c,{kd:m.kdOnCrit})):Q&&S.basic&&g.W.kd&&!x.mecha&&c.kdCd<=0&&c.hp>0&&Math.random()<g.W.kd&&(c.kdCd=4,je(c,{kd:1.5})),Q&&S.basic&&g.W.kb&&!c.boss&&c.rootT<=0){let re=Math.atan2(c.x-t.x,c.z-t.z);c.x+=Math.sin(re)*g.W.kb,c.z+=Math.cos(re)*g.W.kb}if(!c.boss&&c.rootT<=0){let re=Math.atan2(c.x-t.x,c.z-t.z),ye=S.kb??.3;c.x+=Math.sin(re)*ye,c.z+=Math.cos(re)*ye}c.state==="idle"&&(c.state="chase"),c.hp<=0&&te(c)}return U}function Me(c,w=1){if(x.down>0||x.inv>0)return;if($.auto){me(t.x,t.y+2.1,t.z,"Esquive","info"),Oe(t.x,t.y,t.z,16777215,.3,1.6,.25,.6),x.busy<=.05&&n.play("dash",.22);return}let S=Math.max(1,Math.round(c.atk*w*(c.sapT>0?1-c.sapK:1)*(.9+Math.random()*.2)*100/(100+f.def)));if(x.mecha){x.mecha.hp-=S,x.lastHit=0,me(t.x,t.y+3.4,t.z,"-"+S,"info"),$.shake=Math.max($.shake,.12),x.mecha.hp<=0&&Ce(!0);return}if(Math.random()<Math.min(Gi.dodge,f.dodge+(m.dodge||0))){me(t.x,t.y+2.1,t.z,"Esquive","info");return}if(m.block&&Math.random()<Math.min(Gi.block,m.block)){me(t.x,t.y+2.1,t.z,"Bloqu\xE9","info"),nt(t.x,t.y+1.1,t.z,16777215,.7,.15);return}if(S=Math.max(1,Math.round(S*(1-Math.min(.8,(m.guard||0)+(x.guardT>0?x.guardB:0))))),x.absorbT>0){let U=Math.round(S*x.absorbB);S-=U,be(U)}if(x.shield>0){let U=Math.min(x.shield,S);if(x.shield-=U,S-=U,S<=0){me(t.x,t.y+2.1,t.z,"Par\xE9","info");return}}if(!(S<=0)){if(x.hp-=S,x.lastHit=0,fe(2),me(t.x,t.y+2.1,t.z,"-"+S,"hurt"),$.shake=Math.max($.shake,.22),n.acting||n.play("hurt",.25),o.classList.add("ew-hit"),we(.2,()=>o.classList.remove("ew-hit")),x.hp<=0&&m.rez&&x.rezCd<=0){x.rezCd=m.rez,x.hp=Math.round(x.max*.5),x.inv=2.5,We(t.x,t.y,t.z,16773808,1.6,12,.9),Oe(t.x,t.y,t.z,16773808,.4,5,.7),h("R\xE9surrection","De nouveau disponible dans "+m.rez+" s");return}x.hp<=0&&(x.hp=0,x.down=2.8,t.down=!0,x.queue=!1,ft(0),h("Vaincu",D.on?"Vague "+D.wave+" atteinte":"Les ombres se dispersent"))}}let xt=null;function ft(c,w){let S=c>0;x.stealthT=c,S&&(x.stealthK=w),xt||(xt=[],n.group.traverse(U=>{if(!(!U.isMesh||!U.material||U.userData.ink))for(let Q of Array.isArray(U.material)?U.material:[U.material])!Q.transparent&&!xt.includes(Q)&&xt.push(Q)}));for(let U of xt)U.transparent=S,U.opacity=S?.3:1,U.needsUpdate=!0;for(let U of n.inks||[])U.visible=!S}function ht(c){for(let ct of X.slice())Ge(ct);let w=new mt,S=new Ot({color:c.color,transparent:!0,opacity:.55,depthWrite:!1,fog:!1}),U=Ae(c.color,.13),Q=new Ot({color:16777215,fog:!1}),G=(ct,Je,wt,yt,Ft,In)=>{let Mn=new ze(ct,Je);return Mn.position.set(wt,yt,Ft),(In||w).add(Mn),Mn};G(new yn(.95,2.6,12).rotateX(Math.PI),S,0,1.3,0),G(ve.ball,S,0,2.75,0).scale.set(1.2,1.05,.85),G(ve.ball,U,0,2.7,0).scale.setScalar(1.7),G(ve.ball,S,0,3.95,.05).scale.setScalar(.52);for(let ct of[-1,1])G(ve.ball,Q,ct*.2,4,.47).scale.set(.1,.05,.05),G(new yn(.14,.6,6),S,ct*.34,4.5,0).rotation.z=-ct*.5;let K=[];for(let ct of[-1,1]){let Je=new mt;Je.position.set(ct*1.3,3.15,0),G(ve.ball,S,0,0,0,Je).scale.setScalar(.5),G(new Rn(.3,.36,1.6,8).translate(0,-.9,0),S,0,0,0,Je),G(ve.ball,S,0,-1.9,0,Je).scale.setScalar(.52),w.add(Je),K.push(Je)}w.scale.setScalar(c.sc);let q=t.yaw+.6,re=t.x+Math.sin(q)*3,ye=t.z+Math.cos(q)*3,Se={S:c,obj:w,arms:K,x:re,z:ye,y:r(re,ye),yaw:t.yaw,hp:Math.round(x.max*c.hp),max:Math.round(x.max*c.hp),rad:1.2*c.sc,life:60,cd:.4,swing:0,t:0,rage:0};return Se.barCv=document.createElement("canvas"),Se.barCv.width=64,Se.barCv.height=8,Se.barTex=new Wn(Se.barCv),Se.bar=new os(new ki({map:Se.barTex,transparent:!0,depthWrite:!1,fog:!1})),Se.bar.scale.set(2.4,.2,1),Se.bar.position.y=5.3,w.add(Se.bar),ot(Se),w.position.set(re,Se.y,ye),e.add(w),X.push(Se),We(re,Se.y,ye,c.color,2.2,9,.8),Oe(re,Se.y,ye,c.color,.4,4.5,.7),H(re,Se.y+2,ye,c.color,30,6,.8),h(c.name),Se}function ot(c){let w=c.barCv.getContext("2d");w.clearRect(0,0,64,8),w.fillStyle="rgba(0,0,0,.75)",w.fillRect(0,0,64,8),w.fillStyle="#7fe0ff",w.fillRect(1,1,62*Math.max(0,c.hp/c.max),6),c.barTex.needsUpdate=!0}function Ge(c){let w=X.indexOf(c);w>=0&&X.splice(w,1),H(c.x,c.y+2,c.z,c.S.color,24,5,.7),e.remove(c.obj),c.barTex.dispose(),c.obj.traverse(S=>{S.material&&S.material.dispose(),S.geometry&&!S.geometry.userData.shared&&S.geometry.dispose()})}function rt(c,w){let S=Math.max(1,Math.round(w.atk*(.9+Math.random()*.2)*100/(100+f.def)));c.hp-=S,ot(c),me(c.x,c.y+4.6*c.S.sc,c.z,"-"+S,"info"),c.hp<=0&&(h(c.S.name+" dissip\xE9"),Ge(c))}function _t(c,w){if(c.t+=w,c.life-=w,c.cd-=w,c.rage>0&&(c.rage-=w),c.life<=0){Ge(c);return}let S=c.S,U=Et(c.x,c.z,24)||(x.focusT>0&&x.focus&&x.focus.state!=="dead"&&de(c.x,c.z,x.focus.x,x.focus.z)<24?x.focus:null),Q=0,G,K,q;U?(G=U.x,K=U.z,q=2.6*S.sc+U.rad):(G=t.x,K=t.z,q=4.5);let re=G-c.x,ye=K-c.z,Se=Math.hypot(re,ye);if(Se>q)Q=Math.min(U?9:14,(Se-q)*4+2),c.yaw+=ps(Math.atan2(re,ye),c.yaw)*Math.min(1,w*7),c.x+=Math.sin(c.yaw)*Q*w,c.z+=Math.cos(c.yaw)*Q*w;else if(U&&(c.yaw+=ps(Math.atan2(re,ye),c.yaw)*Math.min(1,w*8),c.cd<=0)){c.cd=S.iv,c.swing=Math.min(.45,S.iv*.8);let Je=()=>{if(!X.includes(c))return;let wt=c.x+Math.sin(c.yaw)*2,yt=c.z+Math.cos(c.yaw)*2,Ft=S.mult*(c.rage>0?2:1);it(c.x,c.y+2.2,c.z,c.yaw,.2,S.aoe*S.sc,S.color,.3),S.iv>.8&&Oe(wt,c.y,yt,S.color,.4,S.aoe*S.sc,.4);let In=!0;for(let Mn of O.slice())Mn.state!=="dead"&&de(wt,yt,Mn.x,Mn.z)<S.aoe*S.sc+Mn.rad&&(Mn.type!=="dummy"||Mn===x.focus)&&(at(Mn,In?Ft:Ft*.6,{color:S.color,kb:.5,pet:1,cc:S.cc,key:S.id}),In=!1)};S.iv>.8?we(.2,Je):Je()}S.heal&&x.hp<x.max&&x.down<=0&&de(c.x,c.z,t.x,t.z)<14&&(x.hp=Math.min(x.max,x.hp+x.max*S.heal/100*w)),c.y=Math.max(r(c.x,c.z),.2),c.swing>0&&(c.swing-=w);let ct=c.swing>0?Math.sin((1-c.swing/.45)*Math.PI):0;c.obj.scale.setScalar(S.sc*(c.rage>0?1.3:1)),c.obj.position.set(c.x,c.y+.25+Math.sin(c.t*2)*.15,c.z),c.obj.rotation.y=c.yaw,c.arms[0].rotation.x=-ct*2.1-.1,c.arms[1].rotation.x=-ct*1.6-.1+Math.sin(c.t*1.5)*.08,c.obj.visible=!t.inside}function Vt(){let c=new mt,w=new on({color:9148330,metalness:.3,roughness:.5}),S=new on({color:4015702,metalness:.3,roughness:.6}),U=new on({color:61695,emissive:61695,emissiveIntensity:1.6}),Q=new on({color:10483455,emissive:2808063,emissiveIntensity:.6,transparent:!0,opacity:.55}),G=(ye,Se,ct,Je,wt,yt,Ft,In)=>{let Mn=new ze(new Vn(ye,Se,ct),Je);return Mn.position.set(wt,yt,Ft),Mn.castShadow=!0,(In||c).add(Mn),Mn};G(1.5,1.25,1.1,w,0,2.3,0),G(1.1,.5,.9,S,0,1.55,0),G(.5,.3,.44,S,0,3.1,.05),G(.4,.09,.05,U,0,3.12,.28),G(.18,.5,.05,U,0,2.3,.56);let K=new ze(new li(.46,14,10),Q);K.position.set(0,2.62,.42),K.scale.set(1,.8,.8),c.add(K);for(let ye of[-1,1]){G(.34,.5,.5,S,ye*.5,2.9,-.5);let Se=new ze(new yn(.16,.5,8),U);Se.position.set(ye*.5,2.5,-.62),Se.rotation.x=Math.PI,c.add(Se)}let q=[],re=[];for(let ye of[-1,1]){let Se=new mt;Se.position.set(ye*.46,1.4,0),G(.42,.8,.48,w,0,-.38,0,Se),G(.48,.74,.56,S,0,-1.02,.02,Se),G(.56,.2,.86,w,0,-1.32,.12,Se),G(.1,.5,.05,U,0,-.9,.3,Se),c.add(Se),q.push(Se)}for(let ye of[-1,1]){let Se=new mt;Se.position.set(ye*1.08,2.7,0),G(.72,.5,.74,w,0,.06,0,Se),G(.76,.1,.78,U,0,-.22,0,Se),G(.36,.9,.42,S,0,-.6,0,Se),G(.62,.62,.62,w,0,-1.3,0,Se),G(.64,.1,.64,U,0,-.96,0,Se),c.add(Se),re.push(Se)}return{g:c,legs:q,arms:re}}function pt(){let c=Vt();e.add(c.g);let w=Math.round(x.max*g.mecha.hp);x.mecha={M:c,hp:w,max:w,t:g.mecha.dur,ph:0,swing:0,arm:0},n.group.visible=!1,A=g.mecha.basic,F=!0,o.classList.add("ew-mecha"),We(t.x,t.y,t.z,61695,2.6,11,.8),Oe(t.x,t.y,t.z,61695,.5,6,.7),H(t.x,t.y+2,t.z,61695,40,8,.9),$.shake=.4,h("Mecha en ligne","Il encaisse \xE0 votre place")}function Ce(c){let w=x.mecha;w&&(x.mecha=null,e.remove(w.M.g),xi(w.M.g),n.group.visible=!0,A=g.basic,F=A.kind==="melee",o.classList.remove("ew-mecha"),x.cds[1]=x.cdMax[1]=M[0].cd,x.inv=Math.max(x.inv,.8),H(t.x,t.y+1.5,t.z,c?16742970:61695,40,9,.9),Oe(t.x,t.y,t.z,61695,.5,6,.6),c&&($.shake=.6,h("Mecha d\xE9truit")))}function Y(c){for(;ne.length>=2;){let U=ne.shift();Be(U.m)}let w=new mt,S=new ze(ve.ring,Ae(d,.75));S.scale.setScalar(1.3),S.position.y=.08,w.add(S);for(let U=0;U<6;U++){let Q=new ze(new yn(.07,.4,5),new on({color:10134704,metalness:.8,roughness:.3}));Q.position.set(Math.cos(U*1.047)*.7,.2,Math.sin(U*1.047)*.7),w.add(Q)}w.position.set(t.x,t.y,t.z),e.add(w),ne.push({m:w,x:t.x,z:t.z,y:t.y,t:25,s:c,ring:S})}function He(c){for(let w=ne.length-1;w>=0;w--){let S=ne[w];S.t-=c,S.ring.rotation.y+=c*1.5;let U=S.t<=0?null:O.find(Q=>Q.state!=="dead"&&de(S.x,S.z,Q.x,Q.z)<2.6+Q.rad&&(Q.type!=="dummy"||Q===x.focus));U&&(We(S.x,S.y,S.z,d,1.6,5,.5),bt(S.x,S.y,S.z,S.s.dmg.r,S.s.dmg.mult,{cc:S.s.cc,key:S.s.name,color:d}),$.shake=Math.max($.shake,.25)),(U||S.t<=0)&&(Be(S.m),ne.splice(w,1))}}function ke(){x.hp=x.max,x.shield=0,t.down=!1,x.inv=2;for(let c of X.slice())Ge(c);if(D.on)he(),i.teleport(et.x+17,et.z);else{for(let c of O)c.wild&&(c.state="idle",c.hp=c.max,De(c));i.teleport(-6,34),h("Rue du Four","Vous reprenez connaissance devant la Maison")}}function lt(c,w){let S=c.obj;if(c.flash>0){c.flash-=w;let vt=c.flash>0;for(let Ct of c.mats)vt?(Ct.emissive.setHex(16777215),Ct.emissiveIntensity=.9):(Ct.emissive.setHex(Ct.userData.e0),Ct.emissiveIntensity=Ct.userData.i0)}if(c.warn){let vt=c.state==="wind";if(vt){let Ct=c.t/(c.T.wind*(c.aspdT>0?1+c.aspdK:1)),fn=Ct>.55,Hn=.5+.5*Math.sin(t.t*(fn?34:16));if(c.warn.material.color.setHex(fn?16720952:16765470),c.warn.scale.setScalar((c.boss?1.3:.85)*(1+Hn*(fn?.3:.12))),c.flash<=0){for(let Us of c.mats)Us.emissive.setHex(16717872),Us.emissiveIntensity=.25+Hn*.5;c.tint=!0}}else if(c.tint&&c.flash<=0){c.tint=!1;for(let Ct of c.mats)Ct.emissive.setHex(Ct.userData.e0),Ct.emissiveIntensity=Ct.userData.i0}c.warn.visible=vt}if(c.state==="dead"){c.t+=w;let vt=c.t/.55;S.scale.setScalar(Math.max(.01,1-vt)),S.position.y=c.y-vt*.4,vt>=1&&R(c);return}let U=c.type==="dummy",Q=(c.weakT>0?1+c.weakK:1)*(1+Math.min(Gi.crit,f.crit)*(f.critDmg-1));for(let vt of c.dots)if(vt.t-=w,vt.t<=0&&vt.n>0){vt.t+=1,vt.n--;let Ct=Math.max(1,Math.round(vt.v*Q));if(x.dealt+=Ct,U||(c.hp-=Ct),me(c.x,c.y+c.T.h,c.z,Ct,"dot"),De(c),!U&&c.hp<=0){te(c);return}}if(c.dots.length&&(c.dots=c.dots.filter(vt=>vt.n>0)),c.notes>0){if(c.noteT-=w,c.noteAcc+=w,c.noteAcc>=1){c.noteAcc-=1;let vt=Math.max(1,Math.round(E*Wc*c.notes*Q));if(x.dealt+=vt,U||(c.hp-=vt),me(c.x,c.y+c.T.h+.2,c.z,"\u266A "+vt,"dot"),De(c),!U&&c.hp<=0){te(c);return}}c.noteT<=0&&(c.notes=0)}if(c.weakT>0&&(c.weakT-=w),c.runes>0&&(c.runeT-=w)<=0&&(c.runes=0,De(c)),U){c.wobT>0&&(c.wobT-=w,c.wob.rotation.x=Math.sin(c.wobT*34)*.5*c.wobT);return}c.rootT>0&&(c.rootT-=w),c.slowT>0&&(c.slowT-=w),c.silT>0&&(c.silT-=w),c.aspdT>0&&(c.aspdT-=w),c.sapT>0&&(c.sapT-=w),c.kdCd>0&&(c.kdCd-=w);let G=null,K=18;for(let vt of X){if(vt.hp<=0)continue;let Ct=de(c.x,c.z,vt.x,vt.z);Ct<(vt.S.taunt||K)&&(!G||Ct<K)&&(K=Ct,G=vt)}let q=G?G.x:t.x,re=G?G.z:t.z,ye=G?G.rad:x.mecha?.9:0,Se=q-c.x,ct=re-c.z,Je=Math.hypot(Se,ct)-ye,wt=G?!0:x.down<=0&&!t.inside&&x.stealthT<=0&&!t.fly,yt=c.aspdT>0?1+c.aspdK:1,Ft=0,In=null;if(c.state==="stun"||c.state==="sleep"||c.state==="tree"||c.state==="fear")c.stun-=w,c.state==="fear"&&(In=Math.atan2(c.x-t.x,c.z-t.z),Ft=c.spd*.9),c.state==="sleep"&&(c.zT-=w)<=0&&(c.zT=1.1,Xe(c,"z z")),c.stun<=0&&(Ne(c),c.state="chase",c.kd=!1);else if(c.state==="idle")if(wt&&Je<15)c.state="chase";else{if(c.wT-=w,!c.wander||c.wT<=0){let fn=Math.random()*6.28,Hn=Math.random()*7;c.wander=[c.home[0]+Math.sin(fn)*Hn,c.home[1]+Math.cos(fn)*Hn],c.wT=3+Math.random()*5}let vt=c.wander[0]-c.x,Ct=c.wander[1]-c.z;Math.hypot(vt,Ct)>.7&&(In=Math.atan2(vt,Ct),Ft=c.spd*.3),c.hp<c.max&&(c.hp=Math.min(c.max,c.hp+c.max*.2*w),De(c))}else c.state==="chase"?!wt||c.wild&&de(c.x,c.z,c.home[0],c.home[1])>40?c.wild&&(c.state="idle",c.wander=c.home.slice(),c.wT=6):(In=Math.atan2(Se,ct),Je>c.range*.82?Ft=c.spd:c.silT<=0&&(c.state="wind",c.t=0,c.av&&c.av.play(c.av.cat==="2h"?"heavy":"slash",c.T.wind*yt/.52,c.n++),Oe(c.x,c.y,c.z,16724048,.3,c.range+.5,c.T.wind*yt,.85))):c.state==="wind"?(c.t+=w,c.t<c.T.wind*yt*.6&&(In=Math.atan2(Se,ct)),!G&&wt&&Je<c.range+3&&($.warnT=.12),c.t>=c.T.wind*yt&&(c.state="rest",c.t=0,c.lunge=.25,it(c.x,c.y+c.T.h*.5,c.z,c.yaw,.3,c.range*.95,16728160,.2),wt&&Je<c.range+.7&&Math.abs(ps(Math.atan2(Se,ct),c.yaw))<1.25&&(G?rt(G,c):Me(c)))):c.state==="rest"&&(c.t+=w,c.t>=c.T.rest*yt&&(c.state="chase"));if(c.rootT>0?Ft=0:c.slowT>0&&(Ft*=1-c.slowK),In!=null&&(c.yaw+=ps(In,c.yaw)*Math.min(1,w*8)),Ft>0){let vt=c.x+Math.sin(c.yaw)*Ft*w,Ct=c.z+Math.cos(c.yaw)*Ft*w;for(let fn of O)if(fn!==c&&fn.state!=="dead"){let Hn=de(vt,Ct,fn.x,fn.z),Us=c.rad+fn.rad;Hn<Us&&Hn>.001&&(vt=fn.x+(vt-fn.x)/Hn*Us,Ct=fn.z+(Ct-fn.z)/Hn*Us)}if(c.arena){let fn=de(vt,Ct,et.x,et.z),Hn=et.r-1-c.rad;fn>Hn&&(vt=et.x+(vt-et.x)/fn*Hn,Ct=et.z+(Ct-et.z)/fn*Hn)}c.x=vt,c.z=Ct}if(c.arena){let vt=de(c.x,c.z,et.x,et.z),Ct=et.r-1-c.rad;vt>Ct&&(c.x=et.x+(c.x-et.x)/vt*Ct,c.z=et.z+(c.z-et.z)/vt*Ct)}c.y=Math.max(r(c.x,c.z),.2),c.lunge>0&&(c.lunge-=w);let Mn=c.lunge>0?Math.sin((1-c.lunge/.25)*Math.PI)*.7:0;S.position.set(c.x+Math.sin(c.yaw)*Mn,c.y,c.z+Math.cos(c.yaw)*Mn),S.rotation.y=c.yaw;let $o=c.kd&&c.state==="stun";c.av?(c.av.update(w,{speed:Ft/4.6}),c.av.group.rotation.x+=(($o?-1.4:0)-c.av.group.rotation.x)*Math.min(1,w*12),c.av.group.position.y=$o?.25:0):(c.beast.update(w,Ft/6),c.beast.group.rotation.x=c.state==="wind"?-.22*Math.min(1,c.t/(c.T.wind*yt)):c.state==="stun"?.12:0,c.beast.group.rotation.z+=(($o?1.45:0)-c.beast.group.rotation.z)*Math.min(1,w*12))}function Qe(c,w=3.2,S){let U=$.lock||$.auto?$.lockE:null;if(U&&U.state!=="dead"&&de(t.x,t.z,U.x,U.z)<=c+U.rad)return U;let Q=null,G=1e9;for(let K of O){if(K.state==="dead")continue;let q=de(t.x,t.z,K.x,K.z);if(q>c+K.rad)continue;let re=Math.abs(ps(Le(K.x,K.z),t.yaw));if(re>w)continue;let ye=q+(S?0:re*3)+(K.type==="dummy"?S?40:5:0)+(S&&K.state==="sleep"?30:0);ye<G&&(G=ye,Q=K)}return Q}let Et=(c,w,S,U)=>{let Q=null,G=S;for(let K of O){if(K.state==="dead"||K.type==="dummy"||K.state==="sleep"&&U==="awake"||U&&U.has&&U.has(K))continue;let q=de(c,w,K.x,K.z);q<G&&(G=q,Q=K)}return Q};function Ut(c,w=!F){let S=Qe(c,3.2,w);return S&&(!w||t.speed<1.5)&&(t.yaw=Le(S.x,S.z)),S}let Tt=c=>c&&c.state!=="dead"?c:null;function kt(c,w,S,U={}){let Q=0;for(let G of O.slice()){if(G.state==="dead")continue;let K=de(t.x,t.z,G.x,G.z);K>w+G.rad||S<3.1&&K>.9&&Math.abs(ps(Le(G.x,G.z),t.yaw))>S||(at(G,c,U),Q++)}return Q&&($.shake=Math.max($.shake,U.shake||.07)),Q}function bt(c,w,S,U,Q,G={},K){nt(c,w+.4,S,G.color||d,U*.7),Oe(c,w,S,G.color||d,.3,U,.4),H(c,w+.5,S,G.color||d,14,6,.5);let q=0;for(let re of O.slice())re!==K&&re.state!=="dead"&&de(c,S,re.x,re.z)<U+re.rad&&(at(re,Q,G),q++);return q}function Wt(c,w,S={}){let U=S.target&&S.target.state!=="dead"?S.target:Qe(S.range||28,3.2,!0),Q=n.hand(new V,S.off);c==="wave"&&Q.set(t.x+Math.sin(t.yaw)*.6,t.y+1.15,t.z+Math.cos(t.yaw)*.6);let G=U?new V(U.x-Q.x,U.y+U.T.h*.55-Q.y,U.z-Q.z).normalize():new V(Math.sin(t.yaw),0,Math.cos(t.yaw));S.spread&&G.applyAxisAngle(M1,S.spread);let K=S.color||d,q=S.size||1,re;if(c==="arrow")re=new ze(ve.arrow,Ae(K,1)),re.scale.set(q,q,1.1);else if(c==="bullet")re=new ze(ve.tracer,Ae(K,1));else if(c==="wave")re=new ze(ve.arc,Ae(K,.85)),re.scale.setScalar(1.2);else{re=new ze(ve.ball,Ae(K,c==="paint"?.95:.9,c!=="paint"));let Se=(c==="shell"?.3:c==="paint"?.2:.24)*q;if(re.scale.setScalar(Se),c!=="paint"){let ct=new ze(ve.ball,Ae(16777215,.9));ct.scale.setScalar(.5),re.add(ct)}}let ye=S.speed||26;re.position.copy(Q),e.add(re),c!=="wave"&&nt(Q.x,Q.y,Q.z,K,.35,.12),j.push({m:re,kind:c,v:G.multiplyScalar(ye),life:(S.range||28)/ye+.25,mult:w,o:S,hit:new Set,target:U,homing:c!=="wave",age:0,bounce:S.bounce||0})}function At(c,w){c.age+=w,c.life-=w;let S=c.m.position;if(c.homing&&c.target&&c.target.state==="dead"&&(c.target=Et(S.x,S.z,12,c.hit)),c.homing&&c.target){let Se=c.target,ct=c.v.length();Te.set(Se.x-S.x,Se.y+Se.T.h*.55-S.y,Se.z-S.z).normalize().multiplyScalar(ct),c.v.lerp(Te,Math.min(1,w*(c.kind==="bullet"||c.kind==="arrow"?18:9))).setLength(ct)}let U=S.x,Q=S.z;S.addScaledVector(c.v,w);let G=S.x-U,K=S.z-Q,q=G*G+K*K;c.kind==="wave"?(c.m.rotation.y=Math.atan2(c.v.x,c.v.z),c.m.scale.setScalar(1.2+c.age*3.2),c.m.material.opacity=.85*Math.min(1,c.life*3)):(c.kind==="arrow"||c.kind==="bullet")&&c.m.lookAt(S.x+c.v.x,S.y+c.v.y,S.z+c.v.z);let re=c.kind==="wave"?c.m.scale.x*.8:.35*(c.o.size||1),ye=c.life<=0;for(let Se of O){if(Se.state==="dead"||c.hit.has(Se))continue;let ct=q>0?Math.max(0,Math.min(1,((Se.x-U)*G+(Se.z-Q)*K)/q)):1;if(!(de(U+G*ct,Q+K*ct,Se.x,Se.z)>Se.rad+re||S.y<Se.y-.5-Math.abs(c.v.y)*w||S.y>Se.y+Se.T.h+.8+Math.abs(c.v.y)*w)){if(c.hit.add(Se),at(Se,c.mult,c.o),c.o.aoe&&bt(S.x,Se.y,S.z,c.o.aoe,c.mult*.6,c.o,Se),c.bounce>0){let Je=Et(S.x,S.z,14,c.hit);if(Je){c.bounce--,c.mult*=.8,c.target=Je;let wt=c.v.length();c.v.set(Je.x-S.x,Je.y+Je.T.h*.55-S.y,Je.z-S.z).setLength(wt),c.life=14/wt+.25,nt(S.x,S.y,S.z,16777215,.5,.12);break}}if(!c.o.thru){ye=!0;break}}}return!ye&&c.kind!=="wave"&&S.y<r(S.x,S.z)+.05?(ye=!0,c.o.aoe?bt(S.x,r(S.x,S.z),S.z,c.o.aoe,c.mult*.6,c.o):H(S.x,S.y+.1,S.z,c.o.color||d,5,2.5,.3)):ye&&c.life<=0&&c.o.aoe&&c.kind==="shell"&&bt(S.x,S.y,S.z,c.o.aoe,c.mult*.6,c.o),ye}function Kt(c,w,S,U={},Q=32){let G=Tt(c)||Qe(Q,3.2,!0),K=G?G.x:t.x+Math.sin(t.yaw)*8,q=G?G.z:t.z+Math.cos(t.yaw)*8,re=r(K,q);return We(K,re,q,U.color||d,S*.5,5,.45),bt(K,re,q,S,w,U)}let Pt=()=>t.talking||t.paused||x.down>0?!1:t.fly?(ee("Posez-vous pour combattre"),!1):(t.mount&&i.dismount(),!0);function cn(c){if(c&&(x.idle=0),x.armed===c)return;x.armed=c,n.setArmed(c),o.classList.toggle("ew-armed",c);let w=o.querySelector('[data-c="draw"]');w&&w.classList.toggle("on",c)}let Bt=()=>t.x,Lt=()=>t.y,zt=()=>t.z;function hn(){if(!Pt())return!1;if(cn(!0),x.busy>0)return x.queue=!0,!1;let c=Ut(F?A.reach+4.5:A.range);if(F&&c){let re=de(t.x,t.z,c.x,c.z)-c.rad;re>A.reach*.7&&i.dash(re-A.reach*.55,.09)}let w=x.combo++,S=A.dur*(1-Math.min(Gi.aspd,x.aspdT>0?x.aspdB:0)),U=A.every&&(w+1)%A.every.n===0,Q=U?A.mult*A.F*A.every.k:A.mult,G=U?[1]:A.seq;n.play(U?"heavy":A.anim,S*1.3,w),x.busy=S+(U?A.every.lock*.5:0),U&&(x.lock=A.every.lock),A.slowSelf&&(x.slowK=A.slowSelf,x.slowT=S*.85),x.mecha&&(x.mecha.swing=.4,x.mecha.arm=w%2);let K=A.dot||A.note||A.rune?{dot:A.dot,notes:A.note,runes:A.rune}:null,q=Math.min(.07,S*.4/G.length);return G.forEach((re,ye)=>we(S*A.hit+ye*q,()=>{if(x.down>0)return;let Se=ye===0,ct=re>=.5,Je=Q*re,wt={cc:Se?K:null,key:"basic",basic:1};if(F){if(ct){let Ft=n.dual?((w>>1)+ye)%3:w%3,In=A.anim==="heavy"?w%2?.12:1.45:A.anim==="punch"?w%2?.3:-.3:Ft===0?-.95:Ft===1?.2:1.57;it(Bt(),Lt()+(A.mech?2.2:1.15),zt(),t.yaw,Se?In:-In,A.reach*.95,d,A.mech?.3:.24),A.mech&&(Oe(Bt()+Math.sin(t.yaw)*2.4,Lt(),zt()+Math.cos(t.yaw)*2.4,d,.4,2.6,.3),$.shake=Math.max($.shake,.12))}let yt={d:0};wt.acc=yt,ct||(wt.kb=0),kt(Je,A.reach,A.arc,wt)&&Se&&g.sustain&&!x.mecha&&x.hp<x.max&&be(Math.max(1,Math.round(yt.d*.1+x.max*.06*A.dur)))}else if(U){it(Bt(),Lt()+1.1,zt(),t.yaw,.15,7.5,qc[w%4],.3),it(Bt(),Lt()+1.1,zt(),t.yaw,-.2,6.5,16777215,.22);let yt=Tt(c)||Qe(A.range,3.2,!0);if(yt)for(let Ft of O.slice())Ft.state!=="dead"&&de(yt.x,yt.z,Ft.x,Ft.z)<2.6+Ft.rad&&at(Ft,Ft===yt?Je:Je*.6,{color:qc[w%4],basic:1})}else Wt(A.proj,Je,Object.assign(wt,{range:A.range,speed:A.speed,aoe:ct?A.aoe:0,size:ct?A.size:.6,thru:A.thru,bounce:ct&&A.bounce||0,off:n.dual&&(w+ye)%2===1,target:Tt(c)||c,color:A.proj==="paint"?qc[(w+ye)%4]:d}))})),!0}function B(c){if(t.talking||t.paused||x.down>0||x.dashCd>0)return;t.mount&&i.dismount();let w=c??i.inputDir();w!=null&&(t.yaw=w),x.dashCd=.36,x.inv=Math.max(x.inv,.36),x.busy=0,x.queue=!1,x.lock=0,Oe(Bt(),Lt(),zt(),16777215,.3,1.9,.3,.6),nt(Bt(),Lt()+1,zt(),d,.9,.22),i.dash(6.4,.22),n.play("dash",.28)}let ee=c=>{let w=o.querySelector(".ew-skn");w&&(w.textContent=c,w.classList.remove("on"),w.offsetWidth,w.classList.add("on"))};function oe(c,w){if(!c)return;let S=c.heal||c.hot?9306032:w.color||d;c.heal&&be(Math.round(x.max*c.heal/100)),c.hot&&(x.hot=c.hot[0],x.hotT=c.hot[1]),c.atk&&(x.atkB=c.atk[0],x.atkT=c.atk[1]),c.crit&&(x.critB=c.crit[0],x.critT=c.crit[1]),c.aspd&&(x.aspdB=c.aspd[0],x.aspdT=c.aspd[1]),c.guard&&(x.guardB=c.guard[0],x.guardT=c.guard[1]),c.absorb&&(x.absorbB=c.absorb[0],x.absorbT=c.absorb[1]),c.inv&&(x.inv=Math.max(x.inv,c.inv)),c.gauge&&fe(c.gauge),c.shield&&(x.shield=Math.round(x.max*c.shield[0]/100),x.shieldT=c.shield[1]),c.stealth&&(ft(c.stealth[0],c.stealth[1]),H(Bt(),Lt()+1,zt(),10133696,20,3,.5)),c.reset!=null&&(x.cds[c.reset]=0),(c.heal||c.hot||c.atk||c.crit||c.aspd||c.guard||c.absorb||c.inv>1)&&(We(Bt(),Lt(),zt(),S,1.2,4.2,.6),Oe(Bt(),Lt(),zt(),S,.4,3,.5),H(Bt(),Lt()+1,zt(),S,14,3,.6))}function C(c,w){let S=c.area,U=c.color||d;if(S.kind==="target"){let re=Tt(w)||Qe(30,3.2,!0);re&&(We(re.x,re.y,re.z,U,1,4,.5),je(re,c.cc,c.name));return}let Q=S.kind==="zone"?Tt(w)||Qe(30,3.2,!0):null,G=S.kind==="zone"?Q?Q.x:t.x+Math.sin(t.yaw)*8:t.x,K=S.kind==="zone"?Q?Q.z:t.z+Math.cos(t.yaw)*8:t.z,q=r(G,K);Oe(G,q,K,U,.4,S.r,.6),nt(G,q+.6,K,U,S.r*.5,.3);for(let re of O.slice())re.state!=="dead"&&de(G,K,re.x,re.z)<S.r+re.rad&&je(re,c.cc,c.name)}function W(c,w,S){if(x.down>0)return;let U=c.dmg,Q=c.ult===1?I:1,G=c.color||d;if(c.special==="trap"){Y(c);return}if(c.special==="spirit"){x.spirit=(x.spirit+1)%ha.length,ht(ha[x.spirit]);return}if(c.special==="mecha"){pt();return}if(c.special==="enrage"){X.length||(x.spirit=Math.max(0,x.spirit),ht(ha[x.spirit]));for(let K of X)K.rage=8,K.hp=K.max,ot(K),We(K.x,K.y,K.z,K.S.color,3,10,.8)}if(c.special==="runes"){let K=c.dmg;Oe(Bt(),Lt(),zt(),13154047,.5,K.r,.5),We(Bt(),Lt(),zt(),13154047,K.r*.35,6,.5),H(Bt(),Lt()+.6,zt(),15326719,30,9,.7),$.shake=Math.max($.shake,.35);for(let q of O.slice())if(q.state!=="dead"&&de(t.x,t.z,q.x,q.z)<K.r+q.rad){let re=q.runes;q.runes=0,re&&Xe(q,"Runes \xD7"+re,"crit"),at(q,(K.mult+K.per*re)*Q,{color:13154047,kb:.6,key:c.name,cc:{stun:Math.max(1,.5*re)}})}return}if(c.exec){let K=Tt(w)||Qe(36,3.2,!0);if($.shake=.7,!K){Oe(Bt(),Lt(),zt(),d,.5,9,.8);return}We(K.x,K.y,K.z,16777215,1.4,18,.9),We(K.x,K.y,K.z,d,2.8,13,1),Oe(K.x,K.y,K.z,d,.5,10,.9),H(K.x,K.y+1,K.z,d,40,9,.9),K.type!=="dummy"&&K.hp<=K.max*(K.boss?.15:.35)?(Xe(K,"R\xE9duit \xE0 n\xE9ant","crit"),te(K)):at(K,8/_,{pierce:1,color:d,kb:1.2,cc:c.cc,key:c.name});return}if(U){let K=U.hits||1,q=U.gap||.15,re={crit:U.crit,pierce:U.pierce,steal:U.steal,cc:c.cc,key:c.name,color:G,kb:U.kind==="around"?.7:void 0};for(let ye=0;ye<K;ye++)we(ye*q,()=>{if(x.down>0)return;let Se=(Array.isArray(U.mult)?U.mult[ye]:U.mult)*Q,ct=K===1&&Se>=2.5;if(U.kind==="melee")it(Bt(),Lt()+1.15,zt(),t.yaw,ye%3===0?-.9:ye%3===1?.25:1.5,U.r*(.9+ye*.08),G,.28),kt(Se,U.r,U.arc||1.4,Object.assign({shake:.12+ye*.08},re));else if(U.kind==="around")Oe(Bt(),Lt(),zt(),G,.5,U.r,.45),ct?(We(Bt(),Lt(),zt(),G,U.r*.4,7,.6),H(Bt(),Lt()+.5,zt(),G,30,9,.7)):it(Bt(),Lt()+1.1,zt(),t.yaw+ye*1.3,ye%2?.2:-.2,U.r*.85,G,.3),kt(Se,U.r,3.2,Object.assign({shake:ct?.5:.18},re));else if(U.kind==="shot")K>1&&n.play(c.anim==="flip"?"shoot":c.anim||A.anim,.14,ye),Wt(U.proj||A.proj||"bolt",Se,Object.assign({range:(U.range||30)+4,speed:U.speed||A.speed||36,aoe:U.aoe,size:U.size,bounce:U.proj==="bullet"?1:0,off:ye%2===1&&n.dual,target:Tt(w)},re));else if(U.kind==="zone")ct&&($.shake=Math.max($.shake,.5)),Kt(w,Se,U.r,re);else if(U.kind==="target"){let Je=Tt(w)||Qe((U.range||26)+4,3.2,!0);if(!Je)return;let wt=Se;if(c.special==="notes"&&(wt+=.7*Je.notes,Oe(Je.x,Je.y,Je.z,G,.3,2+Je.notes*.6,.4),Je.notes=0),We(Je.x,Je.y,Je.z,G,.7,4,.35),nt(Je.x,Je.y+Je.T.h*.5,Je.z,G,1.1,.2),at(Je,wt,re),U.aoe){Oe(Je.x,Je.y,Je.z,G,.4,U.aoe,.4);for(let yt of O.slice())yt!==Je&&yt.state!=="dead"&&de(Je.x,Je.z,yt.x,yt.z)<U.aoe+yt.rad&&at(yt,wt*.5,re)}}})}c.area&&C(c,w),oe(c.self,c)}function Z(c){if(c===0)return hn();let w=M[c-1];if(!w||!Pt())return;let S=x.chain[c]&&x.chain[c].t>0?x.chain[c].s:null;if(S&&(w=S),P[c]){ee("Niveau "+ca[c-1]+" requis \xB7 "+w.name);return}if(w.special==="mecha"&&x.mecha){x.busy<=.15&&(ee("\xC9jection"),Ce(!1));return}if(w.ult){if(x.charge<100){ee("Jauge d\u2019ultime incompl\xE8te");return}}else if(!S&&x.cds[c]>0)return;if(x.busy>.15)return;cn(!0),ee(w.name),S?x.chain[c]=null:w.ult?x.charge=0:x.cds[c]=x.cdMax[c]=w.cd,w.chain&&(x.chain[c]={t:Ar(w)+4,s:w.chain});let U=w.dmg,Q=w.cast??.25,G=U&&U.kind==="melee",K=G?Qe(U.r+5):U||w.area||w.exec?Qe((U&&U.range||30)+4,3.2,!0):null;if(K&&(G||U&&U.kind==="target"||w.exec||t.speed<1.5)&&(t.yaw=Le(K.x,K.z)),G&&K){let q=de(t.x,t.z,K.x,K.z)-K.rad;q>U.r*.7&&i.dash(q-U.r*.55,.1)}if(w.move==="tp"&&K){H(Bt(),Lt()+1,zt(),d,16,4,.4);let q=K.rad+1.5;if(t.x=K.x-Math.sin(K.yaw)*q,t.z=K.z-Math.cos(K.yaw)*q,t.y=r(t.x,t.z),t.yaw=K.yaw,D.on){let re=de(t.x,t.z,et.x,et.z);re>et.r-1.2&&(t.x=et.x+(t.x-et.x)/re*(et.r-1.2),t.z=et.z+(t.z-et.z)/re*(et.r-1.2))}nt(Bt(),Lt()+1,zt(),d,1.2,.25)}if(w.move==="back"&&(i.dash(-8.5,.26),Oe(Bt(),Lt(),zt(),d,.4,2.2,.35)),n.play(w.anim||(F?"heavy":"cast"),Math.max(.42,Ar(w)*1.05),x.combo++,w.turns||1),x.busy=Ar(w),w.lock&&(x.lock=w.lock),w.ult&&(x.inv=Math.max(x.inv,Ar(w))),x.mecha&&(x.mecha.swing=.45,x.mecha.arm=2),w.meteor){let q=K,re=q?q.x:t.x+Math.sin(t.yaw)*10,ye=q?q.z:t.z+Math.cos(t.yaw)*10,Se=r(re,ye);Oe(re,Se,ye,d,U.r-.2,U.r,Q,.7);let ct=new ze(ve.ball,Ae(d,.95)),Je=new ze(ve.ball,Ae(16777215,.9));Je.scale.setScalar(.55),ct.add(Je),Ke(ct,Q,wt=>{ct.position.set(re-7*(1-wt),Se+22*(1-wt)*(1-wt)+.5,ye-4*(1-wt)),ct.scale.setScalar(1.4)})}we(Q,()=>W(w,K,c))}let J=new ze(new oi(.82,1,4),new Ot({color:16765514,transparent:!0,opacity:.9,side:jt,depthWrite:!1,fog:!1}));J.rotation.x=-Math.PI/2,J.visible=!1,e.add(J);function ie(){let c=$.lockE;if(c&&(c.state==="dead"||!O.includes(c)||de(t.x,t.z,c.x,c.z)>46)&&(c=null),!c){let w=40;for(let S of O){if(S.state==="dead"||S.type==="dummy")continue;let U=de(t.x,t.z,S.x,S.z);U<w&&(S.arena||S.state!=="idle"||U<18)&&(w=U,c=S)}if(!c&&!$.auto){w=14;for(let S of O)if(S.type==="dummy"){let U=de(t.x,t.z,S.x,S.z);U<w&&(w=U,c=S)}}}return $.lockE=c}function ue(){let c=O.filter(S=>S.state!=="dead"&&S.type!=="dummy"&&de(t.x,t.z,S.x,S.z)<40);if(c.length<2)return;let w=c.indexOf($.lockE);$.lockE=c[(w+1)%c.length]}let _e=c=>c.state==="stun"||c.state==="sleep"||c.state==="tree"||c.state==="fear";function qe(){if($.autoMove=null,t.talking||t.paused||t.inside||t.fly||x.down>0)return;let c=ie();if(!c)return;t.mount&&i.dismount(),cn(!0);for(let G of O){if(G.state!=="wind")continue;let K=G.aspdT>0?1+G.aspdK:1,q=G.T.wind*K-G.t,re=de(t.x,t.z,G.x,G.z);if(q<.2&&re<G.range+1.6&&x.inv<q+.05&&x.dashCd<=0){let ye=Math.atan2(t.x-G.x,t.z-G.z)+(F?2.2:0);B(ye);break}}let w=de(t.x,t.z,c.x,c.z)-c.rad,S=Le(c.x,c.z);if(F)w>A.reach*.7&&($.autoMove={yaw:S,mag:1});else{let G=A.range*.85,K=Math.min(6.5,A.range*.4);if(w>G)$.autoMove={yaw:S,mag:1};else if(w<K&&!_e(c)&&c.rootT<=0){let q=S+Math.PI;D.on&&de(t.x,t.z,et.x,et.z)>et.r-5&&(q=Math.atan2(et.x-t.x,et.z-t.z)+(ps(Math.atan2(et.x-t.x,et.z-t.z),S)>0?-1.2:1.2)),$.autoMove={yaw:q,mag:1}}}if(x.busy>0)return;x.dashCd<=0&&x.lock<=0&&t.dashT<=0&&(t.yaw=t.speed<2||F?S:t.yaw);for(let G=1;G<=3;G++)if(x.chain[G]&&x.chain[G].t>0){Z(G);return}let U=x.hp/x.max,Q=O.filter(G=>G.state!=="dead"&&G.type!=="dummy"&&de(t.x,t.z,G.x,G.z)<12).length;if(x.charge>=100){let G=M[4],K=M[3];if(G&&G.exec&&!P[5]&&(c.hp<=c.max*(c.boss?.15:.35)||c.boss||c.elite||P[4])&&w<34){Z(5);return}if(K&&!P[4]&&(!K.dmg||w<(K.dmg.kind==="around"?K.dmg.r-.5:K.dmg.kind==="melee"?K.dmg.r+4:30))){Z(4);return}if(G&&!G.exec&&!P[5]&&P[4]){Z(5);return}}for(let G=1;G<=3;G++){let K=M[G-1];if(!K||P[G]||x.cds[G]>0)continue;let q=K.dmg,re=K.self||{};if(K.special==="mecha"){if(x.mecha)continue;Z(G);return}if(K.special==="spirit"){if(X.length)continue;Z(G);return}if(K.special==="trap"){if(w>7)continue;Z(G);return}if(!q&&!K.area){if((re.heal||re.hot)&&!re.atk&&!re.crit&&!re.stealth&&U>.7)continue;Z(G);return}if(!q&&K.area){if(K.cc&&(K.cc.sleep||K.cc.tree||K.cc.fear)&&(_e(c)||Q<2&&!c.boss&&!c.elite)||K.area.kind==="around"&&w>K.area.r-1)continue;Z(G);return}if(!(q.kind==="around"&&w>q.r-.6)&&!(q.kind==="melee"&&w>q.r+4.5)&&!((q.kind==="shot"||q.kind==="zone"||q.kind==="target")&&w>(q.range||30))){Z(G);return}}(F?w<A.reach+4.5:w<A.range)&&hn()}function Fe(){if(!(x.busy>0)){for(let c=1;c<=3;c++)if(x.chain[c]&&x.chain[c].t>0){Z(c);return}for(let c=1;c<=3;c++)if(!P[c]&&x.cds[c]<=0&&!(M[c-1].special==="mecha"&&x.mecha)){Z(c);return}hn()}}function Ze(c){if(c%10===0)return[{ty:"drake",hpK:1.35}];if(c%5===0)return[{ty:"champion",hpK:1.3}];let w=c-Math.floor(c/5)-1,S=[1,2,1,3,1,2,1,4][w%8];if(S===1)return[w%6===4?{ty:"brute",hpK:1.8}:{ty:"duel"}];S=Math.min(6,S+(c>=40?2:c>=20?1:0));let U=[];for(let Q=0;Q<S;Q++)U.push({ty:c>=4&&Q===0?"brute":Q%2===1?"shade":"wolf"});return U}function tt(){let c=++D.wave,w=Ze(c),S=Math.random()*6.28;h("Vague "+c,w.length===1?"Duel \xB7 "+Td[w[0].ty].name:"1 contre "+w.length),w.forEach((U,Q)=>{let G=S+Q/w.length*6.2832,K=15+Q%2*2.5;L(U.ty,et.x+Math.cos(G)*K,et.z+Math.sin(G)*K,c,{arena:!0,hpK:U.hpK})})}let z=()=>5*Math.floor(D.best/5)+1;function se(c,w){D.on||(c=Math.max(1,Math.min(D.best+1,Math.round(c||z()))),D.on=!0,D.loop=!!w,D.wave=c-1,D.pending=null,cn(!0),x.hp=x.max,tt())}function he(){D.on=!1,D.pending=null;for(let c of O.slice())c.arena&&R(c);for(let c of X.slice())Ge(c);for(let c of ne.splice(0))Be(c.m)}let pe=o.querySelector(".ew-cmb");if(pe){let c=S=>l?S===0?"Clic":String(S):"",w=`<button type="button" class="ew-atk" data-c="0"><em>${c(0)}</em><span>Attaque</span></button>`;if(M.forEach((S,U)=>{let Q=U+1;w+=`<button type="button" class="ew-sk k${Q}${S.ult?" ult":""}${P[Q]?" lock":""}" data-c="${Q}" title="${S.name.replace(/"/g,"")}"><i></i><em>${c(Q)}</em><span>${P[Q]?"Niv. "+ca[U]:S.name}</span></button>`}),pe.insertAdjacentHTML("afterbegin",w),!l){let U=G=>pe.querySelector(G),Q=(G,K,q,re)=>{if(!G)return;let ye=q*Math.PI/180;G.style.right=47+K*Math.cos(ye)-re/2+"px",G.style.bottom=47+K*Math.sin(ye)-re/2+"px"};['[data-c="dodge"]',".k1",".k2",".k3",'[data-w="jump"]'].forEach((G,K)=>Q(U(G),122,1+K*24,50)),[".k4",".k5",'[data-c="draw"]','[data-w="mount"]','[data-w="run"]'].forEach((G,K)=>Q(U(G),186,8+K*21,46))}}let Ie=o.querySelector('[data-c="dodge"]'),ge=!1,xe={hp:o.querySelector(".ew-hp i"),hpT:o.querySelector(".ew-hp span"),sh:o.querySelector(".ew-hp b"),ult:o.querySelector(".ew-ult i"),ultB:o.querySelector(".ew-ult"),stt:o.querySelector(".ew-st"),wave:o.querySelector(".ew-wave"),hud:o.querySelector(".ew-hud"),sk:pe?[...pe.querySelectorAll(".ew-sk")]:[]},ut="";function dt(){let c=x.armed||x.hp<x.max||D.on,w=x.cds.map(G=>Math.ceil(G*2)).join(","),S=x.mecha?Math.round(x.mecha.hp):-1,U=[g.role,x.mecha?"Mecha "+Math.max(0,Math.round(x.mecha.hp/x.mecha.max*100))+" %":"",m.mantra?"Mantra":"",x.stealthT>0?"Dissimul\xE9":"",k>0&&x.hp<x.max?"R\xE9g\xE9n\xE9ration":"",x.hotT>0?"Soin continu":"",x.atkT>0?"Attaque +"+Math.round(x.atkB*100)+" %":"",x.critT>0?"Critique +"+Math.round(x.critB*100)+" %":"",x.aspdT>0?"Cadence +"+Math.round(x.aspdB*100)+" %":"",x.guardT>0?"Garde":"",x.absorbT>0?"Absorption":"",x.inv>1?"Invuln\xE9rable":"",X.length?X[0].S.name:""].filter(Boolean).join(" \xB7 "),Q=[c,Math.round(x.hp),Math.round(x.shield),Math.round(x.charge),w,S,U,D.on,D.wave,O.length,x.chain.map(G=>G&&G.t>0?1:0).join("")].join("|");if(Q!==ut){if(ut=Q,xe.hud&&xe.hud.classList.toggle("on",c),xe.hp&&(xe.hp.style.width=x.hp/x.max*100+"%",xe.hpT.textContent=Math.round(x.hp)+" / "+x.max,xe.sh.style.width=(x.mecha?Math.max(0,x.mecha.hp/x.mecha.max*100):Math.min(100,x.shield/x.max*100))+"%"),xe.ult&&(xe.ult.style.width=x.charge+"%",xe.ultB.classList.toggle("full",x.charge>=100)),xe.stt&&(xe.stt.textContent=U),xe.wave){let G=O.filter(K=>K.arena&&K.state!=="dead").length;xe.wave.textContent=D.on?"Vague "+(D.wave+(D.loop&&D.pending!=null?1:0))+(D.loop?" en boucle":"")+(G?" \xB7 "+G+" ombre"+(G>1?"s":""):"")+(D.best?" \xB7 record "+D.best:""):"",xe.wave.classList.toggle("on",D.on)}xe.sk.forEach(G=>{let K=+G.dataset.c,q=M[K-1],re=G.querySelector("i"),ye=x.chain[K]&&x.chain[K].t>0?x.chain[K].s:null,Se=G.querySelector("span"),ct=P[K]?"Niv. "+ca[K-1]:(ye||q).name;Se.textContent!==ct&&(Se.textContent=ct),G.classList.toggle("chain",!!ye),ye?re.style.height="0%":q.ult?(G.classList.toggle("ready",!P[K]&&x.charge>=100),re.style.height=P[K]?"0%":100-x.charge+"%"):(re.style.height=(x.cds[K]>0?x.cds[K]/x.cdMax[K]*100:0)+"%",G.classList.toggle("ready",q.special==="mecha"&&!!x.mecha))})}}for(let[c,w]of _1)L("dummy",c,w,1,{quiet:!0,yaw:0});let Rt=v1.map(([c,w,S,U,Q])=>({x:c,z:w,type:S,lvl:U,n:Q,es:[],t:0})).filter(c=>r(c.x,c.z)>1.6),Dt=0,$t=0;return $.update=function(c){for(let S=b.length-1;S>=0;S--){let U=b[S];U.t-=c,U.t<=0&&(b.splice(S,1),U.fn())}x.busy-=c,x.lock-=c,x.inv-=c,x.lastHit+=c,x.dashCd-=c,x.slowT-=c,x.focusT-=c,x.rezCd-=c,$.warnT-=c;for(let S of x.chain)S&&(S.t-=c);for(let S=0;S<x.cds.length;S++)x.cds[S]>0&&!(S===1&&x.mecha)&&(x.cds[S]-=c);for(let S of["atkT","critT","aspdT","guardT","absorbT","hotT"])x[S]>0&&(x[S]-=c);if(x.shieldT>0&&(x.shieldT-=c,x.shieldT<=0&&(x.shield=0)),x.stealthT>0&&(x.stealthT-=c,x.stealthT<=0&&ft(0)),x.armed&&Et(t.x,t.z,30)&&fe(3.4*c),x.down>0)x.down-=c,x.down<=0&&ke();else if(x.hp<x.max){let S=0;k>0&&x.lastHit>2&&(S+=x.max*k/1e3*c),!D.on&&x.lastHit>6&&(S+=x.max*.07*c),m.regen&&(S+=x.max*m.regen*c),x.hotT>0&&(S+=x.max*x.hot/100*c),S&&(x.hp=Math.min(x.max,x.hp+S))}$.auto?qe():($.autoMove=null,$.lock?ie():$.lockE=null);{let S=($.lock||$.auto)&&$.lockE&&$.lockE.state!=="dead"?$.lockE:null;J.visible=!!S&&!t.inside,S&&(J.position.set(S.x,S.y+.12,S.z),J.scale.setScalar(S.rad+.75+Math.sin(t.t*5)*.06),J.rotation.z=t.t*1.6)}(x.queue||$.held)&&x.busy<=0&&x.down<=0&&(x.queue=!1,hn());for(let S of X.slice())_t(S,c);if(He(c),x.mecha){let S=x.mecha,U=S.M;S.t-=c,S.ph+=c*(2+Math.abs(t.speed)*.9);let Q=Math.min(1,Math.abs(t.speed)/6)*Math.sin(S.ph)*.55;U.legs[0].rotation.x=Q,U.legs[1].rotation.x=-Q,S.swing>0&&(S.swing-=c);let G=S.swing>0?Math.sin((1-S.swing/.4)*Math.PI):0;U.arms[0].rotation.x=-(S.arm!==1?G:0)*1.9+Q*.4,U.arms[1].rotation.x=-(S.arm!==0?G:0)*1.9-Q*.4,U.g.position.set(t.x,t.y+Math.abs(Math.sin(S.ph))*.06*Math.min(1,Math.abs(t.speed)/6),t.z),U.g.rotation.y=t.yaw,U.g.visible=!t.inside,S.t<=0&&Ce(!1)}T&&!x.armed&&!x.manual&&!t.mount&&!t.inside&&!t.talking&&cn(!0),x.armed&&!D.on&&!T&&!x.mecha&&(x.idle+=c,x.idle>25&&!O.some(S=>S.type!=="dummy"&&S.state!=="idle"&&S.state!=="dead")&&cn(!1));for(let S of O.slice())S.obj.visible=!t.inside,!t.inside&&(S.arena||de(S.x,S.z,t.x,t.z)<80)&&lt(S,c);for(let S=j.length-1;S>=0;S--)At(j[S],c)&&(Be(j[S].m),j.splice(S,1));for(let S=N.length-1;S>=0;S--){let U=N[S];U.t+=c;let Q=Math.min(1,U.t/U.dur);U.upd(Q),Q>=1&&(Be(U.obj),N.splice(S,1))}if($.shake=Math.max(0,$.shake-c*2.2),Pe.visible=(x.shield>0||x.inv>1||x.guardT>0||x.absorbT>0)&&!t.inside&&!x.mecha,Pe.visible&&(Pe.position.set(t.x,t.y+1,t.z),Pe.material.opacity=.14+Math.sin(t.t*5)*.04),ae.visible=x.atkT>0||x.critT>0||x.aspdT>0||!!m.mantra&&x.armed,ae.visible&&(ae.position.set(t.x,t.y+.12,t.z),ae.scale.setScalar((m.mantra&&x.atkT<=0&&x.critT<=0?.8:1.1)+Math.sin(t.t*6)*.12),ae.rotation.y=t.t*2),D.on)if(!ce(t.x,t.z)&&x.down<=0)h("D\xE9fi abandonn\xE9","Vague "+D.wave),he();else if(D.pending==null&&!O.some(S=>S.arena&&S.state!=="dead")){let S=D.wave>D.best;D.best=Math.max(D.best,D.wave),S&&u.onArena&&u.onArena(D.best);let U=u.onWave?u.onWave(D.wave):null;be(Math.round(x.max*.3)),h("Vague "+D.wave+" termin\xE9e",[U?"+"+U.x+" XP \xB7 +"+U.k+" kinahs"+(U.first?"":" (d\xE9j\xE0 gagn\xE9e aujourd\u2019hui : 10 %)"):"",S?"nouveau record":""].filter(Boolean).join(" \xB7 ")),D.pending=D.loop?2.2:3.2,D.loop&&D.wave--}else D.pending!=null&&(D.pending-=c,D.pending<=0&&(D.pending=null,tt()));if((Dt+=c)>.6){Dt=0;for(let S of Rt){let U=de(S.x,S.z,t.x,t.z);if(S.t>0&&(S.t-=.6),U<85&&!S.es.length&&S.t<=0&&!t.inside)for(let Q=0;Q<S.n;Q++){let G=Q/S.n*6.28,K=S.x+Math.sin(G)*2.5*(S.n>1),q=S.z+Math.cos(G)*2.5*(S.n>1);S.es.push(L(S.type,K,q,S.lvl,{wild:S,quiet:!0}))}else if(U>150&&S.es.length)for(let Q of S.es.slice())Q.state="gone",R(Q)}}$.warnT>0!==ge&&(ge=$.warnT>0,Ie&&Ie.classList.toggle("warn",ge),o.classList.toggle("ew-warn",ge)),($t+=c)>.08&&($t=0,dt())},Object.assign($,{attack:hn,skill:Z,dodge:B,rotate:Fe,arm:cn,nextLock:ue,pickLock:ie,toggleArm:()=>{x.manual=x.armed,cn(!x.armed)},startArena:se,arenaStart:z,inArena:ce,spawn:L,moveK:()=>x.down>0||x.lock>0?0:x.slowT>0?x.slowK:1,dispose(){e.remove(J),J.geometry.dispose(),J.material.dispose(),x.mecha&&(e.remove(x.mecha.M.g),xi(x.mecha.M.g),x.mecha=null,n.group.visible=!0),ft(0);for(let c of X.slice())Ge(c);for(let c of ne.splice(0))Be(c.m);for(let c of N)Be(c.obj);for(let c of j)Be(c.m);for(let c of O)c.barTex.dispose();for(let c in ve)ve[c].dispose()}}),T&&cn(!0),dt(),$}var Yc=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},Rr=(i,e)=>Math.exp(-(i*i)/(2*e*e)),ms=i=>212+26*Math.sin(i*.009)+10*Math.sin(i*.023+1),b1=[[0,0,188,3],[-250,-250,52,76],[-292,-206,30,86],[190,-175,17,37],[120,-235,26,18],[0,-335,32,28],[318,300,105,1.2],[-200,70,56,3.4]];function Jt(i,e){let t=3.6+1.5*Math.sin(i*.012)*Math.cos(e*.01)+.8*Math.sin(i*.033+e*.027)+.35*Math.sin(i*.07-e*.05);t+=Yc(160,330,e)*(5*Math.sin(i*.02)*Math.sin(e*.018)+3.5);let n=Math.hypot(i+335,e+335);t+=124*Rr(n,150)+13*Math.sin(i*.035)*Math.cos(e*.03)*Rr(n,230),t+=35*Rr(Math.hypot(i-190,e+175),55)+16*Rr(Math.hypot(i-120,e+235),50)+26*Rr(Math.hypot(i,e+335),72);for(let s of b1){let r=1-Yc(s[2]*.62,s[2],Math.hypot(i-s[0],e-s[1]));r>0&&(t=t*(1-r)+s[3]*r)}return t-=7.5*Rr(Math.abs(i-ms(e)),12),t}var Ld=[[0,0,0,-78],[0,0,-60,100],[0,0,168,22],[0,0,0,185],[0,185,20,400],[-4,-20,-112,-22],[-112,-22,-150,-130],[-150,-130,-250,-250],[0,-110,0,-320],[168,22,196,-52],[228,-56,190,-160],[0,0,70,30],[60,-40,118,-220],[168,22,300,250],[-112,-22,-164,64]];function Ko(i,e){let t=1e9;for(let[n,s,r,a]of Ld){let o=r-n,l=a-s,h=Math.max(0,Math.min(1,((i-n)*o+(e-s)*l)/(o*o+l*l)));t=Math.min(t,Math.hypot(i-n-o*h,e-s-l*h))}return t}function Rd(i,e,t,n){let s=.5+.5*Math.sin(i*.31+e*.17)*Math.sin(i*.07-e*.23),r=Math.abs(i-ms(e)),a=Math.hypot(i,e),o;if(Math.hypot(i-318,e-300)<100)o=[.62,.78,.84];else if(r<15)o=[.5,.45,.34];else if(t>72)o=[.9,.93,.97];else if(t>44){let l=Yc(44,72,t);o=[Qt(.4,.86,l*l),Qt(.37,.89,l*l),Qt(.36,.94,l*l)]}else a<180?o=[.4+s*.05,.36+s*.04,.34+s*.04]:e>165?o=[.3+s*.08,.26+s*.06,.13]:o=[.44+s*.12,.38+s*.08,.16+s*.04];t<=72&&r>=15&&Ko(i,e)<3.4&&(o=a<180?[.52,.47,.42]:[.56,.47,.33]),n[0]=o[0],n[1]=o[1],n[2]=o[2]}var Cd=[[-200,70,46,"Ar\xE8ne des Chasseurs","Le sable garde la m\xE9moire des coups"],[0,4,62,"Les Br\xE8ches","Rue du Four \xB7 rue des Cloches"],[0,-95,34,"Cath\xE9drale Sainte-Claire","La cloche de Th\xE9o sonne encore"],[-118,-22,44,"H\xF4pital de la Mis\xE9ricorde","La grille est rest\xE9e"],[-62,112,40,"Faille de la gare","Rang E \xB7 l\xE0 o\xF9 tout a commenc\xE9"],[70,30,20,"Galeries des Murmures","Rue des Tisserands"],[176,22,34,"Quartier des P\xEAcheurs","Le quai, la barque"],[212,-56,26,"Pont-de-l\u2019Est",""],[190,-175,34,"Colline des Vents","L\u2019observatoire"],[-250,-250,70,"Haute-Brume","Vingt-trois maisons, une chapelle, un puits"],[10,300,90,"Route de Vaumoise","La route du Sud"],[318,300,100,"Mer de verre",""],[120,-235,36,"Monast\xE8re en ruine",""],[0,-335,44,"La hauteur du Nord",""]],Pd={h0:[46,64,.6],h1:[76,22,-1.2],h2:[120,-238,0],h3:[96,-42,-.5],h4:[-292,-206,.9],h5:[-98,142,.9],h6:[0,-336,0]},w1={rolande:[-15,21,.4],gaspard:[-23,11,.9],helene:[-9,24,-.3],theo:[-34,30,1.2],mira:[8,-59,.3],anselme:[-7,-60,-.2],kael:[-96,-4,1.4],odile:[22,-20,-.6],yanis:[-42,92,2.4],nour:[64,37,-.9],zach:[181,27,-1.3],sera:[-243,-238,.8],ysolde:[-257,-247,.4]},S1={mira:{look:{gender:"f",height:.95,build:.92,hair:"mi-long",hairColor:"#1a1412",skin:"#d9a882",eyeColor:"#3a2a1c"},outfit:{cut:"coat",c:["#4a3b2e","#2a221b","#8a6a45"]}},theo:{look:{gender:"m",height:1.05,build:1.2,shoulders:1.14,hair:"rase",beard:"pleine",hairColor:"#5a5048",skin:"#cf9a72"},outfit:{cut:"apron",c:["#5a4634","#3a2a1e","#3a2f28"]},fx:{oneArm:!0}},anselme:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"courte"},outfit:{cut:"robe",c:["#5a4634","#3a2c20","#8a7a5a"]}},helene:{look:{gender:"f",hair:"chignon",hairColor:"#8a8a8a",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#2f3a4a","#1c232e","#b9c2cc"]}},sera:{look:{gender:"f",height:1.03,hair:"queue",hairColor:"#b03a2e",skin:"#ecc5a4"},outfit:{cut:"cape",c:["#3f5d78","#22303f","#bccad6"]},armor:{plastron:3,jambieres:3},main:{type:"epee",r:3}},nour:{look:{gender:"f",hair:"long",hairColor:"#0f0c0b",skin:"#b57d54"},outfit:{cut:"robe",c:["#5d3f80","#2e1f42","#dab66c"]},fx:{closedEyes:!0}},kael:{look:{gender:"m",hair:"court"},outfit:{cut:"blouse",c:["#dfe7ea","#9db3bd","#c0392b"]},fx:{shadow:!0}},odile:{look:{gender:"f",build:1.05,hair:"chignon",hairColor:"#4a2f1c"},outfit:{cut:"coat",c:["#6b6f78","#3b3e45","#d9b46a"]}},yanis:{look:{gender:"m",hair:"court",hairColor:"#0f0c0b",skin:"#6b4028",eyeColor:"#3a2a1c"},outfit:{cut:"suit",c:["#80858e","#3b3e45","#d5d8de"]}},ysolde:{look:{gender:"f",hair:"long",hairColor:"#8a5a2e",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#8b8e93","#55585e","#6e7176"]},off:{type:"bouclier",r:3}},gaspard:{look:{gender:"m",height:.97,hair:"boucles",hairColor:"#f0f0f0",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#6a3a3a","#3a2020","#d9b46a"]}},zach:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"pleine",skin:"#cf9a72"},outfit:{cut:"coat",c:["#3d4a3a","#232b22","#8a8a6a"]}},rolande:{look:{gender:"f",build:1.14,height:.96,hair:"chignon",hairColor:"#c9c9c9"},outfit:{cut:"apron",c:["#4a5a7a","#2a3448","#f4f4ee"]}}};function pa(i){let e=i>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var ma=class{constructor(){this.b={},this.boxes=[],this.m4=new Nt,this.q=new Gn,this.e=new is}add(e,t,n,s,r,a=0,o=1,l=1,h=1,u=0,f=0){let p=t.index?t.toNonIndexed():t.clone();this.e.set(u,a,f,"YXZ"),this.q.setFromEuler(this.e),p.applyMatrix4(this.m4.compose(new V(n,s,r),this.q,new V(o,l,h)));for(let d of Object.keys(p.attributes))d!=="position"&&d!=="normal"&&p.deleteAttribute(d);(this.b[e]=this.b[e]||[]).push(p)}solid(e,t,n,s,r=0){let a=Math.abs(Math.cos(r)),o=Math.abs(Math.sin(r)),l=(n*a+s*o)/2,h=(n*o+s*a)/2;this.boxes.push([e-l,e+l,t-h,t+h])}build(e,t){let n=new mt;for(let s in this.b){let r=ra(this.b[s],!1);this.b[s].forEach(o=>o.dispose());let a=new ze(r,e[s]);a.castShadow=t&&!e[s].transparent&&!e[s].isMeshBasicMaterial,a.receiveShadow=t,n.add(a)}return n}},Ye=new Vn(1,1,1),da=new yn(Math.SQRT1_2,1,4).rotateY(Math.PI/4),rn=new Rn(.5,.5,1,12),Pr=new yn(.5,1,12),Vi=new li(.5,12,8),Cn=new ss(1,1),E1=new li(.5,16,8,0,Math.PI*2,0,Math.PI/2),Cr=new Rn(.5,.5,1,56),fa=(()=>{let i=new Xn;i.moveTo(-.5,0),i.lineTo(.5,0),i.lineTo(0,1),i.closePath();let e=new dr(i,{depth:1,bevelEnabled:!1});return e.translate(0,0,-.5),e})();function ci(i,e,t,n,s,r,a,o,l,h,u={}){let f=u.y??Jt(t,n);i.add(l,Ye,t,f+a/2-.6,n,o,s,a+1.2,r);let p=u.roofH??Math.min(s,r)*.42;u.flat?i.add(h,Ye,t,f+a+.25,n,o,s+.6,.5,r+.6):u.hip?i.add(h,da,t,f+a+p/2,n,o,s+1,p,r+1):i.add(h,fa,t,f+a,n,o,s+1,p,r+1.2),u.chimney!==!1&&e()<.7&&i.add("stoneD",Ye,t+Math.cos(o)*s*.25,f+a+p*.7,n-Math.sin(o)*s*.25,o,.9,p*1.1,.9);let d=Math.cos(o),y=Math.sin(o),v=Math.max(1,Math.floor(a/3.1));for(let[_,E,I,P]of[[0,1,s,r/2],[0,-1,s,r/2],[1,0,r,s/2],[-1,0,r,s/2]]){let A=Math.max(1,Math.floor(I/2.8));for(let F=0;F<v;F++)for(let T=0;T<A;T++){if(F===0&&E===1&&T===Math.floor(A/2))continue;let x=(T-(A-1)/2)*(I/A),k=_?_*(P+.04):x,O=E?E*(P+.04):x,j=t+k*d+O*y,N=n-k*y+O*d,b=o+Math.atan2(_,E);i.add(e()<(u.lit??.55)?"winLit":"winDark",Cn,j,f+1.9+F*3.1,N,b,.9,1.25,1)}}let g=r/2+.05,m=t+g*y,M=n+g*d;return i.add("wood",Cn,m,f+1.05,M,o,1.2,2.1,1),u.noSolid||i.solid(t,n,s,r,o),{door:[t+(r/2+1.6)*y,n+(r/2+1.6)*d]}}function ua(i,e,t){let n=Jt(e,t);i.add("iron",rn,e,n+1.9,t,0,.14,3.8,.14),i.add("iron",Ye,e,n+3.85,t,0,.5,.1,.5),i.add("lamp",Vi,e,n+3.55,t,0,.42,.5,.42)}function T1(i,e){let t=new ma,n=pa(20261112),s=[],r=[],a=(d,y,v,g)=>v.some(m=>Math.hypot(d-m[0],y-m[1])<(m[2]||g)),o=[[0,-95,40],[-118,-22,46],[-62,112,36],[70,30,20],[-18,18,26],[0,-30,20],[22,-20,14],[-40,92,12],[96,-42,24],[46,64,20],[-98,142,30],[176,22,30]],l=["wallA","wallB","wallC","wallW"],h=["roofA","roofB"];for(let d=-150;d<=150;d+=24)for(let y=-150;y<=160;y+=22){let v=d+(n()-.5)*6,g=y+(n()-.5)*5;if(Math.hypot(v,g)>158||a(v,g,o,0)||Ko(v,g)<8.5||Math.abs(v-ms(g))<40||n()<.12)continue;let M=g>-10&&v>-70,_=9+n()*7,E=8+n()*6,I=(M?5.5:7)+n()*(M?4.5:8);ci(t,n,v,g,_,E,I,n()<.5?0:Math.PI/2,M?n()<.5?"wallB":"wallC":l[Math.floor(n()*4)],h[Math.floor(n()*2)],{lit:M?.4:.6,hip:n()<.25})}for(let[d,y,v,g]of Ld.slice(0,6)){let m=Math.floor(Math.hypot(v-d,g-y)/22);for(let M=1;M<m;M++){let _=M/m,E=d+(v-d)*_,I=y+(g-y)*_,P=-(g-y),A=v-d,F=Math.hypot(P,A);ua(t,E+P/F*4.6,I+A/F*4.6)}}{let d=Jt(-18,14);ci(t,n,-18,12,15,11,8.5,.35,"wallA","roofA",{lit:.9}),t.add("white",Ye,-12,d+3.2,22.5,.35,5.5,1.4,.05),t.add("white",Ye,-6.5,d+3,20.6,.35,2.4,1.7,.05),t.add("iron",rn,-15.5,d+2,24,0,.1,4,.1),t.add("iron",rn,-4.5,d+2,19.6,0,.1,4,.1),t.add("wood",Ye,-37,d+4.1,33,1.2,9,.35,7);for(let[y,v]of[[-3.6,-2.6],[3.6,-2.6],[-3.6,2.6],[3.6,2.6]]){let g=Math.cos(1.2),m=Math.sin(1.2);t.add("wood",rn,-37+y*g+v*m,d+2,33-y*m+v*g,0,.35,4,.35)}t.add("stoneD",Ye,-39.5,d+1,35,1.2,2.6,2,2.2),t.add("ember",Ye,-39.5,d+2.05,35,1.2,1.9,.2,1.5),t.add("iron",Ye,-35.5,d+.55,31.5,1.2,1.5,.5,.6),t.add("stoneD",Ye,-35.5,d+.25,31.5,1.2,.7,.6,.5),r.push([-39.5,d+2.6,35,16742954,2.2,16]),t.solid(-39.5,35,3,3)}{let d=Jt(0,-95);t.add("stone",Ye,0,d+10,-98,0,22,21,46),t.add("roofB",fa,0,d+20.4,-98,0,24,10,47),t.add("stone",Ye,0,d+22,-70.5,0,11,45,10),t.add("roofB",da,0,d+53,-70.5,0,12,18,11),t.add("gold",Ye,0,d+64,-70.5,0,.3,4,.3),t.add("gold",Ye,0,d+64.6,-70.5,0,1.8,.3,.3),t.add("rose",rn,0,d+16,-65.4,0,5.2,.2,5.2,Math.PI/2),t.add("wood",Cn,0,d+2.6,-65.42,0,3.4,5.2,1);for(let y=0;y<4;y++)t.add("stoneL",Ye,0,d-.3+y*-0+.2*(3-y),-63.6+y*.9,0,12+y*1.4,.4,1);for(let y=0;y<6;y++)for(let v of[-1,1])t.add("rose",Cn,v*11.06,d+9,-116+y*7.2,v*Math.PI/2,2.2,8,1),t.add("stoneD",Ye,v*12,d+6.5,-112.4+y*7.2,0,1.6,13,1.6);for(let y of[30,36])for(let[v,g]of[[0,1],[1,0],[-1,0]])t.add("winDark",Cn,v*5.56,d+y,-70.5+(g?5.06:0),Math.atan2(v,g),1.6,3.6,1);t.solid(0,-98,22,46),t.solid(0,-70.5,11,10),r.push([0,d+5,-61,16767392,1.6,22])}{let d=Jt(-118,-22);ci(t,n,-122,-24,22,58,15,0,"wallW","roofB",{lit:.35,flat:!0,chimney:!1}),ci(t,n,-106,-44,14,16,11,0,"wallW","roofB",{lit:.3,flat:!0,chimney:!1});for(let y=0;y<26;y++)t.add("iron",rn,-96,d+1.4,-52+y*2.2,0,.12,2.8,.12);t.add("iron",Ye,-96,d+2.5,-24.5,0,.14,.14,56),t.add("iron",Ye,-96,d+.5,-24.5,0,.14,.14,56),t.solid(-96,-40,.6,26),t.solid(-96,-6,.6,22)}{let d=Jt(-62,112);t.add("wallC",Ye,-62,d+5,122,.9,30,11,12),t.add("iron",rn,-62,d+10.5,122,.9,12,30,12,0,Math.PI/2),t.add("winDark",Cn,-57.2,d+6,118.2,.9+Math.PI,7,6,1);for(let y=0;y<12;y++)t.add("wood",Ye,-74+y*2.6,d+.12,102+y*2.05,.9,.5,.2,5);t.add("iron",Ye,-60,d+.3,113,.9+Math.PI/2,.16,.2,34),t.add("iron",Ye,-58.6,d+.3,111.9,.9+Math.PI/2,.16,.2,34),t.solid(-62,122,26,20)}{let d=Jt(70,30);for(let y of[-1,1])t.add("stoneD",Ye,70+y*3.6*Math.cos(-1.2),d+3,30-y*3.6*Math.sin(-1.2),-1.2,2,7,3);t.add("stoneD",Ye,70,d+7.2,30,-1.2,9.4,2,3.2),t.add("void",Cn,70+.4*Math.sin(-1.2),d+2.9,30+.4*Math.cos(-1.2),-1.2,5.2,6,1);for(let y of[-1,1]){let v=70+y*2.2*Math.cos(-1.2)-2.2*Math.sin(-1.2),g=30-y*2.2*Math.sin(-1.2)-2.2*Math.cos(-1.2);t.add("white",rn,v,d+.3,g,0,.16,.6,.16),t.add("lamp",Vi,v,d+.72,g,0,.2,.3,.2)}r.push([67,d+1.6,28,16762977,1.1,10])}ci(t,n,30,-22,14,12,10,Math.PI/2*3,"wallA","roofA",{lit:.8,hip:!0}),ci(t,n,-48,86,12,12,12,2.4,"wallB","roofB",{lit:.7,flat:!0,chimney:!1});{for(let M=0;M<9;M++)if(t.add("wood",Ye,188+M*2.2,1.1,24,0,2,.25,4.6),M%2===0)for(let _ of[-1,1])t.add("wood",rn,188+M*2.2,1.1-1.6,24+_*2.1,0,.3,3.6,.3);let y=(M,_,E,I)=>{t.add(I,Vi,M,.55,_,E,2,1.3,5.2),t.add("void",Ye,M,1,_,E,1.5,.3,4.2),t.add("wood",Ye,M,.95,_,E,1.7,.1,.5)};y(206,29,.25,"wood"),y(203,6,-.2,"wallC"),y(204,48,.1,"wallB"),ci(t,n,172,40,9,8,5.5,-1.4,"wallB","roofA",{lit:.7}),ci(t,n,170,4,10,8,6,-1.6,"wallC","roofB",{lit:.5}),ua(t,186,21);let v=-56,g=ms(v),m=3.6;t.add("stone",Ye,g,m,v,0,40,.8,6.5);for(let M of[-1,1])t.add("stone",Ye,g,m+.9,v+M*3,0,40,1,.5);for(let M of[-9,9])t.add("stoneD",Ye,g+M,m-3,v,0,2.4,6,6);ua(t,g-19,v+2.6),ua(t,g+19,v-2.6)}{let d=Jt(190,-175);t.add("stoneL",rn,190,d+4,-175,0,13,8,13),t.add("iron",E1,190,d+8,-175,0,13,13,13),t.add("void",Ye,190,d+11.5,-171,0,1.6,5,6,-.6),t.add("wood",Cn,190,d+1.1,-168.46,0,1.3,2.2,1),t.solid(190,-175,11,11)}{let d=[[-236,-262,.3],[-262,-266,-.4],[-272,-244,1.2],[-232,-240,-.9],[-246,-278,.1],[-270,-228,.7],[-228,-224,-.2]];for(let[v,g,m]of d)ci(t,n,v,g,7.5,6.5,4.6,m,"wallA","snow",{lit:.7});let y=Jt(-250,-250);ci(t,n,-254,-232,7,11,6,.2,"stoneL","snow",{lit:.6,chimney:!1}),t.add("stoneL",Ye,-253.2,y+6,-227.6,.2,3,12,3),t.add("snow",da,-253.2,y+14,-227.6,.2,3.6,4.5,3.6),t.add("stoneD",rn,-252,y+.5,-252,0,2.2,1,2.2),t.add("void",rn,-252,y+1.02,-252,0,1.7,.02,1.7);for(let v of[-1,1])t.add("wood",rn,-252+v*1.1,y+1.6,-252,0,.16,2.4,.16);t.add("wood",fa,-252,y+2.7,-252,0,3.2,.9,2.4),t.solid(-252,-252,2.4,2.4),t.add("stoneD",rn,-246,y+.2,-244,0,1.6,.4,1.6),t.add("ember",Pr,-246,y+.8,-244,0,.9,1.2,.9),r.push([-246,y+1.6,-244,16747066,2,18])}{let d=Jt(3,190);t.add("wood",rn,3,d+1.4,190,0,.18,2.8,.18),t.add("wood",Ye,3.5,d+2.4,190,.2,2.2,.5,.08)}{let d=et.x,y=et.z,v=Jt(d,y),g=44;t.add("stoneD",Cr,d,v+.02,y,0,72,.1,72),t.add("sand",Cr,d,v+.06,y,0,45.6,.1,45.6),t.add("stoneD",Cr,d,v+.09,y,0,5.4,.1,5.4),t.add("neon",Cr,d,v+.1,y,0,4.6,.1,4.6),t.add("stoneD",Cr,d,v+.11,y,0,4.2,.1,4.2),t.add("ember",Cr,d,v+.12,y,0,1.1,.1,1.1);for(let m=0;m<g;m++){let M=(m+.5)/g*6.2832,_=Math.cos(M),E=Math.sin(M),I=-M+Math.PI/2,P=M>Math.PI?M-6.2832:M;if(Math.abs(P)<et.gate+.05)continue;for(let T=0;T<4;T++){let x=24+T*2.1,k=6.2832*(x+1.1)/g+.06;t.add(T%2?"stone":"stoneL",Ye,d+_*x,v+(.9+T)/2,y+E*x,I,k,.9+T,2.2)}let A=32.8,F=6.2832*(A+.8)/g+.06;t.add("stone",Ye,d+_*A,v+4.3,y+E*A,I,F,8.6,1.4),m%2&&t.add("stoneL",Ye,d+_*A,v+9.1,y+E*A,I,F*.6,1,1.4),m%4===1&&(t.add("iron",rn,d+_*A,v+11.4,y+E*A,0,.14,5,.14),t.add(m%8===1?"banner":"flag",Ye,d+_*A-E*.95,v+13.1,y+E*A+_*.95,I,1.8,1.1,.06))}for(let m of[-1,1]){let M=m*(et.gate+.11),_=d+Math.cos(M)*30.5,E=y+Math.sin(M)*30.5;t.add("stoneL",rn,_,v+6,E,0,4.6,12,4.6),t.add("roofA",Pr,_,v+14.3,E,0,5.6,4.6,5.6),t.add("stoneD",rn,d+37.5,v+.6,y+m*5,0,1.2,1.2,1.2),t.add("ember",Pr,d+37.5,v+1.6,y+m*5,0,.9,1.2,.9),r.push([d+37.5,v+2.6,y+m*5,16747066,1.8,18])}t.add("stone",Ye,d+30.5,v+9.8,y,0,4.4,3,11),t.add("banner",Ye,d+32.8,v+8.8,y,0,.08,3.4,3),t.add("gold",Ye,d+32.86,v+8.8,y,0,.08,1.4,.4),t.add("gold",Ye,d+32.86,v+9.1,y,0,.08,.4,1.3)}let u=[];for(let d of i.houses||[]){let y=Pd[d.id];if(!y)continue;let[v,g,m]=y,M=Jt(v,g),_=Math.cos(m),E=Math.sin(m),I,P=(A,F)=>[v+A*_+F*E,g-A*E+F*_];if(d.id==="h0"){for(let[k,O,j,N]of[[-5,-3,9,7],[5,-3,9,8],[0,-7,11,10],[-8,-8,7,5],[8,-8,7,6]]){let[b,X]=P(k,O);t.add("rock",Vi,b,M+N*.2,X,n()*3,j,N,j)}let[A,F]=P(0,1.2);t.add("void",Vi,A,M+1.2,F,m,4.4,4.6,2.4);let[T,x]=P(0,3.5);t.add("ember",Pr,T,M+.4,x,0,.7,.9,.7),r.push([T,M+1.3,x,16747066,1.6,12]),I=P(0,4.2),t.solid(...P(0,-5),16,9)}else if(d.id==="h1")I=[72,27];else if(d.id==="h2"){t.add("stoneL",Ye,...(A=>[A[0],M+4,A[1]])(P(-5.5,0)),m,1,9,16),t.add("stoneL",Ye,...(A=>[A[0],M+2.6,A[1]])(P(5.5,-2)),m,1,6.2,11),t.add("stoneL",Ye,...(A=>[A[0],M+5,A[1]])(P(0,-8)),m,12,11,1),t.add("stoneL",fa,...(A=>[A[0],M+10.4,A[1]])(P(0,-8)),m,12,4,1),t.add("roofB",Ye,...(A=>[A[0],M+8.4,A[1]])(P(-2.6,-3)),m,6.4,.3,9.5,0,-.5),t.add("rose",Cn,...(A=>[A[0],M+6.5,A[1]])(P(0,-7.44)),m,2,4.6,1),t.add("stoneD",Ye,...(A=>[A[0],M+.6,A[1]])(P(0,-5.6)),m,3,1.2,1.6);for(let[A,F]of[[-1.5,"flowerA"],[0,"flowerB"],[1.4,"flowerC"],[2.6,"flowerA"]])t.add(F,Vi,...(T=>[T[0],M+.25,T[1]])(P(A,-3.4)),0,.7,.5,.7);I=P(0,9),t.solid(...P(-5.5,0),1.2,16,m),t.solid(...P(0,-8),12,1.2,m)}else if(d.id==="h3"){let A=ci(t,n,v,g,22,14,11,m,"wallA","roofA",{lit:.85,hip:!0});for(let F of[-1,1]){let[T,x]=P(F*13.5,1);ci(t,n,T,x,6,9,13,m,"wallA","roofA",{lit:.85,hip:!0,chimney:!1})}for(let F of[-1,1])ua(t,...P(F*3,10));I=A.door}else if(d.id==="h4"){t.add("stone",Ye,v,M+6,g,m,26,13,20);for(let[T,x]of[[-13,-10],[13,-10],[-13,10],[13,10]]){let[k,O]=P(T,x);t.add("stoneL",rn,k,M+9,O,0,7,19,7),t.add("roofB",Pr,k,M+22,O,0,8.2,8,8.2),t.add("flag",Ye,k+.9,M+27.2,O,m,1.8,1,.06),t.add("iron",rn,k,M+27,O,0,.12,3,.12)}for(let T=-5;T<=5;T++){let[x,k]=P(T*2.3,10.2);T%2&&t.add("stone",Ye,x,M+13.4,k,m,1.2,1,.8)}let[A,F]=P(0,10.06);t.add("wood",Cn,A,M+2.4,F,m,4,5,1);for(let T of[-7,7])for(let x of[5,9]){let[k,O]=P(T,10.06);t.add("winLit",Cn,k,M+x,O,m,1.2,1.8,1)}I=P(0,12.5),t.solid(v,g,30,24,m)}else if(d.id==="h5"){t.add("obs",Ye,v,M+9,g,m,20,18,16),t.add("obs",da,v,M+24,g,m,16,12,13);for(let[T,x,k]of[[-12,6,22],[12,6,22],[-12,-6,16],[12,-6,16]]){let[O,j]=P(T,x);t.add("obs",Ye,O,M+k/2,j,m,5,k,5),t.add("obs",da,O,M+k+4,j,m,5.6,8,5.6),t.add("umbra",Cn,...(N=>[N[0],M+k-3,N[1]])(P(T,x+2.54)),m,1,3,1)}let[A,F]=P(0,8.06);t.add("umbra",Cn,A,M+3.4,F,m,3.4,6.8,1),t.add("neon",Cn,A,M+3.4,F+.02*_,m,.3,6.8,1),I=P(0,10.6),t.solid(v,g,30,18,m),r.push([I[0],M+4,I[1],9133302,2.4,22])}else if(d.id==="h6"){t.add("light",Ye,v,M+7,g,m,26,14,16),t.add("gold",fa,v,M+14,g,m,28,8,17.4);for(let T=-4;T<=4;T++)for(let x of[3,7,11]){if(T===0&&x===3)continue;let[k,O]=P(T*2.8,8.06);t.add("sun",Cn,k,M+x,O,m,1.3,2.2,1)}let[A,F]=P(0,8.08);t.add("sun",Cn,A,M+3,F,m,3,6,1);for(let T=0;T<6;T++){let[x,k]=P(0,9+T*1.1);t.add("light",Ye,x,M-.2-T*.02,k,m,8+T,.5,1.1)}I=P(0,11.5),t.solid(v,g,26,16,m),r.push([I[0],M+6,I[1],16773312,3.2,40])}u.push({...d,x:I[0],z:I[1]})}let f=[],p=e.trees;for(let d=0;d<p*6&&f.length<p;d++){let y=(n()-.5)*860,v=(n()-.5)*860,g=Jt(y,v);if(Math.hypot(y,v)<176&&n()>.04||g<2.2||g>70||Math.abs(y-ms(v))<16||Ko(y,v)<5||Math.hypot(y-318,v-300)<104||a(y,v,Object.values(Pd).map(_=>[_[0],_[1],24]),0)||a(y,v,[[-250,-250,44],[190,-175,16],[et.x,et.z,42]],0))continue;let M=v>150?1:.45;n()>M||f.push({x:y,y:g,z:v,s:.8+n()*.9,pine:g>30||n()<.25,c:n()})}return{B:t,doors:s,lights:r,houses:u,trees:f}}var Id=[["rock","rock",9,8],["stoneD","stoneD",11,9],["stoneL","stone",13,11],["wallA","wood",16,12],["stone","stoneL",20,14],["obs","obs",22,15],["light","light",24,16]];function A1(i,e,t,n){let[s,r,a,o]=Id[e.r]||Id[0],l=5+e.r*.5,h=pa(77+e.r);i.add(r,Ye,0,n-.25,0,0,a,.5,o),i.add(s,Ye,0,n+l/2,-o/2,0,a,l,.5),i.add(s,Ye,-a/2,n+l/2,0,0,.5,l,o),i.add(s,Ye,a/2,n+l/2,0,0,.5,l,o),i.add("rug",Ye,0,n+.02,.5,0,a*.45,.04,o*.4),i.add("stoneD",Ye,0,n+1.4,-o/2+.7,0,3.4,2.8,1),i.add("void",Ye,0,n+.9,-o/2+1,0,2,1.5,.6),i.add("ember",Pr,0,n+.6,-o/2+1.05,0,1,1.1,.5),i.add("stoneD",Ye,0,n+3.8,-o/2+.6,0,1.6,l-3.2,.8),i.add("wood",Ye,0,n+.95,1,0,Math.min(6,a*.34),.14,1.5);for(let[d,y]of[[-1,.4],[1,.4],[-1,1.6],[1,1.6]])i.add("wood",rn,d*Math.min(2.6,a*.15),n+.47,y,0,.16,.95,.16);for(let d=-1;d<=1;d++)for(let y of[-1,1])i.add("wood",rn,d*1.3,n+.3,1+y*1.4,0,.55,.6,.55);i.add("white",rn,-.6,n+1.1,1,0,.3,.16,.3),i.add("lamp",Vi,.5,n+1.25,1,0,.16,.3,.16);let u=Math.min(e.cap>=99?8:e.cap,8);for(let d=0;d<u;d++){let y=d%2?1:-1,v=Math.floor(d/2),g=y*(a/2-1.5),m=-o/2+2.6+v*2.6;if(m>o/2-1.5)break;i.add("wood",Ye,g,n+.35,m,0,2.2,.5,1.1),i.add("white",Ye,g,n+.66,m,0,2.1,.14,1),i.add(["flowerA","flowerB","flowerC","rug"][d%4],Ye,g-y*.3,n+.75,m,0,1.5,.1,1.02)}for(let d of[-1,1])for(let y=-1;y<=1;y+=2)i.add(e.r>=6?"sun":e.r===5?"umbra":"winLit",Cn,d*(a/2-.27),n+2.6,y*o*.22,-d*Math.PI/2,1.3,1.9,1);let f=t.instruments||[],p=a/2-2;if(f.includes("i4")&&(i.add("wood",Ye,p-1,n+.9,o/2-3.5,0,2.8,1.8,.9),i.add("white",Ye,p-1,n+1,o/2-2.95,0,2.5,.08,.3)),f.includes("i5")){for(let d=0;d<7;d++)i.add("gold",rn,-p+d*.34,n+1.6+Math.abs(3-d)*.3,o/2-3.2,0,.26,3.2+Math.abs(3-d)*.6,.26);i.add("wood",Ye,-p+1,n+.6,o/2-2.7,0,2.8,1.2,.7)}return f.includes("i1")&&(i.add("wood",Vi,2.6,n+.6,-o/2+1,0,.9,1.1,.3),i.add("wood",Ye,2.6,n+1.5,-o/2+.95,0,.14,1.2,.08)),f.includes("i3")&&(i.add("wallC",Vi,-2.8,n+.9,-o/2+1,0,1.1,1.6,.4),i.add("void",Ye,-2.8,n+2.2,-o/2+.95,0,.14,1.4,.08)),(f.includes("i6")||f.includes("i2")||f.includes("i0"))&&(i.add("gold",Ye,-a/2+1,n+1.4,3,0,.12,2.6,.12),i.add("gold",Ye,-a/2+1.5,n+2.6,3,0,1.1,.12,.12,0,.3),i.add("wood",Ye,-a/2+1.5,n+1.3,3,0,.14,2.6,.14,0,-.42)),i.add("wood",Cn,0,n+1.2,o/2-.02,Math.PI,1.6,2.4,1),{W:a,D:o,h:l,door:[0,o/2-1.2],spots:[[-2.6,-1],[2.6,-1],[-3.4,2.4],[3.4,2.4],[0,-2.4],[-1.6,3.4],[1.6,3.4],[-4.6,.4],[4.6,.4],[0,3.8],[-3,-3],[3,-3]].filter(d=>Math.abs(d[0])<a/2-2&&Math.abs(d[1])<o/2-1.5)}}var R1=`
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
`;function Dd(i,e,t={}){let n=e.mode==="pc",s=n?{px:2,shadows:!0,seg:220,trees:1500,fog:[140,720],bloom:!0,grass:2600}:{px:1.5,shadows:!1,seg:150,trees:600,fog:[110,520],bloom:!1,grass:0};if(!document.getElementById("ew-css")){let B=document.createElement("style");B.id="ew-css",B.textContent=R1,document.head.appendChild(B)}let r=document.createElement("div");r.className="ew "+(n?"ew-pc":"ew-mob"),r.lang="fr",r.innerHTML=`<canvas class="ew-c"></canvas>
    <div class="ew-zone"><b></b><i></i></div>
    <div class="ew-joy"><div class="ew-stick" style="display:none"><i></i></div></div>
    <div class="ew-top"><div class="ew-tl"><button type="button" class="ew-btn" data-w="menu">\u2630 Menu</button><div class="ew-hud"><div class="ew-bar ew-hp"><i></i><b></b><span></span></div><div class="ew-bar ew-ult"><i></i></div><div class="ew-st"></div></div></div><canvas class="ew-map" width="248" height="248"></canvas></div>
    <div class="ew-wave"></div><div class="ew-skn"></div><div class="ew-opt"><button type="button" data-o="auto"><em>G</em>Auto</button><button type="button" data-o="lock"><em>T</em>Verrou</button><button type="button" data-o="fly"><em>B</em>Vol</button></div><div class="ew-rot" data-w="fs">\u21BB Tournez le t\xE9l\xE9phone pour jouer \xE0 l\u2019horizontale<br><small>ou touchez ici : plein \xE9cran horizontal</small></div>
    <div class="ew-keys"><kbd>Z</kbd><kbd>Q</kbd><kbd>S</kbd><kbd>D</kbd> se d\xE9placer \xB7 <kbd>Maj</kbd> courir \xB7 <kbd>Espace</kbd> sauter \xB7 <kbd>E</kbd> agir \xB7 <kbd>M</kbd> monture \xB7 souris : cam\xE9ra \xB7 <kbd>\xC9chap</kbd> menu<br><kbd>Clic</kbd> attaquer \xB7 <kbd>Clic droit</kbd> ou <kbd>V</kbd> esquiver \xB7 <kbd>1</kbd>\u2013<kbd>5</kbd> techniques \xB7 <kbd>R</kbd> d\xE9gainer / rengainer<br><kbd>B</kbd> voler (<kbd>Espace</kbd> monter, <kbd>Ctrl</kbd> descendre) \xB7 <kbd>T</kbd> verrouiller la cam\xE9ra sur l\u2019ennemi \xB7 <kbd>G</kbd> combat automatique</div>
    <div class="ew-prompt"><button type="button" data-w="act"></button></div>
    <div class="ew-cmb"><button type="button" class="ew-rnd ew-dg" data-c="dodge"><em>V</em><span>Esquive</span></button><button type="button" class="ew-rnd" data-c="draw"><em>R</em><span>Arme</span></button><button type="button" class="ew-rnd" data-w="mount"><em>M</em><span>Monture</span></button><button type="button" class="ew-rnd m" data-w="run">Sprint</button><button type="button" class="ew-rnd m ew-jp" data-w="jump">Saut</button></div>
    <div class="ew-dlg"><span class="ew-bond"></span><h4></h4><p></p><div class="row"><button type="button" class="ew-btn" data-w="dnext">Continuer</button><button type="button" class="ew-btn" data-w="dclose">Au revoir</button></div></div>
    <div class="ew-menu ew-wsel"><div><h3>Ar\xE8ne des Chasseurs</h3><p class="ew-ws-sub"></p>
      <div class="ew-ws-row"><button type="button" class="ew-btn" data-ws="-5">\u22125</button><button type="button" class="ew-btn" data-ws="-1">\u2212</button><b class="ew-ws-n">1</b><button type="button" class="ew-btn" data-ws="1">+</button><button type="button" class="ew-btn" data-ws="5">+5</button></div>
      <p class="ew-ws-rw"></p><button type="button" class="ew-btn" data-ws="boss"></button><button type="button" class="ew-btn" data-ws="loop"></button>
      <button type="button" class="ew-btn ew-go" data-ws="go">Commencer</button><button type="button" class="ew-btn" data-ws="x">Annuler</button></div></div>
    <div class="ew-menu ew-mm"><div><h3>Vesp\xE9rane</h3><button type="button" class="ew-btn" data-w="resume">Reprendre</button><button type="button" class="ew-btn" data-w="home">Retour \xE0 la Maison (rue du Four)</button><button type="button" class="ew-btn" data-w="arena">Aller \xE0 l\u2019ar\xE8ne des Chasseurs</button><button type="button" class="ew-btn" data-w="mv"></button><button type="button" class="ew-btn" data-w="stn"></button><button type="button" class="ew-btn ew-only-mob" data-w="fs">Plein \xE9cran horizontal</button><button type="button" class="ew-btn" data-w="mode">${n?"Passer en mode mobile":"Passer en mode PC"}</button><button type="button" class="ew-btn" data-w="quit">Quitter le monde</button><p class="ew-help">ZQSD se d\xE9placer \xB7 Maj courir \xB7 Espace sauter \xB7 E agir \xB7 M monture \xB7 C changer de monture<br>Clic attaquer \xB7 Clic droit ou V esquiver \xB7 1 \xE0 5 techniques \xB7 R d\xE9gainer / rengainer \xB7 Espace deux fois : double saut \xB7 molette zoom<br>B voler (Espace monter, Ctrl descendre) \xB7 T verrou de cam\xE9ra (encore T : cible suivante) \xB7 G combat automatique</p></div></div>
    <div class="ew-load">Vesp\xE9rane\u2026</div>`,i.appendChild(r);let a=B=>r.querySelector(B),o=a(".ew-c"),l=new As({canvas:o,antialias:n,powerPreference:"high-performance"});l.setPixelRatio(Math.min(window.devicePixelRatio||1,s.px)),l.outputColorSpace=tn,l.toneMapping=sa,l.toneMappingExposure=1.05,s.shadows&&(l.shadowMap.enabled=!0,l.shadowMap.type=ia);let h=new as,u=new wn(n?55:62,1,.3,2400),f=new st(12085832);h.fog=new po(f,s.fog[0],s.fog[1]);{let B=new rs(l);h.environment=B.fromScene(new vr,.04).texture,B.dispose()}let p=new V(-.62,.36,.5).normalize(),d=new mr(16769228,2761796,.75);h.add(d);let y=new ls(16768184,2.7);h.add(y,y.target),s.shadows&&(y.castShadow=!0,y.shadow.mapSize.set(2048,2048),Object.assign(y.shadow.camera,{left:-55,right:55,top:55,bottom:-55,near:1,far:260}),y.shadow.bias=-6e-4,y.shadow.normalBias=.06);let v=new ze(new li(2e3,32,16),new xn({side:mn,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:p},night:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 sunDir; uniform float night; varying vec3 vD; float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); } void main(){ vec3 d = normalize(vD); float h = max(0.0, d.y); vec3 hor = vec3(1.0, 0.66, 0.40), mid = vec3(0.70, 0.30, 0.19), top = vec3(0.10, 0.09, 0.22); vec3 c = mix(hor, mid, smoothstep(0.0, 0.2, h)); c = mix(c, top, smoothstep(0.14, 0.72, h)); float s = max(0.0, dot(d, sunDir)); c += vec3(1.0, 0.78, 0.5) * pow(s, 220.0) * 2.2 + vec3(1.0, 0.55, 0.28) * pow(s, 9.0) * 0.42; vec3 g = floor(d * 190.0); float st = step(0.9975, hash(g)) * smoothstep(0.25, 0.7, h); c += vec3(st) * 0.8; if (d.y < 0.0) c = mix(hor, vec3(0.16, 0.10, 0.10), min(1.0, -d.y * 5.0)); gl_FragColor = vec4(c, 1.0); }"}));h.add(v);let g=new mt;h.add(g);{let B=document.createElement("canvas");B.width=256,B.height=128;let ee=B.getContext("2d"),oe=pa(5);for(let W=0;W<26;W++){let Z=40+oe()*176,J=46+oe()*40,ie=18+oe()*34,ue=ee.createRadialGradient(Z,J,0,Z,J,ie);ue.addColorStop(0,"rgba(255,255,255,.5)"),ue.addColorStop(1,"rgba(255,255,255,0)"),ee.fillStyle=ue,ee.fillRect(0,0,256,128)}let C=new Wn(B);for(let W=0;W<16;W++){let Z=new ze(new ss(1,1),new Ot({map:C,transparent:!0,depthWrite:!1,fog:!1,color:new st().setHSL(.04+oe()*.05,.75,.62+oe()*.2),opacity:.75})),J=oe()*6.28,ie=500+oe()*900;Z.position.set(Math.cos(J)*ie,190+oe()*180,Math.sin(J)*ie),Z.scale.set(420+oe()*380,120+oe()*90,1),Z.rotation.x=Math.PI/2,Z.rotation.z=oe()*6.28,g.add(Z)}}{let B=new ss(900,900,s.seg,s.seg);B.rotateX(-Math.PI/2);let ee=B.attributes.position,oe=new Float32Array(ee.count*3),C=[0,0,0];for(let Fe=0;Fe<ee.count;Fe++){let Ze=ee.getX(Fe),tt=ee.getZ(Fe),z=Jt(Ze,tt);ee.setY(Fe,z),Rd(Ze,tt,z,C),oe[Fe*3]=Math.pow(C[0],2.2),oe[Fe*3+1]=Math.pow(C[1],2.2),oe[Fe*3+2]=Math.pow(C[2],2.2)}B.setAttribute("color",new gn(oe,3));let W=B.toNonIndexed();W.computeVertexNormals(),B.dispose();let Z=document.createElement("canvas");Z.width=Z.height=256;let J=Z.getContext("2d"),ie=pa(31);J.fillStyle="#e4e4e4",J.fillRect(0,0,256,256);for(let Fe=0;Fe<2600;Fe++){let Ze=190+Math.floor(ie()*65);J.fillStyle=`rgba(${Ze},${Ze},${Ze},.55)`;let tt=1+ie()*5;J.fillRect(ie()*256,ie()*256,tt,tt)}J.strokeStyle="rgba(70,60,55,.3)",J.lineWidth=1.6;for(let Fe=0;Fe<8;Fe++)for(let Ze=0;Ze<8;Ze++){let tt=Fe%2*16;J.strokeRect(Ze*32+tt+(ie()-.5)*3,Fe*32+(ie()-.5)*3,32,32)}let ue=new Wn(Z);ue.wrapS=ue.wrapT=Xr,ue.repeat.set(140,140),ue.anisotropy=4,ue.colorSpace=tn;let _e=new ze(W,new on({vertexColors:!0,map:ue,roughness:.96,metalness:0,envMapIntensity:.25}));_e.receiveShadow=s.shadows,h.add(_e);let qe=new ze(new oi(440,2400,48,1),new on({color:4865826,roughness:1,envMapIntensity:.1}));qe.rotation.x=-Math.PI/2,qe.position.y=2.6,h.add(qe)}let m=new ze(new ss(2400,2400),new on({color:5914426,roughness:.12,metalness:.85,transparent:!0,opacity:.86,envMapIntensity:1.6}));m.rotation.x=-Math.PI/2,m.position.y=.35,h.add(m);let M=new ze(new Si(96,48),new on({color:12576498,roughness:.03,metalness:.95,envMapIntensity:2.2,transparent:!0,opacity:.92}));M.rotation.x=-Math.PI/2,M.position.set(318,1.32,300),h.add(M);let _=(B,ee=.9,oe=0,C)=>new on(Object.assign({color:B,roughness:ee,metalness:oe,envMapIntensity:.35},C||{})),E=B=>new Ot({color:B,toneMapped:(s.bloom,!1)}),I={wallA:_(12098426),wallB:_(9405303),wallC:_(10246725),wallW:_(14867920),stone:_(9144208),stoneL:_(11644338),stoneD:_(4867664),roofA:_(5125424),roofB:_(3554376),wood:_(5913892),iron:_(3816774,.5,.7),snow:_(15660024,.7),white:_(16052712),rock:_(5591642,1),obs:_(1512479,.35,.6),gold:_(15254632,.3,.9),light:_(16775920,.6,0,{emissive:16773320,emissiveIntensity:.55}),flag:_(4029142),rug:_(8007466),flowerA:_(14243450),flowerB:_(15254090),flowerC:_(9071318),sand:_(13481610,1),banner:_(10234410),winLit:E(16762222),winDark:_(1712176,.2,.6),lamp:E(16767392),ember:E(16742954),rose:E(13208278),umbra:E(10976255),neon:E(61695),sun:E(16774084),void:_(197382,1)},P=T1(e,s),A=P.B.build(I,s.shadows);h.add(A);for(let[B,ee,oe,C,W,Z]of P.lights.slice(0,n?12:6)){let J=new Qn(C,W*14,Z,1.6);J.position.set(B,ee,oe),h.add(J)}let F=new mt;{let B=Jt(-70,100);F.position.set(-70,B+5.2,100);let ee=new ze(new qn(4.2,.28,10,48),E(8386303)),oe=new ze(new Si(4.1,40),new Ot({color:1723647,transparent:!0,opacity:.55,side:jt,blending:zn,depthWrite:!1})),C=new ze(new oi(1.2,3.6,40),new Ot({color:9133302,transparent:!0,opacity:.5,side:jt,blending:zn,depthWrite:!1}));F.add(ee,oe,C),F.scale.set(.8,1.25,1),F.rotation.y=.9;let W=new Qn(3842303,60,46,1.5);F.add(W),h.add(F),F.userData={m2:oe,m3:C}}{let B=new Rn(.22,.34,1,6).translate(0,.5,0),ee=new yn(1,1,7).translate(0,.5,0),oe=new Eo(1,1),C=P.trees.filter(ue=>ue.pine),W=P.trees.filter(ue=>!ue.pine),Z=new un,J=new st,ie=(ue,_e,qe,Fe)=>{let Ze=new xo(ue,_e,Math.max(1,qe.length));return qe.forEach((tt,z)=>{Fe(tt,Z),Z.updateMatrix(),Ze.setMatrixAt(z,Z.matrix),tt._c&&Ze.setColorAt(z,tt._c)}),Ze.count=qe.length,Ze.castShadow=s.shadows,Ze.receiveShadow=!1,h.add(Ze),Ze};if(ie(B,_(3811868,1),P.trees,(ue,_e)=>{_e.position.set(ue.x,ue.y-.3,ue.z),_e.scale.set(ue.s,ue.s*(ue.pine?2.2:3.2),ue.s),_e.rotation.set(0,0,0)}),C.forEach(ue=>{ue._c=J.clone().setHSL(.3+ue.c*.06,.42,.11+ue.c*.06)}),W.forEach(ue=>{ue._c=J.clone().setHSL(.02+ue.c*.11,.72,.36+ue.c*.14)}),ie(ee,_(16777215,1),C,(ue,_e)=>{_e.position.set(ue.x,ue.y+ue.s*1.3,ue.z),_e.scale.set(ue.s*2.1,ue.s*6.2,ue.s*2.1),_e.rotation.set(0,ue.c*6,0)}),ie(oe,new on({color:16777215,roughness:1,flatShading:!0,envMapIntensity:.3}),W,(ue,_e)=>{_e.position.set(ue.x,ue.y+ue.s*4.1,ue.z),_e.scale.set(ue.s*2.5,ue.s*2.1,ue.s*2.5),_e.rotation.set(ue.c,ue.c*6,0)}),s.grass){let ue=pa(9),_e=[];for(let qe=0;qe<s.grass*5&&_e.length<s.grass;qe++){let Fe=(ue()-.5)*760,Ze=(ue()-.5)*760,tt=Jt(Fe,Ze);Math.hypot(Fe,Ze)<184||Math.hypot(Fe-et.x,Ze-et.z)<39||tt<2.3||tt>44||Math.abs(Fe-ms(Ze))<15||Ko(Fe,Ze)<4||_e.push({x:Fe,y:tt,z:Ze,s:.5+ue()*.9,c:ue(),_c:J.clone().setHSL(.08+ue()*.1,.5,.3+ue()*.12)})}ie(new yn(.5,1,4).translate(0,.5,0),_(16777215,1),_e,(qe,Fe)=>{Fe.position.set(qe.x,qe.y-.05,qe.z),Fe.scale.set(qe.s*.9,qe.s*1.1,qe.s*.9),Fe.rotation.set(0,qe.c*6,0)}).castShadow=!1}}let T={},x=new ma;P.houses.forEach((B,ee)=>{let C=ee*80,W=new ma,Z=A1(W,B,e,-400);for(let J in W.b)for(let ie of W.b[J])ie.translate(C,0,0),(x.b[J]=x.b[J]||[]).push(ie);T[B.id]={...Z,ox:C,oy:-400,hs:B}});let k=x.build(I,!1);k.visible=!1,h.add(k);let O=new Qn(16756848,0,40,1.4),j=new Qn(16773341,0,60,1.2);h.add(O,j);let N=Ds(e.hero);h.add(N.group),N.group.rotation.order="YXZ";let b={pitch:0,fly:!1,x:e.pos?e.pos[0]:-6,z:e.pos?e.pos[1]:34,y:0,vy:0,yaw:Math.PI,speed:0,run:!1,onGround:!0,inside:null,mount:null,mountId:null,camYaw:e.pos?0:Math.PI*.15,camPitch:.22,camDist:n?7.5:6,talking:null,paused:!1,t:0,zone:"",down:!1,dashT:0,dashV:0,jumps:0,inDir:null};b.y=Jt(b.x,b.z);for(let B of Cd)if(Math.hypot(b.x-B[0],b.z-B[1])<B[2]){b.zone=B[3];break}let X=(e.mounts||[]).filter(B=>Ei[B.id]),ne=Math.max(0,X.findIndex(B=>B.id===e.mount)),D=null;function $(B){if(b.mount&&(h.remove(b.mount.group),xi(b.mount.group),b.mount=null,b.mountId=null),B&&X.length&&!b.inside){let ee=X[ne].id;b.mount=Ei[ee].make(),b.mountId=ee,Oo(b.mount.group),h.add(b.mount.group),D&&D.arm(!1),b.mount.group.traverse(oe=>{oe.isMesh&&(oe.castShadow=s.shadows)}),R("En selle",X[ne].name)}a('[data-w="mount"]').classList.toggle("on",!!b.mount)}X.length||(a('[data-w="mount"]').disabled=!0);let we=[],de=B=>{let ee=document.createElement("canvas");ee.width=256,ee.height=64;let oe=ee.getContext("2d");oe.font="600 26px Oxanium, Barlow, sans-serif",oe.textAlign="center",oe.shadowColor="#000",oe.shadowBlur=8,oe.fillStyle="#eaffff",oe.fillText(B,128,40);let C=new os(new ki({map:new Wn(ee),transparent:!0,depthWrite:!1,fog:!1}));return C.scale.set(2.6,.65,1),C};function Le(B,ee,oe,C,W,Z){let J=S1[B.id];if(!J)return;let ie=Ds(Object.assign({},J,{fx:Object.assign({lod:!0},J.fx)}));ie.group.position.set(ee,oe,C),ie.group.rotation.y=W;let ue=de(B.name.split(" ").slice(0,2).join(" "));ue.position.y=ie.height/ie.group.scale.y+.32,ie.group.add(ue),ie.group.traverse(_e=>{_e.isMesh&&(_e.castShadow=s.shadows&&!Z)}),h.add(ie.group),we.push({...B,av:ie,x:ee,y:oe,z:C,ry:W,inside:Z||null,lb:ue,li:0})}for(let B of e.npcs||[]){let ee=w1[B.id];ee&&Le(B,ee[0],Jt(ee[0],ee[1]),ee[1],ee[2])}for(let B in T){let ee=T[B];(e.npcs||[]).filter(oe=>oe.recruited).slice(0,ee.spots.length).forEach((oe,C)=>{let[W,Z]=ee.spots[C];Le(oe,ee.ox+W,ee.oy,Z,Math.atan2(-W,1-Z),B)})}k.visible=!1;function ce(B,ee){Wt(!0),b.x=B,b.z=ee,b.y=Jt(B,ee),Lt=!0}D=Ad({scene:h,st:b,player:N,data:e,H:Jt,cam:u,root:r,pc:n,toast:(B,ee)=>R(B,ee),cb:t,teleport:ce,dismount:()=>$(!1),dash:(B,ee)=>{b.dashV=B/ee,b.dashT=ee},inputDir:()=>b.inDir});let ve={neutre:"Course",ninja:"Ninja",levitation:"L\xE9vitation"},Ae={neutre:"Neutre",ninja:"Ninja",souverain:"Souverain",digne:"Digne \xB7 aura",humble:"Humble",timide:"Timide"},Ke=()=>{a('[data-w="mv"]').textContent="D\xE9placement : "+ve[N.move],a('[data-w="stn"]').textContent="Position d\u2019attente : "+Ae[N.stance]},Be=(B,ee)=>{let oe=Object.keys(B);return oe[(oe.indexOf(ee)+1)%oe.length]};Ke();let it=B=>a('[data-o="'+B+'"]');function Oe(){it("auto").classList.toggle("on",D.auto),it("lock").classList.toggle("on",D.lock),it("fly").classList.toggle("on",!!b.fly);let B=a('[data-w="mount"] span'),ee=a('[data-w="jump"]');B&&(B.textContent=b.fly?"Descendre":"Monture"),ee&&(ee.textContent=b.fly?"Monter":"Saut")}function We(B){B&&(b.inside||b.talking||b.down)||(B&&($(!1),D.arena.on&&R("Vol","Les ombres vous attendent au sol"),b.vy=5,b.onGround=!1),b.fly=B,fe.up=fe.dn=null,Oe(),B&&R("Vol",n?"Espace : monter \xB7 Ctrl : descendre \xB7 B : se poser":"Monter / Descendre \xB7 Vol : se poser"))}function nt(B){if(B==="fly"){We(!b.fly);return}if(B==="lock"){if(D.lock&&D.lockE&&performance.now()-H<1500){D.nextLock(),H=performance.now();return}D.lock=!D.lock,H=performance.now(),D.lock&&(D.pickLock(),R("Cam\xE9ra verrouill\xE9e",D.lockE?D.lockE.T.name:"Elle suivra le prochain ennemi"))}else B==="auto"&&(D.auto=!D.auto,R(D.auto?"Combat automatique":"Combat manuel",D.auto?"Le personnage frappe et esquive tout seul":""));Oe(),t.onPref&&t.onPref({auto:D.auto,lock:D.lock})}let H=0;{let B=e.prefs||{};D.auto=!!B.auto,D.lock=!!B.lock,Oe()}r.addEventListener("pointerdown",B=>{let ee=B.target.closest("[data-o]");!ee||b.paused||(B.preventDefault(),B.stopPropagation(),nt(ee.dataset.o))});let Te=null;if(s.bloom)try{Te=new Yo(l),Te.addPass(new Zo(h,u)),Te.addPass(new Tr(new Re(256,256),.42,.7,.82)),Te.addPass(new Jo)}catch{Te=null}function me(){let B=r.clientWidth,ee=r.clientHeight;if(B>ee){let oe=r.querySelector(".ew-rot");oe&&oe.classList.remove("on")}l.setSize(B,ee,!1),u.aspect=B/ee,u.fov=n?55:B>ee?50:62,u.updateProjectionMatrix(),Te&&Te.setSize(B,ee)}me(),window.addEventListener("resize",me);let Pe=a(".ew-map"),ae=Pe.getContext("2d"),$e=document.createElement("canvas");$e.width=$e.height=248;{let B=$e.getContext("2d"),ee=B.createImageData(248,248),oe=[0,0,0];for(let C=0;C<248;C++)for(let W=0;W<248;W++){let Z=(W/247-.5)*900,J=(C/247-.5)*900,ie=Jt(Z,J);Rd(Z,J,ie,oe);let ue=(C*248+W)*4,_e=ie<.4;ee.data[ue]=_e?70:oe[0]*235,ee.data[ue+1]=_e?90:oe[1]*235,ee.data[ue+2]=_e?120:oe[2]*235,ee.data[ue+3]=255}B.putImageData(ee,0,0),B.strokeStyle="#c9b48a",B.lineWidth=2,B.beginPath(),B.arc((et.x/900+.5)*248,(et.z/900+.5)*248,8,0,7),B.stroke(),B.fillStyle="#2a2420";for(let C of P.B.boxes){let W=(C[0]/900+.5)*248,Z=(C[2]/900+.5)*248;B.fillRect(W,Z,Math.max(1.5,(C[1]-C[0])/900*248),Math.max(1.5,(C[3]-C[2])/900*248))}}function De(){let ee=b.inside?0:b.x,oe=b.inside?0:b.z,C=(ee/900+.5)*248,W=(oe/900+.5)*248;if(ae.setTransform(1,0,0,1,0,0),ae.fillStyle="#0b0b12",ae.fillRect(0,0,248,248),b.inside){ae.fillStyle="#7ff6ff",ae.font="600 20px Oxanium, sans-serif",ae.textAlign="center",ae.fillText("Int\xE9rieur",124,130);return}ae.translate(124,124),ae.scale(2.2,2.2),ae.translate(-C,-W),ae.drawImage($e,0,0);let Z=(J,ie,ue,_e)=>{ae.fillStyle=ue,ae.beginPath(),ae.arc((J/900+.5)*248,(ie/900+.5)*248,_e,0,7),ae.fill()};for(let J of P.houses)Z(J.x,J.z,"#ffd479",2.6);for(let J of we)J.inside||Z(J.x,J.z,"#7ff6ff",1.7);Z(-70,100,"#3aa0ff",2.4),Z(et.x,et.z,"#ff4d6d",2.2);for(let J of D.enemies)J.type!=="dummy"&&J.state!=="dead"&&Z(J.x,J.z,"#ff4d6d",1.5);ae.setTransform(1,0,0,1,124,124),ae.rotate(-b.yaw+Math.PI),ae.fillStyle="#fff",ae.strokeStyle="#000",ae.lineWidth=2,ae.beginPath(),ae.moveTo(0,-9),ae.lineTo(6.5,7),ae.lineTo(0,3.5),ae.lineTo(-6.5,7),ae.closePath(),ae.stroke(),ae.fill()}let L=0;function R(B,ee=""){let oe=a(".ew-zone");oe.querySelector("b").textContent=B,oe.querySelector("i").textContent=ee,oe.querySelector("i").style.display=ee?"":"none",oe.classList.add("on"),clearTimeout(L),L=setTimeout(()=>oe.classList.remove("on"),3200)}let te={},fe={mx:0,mz:0,jump:!1},be=null,Ee=(B,ee)=>{if(b.paused&&ee&&B.code==="Escape"){Ge(!1);return}te[B.code]=ee;let oe=(B.key||"").toLowerCase();ee&&(B.code==="Escape"?b.talking?Tt():Ge(!0):b.talking?(oe==="e"||oe==="f"||B.code==="Enter"||B.code==="Space")&&(B.preventDefault(),Ut()):oe==="e"||oe==="f"||B.code==="Enter"?ke():oe==="m"&&b.fly||(oe==="m"?b.mount&&X.length>1&&te.ShiftLeft?(ne=(ne+1)%X.length,$(!0)):$(!b.mount):oe==="c"&&X.length>1?(ne=(ne+1)%X.length,b.mount?$(!0):R(X[ne].name,"Monture choisie")):B.code==="Space"?(B.preventDefault(),b.fly||(fe.jump=!0)):oe==="r"?D.toggleArm():oe==="b"?nt("fly"):oe==="t"?nt("lock"):oe==="g"?nt("auto"):oe==="x"?D.attack():oe==="v"?D.dodge():/^(Digit|Numpad)[1-5]$/.test(B.code)&&D.skill(+B.code.slice(-1))))},Xe=B=>Ee(B,!0),Ne=B=>Ee(B,!1);window.addEventListener("keydown",Xe),window.addEventListener("keyup",Ne);let Ue=null,je={id:null,ox:0,oy:0},at=a(".ew-stick"),Me=B=>{if(!B.target.closest("button,.ew-dlg,.ew-menu,.ew-map,.ew-opt")){if(!n&&B.clientX<r.clientWidth*.46&&B.clientY>r.clientHeight*(r.clientWidth>r.clientHeight?.26:.4)&&je.id===null){je.id=B.pointerId,je.ox=B.clientX,je.oy=B.clientY,at.style.display="block",at.style.left=B.clientX+"px",at.style.top=B.clientY-r.getBoundingClientRect().top-(r.clientHeight-r.querySelector(".ew-joy").clientHeight)+"px",at.firstChild.style.transform="";return}Ue||(Ue={id:B.pointerId,x:B.clientX,y:B.clientY,x0:B.clientX,y0:B.clientY,t:performance.now(),b:B.button})}},xt=B=>{if(B.pointerId===je.id){let ee=B.clientX-je.ox,oe=B.clientY-je.oy,C=Math.hypot(ee,oe),W=52;C>W&&(ee*=W/C,oe*=W/C),at.firstChild.style.transform=`translate(${ee}px,${oe}px)`,fe.mx=ee/W,fe.mz=oe/W}else Ue&&B.pointerId===Ue.id&&(b.camYaw-=(B.clientX-Ue.x)*(n?.0042:.0062),b.camPitch=Math.max(-.25,Math.min(1.2,b.camPitch+(B.clientY-Ue.y)*(n?.003:.0045))),Ue.x=B.clientX,Ue.y=B.clientY)},ft=B=>{B.pointerId===je.id&&(je.id=null,fe.mx=fe.mz=0,at.style.display="none"),Ue&&B.pointerId===Ue.id&&(n&&B.type==="pointerup"&&performance.now()-Ue.t<300&&Math.hypot(B.clientX-Ue.x0,B.clientY-Ue.y0)<6&&(Ue.b===0?D.attack():Ue.b===2&&D.dodge()),Ue=null),B.pointerId===ht&&(ht=null,D.held=!1),B.pointerId===fe.up&&(fe.up=null),B.pointerId===fe.dn&&(fe.dn=null)},ht=null;r.addEventListener("pointerdown",B=>{let ee=B.target.closest('[data-w="jump"],[data-w="run"],[data-w="mount"],[data-w="act"]');if(!ee||b.paused)return;B.preventDefault(),ee._pd=performance.now();let oe=ee.dataset.w;if(b.fly&&(oe==="jump"||oe==="mount")){fe[oe==="jump"?"up":"dn"]=B.pointerId;return}oe==="jump"?fe.jump=!0:oe==="run"?(b.run=!b.run,ee.classList.toggle("on",b.run)):oe==="mount"?$(!b.mount):ke()}),r.addEventListener("pointerdown",B=>{let ee=B.target.closest("[data-c]");if(!ee||b.paused)return;B.preventDefault();let oe=ee.dataset.c;oe==="draw"?D.toggleArm():oe==="dodge"?D.dodge():oe==="0"?(D.attack(),D.held=!0,ht=B.pointerId):D.skill(+oe)}),r.addEventListener("pointerdown",Me),r.addEventListener("pointermove",xt),r.addEventListener("pointerup",ft),r.addEventListener("pointercancel",ft);let ot=B=>{b.camDist=Math.max(2.6,Math.min(22,b.camDist*(B.deltaY>0?1.1:.9))),B.preventDefault()};r.addEventListener("wheel",ot,{passive:!1}),r.addEventListener("contextmenu",B=>B.preventDefault()),r.addEventListener("click",B=>{let ee=B.target.closest("[data-w]");if(!ee)return;let oe=ee.dataset.w;if(ee._pd&&performance.now()-ee._pd<800){ee._pd=0;return}if(!(b.fly&&(oe==="jump"||oe==="mount"))){if(oe==="act")ke();else if(oe==="mount")$(!b.mount);else if(oe==="run")b.run=!b.run,ee.classList.toggle("on",b.run);else if(oe==="jump")fe.jump=!0;else if(oe==="dnext")Ut();else if(oe==="dclose")Tt();else if(oe==="menu")Ge(!0);else if(oe==="resume")Ge(!1);else if(oe==="home")ce(-6,34),Ge(!1);else if(oe==="arena")$(!1),ce(et.x+40,et.z),b.yaw=-Math.PI/2,b.camYaw=Math.PI/2,Ge(!1);else if(oe==="mv"||oe==="stn")N.setStyle(oe==="mv"?{move:Be(ve,N.move)}:{stance:Be(Ae,N.stance)}),Ke(),t.onStyle&&t.onStyle({move:N.move,stance:N.stance});else if(oe==="fs")Y(),a(".ew-rot").classList.remove("on"),Ge(!1);else if(oe==="quit")He();else if(oe==="mode"){let C=[b.x,b.z];hn.dispose(),t.onMode&&t.onMode(n?"mobile":"pc",b.inside?null:C)}}});function Ge(B){b.paused=B,a(".ew-mm").classList.toggle("on",B),B||a(".ew-wsel").classList.remove("on")}let rt={n:1,loop:!1};function _t(){let B=D.arena.best+1;rt.n=Math.max(1,Math.min(B,rt.n));let ee=rt.n,oe=t.wavePreview?t.wavePreview(ee):null;a(".ew-ws-n").textContent=ee,a(".ew-ws-sub").textContent="Vagues ouvertes : 1 \xE0 "+B+(D.arena.best?" \xB7 record "+D.arena.best:""),a(".ew-ws-rw").innerHTML=(ee%10===0?"<b>Drake d\u2019ombre</b> \xB7 ":ee%5===0?"<b>Champion d\u2019ombre</b> \xB7 ":"")+(oe?"R\xE9compense : <b>+"+oe.x+" XP</b> \xB7 <b>+"+oe.k+" kinahs</b>"+(oe.first===!1?" \xB7 d\xE9j\xE0 gagn\xE9e aujourd\u2019hui (10 %)":" \xB7 plein tarif une fois par jour, puis 10 %"):""),a('[data-ws="loop"]').classList.toggle("on",rt.loop),a('[data-ws="loop"]').textContent=(rt.loop?"\u2611":"\u2610")+" Rejouer cette vague en boucle";let C=5*Math.floor(B/5),W=a('[data-ws="boss"]');W.style.display=C>=5?"":"none",W.textContent="Dernier champion ouvert : vague "+C}function Vt(){rt.n=D.arenaStart(),b.paused=!0,_t(),a(".ew-wsel").classList.add("on")}r.addEventListener("click",B=>{let ee=B.target.closest("[data-ws]");if(!ee)return;let oe=ee.dataset.ws;if(oe==="x"||oe==="go"){a(".ew-wsel").classList.remove("on"),b.paused=!1,oe==="go"&&D.startArena(rt.n,rt.loop);return}oe==="loop"?rt.loop=!rt.loop:oe==="boss"?rt.n=5*Math.floor((D.arena.best+1)/5):rt.n+=+oe,_t()});let pt=!1,Ce=()=>{try{let B=screen.orientation;return B&&B.lock?B.lock("landscape").then(()=>!0,()=>!1):Promise.resolve(!1)}catch{return Promise.resolve(!1)}};function Y(){let B=document.documentElement,ee=B.requestFullscreen||B.webkitRequestFullscreen;if(!ee)return Ce();let oe=null;try{oe=ee.call(B,{navigationUI:"hide"}),pt=!0}catch{oe=null}return(oe&&oe.then?oe:Promise.resolve()).then(Ce,Ce)}n||Ce().then(B=>{if(!B&&r.clientHeight>r.clientWidth&&!cn){let ee=a(".ew-rot");ee.classList.add("on"),setTimeout(()=>ee.classList.remove("on"),9e3)}});function He(){let B=b.inside?null:[Math.round(b.x),Math.round(b.z)];hn.dispose(),t.onExit&&t.onExit(B)}function ke(){!be||b.talking||(be.kind==="npc"?Et(be.npc):be.kind==="house"?bt(be.id):be.kind==="exit"?Wt():be.kind==="arena"?Vt():be.kind==="rift"&&t.onRift&&(hn.dispose(),t.onRift([Math.round(b.x),Math.round(b.z)])))}let lt=0;function Qe(B){let ee=B.lines&&B.lines.length?B.lines:["\u2026"],oe=ee[B.li%ee.length],C=a(".ew-dlg p");C.textContent="",clearInterval(lt);let W=0;lt=setInterval(()=>{W+=2,C.textContent=oe.slice(0,W),W>=oe.length&&clearInterval(lt)},18),a(".ew-dlg h4").innerHTML="",a(".ew-dlg h4").append(B.name,Object.assign(document.createElement("small"),{textContent:B.role||""})),a(".ew-bond").textContent=B.bond?"Lien "+"\u2665".repeat(Math.min(10,B.bond)):"",a('[data-w="dnext"]').style.display=ee.length>1?"":"none"}function Et(B){b.talking=B,a(".ew-dlg").classList.add("on"),a(".ew-prompt").classList.remove("on"),r.classList.add("ew-talk"),Qe(B);let ee=Math.atan2(b.x-B.x,b.z-B.z);B.av.group.rotation.y=ee,b.yaw=ee+Math.PI,t.onTalk&&t.onTalk(B.id)}function Ut(){let B=b.talking;if(!B)return;let ee=a(".ew-dlg p"),oe=B.lines||[],C=oe[B.li%Math.max(1,oe.length)]||"";if(ee.textContent.length<C.length){clearInterval(lt),ee.textContent=C;return}if(B.li++,B.li%Math.max(1,oe.length)===0){Tt();return}Qe(B)}function Tt(){clearInterval(lt),b.talking=null,a(".ew-dlg").classList.remove("on"),r.classList.remove("ew-talk")}let kt=null;function bt(B){let ee=T[B];ee&&($(!1),kt=[b.x,b.z,b.yaw],b.inside=B,b.x=ee.ox+ee.door[0],b.z=ee.door[1]-.6,b.y=ee.oy,b.yaw=Math.PI,b.camYaw=0,b.camDist=Math.min(b.camDist,6),k.visible=!0,A.visible=!1,h.fog.near=60,h.fog.far=200,O.position.set(ee.ox,ee.oy+1.6,-ee.D/2+2.2),O.intensity=90,j.position.set(ee.ox,ee.oy+ee.h-.6,1.5),j.intensity=ee.hs.r>=6?160:ee.hs.r===5?50:70,j.color.set(ee.hs.r>=6?16774084:ee.hs.r===5?10976255:16773341),y.intensity=0,d.intensity=.35,R(ee.hs.name,ee.hs.cap>=99?"Places illimit\xE9es":ee.hs.cap+" places"))}function Wt(B){b.inside&&(b.inside=null,k.visible=!1,A.visible=!0,h.fog.near=s.fog[0],h.fog.far=s.fog[1],O.intensity=j.intensity=0,y.intensity=2.9,d.intensity=.7,kt&&!B&&(b.x=kt[0],b.z=kt[1],b.yaw=kt[2]+Math.PI),b.y=Jt(b.x,b.z))}let At=new V,Kt=new V,Pt=performance.now(),cn=!1,Bt=0,Lt=!0;function zt(B){if(cn)return;requestAnimationFrame(zt);let ee=Math.min(.05,(B-Pt)/1e3);if(Pt=B,b.paused)return;b.t+=ee;let oe=fe.mx,C=fe.mz;(te.KeyW||te.ArrowUp)&&(C-=1),(te.KeyS||te.ArrowDown)&&(C+=1),(te.KeyA||te.ArrowLeft)&&(oe-=1),(te.KeyD||te.ArrowRight)&&(oe+=1);let W=Math.min(1,Math.hypot(oe,C)),Z=W<.05?D.autoMove:null;Z&&(W=Z.mag),W*=b.talking?0:D.moveK();let J=!!b.fly,ie=b.run||te.ShiftLeft||te.ShiftRight,ue=N.move,_e=ue==="levitation"&&!b.mount,qe=ue==="levitation"?[11,16]:ue==="ninja"?[10.5,15.5]:[9.5,14],Fe=(J?ie?30:20:b.mount?9.5*Ei[b.mountId].speed:ie?qe[1]:qe[0])*(b.inside?.45:1),Ze=W*Fe;if(b.speed+=(Ze-b.speed)*Math.min(1,ee*(J?4:b.mount?3:_e?9:14)),b.inDir=Z?Z.yaw:W>.05?Math.atan2(oe,C)+b.camYaw:null,W>.05&&b.dashT<=0){let S=b.inDir-b.yaw;for(;S>Math.PI;)S-=6.2832;for(;S<-Math.PI;)S+=6.2832;b.yaw+=S*Math.min(1,ee*(J?7:b.mount?5:_e?13:18))}b.dashT>0&&(b.dashT-=ee,b.speed=b.dashV);let tt=Math.sin(b.yaw)*b.speed*ee,z=Math.cos(b.yaw)*b.speed*ee,se=b.x+tt,he=b.z+z;if(b.inside){let w=T[b.inside];se=Math.max(w.ox-w.W/2+.8,Math.min(w.ox+w.W/2-.8,se)),he=Math.max(-w.D/2+1.9,Math.min(w.D/2-.7,he))}else{se=Math.max(-438,Math.min(438,se)),he=Math.max(-438,Math.min(438,he));let w=b.mount?1.1:.55,S=J&&b.y-Math.max(0,Jt(b.x,b.z))>16;if(!S){for(let U of P.B.boxes)if(se>U[0]-w&&se<U[1]+w&&he>U[2]-w&&he<U[3]+w){let Q=se-(U[0]-w),G=U[1]+w-se,K=he-(U[2]-w),q=U[3]+w-he,re=Math.min(Q,G,K,q);re===Q?se=U[0]-w:re===G?se=U[1]+w:re===K?he=U[2]-w:he=U[3]+w}}if(!S){let U=se-et.x,Q=he-et.z,G=Math.hypot(U,Q);if(G>et.r-.5&&G<et.wall+.6&&Math.abs(Math.atan2(Q,U))>et.gate){let K=(G<(et.r+et.wall)/2?et.r-.5:et.wall+.6)/G;se=et.x+U*K,he=et.z+Q*K}}if(!J){for(let U of we)if(!U.inside){let Q=Math.hypot(se-U.x,he-U.z);Q<.8&&Q>.001&&(se=U.x+(se-U.x)/Q*.8,he=U.z+(he-U.z)/Q*.8)}}}b.x=se,b.z=he;let pe=b.inside?T[b.inside].oy:Math.max(Jt(b.x,b.z),Math.abs(b.x-ms(b.z))<30&&Math.abs(b.z+56)<3.3&&Math.abs(b.x-ms(-56))<20?4:-99,Math.abs(b.z-24)<2.3&&b.x>186&&b.x<208?1.22:-99,Math.hypot(b.x-318,b.z-300)<96?1.32:-99,_e?.4:-99);if(fe.jump&&(b.onGround||b.jumps<2)&&!b.mount&&!b.talking&&!b.down){let w=!b.onGround;b.vy=w?8.2:8.6,b.jumps=w?2:1,b.onGround=!1,w&&N.play("flip",.62)}if(fe.jump=!1,J){let w=fe.up!=null||te.Space,S=fe.dn!=null||te.ControlLeft||te.ControlRight,U=Math.max(pe,b.inside?pe:-.4)+.5;b.vy+=(((w?1:0)-(S?1:0))*11-b.vy)*Math.min(1,ee*5),b.y=Math.min(180,b.y+b.vy*ee),b.onGround=!1,b.jumps=2,b.y<=U&&(S?(b.y=Math.max(pe,b.y),We(!1)):(b.y=U,b.vy<0&&(b.vy=0))),(b.inside||b.down)&&We(!1)}else b.vy-=24*ee,b.y+=b.vy*ee,b.y<=pe?(b.y=pe,b.vy=0,b.onGround=!0,b.jumps=0):b.y-pe>.35&&(b.onGround=!1);{let w=(n?55:r.clientWidth>r.clientHeight?50:62)+Math.max(0,Math.min(1,(b.speed-10.5)/5))*7;Math.abs(u.fov-w)>.05&&(u.fov+=(w-u.fov)*Math.min(1,ee*5),u.updateProjectionMatrix())}let Ie=!b.inside&&!_e&&!J&&b.y<-.75?-.75-b.y:0,ge=N.group;if(b.mount){let w=b.mount;w.group.position.set(b.x,b.y+Ie,b.z),w.group.rotation.y=b.yaw,w.update(ee,b.speed/8),ge.position.set(b.x-Math.sin(b.yaw)*-w.seat.z,b.y+Ie+w.seat.y-N.seatDrop,b.z-Math.cos(b.yaw)*-w.seat.z),ge.rotation.y=b.yaw,N.update(ee,{riding:!0,wide:w.wide})}else ge.position.set(b.x,b.y+Ie,b.z),ge.rotation.y=b.yaw,b.pitch+=((J?Math.min(1,b.speed/20)*1-b.vy*.03:0)-b.pitch)*Math.min(1,ee*5),ge.rotation.x=b.pitch,N.update(ee,{speed:b.speed/4.6,down:b.down,fly:J});if(D.update(ee),(D.lock||D.auto)&&D.lockE&&D.lockE.state!=="dead"&&!b.inside&&!b.talking&&!Ue){let w=D.lockE,S=Math.atan2(w.x-b.x,w.z-b.z)+Math.PI-b.camYaw;for(;S>Math.PI;)S-=6.2832;for(;S<-Math.PI;)S+=6.2832;D.lock&&(b.camYaw+=S*Math.min(1,ee*5))}let xe=!!D.pl.mecha,ut=xe?2.5:(b.mount?b.mount.seat.y:0)+N.height*.82,dt=b.camDist*(b.mount?1.45:xe?1.7:1)*(b.talking?.62:1),Rt=Math.cos(b.camPitch);At.set(b.x,b.y+Ie+ut,b.z);for(let w of[1,.72,.5,.32,.18])if(Kt.set(At.x+Math.sin(b.camYaw)*Rt*dt*w,At.y+Math.sin(b.camPitch)*dt*w,At.z+Math.cos(b.camYaw)*Rt*dt*w),b.inside||Kt.y-b.y>16||!P.B.boxes.some(S=>Kt.x>S[0]-.4&&Kt.x<S[1]+.4&&Kt.z>S[2]-.4&&Kt.z<S[3]+.4))break;if(b.inside){let w=T[b.inside];Kt.x=Math.max(w.ox-w.W/2+.5,Math.min(w.ox+w.W/2-.5,Kt.x)),Kt.z=Math.max(-w.D/2+.6,Math.min(w.D/2+9,Kt.z)),Kt.y=Math.max(w.oy+.6,Math.min(w.oy+w.h+4,Kt.y))}else{let w=Math.max(Jt(Kt.x,Kt.z),.35)+.7;Kt.y<w&&(Kt.y=w)}Lt?(u.position.copy(Kt),Lt=!1):u.position.lerp(Kt,Math.min(1,ee*12)),u.lookAt(At),D.shake>.01&&(u.position.x+=(Math.random()-.5)*D.shake*.5,u.position.y+=(Math.random()-.5)*D.shake*.4),v.position.copy(u.position),g.position.x=b.t*2.2%300,v.visible=g.visible=!b.inside,m.visible=M.visible=!b.inside,y.position.set(b.x+p.x*120,b.y+p.y*120+20,b.z+p.z*120),y.target.position.set(b.x,b.y,b.z),F.rotation.y+=ee*.25,F.userData.m3.rotation.z-=ee*1.4,F.userData.m2.material.opacity=.45+Math.sin(b.t*2.6)*.14;let Dt=null,$t=1e9;for(let w of we){let S=w.inside===b.inside;if(w.av.group.visible=S,!S)continue;let U=Math.hypot(b.x-w.x,b.z-w.z);w.lb.visible=U<26&&U>2.6,U<40&&w.av.update(ee,{});for(let Q of w.av.inks)Q.visible=U<32;if(U<9&&!b.talking){let Q=Math.atan2(b.x-w.x,b.z-w.z)-w.av.group.rotation.y;for(;Q>Math.PI;)Q-=6.2832;for(;Q<-Math.PI;)Q+=6.2832;w.av.group.rotation.y+=Q*Math.min(1,ee*3)}U<3.2&&U<$t&&($t=U,Dt={kind:"npc",npc:w,text:"Parler \xE0 "+w.name.split(" ")[0]})}if(b.inside){let w=T[b.inside];Math.hypot(b.x-w.ox-w.door[0],b.z-w.door[1])<2.2&&!Dt&&(Dt={kind:"exit",text:"Sortir"})}else{for(let w of P.houses){let S=Math.hypot(b.x-w.x,b.z-w.z);S<4.5&&S<$t&&($t=S,Dt={kind:"house",id:w.id,text:"Entrer : "+w.name})}t.onRift&&Math.hypot(b.x+70,b.z-100)<6&&!Dt&&(Dt={kind:"rift",text:"Faille de la gare : partir en exp\xE9dition"}),!Dt&&!D.arena.on&&!b.down&&Math.hypot(b.x-et.x,b.z-et.z)<3.4&&(Dt={kind:"arena",text:"D\xE9fier l\u2019ar\xE8ne \xB7 vague "+D.arenaStart()})}be=Dt;let c=a(".ew-prompt");if(Dt&&!b.talking){c.classList.add("on");let w=c.firstChild,S=(n?"[E]  ":"")+Dt.text;w.textContent!==S&&(w.textContent=S)}else c.classList.remove("on");if(!b.inside){let w="",S="";for(let U of Cd)if(Math.hypot(b.x-U[0],b.z-U[1])<U[2]){w=U[3],S=U[4];break}w&&w!==b.zone&&R(w,S),b.zone=w}(Bt+=ee)>.12&&(Bt=0,De()),Te?Te.render():l.render(h,u)}let hn={combat:D,player:N,dispose(){if(!cn){cn=!0,D.dispose();try{!n&&screen.orientation&&screen.orientation.unlock&&screen.orientation.unlock(),pt&&document.fullscreenElement&&document.exitFullscreen&&document.exitFullscreen()}catch{}clearInterval(lt),clearTimeout(L),window.removeEventListener("keydown",Xe),window.removeEventListener("keyup",Ne),window.removeEventListener("resize",me),xi(h),Te&&Te.dispose&&Te.dispose(),l.dispose(),l.forceContextLoss&&l.forceContextLoss(),r.remove()}},state:b,teleport:(B,ee)=>ce(B,ee),enter:bt,mountOn:()=>$(!0),look(B,ee,oe){b.camYaw=B,b.camPitch=ee,oe&&(b.camDist=oe)}};return requestAnimationFrame(B=>{Pt=B,zt(B),setTimeout(()=>{let ee=a(".ew-load");ee.style.opacity=0,setTimeout(()=>ee.remove(),900),R("Vesp\xE9rane","Ciel couleur de rouille")},350)}),hn}window.Elyos3D={avatarView:gd,startWorld:Dd,groundHeight:Jt,DEFAULT_LOOK:Gc,HAIR_STYLES:fd,STANCES:Go,MOVES:Vo,MOUNT_SPEED:Object.fromEntries(Object.entries(Ei).map(([i,e])=>[i,e.speed]))};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
