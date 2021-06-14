class Calculadora{
	constructor(){
		this.list_of_ops = ['+', '-', '*', '/']
		this.list_of_actions = ['=', 'c', 'Enter', 'Backspace', '.']
		this.saida_inferior=''
		this.saida_superior=''
		this.ultima_operacao=''
		this.exib = document.getElementById('resultado')
	}
	//função para execução dos cálculos
	operacao(operacao){
		if(this.ultima_operacao == ''){ //check se havia alguma operação inserida na linha superior para execução
			this.saida_superior = this.saida_inferior // leva a parte inferior para a superior
		}else{
			this.saida_superior = this.calcular() //calcula a operação na memória
		}
		this.ultima_operacao = operacao 
		this.saida_inferior=''
		this.exibir()
		
	}
	acao(action){
		if(action =='=' || action =='Enter'){
			this.exibirResultado()
		}else if(action =='c'){
			this.clear()
		}else if (action == 'Backspace'){
			this.back()
		}else if(action == '.' && !this.saida_inferior.includes('.')){
			this.numero('.')
		}
	}
	numero(num){ //adiciona numeros a serem exibidos
		this.saida_inferior = this.saida_inferior + num
		this.exibir()
	}
	exibirResultado(){ //exibe na tela os valores inseridos
		this.saida_inferior = this.calcular()
		this.saida_superior = ''
		this.ultima_operacao = ''
		this.exibir()
		this.saida_inferior=''
	}
	exibir(){ //monta a variável a ser exibida na tela
		if(!(this.ultima_operacao=='*'||this.ultima_operacao=='/')){ //Check if operations are division or multiplication, which are exhibited differently
			this.exib.value = this.saida_superior + ' ' + this.ultima_operacao +'\n'+ this.saida_inferior
		}else if(this.ultima_operacao=='*'){
			this.exib.value = this.saida_superior + ' ' + 'x' +'\n'+ this.saida_inferior
		}else if(this.ultima_operacao=='/'){
			this.exib.value = this.saida_superior + ' ' + '%' +'\n'+ this.saida_inferior
		}
	}
	calcular(){//calcula os valores na memória e em exibição
		resultado = eval(this.saida_superior + this.ultima_operacao + this.saida_inferior)
		return resultado.toString(10)
	}
	clear(){ //limpa a tela e a memória
		this.saida_inferior = ''
		this.saida_superior = ''
		this.ultima_operacao = ''
		this.exib.value = ""
	}
	back(){
		if(this.saida_inferior != ''){
			this.saida_inferior = this.saida_inferior.slice(0, -1)
			this.exibir()
		}else{
			this.ultima_operacao=''
			this.saida_inferior = this.saida_superior
			this.saida_superior = ''
			this.exibir()
		}
	}

}
let calc = null;
document.addEventListener("DOMContentLoaded", function(event) { //cria óbjeto da classe calculadora após carregamento da página
    calc = new Calculadora
    calc.exib.value = ''
  });
// function keyPress(event){
	
// }
document.addEventListener("keydown", (event)=>{
	console.log('key pressed')
	let key = event.key
	console.log(key)
	if(isNaN(parseFloat(key))){
		if(calc.list_of_actions.includes(key)){
			calc.acao(key)
		}else if(calc.list_of_ops.includes(key)){
			calc.operacao(key)
		}
	}else{
		let number = parseFloat(key)
		console.log('entrei aqui')
		calc.numero(number)	
	}
			
})
