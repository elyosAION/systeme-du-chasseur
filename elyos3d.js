(()=>{var su=0,zl=1,ru=2;var gh=1,cr=2,Fn=3,oi=0,Fe=1,me=2;var Rn=0,ps=1,Cn=2,Bl=3,kl=4,ou=5,Ai=100,au=101,lu=102,Hl=103,Gl=104,cu=200,hu=201,uu=202,du=203,Ia=204,La=205,fu=206,pu=207,mu=208,gu=209,xu=210,_u=211,vu=212,yu=213,Mu=214,bu=0,Su=1,wu=2,$r=3,Eu=4,Tu=5,Au=6,Ru=7,xh=0,Cu=1,Pu=2,ii=0,Sl=1,wl=2,El=3,Bi=4,Iu=5,Tl=6;var _h=300,xs=301,_s=302,Da=303,Ua=304,Io=306,Ks=1e3,bn=1001,Na=1002,$e=1003,Vl=1004;var Zo=1005;var fn=1006,Lu=1007;var Qs=1008;var si=1009,Du=1010,Uu=1011,Al=1012,vh=1013,ei=1014,ni=1015,wn=1016,yh=1017,Mh=1018,Pi=1020,Nu=1021,Sn=1023,Ou=1024,Fu=1025,Ii=1026,vs=1027,zu=1028,bh=1029,Bu=1030,Sh=1031,wh=1033,Jo=33776,$o=33777,Ko=33778,Qo=33779,Wl=35840,Xl=35841,ql=35842,Yl=35843,Eh=36196,Zl=37492,Jl=37496,$l=37808,Kl=37809,Ql=37810,jl=37811,tc=37812,ec=37813,nc=37814,ic=37815,sc=37816,rc=37817,oc=37818,ac=37819,lc=37820,cc=37821,jo=36492,hc=36494,uc=36495,ku=36283,dc=36284,fc=36285,pc=36286;var Kr=2300,Qr=2301,ta=2302,mc=2400,gc=2401,xc=2402;var Th=3e3,Li=3001,Hu=3200,Gu=3201,Ah=0,Vu=1,pn="",be="srgb",Gn="srgb-linear",Rl="display-p3",Lo="display-p3-linear",jr="linear",ce="srgb",to="rec709",eo="p3";var Wi=7680;var _c=519,Wu=512,Xu=513,qu=514,Rh=515,Yu=516,Zu=517,Ju=518,$u=519,Oa=35044;var vc="300 es",Fa=1035,kn=2e3,no=2001,ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ea=Math.PI/180,io=180/Math.PI;function Hn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function qe(i,t,e){return Math.max(t,Math.min(e,i))}function Ku(i,t){return(i%t+t)%t}function na(i,t,e){return(1-e)*i+e*t}function yc(i){return(i&i-1)===0&&i!==0}function za(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ct=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ne=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],x=s[4],w=s[7],C=s[2],T=s[5],R=s[8];return r[0]=o*_+a*v+l*C,r[3]=o*m+a*x+l*T,r[6]=o*p+a*w+l*R,r[1]=c*_+h*v+u*C,r[4]=c*m+h*x+u*T,r[7]=c*p+h*w+u*R,r[2]=f*_+d*v+g*C,r[5]=f*m+d*x+g*T,r[8]=f*p+d*w+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ia.makeScale(t,e)),this}rotate(t){return this.premultiply(ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ia=new ne;function Ch(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function so(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qu(){let i=so("canvas");return i.style.display="block",i}var Mc={};function Ys(i){i in Mc||(Mc[i]=!0,console.warn(i))}var bc=new ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Sc=new ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yr={[Gn]:{transfer:jr,primaries:to,toReference:i=>i,fromReference:i=>i},[be]:{transfer:ce,primaries:to,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Lo]:{transfer:jr,primaries:eo,toReference:i=>i.applyMatrix3(Sc),fromReference:i=>i.applyMatrix3(bc)},[Rl]:{transfer:ce,primaries:eo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Sc),fromReference:i=>i.applyMatrix3(bc).convertLinearToSRGB()}},ju=new Set([Gn,Lo]),le={enabled:!0,_workingColorSpace:Gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ju.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=yr[t].toReference,s=yr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return yr[i].primaries},getTransfer:function(i){return i===pn?jr:yr[i].transfer}};function ms(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xi,ro=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=so("canvas")),Xi.width=t.width,Xi.height=t.height;let n=Xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=so("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ms(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ms(e[n]/255)*255):e[n]=ms(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},td=0,oo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Hn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ra(s[o].image)):r.push(ra(s[o]))}else r=ra(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ro.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ed=0,mn=class i extends ai{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bn,s=bn,r=fn,o=Qs,a=Sn,l=si,c=i.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Hn(),this.name="",this.source=new oo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Li?be:pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ks:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case Na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ks:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case Na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===be?Li:Th}set encoding(t){Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Li?be:pn}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=_h;mn.DEFAULT_ANISOTROPY=1;var _e=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,w=(d+1)/2,C=(p+1)/2,T=(h+f)/4,R=(u+_)/4,N=(g+m)/4;return x>w&&x>C?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=R/n):w>C?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=T/s,r=N/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=N/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ba=class extends ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Li?be:pn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new oo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ke=class extends Ba{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ao=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ka=class extends mn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let C=Math.sqrt(x),T=Math.atan2(C,p*v);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}let w=a*v;if(l=l*m+f*w,c=c*m+d*w,h=h*m+g*w,u=u*m+_*w,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oa.copy(this).projectOnVector(t),this.sub(oa)}reflect(t){return this.sub(oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},oa=new U,wc=new Pn,Vn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox)),Mr.applyMatrix4(t.matrixWorld),this.union(Mr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fs),br.subVectors(this.max,Fs),qi.subVectors(t.a,Fs),Yi.subVectors(t.b,Fs),Zi.subVectors(t.c,Fs),$n.subVectors(Yi,qi),Kn.subVectors(Zi,Yi),bi.subVectors(qi,Zi);let e=[0,-$n.z,$n.y,0,-Kn.z,Kn.y,0,-bi.z,bi.y,$n.z,0,-$n.x,Kn.z,0,-Kn.x,bi.z,0,-bi.x,-$n.y,$n.x,0,-Kn.y,Kn.x,0,-bi.y,bi.x,0];return!aa(e,qi,Yi,Zi,br)||(e=[1,0,0,0,1,0,0,0,1],!aa(e,qi,Yi,Zi,br))?!1:(Sr.crossVectors($n,Kn),e=[Sr.x,Sr.y,Sr.z],aa(e,qi,Yi,Zi,br))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Ln=[new U,new U,new U,new U,new U,new U,new U,new U],vn=new U,Mr=new Vn,qi=new U,Yi=new U,Zi=new U,$n=new U,Kn=new U,bi=new U,Fs=new U,br=new U,Sr=new U,Si=new U;function aa(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Si.fromArray(i,r);let a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),l=t.dot(Si),c=e.dot(Si),h=n.dot(Si);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var nd=new Vn,zs=new U,la=new U,Di=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):nd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);let e=zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(la.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(la)),this.expandByPoint(zs.copy(t.center).sub(la))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Dn=new U,ca=new U,wr=new U,Qn=new U,ha=new U,Er=new U,ua=new U,Ha=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Dn.copy(this.origin).addScaledVector(this.direction,e),Dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ca.copy(t).add(e).multiplyScalar(.5),wr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(ca);let r=t.distanceTo(e)*.5,o=-this.direction.dot(wr),a=Qn.dot(this.direction),l=-Qn.dot(wr),c=Qn.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ca).addScaledVector(wr,f),d}intersectSphere(t,e){Dn.subVectors(t.center,this.origin);let n=Dn.dot(this.direction),s=Dn.dot(Dn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Dn)!==null}intersectTriangle(t,e,n,s,r){ha.subVectors(e,t),Er.subVectors(n,t),ua.crossVectors(ha,Er);let o=this.direction.dot(ua),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);let l=a*this.direction.dot(Er.crossVectors(Qn,Er));if(l<0)return null;let c=a*this.direction.dot(ha.cross(Qn));if(c<0||l+c>o)return null;let h=-a*Qn.dot(ua);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),o=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(id,t,sd)}lookAt(t,e,n){let s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),jn.crossVectors(n,rn),jn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),jn.crossVectors(n,rn)),jn.normalize(),Tr.crossVectors(rn,jn),s[0]=jn.x,s[4]=Tr.x,s[8]=rn.x,s[1]=jn.y,s[5]=Tr.y,s[9]=rn.y,s[2]=jn.z,s[6]=Tr.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],w=n[11],C=n[15],T=s[0],R=s[4],N=s[8],M=s[12],E=s[1],z=s[5],W=s[9],X=s[13],L=s[2],S=s[6],G=s[10],K=s[14],nt=s[3],Q=s[7],at=s[11],lt=s[15];return r[0]=o*T+a*E+l*L+c*nt,r[4]=o*R+a*z+l*S+c*Q,r[8]=o*N+a*W+l*G+c*at,r[12]=o*M+a*X+l*K+c*lt,r[1]=h*T+u*E+f*L+d*nt,r[5]=h*R+u*z+f*S+d*Q,r[9]=h*N+u*W+f*G+d*at,r[13]=h*M+u*X+f*K+d*lt,r[2]=g*T+_*E+m*L+p*nt,r[6]=g*R+_*z+m*S+p*Q,r[10]=g*N+_*W+m*G+p*at,r[14]=g*M+_*X+m*K+p*lt,r[3]=v*T+x*E+w*L+C*nt,r[7]=v*R+x*z+w*S+C*Q,r[11]=v*N+x*W+w*G+C*at,r[15]=v*M+x*X+w*K+C*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+_*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,x=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,w=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,C=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,T=e*v+n*x+s*w+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return t[0]=v*R,t[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*R,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*R,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*R,t[4]=x*R,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*R,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*R,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*R,t[8]=w*R,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*R,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*R,t[12]=C*R,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*R,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,v=l*c,x=l*h,w=l*u,C=n.x,T=n.y,R=n.z;return s[0]=(1-(_+p))*C,s[1]=(d+w)*C,s[2]=(g-x)*C,s[3]=0,s[4]=(d-w)*T,s[5]=(1-(f+p))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+x)*R,s[9]=(m-v)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Ji.set(s[0],s[1],s[2]).length(),o=Ji.set(s[4],s[5],s[6]).length(),a=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);let c=1/r,h=1/o,u=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=kn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(a===kn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===no)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=kn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h,g,_;if(a===kn)g=(o+r)*u,_=-2*u;else if(a===no)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ji=new U,yn=new ue,id=new U(0,0,0),sd=new U(1,1,1),jn=new U,Tr=new U,rn=new U,Ec=new ue,Tc=new Pn,ys=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ec.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ec,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tc.setFromEuler(this),this.setFromQuaternion(Tc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ys.DEFAULT_ORDER="XYZ";var lo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rd=0,Ac=new U,$i=new Pn,Un=new ue,Ar=new U,Bs=new U,od=new U,ad=new Pn,Rc=new U(1,0,0),Cc=new U(0,1,0),Pc=new U(0,0,1),ld={type:"added"},cd={type:"removed"},Pe=class i extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new ys,n=new Pn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new ne}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Rc,t)}rotateY(t){return this.rotateOnAxis(Cc,t)}rotateZ(t){return this.rotateOnAxis(Pc,t)}translateOnAxis(t,e){return Ac.copy(t).applyQuaternion(this.quaternion),this.position.add(Ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rc,t)}translateY(t){return this.translateOnAxis(Cc,t)}translateZ(t){return this.translateOnAxis(Pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ar.copy(t):Ar.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Bs,Ar,this.up):Un.lookAt(Ar,Bs,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Un),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ld)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,od),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,ad,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Pe.DEFAULT_UP=new U(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=new U,Nn=new U,da=new U,On=new U,Ki=new U,Qi=new U,Ic=new U,fa=new U,pa=new U,ma=new U,Rr=!1,Ci=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Mn.subVectors(t,e),s.cross(Mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Mn.subVectors(s,e),Nn.subVectors(n,e),da.subVectors(t,e);let o=Mn.dot(Mn),a=Mn.dot(Nn),l=Mn.dot(da),c=Nn.dot(Nn),h=Nn.dot(da),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getUV(t,e,n,s,r,o,a,l){return Rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rr=!0),this.getInterpolation(t,e,n,s,r,o,a,l)}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static isFrontFacing(t,e,n,s){return Mn.subVectors(n,e),Nn.subVectors(t,e),Mn.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),Mn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Rr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Rr=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ki.subVectors(s,n),Qi.subVectors(r,n),fa.subVectors(t,n);let l=Ki.dot(fa),c=Qi.dot(fa);if(l<=0&&c<=0)return e.copy(n);pa.subVectors(t,s);let h=Ki.dot(pa),u=Qi.dot(pa);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ki,o);ma.subVectors(t,r);let d=Ki.dot(ma),g=Qi.dot(ma);if(g>=0&&d<=g)return e.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Qi,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Ic.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Ic,a);let p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(Ki,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function ga(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=Ku(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ga(o,r,t+1/3),this.g=ga(o,r,t),this.b=ga(o,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let n=Ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}copyLinearToSRGB(t){return this.r=sa(t.r),this.g=sa(t.g),this.b=sa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return le.fromWorkingColorSpace(Xe.copy(this),t),Math.round(qe(Xe.r*255,0,255))*65536+Math.round(qe(Xe.g*255,0,255))*256+Math.round(qe(Xe.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(Xe.copy(this),e);let n=Xe.r,s=Xe.g,r=Xe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=be){le.fromWorkingColorSpace(Xe.copy(this),t);let e=Xe.r,n=Xe.g,s=Xe.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(Cr);let n=na(ti.h,Cr.h,e),s=na(ti.s,Cr.s,e),r=na(ti.l,Cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xe=new Nt;Nt.NAMES=Ph;var hd=0,Wn=class extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=ps,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ia,this.blendDst=La,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ia&&(n.blendSrc=this.blendSrc),this.blendDst!==La&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$r&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Be=class extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new U,Pr=new ct,ze=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pr.fromBufferAttribute(this,e),Pr.applyMatrix3(t),this.setXY(e,Pr.x,Pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oa&&(t.usage=this.usage),t}};var co=class extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ho=class extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}};var ud=0,dn=new ue,xa=new Pe,ji=new U,on=new Vn,ks=new Vn,Oe=new U,we=class i extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ch(t)?ho:co)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return xa.lookAt(t),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ie(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(on.min,ks.min),on.expandByPoint(Oe),Oe.addVectors(on.max,ks.max),on.expandByPoint(Oe)):(on.expandByPoint(ks.min),on.expandByPoint(ks.max))}on.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Oe.fromBufferAttribute(a,c),l&&(ji.fromBufferAttribute(t,c),Oe.add(ji)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new U,h[E]=new U;let u=new U,f=new U,d=new U,g=new ct,_=new ct,m=new ct,p=new U,v=new U;function x(E,z,W){u.fromArray(s,E*3),f.fromArray(s,z*3),d.fromArray(s,W*3),g.fromArray(o,E*2),_.fromArray(o,z*2),m.fromArray(o,W*2),f.sub(u),d.sub(u),_.sub(g),m.sub(g);let X=1/(_.x*m.y-m.x*_.y);isFinite(X)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(X),v.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(X),c[E].add(p),c[z].add(p),c[W].add(p),h[E].add(v),h[z].add(v),h[W].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let E=0,z=w.length;E<z;++E){let W=w[E],X=W.start,L=W.count;for(let S=X,G=X+L;S<G;S+=3)x(n[S+0],n[S+1],n[S+2])}let C=new U,T=new U,R=new U,N=new U;function M(E){R.fromArray(r,E*3),N.copy(R);let z=c[E];C.copy(z),C.sub(R.multiplyScalar(R.dot(z))).normalize(),T.crossVectors(N,z);let X=T.dot(h[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=X}for(let E=0,z=w.length;E<z;++E){let W=w[E],X=W.start,L=W.count;for(let S=X,G=X+L;S<G;S+=3)M(n[S+0]),M(n[S+1]),M(n[S+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new ze(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lc=new ue,wi=new Ha,Ir=new Di,Dc=new U,ts=new U,es=new U,ns=new U,_a=new U,Lr=new U,Dr=new ct,Ur=new ct,Nr=new ct,Uc=new U,Nc=new U,Oc=new U,Or=new U,Fr=new U,Gt=class extends Pe{constructor(t=new we,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Lr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(_a.fromBufferAttribute(u,t),o?Lr.addScaledVector(_a,h):Lr.addScaledVector(_a.sub(e),h))}e.add(Lr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(Ir.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Ir,Dc)===null||wi.origin.distanceToSquared(Dc)>(t.far-t.near)**2))&&(Lc.copy(r).invert(),wi.copy(t.ray).applyMatrix4(Lc),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let w=v,C=x;w<C;w+=3){let T=a.getX(w),R=a.getX(w+1),N=a.getX(w+2);s=zr(this,p,t,n,c,h,u,T,R,N),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let v=a.getX(m),x=a.getX(m+1),w=a.getX(m+2);s=zr(this,o,t,n,c,h,u,v,x,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let w=v,C=x;w<C;w+=3){let T=w,R=w+1,N=w+2;s=zr(this,p,t,n,c,h,u,T,R,N),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let v=m,x=m+1,w=m+2;s=zr(this,o,t,n,c,h,u,v,x,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function dd(i,t,e,n,s,r,o,a){let l;if(t.side===Fe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===oi,a),l===null)return null;Fr.copy(a),Fr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Fr);return c<e.near||c>e.far?null:{distance:c,point:Fr.clone(),object:i}}function zr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ts),i.getVertexPosition(l,es),i.getVertexPosition(c,ns);let h=dd(i,t,e,n,ts,es,ns,Or);if(h){s&&(Dr.fromBufferAttribute(s,a),Ur.fromBufferAttribute(s,l),Nr.fromBufferAttribute(s,c),h.uv=Ci.getInterpolation(Or,ts,es,ns,Dr,Ur,Nr,new ct)),r&&(Dr.fromBufferAttribute(r,a),Ur.fromBufferAttribute(r,l),Nr.fromBufferAttribute(r,c),h.uv1=Ci.getInterpolation(Or,ts,es,ns,Dr,Ur,Nr,new ct),h.uv2=h.uv1),o&&(Uc.fromBufferAttribute(o,a),Nc.fromBufferAttribute(o,l),Oc.fromBufferAttribute(o,c),h.normal=Ci.getInterpolation(Or,ts,es,ns,Uc,Nc,Oc,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new U,materialIndex:0};Ci.getNormal(ts,es,ns,u.normal),h.face=u}return h}var En=class i extends we{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(_,m,p,v,x,w,C,T,R,N,M){let E=w/R,z=C/N,W=w/2,X=C/2,L=T/2,S=R+1,G=N+1,K=0,nt=0,Q=new U;for(let at=0;at<G;at++){let lt=at*z-X;for(let gt=0;gt<S;gt++){let $=gt*E-W;Q[_]=$*v,Q[m]=lt*x,Q[p]=L,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=T>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(gt/R),u.push(1-at/N),K+=1}}for(let at=0;at<N;at++)for(let lt=0;lt<R;lt++){let gt=f+lt+S*at,$=f+lt+S*(at+1),q=f+(lt+1)+S*(at+1),ht=f+(lt+1)+S*at;l.push(gt,$,ht),l.push($,q,ht),nt+=6}a.addGroup(d,nt,M),d+=nt,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Je(i){let t={};for(let e=0;e<i.length;e++){let n=Ms(i[e]);for(let s in n)t[s]=n[s]}return t}function fd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ih(i){return i.getRenderTarget()===null?i.outputColorSpace:le.workingColorSpace}var gi={clone:Ms,merge:Je},pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ie=class extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pd,this.fragmentShader=md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=fd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},uo=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Le=class extends uo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=io*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ea*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return io*2*Math.atan(Math.tan(ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ea*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},is=-90,ss=1,Ga=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Le(is,ss,t,e);s.layers=this.layers,this.add(s);let r=new Le(is,ss,t,e);r.layers=this.layers,this.add(r);let o=new Le(is,ss,t,e);o.layers=this.layers,this.add(o);let a=new Le(is,ss,t,e);a.layers=this.layers,this.add(a);let l=new Le(is,ss,t,e);l.layers=this.layers,this.add(l);let c=new Le(is,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===no)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},fo=class extends mn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:xs,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Va=class extends Ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Li?be:pn),this.texture=new fo(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new En(5,5,5),r=new Ie({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Rn});r.uniforms.tEquirect.value=e;let o=new Gt(s,r),a=e.minFilter;return e.minFilter===Qs&&(e.minFilter=fn),new Ga(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},va=new U,gd=new U,xd=new ne,zn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=va.subVectors(n,e).cross(gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(va),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||xd.getNormalMatrix(t),s=this.coplanarPoint(va).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ei=new Di,Br=new U,js=class{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,o=new zn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],x=s[14],w=s[15];if(n[0].setComponents(l-r,f-c,m-d,w-p).normalize(),n[1].setComponents(l+r,f+c,m+d,w+p).normalize(),n[2].setComponents(l+o,f+h,m+g,w+v).normalize(),n[3].setComponents(l-o,f-h,m-g,w-v).normalize(),n[4].setComponents(l-a,f-u,m-_,w-x).normalize(),e===kn)n[5].setComponents(l+a,f+u,m+_,w+x).normalize();else if(e===no)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){return Ei.center.set(0,0,0),Ei.radius=.7071067811865476,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Br.x=s.normal.x>0?t.max.x:t.min.x,Br.y=s.normal.y>0?t.max.y:t.min.y,Br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Br)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _d(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,d=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:d}}function r(c,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),d.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];e?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var li=class i extends we{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let v=p*f-o;for(let x=0;x<c;x++){let w=x*u-r;g.push(w,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let x=v+c*p,w=v+c*(p+1),C=v+1+c*(p+1),T=v+1+c*p;d.push(x,w,T),d.push(w,C,T)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},vd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yd=`#ifdef USE_ALPHAHASH
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
#endif`,Md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ed=`#ifdef USE_AOMAP
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
#endif`,Td=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ad=`#ifdef USE_BATCHING
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
#endif`,Rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ld=`#ifdef USE_IRIDESCENCE
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
#endif`,Dd=`#ifdef USE_BUMPMAP
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
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gd=`#define PI 3.141592653589793
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
} // validated`,Vd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wd=`vec3 transformedNormal = objectNormal;
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
#endif`,Xd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",$d=`
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
}`,Kd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ef=`#ifdef USE_ENVMAP
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
#endif`,nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,of=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,af=`#ifdef USE_GRADIENTMAP
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
}`,lf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,df=`uniform bool receiveShadow;
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
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_f=`PhysicalMaterial material;
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
#endif`,vf=`struct PhysicalMaterial {
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
}`,yf=`
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
#endif`,Mf=`#if defined( RE_IndirectDiffuse )
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
#endif`,bf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ef=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Tf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Af=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pf=`#if defined( USE_POINTS_UV )
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
#endif`,If=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Df=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uf=`#ifdef USE_MORPHNORMALS
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
#endif`,Nf=`#ifdef USE_MORPHTARGETS
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
#endif`,Of=`#ifdef USE_MORPHTARGETS
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
#endif`,Ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gf=`#ifdef USE_NORMALMAP
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
#endif`,Vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$f=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sp=`float getShadowMask() {
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
}`,rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,up=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fp=`#ifdef USE_TRANSMISSION
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
#endif`,pp=`#ifdef USE_TRANSMISSION
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yp=`uniform sampler2D t2D;
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`#include <common>
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
}`,Tp=`#if DEPTH_PACKING == 3200
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
}`,Ap=`#define DISTANCE
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
}`,Rp=`#define DISTANCE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`uniform float scale;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Dp=`#include <common>
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
}`,Up=`uniform vec3 diffuse;
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
}`,Np=`#define LAMBERT
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
}`,Op=`#define LAMBERT
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
}`,Fp=`#define MATCAP
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
}`,zp=`#define MATCAP
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
}`,Bp=`#define NORMAL
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
}`,kp=`#define NORMAL
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
}`,Hp=`#define PHONG
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
}`,Gp=`#define PHONG
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
}`,Vp=`#define STANDARD
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
}`,Wp=`#define STANDARD
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
}`,Xp=`#define TOON
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
}`,qp=`#define TOON
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
}`,Yp=`uniform float size;
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
}`,Zp=`uniform vec3 diffuse;
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
}`,Jp=`#include <common>
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
}`,$p=`uniform vec3 color;
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
}`,Kp=`uniform float rotation;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:vd,alphahash_pars_fragment:yd,alphamap_fragment:Md,alphamap_pars_fragment:bd,alphatest_fragment:Sd,alphatest_pars_fragment:wd,aomap_fragment:Ed,aomap_pars_fragment:Td,batching_pars_vertex:Ad,batching_vertex:Rd,begin_vertex:Cd,beginnormal_vertex:Pd,bsdfs:Id,iridescence_fragment:Ld,bumpmap_pars_fragment:Dd,clipping_planes_fragment:Ud,clipping_planes_pars_fragment:Nd,clipping_planes_pars_vertex:Od,clipping_planes_vertex:Fd,color_fragment:zd,color_pars_fragment:Bd,color_pars_vertex:kd,color_vertex:Hd,common:Gd,cube_uv_reflection_fragment:Vd,defaultnormal_vertex:Wd,displacementmap_pars_vertex:Xd,displacementmap_vertex:qd,emissivemap_fragment:Yd,emissivemap_pars_fragment:Zd,colorspace_fragment:Jd,colorspace_pars_fragment:$d,envmap_fragment:Kd,envmap_common_pars_fragment:Qd,envmap_pars_fragment:jd,envmap_pars_vertex:tf,envmap_physical_pars_fragment:ff,envmap_vertex:ef,fog_vertex:nf,fog_pars_vertex:sf,fog_fragment:rf,fog_pars_fragment:of,gradientmap_pars_fragment:af,lightmap_fragment:lf,lightmap_pars_fragment:cf,lights_lambert_fragment:hf,lights_lambert_pars_fragment:uf,lights_pars_begin:df,lights_toon_fragment:pf,lights_toon_pars_fragment:mf,lights_phong_fragment:gf,lights_phong_pars_fragment:xf,lights_physical_fragment:_f,lights_physical_pars_fragment:vf,lights_fragment_begin:yf,lights_fragment_maps:Mf,lights_fragment_end:bf,logdepthbuf_fragment:Sf,logdepthbuf_pars_fragment:wf,logdepthbuf_pars_vertex:Ef,logdepthbuf_vertex:Tf,map_fragment:Af,map_pars_fragment:Rf,map_particle_fragment:Cf,map_particle_pars_fragment:Pf,metalnessmap_fragment:If,metalnessmap_pars_fragment:Lf,morphcolor_vertex:Df,morphnormal_vertex:Uf,morphtarget_pars_vertex:Nf,morphtarget_vertex:Of,normal_fragment_begin:Ff,normal_fragment_maps:zf,normal_pars_fragment:Bf,normal_pars_vertex:kf,normal_vertex:Hf,normalmap_pars_fragment:Gf,clearcoat_normal_fragment_begin:Vf,clearcoat_normal_fragment_maps:Wf,clearcoat_pars_fragment:Xf,iridescence_pars_fragment:qf,opaque_fragment:Yf,packing:Zf,premultiplied_alpha_fragment:Jf,project_vertex:$f,dithering_fragment:Kf,dithering_pars_fragment:Qf,roughnessmap_fragment:jf,roughnessmap_pars_fragment:tp,shadowmap_pars_fragment:ep,shadowmap_pars_vertex:np,shadowmap_vertex:ip,shadowmask_pars_fragment:sp,skinbase_vertex:rp,skinning_pars_vertex:op,skinning_vertex:ap,skinnormal_vertex:lp,specularmap_fragment:cp,specularmap_pars_fragment:hp,tonemapping_fragment:up,tonemapping_pars_fragment:dp,transmission_fragment:fp,transmission_pars_fragment:pp,uv_pars_fragment:mp,uv_pars_vertex:gp,uv_vertex:xp,worldpos_vertex:_p,background_vert:vp,background_frag:yp,backgroundCube_vert:Mp,backgroundCube_frag:bp,cube_vert:Sp,cube_frag:wp,depth_vert:Ep,depth_frag:Tp,distanceRGBA_vert:Ap,distanceRGBA_frag:Rp,equirect_vert:Cp,equirect_frag:Pp,linedashed_vert:Ip,linedashed_frag:Lp,meshbasic_vert:Dp,meshbasic_frag:Up,meshlambert_vert:Np,meshlambert_frag:Op,meshmatcap_vert:Fp,meshmatcap_frag:zp,meshnormal_vert:Bp,meshnormal_frag:kp,meshphong_vert:Hp,meshphong_frag:Gp,meshphysical_vert:Vp,meshphysical_frag:Wp,meshtoon_vert:Xp,meshtoon_frag:qp,points_vert:Yp,points_frag:Zp,shadow_vert:Jp,shadow_frag:$p,sprite_vert:Kp,sprite_frag:Qp},Mt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},An={basic:{uniforms:Je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Je([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Je([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Je([Mt.points,Mt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Je([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Je([Mt.common,Mt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Je([Mt.sprite,Mt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Je([Mt.common,Mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Je([Mt.lights,Mt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};An.physical={uniforms:Je([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var kr={r:0,b:0,g:0};function jp(i,t,e,n,s,r,o){let a=new Nt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?e:t).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),v=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Io)?(h===void 0&&(h=new Gt(new En(1,1,1),new Ie({name:"BackgroundCubeMaterial",uniforms:Ms(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=le.getTransfer(x.colorSpace)!==ce,(u!==x||f!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Gt(new li(2,2),new Ie({name:"BackgroundMaterial",uniforms:Ms(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=le.getTransfer(x.colorSpace)!==ce,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(kr,Ih(i)),n.buffers.color.setClear(kr.r,kr.g,kr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function tm(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(L,S,G,K,nt){let Q=!1;if(o){let at=_(K,G,S);c!==at&&(c=at,d(c.object)),Q=p(L,K,G,nt),Q&&v(L,K,G,nt)}else{let at=S.wireframe===!0;(c.geometry!==K.id||c.program!==G.id||c.wireframe!==at)&&(c.geometry=K.id,c.program=G.id,c.wireframe=at,Q=!0)}nt!==null&&e.update(nt,i.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,N(L,S,G,K),nt!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(nt).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,S,G){let K=G.wireframe===!0,nt=a[L.id];nt===void 0&&(nt={},a[L.id]=nt);let Q=nt[S.id];Q===void 0&&(Q={},nt[S.id]=Q);let at=Q[K];return at===void 0&&(at=m(f()),Q[K]=at),at}function m(L){let S=[],G=[],K=[];for(let nt=0;nt<s;nt++)S[nt]=0,G[nt]=0,K[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:G,attributeDivisors:K,object:L,attributes:{},index:null}}function p(L,S,G,K){let nt=c.attributes,Q=S.attributes,at=0,lt=G.getAttributes();for(let gt in lt)if(lt[gt].location>=0){let q=nt[gt],ht=Q[gt];if(ht===void 0&&(gt==="instanceMatrix"&&L.instanceMatrix&&(ht=L.instanceMatrix),gt==="instanceColor"&&L.instanceColor&&(ht=L.instanceColor)),q===void 0||q.attribute!==ht||ht&&q.data!==ht.data)return!0;at++}return c.attributesNum!==at||c.index!==K}function v(L,S,G,K){let nt={},Q=S.attributes,at=0,lt=G.getAttributes();for(let gt in lt)if(lt[gt].location>=0){let q=Q[gt];q===void 0&&(gt==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),gt==="instanceColor"&&L.instanceColor&&(q=L.instanceColor));let ht={};ht.attribute=q,q&&q.data&&(ht.data=q.data),nt[gt]=ht,at++}c.attributes=nt,c.attributesNum=at,c.index=K}function x(){let L=c.newAttributes;for(let S=0,G=L.length;S<G;S++)L[S]=0}function w(L){C(L,0)}function C(L,S){let G=c.newAttributes,K=c.enabledAttributes,nt=c.attributeDivisors;G[L]=1,K[L]===0&&(i.enableVertexAttribArray(L),K[L]=1),nt[L]!==S&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,S),nt[L]=S)}function T(){let L=c.newAttributes,S=c.enabledAttributes;for(let G=0,K=S.length;G<K;G++)S[G]!==L[G]&&(i.disableVertexAttribArray(G),S[G]=0)}function R(L,S,G,K,nt,Q,at){at===!0?i.vertexAttribIPointer(L,S,G,nt,Q):i.vertexAttribPointer(L,S,G,K,nt,Q)}function N(L,S,G,K){if(n.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let nt=K.attributes,Q=G.getAttributes(),at=S.defaultAttributeValues;for(let lt in Q){let gt=Q[lt];if(gt.location>=0){let $=nt[lt];if($===void 0&&(lt==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),lt==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){let q=$.normalized,ht=$.itemSize,Rt=e.get($);if(Rt===void 0)continue;let St=Rt.buffer,Ot=Rt.type,Ct=Rt.bytesPerElement,xt=n.isWebGL2===!0&&(Ot===i.INT||Ot===i.UNSIGNED_INT||$.gpuType===vh);if($.isInterleavedBufferAttribute){let It=$.data,I=It.stride,pt=$.offset;if(It.isInstancedInterleavedBuffer){for(let it=0;it<gt.locationSize;it++)C(gt.location+it,It.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let it=0;it<gt.locationSize;it++)w(gt.location+it);i.bindBuffer(i.ARRAY_BUFFER,St);for(let it=0;it<gt.locationSize;it++)R(gt.location+it,ht/gt.locationSize,Ot,q,I*Ct,(pt+ht/gt.locationSize*it)*Ct,xt)}else{if($.isInstancedBufferAttribute){for(let It=0;It<gt.locationSize;It++)C(gt.location+It,$.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let It=0;It<gt.locationSize;It++)w(gt.location+It);i.bindBuffer(i.ARRAY_BUFFER,St);for(let It=0;It<gt.locationSize;It++)R(gt.location+It,ht/gt.locationSize,Ot,q,ht*Ct,ht/gt.locationSize*It*Ct,xt)}}else if(at!==void 0){let q=at[lt];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(gt.location,q);break;case 3:i.vertexAttrib3fv(gt.location,q);break;case 4:i.vertexAttrib4fv(gt.location,q);break;default:i.vertexAttrib1fv(gt.location,q)}}}}T()}function M(){W();for(let L in a){let S=a[L];for(let G in S){let K=S[G];for(let nt in K)g(K[nt].object),delete K[nt];delete S[G]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;let S=a[L.id];for(let G in S){let K=S[G];for(let nt in K)g(K[nt].object),delete K[nt];delete S[G]}delete a[L.id]}function z(L){for(let S in a){let G=a[S];if(G[L.id]===void 0)continue;let K=G[L.id];for(let nt in K)g(K[nt].object),delete K[nt];delete G[L.id]}}function W(){X(),h=!0,c!==l&&(c=l,d(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:W,resetDefaultState:X,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:w,disableUnusedAttributes:T}}function em(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function nm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,w=o||t.has("OES_texture_float"),C=x&&w,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:C,maxSamples:T}}function im(i){let t=this,e=null,n=0,s=!1,r=!1,o=new zn,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,x=v*4,w=p.clippingState||null;l.value=w,w=h(g,f,x,d);for(let C=0;C!==x;++C)w[C]=e[C];p.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,w=d;x!==_;++x,w+=4)o.copy(u[x]).applyMatrix4(v,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function sm(i){let t=new WeakMap;function e(o,a){return a===Da?o.mapping=xs:a===Ua&&(o.mapping=_s),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Da||a===Ua)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Va(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var bs=class extends uo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},us=4,Fc=[.125,.215,.35,.446,.526,.582],Ri=20,ya=new bs,zc=new Nt,Ma=null,ba=0,Sa=0,Ti=(1+Math.sqrt(5))/2,rs=1/Ti,Bc=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Ti,rs),new U(0,Ti,-rs),new U(rs,0,Ti),new U(-rs,0,Ti),new U(Ti,rs,0),new U(-Ti,rs,0)],ci=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ma=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ma,ba,Sa),t.scissorTest=!1,Hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===_s?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ma=this._renderer.getRenderTarget(),ba=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:wn,format:Sn,colorSpace:Gn,depthBuffer:!1},s=kc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rm(r)),this._blurMaterial=om(r,t,e)}return s}_compileMaterial(t){let e=new Gt(this._lodPlanes[0],t);this._renderer.compile(e,ya)}_sceneToCubeUV(t,e,n,s){let a=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(zc),h.toneMapping=ii,h.autoClear=!1;let d=new Be({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new Gt(new En,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(zc),_=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let x=this._cubeSize;Hr(s,v*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===xs||t.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Hr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ya)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bc[(s-1)%Bc.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Gt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ri-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ri;m>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);let p=[],v=0;for(let R=0;R<Ri;++R){let N=R/_,M=Math.exp(-N*N/2);p.push(M),R===0?v+=M:R<m&&(v+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let w=this._sizeLods[s],C=3*w*(s>x-us?s-x+us:0),T=4*(this._cubeSize-w);Hr(e,C,T,3*w,2*w),l.setRenderTarget(e),l.render(u,ya)}};function rm(i){let t=[],e=[],n=[],s=i,r=i-us+1+Fc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-us?l=Fc[o-i+us-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),x=new Float32Array(m*g*d),w=new Float32Array(p*g*d);for(let T=0;T<d;T++){let R=T%3*2/3-1,N=T>2?0:-1,M=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];v.set(M,_*g*T),x.set(f,m*g*T);let E=[T,T,T,T,T,T];w.set(E,p*g*T)}let C=new we;C.setAttribute("position",new ze(v,_)),C.setAttribute("uv",new ze(x,m)),C.setAttribute("faceIndex",new ze(w,p)),t.push(C),s>us&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function kc(i,t,e){let n=new Ke(i,t,e);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function om(i,t,e){let n=new Float32Array(Ri),s=new U(0,1,0);return new Ie({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Hc(){return new Ie({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Gc(){return new Ie({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Cl(){return`

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
	`}function am(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Da||l===Ua,h=l===xs||l===_s;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new ci(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new ci(i));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function lm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cm(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let v=d.array;_=d.version;for(let x=0,w=v.length;x<w;x+=3){let C=v[x+0],T=v[x+1],R=v[x+2];f.push(C,T,T,R,R,C)}}else if(g!==void 0){let v=g.array;_=g.version;for(let x=0,w=v.length/3-1;x<w;x+=3){let C=x+0,T=x+1,R=x+2;f.push(C,T,T,R,R,C)}}else return;let m=new(Ch(f)?ho:co)(f,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function hm(i,t,e,n){let s=n.isWebGL2,r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,g){i.drawElements(r,g,a,d*l),e.update(g,r,1)}function u(d,g,_){if(_===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*l,_),e.update(g,r,_)}function f(d,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,_);let p=0;for(let v=0;v<_;v++)p+=g[v];e.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function um(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function dm(i,t){return i[0]-t[0]}function fm(i,t){return Math.abs(t[1])-Math.abs(i[1])}function pm(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new _e,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,_=r.get(h);if(_===void 0||_.count!==g){let L=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let v=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],N=0;v===!0&&(N=1),x===!0&&(N=2),w===!0&&(N=3);let M=h.attributes.position.count*N,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let z=new Float32Array(M*E*4*g),W=new ao(z,M,E,g);W.type=ni,W.needsUpdate=!0;let X=N*4;for(let S=0;S<g;S++){let G=C[S],K=T[S],nt=R[S],Q=M*E*4*S;for(let at=0;at<G.count;at++){let lt=at*X;v===!0&&(o.fromBufferAttribute(G,at),z[Q+lt+0]=o.x,z[Q+lt+1]=o.y,z[Q+lt+2]=o.z,z[Q+lt+3]=0),x===!0&&(o.fromBufferAttribute(K,at),z[Q+lt+4]=o.x,z[Q+lt+5]=o.y,z[Q+lt+6]=o.z,z[Q+lt+7]=0),w===!0&&(o.fromBufferAttribute(nt,at),z[Q+lt+8]=o.x,z[Q+lt+9]=o.y,z[Q+lt+10]=o.z,z[Q+lt+11]=nt.itemSize===4?o.w:1)}}_={count:g,texture:W,size:new ct(M,E)},r.set(h,_),h.addEventListener("dispose",L)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let x=0;x<d;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<d;x++){let w=g[x];w[0]=x,w[1]=f[x]}g.sort(fm);for(let x=0;x<8;x++)x<d&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(dm);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let w=a[x],C=w[0],T=w[1];C!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+x)!==_[C]&&h.setAttribute("morphTarget"+x,_[C]),m&&h.getAttribute("morphNormal"+x)!==m[C]&&h.setAttribute("morphNormal"+x,m[C]),s[x]=T,p+=T):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let v=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function mm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var po=class extends mn{constructor(t,e,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Ii,h!==Ii&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=ei),n===void 0&&h===vs&&(n=Pi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Dh=new mn,Uh=new po(1,1);Uh.compareFunction=Rh;var Nh=new ao,Oh=new ka,Fh=new fo,Vc=[],Wc=[],Xc=new Float32Array(16),qc=new Float32Array(9),Yc=new Float32Array(4);function As(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Vc[s];if(r===void 0&&(r=new Float32Array(s),Vc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Do(i,t){let e=Wc[t];e===void 0&&(e=new Int32Array(t),Wc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function _m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Yc.set(n),i.uniformMatrix2fv(this.addr,!1,Yc),Ue(e,n)}}function Mm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;qc.set(n),i.uniformMatrix3fv(this.addr,!1,qc),Ue(e,n)}}function bm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Xc.set(n),i.uniformMatrix4fv(this.addr,!1,Xc),Ue(e,n)}}function Sm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function Am(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function Cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Im(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Uh:Dh;e.setTexture2D(t||r,s)}function Lm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Oh,s)}function Dm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fh,s)}function Um(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nh,s)}function Nm(i){switch(i){case 5126:return gm;case 35664:return xm;case 35665:return _m;case 35666:return vm;case 35674:return ym;case 35675:return Mm;case 35676:return bm;case 5124:case 35670:return Sm;case 35667:case 35671:return wm;case 35668:case 35672:return Em;case 35669:case 35673:return Tm;case 5125:return Am;case 36294:return Rm;case 36295:return Cm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Lm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Um}}function Om(i,t){i.uniform1fv(this.addr,t)}function Fm(i,t){let e=As(t,this.size,2);i.uniform2fv(this.addr,e)}function zm(i,t){let e=As(t,this.size,3);i.uniform3fv(this.addr,e)}function Bm(i,t){let e=As(t,this.size,4);i.uniform4fv(this.addr,e)}function km(i,t){let e=As(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hm(i,t){let e=As(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Gm(i,t){let e=As(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Vm(i,t){i.uniform1iv(this.addr,t)}function Wm(i,t){i.uniform2iv(this.addr,t)}function Xm(i,t){i.uniform3iv(this.addr,t)}function qm(i,t){i.uniform4iv(this.addr,t)}function Ym(i,t){i.uniform1uiv(this.addr,t)}function Zm(i,t){i.uniform2uiv(this.addr,t)}function Jm(i,t){i.uniform3uiv(this.addr,t)}function $m(i,t){i.uniform4uiv(this.addr,t)}function Km(i,t,e){let n=this.cache,s=t.length,r=Do(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Dh,r[o])}function Qm(i,t,e){let n=this.cache,s=t.length,r=Do(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Oh,r[o])}function jm(i,t,e){let n=this.cache,s=t.length,r=Do(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Fh,r[o])}function t0(i,t,e){let n=this.cache,s=t.length,r=Do(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Nh,r[o])}function e0(i){switch(i){case 5126:return Om;case 35664:return Fm;case 35665:return zm;case 35666:return Bm;case 35674:return km;case 35675:return Hm;case 35676:return Gm;case 5124:case 35670:return Vm;case 35667:case 35671:return Wm;case 35668:case 35672:return Xm;case 35669:case 35673:return qm;case 5125:return Ym;case 36294:return Zm;case 36295:return Jm;case 36296:return $m;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Qm;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return t0}}var Wa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Nm(e.type)}},Xa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=e0(e.type)}},qa=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},wa=/(\w+)(\])?(\[|\.)?/g;function Zc(i,t){i.seq.push(t),i.map[t.id]=t}function n0(i,t,e){let n=i.name,s=n.length;for(wa.lastIndex=0;;){let r=wa.exec(n),o=wa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Zc(e,c===void 0?new Wa(a,i,t):new Xa(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new qa(a),Zc(e,u)),e=u}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);n0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Jc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var i0=37297,s0=0;function r0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function o0(i){let t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(i),n;switch(t===e?n="":t===eo&&e===to?n="LinearDisplayP3ToLinearSRGB":t===to&&e===eo&&(n="LinearSRGBToLinearDisplayP3"),i){case Gn:case Lo:return[n,"LinearTransferOETF"];case be:case Rl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function $c(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+r0(i.getShaderSource(t),o)}else return s}function a0(i,t){let e=o0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function l0(i,t){let e;switch(t){case Sl:e="Linear";break;case wl:e="Reinhard";break;case El:e="OptimizedCineon";break;case Bi:e="ACESFilmic";break;case Tl:e="AgX";break;case Iu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function c0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ds).join(`
`)}function h0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ds).join(`
`)}function u0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function d0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ds(i){return i!==""}function Kc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var f0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(i){return i.replace(f0,m0)}var p0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function m0(i,t){let e=jt[t];if(e===void 0){let n=p0.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ya(e)}var g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(i){return i.replace(g0,x0)}function x0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function th(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===gh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cr?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function v0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xs:case _s:t="ENVMAP_TYPE_CUBE";break;case Io:t="ENVMAP_TYPE_CUBE_UV";break}return t}function y0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===_s&&(t="ENVMAP_MODE_REFRACTION"),t}function M0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xh:t="ENVMAP_BLENDING_MULTIPLY";break;case Cu:t="ENVMAP_BLENDING_MIX";break;case Pu:t="ENVMAP_BLENDING_ADD";break}return t}function b0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function S0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=_0(e),c=v0(e),h=y0(e),u=M0(e),f=b0(e),d=e.isWebGL2?"":c0(e),g=h0(e),_=u0(r),m=s.createProgram(),p,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ds).join(`
`),p.length>0&&(p+=`
`),v=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ds).join(`
`),v.length>0&&(v+=`
`)):(p=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),v=[d,th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?jt.tonemapping_pars_fragment:"",e.toneMapping!==ii?l0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,a0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ds).join(`
`)),o=Ya(o),o=Kc(o,e),o=Qc(o,e),a=Ya(a),a=Kc(a,e),a=Qc(a,e),o=jc(o),a=jc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let w=x+p+o,C=x+v+a,T=Jc(s,s.VERTEX_SHADER,w),R=Jc(s,s.FRAGMENT_SHADER,C);s.attachShader(m,T),s.attachShader(m,R),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function N(W){if(i.debug.checkShaderErrors){let X=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(T).trim(),S=s.getShaderInfoLog(R).trim(),G=!0,K=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,R);else{let nt=$c(s,T,"vertex"),Q=$c(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+nt+`
`+Q)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(L===""||S==="")&&(K=!1);K&&(W.diagnostics={runnable:G,programLog:X,vertexShader:{log:L,prefix:p},fragmentShader:{log:S,prefix:v}})}s.deleteShader(T),s.deleteShader(R),M=new gs(s,m),E=d0(s,m)}let M;this.getUniforms=function(){return M===void 0&&N(this),M};let E;this.getAttributes=function(){return E===void 0&&N(this),E};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(m,i0)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=s0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=R,this}var w0=0,Za=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ja(t),e.set(t,n)),n}},Ja=class{constructor(t){this.id=w0++,this.code=t,this.usedTimes=0}};function E0(i,t,e,n,s,r,o){let a=new lo,l=new Za,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,E,z,W,X){let L=W.fog,S=X.geometry,G=M.isMeshStandardMaterial?W.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||G),nt=K&&K.mapping===Io?K.image.height:null,Q=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let at=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,lt=at!==void 0?at.length:0,gt=0;S.morphAttributes.position!==void 0&&(gt=1),S.morphAttributes.normal!==void 0&&(gt=2),S.morphAttributes.color!==void 0&&(gt=3);let $,q,ht,Rt;if(Q){let zt=An[Q];$=zt.vertexShader,q=zt.fragmentShader}else $=M.vertexShader,q=M.fragmentShader,l.update(M),ht=l.getVertexShaderID(M),Rt=l.getFragmentShaderID(M);let St=i.getRenderTarget(),Ot=X.isInstancedMesh===!0,Ct=X.isBatchedMesh===!0,xt=!!M.map,It=!!M.matcap,I=!!K,pt=!!M.aoMap,it=!!M.lightMap,ft=!!M.bumpMap,j=!!M.normalMap,Et=!!M.displacementMap,_t=!!M.emissiveMap,A=!!M.metalnessMap,y=!!M.roughnessMap,D=M.anisotropy>0,k=M.clearcoat>0,tt=M.iridescence>0,et=M.sheen>0,rt=M.transmission>0,st=D&&!!M.anisotropyMap,mt=k&&!!M.clearcoatMap,Ft=k&&!!M.clearcoatNormalMap,Xt=k&&!!M.clearcoatRoughnessMap,ut=tt&&!!M.iridescenceMap,re=tt&&!!M.iridescenceThicknessMap,Qt=et&&!!M.sheenColorMap,kt=et&&!!M.sheenRoughnessMap,Ut=!!M.specularMap,yt=!!M.specularColorMap,qt=!!M.specularIntensityMap,oe=rt&&!!M.transmissionMap,fe=rt&&!!M.thicknessMap,$t=!!M.gradientMap,vt=!!M.alphaMap,F=M.alphaTest>0,P=!!M.alphaHash,B=!!M.extensions,J=!!S.attributes.uv1,ot=!!S.attributes.uv2,bt=!!S.attributes.uv3,At=ii;return M.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(At=i.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:$,fragmentShader:q,defines:M.defines,customVertexShaderID:ht,customFragmentShaderID:Rt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ct,instancing:Ot,instancingColor:Ot&&X.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:St===null?i.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Gn,map:xt,matcap:It,envMap:I,envMapMode:I&&K.mapping,envMapCubeUVHeight:nt,aoMap:pt,lightMap:it,bumpMap:ft,normalMap:j,displacementMap:f&&Et,emissiveMap:_t,normalMapObjectSpace:j&&M.normalMapType===Vu,normalMapTangentSpace:j&&M.normalMapType===Ah,metalnessMap:A,roughnessMap:y,anisotropy:D,anisotropyMap:st,clearcoat:k,clearcoatMap:mt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:Xt,iridescence:tt,iridescenceMap:ut,iridescenceThicknessMap:re,sheen:et,sheenColorMap:Qt,sheenRoughnessMap:kt,specularMap:Ut,specularColorMap:yt,specularIntensityMap:qt,transmission:rt,transmissionMap:oe,thicknessMap:fe,gradientMap:$t,opaque:M.transparent===!1&&M.blending===ps,alphaMap:vt,alphaTest:F,alphaHash:P,combine:M.combine,mapUv:xt&&_(M.map.channel),aoMapUv:pt&&_(M.aoMap.channel),lightMapUv:it&&_(M.lightMap.channel),bumpMapUv:ft&&_(M.bumpMap.channel),normalMapUv:j&&_(M.normalMap.channel),displacementMapUv:Et&&_(M.displacementMap.channel),emissiveMapUv:_t&&_(M.emissiveMap.channel),metalnessMapUv:A&&_(M.metalnessMap.channel),roughnessMapUv:y&&_(M.roughnessMap.channel),anisotropyMapUv:st&&_(M.anisotropyMap.channel),clearcoatMapUv:mt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:kt&&_(M.sheenRoughnessMap.channel),specularMapUv:Ut&&_(M.specularMap.channel),specularColorMapUv:yt&&_(M.specularColorMap.channel),specularIntensityMapUv:qt&&_(M.specularIntensityMap.channel),transmissionMapUv:oe&&_(M.transmissionMap.channel),thicknessMapUv:fe&&_(M.thicknessMap.channel),alphaMapUv:vt&&_(M.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(j||D),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,vertexUv1s:J,vertexUv2s:ot,vertexUv3s:bt,pointsUvs:X.isPoints===!0&&!!S.attributes.uv&&(xt||vt),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:gt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,useLegacyLights:i._useLegacyLights,decodeVideoTexture:xt&&M.map.isVideoTexture===!0&&le.getTransfer(M.map.colorSpace)===ce,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===me,flipSided:M.side===Fe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:B&&M.extensions.derivatives===!0,extensionFragDepth:B&&M.extensions.fragDepth===!0,extensionDrawBuffers:B&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:B&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:B&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let z in M.defines)E.push(z),E.push(M.defines[z]);return M.isRawShaderMaterial===!1&&(v(E,M),x(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function v(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function x(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function w(M){let E=g[M.type],z;if(E){let W=An[E];z=gi.clone(W.uniforms)}else z=M.uniforms;return z}function C(M,E){let z;for(let W=0,X=c.length;W<X;W++){let L=c[W];if(L.cacheKey===E){z=L,++z.usedTimes;break}}return z===void 0&&(z=new S0(i,E,M,r),c.push(z)),z}function T(M){if(--M.usedTimes===0){let E=c.indexOf(M);c[E]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:N}}function T0(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function A0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function eh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||A0),n.length>1&&n.sort(f||eh),s.length>1&&s.sort(f||eh)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function R0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new nh,i.set(n,[o])):s>=r.length?(o=new nh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function C0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Nt};break;case"SpotLight":e={position:new U,direction:new U,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function P0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var I0=0;function L0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function D0(i,t){let e=new C0,n=P0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,o=new ue,a=new ue;function l(h,u){let f=0,d=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let _=0,m=0,p=0,v=0,x=0,w=0,C=0,T=0,R=0,N=0,M=0;h.sort(L0);let E=u===!0?Math.PI:1;for(let W=0,X=h.length;W<X;W++){let L=h[W],S=L.color,G=L.intensity,K=L.distance,nt=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=S.r*G*E,d+=S.g*G*E,g+=S.b*G*E;else if(L.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(L.sh.coefficients[Q],G);M++}else if(L.isDirectionalLight){let Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let at=L.shadow,lt=n.get(L);lt.shadowBias=at.bias,lt.shadowNormalBias=at.normalBias,lt.shadowRadius=at.radius,lt.shadowMapSize=at.mapSize,s.directionalShadow[_]=lt,s.directionalShadowMap[_]=nt,s.directionalShadowMatrix[_]=L.shadow.matrix,w++}s.directional[_]=Q,_++}else if(L.isSpotLight){let Q=e.get(L);Q.position.setFromMatrixPosition(L.matrixWorld),Q.color.copy(S).multiplyScalar(G*E),Q.distance=K,Q.coneCos=Math.cos(L.angle),Q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Q.decay=L.decay,s.spot[p]=Q;let at=L.shadow;if(L.map&&(s.spotLightMap[R]=L.map,R++,at.updateMatrices(L),L.castShadow&&N++),s.spotLightMatrix[p]=at.matrix,L.castShadow){let lt=n.get(L);lt.shadowBias=at.bias,lt.shadowNormalBias=at.normalBias,lt.shadowRadius=at.radius,lt.shadowMapSize=at.mapSize,s.spotShadow[p]=lt,s.spotShadowMap[p]=nt,T++}p++}else if(L.isRectAreaLight){let Q=e.get(L);Q.color.copy(S).multiplyScalar(G),Q.halfWidth.set(L.width*.5,0,0),Q.halfHeight.set(0,L.height*.5,0),s.rectArea[v]=Q,v++}else if(L.isPointLight){let Q=e.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity*E),Q.distance=L.distance,Q.decay=L.decay,L.castShadow){let at=L.shadow,lt=n.get(L);lt.shadowBias=at.bias,lt.shadowNormalBias=at.normalBias,lt.shadowRadius=at.radius,lt.shadowMapSize=at.mapSize,lt.shadowCameraNear=at.camera.near,lt.shadowCameraFar=at.camera.far,s.pointShadow[m]=lt,s.pointShadowMap[m]=nt,s.pointShadowMatrix[m]=L.shadow.matrix,C++}s.point[m]=Q,m++}else if(L.isHemisphereLight){let Q=e.get(L);Q.skyColor.copy(L.color).multiplyScalar(G*E),Q.groundColor.copy(L.groundColor).multiplyScalar(G*E),s.hemi[x]=Q,x++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_FLOAT_1,s.rectAreaLTC2=Mt.LTC_FLOAT_2):(s.rectAreaLTC1=Mt.LTC_HALF_1,s.rectAreaLTC2=Mt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_FLOAT_1,s.rectAreaLTC2=Mt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Mt.LTC_HALF_1,s.rectAreaLTC2=Mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let z=s.hash;(z.directionalLength!==_||z.pointLength!==m||z.spotLength!==p||z.rectAreaLength!==v||z.hemiLength!==x||z.numDirectionalShadows!==w||z.numPointShadows!==C||z.numSpotShadows!==T||z.numSpotMaps!==R||z.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=v,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=T+R-N,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=M,z.directionalLength=_,z.pointLength=m,z.spotLength=p,z.rectAreaLength=v,z.hemiLength=x,z.numDirectionalShadows=w,z.numPointShadows=C,z.numSpotShadows=T,z.numSpotMaps=R,z.numLightProbes=M,s.version=I0++)}function c(h,u){let f=0,d=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let v=0,x=h.length;v<x;v++){let w=h[v];if(w.isDirectionalLight){let C=s.directional[f];C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),f++}else if(w.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),g++}else if(w.isRectAreaLight){let C=s.rectArea[_];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(p),a.identity(),o.copy(w.matrixWorld),o.premultiply(p),a.extractRotation(o),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){let C=s.point[d];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function ih(i,t){let e=new D0(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function U0(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),l;return a===void 0?(l=new ih(i,t),e.set(r,[l])):o>=a.length?(l=new ih(i,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var $a=class extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ka=class extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},N0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O0=`uniform sampler2D shadow_pass;
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
}`;function F0(i,t,e){let n=new js,s=new ct,r=new ct,o=new _e,a=new $a({depthPacking:Gu}),l=new Ka,c={},h=e.maxTextureSize,u={[oi]:Fe,[Fe]:oi,[me]:me},f=new Ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:N0,fragmentShader:O0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new we;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Gt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gh;let p=this.type;this.render=function(T,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let M=i.getRenderTarget(),E=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Rn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let X=p!==Fn&&this.type===Fn,L=p===Fn&&this.type!==Fn;for(let S=0,G=T.length;S<G;S++){let K=T[S],nt=K.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;s.copy(nt.mapSize);let Q=nt.getFrameExtents();if(s.multiply(Q),r.copy(nt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,nt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,nt.mapSize.y=r.y)),nt.map===null||X===!0||L===!0){let lt=this.type!==Fn?{minFilter:$e,magFilter:$e}:{};nt.map!==null&&nt.map.dispose(),nt.map=new Ke(s.x,s.y,lt),nt.map.texture.name=K.name+".shadowMap",nt.camera.updateProjectionMatrix()}i.setRenderTarget(nt.map),i.clear();let at=nt.getViewportCount();for(let lt=0;lt<at;lt++){let gt=nt.getViewport(lt);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),W.viewport(o),nt.updateMatrices(K,lt),n=nt.getFrustum(),w(R,N,nt.camera,K,this.type)}nt.isPointLightShadow!==!0&&this.type===Fn&&v(nt,N),nt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,E,z)};function v(T,R){let N=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ke(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,N,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,N,d,_,null)}function x(T,R,N,M){let E=null,z=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(z!==void 0)E=z;else if(E=N.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=E.uuid,X=R.uuid,L=c[W];L===void 0&&(L={},c[W]=L);let S=L[X];S===void 0&&(S=E.clone(),L[X]=S,R.addEventListener("dispose",C)),E=S}if(E.visible=R.visible,E.wireframe=R.wireframe,M===Fn?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let W=i.properties.get(E);W.light=N}return E}function w(T,R,N,M,E){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Fn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);let X=t.update(T),L=T.material;if(Array.isArray(L)){let S=X.groups;for(let G=0,K=S.length;G<K;G++){let nt=S[G],Q=L[nt.materialIndex];if(Q&&Q.visible){let at=x(T,Q,M,E);T.onBeforeShadow(i,T,R,N,X,at,nt),i.renderBufferDirect(N,null,X,at,T,nt),T.onAfterShadow(i,T,R,N,X,at,nt)}}}else if(L.visible){let S=x(T,L,M,E);T.onBeforeShadow(i,T,R,N,X,S,null),i.renderBufferDirect(N,null,X,S,T,null),T.onAfterShadow(i,T,R,N,X,S,null)}}let W=T.children;for(let X=0,L=W.length;X<L;X++)w(W[X],R,N,M,E)}function C(T){T.target.removeEventListener("dispose",C);for(let N in c){let M=c[N],E=T.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function z0(i,t,e){let n=e.isWebGL2;function s(){let F=!1,P=new _e,B=null,J=new _e(0,0,0,0);return{setMask:function(ot){B!==ot&&!F&&(i.colorMask(ot,ot,ot,ot),B=ot)},setLocked:function(ot){F=ot},setClear:function(ot,bt,At,Pt,zt){zt===!0&&(ot*=Pt,bt*=Pt,At*=Pt),P.set(ot,bt,At,Pt),J.equals(P)===!1&&(i.clearColor(ot,bt,At,Pt),J.copy(P))},reset:function(){F=!1,B=null,J.set(-1,0,0,0)}}}function r(){let F=!1,P=null,B=null,J=null;return{setTest:function(ot){ot?Ct(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(ot){P!==ot&&!F&&(i.depthMask(ot),P=ot)},setFunc:function(ot){if(B!==ot){switch(ot){case bu:i.depthFunc(i.NEVER);break;case Su:i.depthFunc(i.ALWAYS);break;case wu:i.depthFunc(i.LESS);break;case $r:i.depthFunc(i.LEQUAL);break;case Eu:i.depthFunc(i.EQUAL);break;case Tu:i.depthFunc(i.GEQUAL);break;case Au:i.depthFunc(i.GREATER);break;case Ru:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}B=ot}},setLocked:function(ot){F=ot},setClear:function(ot){J!==ot&&(i.clearDepth(ot),J=ot)},reset:function(){F=!1,P=null,B=null,J=null}}}function o(){let F=!1,P=null,B=null,J=null,ot=null,bt=null,At=null,Pt=null,zt=null;return{setTest:function(dt){F||(dt?Ct(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(dt){P!==dt&&!F&&(i.stencilMask(dt),P=dt)},setFunc:function(dt,Ht,Yt){(B!==dt||J!==Ht||ot!==Yt)&&(i.stencilFunc(dt,Ht,Yt),B=dt,J=Ht,ot=Yt)},setOp:function(dt,Ht,Yt){(bt!==dt||At!==Ht||Pt!==Yt)&&(i.stencilOp(dt,Ht,Yt),bt=dt,At=Ht,Pt=Yt)},setLocked:function(dt){F=dt},setClear:function(dt){zt!==dt&&(i.clearStencil(dt),zt=dt)},reset:function(){F=!1,P=null,B=null,J=null,ot=null,bt=null,At=null,Pt=null,zt=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,w=null,C=null,T=null,R=null,N=null,M=new Nt(0,0,0),E=0,z=!1,W=null,X=null,L=null,S=null,G=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),nt=!1,Q=0,at=i.getParameter(i.VERSION);at.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(at)[1]),nt=Q>=1):at.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),nt=Q>=2);let lt=null,gt={},$=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),ht=new _e().fromArray($),Rt=new _e().fromArray(q);function St(F,P,B,J){let ot=new Uint8Array(4),bt=i.createTexture();i.bindTexture(F,bt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let At=0;At<B;At++)n&&(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)?i.texImage3D(P,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(P+At,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return bt}let Ot={};Ot[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),Ot[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ot[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ot[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ct(i.DEPTH_TEST),l.setFunc($r),_t(!1),A(zl),Ct(i.CULL_FACE),j(Rn);function Ct(F){f[F]!==!0&&(i.enable(F),f[F]=!0)}function xt(F){f[F]!==!1&&(i.disable(F),f[F]=!1)}function It(F,P){return d[F]!==P?(i.bindFramebuffer(F,P),d[F]=P,n&&(F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=P),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=P)),!0):!1}function I(F,P){let B=_,J=!1;if(F)if(B=g.get(P),B===void 0&&(B=[],g.set(P,B)),F.isWebGLMultipleRenderTargets){let ot=F.texture;if(B.length!==ot.length||B[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,At=ot.length;bt<At;bt++)B[bt]=i.COLOR_ATTACHMENT0+bt;B.length=ot.length,J=!0}}else B[0]!==i.COLOR_ATTACHMENT0&&(B[0]=i.COLOR_ATTACHMENT0,J=!0);else B[0]!==i.BACK&&(B[0]=i.BACK,J=!0);J&&(e.isWebGL2?i.drawBuffers(B):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(B))}function pt(F){return m!==F?(i.useProgram(F),m=F,!0):!1}let it={[Ai]:i.FUNC_ADD,[au]:i.FUNC_SUBTRACT,[lu]:i.FUNC_REVERSE_SUBTRACT};if(n)it[Hl]=i.MIN,it[Gl]=i.MAX;else{let F=t.get("EXT_blend_minmax");F!==null&&(it[Hl]=F.MIN_EXT,it[Gl]=F.MAX_EXT)}let ft={[cu]:i.ZERO,[hu]:i.ONE,[uu]:i.SRC_COLOR,[Ia]:i.SRC_ALPHA,[xu]:i.SRC_ALPHA_SATURATE,[mu]:i.DST_COLOR,[fu]:i.DST_ALPHA,[du]:i.ONE_MINUS_SRC_COLOR,[La]:i.ONE_MINUS_SRC_ALPHA,[gu]:i.ONE_MINUS_DST_COLOR,[pu]:i.ONE_MINUS_DST_ALPHA,[_u]:i.CONSTANT_COLOR,[vu]:i.ONE_MINUS_CONSTANT_COLOR,[yu]:i.CONSTANT_ALPHA,[Mu]:i.ONE_MINUS_CONSTANT_ALPHA};function j(F,P,B,J,ot,bt,At,Pt,zt,dt){if(F===Rn){p===!0&&(xt(i.BLEND),p=!1);return}if(p===!1&&(Ct(i.BLEND),p=!0),F!==ou){if(F!==v||dt!==z){if((x!==Ai||T!==Ai)&&(i.blendEquation(i.FUNC_ADD),x=Ai,T=Ai),dt)switch(F){case ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cn:i.blendFunc(i.ONE,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,C=null,R=null,N=null,M.set(0,0,0),E=0,v=F,z=dt}return}ot=ot||P,bt=bt||B,At=At||J,(P!==x||ot!==T)&&(i.blendEquationSeparate(it[P],it[ot]),x=P,T=ot),(B!==w||J!==C||bt!==R||At!==N)&&(i.blendFuncSeparate(ft[B],ft[J],ft[bt],ft[At]),w=B,C=J,R=bt,N=At),(Pt.equals(M)===!1||zt!==E)&&(i.blendColor(Pt.r,Pt.g,Pt.b,zt),M.copy(Pt),E=zt),v=F,z=!1}function Et(F,P){F.side===me?xt(i.CULL_FACE):Ct(i.CULL_FACE);let B=F.side===Fe;P&&(B=!B),_t(B),F.blending===ps&&F.transparent===!1?j(Rn):j(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);let J=F.stencilWrite;c.setTest(J),J&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),D(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ct(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(F){W!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),W=F)}function A(F){F!==su?(Ct(i.CULL_FACE),F!==X&&(F===zl?i.cullFace(i.BACK):F===ru?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),X=F}function y(F){F!==L&&(nt&&i.lineWidth(F),L=F)}function D(F,P,B){F?(Ct(i.POLYGON_OFFSET_FILL),(S!==P||G!==B)&&(i.polygonOffset(P,B),S=P,G=B)):xt(i.POLYGON_OFFSET_FILL)}function k(F){F?Ct(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function tt(F){F===void 0&&(F=i.TEXTURE0+K-1),lt!==F&&(i.activeTexture(F),lt=F)}function et(F,P,B){B===void 0&&(lt===null?B=i.TEXTURE0+K-1:B=lt);let J=gt[B];J===void 0&&(J={type:void 0,texture:void 0},gt[B]=J),(J.type!==F||J.texture!==P)&&(lt!==B&&(i.activeTexture(B),lt=B),i.bindTexture(F,P||Ot[F]),J.type=F,J.texture=P)}function rt(){let F=gt[lt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function st(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function kt(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ut(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qt(F){ht.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ht.copy(F))}function oe(F){Rt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Rt.copy(F))}function fe(F,P){let B=u.get(P);B===void 0&&(B=new WeakMap,u.set(P,B));let J=B.get(F);J===void 0&&(J=i.getUniformBlockIndex(P,F.name),B.set(F,J))}function $t(F,P){let J=u.get(P).get(F);h.get(P)!==J&&(i.uniformBlockBinding(P,J,F.__bindingPointIndex),h.set(P,J))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},lt=null,gt={},d={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,w=null,C=null,T=null,R=null,N=null,M=new Nt(0,0,0),E=0,z=!1,W=null,X=null,L=null,S=null,G=null,ht.set(0,0,i.canvas.width,i.canvas.height),Rt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ct,disable:xt,bindFramebuffer:It,drawBuffers:I,useProgram:pt,setBlending:j,setMaterial:Et,setFlipSided:_t,setCullFace:A,setLineWidth:y,setPolygonOffset:D,setScissorTest:k,activeTexture:tt,bindTexture:et,unbindTexture:rt,compressedTexImage2D:st,compressedTexImage3D:mt,texImage2D:Ut,texImage3D:yt,updateUBOMapping:fe,uniformBlockBinding:$t,texStorage2D:Qt,texStorage3D:kt,texSubImage2D:Ft,texSubImage3D:Xt,compressedTexSubImage2D:ut,compressedTexSubImage3D:re,scissor:qt,viewport:oe,reset:vt}}function B0(i,t,e,n,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return d?new OffscreenCanvas(A,y):so("canvas")}function _(A,y,D,k){let tt=1;if((A.width>k||A.height>k)&&(tt=k/Math.max(A.width,A.height)),tt<1||y===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let et=y?za:Math.floor,rt=et(tt*A.width),st=et(tt*A.height);u===void 0&&(u=g(rt,st));let mt=D?g(rt,st):u;return mt.width=rt,mt.height=st,mt.getContext("2d").drawImage(A,0,0,rt,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+rt+"x"+st+")."),mt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return yc(A.width)&&yc(A.height)}function p(A){return a?!1:A.wrapS!==bn||A.wrapT!==bn||A.minFilter!==$e&&A.minFilter!==fn}function v(A,y){return A.generateMipmaps&&y&&A.minFilter!==$e&&A.minFilter!==fn}function x(A){i.generateMipmap(A)}function w(A,y,D,k,tt=!1){if(a===!1)return y;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let et=y;if(y===i.RED&&(D===i.FLOAT&&(et=i.R32F),D===i.HALF_FLOAT&&(et=i.R16F),D===i.UNSIGNED_BYTE&&(et=i.R8)),y===i.RED_INTEGER&&(D===i.UNSIGNED_BYTE&&(et=i.R8UI),D===i.UNSIGNED_SHORT&&(et=i.R16UI),D===i.UNSIGNED_INT&&(et=i.R32UI),D===i.BYTE&&(et=i.R8I),D===i.SHORT&&(et=i.R16I),D===i.INT&&(et=i.R32I)),y===i.RG&&(D===i.FLOAT&&(et=i.RG32F),D===i.HALF_FLOAT&&(et=i.RG16F),D===i.UNSIGNED_BYTE&&(et=i.RG8)),y===i.RGBA){let rt=tt?jr:le.getTransfer(k);D===i.FLOAT&&(et=i.RGBA32F),D===i.HALF_FLOAT&&(et=i.RGBA16F),D===i.UNSIGNED_BYTE&&(et=rt===ce?i.SRGB8_ALPHA8:i.RGBA8),D===i.UNSIGNED_SHORT_4_4_4_4&&(et=i.RGBA4),D===i.UNSIGNED_SHORT_5_5_5_1&&(et=i.RGB5_A1)}return(et===i.R16F||et===i.R32F||et===i.RG16F||et===i.RG32F||et===i.RGBA16F||et===i.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function C(A,y,D){return v(A,D)===!0||A.isFramebufferTexture&&A.minFilter!==$e&&A.minFilter!==fn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function T(A){return A===$e||A===Vl||A===Zo?i.NEAREST:i.LINEAR}function R(A){let y=A.target;y.removeEventListener("dispose",R),M(y),y.isVideoTexture&&h.delete(y)}function N(A){let y=A.target;y.removeEventListener("dispose",N),z(y)}function M(A){let y=n.get(A);if(y.__webglInit===void 0)return;let D=A.source,k=f.get(D);if(k){let tt=k[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(A),Object.keys(k).length===0&&f.delete(D)}n.remove(A)}function E(A){let y=n.get(A);i.deleteTexture(y.__webglTexture);let D=A.source,k=f.get(D);delete k[y.__cacheKey],o.memory.textures--}function z(A){let y=A.texture,D=n.get(A),k=n.get(y);if(k.__webglTexture!==void 0&&(i.deleteTexture(k.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(D.__webglFramebuffer[tt]))for(let et=0;et<D.__webglFramebuffer[tt].length;et++)i.deleteFramebuffer(D.__webglFramebuffer[tt][et]);else i.deleteFramebuffer(D.__webglFramebuffer[tt]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[tt])}else{if(Array.isArray(D.__webglFramebuffer))for(let tt=0;tt<D.__webglFramebuffer.length;tt++)i.deleteFramebuffer(D.__webglFramebuffer[tt]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let tt=0;tt<D.__webglColorRenderbuffer.length;tt++)D.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[tt]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let tt=0,et=y.length;tt<et;tt++){let rt=n.get(y[tt]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(y[tt])}n.remove(y),n.remove(A)}let W=0;function X(){W=0}function L(){let A=W;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),W+=1,A}function S(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function G(A,y){let D=n.get(A);if(A.isVideoTexture&&Et(A),A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){let k=A.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(D,A,y);return}}e.bindTexture(i.TEXTURE_2D,D.__webglTexture,i.TEXTURE0+y)}function K(A,y){let D=n.get(A);if(A.version>0&&D.__version!==A.version){ht(D,A,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,D.__webglTexture,i.TEXTURE0+y)}function nt(A,y){let D=n.get(A);if(A.version>0&&D.__version!==A.version){ht(D,A,y);return}e.bindTexture(i.TEXTURE_3D,D.__webglTexture,i.TEXTURE0+y)}function Q(A,y){let D=n.get(A);if(A.version>0&&D.__version!==A.version){Rt(D,A,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+y)}let at={[Ks]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},lt={[$e]:i.NEAREST,[Vl]:i.NEAREST_MIPMAP_NEAREST,[Zo]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Lu]:i.LINEAR_MIPMAP_NEAREST,[Qs]:i.LINEAR_MIPMAP_LINEAR},gt={[Wu]:i.NEVER,[$u]:i.ALWAYS,[Xu]:i.LESS,[Rh]:i.LEQUAL,[qu]:i.EQUAL,[Ju]:i.GEQUAL,[Yu]:i.GREATER,[Zu]:i.NOTEQUAL};function $(A,y,D){if(D?(i.texParameteri(A,i.TEXTURE_WRAP_S,at[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,at[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,at[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,lt[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,lt[y.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==bn||y.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,T(y.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==$e&&y.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,gt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let k=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===$e||y.minFilter!==Zo&&y.minFilter!==Qs||y.type===ni&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===wn&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function q(A,y){let D=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",R));let k=y.source,tt=f.get(k);tt===void 0&&(tt={},f.set(k,tt));let et=S(y);if(et!==A.__cacheKey){tt[et]===void 0&&(tt[et]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,D=!0),tt[et].usedTimes++;let rt=tt[A.__cacheKey];rt!==void 0&&(tt[A.__cacheKey].usedTimes--,rt.usedTimes===0&&E(y)),A.__cacheKey=et,A.__webglTexture=tt[et].texture}return D}function ht(A,y,D){let k=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(k=i.TEXTURE_3D);let tt=q(A,y),et=y.source;e.bindTexture(k,A.__webglTexture,i.TEXTURE0+D);let rt=n.get(et);if(et.version!==rt.__version||tt===!0){e.activeTexture(i.TEXTURE0+D);let st=le.getPrimaries(le.workingColorSpace),mt=y.colorSpace===pn?null:le.getPrimaries(y.colorSpace),Ft=y.colorSpace===pn||st===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let Xt=p(y)&&m(y.image)===!1,ut=_(y.image,Xt,!1,s.maxTextureSize);ut=_t(y,ut);let re=m(ut)||a,Qt=r.convert(y.format,y.colorSpace),kt=r.convert(y.type),Ut=w(y.internalFormat,Qt,kt,y.colorSpace,y.isVideoTexture);$(k,y,re);let yt,qt=y.mipmaps,oe=a&&y.isVideoTexture!==!0&&Ut!==Eh,fe=rt.__version===void 0||tt===!0,$t=C(y,ut,re);if(y.isDepthTexture)Ut=i.DEPTH_COMPONENT,a?y.type===ni?Ut=i.DEPTH_COMPONENT32F:y.type===ei?Ut=i.DEPTH_COMPONENT24:y.type===Pi?Ut=i.DEPTH24_STENCIL8:Ut=i.DEPTH_COMPONENT16:y.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ii&&Ut===i.DEPTH_COMPONENT&&y.type!==Al&&y.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=ei,kt=r.convert(y.type)),y.format===vs&&Ut===i.DEPTH_COMPONENT&&(Ut=i.DEPTH_STENCIL,y.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Pi,kt=r.convert(y.type))),fe&&(oe?e.texStorage2D(i.TEXTURE_2D,1,Ut,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Ut,ut.width,ut.height,0,Qt,kt,null));else if(y.isDataTexture)if(qt.length>0&&re){oe&&fe&&e.texStorage2D(i.TEXTURE_2D,$t,Ut,qt[0].width,qt[0].height);for(let vt=0,F=qt.length;vt<F;vt++)yt=qt[vt],oe?e.texSubImage2D(i.TEXTURE_2D,vt,0,0,yt.width,yt.height,Qt,kt,yt.data):e.texImage2D(i.TEXTURE_2D,vt,Ut,yt.width,yt.height,0,Qt,kt,yt.data);y.generateMipmaps=!1}else oe?(fe&&e.texStorage2D(i.TEXTURE_2D,$t,Ut,ut.width,ut.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,Qt,kt,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,ut.width,ut.height,0,Qt,kt,ut.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){oe&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$t,Ut,qt[0].width,qt[0].height,ut.depth);for(let vt=0,F=qt.length;vt<F;vt++)yt=qt[vt],y.format!==Sn?Qt!==null?oe?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,yt.width,yt.height,ut.depth,Qt,yt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,Ut,yt.width,yt.height,ut.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,yt.width,yt.height,ut.depth,Qt,kt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,Ut,yt.width,yt.height,ut.depth,0,Qt,kt,yt.data)}else{oe&&fe&&e.texStorage2D(i.TEXTURE_2D,$t,Ut,qt[0].width,qt[0].height);for(let vt=0,F=qt.length;vt<F;vt++)yt=qt[vt],y.format!==Sn?Qt!==null?oe?e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,yt.width,yt.height,Qt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,Ut,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?e.texSubImage2D(i.TEXTURE_2D,vt,0,0,yt.width,yt.height,Qt,kt,yt.data):e.texImage2D(i.TEXTURE_2D,vt,Ut,yt.width,yt.height,0,Qt,kt,yt.data)}else if(y.isDataArrayTexture)oe?(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,$t,Ut,ut.width,ut.height,ut.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Qt,kt,ut.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,ut.width,ut.height,ut.depth,0,Qt,kt,ut.data);else if(y.isData3DTexture)oe?(fe&&e.texStorage3D(i.TEXTURE_3D,$t,Ut,ut.width,ut.height,ut.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Qt,kt,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,ut.width,ut.height,ut.depth,0,Qt,kt,ut.data);else if(y.isFramebufferTexture){if(fe)if(oe)e.texStorage2D(i.TEXTURE_2D,$t,Ut,ut.width,ut.height);else{let vt=ut.width,F=ut.height;for(let P=0;P<$t;P++)e.texImage2D(i.TEXTURE_2D,P,Ut,vt,F,0,Qt,kt,null),vt>>=1,F>>=1}}else if(qt.length>0&&re){oe&&fe&&e.texStorage2D(i.TEXTURE_2D,$t,Ut,qt[0].width,qt[0].height);for(let vt=0,F=qt.length;vt<F;vt++)yt=qt[vt],oe?e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Qt,kt,yt):e.texImage2D(i.TEXTURE_2D,vt,Ut,Qt,kt,yt);y.generateMipmaps=!1}else oe?(fe&&e.texStorage2D(i.TEXTURE_2D,$t,Ut,ut.width,ut.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Qt,kt,ut)):e.texImage2D(i.TEXTURE_2D,0,Ut,Qt,kt,ut);v(y,re)&&x(k),rt.__version=et.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Rt(A,y,D){if(y.image.length!==6)return;let k=q(A,y),tt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+D);let et=n.get(tt);if(tt.version!==et.__version||k===!0){e.activeTexture(i.TEXTURE0+D);let rt=le.getPrimaries(le.workingColorSpace),st=y.colorSpace===pn?null:le.getPrimaries(y.colorSpace),mt=y.colorSpace===pn||rt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let Ft=y.isCompressedTexture||y.image[0].isCompressedTexture,Xt=y.image[0]&&y.image[0].isDataTexture,ut=[];for(let vt=0;vt<6;vt++)!Ft&&!Xt?ut[vt]=_(y.image[vt],!1,!0,s.maxCubemapSize):ut[vt]=Xt?y.image[vt].image:y.image[vt],ut[vt]=_t(y,ut[vt]);let re=ut[0],Qt=m(re)||a,kt=r.convert(y.format,y.colorSpace),Ut=r.convert(y.type),yt=w(y.internalFormat,kt,Ut,y.colorSpace),qt=a&&y.isVideoTexture!==!0,oe=et.__version===void 0||k===!0,fe=C(y,re,Qt);$(i.TEXTURE_CUBE_MAP,y,Qt);let $t;if(Ft){qt&&oe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,fe,yt,re.width,re.height);for(let vt=0;vt<6;vt++){$t=ut[vt].mipmaps;for(let F=0;F<$t.length;F++){let P=$t[F];y.format!==Sn?kt!==null?qt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F,0,0,P.width,P.height,kt,P.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F,yt,P.width,P.height,0,P.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F,0,0,P.width,P.height,kt,Ut,P.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F,yt,P.width,P.height,0,kt,Ut,P.data)}}}else{$t=y.mipmaps,qt&&oe&&($t.length>0&&fe++,e.texStorage2D(i.TEXTURE_CUBE_MAP,fe,yt,ut[0].width,ut[0].height));for(let vt=0;vt<6;vt++)if(Xt){qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,ut[vt].width,ut[vt].height,kt,Ut,ut[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,yt,ut[vt].width,ut[vt].height,0,kt,Ut,ut[vt].data);for(let F=0;F<$t.length;F++){let B=$t[F].image[vt].image;qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F+1,0,0,B.width,B.height,kt,Ut,B.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F+1,yt,B.width,B.height,0,kt,Ut,B.data)}}else{qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,kt,Ut,ut[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,yt,kt,Ut,ut[vt]);for(let F=0;F<$t.length;F++){let P=$t[F];qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F+1,0,0,kt,Ut,P.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,F+1,yt,kt,Ut,P.image[vt])}}}v(y,Qt)&&x(i.TEXTURE_CUBE_MAP),et.__version=tt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function St(A,y,D,k,tt,et){let rt=r.convert(D.format,D.colorSpace),st=r.convert(D.type),mt=w(D.internalFormat,rt,st,D.colorSpace);if(!n.get(y).__hasExternalTextures){let Xt=Math.max(1,y.width>>et),ut=Math.max(1,y.height>>et);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,et,mt,Xt,ut,y.depth,0,rt,st,null):e.texImage2D(tt,et,mt,Xt,ut,0,rt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),j(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,tt,n.get(D).__webglTexture,0,ft(y)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,tt,n.get(D).__webglTexture,et),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(A,y,D){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let k=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(D||j(y)){let tt=y.depthTexture;tt&&tt.isDepthTexture&&(tt.type===ni?k=i.DEPTH_COMPONENT32F:tt.type===ei&&(k=i.DEPTH_COMPONENT24));let et=ft(y);j(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et,k,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,et,k,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,k,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){let k=ft(y);D&&j(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,k,i.DEPTH24_STENCIL8,y.width,y.height):j(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,k,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let k=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let tt=0;tt<k.length;tt++){let et=k[tt],rt=r.convert(et.format,et.colorSpace),st=r.convert(et.type),mt=w(et.internalFormat,rt,st,et.colorSpace),Ft=ft(y);D&&j(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,mt,y.width,y.height):j(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft,mt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,mt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ct(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);let k=n.get(y.depthTexture).__webglTexture,tt=ft(y);if(y.depthTexture.format===Ii)j(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0);else if(y.depthTexture.format===vs)j(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function xt(A){let y=n.get(A),D=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");Ct(y.__webglFramebuffer,A)}else if(D){y.__webglDepthbuffer=[];for(let k=0;k<6;k++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[k]),y.__webglDepthbuffer[k]=i.createRenderbuffer(),Ot(y.__webglDepthbuffer[k],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Ot(y.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(A,y,D){let k=n.get(A);y!==void 0&&St(k.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),D!==void 0&&xt(A)}function I(A){let y=A.texture,D=n.get(A),k=n.get(y);A.addEventListener("dispose",N),A.isWebGLMultipleRenderTargets!==!0&&(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=y.version,o.memory.textures++);let tt=A.isWebGLCubeRenderTarget===!0,et=A.isWebGLMultipleRenderTargets===!0,rt=m(A)||a;if(tt){D.__webglFramebuffer=[];for(let st=0;st<6;st++)if(a&&y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer[st]=[];for(let mt=0;mt<y.mipmaps.length;mt++)D.__webglFramebuffer[st][mt]=i.createFramebuffer()}else D.__webglFramebuffer[st]=i.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){D.__webglFramebuffer=[];for(let st=0;st<y.mipmaps.length;st++)D.__webglFramebuffer[st]=i.createFramebuffer()}else D.__webglFramebuffer=i.createFramebuffer();if(et)if(s.drawBuffers){let st=A.texture;for(let mt=0,Ft=st.length;mt<Ft;mt++){let Xt=n.get(st[mt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&j(A)===!1){let st=et?y:[y];D.__webglMultisampledFramebuffer=i.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let mt=0;mt<st.length;mt++){let Ft=st[mt];D.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,D.__webglColorRenderbuffer[mt]);let Xt=r.convert(Ft.format,Ft.colorSpace),ut=r.convert(Ft.type),re=w(Ft.internalFormat,Xt,ut,Ft.colorSpace,A.isXRRenderTarget===!0),Qt=ft(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,re,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,D.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(D.__webglDepthRenderbuffer=i.createRenderbuffer(),Ot(D.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),$(i.TEXTURE_CUBE_MAP,y,rt);for(let st=0;st<6;st++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)St(D.__webglFramebuffer[st][mt],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,mt);else St(D.__webglFramebuffer[st],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);v(y,rt)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){let st=A.texture;for(let mt=0,Ft=st.length;mt<Ft;mt++){let Xt=st[mt],ut=n.get(Xt);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),$(i.TEXTURE_2D,Xt,rt),St(D.__webglFramebuffer,A,Xt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),v(Xt,rt)&&x(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?st=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(st,k.__webglTexture),$(st,y,rt),a&&y.mipmaps&&y.mipmaps.length>0)for(let mt=0;mt<y.mipmaps.length;mt++)St(D.__webglFramebuffer[mt],A,y,i.COLOR_ATTACHMENT0,st,mt);else St(D.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,st,0);v(y,rt)&&x(st),e.unbindTexture()}A.depthBuffer&&xt(A)}function pt(A){let y=m(A)||a,D=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let k=0,tt=D.length;k<tt;k++){let et=D[k];if(v(et,y)){let rt=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,st=n.get(et).__webglTexture;e.bindTexture(rt,st),x(rt),e.unbindTexture()}}}function it(A){if(a&&A.samples>0&&j(A)===!1){let y=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],D=A.width,k=A.height,tt=i.COLOR_BUFFER_BIT,et=[],rt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=n.get(A),mt=A.isWebGLMultipleRenderTargets===!0;if(mt)for(let Ft=0;Ft<y.length;Ft++)e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let Ft=0;Ft<y.length;Ft++){et.push(i.COLOR_ATTACHMENT0+Ft),A.depthBuffer&&et.push(rt);let Xt=st.__ignoreDepthValues!==void 0?st.__ignoreDepthValues:!1;if(Xt===!1&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),mt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[Ft]),Xt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[rt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[rt])),mt){let ut=n.get(y[Ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,D,k,0,0,D,k,tt,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let Ft=0;Ft<y.length;Ft++){e.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.RENDERBUFFER,st.__webglColorRenderbuffer[Ft]);let Xt=n.get(y[Ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ft,i.TEXTURE_2D,Xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}}function ft(A){return Math.min(s.maxSamples,A.samples)}function j(A){let y=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Et(A){let y=o.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function _t(A,y){let D=A.colorSpace,k=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Fa||D!==Gn&&D!==pn&&(le.getTransfer(D)===ce?a===!1?t.has("EXT_sRGB")===!0&&k===Sn?(A.format=Fa,A.minFilter=fn,A.generateMipmaps=!1):y=ro.sRGBToLinear(y):(k!==Sn||tt!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),y}this.allocateTextureUnit=L,this.resetTextureUnits=X,this.setTexture2D=G,this.setTexture2DArray=K,this.setTexture3D=nt,this.setTextureCube=Q,this.rebindTextures=It,this.setupRenderTarget=I,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=j}function k0(i,t,e){let n=e.isWebGL2;function s(r,o=pn){let a,l=le.getTransfer(o);if(r===si)return i.UNSIGNED_BYTE;if(r===yh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Mh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Du)return i.BYTE;if(r===Uu)return i.SHORT;if(r===Al)return i.UNSIGNED_SHORT;if(r===vh)return i.INT;if(r===ei)return i.UNSIGNED_INT;if(r===ni)return i.FLOAT;if(r===wn)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Nu)return i.ALPHA;if(r===Sn)return i.RGBA;if(r===Ou)return i.LUMINANCE;if(r===Fu)return i.LUMINANCE_ALPHA;if(r===Ii)return i.DEPTH_COMPONENT;if(r===vs)return i.DEPTH_STENCIL;if(r===Fa)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===zu)return i.RED;if(r===bh)return i.RED_INTEGER;if(r===Bu)return i.RG;if(r===Sh)return i.RG_INTEGER;if(r===wh)return i.RGBA_INTEGER;if(r===Jo||r===$o||r===Ko||r===Qo)if(l===ce)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Jo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Jo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$o)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ko)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wl||r===Xl||r===ql||r===Yl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Wl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ql)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Eh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zl||r===Jl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Zl)return l===ce?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Jl)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$l||r===Kl||r===Ql||r===jl||r===tc||r===ec||r===nc||r===ic||r===sc||r===rc||r===oc||r===ac||r===lc||r===cc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===$l)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kl)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ql)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jl)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===tc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ec)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ic)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===oc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ac)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cc)return l===ce?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jo||r===hc||r===uc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===jo)return l===ce?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===uc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ku||r===dc||r===fc||r===pc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===jo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===dc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===pc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Pi?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Qa=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Se=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},H0={type:"move"},Zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ja=class extends ai{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=e.getContextAttributes(),m=null,p=null,v=[],x=[],w=new ct,C=null,T=new Le;T.layers.enable(1),T.viewport=new _e;let R=new Le;R.layers.enable(2),R.viewport=new _e;let N=[T,R],M=new Qa;M.layers.enable(1),M.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let q=v[$];return q===void 0&&(q=new Zs,v[$]=q),q.getTargetRaySpace()},this.getControllerGrip=function($){let q=v[$];return q===void 0&&(q=new Zs,v[$]=q),q.getGripSpace()},this.getHand=function($){let q=v[$];return q===void 0&&(q=new Zs,v[$]=q),q.getHandSpace()};function W($){let q=x.indexOf($.inputSource);if(q===-1)return;let ht=v[q];ht!==void 0&&(ht.update($.inputSource,$.frame,c||o),ht.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",L);for(let $=0;$<v.length;$++){let q=x[$];q!==null&&(x[$]=null,v[$].disconnect(q))}E=null,z=null,t.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,gt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let q={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,q),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Ke(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:si,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let q=null,ht=null,Rt=null;_.depth&&(Rt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=_.stencil?vs:Ii,ht=_.stencil?Pi:ei);let St={colorFormat:e.RGBA8,depthFormat:Rt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(St),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new Ke(f.textureWidth,f.textureHeight,{format:Sn,type:si,depthTexture:new po(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Ot=t.properties.get(p);Ot.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),gt.setContext(s),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L($){for(let q=0;q<$.removed.length;q++){let ht=$.removed[q],Rt=x.indexOf(ht);Rt>=0&&(x[Rt]=null,v[Rt].disconnect(ht))}for(let q=0;q<$.added.length;q++){let ht=$.added[q],Rt=x.indexOf(ht);if(Rt===-1){for(let Ot=0;Ot<v.length;Ot++)if(Ot>=x.length){x.push(ht),Rt=Ot;break}else if(x[Ot]===null){x[Ot]=ht,Rt=Ot;break}if(Rt===-1)break}let St=v[Rt];St&&St.connect(ht)}}let S=new U,G=new U;function K($,q,ht){S.setFromMatrixPosition(q.matrixWorld),G.setFromMatrixPosition(ht.matrixWorld);let Rt=S.distanceTo(G),St=q.projectionMatrix.elements,Ot=ht.projectionMatrix.elements,Ct=St[14]/(St[10]-1),xt=St[14]/(St[10]+1),It=(St[9]+1)/St[5],I=(St[9]-1)/St[5],pt=(St[8]-1)/St[0],it=(Ot[8]+1)/Ot[0],ft=Ct*pt,j=Ct*it,Et=Rt/(-pt+it),_t=Et*-pt;q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(_t),$.translateZ(Et),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();let A=Ct+Et,y=xt+Et,D=ft-_t,k=j+(Rt-_t),tt=It*xt/y*A,et=I*xt/y*A;$.projectionMatrix.makePerspective(D,k,tt,et,A,y),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function nt($,q){q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;M.near=R.near=T.near=$.near,M.far=R.far=T.far=$.far,(E!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,z=M.far);let q=$.parent,ht=M.cameras;nt(M,q);for(let Rt=0;Rt<ht.length;Rt++)nt(ht[Rt],q);ht.length===2?K(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),Q($,M,q)};function Q($,q,ht){ht===null?$.matrix.copy(q.matrixWorld):($.matrix.copy(ht.matrixWorld),$.matrix.invert(),$.matrix.multiply(q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(q.projectionMatrix),$.projectionMatrixInverse.copy(q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=io*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)};let at=null;function lt($,q){if(h=q.getViewerPose(c||o),g=q,h!==null){let ht=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let Rt=!1;ht.length!==M.cameras.length&&(M.cameras.length=0,Rt=!0);for(let St=0;St<ht.length;St++){let Ot=ht[St],Ct=null;if(d!==null)Ct=d.getViewport(Ot);else{let It=u.getViewSubImage(f,Ot);Ct=It.viewport,St===0&&(t.setRenderTargetTextures(p,It.colorTexture,f.ignoreDepthValues?void 0:It.depthStencilTexture),t.setRenderTarget(p))}let xt=N[St];xt===void 0&&(xt=new Le,xt.layers.enable(St),xt.viewport=new _e,N[St]=xt),xt.matrix.fromArray(Ot.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(Ot.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),St===0&&(M.matrix.copy(xt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Rt===!0&&M.cameras.push(xt)}}for(let ht=0;ht<v.length;ht++){let Rt=x[ht],St=v[ht];Rt!==null&&St!==void 0&&St.update(Rt,q,c||o)}at&&at($,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}let gt=new Lh;gt.setAnimationLoop(lt),this.setAnimationLoop=function($){at=$},this.dispose=function(){}}};function G0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ih(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,x,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function V0(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){let w=x.program;n.uniformBlockBinding(v,w)}function c(v,x){let w=s[v.id];w===void 0&&(g(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",m));let C=x.program;n.updateUBOMapping(v,C);let T=t.render.frame;r[v.id]!==T&&(f(v),r[v.id]=T)}function h(v){let x=u();v.__bindingPointIndex=x;let w=i.createBuffer(),C=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,w),w}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let x=s[v.id],w=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,R=w.length;T<R;T++){let N=Array.isArray(w[T])?w[T]:[w[T]];for(let M=0,E=N.length;M<E;M++){let z=N[M];if(d(z,T,M,C)===!0){let W=z.__offset,X=Array.isArray(z.value)?z.value:[z.value],L=0;for(let S=0;S<X.length;S++){let G=X[S],K=_(G);typeof G=="number"||typeof G=="boolean"?(z.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,W+L,z.__data)):G.isMatrix3?(z.__data[0]=G.elements[0],z.__data[1]=G.elements[1],z.__data[2]=G.elements[2],z.__data[3]=0,z.__data[4]=G.elements[3],z.__data[5]=G.elements[4],z.__data[6]=G.elements[5],z.__data[7]=0,z.__data[8]=G.elements[6],z.__data[9]=G.elements[7],z.__data[10]=G.elements[8],z.__data[11]=0):(G.toArray(z.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,x,w,C){let T=v.value,R=x+"_"+w;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:C[R]=T.clone(),!0;{let N=C[R];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return C[R]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function g(v){let x=v.uniforms,w=0,C=16;for(let R=0,N=x.length;R<N;R++){let M=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,z=M.length;E<z;E++){let W=M[E],X=Array.isArray(W.value)?W.value:[W.value];for(let L=0,S=X.length;L<S;L++){let G=X[L],K=_(G),nt=w%C;nt!==0&&C-nt<K.boundary&&(w+=C-nt),W.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=K.storage}}}let T=w%C;return T>0&&(w+=C-T),v.__size=w,v.__cache={},this}function _(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){let x=v.target;x.removeEventListener("dispose",m);let w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Ui=class{constructor(t={}){let{canvas:e=Qu(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this._useLegacyLights=!1,this.toneMapping=ii,this.toneMappingExposure=1;let x=this,w=!1,C=0,T=0,R=null,N=-1,M=null,E=new _e,z=new _e,W=null,X=new Nt(0),L=0,S=e.width,G=e.height,K=1,nt=null,Q=null,at=new _e(0,0,S,G),lt=new _e(0,0,S,G),gt=!1,$=new js,q=!1,ht=!1,Rt=null,St=new ue,Ot=new ct,Ct=new U,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function It(){return R===null?K:1}let I=n;function pt(b,O){for(let V=0;V<b.length;V++){let Z=b[V],Y=e.getContext(Z,O);if(Y!==null)return Y}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",F,!1),e.addEventListener("webglcontextcreationerror",P,!1),I===null){let O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),I=pt(O,b),I===null)throw pt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let it,ft,j,Et,_t,A,y,D,k,tt,et,rt,st,mt,Ft,Xt,ut,re,Qt,kt,Ut,yt,qt,oe;function fe(){it=new lm(I),ft=new nm(I,it,t),it.init(ft),yt=new k0(I,it,ft),j=new z0(I,it,ft),Et=new um(I),_t=new T0,A=new B0(I,it,j,_t,ft,yt,Et),y=new sm(x),D=new am(x),k=new _d(I,ft),qt=new tm(I,it,k,ft),tt=new cm(I,k,Et,qt),et=new mm(I,tt,k,Et),Qt=new pm(I,ft,A),Xt=new im(_t),rt=new E0(x,y,D,it,ft,qt,Xt),st=new G0(x,_t),mt=new R0,Ft=new U0(it,ft),re=new jp(x,y,D,j,et,f,l),ut=new F0(x,et,ft),oe=new V0(I,Et,ft,j),kt=new em(I,it,Et,ft),Ut=new hm(I,it,Et,ft),Et.programs=rt.programs,x.capabilities=ft,x.extensions=it,x.properties=_t,x.renderLists=mt,x.shadowMap=ut,x.state=j,x.info=Et}fe();let $t=new ja(x,I);this.xr=$t,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let b=it.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=it.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(S,G,!1))},this.getSize=function(b){return b.set(S,G)},this.setSize=function(b,O,V=!0){if($t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=b,G=O,e.width=Math.floor(b*K),e.height=Math.floor(O*K),V===!0&&(e.style.width=b+"px",e.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(S*K,G*K).floor()},this.setDrawingBufferSize=function(b,O,V){S=b,G=O,K=V,e.width=Math.floor(b*V),e.height=Math.floor(O*V),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(at)},this.setViewport=function(b,O,V,Z){b.isVector4?at.set(b.x,b.y,b.z,b.w):at.set(b,O,V,Z),j.viewport(E.copy(at).multiplyScalar(K).floor())},this.getScissor=function(b){return b.copy(lt)},this.setScissor=function(b,O,V,Z){b.isVector4?lt.set(b.x,b.y,b.z,b.w):lt.set(b,O,V,Z),j.scissor(z.copy(lt).multiplyScalar(K).floor())},this.getScissorTest=function(){return gt},this.setScissorTest=function(b){j.setScissorTest(gt=b)},this.setOpaqueSort=function(b){nt=b},this.setTransparentSort=function(b){Q=b},this.getClearColor=function(b){return b.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(b=!0,O=!0,V=!0){let Z=0;if(b){let Y=!1;if(R!==null){let wt=R.texture.format;Y=wt===wh||wt===Sh||wt===bh}if(Y){let wt=R.texture.type,Lt=wt===si||wt===ei||wt===Al||wt===Pi||wt===yh||wt===Mh,Bt=re.getClearColor(),Wt=re.getClearAlpha(),te=Bt.r,Jt=Bt.g,Kt=Bt.b;Lt?(d[0]=te,d[1]=Jt,d[2]=Kt,d[3]=Wt,I.clearBufferuiv(I.COLOR,0,d)):(g[0]=te,g[1]=Jt,g[2]=Kt,g[3]=Wt,I.clearBufferiv(I.COLOR,0,g))}else Z|=I.COLOR_BUFFER_BIT}O&&(Z|=I.DEPTH_BUFFER_BIT),V&&(Z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",F,!1),e.removeEventListener("webglcontextcreationerror",P,!1),mt.dispose(),Ft.dispose(),_t.dispose(),y.dispose(),D.dispose(),et.dispose(),qt.dispose(),oe.dispose(),rt.dispose(),$t.dispose(),$t.removeEventListener("sessionstart",zt),$t.removeEventListener("sessionend",dt),Rt&&(Rt.dispose(),Rt=null),Ht.stop()};function vt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let b=Et.autoReset,O=ut.enabled,V=ut.autoUpdate,Z=ut.needsUpdate,Y=ut.type;fe(),Et.autoReset=b,ut.enabled=O,ut.autoUpdate=V,ut.needsUpdate=Z,ut.type=Y}function P(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function B(b){let O=b.target;O.removeEventListener("dispose",B),J(O)}function J(b){ot(b),_t.remove(b)}function ot(b){let O=_t.get(b).programs;O!==void 0&&(O.forEach(function(V){rt.releaseProgram(V)}),b.isShaderMaterial&&rt.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,V,Z,Y,wt){O===null&&(O=xt);let Lt=Y.isMesh&&Y.matrixWorld.determinant()<0,Bt=_n(b,O,V,Z,Y);j.setMaterial(Z,Lt);let Wt=V.index,te=1;if(Z.wireframe===!0){if(Wt=tt.getWireframeAttribute(V),Wt===void 0)return;te=2}let Jt=V.drawRange,Kt=V.attributes.position,Te=Jt.start*te,sn=(Jt.start+Jt.count)*te;wt!==null&&(Te=Math.max(Te,wt.start*te),sn=Math.min(sn,(wt.start+wt.count)*te)),Wt!==null?(Te=Math.max(Te,0),sn=Math.min(sn,Wt.count)):Kt!=null&&(Te=Math.max(Te,0),sn=Math.min(sn,Kt.count));let Ne=sn-Te;if(Ne<0||Ne===1/0)return;qt.setup(Y,Z,Bt,V,Wt);let In,ve=kt;if(Wt!==null&&(In=k.get(Wt),ve=Ut,ve.setIndex(In)),Y.isMesh)Z.wireframe===!0?(j.setLineWidth(Z.wireframeLinewidth*It()),ve.setMode(I.LINES)):ve.setMode(I.TRIANGLES);else if(Y.isLine){let ee=Z.linewidth;ee===void 0&&(ee=1),j.setLineWidth(ee*It()),Y.isLineSegments?ve.setMode(I.LINES):Y.isLineLoop?ve.setMode(I.LINE_LOOP):ve.setMode(I.LINE_STRIP)}else Y.isPoints?ve.setMode(I.POINTS):Y.isSprite&&ve.setMode(I.TRIANGLES);if(Y.isBatchedMesh)ve.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)ve.renderInstances(Te,Ne,Y.count);else if(V.isInstancedBufferGeometry){let ee=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Wo=Math.min(V.instanceCount,ee);ve.renderInstances(Te,Ne,Wo)}else ve.render(Te,Ne)};function bt(b,O,V){b.transparent===!0&&b.side===me&&b.forceSinglePass===!1?(b.side=Fe,b.needsUpdate=!0,Hi(b,O,V),b.side=oi,b.needsUpdate=!0,Hi(b,O,V),b.side=me):Hi(b,O,V)}this.compile=function(b,O,V=null){V===null&&(V=b),m=Ft.get(V),m.init(),v.push(m),V.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),b!==V&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(O.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(x._useLegacyLights);let Z=new Set;return b.traverse(function(Y){let wt=Y.material;if(wt)if(Array.isArray(wt))for(let Lt=0;Lt<wt.length;Lt++){let Bt=wt[Lt];bt(Bt,V,Y),Z.add(Bt)}else bt(wt,V,Y),Z.add(wt)}),v.pop(),m=null,Z},this.compileAsync=function(b,O,V=null){let Z=this.compile(b,O,V);return new Promise(Y=>{function wt(){if(Z.forEach(function(Lt){_t.get(Lt).currentProgram.isReady()&&Z.delete(Lt)}),Z.size===0){Y(b);return}setTimeout(wt,10)}it.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let At=null;function Pt(b){At&&At(b)}function zt(){Ht.stop()}function dt(){Ht.start()}let Ht=new Lh;Ht.setAnimationLoop(Pt),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(b){At=b,$t.setAnimationLoop(b),b===null?Ht.stop():Ht.start()},$t.addEventListener("sessionstart",zt),$t.addEventListener("sessionend",dt),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$t.enabled===!0&&$t.isPresenting===!0&&($t.cameraAutoUpdate===!0&&$t.updateCamera(O),O=$t.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,O,R),m=Ft.get(b,v.length),m.init(),v.push(m),St.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$.setFromProjectionMatrix(St),ht=this.localClippingEnabled,q=Xt.init(this.clippingPlanes,ht),_=mt.get(b,p.length),_.init(),p.push(_),Yt(b,O,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(nt,Q),this.info.render.frame++,q===!0&&Xt.beginShadows();let V=m.state.shadowsArray;if(ut.render(V,b,O),q===!0&&Xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(_,b),m.setupLights(x._useLegacyLights),O.isArrayCamera){let Z=O.cameras;for(let Y=0,wt=Z.length;Y<wt;Y++){let Lt=Z[Y];Vt(_,b,Lt,Lt.viewport)}}else Vt(_,b,O);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(x,b,O),qt.resetDefaultState(),N=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Yt(b,O,V,Z){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){Z&&Ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(St);let Lt=et.update(b),Bt=b.material;Bt.visible&&_.push(b,Lt,Bt,V,Ct.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){let Lt=et.update(b),Bt=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ct.copy(b.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Ct.copy(Lt.boundingSphere.center)),Ct.applyMatrix4(b.matrixWorld).applyMatrix4(St)),Array.isArray(Bt)){let Wt=Lt.groups;for(let te=0,Jt=Wt.length;te<Jt;te++){let Kt=Wt[te],Te=Bt[Kt.materialIndex];Te&&Te.visible&&_.push(b,Lt,Te,V,Ct.z,Kt)}}else Bt.visible&&_.push(b,Lt,Bt,V,Ct.z,null)}}let wt=b.children;for(let Lt=0,Bt=wt.length;Lt<Bt;Lt++)Yt(wt[Lt],O,V,Z)}function Vt(b,O,V,Z){let Y=b.opaque,wt=b.transmissive,Lt=b.transparent;m.setupLightsView(V),q===!0&&Xt.setGlobalState(x.clippingPlanes,V),wt.length>0&&ae(Y,wt,O,V),Z&&j.viewport(E.copy(Z)),Y.length>0&&pe(Y,O,V),wt.length>0&&pe(wt,O,V),Lt.length>0&&pe(Lt,O,V),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function ae(b,O,V,Z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let wt=ft.isWebGL2;Rt===null&&(Rt=new Ke(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")?wn:si,minFilter:Qs,samples:wt?4:0})),x.getDrawingBufferSize(Ot),wt?Rt.setSize(Ot.x,Ot.y):Rt.setSize(za(Ot.x),za(Ot.y));let Lt=x.getRenderTarget();x.setRenderTarget(Rt),x.getClearColor(X),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let Bt=x.toneMapping;x.toneMapping=ii,pe(b,V,Z),A.updateMultisampleRenderTarget(Rt),A.updateRenderTargetMipmap(Rt);let Wt=!1;for(let te=0,Jt=O.length;te<Jt;te++){let Kt=O[te],Te=Kt.object,sn=Kt.geometry,Ne=Kt.material,In=Kt.group;if(Ne.side===me&&Te.layers.test(Z.layers)){let ve=Ne.side;Ne.side=Fe,Ne.needsUpdate=!0,nn(Te,V,Z,sn,Ne,In),Ne.side=ve,Ne.needsUpdate=!0,Wt=!0}}Wt===!0&&(A.updateMultisampleRenderTarget(Rt),A.updateRenderTargetMipmap(Rt)),x.setRenderTarget(Lt),x.setClearColor(X,L),x.toneMapping=Bt}function pe(b,O,V){let Z=O.isScene===!0?O.overrideMaterial:null;for(let Y=0,wt=b.length;Y<wt;Y++){let Lt=b[Y],Bt=Lt.object,Wt=Lt.geometry,te=Z===null?Lt.material:Z,Jt=Lt.group;Bt.layers.test(V.layers)&&nn(Bt,O,V,Wt,te,Jt)}}function nn(b,O,V,Z,Y,wt){b.onBeforeRender(x,O,V,Z,Y,wt),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(x,O,V,Z,b,wt),Y.transparent===!0&&Y.side===me&&Y.forceSinglePass===!1?(Y.side=Fe,Y.needsUpdate=!0,x.renderBufferDirect(V,O,Z,Y,b,wt),Y.side=oi,Y.needsUpdate=!0,x.renderBufferDirect(V,O,Z,Y,b,wt),Y.side=me):x.renderBufferDirect(V,O,Z,Y,b,wt),b.onAfterRender(x,O,V,Z,Y,wt)}function Hi(b,O,V){O.isScene!==!0&&(O=xt);let Z=_t.get(b),Y=m.state.lights,wt=m.state.shadowsArray,Lt=Y.state.version,Bt=rt.getParameters(b,Y.state,wt,O,V),Wt=rt.getProgramCacheKey(Bt),te=Z.programs;Z.environment=b.isMeshStandardMaterial?O.environment:null,Z.fog=O.fog,Z.envMap=(b.isMeshStandardMaterial?D:y).get(b.envMap||Z.environment),te===void 0&&(b.addEventListener("dispose",B),te=new Map,Z.programs=te);let Jt=te.get(Wt);if(Jt!==void 0){if(Z.currentProgram===Jt&&Z.lightsStateVersion===Lt)return Us(b,Bt),Jt}else Bt.uniforms=rt.getUniforms(b),b.onBuild(V,Bt,x),b.onBeforeCompile(Bt,x),Jt=rt.acquireProgram(Bt,Wt),te.set(Wt,Jt),Z.uniforms=Bt.uniforms;let Kt=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Kt.clippingPlanes=Xt.uniform),Us(b,Bt),Z.needsLights=Ns(b),Z.lightsStateVersion=Lt,Z.needsLights&&(Kt.ambientLightColor.value=Y.state.ambient,Kt.lightProbe.value=Y.state.probe,Kt.directionalLights.value=Y.state.directional,Kt.directionalLightShadows.value=Y.state.directionalShadow,Kt.spotLights.value=Y.state.spot,Kt.spotLightShadows.value=Y.state.spotShadow,Kt.rectAreaLights.value=Y.state.rectArea,Kt.ltc_1.value=Y.state.rectAreaLTC1,Kt.ltc_2.value=Y.state.rectAreaLTC2,Kt.pointLights.value=Y.state.point,Kt.pointLightShadows.value=Y.state.pointShadow,Kt.hemisphereLights.value=Y.state.hemi,Kt.directionalShadowMap.value=Y.state.directionalShadowMap,Kt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Kt.spotShadowMap.value=Y.state.spotShadowMap,Kt.spotLightMatrix.value=Y.state.spotLightMatrix,Kt.spotLightMap.value=Y.state.spotLightMap,Kt.pointShadowMap.value=Y.state.pointShadowMap,Kt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Z.currentProgram=Jt,Z.uniformsList=null,Jt}function Gi(b){if(b.uniformsList===null){let O=b.currentProgram.getUniforms();b.uniformsList=gs.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Us(b,O){let V=_t.get(b);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function _n(b,O,V,Z,Y){O.isScene!==!0&&(O=xt),A.resetTextureUnits();let wt=O.fog,Lt=Z.isMeshStandardMaterial?O.environment:null,Bt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Gn,Wt=(Z.isMeshStandardMaterial?D:y).get(Z.envMap||Lt),te=Z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Jt=!!V.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Kt=!!V.morphAttributes.position,Te=!!V.morphAttributes.normal,sn=!!V.morphAttributes.color,Ne=ii;Z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ne=x.toneMapping);let In=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ve=In!==void 0?In.length:0,ee=_t.get(Z),Wo=m.state.lights;if(q===!0&&(ht===!0||b!==M)){let un=b===M&&Z.id===N;Xt.setState(Z,b,un)}let Me=!1;Z.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Wo.state.version||ee.outputColorSpace!==Bt||Y.isBatchedMesh&&ee.batching===!1||!Y.isBatchedMesh&&ee.batching===!0||Y.isInstancedMesh&&ee.instancing===!1||!Y.isInstancedMesh&&ee.instancing===!0||Y.isSkinnedMesh&&ee.skinning===!1||!Y.isSkinnedMesh&&ee.skinning===!0||Y.isInstancedMesh&&ee.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ee.instancingColor===!1&&Y.instanceColor!==null||ee.envMap!==Wt||Z.fog===!0&&ee.fog!==wt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Xt.numPlanes||ee.numIntersection!==Xt.numIntersection)||ee.vertexAlphas!==te||ee.vertexTangents!==Jt||ee.morphTargets!==Kt||ee.morphNormals!==Te||ee.morphColors!==sn||ee.toneMapping!==Ne||ft.isWebGL2===!0&&ee.morphTargetsCount!==ve)&&(Me=!0):(Me=!0,ee.__version=Z.version);let yi=ee.currentProgram;Me===!0&&(yi=Hi(Z,O,Y));let Ol=!1,Os=!1,Xo=!1,Ve=yi.getUniforms(),Mi=ee.uniforms;if(j.useProgram(yi.program)&&(Ol=!0,Os=!0,Xo=!0),Z.id!==N&&(N=Z.id,Os=!0),Ol||M!==b){Ve.setValue(I,"projectionMatrix",b.projectionMatrix),Ve.setValue(I,"viewMatrix",b.matrixWorldInverse);let un=Ve.map.cameraPosition;un!==void 0&&un.setValue(I,Ct.setFromMatrixPosition(b.matrixWorld)),ft.logarithmicDepthBuffer&&Ve.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ve.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Os=!0,Xo=!0)}if(Y.isSkinnedMesh){Ve.setOptional(I,Y,"bindMatrix"),Ve.setOptional(I,Y,"bindMatrixInverse");let un=Y.skeleton;un&&(ft.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),Ve.setValue(I,"boneTexture",un.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Ve.setOptional(I,Y,"batchingTexture"),Ve.setValue(I,"batchingTexture",Y._matricesTexture,A));let qo=V.morphAttributes;if((qo.position!==void 0||qo.normal!==void 0||qo.color!==void 0&&ft.isWebGL2===!0)&&Qt.update(Y,V,yi),(Os||ee.receiveShadow!==Y.receiveShadow)&&(ee.receiveShadow=Y.receiveShadow,Ve.setValue(I,"receiveShadow",Y.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Mi.envMap.value=Wt,Mi.flipEnvMap.value=Wt.isCubeTexture&&Wt.isRenderTargetTexture===!1?-1:1),Os&&(Ve.setValue(I,"toneMappingExposure",x.toneMappingExposure),ee.needsLights&&Vi(Mi,Xo),wt&&Z.fog===!0&&st.refreshFogUniforms(Mi,wt),st.refreshMaterialUniforms(Mi,Z,K,G,Rt),gs.upload(I,Gi(ee),Mi,A)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(gs.upload(I,Gi(ee),Mi,A),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ve.setValue(I,"center",Y.center),Ve.setValue(I,"modelViewMatrix",Y.modelViewMatrix),Ve.setValue(I,"normalMatrix",Y.normalMatrix),Ve.setValue(I,"modelMatrix",Y.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let un=Z.uniformsGroups;for(let Yo=0,iu=un.length;Yo<iu;Yo++)if(ft.isWebGL2){let Fl=un[Yo];oe.update(Fl,yi),oe.bind(Fl,yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return yi}function Vi(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Ns(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,O,V){_t.get(b.texture).__webglTexture=O,_t.get(b.depthTexture).__webglTexture=V;let Z=_t.get(b);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=V===void 0,Z.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,O){let V=_t.get(b);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,V=0){R=b,C=O,T=V;let Z=!0,Y=null,wt=!1,Lt=!1;if(b){let Wt=_t.get(b);Wt.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(I.FRAMEBUFFER,null),Z=!1):Wt.__webglFramebuffer===void 0?A.setupRenderTarget(b):Wt.__hasExternalTextures&&A.rebindTextures(b,_t.get(b.texture).__webglTexture,_t.get(b.depthTexture).__webglTexture);let te=b.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Lt=!0);let Jt=_t.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Jt[O])?Y=Jt[O][V]:Y=Jt[O],wt=!0):ft.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?Y=_t.get(b).__webglMultisampledFramebuffer:Array.isArray(Jt)?Y=Jt[V]:Y=Jt,E.copy(b.viewport),z.copy(b.scissor),W=b.scissorTest}else E.copy(at).multiplyScalar(K).floor(),z.copy(lt).multiplyScalar(K).floor(),W=gt;if(j.bindFramebuffer(I.FRAMEBUFFER,Y)&&ft.drawBuffers&&Z&&j.drawBuffers(b,Y),j.viewport(E),j.scissor(z),j.setScissorTest(W),wt){let Wt=_t.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Wt.__webglTexture,V)}else if(Lt){let Wt=_t.get(b.texture),te=O||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Wt.__webglTexture,V||0,te)}N=-1},this.readRenderTargetPixels=function(b,O,V,Z,Y,wt,Lt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=_t.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Lt!==void 0&&(Bt=Bt[Lt]),Bt){j.bindFramebuffer(I.FRAMEBUFFER,Bt);try{let Wt=b.texture,te=Wt.format,Jt=Wt.type;if(te!==Sn&&yt.convert(te)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Kt=Jt===wn&&(it.has("EXT_color_buffer_half_float")||ft.isWebGL2&&it.has("EXT_color_buffer_float"));if(Jt!==si&&yt.convert(Jt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Jt===ni&&(ft.isWebGL2||it.has("OES_texture_float")||it.has("WEBGL_color_buffer_float")))&&!Kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-Z&&V>=0&&V<=b.height-Y&&I.readPixels(O,V,Z,Y,yt.convert(te),yt.convert(Jt),wt)}finally{let Wt=R!==null?_t.get(R).__webglFramebuffer:null;j.bindFramebuffer(I.FRAMEBUFFER,Wt)}}},this.copyFramebufferToTexture=function(b,O,V=0){let Z=Math.pow(2,-V),Y=Math.floor(O.image.width*Z),wt=Math.floor(O.image.height*Z);A.setTexture2D(O,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,b.x,b.y,Y,wt),j.unbindTexture()},this.copyTextureToTexture=function(b,O,V,Z=0){let Y=O.image.width,wt=O.image.height,Lt=yt.convert(V.format),Bt=yt.convert(V.type);A.setTexture2D(V,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,V.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Z,b.x,b.y,Y,wt,Lt,Bt,O.image.data):O.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Z,b.x,b.y,O.mipmaps[0].width,O.mipmaps[0].height,Lt,O.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,Z,b.x,b.y,Lt,Bt,O.image),Z===0&&V.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(b,O,V,Z,Y=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let wt=b.max.x-b.min.x+1,Lt=b.max.y-b.min.y+1,Bt=b.max.z-b.min.z+1,Wt=yt.convert(Z.format),te=yt.convert(Z.type),Jt;if(Z.isData3DTexture)A.setTexture3D(Z,0),Jt=I.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)A.setTexture2DArray(Z,0),Jt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Z.unpackAlignment);let Kt=I.getParameter(I.UNPACK_ROW_LENGTH),Te=I.getParameter(I.UNPACK_IMAGE_HEIGHT),sn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ne=I.getParameter(I.UNPACK_SKIP_ROWS),In=I.getParameter(I.UNPACK_SKIP_IMAGES),ve=V.isCompressedTexture?V.mipmaps[Y]:V.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ve.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ve.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,b.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,b.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,b.min.z),V.isDataTexture||V.isData3DTexture?I.texSubImage3D(Jt,Y,O.x,O.y,O.z,wt,Lt,Bt,Wt,te,ve.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Jt,Y,O.x,O.y,O.z,wt,Lt,Bt,Wt,ve.data)):I.texSubImage3D(Jt,Y,O.x,O.y,O.z,wt,Lt,Bt,Wt,te,ve),I.pixelStorei(I.UNPACK_ROW_LENGTH,Kt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Te),I.pixelStorei(I.UNPACK_SKIP_PIXELS,sn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),I.pixelStorei(I.UNPACK_SKIP_IMAGES,In),Y===0&&Z.generateMipmaps&&I.generateMipmap(Jt),j.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),j.unbindTexture()},this.resetState=function(){C=0,T=0,R=null,j.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Rl?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===Lo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===be?Li:Th}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Li?be:Gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},tl=class extends Ui{};tl.prototype.isWebGL1Renderer=!0;var mo=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},hi=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},go=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ze=new U,tr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},er=class extends Wn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},os,Hs=new U,as=new U,ls=new U,cs=new ct,Gs=new ct,zh=new ue,Gr=new U,Vs=new U,Vr=new U,sh=new ct,Ea=new ct,rh=new ct,xo=class extends Pe{constructor(t=new er){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new we;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new go(e,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new tr(n,3,0,!1)),os.setAttribute("uv",new tr(n,2,3,!1))}this.geometry=os,this.material=t,this.center=new ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),zh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-ls.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Wr(Gr.set(-.5,-.5,0),ls,o,as,s,r),Wr(Vs.set(.5,-.5,0),ls,o,as,s,r),Wr(Vr.set(.5,.5,0),ls,o,as,s,r),sh.set(0,0),Ea.set(1,0),rh.set(1,1);let a=t.ray.intersectTriangle(Gr,Vs,Vr,!1,Hs);if(a===null&&(Wr(Vs.set(-.5,.5,0),ls,o,as,s,r),Ea.set(0,1),a=t.ray.intersectTriangle(Gr,Vr,Vs,!1,Hs),a===null))return;let l=t.ray.origin.distanceTo(Hs);l<t.near||l>t.far||e.push({distance:l,point:Hs.clone(),uv:Ci.getInterpolation(Hs,Gr,Vs,Vr,sh,Ea,rh,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Wr(i,t,e,n,s,r){cs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Gs.x=r*cs.x-s*cs.y,Gs.y=s*cs.x+r*cs.y):Gs.copy(cs),i.copy(t),i.x+=Gs.x,i.y+=Gs.y,i.applyMatrix4(zh)}var nr=class extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hs=new ue,oh=new ue,Xr=[],ah=new Vn,W0=new ue,Ws=new Gt,Xs=new Di,_o=class extends Gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nr(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,W0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),ah.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(ah)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Xs.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(n),t.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),oh.multiplyMatrices(n,hs),Ws.matrixWorld=oh,Ws.raycast(t,Xr);for(let o=0,a=Xr.length;o<a;o++){let l=Xr[o];l.instanceId=r,l.object=this,e.push(l)}Xr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ui=class extends mn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new U,s=[],r=[],o=[],a=new U,l=new ue;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(qe(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(qe(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ir=class extends gn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){let n=e||new ct,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},el=class extends ir{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Pl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var qr=new U,Ta=new Pl,Aa=new Pl,Ra=new Pl,nl=class extends gn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(qr.subVectors(s[0],s[1]).add(s[0]),c=qr);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(qr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ta.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),Aa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),Ra.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ta.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Aa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ra.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ta.calc(l),Aa.calc(l),Ra.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function lh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function X0(i,t){let e=1-i;return e*e*t}function q0(i,t){return 2*(1-i)*i*t}function Y0(i,t){return i*i*t}function Js(i,t,e,n){return X0(i,t)+q0(i,e)+Y0(i,n)}function Z0(i,t){let e=1-i;return e*e*e*t}function J0(i,t){let e=1-i;return 3*e*e*i*t}function $0(i,t){return 3*(1-i)*i*i*t}function K0(i,t){return i*i*i*t}function $s(i,t,e,n,s){return Z0(i,t)+J0(i,e)+$0(i,n)+K0(i,s)}var vo=class extends gn{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},il=class extends gn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y),$s(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},yo=class extends gn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sl=class extends gn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Mo=class extends gn{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Js(t,s.x,r.x,o.x),Js(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rl=class extends gn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Js(t,s.x,r.x,o.x),Js(t,s.y,r.y,o.y),Js(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},bo=class extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(lh(a,l.x,c.x,h.x,u.x),lh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},ol=Object.freeze({__proto__:null,ArcCurve:el,CatmullRomCurve3:nl,CubicBezierCurve:vo,CubicBezierCurve3:il,EllipseCurve:ir,LineCurve:yo,LineCurve3:sl,QuadraticBezierCurve:Mo,QuadraticBezierCurve3:rl,SplineCurve:bo}),al=class extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ol[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ol[s.type]().fromJSON(s))}return this}},So=class extends al{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new yo(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Mo(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new vo(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new bo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new ir(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var di=class i extends we{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new U,h=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},fi=class i extends we{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=n/2,p=0;v(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ie(u,3)),this.setAttribute("normal",new ie(f,3)),this.setAttribute("uv",new ie(d,2));function v(){let w=new U,C=new U,T=0,R=(e-t)/n;for(let N=0;N<=r;N++){let M=[],E=N/r,z=E*(e-t)+t;for(let W=0;W<=s;W++){let X=W/s,L=X*l+a,S=Math.sin(L),G=Math.cos(L);C.x=z*S,C.y=-E*n+m,C.z=z*G,u.push(C.x,C.y,C.z),w.set(S,R,G).normalize(),f.push(w.x,w.y,w.z),d.push(X,1-E),M.push(g++)}_.push(M)}for(let N=0;N<s;N++)for(let M=0;M<r;M++){let E=_[M][N],z=_[M+1][N],W=_[M+1][N+1],X=_[M][N+1];h.push(E,z,X),h.push(z,W,X),T+=6}c.addGroup(p,T,0),p+=T}function x(w){let C=g,T=new ct,R=new U,N=0,M=w===!0?t:e,E=w===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*E,0),f.push(0,E,0),d.push(.5,.5),g++;let z=g;for(let W=0;W<=s;W++){let L=W/s*l+a,S=Math.cos(L),G=Math.sin(L);R.x=M*G,R.y=m*E,R.z=M*S,u.push(R.x,R.y,R.z),f.push(0,E,0),T.x=S*.5+.5,T.y=G*.5*E+.5,d.push(T.x,T.y),g++}for(let W=0;W<s;W++){let X=C+W,L=z+W;w===!0?h.push(L,L+1,X):h.push(L+1,L,X),N+=3}c.addGroup(p,N,w===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xn=class i extends fi{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wo=class i extends we{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(r.slice(),3)),this.setAttribute("uv",new ie(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let x=new U,w=new U,C=new U;for(let T=0;T<e.length;T+=3)d(e[T+0],x),d(e[T+1],w),d(e[T+2],C),l(x,w,C,v)}function l(v,x,w,C){let T=C+1,R=[];for(let N=0;N<=T;N++){R[N]=[];let M=v.clone().lerp(w,N/T),E=x.clone().lerp(w,N/T),z=T-N;for(let W=0;W<=z;W++)W===0&&N===T?R[N][W]=M:R[N][W]=M.clone().lerp(E,W/z)}for(let N=0;N<T;N++)for(let M=0;M<2*(T-N)-1;M++){let E=Math.floor(M/2);M%2===0?(f(R[N][E+1]),f(R[N+1][E]),f(R[N][E])):(f(R[N][E+1]),f(R[N+1][E+1]),f(R[N+1][E]))}}function c(v){let x=new U;for(let w=0;w<r.length;w+=3)x.x=r[w+0],x.y=r[w+1],x.z=r[w+2],x.normalize().multiplyScalar(v),r[w+0]=x.x,r[w+1]=x.y,r[w+2]=x.z}function h(){let v=new U;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];let w=m(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;o.push(w,1-C)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let x=o[v+0],w=o[v+2],C=o[v+4],T=Math.max(x,w,C),R=Math.min(x,w,C);T>.9&&R<.1&&(x<.2&&(o[v+0]+=1),w<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,x){let w=v*3;x.x=t[w+0],x.y=t[w+1],x.z=t[w+2]}function g(){let v=new U,x=new U,w=new U,C=new U,T=new ct,R=new ct,N=new ct;for(let M=0,E=0;M<r.length;M+=9,E+=6){v.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),w.set(r[M+6],r[M+7],r[M+8]),T.set(o[E+0],o[E+1]),R.set(o[E+2],o[E+3]),N.set(o[E+4],o[E+5]),C.copy(v).add(x).add(w).divideScalar(3);let z=m(C);_(T,E+0,v,z),_(R,E+2,x,z),_(N,E+4,w,z)}}function _(v,x,w,C){C<0&&v.x===1&&(o[x]=v.x-1),w.x===0&&w.z===0&&(o[x]=C/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var qn=class extends So{constructor(t){super(t),this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new So().fromJSON(s))}return this}},Q0={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Bh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=ig(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return sr(r,o,e,a,l,d,0),o}};function Bh(i,t,e,n,s){let r,o;if(s===pg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=ch(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=ch(r,i[r],i[r+1],o);return o&&Uo(o,o.next)&&(or(o),o=o.next),o}function Ni(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Uo(e,e.next)||ye(e.prev,e,e.next)===0)){if(or(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function sr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&lg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?tg(i,n,s,r):j0(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),or(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=eg(Ni(i),t,e),sr(i,t,e,n,s,r,2)):o===2&&ng(i,t,e,n,s,r):sr(Ni(i),t,e,n,s,r,1);break}}}function j0(i){let t=i.prev,e=i,n=i.next;if(ye(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&fs(s,a,r,l,o,c,g.x,g.y)&&ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function tg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ye(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=ll(d,g,t,e,n),v=ll(_,m,t,e,n),x=i.prevZ,w=i.nextZ;for(;x&&x.z>=p&&w&&w.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&fs(a,h,l,u,c,f,x.x,x.y)&&ye(x.prev,x,x.next)>=0||(x=x.prevZ,w.x>=d&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&fs(a,h,l,u,c,f,w.x,w.y)&&ye(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&fs(a,h,l,u,c,f,x.x,x.y)&&ye(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;w&&w.z<=v;){if(w.x>=d&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&fs(a,h,l,u,c,f,w.x,w.y)&&ye(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function eg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Uo(s,r)&&kh(s,n,n.next,r)&&rr(s,r)&&rr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),or(n),or(n.next),n=i=r),n=n.next}while(n!==i);return Ni(n)}function ng(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ug(o,a)){let l=Hh(o,a);o=Ni(o,o.next),l=Ni(l,l.next),sr(o,t,e,n,s,r,0),sr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ig(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Bh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(hg(c));for(s.sort(sg),r=0;r<s.length;r++)e=rg(s[r],e);return e}function sg(i,t){return i.x-t.x}function rg(i,t){let e=og(i,t);if(!e)return t;let n=Hh(e,i);return Ni(n,n.next),Ni(e,e.next)}function og(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&fs(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),rr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&ag(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function ag(i,t){return ye(i.prev,i,t.prev)<0&&ye(t.next,i,i.next)<0}function lg(i,t,e,n){let s=i;do s.z===0&&(s.z=ll(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cg(s)}function cg(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function ll(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function hg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ug(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!dg(i,t)&&(rr(i,t)&&rr(t,i)&&fg(i,t)&&(ye(i.prev,i,t.prev)||ye(i,t.prev,t))||Uo(i,t)&&ye(i.prev,i,i.next)>0&&ye(t.prev,t,t.next)>0)}function ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Uo(i,t){return i.x===t.x&&i.y===t.y}function kh(i,t,e,n){let s=Zr(ye(i,t,e)),r=Zr(ye(i,t,n)),o=Zr(ye(e,n,i)),a=Zr(ye(e,n,t));return!!(s!==r&&o!==a||s===0&&Yr(i,e,t)||r===0&&Yr(i,n,t)||o===0&&Yr(e,i,n)||a===0&&Yr(e,t,n))}function Yr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zr(i){return i>0?1:i<0?-1:0}function dg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&kh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function rr(i,t){return ye(i.prev,i,i.next)<0?ye(i,t,i.next)>=0&&ye(i,i.prev,t)>=0:ye(i,t,i.prev)<0||ye(i,i.next,t)<0}function fg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hh(i,t){let e=new cl(i.i,i.x,i.y),n=new cl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ch(i,t,e,n){let s=new cl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var ri=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];hh(t),uh(n,t);let o=t.length;e.forEach(hh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,uh(n,e[l]);let a=Q0.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function hh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function uh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ss=class i extends we{constructor(t=new qn([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new ie(s,3)),this.setAttribute("uv",new ie(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:mg,x,w=!1,C,T,R,N;p&&(x=p.getSpacedPoints(h),w=!0,f=!1,C=p.computeFrenetFrames(h,!1),T=new U,R=new U,N=new U),f||(m=0,d=0,g=0,_=0);let M=a.extractPoints(c),E=M.shape,z=M.holes;if(!ri.isClockWise(E)){E=E.reverse();for(let I=0,pt=z.length;I<pt;I++){let it=z[I];ri.isClockWise(it)&&(z[I]=it.reverse())}}let X=ri.triangulateShape(E,z),L=E;for(let I=0,pt=z.length;I<pt;I++){let it=z[I];E=E.concat(it)}function S(I,pt,it){return pt||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(pt,it)}let G=E.length,K=X.length;function nt(I,pt,it){let ft,j,Et,_t=I.x-pt.x,A=I.y-pt.y,y=it.x-I.x,D=it.y-I.y,k=_t*_t+A*A,tt=_t*D-A*y;if(Math.abs(tt)>Number.EPSILON){let et=Math.sqrt(k),rt=Math.sqrt(y*y+D*D),st=pt.x-A/et,mt=pt.y+_t/et,Ft=it.x-D/rt,Xt=it.y+y/rt,ut=((Ft-st)*D-(Xt-mt)*y)/(_t*D-A*y);ft=st+_t*ut-I.x,j=mt+A*ut-I.y;let re=ft*ft+j*j;if(re<=2)return new ct(ft,j);Et=Math.sqrt(re/2)}else{let et=!1;_t>Number.EPSILON?y>Number.EPSILON&&(et=!0):_t<-Number.EPSILON?y<-Number.EPSILON&&(et=!0):Math.sign(A)===Math.sign(D)&&(et=!0),et?(ft=-A,j=_t,Et=Math.sqrt(k)):(ft=_t,j=A,Et=Math.sqrt(k/2))}return new ct(ft/Et,j/Et)}let Q=[];for(let I=0,pt=L.length,it=pt-1,ft=I+1;I<pt;I++,it++,ft++)it===pt&&(it=0),ft===pt&&(ft=0),Q[I]=nt(L[I],L[it],L[ft]);let at=[],lt,gt=Q.concat();for(let I=0,pt=z.length;I<pt;I++){let it=z[I];lt=[];for(let ft=0,j=it.length,Et=j-1,_t=ft+1;ft<j;ft++,Et++,_t++)Et===j&&(Et=0),_t===j&&(_t=0),lt[ft]=nt(it[ft],it[Et],it[_t]);at.push(lt),gt=gt.concat(lt)}for(let I=0;I<m;I++){let pt=I/m,it=d*Math.cos(pt*Math.PI/2),ft=g*Math.sin(pt*Math.PI/2)+_;for(let j=0,Et=L.length;j<Et;j++){let _t=S(L[j],Q[j],ft);St(_t.x,_t.y,-it)}for(let j=0,Et=z.length;j<Et;j++){let _t=z[j];lt=at[j];for(let A=0,y=_t.length;A<y;A++){let D=S(_t[A],lt[A],ft);St(D.x,D.y,-it)}}}let $=g+_;for(let I=0;I<G;I++){let pt=f?S(E[I],gt[I],$):E[I];w?(R.copy(C.normals[0]).multiplyScalar(pt.x),T.copy(C.binormals[0]).multiplyScalar(pt.y),N.copy(x[0]).add(R).add(T),St(N.x,N.y,N.z)):St(pt.x,pt.y,0)}for(let I=1;I<=h;I++)for(let pt=0;pt<G;pt++){let it=f?S(E[pt],gt[pt],$):E[pt];w?(R.copy(C.normals[I]).multiplyScalar(it.x),T.copy(C.binormals[I]).multiplyScalar(it.y),N.copy(x[I]).add(R).add(T),St(N.x,N.y,N.z)):St(it.x,it.y,u/h*I)}for(let I=m-1;I>=0;I--){let pt=I/m,it=d*Math.cos(pt*Math.PI/2),ft=g*Math.sin(pt*Math.PI/2)+_;for(let j=0,Et=L.length;j<Et;j++){let _t=S(L[j],Q[j],ft);St(_t.x,_t.y,u+it)}for(let j=0,Et=z.length;j<Et;j++){let _t=z[j];lt=at[j];for(let A=0,y=_t.length;A<y;A++){let D=S(_t[A],lt[A],ft);w?St(D.x,D.y+x[h-1].y,x[h-1].x+it):St(D.x,D.y,u+it)}}}q(),ht();function q(){let I=s.length/3;if(f){let pt=0,it=G*pt;for(let ft=0;ft<K;ft++){let j=X[ft];Ot(j[2]+it,j[1]+it,j[0]+it)}pt=h+m*2,it=G*pt;for(let ft=0;ft<K;ft++){let j=X[ft];Ot(j[0]+it,j[1]+it,j[2]+it)}}else{for(let pt=0;pt<K;pt++){let it=X[pt];Ot(it[2],it[1],it[0])}for(let pt=0;pt<K;pt++){let it=X[pt];Ot(it[0]+G*h,it[1]+G*h,it[2]+G*h)}}n.addGroup(I,s.length/3-I,0)}function ht(){let I=s.length/3,pt=0;Rt(L,pt),pt+=L.length;for(let it=0,ft=z.length;it<ft;it++){let j=z[it];Rt(j,pt),pt+=j.length}n.addGroup(I,s.length/3-I,1)}function Rt(I,pt){let it=I.length;for(;--it>=0;){let ft=it,j=it-1;j<0&&(j=I.length-1);for(let Et=0,_t=h+m*2;Et<_t;Et++){let A=G*Et,y=G*(Et+1),D=pt+ft+A,k=pt+j+A,tt=pt+j+y,et=pt+ft+y;Ct(D,k,tt,et)}}}function St(I,pt,it){l.push(I),l.push(pt),l.push(it)}function Ot(I,pt,it){xt(I),xt(pt),xt(it);let ft=s.length/3,j=v.generateTopUV(n,s,ft-3,ft-2,ft-1);It(j[0]),It(j[1]),It(j[2])}function Ct(I,pt,it,ft){xt(I),xt(pt),xt(ft),xt(pt),xt(it),xt(ft);let j=s.length/3,Et=v.generateSideWallUV(n,s,j-6,j-3,j-2,j-1);It(Et[0]),It(Et[1]),It(Et[3]),It(Et[1]),It(Et[2]),It(Et[3])}function xt(I){s.push(l[I*3+0]),s.push(l[I*3+1]),s.push(l[I*3+2])}function It(I){r.push(I.x),r.push(I.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return gg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ol[s.type]().fromJSON(s)),new i(n,t.options)}},mg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-u),new ct(f,1-g),new ct(_,1-p)]:[new ct(a,1-l),new ct(h,1-u),new ct(d,1-g),new ct(m,1-p)]}};function gg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Eo=class i extends wo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Qe=class i extends wo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Oi=class i extends we{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new U,g=new ct;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let v=p+m,x=v,w=v+n+1,C=v+n+2,T=v+1;a.push(x,w,T),a.push(w,C,T)}}this.setIndex(a),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},To=class i extends we{constructor(t=new qn([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(r,3)),this.setAttribute("uv",new ie(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,g=f.holes;ri.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let v=g[m];ri.isClockWise(v)===!0&&(g[m]=v.reverse())}let _=ri.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let v=g[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){let v=d[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){let v=_[m],x=v[0]+u,w=v[1]+u,C=v[2]+u;n.push(x,w,C),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return xg(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function xg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var pi=class i extends we{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,f=new U,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let v=[],x=p/n,w=0;p===0&&o===0?w=.5/e:p===n&&l===Math.PI&&(w=-.5/e);for(let C=0;C<=e;C++){let T=C/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+w,1-x),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let x=h[p][v+1],w=h[p][v],C=h[p+1][v],T=h[p+1][v+1];(p!==0||o>0)&&d.push(x,w,T),(p!==n-1||l<Math.PI)&&d.push(w,C,T)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var an=class i extends we{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new U,u=new U,f=new U;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,v=(s+1)*d+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ao=class extends Wn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Nt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}},Ro=class extends Ie{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ye=class extends Wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ah,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Jr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _g(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ws=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hl=class extends ws{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mc,endingEnd:mc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gc:r=t,a=2*e-n;break;case xc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gc:o=t,l=2*n-e;break;case xc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,w=d*m-d*_;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+v*o[c+C]+x*o[l+C]+w*o[u+C];return r}},ul=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},dl=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jr(e,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Jr(t.times,Array),values:Jr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Kr:e=this.InterpolantFactoryMethodDiscrete;break;case Qr:e=this.InterpolantFactoryMethodLinear;break;case ta:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return Qr;case this.InterpolantFactoryMethodSmooth:return ta}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&_g(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ta,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Qr;var Fi=class extends Tn{};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Kr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends Tn{};fl.prototype.ValueTypeName="color";var pl=class extends Tn{};pl.prototype.ValueTypeName="number";var ml=class extends ws{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Pn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ar=class extends Tn{InterpolantFactoryMethodLinear(t){return new ml(this.times,this.values,this.getValueSize(),t)}};ar.prototype.ValueTypeName="quaternion";ar.prototype.DefaultInterpolation=Qr;ar.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Tn{};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=Kr;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends Tn{};gl.prototype.ValueTypeName="vector";var xl=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},vg=new xl,_l=class{constructor(t){this.manager=t!==void 0?t:vg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};_l.DEFAULT_MATERIAL_NAME="__DEFAULT";var Es=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Ts=class extends Es{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ca=new ue,dh=new U,fh=new U,lr=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new js,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(dh),fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fh),e.updateMatrixWorld(),Ca.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ca)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},vl=class extends lr{constructor(){super(new Le(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=io*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Co=class extends Es{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new vl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ph=new ue,qs=new U,Pa=new U,yl=class extends lr{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qs.setFromMatrixPosition(t.matrixWorld),n.position.copy(qs),Pa.copy(n.position),Pa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Pa),n.updateMatrixWorld(),s.makeTranslation(-qs.x,-qs.y,-qs.z),ph.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ph)}},ln=class extends Es{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ml=class extends lr{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mi=class extends Es{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Ml}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Po=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=mh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function mh(){return(typeof performance>"u"?Date:performance).now()}var Il="\\[\\]\\.:\\/",yg=new RegExp("["+Il+"]","g"),Ll="[^"+Il+"]",Mg="[^"+Il.replace("\\.","")+"]",bg=/((?:WC+[\/:])*)/.source.replace("WC",Ll),Sg=/(WCOD+)?/.source.replace("WCOD",Mg),wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ll),Eg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ll),Tg=new RegExp("^"+bg+Sg+wg+Eg+"$"),Ag=["material","materials","bones","map"],bl=class{constructor(t,e,n){let s=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yg,"")}static parseTrackName(t){let e=Tg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ag.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=bl;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Cs=class extends hi{constructor(t=null){super();let e=new En;e.deleteAttribute("uv");let n=new Ye({side:Fe}),s=new Ye,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let o=new ln(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Gt(e,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new Gt(e,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Gt(e,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Gt(e,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Gt(e,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let f=new Gt(e,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let d=new Gt(e,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let g=new Gt(e,Rs(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new Gt(e,Rs(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new Gt(e,Rs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new Gt(e,Rs(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let v=new Gt(e,Rs(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);let x=new Gt(e,Rs(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Rs(i){let t=new Be;return t.color.setScalar(i),t}function de(i,t=18,e=!0,n=!0){let s=[],r=[];for(let l of i)for(let c=0;c<t;c++){let h=c/t*Math.PI*2;s.push((l.x||0)+Math.sin(h)*l.rx,l.y,(l.z||0)+Math.cos(h)*l.rz)}for(let l=0;l<i.length-1;l++)for(let c=0;c<t;c++){let h=l*t+c,u=l*t+(c+1)%t,f=h+t,d=u+t;r.push(h,u,f,u,d,f)}let o=i.length;if(e){let l=i[0],c=s.length/3;s.push(l.x||0,l.y,l.z||0);for(let h=0;h<t;h++)r.push(c,(h+1)%t,h)}if(n){let l=i[o-1],c=s.length/3,h=(o-1)*t;s.push(l.x||0,l.y,l.z||0);for(let u=0;u<t;u++)r.push(c,h+u,h+(u+1)%t)}let a=new we;return a.setAttribute("position",new ie(s,3)),a.setIndex(r),a.computeVertexNormals(),a}function Ge(i,t,e,n=12,s=1){let r=[];r.push({y:t*.55,rx:t*.55,rz:t*.55*s});for(let a=0;a<=6;a++){let l=a/6,c=t+(e-t)*l;r.push({y:-i*l,rx:c,rz:c*s})}return r.push({y:-i-e*.5,rx:e*.6,rz:e*.6*s}),r.reverse(),de(r,n)}function Dt(i,t=.75,e=0,n){return new Ye(Object.assign({color:i,roughness:t,metalness:e},n||{}))}function H(i,t,e=0,n=0,s=0){let r=new Gt(i,t);return r.position.set(e,n,s),r.castShadow=!0,r}function Ae(i=0,t=0,e=0,...n){let s=new Se;return s.position.set(i,t,e),n.forEach(r=>r&&s.add(r)),s}var Zt=(i,t,e)=>new En(i,t,e),se=(i,t=14,e=10)=>new pi(i,t,e),Ee=(i,t,e,n=12,s=!1)=>new fi(i,t,e,n,1,s),je=(i,t,e=10)=>new Xn(i,t,e),ke=(i,t,e)=>i+(t-i)*e;function ki(i){i.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(e=>e.dispose())})}var xi=[[12173e3,6975353],[11915199,6126956],[11127270,5207705],[12824816,6967984],[15780966,10119698],[3814208,1380890],[16774354,14268512]],tn=[10725556,4906624,3718648,11566335,16096779,16731501,16773560];var Ps=()=>Dt(6964518,.8),No=()=>Dt(4861984,.85),cn=i=>Dt(xi[i][0],.28,.92),en=i=>Dt(xi[i][1],.4,.85),Yn=(i,t=1)=>Dt(tn[i],.2,.2,{emissive:tn[i],emissiveIntensity:t});function Gh(i,t=0){let e=new Se,n=(s,r,o,a)=>{let l=H(Zt(r,s,.012),cn(t),0,a/2+s/2,0);e.add(l);let c=H(je(r/2,r*1.4,4),cn(t),0,a/2+s+r*.7,0);c.scale.z=.14,c.rotation.y=Math.PI/4,e.add(c),e.add(H(Zt(r*.22,s*.9,.016),en(t),0,a/2+s*.47,0)),e.add(H(Zt(o,.03,.035),en(t),0,a/2+.005,0)),e.add(H(Ee(.016,.016,a,8),No())),e.add(H(se(.026,8,6),en(t),0,-a/2-.015,0)),t>=2&&e.add(H(new Qe(.02),Yn(t),0,a/2+.005,.022)),t>=3&&e.add(H(Zt(.008,s*.75,.02),Yn(t,1.4),0,a/2+s*.45,0))};switch(i){case"epee":n(.78,.06,.22,.16);break;case"dague":n(.3,.045,.12,.11);break;case"espadon":n(1.15,.11,.36,.3);break;case"lamecle":n(.9,.055,.14,.14),e.add(H(Zt(.09,.05,.014),en(t),.07,.86,0)),e.add(H(Zt(.07,.05,.014),en(t),.06,.74,0));{let s=H(new an(.06,.014,8,20),en(t),0,-.14,0);e.add(s)}break;case"masse":e.add(H(Ee(.018,.02,.7,8),Ps(),0,.25,0)),e.add(H(se(.085,12,8),cn(t),0,.64,0));for(let s=0;s<6;s++){let r=s/6*Math.PI*2,o=H(je(.025,.07,5),en(t),Math.sin(r)*.1,.64,Math.cos(r)*.1);o.rotation.set(Math.PI/2*Math.cos(r),0,-Math.PI/2*Math.sin(r)),e.add(o)}t>=2&&e.add(H(new Qe(.03),Yn(t),0,.745,0));break;case"guisarme":e.add(H(Ee(.017,.017,1.9,8),Ps(),0,.5,0));{let s=H(je(.03,.26,4),cn(t),0,1.57,0);s.scale.z=.3,e.add(s);let r=H(Ee(.2,.2,.014,16,!1),cn(t),.1,1.28,0);r.rotation.x=Math.PI/2,r.scale.set(1,1,1.25),e.add(r);let o=H(je(.04,.16,4),en(t),-.08,1.3,0);o.rotation.z=Math.PI/2,o.scale.z=.3,e.add(o),t>=2&&e.add(H(new Qe(.024),Yn(t),.02,1.28,.02))}break;case"baton":e.add(H(Ee(.016,.02,1.6,8),Ps(),0,.5,0));{let s=H(new an(.085,.014,8,20,Math.PI*1.4),cn(t),0,1.37,0);s.rotation.z=Math.PI*.8,e.add(s);let r=H(se(.055,14,10),Yn(t,1.5),0,1.38,0);e.add(r);let o=new ln(tn[t],.5,2.5);o.position.set(0,1.38,0),e.add(o)}break;case"arc":{let s=H(new an(.62,.016,8,28,Math.PI*.8),Ps(),-.5,.2,0);s.rotation.z=-Math.PI*.4,e.add(s);let r=.2+Math.sin(Math.PI*.4)*.62,o=-.5+Math.cos(Math.PI*.4)*.62;e.add(H(Ee(.003,.003,(r-.2)*2,4),Dt(15658734,.5),o,.2,0)),e.add(H(Ee(.022,.022,.14,8),No(),.12,.2,0)),t>=2&&e.add(H(new Qe(.02),Yn(t),.13,.3,0))}break;case"orbe":{e.add(H(se(.09,18,14),Dt(tn[t],.1,.1,{emissive:tn[t],emissiveIntensity:1.1})));let s=H(new an(.13,.008,6,28),cn(t));if(s.rotation.x=1.2,e.add(s),t>=3){let o=H(new an(.15,.006,6,28),cn(t));o.rotation.set(.4,.8,0),e.add(o)}let r=new ln(tn[t],.6,3);e.add(r)}break;case"grimoire":e.add(H(Zt(.2,.27,.06),No())),e.add(H(Zt(.18,.25,.064),Dt(15327174,.9),.012,0,0)),e.add(H(Zt(.205,.275,.05),Dt(xi[t][1],.6,.3),-.004,0,0)),e.add(H(new Qe(.03),Yn(t),0,0,.034));break;case"pistolet":e.add(H(Zt(.035,.26,.03),cn(t),0,.16,0)),e.add(H(Ee(.028,.028,.06,10),en(t),0,.07,0));{let s=H(Zt(.034,.13,.04),Ps(),0,-.02,-.03);s.rotation.x=-.35,e.add(s)}break;case"repercuteur":{let s=H(Ee(.075,.075,.9,14),cn(t),0,.35,0);e.add(s),e.add(H(Ee(.09,.09,.06,14),en(t),0,.78,0)),e.add(H(Ee(.085,.085,.07,14),en(t),0,.2,0)),e.add(H(se(.055,12,8),Yn(t,1.6),0,.8,0)),e.add(H(Zt(.04,.16,.05),No(),0,.05,-.1))}break;case"harpe":{let s=t>=4?cn(t):Dt(14264636,.3,.85);e.add(H(Ee(.02,.024,.95,8),s,.2,.42,0));let r=H(new an(.3,.02,8,18,Math.PI*.6),s,-.04,.72,0);r.rotation.z=Math.PI*.28,e.add(r);let o=H(Zt(.05,.92,.07),Ps(),-.1,.36,0);o.rotation.z=-.52,e.add(o);for(let a=0;a<7;a++){let l=-.2+a*.055,c=.28+a*.09;e.add(H(Ee(.0022,.0022,c,4),Dt(a%3?15985878:tn[t],.4,0,{emissive:a%3?0:tn[t],emissiveIntensity:.8}),l,.84-c/2-Math.abs(3-a)*.012,0))}}break;case"anneaux":{let s=[16734842,4704511,16765514];[[-.12,.1],[.12,.1],[0,-.1]].forEach(([r,o],a)=>{e.add(H(new an(.14,.018,8,24),cn(t),r,o,a*.02)),e.add(H(se(.05,10,8),Dt(s[a],.3,0,{emissive:s[a],emissiveIntensity:.6}),r,o,a*.02))})}break}return e}function Vh(i=0){let t=new qn;t.moveTo(-.24,.3),t.quadraticCurveTo(0,.37,.24,.3),t.lineTo(.24,.02),t.quadraticCurveTo(.24,-.26,0,-.42),t.quadraticCurveTo(-.24,-.26,-.24,.02),t.closePath();let e=new Ss(t,{depth:.03,bevelEnabled:!0,bevelSize:.012,bevelThickness:.012,bevelSegments:2}),n=Ae(0,0,0,H(e,cn(i)));return n.add(H(Zt(.05,.66,.012),en(i),0,-.04,.05)),n.add(H(Zt(.44,.05,.012),en(i),0,.06,.05)),n.add(H(se(.06,12,8),en(i),0,.06,.05)),i>=2&&n.add(H(new Qe(.034),Yn(i),0,.06,.1)),n}function Is(i){let t=new Se,e=Dt(i.b,.85),n=Dt(i.d,.85),s=i.len,r=i.h,o=i.r,a=r-o*.9,l=Ae(0,r,0);t.add(l);let c=H(de([{y:-s/2,rx:o*.55,rz:o*.6},{y:-s*.36,rx:o*.95,rz:o},{y:0,rx:o*(i.belly||1),rz:o*1.02},{y:s*.3,rx:o*1.02,rz:o*1.08},{y:s/2,rx:o*.62,rz:o*.75}],16),e);c.rotation.x=Math.PI/2,l.add(c);let h=Ae(0,o*.35,s*.42);h.rotation.x=i.neckA??.9,l.add(h),h.add(H(Ge(i.neck,o*.62,o*.42,12),e).rotateX(Math.PI));let u=Ae(0,i.neck,0);u.rotation.x=-(i.neckA??.9)+(i.headA??.25),h.add(u);let f=i.hs||o*.55,d=H(se(f,12,10),e);if(d.scale.set(.9,.95,1.1),u.add(d),i.beak){let v=H(je(f*.42,f*1.3,8),Dt(15116602,.5),0,-f*.15,f*1.25);v.rotation.x=Math.PI/2+.25,u.add(v)}else{let v=H(de([{y:0,rx:f*.7,rz:f*.62},{y:i.snout,rx:f*.42,rz:f*.4,z:-f*.1}],10),i.sn?Dt(i.sn,.85):e,0,-f*.2,f*.5);v.rotation.x=Math.PI/2,u.add(v),u.add(H(se(f*.14,6,5),Dt(723728,.4),0,-f*.15,f*.5+i.snout+f*.02))}for(let v of[-1,1]){if(u.add(H(se(f*.13,8,6),Dt(i.eye||723728,.3,0,i.eyeGlow?{emissive:i.eye,emissiveIntensity:1.5}:null),v*f*.72,f*.2,f*.55)),i.ear==="point"){let x=H(je(f*.3,f*.75,5),e,v*f*.5,f*.95,-f*.05);x.rotation.z=-v*.25,u.add(x)}else if(i.ear==="round")u.add(H(se(f*.28,8,6),e,v*f*.65,f*.75,0));else if(i.ear==="long"){let x=H(Ge(f*1.25,f*.34,f*.14,8,.45),e,v*f*.5,f*.6,-f*.1);x.rotation.set(Math.PI+.2,0,v*.35),u.add(x)}if(i.horns){let x=H(je(f*.2,f*1.3,6),Dt(i.horns,.5),v*f*.5,f*.9,-f*.5);x.rotation.x=-1,x.rotation.z=-v*.2,u.add(x)}}if(i.mane){let v=H(Zt(o*.16,i.neck*1.1,o*.5),Dt(i.mane,.9),0,i.neck*.5,-o*.62);h.add(v)}let g=[];for(let[v,x]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let w=Ae(v*o*.62,-o*.3,x*s*.33);l.add(w);let C=a*.52,T=a*.5;w.add(H(Ge(C,i.lw*1.35,i.lw,8),e));let R=Ae(0,-C,0);w.add(R),R.add(H(Ge(T,i.lw*.9,i.lw*.7,8),x>0||!i.d2?e:n));let N=H(se(i.lw*1.05,8,6),Dt(i.hoof||1381658,.6),0,-T-i.lw*.2,i.paw?i.lw*.5:0);N.scale.set(1,.6,i.paw?1.5:1),R.add(N),g.push({hip:w,knee:R,ph:(v*x>0?0:Math.PI)+(x<0?.6:0)})}let _=Ae(0,o*.35,-s*.48);if(l.add(_),i.tail==="bush"){let v=H(Ge(s*.4,o*.3,o*.14,8),e);v.rotation.x=1.9,_.add(v)}else if(i.tail==="hair"){let v=H(Ge(r*.55,o*.16,o*.26,8),Dt(i.mane||i.d,.9));v.rotation.x=.3,_.add(v)}else if(i.tail==="long"){let v=_;for(let w=0;w<6;w++){let C=Ae(0,w?-s*.16:0,0);C.rotation.x=w?-.2:1.85,C.add(H(Ge(s*.17,o*(.42-w*.06),o*(.36-w*.06),8),e)),v.add(C),v=C}let x=H(je(o*.2,o*.5,4),n,0,-s*.2,0);x.rotation.x=Math.PI,v.add(x),t.userData.tail=_}else{let v=H(se(o*.22,8,6),e);_.add(v)}let m=[];if(i.wings)for(let v of[-1,1]){let x=Ae(v*o*.7,o*.75,s*.12);l.add(x);let w=new qn,C=i.wings;w.moveTo(0,0),w.quadraticCurveTo(C*.5,C*.5,C,C*.28),w.lineTo(C*.82,0),w.lineTo(C*.72,-C*.22),w.lineTo(C*.52,-C*.08),w.lineTo(C*.42,-C*.3),w.lineTo(C*.22,-C*.14),w.lineTo(C*.12,-C*.3),w.closePath();let T=H(new To(w),Dt(i.wd||i.d,.8,0,{side:me,emissive:i.wd||i.d,emissiveIntensity:.28}));T.scale.x=v,T.rotation.x=1.15,T.castShadow=!1,x.add(T),m.push({w:x,s:v})}(i.extra||(()=>{}))(t,l,u,{body:e,dark:n});let p=0;return{group:t,seat:{y:r+o*.72,z:i.seatZ??0},wide:i.wide||.5,update(v,x){p+=v*(3+x*5)*(x>.02?1:0);let w=x>.02?.35+Math.min(1,x)*.3:0;for(let C of g){let T=Math.sin(p+C.ph);C.hip.rotation.x=T*w,C.knee.rotation.x=Math.max(0,Math.cos(p+C.ph))*w*1.3}l.position.y=r+(x>.02?Math.abs(Math.sin(p*2))*.03*r:Math.sin(performance.now()/700)*.005),h.rotation.x=(i.neckA??.9)+Math.sin(p*2)*.04;for(let{w:C,s:T}of m)C.rotation.z=T*(.25+Math.sin(performance.now()/(x>.02?160:600))*(x>.02?.45:.1))}}}function Rg(i){let t=new Se,e=Dt(921107,.35,.6),n=Dt(13225430,.2,.95),s=Dt(526346,.9),r=[];for(let u of[-.72,.78]){let f=Ae(0,.34,u),d=H(new an(.27,.085,10,24),s);d.rotation.y=Math.PI/2,f.add(d);let g=H(Ee(.12,.12,.08,12),n);g.rotation.z=Math.PI/2,f.add(g);for(let _=0;_<5;_++){let m=H(Zt(.02,.5,.03),n);m.rotation.x=_/5*Math.PI,f.add(m)}t.add(f),r.push(f)}let o=H(se(.26,14,10),e,0,.82,.2);o.scale.set(.7,.62,1.3),t.add(o),t.add(H(Zt(.3,.3,.55),Dt(2763312,.4,.8),0,.5,.05));let a=H(Zt(.3,.1,.62),Dt(1708560,.8),0,.8,-.38);t.add(a);let l=H(Ee(.025,.025,.8,8),n,0,.7,.66);l.rotation.x=-.42,t.add(l),t.add(H(Zt(.66,.03,.03),n,0,1.06,.5));let c=H(se(.2,12,8),e,0,.95,.62);c.scale.set(.9,.9,.7),t.add(c),t.add(H(se(.075,10,8),Dt(16774857,.2,0,{emissive:16773808,emissiveIntensity:2}),0,.93,.76)),t.add(H(Zt(.31,.02,.5),Dt(i,.3,0,{emissive:i,emissiveIntensity:1.2}),0,.665,.05));for(let u of[-1,1]){let f=H(Ee(.035,.045,.7,8),n,u*.17,.36,-.55);f.rotation.x=Math.PI/2-.12,t.add(f)}let h=new Co(16773824,2.2,22,.5,.6);return h.position.set(0,.93,.8),h.target.position.set(0,.2,8),t.add(h,h.target),{group:t,seat:{y:.86,z:-.32},wide:.42,update(u,f){for(let d of r)d.rotation.x+=u*f*22;t.position.y=0}}}var Zn={m0:{speed:1.7,make:()=>Is({b:7302776,d:4013125,sn:9144979,len:1.5,h:.82,r:.24,neck:.36,neckA:1.05,hs:.16,snout:.2,lw:.05,ear:"point",tail:"bush",eye:16757575,eyeGlow:!0,paw:!0,wide:.5})},m1:{speed:1.9,make:()=>Is({b:8016179,d:4861724,mane:2890769,len:2.1,h:1.36,r:.36,neck:.75,neckA:.6,headA:.75,hs:.19,snout:.34,lw:.07,ear:"point",tail:"hair",hoof:15327954,wide:.6,extra:(i,t)=>{let e=H(Zt(.5,.08,.6),Dt(3877406,.8),0,.37,-.05);t.add(e)}})},m2:{speed:2,make:()=>Is({b:6112820,d:3811870,sn:9071184,len:2.2,h:1.2,r:.5,belly:1.08,neck:.42,neckA:1.2,headA:.2,hs:.3,snout:.26,lw:.11,ear:"round",tail:"short",paw:!0,wide:.78,extra:(i,t)=>{let e=H(de([{y:-.6,rx:.5,rz:.2},{y:0,rx:.56,rz:.26},{y:.6,rx:.5,rz:.2}],14),Dt(xi[2][0],.3,.9),0,.33,0);e.rotation.x=Math.PI/2,t.add(e)}})},m3:{speed:2.9,make:()=>Rg(tn[3])},m4:{speed:2.5,make:()=>Is({b:13214570,d:9071162,wd:15331061,wings:1.6,beak:!0,len:2,h:1.25,r:.36,neck:.6,neckA:.5,headA:.6,hs:.2,lw:.07,ear:"point",tail:"long",eye:1708552,paw:!0,wide:.62,extra:(i,t,e)=>{let n=H(se(.2,10,8),Dt(15987699,.9),0,.02,-.04);n.scale.set(1.05,1.1,1.1),e.add(n)}})},m5:{speed:2.8,make:()=>Is({b:2893368,d:1380892,wd:4865378,wings:2.6,horns:9076896,len:3,h:1.55,r:.5,neck:1.1,neckA:.45,headA:.75,hs:.26,snout:.5,sn:3814216,lw:.11,tail:"long",eye:16731501,eyeGlow:!0,paw:!0,wide:.8,extra:(i,t)=>{for(let e=0;e<7;e++){let n=H(je(.06,.2,4),Dt(4865378,.6),0,.52,1-e*.33);t.add(n)}}})},m6:{speed:3.2,make:()=>Is({b:10130831,d:6972767,sn:15130838,mane:4867391,len:1.5,h:1,r:.27,neck:.48,neckA:.75,headA:.6,hs:.16,snout:.26,lw:.05,ear:"long",tail:"hair",wide:.52,extra:(i,t)=>{let e=H(de([{y:-.3,rx:.3,rz:.12},{y:.3,rx:.3,rz:.12}],12),Dt(8007466,.9),0,.2,-.02);e.rotation.x=Math.PI/2,t.add(e);let n=new ln(16773312,.7,6);n.position.set(0,1.2,0),i.add(n)}})}};var Dl={gender:"m",height:1,build:1,shoulders:1,legs:1,headSize:1,eyes:1,eyeGap:1,jaw:1,nose:1,brows:0,mouth:1,skin:"#e2b594",hair:"court",hairColor:"#2b2019",eyeColor:"#4a6b8a",beard:"aucune",lips:"#b9695f"},Wh=["court","brosse","mi-long","long","queue","chignon","boucles","rase"];function dr(i,t=1,e=0){return[{y:0,rx:.026*i,rz:.03,z:.034},{y:.022,rx:.056*i,rz:.058,z:.018},{y:.055,rx:.076*i,rz:.083,z:.007},{y:.095,rx:.088*(.5+i*.5),rz:.098,z:.001},{y:.135,rx:.093,rz:.104,z:-.002},{y:.175,rx:.09,rz:.102,z:-.005},{y:.208,rx:.07,rz:.082,z:-.007},{y:.228,rx:.04,rz:.048,z:-.008},{y:.236,rx:.012,rz:.014,z:-.008}].map(n=>({y:n.y,rx:n.rx*t,rz:n.rz*t,z:n.z-e}))}function Xh(i,t){for(let e=0;e<i.length-1;e++)if(t<=i[e+1].y){let n=(t-i[e].y)/(i[e+1].y-i[e].y);return{rx:ke(i[e].rx,i[e+1].rx,n),rz:ke(i[e].rz,i[e+1].rz,n),z:ke(i[e].z,i[e+1].z,n)}}return i[i.length-1]}function ur(i,t,e){let n=Xh(i,e),s=Math.min(.98,Math.abs(t)/n.rx);return n.z+n.rz*Math.sqrt(1-s*s)}function Cg(i,t,e,n){let s=i.gender==="f",r=new Se,o=dr(i.jaw*(s?.9:1.04));r.add(H(de(o,20),e));for(let C of[-1,1]){let T=H(se(.022,8,6),e,C*.09,.118,-.008);T.scale.set(.5,1,.8),r.add(T)}let a=.122,l=.036*i.eyeGap,c=i.eyes*(s?1.12:1),h=Dt(16184302,.35),u=Dt(i.eyeColor,.3),f=Dt(789002,.5),d=Dt(s?1182988:2760474,.8);for(let C of[-1,1]){let T=C*l,R=ur(o,T,a),N=Ae(T,a,R-.004);if(N.rotation.y=C*.2,t.closedEyes){let z=H(Zt(.03*c,.0035,.004),d,0,-.002,.004);N.add(z)}else{let z=H(se(.0155,12,8),h);z.scale.set(1.15*c,.78*c,.42),N.add(z);let W=H(se(.0086*c,10,8),u,0,-5e-4,.0046);W.scale.z=.4,N.add(W);let X=H(se(.0042*c,8,6),f,0,-5e-4,.0064);X.scale.z=.4,N.add(X);let L=H(se(.002,6,4),Dt(16777215,.2,0,{emissive:16777215}),.003,.003,.0085);N.add(L);let S=H(Zt(.036*c,s?.0052:.0034,.006),d,0,.0115*c,.004);S.rotation.z=-C*.06,N.add(S)}r.add(N);let M=ur(o,T,a+.027),E=H(Zt(.036,s?.005:.0075,.007),n,T,a+.026*(.9+c*.1)+.004,M);E.rotation.z=C*(.1-i.brows*.28),E.rotation.y=C*.25,r.add(E)}let g=ur(o,0,.088),_=H(de([{y:0,rx:.011,rz:.012,z:.006},{y:.012,rx:.0125,rz:.014,z:.004},{y:.04,rx:.007,rz:.008,z:-.004}],8),e,0,.078,g-.006);_.scale.set(i.nose*(s?.82:1),1,.7+i.nose*.5),r.add(_);let m=.052,p=ur(o,0,m),v=H(se(.012,10,6),Dt(i.lips,.5),0,m,p-.0065);v.scale.set(1.75*i.mouth*(s?1:1.08),s?.5:.34,.62),r.add(v);let x=H(Zt(.034*i.mouth,.0016,.004),Dt(4859424,.8),0,m+8e-4,p+.0012);if(r.add(x),!s&&i.beard&&i.beard!=="aucune"){let C=i.beard==="pleine",T=dr(i.jaw*1.04,C?1.07:1.025).filter(N=>N.y<=(C?.075:.06));T.forEach(N=>{N.z-=.004});let R=H(de(T,20,!0,!1),n,0,C?-.012:-.003,0);if(R.material=n.clone(),R.material.side=me,r.add(R),C){let N=H(Zt(.05,.009,.01),n,0,.066,ur(o,0,.066)+.001);r.add(N)}}let w=Pg(i,n,s);return w.name="hair",r.add(w),r.userData.rings=o,r}function Pg(i,t,e){let n=new Se,s=i.hair,r=(h,u,f)=>{let d=dr(1,h,0).filter(g=>g.y>=f).map(g=>({...g,z:g.z-u*Math.min(1.6,Math.max(0,(.172-g.y)/.045))}));return H(de(d,20,!1,!0),t)};if(s==="rase"){let h=r(1.018,.02,.125);return h.material=t.clone(),h.material.color.lerp(new Nt(i.skin),.45),n.add(h),n}let o=s==="boucles"?1.13:s==="brosse"?1.07:1.085,a=r(o,.03,s==="court"||s==="brosse"?.118:.1);a.material.side=me,n.add(a);let l=H(se(.07,14,8),t,0,.176,.052);l.scale.set(1.3,.36,.86),l.rotation.x=.78,n.add(l);let c=H(se(.085,14,8),t,0,.168,-.012);if(c.scale.set(1.14*o/1.085,.86,1.2),n.add(c),s==="brosse"){for(let u=0;u<14;u++){let f=u/14*Math.PI*2,d=.045+u%3*.012,g=H(je(.024,.085,6),t,Math.sin(f)*d,.225+u%2*.012,Math.cos(f)*d*1.05-.01);g.rotation.set(-.5+Math.cos(f)*.5,0,-Math.sin(f)*.6),n.add(g)}let h=H(je(.03,.09,6),t,0,.25,-.005);h.rotation.x=-.35,n.add(h)}if(s==="boucles")for(let h=0;h<22;h++){let u=h/22*Math.PI*2+h%2*.3,f=.13+h%4*.028,d=Xh(dr(1,1.1),f);if(Math.cos(u)>.55&&f<.2)continue;let g=H(se(.03,8,6),t,Math.sin(u)*d.rx,f,Math.cos(u)*d.rz+d.z-.01);n.add(g)}if(s==="mi-long"||s==="long"||s==="boucles"){let h=s==="long"?.36:s==="boucles"?.12:.15,u=H(de([{y:-h,rx:.085,rz:.03,z:-.085},{y:-h*.5,rx:.105,rz:.045,z:-.08},{y:.02,rx:.106,rz:.06,z:-.062},{y:.12,rx:.102,rz:.075,z:-.04},{y:.17,rx:.09,rz:.07,z:-.03}],16),t);n.add(u);for(let f of[-1,1]){let d=H(de([{y:-h*.8,rx:.018,rz:.03},{y:.03,rx:.024,rz:.045},{y:.16,rx:.02,rz:.05}],10),t,f*.092,0,-.012);n.add(d)}}if(s==="queue"){let h=H(se(.03,8,6),t,0,.19,-.105);n.add(h);let u=H(Ge(.3,.036,.012,10),t,0,.185,-.115);u.rotation.x=-.42,n.add(u)}if(s==="chignon"){let h=H(se(.045,12,8),t,0,.2,-.1);n.add(h)}if(e&&(s==="court"||s==="queue"||s==="chignon"))for(let h of[-1,1]){let u=H(Ge(.09,.016,.006,8),t,h*.086,.15,.03);u.rotation.z=h*.08,n.add(u)}return n}function fr(i={}){let t=Object.assign({},Dl,i.look||{}),e=i.fx||{},n=t.gender==="f",s=t.build,r=t.shoulders*(.55+s*.45),o=.35+s*.65,a=i.outfit||{cut:"uniform",c:["#3b4452","#222831","#19c8d8"]},l=new Nt(a.c[0]),c=new Nt(a.c[1]),h=new Nt(a.c[2]),u=i.showArmor!==!1&&i.armor||{},f=a.cut==="plate",d=Dt(t.skin,.62),g=Dt(t.hairColor,.55),_=(y,D=.85)=>Dt(y,f?.32:D,f?.85:0,a.glow?{emissive:y,emissiveIntensity:.35}:null),m=_(l),p=_(c),v=Dt(h,.5,f?.6:.1,a.glow?{emissive:h,emissiveIntensity:.5}:null),x=Dt(1513244,.6),w=Dt(921106,.5,.2),C=y=>Dt(xi[y][0],.3,.9),T=y=>Dt(xi[y][1],.4,.85),R=y=>Dt(tn[y],.2,.3,{emissive:tn[y],emissiveIntensity:.9}),N=.45*t.legs,M=.42*t.legs,E=N+M+.075,z=new Se,W=Ae(0,E,0);z.add(W);let X=Ae(0,0,0);W.add(X);let L=(n?[{y:-.08,rx:.1,rz:.085},{y:-.02,rx:.166,rz:.112},{y:.07,rx:.155,rz:.102},{y:.17,rx:.113,rz:.086},{y:.29,rx:.138,rz:.1,z:.012},{y:.355,rx:.15,rz:.108,z:.016},{y:.425,rx:.158*t.shoulders,rz:.09},{y:.485,rx:.13*t.shoulders,rz:.072},{y:.525,rx:.05,rz:.05}]:[{y:-.08,rx:.1,rz:.085},{y:-.02,rx:.152,rz:.106},{y:.08,rx:.148,rz:.1},{y:.17,rx:.138,rz:.096},{y:.3,rx:.165,rz:.11,z:.006},{y:.36,rx:.178,rz:.112,z:.008},{y:.43,rx:.188*t.shoulders,rz:.1},{y:.492,rx:.155*t.shoulders,rz:.08},{y:.53,rx:.058,rz:.058}]).map(y=>({y:y.y,rx:y.rx*s,rz:y.rz*(.45+s*.55),z:y.z||0})),S=a.cut==="cape"?Dt(5922920,.8):(a.cut==="apron",m);X.add(H(de(L,20),S));let G=n?.04:.047;X.add(H(Ee(G,G*1.12,.1,12),d,0,.56,0));let K=Ae(0,.585,.004);K.scale.setScalar(t.headSize),X.add(K);let nt=Cg(t,e,d,g);K.add(nt);let Q=(n?.172:.205)*r,at=.45,lt=n?[.044,.037]:[.054,.044],gt=n?[.036,.029]:[.043,.034],$=a.cut==="cape"?Dt(4870232,.8):a.cut==="coat"||a.cut==="blouse"||a.cut==="robe"||a.cut==="tail"||a.cut==="suit"||a.cut==="track"?m:(a.cut==="plate",p),q={hips:W,spine:X,head:K};for(let y of[-1,1]){let D=Ae(y*Q,at,0);D.rotation.z=y*.1,X.add(D),D.add(H(se(lt[0]*o*1.02,10,8),$)),D.add(H(Ge(.27,lt[0]*o,lt[1]*o,10),$));let k=Ae(0,-.27,0);if(D.add(k),e.oneArm&&y===-1)k.add(H(se(lt[1]*o*1.1,8,6),$));else{let et=a.cut==="robe"?1.7:1;k.add(H(Ge(.24,gt[0]*o,gt[1]*o*et,10),a.cut==="apron"?d:$));let rt=H(se(.04,10,8),d,0,-.275,0);if(rt.scale.set(.62,1.05,.9),k.add(rt),a.cut!=="apron"&&a.cut!=="robe"){let st=H(Ee(gt[1]*o*1.15,gt[1]*o*1.15,.03,10),v,0,-.225,0);k.add(st)}}q[y<0?"armL":"armR"]=D,q[y<0?"elbowL":"elbowR"]=k}let ht=(n?.086:.08)*s,Rt=n?[.087,.055]:[.083,.058],St=n?[.052,.035]:[.056,.039],Ot=a.cut==="track"||a.cut==="suit"||a.cut==="tail"?m:p;for(let y of[-1,1]){let D=Ae(y*ht,-.02,0);W.add(D),D.add(H(Ge(N,Rt[0]*o,Rt[1]*o,12),Ot));let k=Ae(0,-N,0);D.add(k),k.add(H(Ge(M,St[0]*o,St[1]*o,10),Ot));let tt=H(Ge(M*.45,St[1]*o*1.5,St[1]*o*1.25,10),x,0,-M*.55,0);k.add(tt);let et=H(se(.06,10,8),x,0,-M-.035,.05);if(et.scale.set(.78,.6,1.9),k.add(et),u.jambieres!=null){let rt=u.jambieres;k.add(H(Ge(M*.86,St[0]*o*1.34,St[1]*o*1.5,10,1.05),C(rt),0,-.02,.006));let st=H(se(.058*o,10,8),T(rt),0,.005,.03);st.scale.set(1,1.15,.8),k.add(st),rt>=2&&k.add(H(new Qe(.016),R(rt),0,.005,.078*o));let mt=H(se(.066,10,8),T(rt),0,-M-.03,.055);mt.scale.set(.82,.62,1.9),k.add(mt)}q[y<0?"legL":"legR"]=D,q[y<0?"kneeL":"kneeR"]=k}let Ct=L[3],xt=L[1],It=(y,D,k,tt,et)=>{let rt=[{y:D,rx:xt.rx*k,rz:xt.rz*(k*1.05)},{y:(y+D)*.45,rx:xt.rx*ke(1.1,k,.55),rz:xt.rz*ke(1.15,k,.55)},{y:-.02,rx:xt.rx*1.08,rz:xt.rz*1.12},{y,rx:Ct.rx*1.06,rz:Ct.rz*1.1}],st=tt.clone();st.side=me;let mt=H(de(rt,20,!1,!1),st);return W.add(mt),mt},I=()=>X.add(H(de([{y:.13,rx:Ct.rx*1.07,rz:Ct.rz*1.09},{y:.17,rx:Ct.rx*1.05,rz:Ct.rz*1.08}],20),w),H(Zt(.045,.045,.02),v,0,.15,Ct.rz*1.1)),pt=y=>{let D=L.reduce((k,tt)=>Math.abs(tt.y-y)<Math.abs(k.y-y)?tt:k);return D.rz+(D.z||0)},it=!1;switch(a.cut){case"uniform":I(),X.add(H(Zt(.014,.3,.012),v,0,.33,pt(.33)+.002)),X.add(H(de([{y:.5,rx:.068,rz:.066},{y:.545,rx:.058,rz:.06}],14,!1,!1),v));break;case"track":X.add(H(Zt(.012,.42,.012),v,0,.3,pt(.33)+.002)),X.add(H(de([{y:.5,rx:.07,rz:.07},{y:.55,rx:.06,rz:.062}],14,!1,!1),v));break;case"apron":{let y=v.clone();y.side=me;let D=[{y:-N*.95,rx:xt.rx*1.12,rz:xt.rz*1.2},{y:-.02,rx:xt.rx*1.06,rz:xt.rz*1.14},{y:.17,rx:Ct.rx*1.05,rz:Ct.rz*1.12}],k=H(de(D,20,!1,!1),y);W.add(k),k.geometry.translate(0,0,0);{let et=k.geometry.attributes.position,rt=[],st=k.geometry.index.array;for(let mt=0;mt<st.length;mt+=3)(et.getZ(st[mt])+et.getZ(st[mt+1])+et.getZ(st[mt+2]))/3>.035&&rt.push(st[mt],st[mt+1],st[mt+2]);k.geometry.setIndex(rt)}let tt=H(Zt(.17,.2,.012),v,0,.36,pt(.36)+.008);X.add(tt),I();break}case"coat":It(.17,-N*.95,n?1.5:1.28,m),I(),X.add(H(de([{y:.47,rx:.1,rz:.085},{y:.555,rx:.075,rz:.075}],14,!1,!1),(()=>{let y=p.clone();return y.side=me,y})()));break;case"blouse":It(.17,-N*.8,1.2,m),X.add(H(Zt(.05,.05,.012),v,Q*.45,.36,pt(.36)+.004));{let y=H(Ee(.062*o,.062*o,.05,10),v,0,-.12,0);q.armL.add(y)}break;case"robe":It(.17,-(E-.07),n?1.95:1.5,m),it=!0,X.add(H(de([{y:.14,rx:Ct.rx*1.08,rz:Ct.rz*1.1},{y:.2,rx:Ct.rx*1.07,rz:Ct.rz*1.1}],20),v)),X.add(H(Zt(.04,.3,.012),v,0,-.02,xt.rz*1.2));break;case"suit":X.add(H(Zt(.07,.2,.012),v,0,.4,pt(.4)+.001)),X.add(H(Zt(.028,.19,.014),p,0,.385,pt(.4)+.004));break;case"cape":{let y=m.clone();y.side=me,X.add(H(de([{y:-E*.62,rx:.3,rz:.035,z:-.2},{y:-.1,rx:.26,rz:.05,z:-.16},{y:.3,rx:.21*r,rz:.06,z:-.1},{y:.47,rx:.2*r,rz:.11,z:-.02}],16,!1,!1),y)),X.add(H(de([{y:.4,rx:.235*r,rz:.13},{y:.47,rx:.2*r,rz:.115},{y:.53,rx:.075,rz:.075}],18,!1,!1),y)),X.add(H(new Qe(.022),Dt(h,.2,.5,{emissive:h,emissiveIntensity:.5}),0,.47,.115)),I();break}case"plate":{for(let y of[-1,1]){let D=H(se(.095,12,8),m,y*Q*1.02,at+.035,0);D.scale.set(1.15,.72,1.1),X.add(D)}X.add(H(new Qe(.026),Dt(h,.2,.4,{emissive:h,emissiveIntensity:.8}),0,.36,pt(.36)+.012)),It(.17,-N*.5,1.22,v),I();break}case"tail":{X.add(H(Zt(.075,.22,.012),v,0,.39,pt(.4)+.001));for(let D of[-1,1]){let k=H(Zt(.11,.42,.014),p,D*.062,-.2,-xt.rz*1.05);k.rotation.x=.1,W.add(k)}let y=H(Zt(.06,.02,.014),p,0,.5,pt(.49)+.012);X.add(y);break}}if(u.plastron!=null){let y=u.plastron,D=L.filter(k=>k.y>=.16&&k.y<=.5).map(k=>({y:k.y,rx:k.rx*1.1,rz:k.rz*1.16,z:k.z}));D.push({y:.525,rx:.085,rz:.08,z:0}),X.add(H(de(D,20,!1,!1),(()=>{let k=C(y);return k.side=me,k})()));for(let k of[-1,1]){let tt=H(se(.092,12,8),T(y),k*Q*1.04,at+.04,0);if(tt.scale.set(1.18+y*.03,.7,1.12),X.add(tt),y>=4){let et=H(je(.028,.1,6),C(y),k*Q*1.18,at+.09,0);et.rotation.z=-k*.7,X.add(et)}}X.add(H(Zt(.016,.26,.014),T(y),0,.31,pt(.31)*1.16+.004)),y>=2&&X.add(H(new Qe(.028),R(y),0,.37,pt(.37)*1.16+.014))}if(u.casque!=null){let y=u.casque,D=dr(1.05,1.13,0).filter(rt=>rt.y>=.1),k=C(y);k.side=me;let tt=H(de(D.map(rt=>({...rt,z:rt.z-.012*Math.max(0,(.2-rt.y)/.1)})),20,!1,!0),k);K.add(tt);for(let rt of[-1,1]){let st=H(Zt(.012,.11,.07),T(y),rt*.103,.075,.02);K.add(st)}if(K.add(H(Zt(.02,.03,.24),T(y),0,.24,-.01)),y>=2&&K.add(H(new Qe(.014),R(y),0,.195,.1)),y>=3){let rt=H(de([{y:0,rx:.012,rz:.1},{y:.07,rx:.01,rz:.12,z:-.03},{y:.11,rx:.004,rz:.05,z:-.09}],8),Dt(tn[y],.7),0,.24,-.01);K.add(rt)}if(y>=5)for(let rt of[-1,1]){let st=H(je(.022,.12,6),C(y),rt*.11,.2,-.02);st.rotation.z=-rt*.9,K.add(st)}let et=nt.getObjectByName("hair");et&&["brosse","boucles","chignon","court","rase"].includes(t.hair)?et.visible=!1:et&&et.children.forEach((rt,st)=>{st===1&&(rt.visible=!1)})}let ft=Ae(0,.3,-(L[4].rz+.045));X.add(ft),i.main&&i.main.type&&Et(i.main,1),i.off&&i.off.type&&i.off.type!=="bouclier"&&Et(i.off,-1);let j=i.off&&i.off.type==="bouclier"?i.off.r:u.bouclier;if(j!=null&&!e.oneArm){let y=Vh(j);y.position.set(-.05,-.13,0),y.rotation.y=-Math.PI/2,y.scale.setScalar(.8),q.elbowL.add(y)}function Et(y,D){let k=Gh(y.type,y.r),tt=["espadon","guisarme","baton","lamecle","arc","harpe","repercuteur","epee","masse"];y.type==="orbe"?(k.position.set(-D*.3,.52,.12),X.add(k),q.orb=k):y.type==="grimoire"?(k.position.set(D*(xt.rx+.03),.02,.02),k.rotation.set(0,D*Math.PI/2,.1),X.add(k)):y.type==="pistolet"||y.type==="dague"?(k.position.set(D*(xt.rx+.035),.04,0),k.rotation.set(Math.PI+.25,0,0),k.scale.setScalar(.9),W.add(k)):y.type==="anneaux"?(k.position.set(0,.02,.01),k.rotation.x=Math.PI/2-.2,k.scale.setScalar(.85),ft.add(k)):y.type==="guisarme"||y.type==="baton"?(k.position.set(-D*.12,-.62,0),k.rotation.z=D*.3,ft.add(k)):y.type==="arc"?(k.position.set(D*.1,0,0),k.rotation.z=D*.25,ft.add(k)):y.type==="harpe"?(k.position.set(0,-.45,-.03),k.scale.setScalar(.85),ft.add(k)):tt.includes(y.type)&&(k.position.set(D*.17,.2,0),k.rotation.z=D*(Math.PI-.5),ft.add(k))}if(i.aura){let y=new Nt(i.aura),D=new Gt(new Oi(.42,.56,40),new Be({color:y,transparent:!0,opacity:.55,side:me,blending:Cn,depthWrite:!1}));D.rotation.x=-Math.PI/2,D.position.y=.02,z.add(D),q.aura=D;let k=new Gt(Ee(.5,.42,1.5,24,!0),new Be({color:y,transparent:!0,opacity:.1,side:me,blending:Cn,depthWrite:!1}));k.position.y=.75,z.add(k),q.auraCol=k}if(e.shadow){let y=new Ye({color:1315871,roughness:.9,transparent:!0,opacity:.72,emissive:1710656,emissiveIntensity:.5});z.traverse(D=>{D.isMesh&&D.material&&!D.material.emissiveIntensity&&(D.material=y)})}z.scale.setScalar(t.height),z.traverse(y=>{y.isMesh&&!y.material.transparent?y.castShadow=!0:y.isMesh&&(y.castShadow=!1)});let _t=Math.random()*6,A={group:z,joints:q,height:(E+.585+.24*t.headSize)*t.height,seatDrop:E*t.height,update(y,D={}){let k=Math.min(1.7,D.speed||0),tt=A._t=(A._t||0)+y;_t+=y*(4.6+k*3.8)*(k>.02?1:0);let et=Math.sin(tt*1.6);if(D.riding){W.position.y=E,X.rotation.x=.06+et*.01;for(let[rt,st,mt]of[[q.legL,q.kneeL,-1],[q.legR,q.kneeR,1]])rt.rotation.x=-1.25,rt.rotation.z=mt*(D.wide||.45),st.rotation.x=1.3;q.armL.rotation.x=q.armR.rotation.x=-.75,q.elbowL.rotation.x=q.elbowR.rotation.x=-.5}else if(k>.02){let rt=(it?.3:.55)+Math.min(k,1.4)*(it?.12:.3),st=Math.sin(_t),mt=Math.max(0,k-.75);q.legL.rotation.x=st*rt,q.legR.rotation.x=-st*rt,q.legL.rotation.z=q.legR.rotation.z=0,q.kneeL.rotation.x=Math.max(0,-Math.cos(_t))*(.7+mt)*rt*1.5,q.kneeR.rotation.x=Math.max(0,Math.cos(_t))*(.7+mt)*rt*1.5,q.armL.rotation.x=-st*rt*.8,q.armR.rotation.x=st*rt*.8,q.elbowL.rotation.x=-.25-mt*.9-Math.max(0,-st)*.4,q.elbowR.rotation.x=-.25-mt*.9-Math.max(0,st)*.4,W.position.y=E+Math.abs(Math.cos(_t))*.025*(1+mt),X.rotation.x=.04+mt*.16,X.rotation.y=st*.07}else{let rt=Math.min(1,y*8);for(let st of[q.legL,q.legR,q.kneeL,q.kneeR])st.rotation.x=ke(st.rotation.x,0,rt),st.rotation.z=ke(st.rotation.z,0,rt);q.armL.rotation.x=ke(q.armL.rotation.x,et*.02,rt),q.armR.rotation.x=ke(q.armR.rotation.x,-et*.02,rt),q.elbowL.rotation.x=ke(q.elbowL.rotation.x,-.12,rt),q.elbowR.rotation.x=ke(q.elbowR.rotation.x,-.12,rt),W.position.y=E+et*.003,X.rotation.x=ke(X.rotation.x,et*.008,rt),X.rotation.y=ke(X.rotation.y,0,rt),K.rotation.y=Math.sin(tt*.4)*.08}q.orb&&(q.orb.position.y=.52+Math.sin(tt*2)*.03,q.orb.rotation.y=tt),q.aura&&(q.aura.rotation.z=tt*.5,q.aura.material.opacity=.42+Math.sin(tt*2.2)*.14,q.auraCol.material.opacity=.08+Math.sin(tt*1.7)*.03)}};return A}function qh(i,t,e={}){let n=new Ui({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.outputColorSpace=be,n.toneMapping=Bi,n.toneMappingExposure=1.15,n.shadowMap.enabled=!0,n.shadowMap.type=cr;let s=new hi,r=new ci(n);s.environment=r.fromScene(new Cs,.04).texture,r.dispose();let o=new Le(28,1,.1,50);s.add(new Ts(13623551,1709090,.55));let a=new mi(16773597,2.1);a.position.set(1.6,3.2,3),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),Object.assign(a.shadow.camera,{left:-2,right:2,top:3,bottom:-1,near:.5,far:12}),a.shadow.bias=-.0015,s.add(a);let l=new mi(58879,1.5);l.position.set(-3,2,-3),s.add(l);let c=new mi(10185727,1.2);c.position.set(3,1.5,-3),s.add(c);let h=document.createElement("canvas");h.width=h.height=256;let u=h.getContext("2d"),f=u.createRadialGradient(128,128,10,128,128,128);f.addColorStop(0,"rgba(0,240,255,.34)"),f.addColorStop(.45,"rgba(139,92,246,.16)"),f.addColorStop(1,"rgba(0,0,0,0)"),u.fillStyle=f,u.fillRect(0,0,256,256),u.strokeStyle="rgba(0,240,255,.5)",u.lineWidth=2,u.beginPath(),u.arc(128,128,84,0,7),u.stroke(),u.strokeStyle="rgba(0,240,255,.2)",u.beginPath(),u.arc(128,128,108,0,7),u.stroke();let d=new Gt(new di(1.5,48),new Be({map:new ui(h),transparent:!0,depthWrite:!1}));d.rotation.x=-Math.PI/2,s.add(d);let g=new Gt(new di(1.5,32),new Ao({opacity:.45}));g.rotation.x=-Math.PI/2,g.position.y=.002,g.receiveShadow=!0,s.add(g);let _=new Se;s.add(_);let m=null,p=null,v=e.zoom||"body",x=e.yaw??-.35,w=null,C=0,T=!1,R=!!e.walk,N={y:.9,d:4.6};function M(G){m&&(_.remove(m.group),ki(m.group)),p&&(_.remove(p.group),ki(p.group),p=null),m=fr(G),_.add(m.group),G.mount&&Zn[G.mount]?(p=Zn[G.mount].make(),_.add(p.group),m.group.position.set(0,p.seat.y-m.seatDrop,p.seat.z),m.wide=p.wide):m.group.position.set(0,0,0)}M(t);function E(){let G=i.clientWidth||300,K=i.clientHeight||400;(i.width!==Math.round(G*n.getPixelRatio())||i.height!==Math.round(K*n.getPixelRatio()))&&(n.setSize(G,K,!1),o.aspect=G/K,o.updateProjectionMatrix())}let z=G=>{w={x:G.clientX,yaw:x},C=performance.now(),i.setPointerCapture&&i.setPointerCapture(G.pointerId)},W=G=>{w&&(x=w.yaw+(G.clientX-w.x)*.012,C=performance.now())},X=()=>{w=null};i.addEventListener("pointerdown",z),i.addEventListener("pointermove",W),i.addEventListener("pointerup",X),i.addEventListener("pointercancel",X),i.style.touchAction="pan-y";let L=performance.now();function S(G){if(T)return;requestAnimationFrame(S);let K=Math.min(.05,(G-L)/1e3);if(L=G,!i.isConnected||i.offsetParent===null)return;E(),e.spin&&v!=="face"&&!w&&G-C>2500&&(x+=K*.25),_.rotation.y=x;let nt=m.height+(p?p.seat.y-m.seatDrop:0),Q=o.aspect,at=v==="face"?{y:nt-.14,d:1.25/Math.min(1,Q*.9)}:p?{y:nt*.5,d:Math.max(nt*2.6,3.4/Math.min(1,Q*1.2))}:{y:nt*.5,d:nt*2.35/Math.min(1,Q*1.9)};N.y+=(at.y-N.y)*Math.min(1,K*6),N.d+=(at.d-N.d)*Math.min(1,K*6),o.position.set(0,N.y+(v==="face"?.02:.25),N.d),o.lookAt(0,N.y,0),m.update(K,{speed:R&&!p?.8:0,riding:!!p,wide:m.wide}),p&&p.update(K,R?.8:0),n.render(s,o)}return requestAnimationFrame(S),{set:M,setZoom(G){v=G},setWalk(G){R=G},setYaw(G){x=G,C=performance.now()},snapshot(){return n.render(s,o),i.toDataURL("image/png")},dispose(){T=!0,i.removeEventListener("pointerdown",z),i.removeEventListener("pointermove",W),i.removeEventListener("pointerup",X),ki(s),n.dispose()}}}function Zh(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new we,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Yh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let g=Yh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Yh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new t(r),a=0;for(let c=0;c<i.length;++c)o.set(i[c].array,a),a+=i[c].array.length;let l=new ze(o,e,n);return s!==void 0&&(l.gpuType=s),l}var Oo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ig=new bs(-1,1,1,-1,0,1),Ul=class extends we{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}},Lg=new Ul,_i=class{constructor(t){this._mesh=new Gt(Lg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ig)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Fo=class extends hn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ie?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gi.clone(t.uniforms),this.material=new Ie({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new _i(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var pr=class extends hn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},zo=class extends hn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Bo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new ct);this._width=n.width,this._height=n.height,e=new Ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fo(Oo),this.copyPass.material.blending=Rn,this.clock=new Po}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}pr!==void 0&&(o instanceof pr?n=!0:o instanceof zo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ko=class extends hn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Nt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Jh={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Nt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ls=class i extends hn{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ct(t.x,t.y):new ct(256,256),this.clearColor=new Nt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ke(r,o,{type:wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ke(r,o,{type:wn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ke(r,o,{type:wn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Jh;this.highPassUniforms=gi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ie({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ct(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Oo;this.copyUniforms=gi.clone(h.uniforms),this.blendMaterial=new Ie({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Cn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Nt,this.oldClearAlpha=1,this.basic=new Be,this.fsQuad=new _i(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ct(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ie({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ct(.5,.5)},direction:{value:new ct(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ie({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ls.BlurDirectionX=new ct(1,0);Ls.BlurDirectionY=new ct(0,1);var $h={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ho=class extends hn{constructor(){super();let t=$h;this.uniforms=gi.clone(t.uniforms),this.material=new Ro({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new _i(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Sl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===wl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===El?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Tl&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Nl=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Ds=(i,t)=>Math.exp(-(i*i)/(2*t*t)),vi=i=>212+26*Math.sin(i*.009)+10*Math.sin(i*.023+1),Dg=[[0,0,188,3],[-250,-250,52,76],[-292,-206,30,86],[190,-175,17,37],[120,-235,26,18],[0,-335,32,28],[318,300,105,1.2]];function ge(i,t){let e=3.6+1.5*Math.sin(i*.012)*Math.cos(t*.01)+.8*Math.sin(i*.033+t*.027)+.35*Math.sin(i*.07-t*.05);e+=Nl(160,330,t)*(5*Math.sin(i*.02)*Math.sin(t*.018)+3.5);let n=Math.hypot(i+335,t+335);e+=124*Ds(n,150)+13*Math.sin(i*.035)*Math.cos(t*.03)*Ds(n,230),e+=35*Ds(Math.hypot(i-190,t+175),55)+16*Ds(Math.hypot(i-120,t+235),50)+26*Ds(Math.hypot(i,t+335),72);for(let s of Dg){let r=1-Nl(s[2]*.62,s[2],Math.hypot(i-s[0],t-s[1]));r>0&&(e=e*(1-r)+s[3]*r)}return e-=7.5*Ds(Math.abs(i-vi(t)),12),e}var eu=[[0,0,0,-78],[0,0,-60,100],[0,0,168,22],[0,0,0,185],[0,185,20,400],[-4,-20,-112,-22],[-112,-22,-150,-130],[-150,-130,-250,-250],[0,-110,0,-320],[168,22,196,-52],[228,-56,190,-160],[0,0,70,30],[60,-40,118,-220],[168,22,300,250]];function Vo(i,t){let e=1e9;for(let[n,s,r,o]of eu){let a=r-n,l=o-s,c=Math.max(0,Math.min(1,((i-n)*a+(t-s)*l)/(a*a+l*l)));e=Math.min(e,Math.hypot(i-n-a*c,t-s-l*c))}return e}function Kh(i,t,e,n){let s=.5+.5*Math.sin(i*.31+t*.17)*Math.sin(i*.07-t*.23),r=Math.abs(i-vi(t)),o=Math.hypot(i,t),a;if(Math.hypot(i-318,t-300)<100)a=[.62,.78,.84];else if(r<15)a=[.5,.45,.34];else if(e>72)a=[.9,.93,.97];else if(e>44){let l=Nl(44,72,e);a=[ke(.4,.86,l*l),ke(.37,.89,l*l),ke(.36,.94,l*l)]}else o<180?a=[.4+s*.05,.36+s*.04,.34+s*.04]:t>165?a=[.3+s*.08,.26+s*.06,.13]:a=[.44+s*.12,.38+s*.08,.16+s*.04];e<=72&&r>=15&&Vo(i,t)<3.4&&(a=o<180?[.52,.47,.42]:[.56,.47,.33]),n[0]=a[0],n[1]=a[1],n[2]=a[2]}var Qh=[[0,4,62,"Les Br\xE8ches","Rue du Four \xB7 rue des Cloches"],[0,-95,34,"Cath\xE9drale Sainte-Claire","La cloche de Th\xE9o sonne encore"],[-118,-22,44,"H\xF4pital de la Mis\xE9ricorde","La grille est rest\xE9e"],[-62,112,40,"Faille de la gare","Rang E \xB7 l\xE0 o\xF9 tout a commenc\xE9"],[70,30,20,"Galeries des Murmures","Rue des Tisserands"],[176,22,34,"Quartier des P\xEAcheurs","Le quai, la barque"],[212,-56,26,"Pont-de-l\u2019Est",""],[190,-175,34,"Colline des Vents","L\u2019observatoire"],[-250,-250,70,"Haute-Brume","Vingt-trois maisons, une chapelle, un puits"],[10,300,90,"Route de Vaumoise","La route du Sud"],[318,300,100,"Mer de verre",""],[120,-235,36,"Monast\xE8re en ruine",""],[0,-335,44,"La hauteur du Nord",""]],jh={h0:[46,64,.6],h1:[76,22,-1.2],h2:[120,-238,0],h3:[96,-42,-.5],h4:[-292,-206,.9],h5:[-98,142,.9],h6:[0,-336,0]},Ug={rolande:[-15,21,.4],gaspard:[-23,11,.9],helene:[-9,24,-.3],theo:[-34,30,1.2],mira:[8,-59,.3],anselme:[-7,-60,-.2],kael:[-96,-4,1.4],odile:[22,-20,-.6],yanis:[-42,92,2.4],nour:[64,37,-.9],zach:[181,27,-1.3],sera:[-243,-238,.8],ysolde:[-257,-247,.4]},Ng={mira:{look:{gender:"f",height:.95,build:.92,hair:"mi-long",hairColor:"#1a1412",skin:"#d9a882",eyeColor:"#3a2a1c"},outfit:{cut:"coat",c:["#4a3b2e","#2a221b","#8a6a45"]}},theo:{look:{gender:"m",height:1.05,build:1.2,shoulders:1.14,hair:"rase",beard:"pleine",hairColor:"#5a5048",skin:"#cf9a72"},outfit:{cut:"apron",c:["#5a4634","#3a2a1e","#3a2f28"]},fx:{oneArm:!0}},anselme:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"courte"},outfit:{cut:"robe",c:["#5a4634","#3a2c20","#8a7a5a"]}},helene:{look:{gender:"f",hair:"chignon",hairColor:"#8a8a8a",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#2f3a4a","#1c232e","#b9c2cc"]}},sera:{look:{gender:"f",height:1.03,hair:"queue",hairColor:"#b03a2e",skin:"#ecc5a4"},outfit:{cut:"cape",c:["#3f5d78","#22303f","#bccad6"]},armor:{plastron:3,jambieres:3},main:{type:"epee",r:3}},nour:{look:{gender:"f",hair:"long",hairColor:"#0f0c0b",skin:"#b57d54"},outfit:{cut:"robe",c:["#5d3f80","#2e1f42","#dab66c"]},fx:{closedEyes:!0}},kael:{look:{gender:"m",hair:"court"},outfit:{cut:"blouse",c:["#dfe7ea","#9db3bd","#c0392b"]},fx:{shadow:!0}},odile:{look:{gender:"f",build:1.05,hair:"chignon",hairColor:"#4a2f1c"},outfit:{cut:"coat",c:["#6b6f78","#3b3e45","#d9b46a"]}},yanis:{look:{gender:"m",hair:"court",hairColor:"#0f0c0b",skin:"#6b4028",eyeColor:"#3a2a1c"},outfit:{cut:"suit",c:["#80858e","#3b3e45","#d5d8de"]}},ysolde:{look:{gender:"f",hair:"long",hairColor:"#8a5a2e",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#8b8e93","#55585e","#6e7176"]},off:{type:"bouclier",r:3}},gaspard:{look:{gender:"m",height:.97,hair:"boucles",hairColor:"#f0f0f0",skin:"#ecc5a4"},outfit:{cut:"coat",c:["#6a3a3a","#3a2020","#d9b46a"]}},zach:{look:{gender:"m",hair:"court",hairColor:"#9a9a9a",beard:"pleine",skin:"#cf9a72"},outfit:{cut:"coat",c:["#3d4a3a","#232b22","#8a8a6a"]}},rolande:{look:{gender:"f",build:1.14,height:.96,hair:"chignon",hairColor:"#c9c9c9"},outfit:{cut:"apron",c:["#4a5a7a","#2a3448","#f4f4ee"]}}};function _r(i){let t=i>>>0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var vr=class{constructor(){this.b={},this.boxes=[],this.m4=new ue,this.q=new Pn,this.e=new ys}add(t,e,n,s,r,o=0,a=1,l=1,c=1,h=0,u=0){let f=e.index?e.toNonIndexed():e.clone();this.e.set(h,o,u,"YXZ"),this.q.setFromEuler(this.e),f.applyMatrix4(this.m4.compose(new U(n,s,r),this.q,new U(a,l,c)));for(let d of Object.keys(f.attributes))d!=="position"&&d!=="normal"&&f.deleteAttribute(d);(this.b[t]=this.b[t]||[]).push(f)}solid(t,e,n,s,r=0){let o=Math.abs(Math.cos(r)),a=Math.abs(Math.sin(r)),l=(n*o+s*a)/2,c=(n*a+s*o)/2;this.boxes.push([t-l,t+l,e-c,e+c])}build(t,e){let n=new Se;for(let s in this.b){let r=Zh(this.b[s],!1);this.b[s].forEach(a=>a.dispose());let o=new Gt(r,t[s]);o.castShadow=e&&!t[s].transparent&&!t[s].isMeshBasicMaterial,o.receiveShadow=e,n.add(o)}return n}},Tt=new En(1,1,1),gr=new Xn(Math.SQRT1_2,1,4).rotateY(Math.PI/4),Re=new fi(.5,.5,1,12),Go=new Xn(.5,1,12),Jn=new pi(.5,12,8),He=new li(1,1),Og=new pi(.5,16,8,0,Math.PI*2,0,Math.PI/2),xr=(()=>{let i=new qn;i.moveTo(-.5,0),i.lineTo(.5,0),i.lineTo(0,1),i.closePath();let t=new Ss(i,{depth:1,bevelEnabled:!1});return t.translate(0,0,-.5),t})();function xn(i,t,e,n,s,r,o,a,l,c,h={}){let u=h.y??ge(e,n);i.add(l,Tt,e,u+o/2-.6,n,a,s,o+1.2,r);let f=h.roofH??Math.min(s,r)*.42;h.flat?i.add(c,Tt,e,u+o+.25,n,a,s+.6,.5,r+.6):h.hip?i.add(c,gr,e,u+o+f/2,n,a,s+1,f,r+1):i.add(c,xr,e,u+o,n,a,s+1,f,r+1.2),h.chimney!==!1&&t()<.7&&i.add("stoneD",Tt,e+Math.cos(a)*s*.25,u+o+f*.7,n-Math.sin(a)*s*.25,a,.9,f*1.1,.9);let d=Math.cos(a),g=Math.sin(a),_=Math.max(1,Math.floor(o/3.1));for(let[x,w,C,T]of[[0,1,s,r/2],[0,-1,s,r/2],[1,0,r,s/2],[-1,0,r,s/2]]){let R=Math.max(1,Math.floor(C/2.8));for(let N=0;N<_;N++)for(let M=0;M<R;M++){if(N===0&&w===1&&M===Math.floor(R/2))continue;let E=(M-(R-1)/2)*(C/R),z=x?x*(T+.04):E,W=w?w*(T+.04):E,X=e+z*d+W*g,L=n-z*g+W*d,S=a+Math.atan2(x,w);i.add(t()<(h.lit??.55)?"winLit":"winDark",He,X,u+1.9+N*3.1,L,S,.9,1.25,1)}}let m=r/2+.05,p=e+m*g,v=n+m*d;return i.add("wood",He,p,u+1.05,v,a,1.2,2.1,1),h.noSolid||i.solid(e,n,s,r,a),{door:[e+(r/2+1.6)*g,n+(r/2+1.6)*d]}}function mr(i,t,e){let n=ge(t,e);i.add("iron",Re,t,n+1.9,e,0,.14,3.8,.14),i.add("iron",Tt,t,n+3.85,e,0,.5,.1,.5),i.add("lamp",Jn,t,n+3.55,e,0,.42,.5,.42)}function Fg(i,t){let e=new vr,n=_r(20261112),s=[],r=[],o=(d,g,_,m)=>_.some(p=>Math.hypot(d-p[0],g-p[1])<(p[2]||m)),a=[[0,-95,40],[-118,-22,46],[-62,112,36],[70,30,20],[-18,18,26],[0,-30,20],[22,-20,14],[-40,92,12],[96,-42,24],[46,64,20],[-98,142,30],[176,22,30]],l=["wallA","wallB","wallC","wallW"],c=["roofA","roofB"];for(let d=-150;d<=150;d+=24)for(let g=-150;g<=160;g+=22){let _=d+(n()-.5)*6,m=g+(n()-.5)*5;if(Math.hypot(_,m)>158||o(_,m,a,0)||Vo(_,m)<8.5||Math.abs(_-vi(m))<40||n()<.12)continue;let v=m>-10&&_>-70,x=9+n()*7,w=8+n()*6,C=(v?5.5:7)+n()*(v?4.5:8);xn(e,n,_,m,x,w,C,n()<.5?0:Math.PI/2,v?n()<.5?"wallB":"wallC":l[Math.floor(n()*4)],c[Math.floor(n()*2)],{lit:v?.4:.6,hip:n()<.25})}for(let[d,g,_,m]of eu.slice(0,6)){let p=Math.floor(Math.hypot(_-d,m-g)/22);for(let v=1;v<p;v++){let x=v/p,w=d+(_-d)*x,C=g+(m-g)*x,T=-(m-g),R=_-d,N=Math.hypot(T,R);mr(e,w+T/N*4.6,C+R/N*4.6)}}{let d=ge(-18,14);xn(e,n,-18,12,15,11,8.5,.35,"wallA","roofA",{lit:.9}),e.add("white",Tt,-12,d+3.2,22.5,.35,5.5,1.4,.05),e.add("white",Tt,-6.5,d+3,20.6,.35,2.4,1.7,.05),e.add("iron",Re,-15.5,d+2,24,0,.1,4,.1),e.add("iron",Re,-4.5,d+2,19.6,0,.1,4,.1),e.add("wood",Tt,-37,d+4.1,33,1.2,9,.35,7);for(let[g,_]of[[-3.6,-2.6],[3.6,-2.6],[-3.6,2.6],[3.6,2.6]]){let m=Math.cos(1.2),p=Math.sin(1.2);e.add("wood",Re,-37+g*m+_*p,d+2,33-g*p+_*m,0,.35,4,.35)}e.add("stoneD",Tt,-39.5,d+1,35,1.2,2.6,2,2.2),e.add("ember",Tt,-39.5,d+2.05,35,1.2,1.9,.2,1.5),e.add("iron",Tt,-35.5,d+.55,31.5,1.2,1.5,.5,.6),e.add("stoneD",Tt,-35.5,d+.25,31.5,1.2,.7,.6,.5),r.push([-39.5,d+2.6,35,16742954,2.2,16]),e.solid(-39.5,35,3,3)}{let d=ge(0,-95);e.add("stone",Tt,0,d+10,-98,0,22,21,46),e.add("roofB",xr,0,d+20.4,-98,0,24,10,47),e.add("stone",Tt,0,d+22,-70.5,0,11,45,10),e.add("roofB",gr,0,d+53,-70.5,0,12,18,11),e.add("gold",Tt,0,d+64,-70.5,0,.3,4,.3),e.add("gold",Tt,0,d+64.6,-70.5,0,1.8,.3,.3),e.add("rose",Re,0,d+16,-65.4,0,5.2,.2,5.2,Math.PI/2),e.add("wood",He,0,d+2.6,-65.42,0,3.4,5.2,1);for(let g=0;g<4;g++)e.add("stoneL",Tt,0,d-.3+g*-0+.2*(3-g),-63.6+g*.9,0,12+g*1.4,.4,1);for(let g=0;g<6;g++)for(let _ of[-1,1])e.add("rose",He,_*11.06,d+9,-116+g*7.2,_*Math.PI/2,2.2,8,1),e.add("stoneD",Tt,_*12,d+6.5,-112.4+g*7.2,0,1.6,13,1.6);for(let g of[30,36])for(let[_,m]of[[0,1],[1,0],[-1,0]])e.add("winDark",He,_*5.56,d+g,-70.5+(m?5.06:0),Math.atan2(_,m),1.6,3.6,1);e.solid(0,-98,22,46),e.solid(0,-70.5,11,10),r.push([0,d+5,-61,16767392,1.6,22])}{let d=ge(-118,-22);xn(e,n,-122,-24,22,58,15,0,"wallW","roofB",{lit:.35,flat:!0,chimney:!1}),xn(e,n,-106,-44,14,16,11,0,"wallW","roofB",{lit:.3,flat:!0,chimney:!1});for(let g=0;g<26;g++)e.add("iron",Re,-96,d+1.4,-52+g*2.2,0,.12,2.8,.12);e.add("iron",Tt,-96,d+2.5,-24.5,0,.14,.14,56),e.add("iron",Tt,-96,d+.5,-24.5,0,.14,.14,56),e.solid(-96,-40,.6,26),e.solid(-96,-6,.6,22)}{let d=ge(-62,112);e.add("wallC",Tt,-62,d+5,122,.9,30,11,12),e.add("iron",Re,-62,d+10.5,122,.9,12,30,12,0,Math.PI/2),e.add("winDark",He,-57.2,d+6,118.2,.9+Math.PI,7,6,1);for(let g=0;g<12;g++)e.add("wood",Tt,-74+g*2.6,d+.12,102+g*2.05,.9,.5,.2,5);e.add("iron",Tt,-60,d+.3,113,.9+Math.PI/2,.16,.2,34),e.add("iron",Tt,-58.6,d+.3,111.9,.9+Math.PI/2,.16,.2,34),e.solid(-62,122,26,20)}{let d=ge(70,30);for(let g of[-1,1])e.add("stoneD",Tt,70+g*3.6*Math.cos(-1.2),d+3,30-g*3.6*Math.sin(-1.2),-1.2,2,7,3);e.add("stoneD",Tt,70,d+7.2,30,-1.2,9.4,2,3.2),e.add("void",He,70+.4*Math.sin(-1.2),d+2.9,30+.4*Math.cos(-1.2),-1.2,5.2,6,1);for(let g of[-1,1]){let _=70+g*2.2*Math.cos(-1.2)-2.2*Math.sin(-1.2),m=30-g*2.2*Math.sin(-1.2)-2.2*Math.cos(-1.2);e.add("white",Re,_,d+.3,m,0,.16,.6,.16),e.add("lamp",Jn,_,d+.72,m,0,.2,.3,.2)}r.push([67,d+1.6,28,16762977,1.1,10])}xn(e,n,30,-22,14,12,10,Math.PI/2*3,"wallA","roofA",{lit:.8,hip:!0}),xn(e,n,-48,86,12,12,12,2.4,"wallB","roofB",{lit:.7,flat:!0,chimney:!1});{for(let v=0;v<9;v++)if(e.add("wood",Tt,188+v*2.2,1.1,24,0,2,.25,4.6),v%2===0)for(let x of[-1,1])e.add("wood",Re,188+v*2.2,1.1-1.6,24+x*2.1,0,.3,3.6,.3);let g=(v,x,w,C)=>{e.add(C,Jn,v,.55,x,w,2,1.3,5.2),e.add("void",Tt,v,1,x,w,1.5,.3,4.2),e.add("wood",Tt,v,.95,x,w,1.7,.1,.5)};g(206,29,.25,"wood"),g(203,6,-.2,"wallC"),g(204,48,.1,"wallB"),xn(e,n,172,40,9,8,5.5,-1.4,"wallB","roofA",{lit:.7}),xn(e,n,170,4,10,8,6,-1.6,"wallC","roofB",{lit:.5}),mr(e,186,21);let _=-56,m=vi(_),p=3.6;e.add("stone",Tt,m,p,_,0,40,.8,6.5);for(let v of[-1,1])e.add("stone",Tt,m,p+.9,_+v*3,0,40,1,.5);for(let v of[-9,9])e.add("stoneD",Tt,m+v,p-3,_,0,2.4,6,6);mr(e,m-19,_+2.6),mr(e,m+19,_-2.6)}{let d=ge(190,-175);e.add("stoneL",Re,190,d+4,-175,0,13,8,13),e.add("iron",Og,190,d+8,-175,0,13,13,13),e.add("void",Tt,190,d+11.5,-171,0,1.6,5,6,-.6),e.add("wood",He,190,d+1.1,-168.46,0,1.3,2.2,1),e.solid(190,-175,11,11)}{let d=[[-236,-262,.3],[-262,-266,-.4],[-272,-244,1.2],[-232,-240,-.9],[-246,-278,.1],[-270,-228,.7],[-228,-224,-.2]];for(let[_,m,p]of d)xn(e,n,_,m,7.5,6.5,4.6,p,"wallA","snow",{lit:.7});let g=ge(-250,-250);xn(e,n,-254,-232,7,11,6,.2,"stoneL","snow",{lit:.6,chimney:!1}),e.add("stoneL",Tt,-253.2,g+6,-227.6,.2,3,12,3),e.add("snow",gr,-253.2,g+14,-227.6,.2,3.6,4.5,3.6),e.add("stoneD",Re,-252,g+.5,-252,0,2.2,1,2.2),e.add("void",Re,-252,g+1.02,-252,0,1.7,.02,1.7);for(let _ of[-1,1])e.add("wood",Re,-252+_*1.1,g+1.6,-252,0,.16,2.4,.16);e.add("wood",xr,-252,g+2.7,-252,0,3.2,.9,2.4),e.solid(-252,-252,2.4,2.4),e.add("stoneD",Re,-246,g+.2,-244,0,1.6,.4,1.6),e.add("ember",Go,-246,g+.8,-244,0,.9,1.2,.9),r.push([-246,g+1.6,-244,16747066,2,18])}{let d=ge(3,190);e.add("wood",Re,3,d+1.4,190,0,.18,2.8,.18),e.add("wood",Tt,3.5,d+2.4,190,.2,2.2,.5,.08)}let h=[];for(let d of i.houses||[]){let g=jh[d.id];if(!g)continue;let[_,m,p]=g,v=ge(_,m),x=Math.cos(p),w=Math.sin(p),C,T=(R,N)=>[_+R*x+N*w,m-R*w+N*x];if(d.id==="h0"){for(let[z,W,X,L]of[[-5,-3,9,7],[5,-3,9,8],[0,-7,11,10],[-8,-8,7,5],[8,-8,7,6]]){let[S,G]=T(z,W);e.add("rock",Jn,S,v+L*.2,G,n()*3,X,L,X)}let[R,N]=T(0,1.2);e.add("void",Jn,R,v+1.2,N,p,4.4,4.6,2.4);let[M,E]=T(0,3.5);e.add("ember",Go,M,v+.4,E,0,.7,.9,.7),r.push([M,v+1.3,E,16747066,1.6,12]),C=T(0,4.2),e.solid(...T(0,-5),16,9)}else if(d.id==="h1")C=[72,27];else if(d.id==="h2"){e.add("stoneL",Tt,...(R=>[R[0],v+4,R[1]])(T(-5.5,0)),p,1,9,16),e.add("stoneL",Tt,...(R=>[R[0],v+2.6,R[1]])(T(5.5,-2)),p,1,6.2,11),e.add("stoneL",Tt,...(R=>[R[0],v+5,R[1]])(T(0,-8)),p,12,11,1),e.add("stoneL",xr,...(R=>[R[0],v+10.4,R[1]])(T(0,-8)),p,12,4,1),e.add("roofB",Tt,...(R=>[R[0],v+8.4,R[1]])(T(-2.6,-3)),p,6.4,.3,9.5,0,-.5),e.add("rose",He,...(R=>[R[0],v+6.5,R[1]])(T(0,-7.44)),p,2,4.6,1),e.add("stoneD",Tt,...(R=>[R[0],v+.6,R[1]])(T(0,-5.6)),p,3,1.2,1.6);for(let[R,N]of[[-1.5,"flowerA"],[0,"flowerB"],[1.4,"flowerC"],[2.6,"flowerA"]])e.add(N,Jn,...(M=>[M[0],v+.25,M[1]])(T(R,-3.4)),0,.7,.5,.7);C=T(0,9),e.solid(...T(-5.5,0),1.2,16,p),e.solid(...T(0,-8),12,1.2,p)}else if(d.id==="h3"){let R=xn(e,n,_,m,22,14,11,p,"wallA","roofA",{lit:.85,hip:!0});for(let N of[-1,1]){let[M,E]=T(N*13.5,1);xn(e,n,M,E,6,9,13,p,"wallA","roofA",{lit:.85,hip:!0,chimney:!1})}for(let N of[-1,1])mr(e,...T(N*3,10));C=R.door}else if(d.id==="h4"){e.add("stone",Tt,_,v+6,m,p,26,13,20);for(let[M,E]of[[-13,-10],[13,-10],[-13,10],[13,10]]){let[z,W]=T(M,E);e.add("stoneL",Re,z,v+9,W,0,7,19,7),e.add("roofB",Go,z,v+22,W,0,8.2,8,8.2),e.add("flag",Tt,z+.9,v+27.2,W,p,1.8,1,.06),e.add("iron",Re,z,v+27,W,0,.12,3,.12)}for(let M=-5;M<=5;M++){let[E,z]=T(M*2.3,10.2);M%2&&e.add("stone",Tt,E,v+13.4,z,p,1.2,1,.8)}let[R,N]=T(0,10.06);e.add("wood",He,R,v+2.4,N,p,4,5,1);for(let M of[-7,7])for(let E of[5,9]){let[z,W]=T(M,10.06);e.add("winLit",He,z,v+E,W,p,1.2,1.8,1)}C=T(0,12.5),e.solid(_,m,30,24,p)}else if(d.id==="h5"){e.add("obs",Tt,_,v+9,m,p,20,18,16),e.add("obs",gr,_,v+24,m,p,16,12,13);for(let[M,E,z]of[[-12,6,22],[12,6,22],[-12,-6,16],[12,-6,16]]){let[W,X]=T(M,E);e.add("obs",Tt,W,v+z/2,X,p,5,z,5),e.add("obs",gr,W,v+z+4,X,p,5.6,8,5.6),e.add("umbra",He,...(L=>[L[0],v+z-3,L[1]])(T(M,E+2.54)),p,1,3,1)}let[R,N]=T(0,8.06);e.add("umbra",He,R,v+3.4,N,p,3.4,6.8,1),e.add("neon",He,R,v+3.4,N+.02*x,p,.3,6.8,1),C=T(0,10.6),e.solid(_,m,30,18,p),r.push([C[0],v+4,C[1],9133302,2.4,22])}else if(d.id==="h6"){e.add("light",Tt,_,v+7,m,p,26,14,16),e.add("gold",xr,_,v+14,m,p,28,8,17.4);for(let M=-4;M<=4;M++)for(let E of[3,7,11]){if(M===0&&E===3)continue;let[z,W]=T(M*2.8,8.06);e.add("sun",He,z,v+E,W,p,1.3,2.2,1)}let[R,N]=T(0,8.08);e.add("sun",He,R,v+3,N,p,3,6,1);for(let M=0;M<6;M++){let[E,z]=T(0,9+M*1.1);e.add("light",Tt,E,v-.2-M*.02,z,p,8+M,.5,1.1)}C=T(0,11.5),e.solid(_,m,26,16,p),r.push([C[0],v+6,C[1],16773312,3.2,40])}h.push({...d,x:C[0],z:C[1]})}let u=[],f=t.trees;for(let d=0;d<f*6&&u.length<f;d++){let g=(n()-.5)*860,_=(n()-.5)*860,m=ge(g,_);if(Math.hypot(g,_)<176&&n()>.04||m<2.2||m>70||Math.abs(g-vi(_))<16||Vo(g,_)<5||Math.hypot(g-318,_-300)<104||o(g,_,Object.values(jh).map(x=>[x[0],x[1],24]),0)||o(g,_,[[-250,-250,44],[190,-175,16]],0))continue;let v=_>150?1:.45;n()>v||u.push({x:g,y:m,z:_,s:.8+n()*.9,pine:m>30||n()<.25,c:n()})}return{B:e,doors:s,lights:r,houses:h,trees:u}}var tu=[["rock","rock",9,8],["stoneD","stoneD",11,9],["stoneL","stone",13,11],["wallA","wood",16,12],["stone","stoneL",20,14],["obs","obs",22,15],["light","light",24,16]];function zg(i,t,e,n){let[s,r,o,a]=tu[t.r]||tu[0],l=5+t.r*.5,c=_r(77+t.r);i.add(r,Tt,0,n-.25,0,0,o,.5,a),i.add(s,Tt,0,n+l/2,-a/2,0,o,l,.5),i.add(s,Tt,-o/2,n+l/2,0,0,.5,l,a),i.add(s,Tt,o/2,n+l/2,0,0,.5,l,a),i.add("rug",Tt,0,n+.02,.5,0,o*.45,.04,a*.4),i.add("stoneD",Tt,0,n+1.4,-a/2+.7,0,3.4,2.8,1),i.add("void",Tt,0,n+.9,-a/2+1,0,2,1.5,.6),i.add("ember",Go,0,n+.6,-a/2+1.05,0,1,1.1,.5),i.add("stoneD",Tt,0,n+3.8,-a/2+.6,0,1.6,l-3.2,.8),i.add("wood",Tt,0,n+.95,1,0,Math.min(6,o*.34),.14,1.5);for(let[d,g]of[[-1,.4],[1,.4],[-1,1.6],[1,1.6]])i.add("wood",Re,d*Math.min(2.6,o*.15),n+.47,g,0,.16,.95,.16);for(let d=-1;d<=1;d++)for(let g of[-1,1])i.add("wood",Re,d*1.3,n+.3,1+g*1.4,0,.55,.6,.55);i.add("white",Re,-.6,n+1.1,1,0,.3,.16,.3),i.add("lamp",Jn,.5,n+1.25,1,0,.16,.3,.16);let h=Math.min(t.cap>=99?8:t.cap,8);for(let d=0;d<h;d++){let g=d%2?1:-1,_=Math.floor(d/2),m=g*(o/2-1.5),p=-a/2+2.6+_*2.6;if(p>a/2-1.5)break;i.add("wood",Tt,m,n+.35,p,0,2.2,.5,1.1),i.add("white",Tt,m,n+.66,p,0,2.1,.14,1),i.add(["flowerA","flowerB","flowerC","rug"][d%4],Tt,m-g*.3,n+.75,p,0,1.5,.1,1.02)}for(let d of[-1,1])for(let g=-1;g<=1;g+=2)i.add(t.r>=6?"sun":t.r===5?"umbra":"winLit",He,d*(o/2-.27),n+2.6,g*a*.22,-d*Math.PI/2,1.3,1.9,1);let u=e.instruments||[],f=o/2-2;if(u.includes("i4")&&(i.add("wood",Tt,f-1,n+.9,a/2-3.5,0,2.8,1.8,.9),i.add("white",Tt,f-1,n+1,a/2-2.95,0,2.5,.08,.3)),u.includes("i5")){for(let d=0;d<7;d++)i.add("gold",Re,-f+d*.34,n+1.6+Math.abs(3-d)*.3,a/2-3.2,0,.26,3.2+Math.abs(3-d)*.6,.26);i.add("wood",Tt,-f+1,n+.6,a/2-2.7,0,2.8,1.2,.7)}return u.includes("i1")&&(i.add("wood",Jn,2.6,n+.6,-a/2+1,0,.9,1.1,.3),i.add("wood",Tt,2.6,n+1.5,-a/2+.95,0,.14,1.2,.08)),u.includes("i3")&&(i.add("wallC",Jn,-2.8,n+.9,-a/2+1,0,1.1,1.6,.4),i.add("void",Tt,-2.8,n+2.2,-a/2+.95,0,.14,1.4,.08)),(u.includes("i6")||u.includes("i2")||u.includes("i0"))&&(i.add("gold",Tt,-o/2+1,n+1.4,3,0,.12,2.6,.12),i.add("gold",Tt,-o/2+1.5,n+2.6,3,0,1.1,.12,.12,0,.3),i.add("wood",Tt,-o/2+1.5,n+1.3,3,0,.14,2.6,.14,0,-.42)),i.add("wood",He,0,n+1.2,a/2-.02,Math.PI,1.6,2.4,1),{W:o,D:a,h:l,door:[0,a/2-1.2],spots:[[-2.6,-1],[2.6,-1],[-3.4,2.4],[3.4,2.4],[0,-2.4],[-1.6,3.4],[1.6,3.4],[-4.6,.4],[4.6,.4],[0,3.8],[-3,-3],[3,-3]].filter(d=>Math.abs(d[0])<o/2-2&&Math.abs(d[1])<a/2-1.5)}}var Bg=`
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
.ew-keys{position:absolute;left:12px;right:96px;bottom:12px;font:11px/1.7 'JetBrains Mono',monospace;color:rgba(220,230,255,.75);text-shadow:0 1px 4px #000;pointer-events:none}
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
.ew-pc .ew-joy,.ew-pc .ew-pad .ew-rnd.m{display:none}
.ew-mob .ew-keys{display:none}
@media (max-height:520px){.ew-prompt{bottom:96px}.ew-map{width:92px;height:92px}}
`;function nu(i,t,e={}){let n=t.mode==="pc",s=n?{px:2,shadows:!0,seg:220,trees:1500,fog:[140,720],bloom:!0,grass:2600}:{px:1.5,shadows:!1,seg:150,trees:600,fog:[110,520],bloom:!1,grass:0};if(!document.getElementById("ew-css")){let P=document.createElement("style");P.id="ew-css",P.textContent=Bg,document.head.appendChild(P)}let r=document.createElement("div");r.className="ew "+(n?"ew-pc":"ew-mob"),r.innerHTML=`<canvas class="ew-c"></canvas>
    <div class="ew-zone"><b></b><i></i></div>
    <div class="ew-joy"><div class="ew-stick" style="display:none"><i></i></div></div>
    <div class="ew-top"><button type="button" class="ew-btn" data-w="menu">\u2630 Menu</button><canvas class="ew-map" width="248" height="248"></canvas></div>
    <div class="ew-keys"><kbd>Z</kbd><kbd>Q</kbd><kbd>S</kbd><kbd>D</kbd> se d\xE9placer \xB7 <kbd>Maj</kbd> courir \xB7 <kbd>Espace</kbd> sauter \xB7 <kbd>E</kbd> agir \xB7 <kbd>M</kbd> monture \xB7 souris : cam\xE9ra \xB7 <kbd>\xC9chap</kbd> menu</div>
    <div class="ew-prompt"><button type="button" data-w="act"></button></div>
    <div class="ew-pad"><button type="button" class="ew-rnd m" data-w="jump">Saut</button><button type="button" class="ew-rnd m" data-w="run">Courir</button><button type="button" class="ew-rnd" data-w="mount">Monture</button></div>
    <div class="ew-dlg"><span class="ew-bond"></span><h4></h4><p></p><div class="row"><button type="button" class="ew-btn" data-w="dnext">Continuer</button><button type="button" class="ew-btn" data-w="dclose">Au revoir</button></div></div>
    <div class="ew-menu"><div><h3>Vesp\xE9rane</h3><button type="button" class="ew-btn" data-w="resume">Reprendre</button><button type="button" class="ew-btn" data-w="home">Retour \xE0 la Maison (rue du Four)</button><button type="button" class="ew-btn" data-w="mode">${n?"Passer en mode mobile":"Passer en mode PC"}</button><button type="button" class="ew-btn" data-w="quit">Quitter le monde</button></div></div>
    <div class="ew-load">Vesp\xE9rane\u2026</div>`,i.appendChild(r);let o=P=>r.querySelector(P),a=o(".ew-c"),l=new Ui({canvas:a,antialias:n,powerPreference:"high-performance"});l.setPixelRatio(Math.min(window.devicePixelRatio||1,s.px)),l.outputColorSpace=be,l.toneMapping=Bi,l.toneMappingExposure=1.05,s.shadows&&(l.shadowMap.enabled=!0,l.shadowMap.type=cr);let c=new hi,h=new Le(n?55:62,1,.3,2400),u=new Nt(12085832);c.fog=new mo(u,s.fog[0],s.fog[1]);{let P=new ci(l);c.environment=P.fromScene(new Cs,.04).texture,P.dispose()}let f=new U(-.62,.36,.5).normalize(),d=new Ts(16769228,2761796,.75);c.add(d);let g=new mi(16768184,2.7);c.add(g,g.target),s.shadows&&(g.castShadow=!0,g.shadow.mapSize.set(2048,2048),Object.assign(g.shadow.camera,{left:-55,right:55,top:55,bottom:-55,near:1,far:260}),g.shadow.bias=-6e-4,g.shadow.normalBias=.06);let _=new Gt(new pi(2e3,32,16),new Ie({side:Fe,depthWrite:!1,fog:!1,uniforms:{sunDir:{value:f},night:{value:0}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 sunDir; uniform float night; varying vec3 vD; float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); } void main(){ vec3 d = normalize(vD); float h = max(0.0, d.y); vec3 hor = vec3(1.0, 0.66, 0.40), mid = vec3(0.70, 0.30, 0.19), top = vec3(0.10, 0.09, 0.22); vec3 c = mix(hor, mid, smoothstep(0.0, 0.2, h)); c = mix(c, top, smoothstep(0.14, 0.72, h)); float s = max(0.0, dot(d, sunDir)); c += vec3(1.0, 0.78, 0.5) * pow(s, 220.0) * 2.2 + vec3(1.0, 0.55, 0.28) * pow(s, 9.0) * 0.42; vec3 g = floor(d * 190.0); float st = step(0.9975, hash(g)) * smoothstep(0.25, 0.7, h); c += vec3(st) * 0.8; if (d.y < 0.0) c = mix(hor, vec3(0.16, 0.10, 0.10), min(1.0, -d.y * 5.0)); gl_FragColor = vec4(c, 1.0); }"}));c.add(_);let m=new Se;c.add(m);{let P=document.createElement("canvas");P.width=256,P.height=128;let B=P.getContext("2d"),J=_r(5);for(let bt=0;bt<26;bt++){let At=40+J()*176,Pt=46+J()*40,zt=18+J()*34,dt=B.createRadialGradient(At,Pt,0,At,Pt,zt);dt.addColorStop(0,"rgba(255,255,255,.5)"),dt.addColorStop(1,"rgba(255,255,255,0)"),B.fillStyle=dt,B.fillRect(0,0,256,128)}let ot=new ui(P);for(let bt=0;bt<16;bt++){let At=new Gt(new li(1,1),new Be({map:ot,transparent:!0,depthWrite:!1,fog:!1,color:new Nt().setHSL(.04+J()*.05,.75,.62+J()*.2),opacity:.75})),Pt=J()*6.28,zt=500+J()*900;At.position.set(Math.cos(Pt)*zt,190+J()*180,Math.sin(Pt)*zt),At.scale.set(420+J()*380,120+J()*90,1),At.rotation.x=Math.PI/2,At.rotation.z=J()*6.28,m.add(At)}}{let P=new li(900,900,s.seg,s.seg);P.rotateX(-Math.PI/2);let B=P.attributes.position,J=new Float32Array(B.count*3),ot=[0,0,0];for(let Vt=0;Vt<B.count;Vt++){let ae=B.getX(Vt),pe=B.getZ(Vt),nn=ge(ae,pe);B.setY(Vt,nn),Kh(ae,pe,nn,ot),J[Vt*3]=Math.pow(ot[0],2.2),J[Vt*3+1]=Math.pow(ot[1],2.2),J[Vt*3+2]=Math.pow(ot[2],2.2)}P.setAttribute("color",new ze(J,3));let bt=P.toNonIndexed();bt.computeVertexNormals(),P.dispose();let At=document.createElement("canvas");At.width=At.height=256;let Pt=At.getContext("2d"),zt=_r(31);Pt.fillStyle="#e4e4e4",Pt.fillRect(0,0,256,256);for(let Vt=0;Vt<2600;Vt++){let ae=190+Math.floor(zt()*65);Pt.fillStyle=`rgba(${ae},${ae},${ae},.55)`;let pe=1+zt()*5;Pt.fillRect(zt()*256,zt()*256,pe,pe)}Pt.strokeStyle="rgba(70,60,55,.3)",Pt.lineWidth=1.6;for(let Vt=0;Vt<8;Vt++)for(let ae=0;ae<8;ae++){let pe=Vt%2*16;Pt.strokeRect(ae*32+pe+(zt()-.5)*3,Vt*32+(zt()-.5)*3,32,32)}let dt=new ui(At);dt.wrapS=dt.wrapT=Ks,dt.repeat.set(140,140),dt.anisotropy=4,dt.colorSpace=be;let Ht=new Gt(bt,new Ye({vertexColors:!0,map:dt,roughness:.96,metalness:0,envMapIntensity:.25}));Ht.receiveShadow=s.shadows,c.add(Ht);let Yt=new Gt(new Oi(440,2400,48,1),new Ye({color:4865826,roughness:1,envMapIntensity:.1}));Yt.rotation.x=-Math.PI/2,Yt.position.y=2.6,c.add(Yt)}let p=new Gt(new li(2400,2400),new Ye({color:5914426,roughness:.12,metalness:.85,transparent:!0,opacity:.86,envMapIntensity:1.6}));p.rotation.x=-Math.PI/2,p.position.y=.35,c.add(p);let v=new Gt(new di(96,48),new Ye({color:12576498,roughness:.03,metalness:.95,envMapIntensity:2.2,transparent:!0,opacity:.92}));v.rotation.x=-Math.PI/2,v.position.set(318,1.32,300),c.add(v);let x=(P,B=.9,J=0,ot)=>new Ye(Object.assign({color:P,roughness:B,metalness:J,envMapIntensity:.35},ot||{})),w=P=>new Be({color:P,toneMapped:(s.bloom,!1)}),C={wallA:x(12098426),wallB:x(9405303),wallC:x(10246725),wallW:x(14867920),stone:x(9144208),stoneL:x(11644338),stoneD:x(4867664),roofA:x(5125424),roofB:x(3554376),wood:x(5913892),iron:x(3816774,.5,.7),snow:x(15660024,.7),white:x(16052712),rock:x(5591642,1),obs:x(1512479,.35,.6),gold:x(15254632,.3,.9),light:x(16775920,.6,0,{emissive:16773320,emissiveIntensity:.55}),flag:x(4029142),rug:x(8007466),flowerA:x(14243450),flowerB:x(15254090),flowerC:x(9071318),winLit:w(16762222),winDark:x(1712176,.2,.6),lamp:w(16767392),ember:w(16742954),rose:w(13208278),umbra:w(10976255),neon:w(61695),sun:w(16774084),void:x(197382,1)},T=Fg(t,s),R=T.B.build(C,s.shadows);c.add(R);for(let[P,B,J,ot,bt,At]of T.lights.slice(0,n?12:6)){let Pt=new ln(ot,bt*14,At,1.6);Pt.position.set(P,B,J),c.add(Pt)}let N=new Se;{let P=ge(-70,100);N.position.set(-70,P+5.2,100);let B=new Gt(new an(4.2,.28,10,48),w(8386303)),J=new Gt(new di(4.1,40),new Be({color:1723647,transparent:!0,opacity:.55,side:me,blending:Cn,depthWrite:!1})),ot=new Gt(new Oi(1.2,3.6,40),new Be({color:9133302,transparent:!0,opacity:.5,side:me,blending:Cn,depthWrite:!1}));N.add(B,J,ot),N.scale.set(.8,1.25,1),N.rotation.y=.9;let bt=new ln(3842303,60,46,1.5);N.add(bt),c.add(N),N.userData={m2:J,m3:ot}}{let P=new fi(.22,.34,1,6).translate(0,.5,0),B=new Xn(1,1,7).translate(0,.5,0),J=new Eo(1,1),ot=T.trees.filter(dt=>dt.pine),bt=T.trees.filter(dt=>!dt.pine),At=new Pe,Pt=new Nt,zt=(dt,Ht,Yt,Vt)=>{let ae=new _o(dt,Ht,Math.max(1,Yt.length));return Yt.forEach((pe,nn)=>{Vt(pe,At),At.updateMatrix(),ae.setMatrixAt(nn,At.matrix),pe._c&&ae.setColorAt(nn,pe._c)}),ae.count=Yt.length,ae.castShadow=s.shadows,ae.receiveShadow=!1,c.add(ae),ae};if(zt(P,x(3811868,1),T.trees,(dt,Ht)=>{Ht.position.set(dt.x,dt.y-.3,dt.z),Ht.scale.set(dt.s,dt.s*(dt.pine?2.2:3.2),dt.s),Ht.rotation.set(0,0,0)}),ot.forEach(dt=>{dt._c=Pt.clone().setHSL(.3+dt.c*.06,.42,.11+dt.c*.06)}),bt.forEach(dt=>{dt._c=Pt.clone().setHSL(.02+dt.c*.11,.72,.36+dt.c*.14)}),zt(B,x(16777215,1),ot,(dt,Ht)=>{Ht.position.set(dt.x,dt.y+dt.s*1.3,dt.z),Ht.scale.set(dt.s*2.1,dt.s*6.2,dt.s*2.1),Ht.rotation.set(0,dt.c*6,0)}),zt(J,new Ye({color:16777215,roughness:1,flatShading:!0,envMapIntensity:.3}),bt,(dt,Ht)=>{Ht.position.set(dt.x,dt.y+dt.s*4.1,dt.z),Ht.scale.set(dt.s*2.5,dt.s*2.1,dt.s*2.5),Ht.rotation.set(dt.c,dt.c*6,0)}),s.grass){let dt=_r(9),Ht=[];for(let Yt=0;Yt<s.grass*5&&Ht.length<s.grass;Yt++){let Vt=(dt()-.5)*760,ae=(dt()-.5)*760,pe=ge(Vt,ae);Math.hypot(Vt,ae)<184||pe<2.3||pe>44||Math.abs(Vt-vi(ae))<15||Vo(Vt,ae)<4||Ht.push({x:Vt,y:pe,z:ae,s:.5+dt()*.9,c:dt(),_c:Pt.clone().setHSL(.08+dt()*.1,.5,.3+dt()*.12)})}zt(new Xn(.5,1,4).translate(0,.5,0),x(16777215,1),Ht,(Yt,Vt)=>{Vt.position.set(Yt.x,Yt.y-.05,Yt.z),Vt.scale.set(Yt.s*.9,Yt.s*1.1,Yt.s*.9),Vt.rotation.set(0,Yt.c*6,0)}).castShadow=!1}}let M={},E=new vr;T.houses.forEach((P,B)=>{let ot=B*80,bt=new vr,At=zg(bt,P,t,-400);for(let Pt in bt.b)for(let zt of bt.b[Pt])zt.translate(ot,0,0),(E.b[Pt]=E.b[Pt]||[]).push(zt);M[P.id]={...At,ox:ot,oy:-400,hs:P}});let z=E.build(C,!1);z.visible=!1,c.add(z);let W=new ln(16756848,0,40,1.4),X=new ln(16773341,0,60,1.2);c.add(W,X);let L=fr(t.hero);c.add(L.group);let S={x:t.pos?t.pos[0]:-6,z:t.pos?t.pos[1]:34,y:0,vy:0,yaw:Math.PI,speed:0,run:!1,onGround:!0,inside:null,mount:null,mountId:null,camYaw:t.pos?0:Math.PI*.15,camPitch:.22,camDist:n?7.5:6.5,talking:null,paused:!1,t:0,zone:""};S.y=ge(S.x,S.z);for(let P of Qh)if(Math.hypot(S.x-P[0],S.z-P[1])<P[2]){S.zone=P[3];break}let G=(t.mounts||[]).filter(P=>Zn[P.id]),K=Math.max(0,G.findIndex(P=>P.id===t.mount));function nt(P){if(S.mount&&(c.remove(S.mount.group),ki(S.mount.group),S.mount=null,S.mountId=null),P&&G.length&&!S.inside){let B=G[K].id;S.mount=Zn[B].make(),S.mountId=B,c.add(S.mount.group),S.mount.group.traverse(J=>{J.isMesh&&(J.castShadow=s.shadows)}),Ct("En selle",G[K].name)}o('[data-w="mount"]').classList.toggle("on",!!S.mount)}G.length||(o('[data-w="mount"]').disabled=!0);let Q=[],at=P=>{let B=document.createElement("canvas");B.width=256,B.height=64;let J=B.getContext("2d");J.font="600 26px Oxanium, Barlow, sans-serif",J.textAlign="center",J.shadowColor="#000",J.shadowBlur=8,J.fillStyle="#eaffff",J.fillText(P,128,40);let ot=new xo(new er({map:new ui(B),transparent:!0,depthWrite:!1,fog:!1}));return ot.scale.set(2.6,.65,1),ot};function lt(P,B,J,ot,bt,At){let Pt=Ng[P.id];if(!Pt)return;let zt=fr(Pt);zt.group.position.set(B,J,ot),zt.group.rotation.y=bt;let dt=at(P.name.split(" ").slice(0,2).join(" "));dt.position.y=zt.height/zt.group.scale.y+.32,zt.group.add(dt),zt.group.traverse(Ht=>{Ht.isMesh&&(Ht.castShadow=s.shadows&&!At)}),c.add(zt.group),Q.push({...P,av:zt,x:B,y:J,z:ot,ry:bt,inside:At||null,lb:dt,li:0})}for(let P of t.npcs||[]){let B=Ug[P.id];B&&lt(P,B[0],ge(B[0],B[1]),B[1],B[2])}for(let P in M){let B=M[P];(t.npcs||[]).filter(J=>J.recruited).slice(0,B.spots.length).forEach((J,ot)=>{let[bt,At]=B.spots[ot];lt(J,B.ox+bt,B.oy,At,Math.atan2(-bt,1-At),P)})}z.visible=!1;let gt=null;if(s.bloom)try{gt=new Bo(l),gt.addPass(new ko(c,h)),gt.addPass(new Ls(new ct(256,256),.42,.7,.82)),gt.addPass(new Ho)}catch{gt=null}function $(){let P=r.clientWidth,B=r.clientHeight;l.setSize(P,B,!1),h.aspect=P/B,h.updateProjectionMatrix(),gt&&gt.setSize(P,B)}$(),window.addEventListener("resize",$);let q=o(".ew-map"),ht=q.getContext("2d"),Rt=document.createElement("canvas");Rt.width=Rt.height=248;{let P=Rt.getContext("2d"),B=P.createImageData(248,248),J=[0,0,0];for(let ot=0;ot<248;ot++)for(let bt=0;bt<248;bt++){let At=(bt/247-.5)*900,Pt=(ot/247-.5)*900,zt=ge(At,Pt);Kh(At,Pt,zt,J);let dt=(ot*248+bt)*4,Ht=zt<.4;B.data[dt]=Ht?70:J[0]*235,B.data[dt+1]=Ht?90:J[1]*235,B.data[dt+2]=Ht?120:J[2]*235,B.data[dt+3]=255}P.putImageData(B,0,0),P.fillStyle="#2a2420";for(let ot of T.B.boxes){let bt=(ot[0]/900+.5)*248,At=(ot[2]/900+.5)*248;P.fillRect(bt,At,Math.max(1.5,(ot[1]-ot[0])/900*248),Math.max(1.5,(ot[3]-ot[2])/900*248))}}function St(){let B=S.inside?0:S.x,J=S.inside?0:S.z,ot=(B/900+.5)*248,bt=(J/900+.5)*248;if(ht.setTransform(1,0,0,1,0,0),ht.fillStyle="#0b0b12",ht.fillRect(0,0,248,248),S.inside){ht.fillStyle="#7ff6ff",ht.font="600 20px Oxanium, sans-serif",ht.textAlign="center",ht.fillText("Int\xE9rieur",124,130);return}ht.translate(124,124),ht.scale(2.2,2.2),ht.translate(-ot,-bt),ht.drawImage(Rt,0,0);let At=(Pt,zt,dt,Ht)=>{ht.fillStyle=dt,ht.beginPath(),ht.arc((Pt/900+.5)*248,(zt/900+.5)*248,Ht,0,7),ht.fill()};for(let Pt of T.houses)At(Pt.x,Pt.z,"#ffd479",2.6);for(let Pt of Q)Pt.inside||At(Pt.x,Pt.z,"#7ff6ff",1.7);At(-70,100,"#3aa0ff",2.4),ht.setTransform(1,0,0,1,124,124),ht.rotate(-S.yaw+Math.PI),ht.fillStyle="#fff",ht.strokeStyle="#000",ht.lineWidth=2,ht.beginPath(),ht.moveTo(0,-9),ht.lineTo(6.5,7),ht.lineTo(0,3.5),ht.lineTo(-6.5,7),ht.closePath(),ht.stroke(),ht.fill()}let Ot=0;function Ct(P,B=""){let J=o(".ew-zone");J.querySelector("b").textContent=P,J.querySelector("i").textContent=B,J.querySelector("i").style.display=B?"":"none",J.classList.add("on"),clearTimeout(Ot),Ot=setTimeout(()=>J.classList.remove("on"),3200)}let xt={},It={mx:0,mz:0,jump:!1},I=null,pt=(P,B)=>{if(S.paused&&B&&P.code==="Escape"){tt(!1);return}xt[P.code]=B;let J=(P.key||"").toLowerCase();B&&(P.code==="Escape"?S.talking?ut():tt(!0):S.talking?(J==="e"||J==="f"||P.code==="Enter"||P.code==="Space")&&(P.preventDefault(),Xt()):J==="e"||J==="f"||P.code==="Enter"?rt():J==="m"?S.mount&&G.length>1&&xt.ShiftLeft?(K=(K+1)%G.length,nt(!0)):nt(!S.mount):J==="c"&&G.length>1?(K=(K+1)%G.length,S.mount?nt(!0):Ct(G[K].name,"Monture choisie")):P.code==="Space"&&(P.preventDefault(),It.jump=!0))},it=P=>pt(P,!0),ft=P=>pt(P,!1);window.addEventListener("keydown",it),window.addEventListener("keyup",ft);let j=null,Et={id:null,ox:0,oy:0},_t=o(".ew-stick"),A=P=>{if(!P.target.closest("button,.ew-dlg,.ew-menu,.ew-map")){if(!n&&P.clientX<r.clientWidth*.46&&P.clientY>r.clientHeight*.4&&Et.id===null){Et.id=P.pointerId,Et.ox=P.clientX,Et.oy=P.clientY,_t.style.display="block",_t.style.left=P.clientX+"px",_t.style.top=P.clientY-r.getBoundingClientRect().top-(r.clientHeight-r.querySelector(".ew-joy").clientHeight)+"px",_t.firstChild.style.transform="";return}j||(j={id:P.pointerId,x:P.clientX,y:P.clientY})}},y=P=>{if(P.pointerId===Et.id){let B=P.clientX-Et.ox,J=P.clientY-Et.oy,ot=Math.hypot(B,J),bt=52;ot>bt&&(B*=bt/ot,J*=bt/ot),_t.firstChild.style.transform=`translate(${B}px,${J}px)`,It.mx=B/bt,It.mz=J/bt}else j&&P.pointerId===j.id&&(S.camYaw-=(P.clientX-j.x)*(n?.0042:.0062),S.camPitch=Math.max(-.25,Math.min(1.2,S.camPitch+(P.clientY-j.y)*(n?.003:.0045))),j.x=P.clientX,j.y=P.clientY)},D=P=>{P.pointerId===Et.id&&(Et.id=null,It.mx=It.mz=0,_t.style.display="none"),j&&P.pointerId===j.id&&(j=null)};r.addEventListener("pointerdown",A),r.addEventListener("pointermove",y),r.addEventListener("pointerup",D),r.addEventListener("pointercancel",D);let k=P=>{S.camDist=Math.max(2.6,Math.min(22,S.camDist*(P.deltaY>0?1.1:.9))),P.preventDefault()};r.addEventListener("wheel",k,{passive:!1}),r.addEventListener("contextmenu",P=>P.preventDefault()),r.addEventListener("click",P=>{let B=P.target.closest("[data-w]");if(!B)return;let J=B.dataset.w;if(J==="act")rt();else if(J==="mount")nt(!S.mount);else if(J==="run")S.run=!S.run,B.classList.toggle("on",S.run);else if(J==="jump")It.jump=!0;else if(J==="dnext")Xt();else if(J==="dclose")ut();else if(J==="menu")tt(!0);else if(J==="resume")tt(!1);else if(J==="home")kt(!0),S.x=-6,S.z=34,S.y=ge(S.x,S.z),tt(!1);else if(J==="quit")et();else if(J==="mode"){let ot=[S.x,S.z];F.dispose(),e.onMode&&e.onMode(n?"mobile":"pc",S.inside?null:ot)}});function tt(P){S.paused=P,o(".ew-menu").classList.toggle("on",P)}function et(){let P=S.inside?null:[Math.round(S.x),Math.round(S.z)];F.dispose(),e.onExit&&e.onExit(P)}function rt(){!I||S.talking||(I.kind==="npc"?Ft(I.npc):I.kind==="house"?Qt(I.id):I.kind==="exit"?kt():I.kind==="rift"&&e.onRift&&(F.dispose(),e.onRift([Math.round(S.x),Math.round(S.z)])))}let st=0;function mt(P){let B=P.lines&&P.lines.length?P.lines:["\u2026"],J=B[P.li%B.length],ot=o(".ew-dlg p");ot.textContent="",clearInterval(st);let bt=0;st=setInterval(()=>{bt+=2,ot.textContent=J.slice(0,bt),bt>=J.length&&clearInterval(st)},18),o(".ew-dlg h4").innerHTML="",o(".ew-dlg h4").append(P.name,Object.assign(document.createElement("small"),{textContent:P.role||""})),o(".ew-bond").textContent=P.bond?"Lien "+"\u2665".repeat(Math.min(10,P.bond)):"",o('[data-w="dnext"]').style.display=B.length>1?"":"none"}function Ft(P){S.talking=P,o(".ew-dlg").classList.add("on"),o(".ew-prompt").classList.remove("on"),r.classList.add("ew-talk"),mt(P);let B=Math.atan2(S.x-P.x,S.z-P.z);P.av.group.rotation.y=B,S.yaw=B+Math.PI,e.onTalk&&e.onTalk(P.id)}function Xt(){let P=S.talking;if(!P)return;let B=o(".ew-dlg p"),J=P.lines||[],ot=J[P.li%Math.max(1,J.length)]||"";if(B.textContent.length<ot.length){clearInterval(st),B.textContent=ot;return}if(P.li++,P.li%Math.max(1,J.length)===0){ut();return}mt(P)}function ut(){clearInterval(st),S.talking=null,o(".ew-dlg").classList.remove("on"),r.classList.remove("ew-talk")}let re=null;function Qt(P){let B=M[P];B&&(nt(!1),re=[S.x,S.z,S.yaw],S.inside=P,S.x=B.ox+B.door[0],S.z=B.door[1]-.6,S.y=B.oy,S.yaw=Math.PI,S.camYaw=0,S.camDist=Math.min(S.camDist,6),z.visible=!0,R.visible=!1,c.fog.near=60,c.fog.far=200,W.position.set(B.ox,B.oy+1.6,-B.D/2+2.2),W.intensity=90,X.position.set(B.ox,B.oy+B.h-.6,1.5),X.intensity=B.hs.r>=6?160:B.hs.r===5?50:70,X.color.set(B.hs.r>=6?16774084:B.hs.r===5?10976255:16773341),g.intensity=0,d.intensity=.35,Ct(B.hs.name,B.hs.cap>=99?"Places illimit\xE9es":B.hs.cap+" places"))}function kt(P){S.inside&&(S.inside=null,z.visible=!1,R.visible=!0,c.fog.near=s.fog[0],c.fog.far=s.fog[1],W.intensity=X.intensity=0,g.intensity=2.9,d.intensity=.7,re&&!P&&(S.x=re[0],S.z=re[1],S.yaw=re[2]+Math.PI),S.y=ge(S.x,S.z))}let Ut=new U,yt=new U,qt=performance.now(),oe=!1,fe=0,$t=!0;function vt(P){if(oe)return;requestAnimationFrame(vt);let B=Math.min(.05,(P-qt)/1e3);if(qt=P,S.paused)return;S.t+=B;let J=It.mx,ot=It.mz;(xt.KeyW||xt.ArrowUp)&&(ot-=1),(xt.KeyS||xt.ArrowDown)&&(ot+=1),(xt.KeyA||xt.ArrowLeft)&&(J-=1),(xt.KeyD||xt.ArrowRight)&&(J+=1);let bt=Math.min(1,Math.hypot(J,ot));S.talking&&(bt=0);let At=S.run||xt.ShiftLeft||xt.ShiftRight,Pt=(S.mount?6.5*Zn[S.mountId].speed:At?8.2:4.6)*(S.inside?.6:1),zt=bt*Pt;if(S.speed+=(zt-S.speed)*Math.min(1,B*(S.mount?3:9)),bt>.05){let O=Math.atan2(J,ot)+S.camYaw-S.yaw;for(;O>Math.PI;)O-=6.2832;for(;O<-Math.PI;)O+=6.2832;S.yaw+=O*Math.min(1,B*(S.mount?5:11))}let dt=Math.sin(S.yaw)*S.speed*B,Ht=Math.cos(S.yaw)*S.speed*B,Yt=S.x+dt,Vt=S.z+Ht;if(S.inside){let b=M[S.inside];Yt=Math.max(b.ox-b.W/2+.8,Math.min(b.ox+b.W/2-.8,Yt)),Vt=Math.max(-b.D/2+1.9,Math.min(b.D/2-.7,Vt))}else{Yt=Math.max(-438,Math.min(438,Yt)),Vt=Math.max(-438,Math.min(438,Vt));let b=S.mount?1.1:.55;for(let O of T.B.boxes)if(Yt>O[0]-b&&Yt<O[1]+b&&Vt>O[2]-b&&Vt<O[3]+b){let V=Yt-(O[0]-b),Z=O[1]+b-Yt,Y=Vt-(O[2]-b),wt=O[3]+b-Vt,Lt=Math.min(V,Z,Y,wt);Lt===V?Yt=O[0]-b:Lt===Z?Yt=O[1]+b:Lt===Y?Vt=O[2]-b:Vt=O[3]+b}for(let O of Q)if(!O.inside){let V=Math.hypot(Yt-O.x,Vt-O.z);V<.8&&V>.001&&(Yt=O.x+(Yt-O.x)/V*.8,Vt=O.z+(Vt-O.z)/V*.8)}}S.x=Yt,S.z=Vt;let ae=S.inside?M[S.inside].oy:Math.max(ge(S.x,S.z),Math.abs(S.x-vi(S.z))<30&&Math.abs(S.z+56)<3.3&&Math.abs(S.x-vi(-56))<20?4:-99,Math.abs(S.z-24)<2.3&&S.x>186&&S.x<208?1.22:-99,Math.hypot(S.x-318,S.z-300)<96?1.32:-99);It.jump&&S.onGround&&!S.mount&&!S.talking&&(S.vy=6.4,S.onGround=!1),It.jump=!1,S.vy-=20*B,S.y+=S.vy*B,S.y<=ae?(S.y=ae,S.vy=0,S.onGround=!0):S.y-ae>.35&&(S.onGround=!1);let pe=!S.inside&&S.y<-.75?-.75-S.y:0,nn=L.group;if(S.mount){let b=S.mount;b.group.position.set(S.x,S.y+pe,S.z),b.group.rotation.y=S.yaw,b.update(B,S.speed/8),nn.position.set(S.x-Math.sin(S.yaw)*-b.seat.z,S.y+pe+b.seat.y-L.seatDrop,S.z-Math.cos(S.yaw)*-b.seat.z),nn.rotation.y=S.yaw,L.update(B,{riding:!0,wide:b.wide})}else nn.position.set(S.x,S.y+pe,S.z),nn.rotation.y=S.yaw,L.update(B,{speed:S.speed/4.6});let Hi=(S.mount?S.mount.seat.y:0)+L.height*.82,Gi=S.camDist*(S.mount?1.45:1)*(S.talking?.62:1),Us=Math.cos(S.camPitch);Ut.set(S.x,S.y+pe+Hi,S.z);for(let b of[1,.72,.5,.32,.18])if(yt.set(Ut.x+Math.sin(S.camYaw)*Us*Gi*b,Ut.y+Math.sin(S.camPitch)*Gi*b,Ut.z+Math.cos(S.camYaw)*Us*Gi*b),S.inside||yt.y-S.y>16||!T.B.boxes.some(O=>yt.x>O[0]-.4&&yt.x<O[1]+.4&&yt.z>O[2]-.4&&yt.z<O[3]+.4))break;if(S.inside){let b=M[S.inside];yt.x=Math.max(b.ox-b.W/2+.5,Math.min(b.ox+b.W/2-.5,yt.x)),yt.z=Math.max(-b.D/2+.6,Math.min(b.D/2+9,yt.z)),yt.y=Math.max(b.oy+.6,Math.min(b.oy+b.h+4,yt.y))}else{let b=Math.max(ge(yt.x,yt.z),.35)+.7;yt.y<b&&(yt.y=b)}$t?(h.position.copy(yt),$t=!1):h.position.lerp(yt,Math.min(1,B*12)),h.lookAt(Ut),_.position.copy(h.position),m.position.x=S.t*2.2%300,_.visible=m.visible=!S.inside,p.visible=v.visible=!S.inside,g.position.set(S.x+f.x*120,S.y+f.y*120+20,S.z+f.z*120),g.target.position.set(S.x,S.y,S.z),N.rotation.y+=B*.25,N.userData.m3.rotation.z-=B*1.4,N.userData.m2.material.opacity=.45+Math.sin(S.t*2.6)*.14;let _n=null,Vi=1e9;for(let b of Q){let O=b.inside===S.inside;if(b.av.group.visible=O,!O)continue;let V=Math.hypot(S.x-b.x,S.z-b.z);if(b.lb.visible=V<26,V<40&&b.av.update(B,{}),V<9&&!S.talking){let Z=Math.atan2(S.x-b.x,S.z-b.z)-b.av.group.rotation.y;for(;Z>Math.PI;)Z-=6.2832;for(;Z<-Math.PI;)Z+=6.2832;b.av.group.rotation.y+=Z*Math.min(1,B*3)}V<3.2&&V<Vi&&(Vi=V,_n={kind:"npc",npc:b,text:"Parler \xE0 "+b.name.split(" ")[0]})}if(S.inside){let b=M[S.inside];Math.hypot(S.x-b.ox-b.door[0],S.z-b.door[1])<2.2&&!_n&&(_n={kind:"exit",text:"Sortir"})}else{for(let b of T.houses){let O=Math.hypot(S.x-b.x,S.z-b.z);O<4.5&&O<Vi&&(Vi=O,_n={kind:"house",id:b.id,text:"Entrer : "+b.name})}e.onRift&&Math.hypot(S.x+70,S.z-100)<6&&!_n&&(_n={kind:"rift",text:"Faille de la gare : partir en exp\xE9dition"})}I=_n;let Ns=o(".ew-prompt");if(_n&&!S.talking){Ns.classList.add("on");let b=Ns.firstChild,O=(n?"[E]  ":"")+_n.text;b.textContent!==O&&(b.textContent=O)}else Ns.classList.remove("on");if(!S.inside){let b="",O="";for(let V of Qh)if(Math.hypot(S.x-V[0],S.z-V[1])<V[2]){b=V[3],O=V[4];break}b&&b!==S.zone&&Ct(b,O),S.zone=b}(fe+=B)>.12&&(fe=0,St()),gt?gt.render():l.render(c,h)}let F={dispose(){oe||(oe=!0,clearInterval(st),clearTimeout(Ot),window.removeEventListener("keydown",it),window.removeEventListener("keyup",ft),window.removeEventListener("resize",$),ki(c),gt&&gt.dispose&&gt.dispose(),l.dispose(),l.forceContextLoss&&l.forceContextLoss(),r.remove())},state:S,teleport(P,B){kt(!0),S.x=P,S.z=B,S.y=ge(P,B)},enter:Qt,mountOn:()=>nt(!0),look(P,B,J){S.camYaw=P,S.camPitch=B,J&&(S.camDist=J)}};return requestAnimationFrame(P=>{qt=P,vt(P),setTimeout(()=>{let B=o(".ew-load");B.style.opacity=0,setTimeout(()=>B.remove(),900),Ct("Vesp\xE9rane","Ciel couleur de rouille")},350)}),F}window.Elyos3D={avatarView:qh,startWorld:nu,groundHeight:ge,DEFAULT_LOOK:Dl,HAIR_STYLES:Wh,MOUNT_SPEED:Object.fromEntries(Object.entries(Zn).map(([i,t])=>[i,t.speed]))};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
