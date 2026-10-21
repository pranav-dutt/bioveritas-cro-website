// Airline-route style map: India hub → regions served (no countries highlighted).
(async function(){
const el=document.getElementById('rmap');if(!el||!window.d3)return;
const W=960,H=470,svg=d3.select(el),NS='http://www.w3.org/2000/svg';
const w=await fetch('assets/data/countries-110m.json').then(r=>r.json());
const all=topojson.feature(w,w.objects.countries);all.features=all.features.filter(f=>f.id!=='010');
const proj=d3.geoNaturalEarth1().fitExtent([[8,8],[W-8,H-8]],all);
// dotted land via offscreen canvas sampling
const cv=document.createElement('canvas');cv.width=W;cv.height=H;const cx=cv.getContext('2d');
const gp=d3.geoPath(proj,cx);cx.fillStyle='#000';cx.beginPath();gp(all);cx.fill();
const ind=all.features.find(f=>f.id==='356');const cv2=document.createElement('canvas');cv2.width=W;cv2.height=H;const cx2=cv2.getContext('2d');cx2.beginPath();d3.geoPath(proj,cx2)(ind);cx2.fill();
const A=cx.getImageData(0,0,W,H).data,B=cx2.getImageData(0,0,W,H).data,step=7;
const dots=svg.append('g');
for(let y=step/2;y<H;y+=step)for(let x=step/2;x<W;x+=step){const i=((y|0)*W+(x|0))*4+3;if(A[i]>0)dots.append('circle').attr('class','dot'+(B[i]>0?' in':'')).attr('cx',x).attr('cy',y).attr('r',B[i]>0?2.1:1.5);}
const hub=proj([78.5,22.5]);
const R=[['North America',[-100,42],'end'],['Europe',[12,50],'end'],['Middle East',[46,26],'end'],['Africa',[22,-4],'end'],['Asia-Pacific',[122,18],'start'],['Australia & Oceania',[140,-26],'start']];
const routes=svg.append('g'),marks=svg.append('g'),labels=svg.append('g');
R.forEach((r,i)=>{const p=proj(r[1]);const dx=p[0]-hub[0],dy=p[1]-hub[1],d=Math.hypot(dx,dy);
const mx=(hub[0]+p[0])/2,my=(hub[1]+p[1])/2,lift=Math.min(.42*d,170);
const c=[mx+dy/d*lift*(dx<0?1:-1)*.25,my-lift];
const dstr=`M${hub[0]},${hub[1]} Q${c[0]},${c[1]} ${p[0]},${p[1]}`;
routes.append('path').attr('class','route-base').attr('d',dstr);
routes.append('path').attr('class','route').attr('d',dstr).style('animation-delay',(-i*3)+'s');
const pl=document.createElementNS(NS,'circle');pl.setAttribute('r','3');pl.setAttribute('class','plane');
const am=document.createElementNS(NS,'animateMotion');am.setAttribute('dur',(5+i*.6)+'s');am.setAttribute('repeatCount','indefinite');am.setAttribute('path',dstr);am.setAttribute('begin',(-i*1.3)+'s');pl.appendChild(am);routes.node().appendChild(pl);
marks.append('circle').attr('class','reg-ring').attr('cx',p[0]).attr('cy',p[1]).attr('r',9).style('animation-delay',(i*.4)+'s');
marks.append('circle').attr('class','reg').attr('cx',p[0]).attr('cy',p[1]).attr('r',5.5);
pill(p[0]+(r[2]==='end'?-12:12),p[1],r[0],r[2],'');});
marks.append('circle').attr('class','hub-ring').attr('cx',hub[0]).attr('cy',hub[1]).attr('r',12);
marks.append('circle').attr('class','hub').attr('cx',hub[0]).attr('cy',hub[1]).attr('r',7.5);
pill(hub[0],hub[1]+30,'India · Coordination base','middle','hub-l');
function pill(x,y,t,anchor,cls){const gg=labels.append('g').attr('class','pill '+cls);const tx=gg.append('text').attr('class','lbl').attr('x',x).attr('y',y).attr('dy','.35em').attr('text-anchor',anchor).text(t);const b=tx.node().getBBox();gg.insert('rect','text').attr('class','lbl-bg').attr('x',b.x-9).attr('y',b.y-5).attr('width',b.width+18).attr('height',b.height+10).attr('rx',(b.height+10)/2);}
})();
