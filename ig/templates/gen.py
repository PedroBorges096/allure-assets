import json,os
H='<html><head><meta charset=utf-8><link rel=stylesheet href=%s><link rel=stylesheet href=q.css></head><body><div class=grid></div><div class=glow></div><div class=glow2></div>%s</body></html>'
def post(n,tag,k,h1,p,foot):
    body=f'<div class=top><div class=brand><img src=allure-icon.png>Allure Pages</div><div class=tag>{tag}</div></div><div class=w><div class=k>{k}</div><h1>{h1}</h1><p>{p}</p></div><div class=foot><span>{foot}</span><span>@allure_pages</span></div>'
    open(f'{n}.html','w').write(H%('base.css',body))
def story(n,k,h1,p,foot,pill=''):
    body=f'<div class=brand><img src=allure-icon.png>Allure Pages</div><div class=w><div class=k>{k}</div><h1>{h1}</h1><p>{p}</p>{pill}</div><div class=foot><span>{foot}</span><span>@allure_pages</span></div>'
    open(f'{n}.html','w').write(f'<html><head><meta charset=utf-8><link rel=stylesheet href=st.css></head><body><div class=grid></div><div class=glow></div><div class=glow2></div>{body}</body></html>')
P=[
('p08','Pensa nisso','Sem dono',"Instagram é<br>endereço<br><span class=g>alugado.</span>","Se a conta cair, seu negócio some. Quem manda no seu cliente?","Descubra no <b>link na bio</b>"),
('p09','Curiosidade','Primeira impressão',"Hoje a vitrine<br>do seu negócio<br>é o <span class=g>Google.</span>","Quem pesquisa decide em segundos se confia ou não.","Veja como no <b>link na bio</b>"),
('p10','Dá uma olhada','Teste de 10 segundos',"Pesquisa o nome<br>do seu negócio<br>no <span class=g>Google.</span>","O que aparece? Se não gostou, a gente resolve.","Chama no <b>link na bio</b>"),
('p11','Pensa nisso','Pesquisaram agora',"Alguém buscou<br>&ldquo;perto de mim&rdquo;.<br><span class=g>Apareceu<br>o seu?</span>","Quem é encontrado primeiro, vende primeiro.","Vire o jogo no <b>link na bio</b>"),
('p12','Curiosidade','Fica a reflexão',"Bonito e<br>ninguém acha<br><span class=g>não vende.</span>","Ser encontrado é o primeiro passo de qualquer venda.","Saiba mais no <b>link na bio</b>"),
('p13','Pensa nisso','O que eles têm em comum',"Os pequenos<br>que crescem<br><span class=g>aparecem.</span>","Presença digital não é luxo. É o novo balcão do seu negócio.","Comece no <b>link na bio</b>"),
('p14','Curiosidade','Faz tempo?',"Seu negócio<br>mudou.<br><span class=g>Sua presença<br>digital também?</span>","Cliente de hoje pesquisa antes de ligar.","Atualize no <b>link na bio</b>"),
]
for a in P: post(*a)
pill='<div class=pill>Link na bio</div>'
S=[ # enquetes manha, meio, noite for days 2..7
('s04','Enquete','Você aparece<br>no <span class=g>Google</span><br>quando buscam<br>seu serviço?','Manda <b>SIM</b> ou <b>NÃO</b> no direct.','Responde no <b>direct</b> ↓',''),
('s05','Caixinha','Qual é o<br>seu <span class=g>tipo de<br>negócio?</span>','Manda no direct. A gente responde.','Responde no <b>direct</b> ↓',''),
('s06','Fala com a gente','Tecnologia e<br>marketing<br><span class=g>num lugar só.</span>','Site, sistema, logo, tráfego e redes sociais.','Acesse o <b>link na bio</b>',pill),
('s07','Enquete','Seu cliente<br>fala mais no<br><span class=g>Instagram</span><br>ou WhatsApp?','Manda a resposta no direct.','Responde no <b>direct</b> ↓',''),
('s08','Caixinha','O que mais<br><span class=g>toma seu<br>tempo</span> no dia<br>a dia?','Manda no direct. A gente lê tudo.','Responde no <b>direct</b> ↓',''),
('s09','Fala com a gente','Do site ao<br><span class=g>tráfego pago:</span><br>a gente cuida.','Você cuida do seu negócio.','Acesse o <b>link na bio</b>',pill),
('s10','Enquete','Você já perdeu<br>cliente por<br><span class=g>demorar</span><br>a responder?','Manda a resposta no direct.','Responde no <b>direct</b> ↓',''),
('s11','Caixinha','Qual pergunta<br>seus clientes<br><span class=g>sempre fazem?</span>','Manda no direct. Pode virar conteúdo.','Responde no <b>direct</b> ↓',''),
('s12','Fala com a gente','Seu negócio no<br><span class=g>topo do Google</span><br>começa aqui.','Chama a gente e conta sua dor.','Acesse o <b>link na bio</b>',pill),
('s13','Enquete','Sua logo é<br><span class=g>profissional?</span>','Manda a resposta no direct.','Responde no <b>direct</b> ↓',''),
('s14','Caixinha','Se pudesse<br><span class=g>automatizar<br>uma coisa,</span><br>qual seria?','Manda no direct.','Responde no <b>direct</b> ↓',''),
('s15','Fala com a gente','Logo, site<br>e redes:<br><span class=g>tudo com a<br>Allure.</span>','Um só parceiro para o seu negócio crescer.','Acesse o <b>link na bio</b>',pill),
('s16','Enquete','Você investe<br>em <span class=g>anúncios</span><br>hoje?','Manda a resposta no direct.','Responde no <b>direct</b> ↓',''),
('s17','Caixinha','O que te<br>impede de<br><span class=g>ter um site?</span>','Manda no direct. Sem julgamento.','Responde no <b>direct</b> ↓',''),
('s18','Fala com a gente','Pronto pra<br><span class=g>aparecer?</span>','A gente cuida da parte técnica.','Acesse o <b>link na bio</b>',pill),
]
for a in S: story(*a)
