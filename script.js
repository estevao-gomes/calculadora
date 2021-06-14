class Calculadora{
	constructor(){
		this.saida_inferior=''
		this.saida_superior=''
		this.ultima_operacao=''
		this.exib = document.getElementById('resultado')
	}
	//função para execução dos cálculos
	acao(action){ 
			if(this.ultima_operacao == ''){ //check se havia alguma operação inserida na linha superior para execução
				this.saida_superior = this.saida_inferior // leva a parte inferior para a superior
			}else{
				this.saida_superior = this.calcular() //calcula a operação na memória
			}
			this.ultima_operacao = action 
			this.saida_inferior=''
			this.exibir()
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
		this.exib.value = this.saida_superior + ' ' + this.ultima_operacao +'\n'+ this.saida_inferior
	}
	calcular(){//calcula os valores na memória e em exibição
		resultado = eval(this.saida_superior + this.ultima_operacao + this.saida_inferior)
		return resultado
	}
	clear(){ //limpa a tela e a memória
		this.saida_inferior = ''
		this.saida_superior = ''
		this.ultima_operacao = ''
		this.exib.value = ""
	}

}
let calc = null;
document.addEventListener("DOMContentLoaded", function(event) { //cria óbjeto da classe calculadora após carregamento da página
    calc = new Calculadora
    calc.exib.value = ''
  });
