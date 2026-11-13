CSS='''.m{position:absolute;filter:drop-shadow(0 30px 50px rgba(1,210,138,.25))}
.mw{position:absolute;left:80px;right:80px;display:flex;flex-direction:column}
.mw h1{font-size:100px}
.mw p{margin-top:34px;font-size:38px;max-width:440px}
.ring{position:absolute;border-radius:50%;border:2px solid rgba(1,210,138,.25)}
'''
open('m.css','w').write(CSS)
H='<html><head><meta charset=utf-8><link rel=stylesheet href=base.css><link rel=stylesheet href=q.css><link rel=stylesheet href=m.css></head><body><div class=grid></div><div class=glow></div><div class=glow2></div>%s</body></html>'
def m(n,tag,k,h1,p,foot,img,imgstyle,wstyle,extra=''):
    body=f'<div class=top><div class=brand><img src=allure-icon.png>Allure Pages</div><div class=tag>{tag}</div></div>{extra}<img class=m src={img}_t.png style="{imgstyle}"><div class=mw style="{wstyle}"><div class=k>{k}</div><h1>{h1}</h1><p>{p}</p></div><div class=foot><span>{foot}</span><span>@allure_pages</span></div>'
    open(f'{n}.html','w').write(H%body)
R='<div class=ring style="width:640px;height:640px;right:-40px;bottom:70px"></div><div class=ring style="width:480px;height:480px;right:40px;bottom:150px"></div>'
m('m01','Curiosidade','Boa ideia','Sua melhor<br>ideia ainda<br><span class=g>não foi<br>encontrada.</span>','Ser visto vem antes de ser escolhido.','Descubra no <b>link na bio</b>','robo-ideia','height:540px;right:50px;bottom:115px','top:190px',R)
m('m02','Pensa nisso','Tic tac','Seu cliente<br>decide em<br><span class=g>5 segundos.</span>','O que ele vê quando pesquisa por você?','Veja no <b>link na bio</b>','robo-relogio','height:600px;right:60px;bottom:110px','top:190px',R)
m('m03','Checklist','Será que falta algo?','Seu negócio<br>está <span class=g>pronto<br>pra ser<br>achado?</span>','Marca o que você já tem: site, Google, logo, redes.','Faça o teste no <b>link na bio</b>','robo-checklist','height:560px;right:50px;bottom:115px','top:190px',R)
m('m04','Fica a reflexão','Conta a sua','Seu negócio<br>tem história.<br><span class=g>Alguém já<br>leu?</span>','Quem não aparece, não é lembrado.','Comece no <b>link na bio</b>','robo-lapis','height:540px;right:50px;bottom:115px','top:190px',R)
m('m05','Pensa nisso','Cliente perdido','Quem não te<br>acha, compra<br><span class=g>do vizinho.</span>','Todo dia alguém procura o que você vende.','Mude isso no <b>link na bio</b>','robo-triste','height:600px;right:70px;bottom:110px','top:190px',R)
