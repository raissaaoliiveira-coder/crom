
AOS.init();

document.getElementById('formulario').addEventListener('submit',function(e){
e.preventDefault();
const nome=document.getElementById('nome').value;
const telefone=document.getElementById('telefone').value;
const servico=document.getElementById('servico').value;
const mensagem=document.getElementById('mensagem').value;

const texto=`Olá! Meu nome é ${nome}
Telefone: ${telefone}
Serviço: ${servico}

${mensagem}`;

window.open("https://wa.me/5511964095764?text="+encodeURIComponent(texto));
});
