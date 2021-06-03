class Calculadora{
	constructor(){
		this.saida_inferior=''
		this.saida_superior=''
		this.ultima_operacao=''
		this.exib = document.getElementById('resultado')
	}
	//função para execução dos cálculos
	acao(action){
			if(this.ultima_operacao == ''){
				this.saida_superior = this.saida_inferior 
			}else{
				this.saida_superior = this.calcular()
			}
			this.ultima_operacao = action
			this.saida_inferior=''
			this.exibir()
	}
	numero(num){
		this.saida_inferior = this.saida_inferior + num
		this.exibir()
		console.log(this.saida)
	}
	exibirResultado(){
		this.saida_inferior = this.calcular()
		this.saida_superior = ''
		this.ultima_operacao = ''
		this.exibir()
		this.saida_inferior=''
	}
	exibir(){
		this.exib.value = this.saida_superior + ' ' + this.ultima_operacao +'\n'+ this.saida_inferior
	}
	calcular(){
		resultado = eval(this.saida_superior + this.ultima_operacao + this.saida_inferior)
		return resultado
	}

}
let calc = null;
document.addEventListener("DOMContentLoaded", function(event) {
    calc = new Calculadora
    calc.exib.value = ''
  });
