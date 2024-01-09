const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const btnCor = document.querySelector('[data-cor]')
const img = document.querySelector('[data-roboimg]')

const pecas = {
	bracos: {
		forca: 29,
		poder: 35,
		energia: -21,
		velocidade: -5,
	},

	blindagem: {
		forca: 41,
		poder: 20,
		energia: 0,
		velocidade: -20,
	},
	nucleos: {
		forca: 0,
		poder: 7,
		energia: 48,
		velocidade: -24,
	},
	pernas: {
		forca: 27,
		poder: 21,
		energia: -32,
		velocidade: 42,
	},
	foguetes: {
		forca: 0,
		poder: 28,
		energia: 0,
		velocidade: -2,
	},
};
const corRobo = [
	{
		cor: 'vermelho',
		url: '../img/robotron-vermelho.png',
	},
	{
		cor: 'azul',
		url: '../img/robotron-azul.png',
	},
	{
		cor: 'amarelo',
		url: '../img/robotron-amarelo.png',
	},
	{
		cor: 'rosa',
		url: '../img/robotron-rosa.png',
	},
	{
		cor: 'preto',
		url: '../img/robotron-preto.png',
	},
	{
		cor: 'branco',
		url: '../img/robotron-branco.png',
	},
];
let i = 0;

controle.forEach((elemento) => {
	elemento.addEventListener('click', (evento) => {
		manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
		atualizaEstatisticas(evento.target.dataset.peca);
	});
});

function manipulaDados(operacao, controle) {
	const peca = controle.querySelector('[data-contador]');
	if (operacao === '-') {
		peca.value = parseInt(peca.value) - 1;
	} else {
		peca.value = parseInt(peca.value) + 1;
	}
}

function atualizaEstatisticas(peca) {
	estatisticas.forEach((elemento) => {
		elemento.textContent =
		parseInt(elemento.textContent) +
		pecas[peca][elemento.dataset.estatistica];
	});
}

function mudarCor()
{
	if (i < corRobo.length) {
		img.setAttribute('src', corRobo[i].url);
		img.setAttribute('alt', 'Robotron');
		btnCor.value = 'Mudar cor';
		console.log(corRobo[i].url);
		console.log(i);
		i++
	} else {
		i = 0;
		img.setAttribute('src', '');
		img.setAttribute('alt', '');
		btnCor.value = 'Escolha Uma cor'
	}
}
btnCor.addEventListener('click', (e) =>
{
	e.preventDefault();
	mudarCor()
})