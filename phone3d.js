(function(){
var slot=document.querySelector('[data-phone-slot]'),old=document.querySelector('[data-phone]');
if(!slot||!old)return;
var B='https://cdn.jsdelivr.net/npm/three@0.160.0/';
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(pointer:fine)').matches;
function clamp(v,a,b){return Math.max(a,Math.min(b,v))}
function ease(x){return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2}
function out(x){return 1-Math.pow(1-x,3)}
/* tela: chat desenhado em canvas */
var CW=540,CH=1170,cv=document.createElement('canvas');cv.width=CW;cv.height=CH;var g=cv.getContext('2d');
function rr(x,y,w,h,r,f){g.beginPath();g.roundRect?g.roundRect(x,y,w,h,r):g.rect(x,y,w,h);g.fillStyle=f;g.fill()}
var MS=[['o','Oi! Vi o site de vocês. Fazem sistema pra clínica?','14:02'],['i','Fazemos sim! Site + agendamento + painel. Quer ver uma prévia?','14:02'],['o','Quero! Manda 🙌','14:03'],['i','Pronto, enviei. Em 7 dias seu site está no ar 🚀','14:03']];
function draw(n,typing){
g.clearRect(0,0,CW,CH);
var bg=g.createLinearGradient(0,0,0,CH);bg.addColorStop(0,'#0b1411');bg.addColorStop(1,'#0a1712');g.fillStyle=bg;g.fillRect(0,0,CW,CH);
g.fillStyle='#10201a';g.fillRect(0,0,CW,200);
g.fillStyle='#19E68C';g.beginPath();g.arc(70,142,30,0,7);g.fill();g.fillStyle='#04140d';g.font='800 26px system-ui,sans-serif';g.textAlign='center';g.fillText('A',70,152);
g.textAlign='left';g.fillStyle='#fff';g.font='600 29px system-ui,sans-serif';g.fillText('Allure Pages',118,138);g.fillStyle='#19E68C';g.font='22px system-ui,sans-serif';g.fillText('online',118,168);
g.fillStyle='#8aa';g.font='600 24px system-ui,sans-serif';g.textAlign='center';g.fillText('9:41',90,60);g.textAlign='left';
var y=240;
for(var k=0;k<n&&k<MS.length;k++){var m=MS[k],o=m[0]==='o',w=360,lines=wrap(m[1],w-44),h=lines.length*36+44;
var x=o?CW-w-24:24;rr(x,y,w,h,22,o?'#0f7a4e':'#1b2a24');g.fillStyle='#fff';g.font='25px system-ui,sans-serif';
for(var l=0;l<lines.length;l++)g.fillText(lines[l],x+22,y+40+l*36);
g.fillStyle='rgba(255,255,255,.5)';g.font='18px system-ui,sans-serif';g.textAlign='right';g.fillText(m[2],x+w-16,y+h-12);g.textAlign='left';y+=h+18}
if(typing){rr(24,y,110,56,22,'#1b2a24');g.fillStyle='#7d948a';for(var d=0;d<3;d++){g.beginPath();g.arc(56+d*22,y+28,6,0,7);g.fill()}}
rr(24,CH-150,CW-48,64,32,'#14241d');g.fillStyle='#6f867b';g.font='24px system-ui,sans-serif';g.fillText('Mensagem',56,CH-109);
}
function wrap(t,mw){var ws=t.split(' '),ls=[],c='';g.font='25px system-ui,sans-serif';ws.forEach(function(w){var s=c?c+' '+w:w;if(g.measureText(s).width>mw&&c){ls.push(c);c=w}else c=s});if(c)ls.push(c);return ls}
draw(0,false);
import(B+'+esm').then(function(T){return Promise.all([import(B+'examples/jsm/loaders/GLTFLoader.js/+esm'),import(B+'examples/jsm/libs/meshopt_decoder.module.js/+esm'),import(B+'examples/jsm/environments/RoomEnvironment.js/+esm')]).then(function(r){return init(T,r[0].GLTFLoader,r[1].MeshoptDecoder,r[2].RoomEnvironment)})}).catch(function(e){console.warn('phone3d fallback',e)});
function init(T,GLTFLoader,Meshopt,Room){
var canvas=document.createElement('canvas');canvas.setAttribute('aria-hidden','true');
canvas.style.cssText='position:fixed;left:0;top:0;width:100vw;height:100vh;height:100lvh;z-index:40;pointer-events:none;opacity:0;transition:opacity .6s';
var ren=new T.WebGLRenderer({canvas:canvas,alpha:true,antialias:true,powerPreference:'high-performance'});
ren.setPixelRatio(Math.min(devicePixelRatio||1,2));ren.outputColorSpace=T.SRGBColorSpace;ren.toneMapping=T.ACESFilmicToneMapping;ren.toneMappingExposure=1.05;
var sc=new T.Scene(),pm=new T.PMREMGenerator(ren);sc.environment=pm.fromScene(new Room(),.04).texture;
var cam=new T.PerspectiveCamera(30,1,.1,50);cam.position.set(0,0,10);
var key=new T.DirectionalLight(0xffe2c8,2.2);key.position.set(-3,4,6);sc.add(key);
var rim=new T.DirectionalLight(0x19e68c,.6);rim.position.set(4,-1,-4);sc.add(rim);
var root=new T.Group(),pivot=new T.Group();sc.add(root);root.add(pivot);
var tex=new T.CanvasTexture(cv);tex.flipY=false;tex.colorSpace=T.SRGBColorSpace;tex.anisotropy=8;
var ld=new GLTFLoader();ld.setMeshoptDecoder(Meshopt);
fetch('https://cdn.jsdelivr.net/gh/PedroBorges096/allure-assets@main/iphone17pro.glb').then(function(r){if(!r.ok)throw 0;return r.arrayBuffer()}).then(function(ab){ld.parse(ab,'/',function(gl){var m=gl.scene;pivot.add(m);
m.traverse(function(o){if(o.isMesh){var mt=o.material;if(mt.name==='screen.001'){fitUV(o.geometry);mt.map=null;mt.emissiveMap=tex;mt.emissive=new T.Color(0xffffff);mt.emissiveIntensity=1;mt.color=new T.Color(0x000000);mt.toneMapped=false;mt.needsUpdate=true}
mt.userData.o=mt.opacity;mt.userData.t=mt.transparent}});
var bb=new T.Box3().setFromObject(m),c=bb.getCenter(new T.Vector3()),s=bb.getSize(new T.Vector3());
m.position.sub(c);m.rotation.y=Math.PI/2;
var Hh=Math.max(s.x,s.y,s.z);pivot.userData.h=s.y;
start(m);
},function(e){console.warn('phone3d glb',e)})}).catch(function(e){console.warn('phone3d glb',e)});
function cp(p,i,k){return k===0?p.getX(i):k===1?p.getY(i):p.getZ(i)}
function fitUV(ge){var p=ge.attributes.position,n=p.count,mn=[1e9,1e9,1e9],mx=[-1e9,-1e9,-1e9],i,k,v=[];
for(i=0;i<n;i++){v=[p.getX(i),p.getY(i),p.getZ(i)];for(k=0;k<3;k++){if(v[k]<mn[k])mn[k]=v[k];if(v[k]>mx[k])mx[k]=v[k]}}
var ex=[mx[0]-mn[0],mx[1]-mn[1],mx[2]-mn[2]],ax=[0,1,2].sort(function(a,b){return ex[a]-ex[b]}),wa=ax[1],ha=ax[2],uv=new Float32Array(n*2),fu=1,fv=1,sw=0;
for(i=0;i<n;i++){var a=((sw?cp(p,i,ha):cp(p,i,wa))-(sw?mn[ha]:mn[wa]))/(sw?ex[ha]:ex[wa]),b=((sw?cp(p,i,wa):cp(p,i,ha))-(sw?mn[wa]:mn[ha]))/(sw?ex[wa]:ex[ha]);uv[i*2]=fu?1-a:a;uv[i*2+1]=fv?1-b:b}
ge.setAttribute('uv',new T.BufferAttribute(uv,2))}
var mats=[];
function start(model){
model.traverse(function(o){if(o.isMesh)mats.push(o.material)});
document.body.appendChild(canvas);
var st=document.createElement('style');st.textContent='.phone-slot::after{display:none}[data-phone]{display:none!important}';document.head.appendChild(st);
requestAnimationFrame(function(){canvas.style.opacity='1'});
var mx=0,my=0,cx=0,cy=0,dyaw=0,vel=0,drag=false,lx=0,lastUp=0,sy=scrollY,pp=0,t0=performance.now(),step=-1,lastDraw=0;
if(fine)addEventListener('mousemove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5},{passive:true});
function inSlot(e){var r=slot.getBoundingClientRect();return e.clientX>r.left-10&&e.clientX<r.right+10&&e.clientY>r.top&&e.clientY<r.bottom&&pp<.6}
addEventListener('pointerdown',function(e){if(inSlot(e)){drag=true;lx=e.clientX;vel=0}},{passive:true});
addEventListener('pointermove',function(e){if(!drag)return;var d=e.clientX-lx;lx=e.clientX;dyaw+=d*.012;vel=d*.012},{passive:true});
var up=function(){if(drag){drag=false;lastUp=performance.now()}};addEventListener('pointerup',up);addEventListener('pointercancel',up);
var W=0,H=0;
function size(){W=innerWidth;H=innerHeight;ren.setSize(W,H,false);cam.aspect=W/H;cam.updateProjectionMatrix()}
size();addEventListener('resize',size);
var visible=true;document.addEventListener('visibilitychange',function(){visible=!document.hidden;if(visible)requestAnimationFrame(frame)});
function frame(now){
if(!visible)return;
var t=(now-t0)/1000,vh=H,vw=W,mob=vw<900;
var sr=slot.getBoundingClientRect(),ph=sr.height,pw=sr.width;
var pageTop=sr.top+scrollY-(scrollY-sy)*0; /* topo da vaga na página (sem suavização) */
var pin=Math.max(70,(vh-ph)/2),over=Math.max(0,pin-sr.top);
var p=clamp(over/(vh*(mob?.7:.95)),0,1);pp=p;
var q=0,qe=0;
var ycen=sr.top+over*(mob?.8:.9)+ph/2+qe*vh*.2;
var xcen=sr.left+pw/2+qe*(mob?0:-vw*.05);
/* escala: px -> mundo */
var dist=10,wpp=2*dist*Math.tan(cam.fov*Math.PI/360)/vh;
var sc0=(ph*wpp)/pivot.userData.h;
var sk=(1+.08*ease(clamp(p/.5,0,1)))*(1-.82*out(q));
root.scale.setScalar(sc0*sk);
root.position.set((xcen-vw/2)*wpp,-(ycen-vh/2)*wpp,0);
var wob=reduce?0:Math.sin(t*.7)*.16;
cx+=(mx-cx)*.07;cy+=(my-cy)*.07;
if(!drag){if(Math.abs(vel)>.0005){dyaw+=vel;vel*=.94}else if(now-lastUp>2600)dyaw+=(0-dyaw)*.035}
var turn=ease(clamp(p/.55,0,1))*Math.PI*1.55;       /* gira mostrando a traseira ao rolar */
var exitSpin=qe*Math.PI*1.2;
pivot.rotation.y=-.38+wob+dyaw+(fine?cx*.5:0)+turn+exitSpin;
pivot.rotation.x=.1+(fine?cy*.25:0)+ease(clamp(p/.6,0,1))*.28-qe*.5;
root.rotation.z=-qe*.5;
var al=1;
for(var i=0;i<mats.length;i++){var mt=mats[i];if(al<.999){mt.transparent=true;mt.opacity=(mt.userData.o==null?1:mt.userData.o)*al}else{mt.transparent=!!mt.userData.t;mt.opacity=mt.userData.o==null?1:mt.userData.o}}
key.position.x=-3+p*7;
canvas.style.visibility=al<=.01?'hidden':'visible';
/* conversa animada na tela */
var u=t%11,n=u<1.2?0:u<2.6?1:u<3.6?1:u<4.8?2:u<6?3:u<7.2?3:4,ty=(u>=1.2&&u<1.9)||(u>=3.6&&u<4.2)||(u>=6.4&&u<7.1);
var kk=n*2+(ty?1:0);if(kk!==step&&now-lastDraw>120){step=kk;lastDraw=now;draw(n,ty);tex.needsUpdate=true}
if(al>.01)ren.render(sc,cam);
requestAnimationFrame(frame)}
requestAnimationFrame(frame);
}
}

(function(){var f=document.querySelector('footer');if(!f||document.querySelector('.p3d-cr'))return;var c=document.createElement('p');c.className='p3d-cr';c.style.cssText='margin:14px 0 0;font-size:12px;opacity:.55;text-align:center';c.innerHTML='Modelo 3D "iPhone 17 Pro Max" por <a href="https://sketchfab.com/3d-models/iphone-17-pro-max-87fc1df741384124a8ce0226d2b2058d" target="_blank" rel="noopener">MajdyModels</a>, licença <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>';f.appendChild(c)})();
})();