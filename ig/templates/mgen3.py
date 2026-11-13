CSS='''.m{position:absolute;filter:drop-shadow(0 30px 50px rgba(1,210,138,.25))}
.rb{position:absolute;right:60px;bottom:115px;width:520px;height:580px;display:flex;align-items:flex-end;justify-content:center}
.rb img{max-width:100%;max-height:100%;object-fit:contain;filter:drop-shadow(0 30px 50px rgba(1,210,138,.25))}
.sel{position:absolute;right:50px;bottom:640px;height:190px;transform:rotate(12deg);filter:drop-shadow(0 20px 30px rgba(0,0,0,.4))}
.mw{position:absolute;left:80px;top:190px;width:900px;display:flex;flex-direction:column}
.mw h1{font-size:100px;line-height:.98}
.mw p{margin-top:34px;font-size:38px;line-height:1.3;max-width:440px}
.ring{position:absolute;border-radius:50%;border:2px solid rgba(1,210,138,.25);width:640px;height:640px;right:-40px;bottom:70px}
.ring.b{width:480px;height:480px;right:40px;bottom:150px}
'''
open('m3.css','w').write(CSS)
H='<html><head><meta charset=utf-8><link rel=stylesheet href=base.css><link rel=stylesheet href=q.css><link rel=stylesheet href=m3.css></head><body><div class=grid></div><div class=glow></div><div class=glow2></div>%s</body></html>'
def m(n,tag,k,h1,p,foot,img,selo=False):
    s='<img class=sel src=selo-desconto_t.png>' if selo else ''
    body=f'<div class=top><div class=brand><img src=allure-icon.png>Allure Pages</div><div class=tag>{tag}</div></div><div class=ring></div><div class="ring b"></div><div class=rb><img src={img}_t.png></div>{s}<div class=mw><div class=k>{k}</div><h1>{h1}</h1><p>{p}</p></div><div class=foot><span>{foot}</span><span>@allure_pages</span></div>'
    open(f'{n}.html','w').write(H%body)
m('m01','Curiosidade','Boa ideia','Sua melhor<br>ideia ainda<br><span class=g>não foi<br>encontrada.</span>','Ser visto vem antes de ser escolhido.','Descubra no <b>link na bio</b>','robo-ideia')
m('m02','Pensa nisso','Tic tac','Seu cliente<br>decide em<br><span class=g>5 segundos.</span>','O que ele vê quando pesquisa por você?','Veja no <b>link na bio</b>','robo-relogio')
m('m03','Checklist','Será que falta algo?','Seu negócio<br>está <span class=g>pronto<br>pra ser<br>achado?</span>','Marca o que você já tem: site, Google, logo, redes.','Faça o teste no <b>link na bio</b>','robo-checklist')
m('m04','Fica a reflexão','Conta a sua','Seu negócio<br>tem história.<br><span class=g>Alguém já<br>leu?</span>','Quem não aparece, não é lembrado.','Comece no <b>link na bio</b>','robo-lapis')
m('m06','Lançamento','Condição especial','Desconto de<br><span class=g>lançamento</span><br>pra você<br>sair na frente.','Os primeiros clientes da Allure têm condição especial.','Chama no <b>direct</b>','robo-presente',True)
m('m08','Sobre nós','Prazer','Somos a<br><span class=g>Allure<br>Pages.</span>','Tecnologia e marketing pra pequenos negócios aparecerem e crescerem.','Conheça no <b>link na bio</b>','robo-tchau')
