import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  tipos: Array<{ base: number, label: string }> = [
    { base: 2,  label: 'Binário' },
    { base: 8,  label: 'Octal' },
    { base: 10, label: 'Decimal' },
    { base: 16, label: 'Hexadecimal' },
  ];

  nomeBase: any = {
    2: 'Binário',
    8: 'Octal',
    10: 'Decimal',
    16: 'Hexadecimal'
  };

  tiposValores: any = {
    10: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    16: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ],
    8: ["0", "1", "2", "3", "4", "5", "6", "7"],
    2: ["0", "1"],
  };

  valorDe:   number = 10;
  valorPara: number = 2;

  entrada: string = '';
  resultado: string = '';
  decimal: number = 0;

  mostraConta: boolean = true;
  conta: string = '';
  conversao: string[] = [];

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  verificar(): boolean {

    const regex: any = {
      16: /^[0-9A-Fa-f]+$/,
      10: /^(0|[1-9][0-9]*)$/,
      2: /^[0-1]+$/,
      8: /^(0|[1-7][0-7]*)$/,
    }


    if(!this.entrada) {
      alert('Coloque um valor para ser convertido');
      return false;
    }

    if(this.valorDe === this.valorPara) {
      alert("Não é possível converter o mesmo tipo !");
      this.resultado = '';
      return false;
    }

    if (!regex[this.valorDe].test(this.entrada)) {
      alert(`Valores aceitos: ${this.tiposValores[this.valorDe].join(' ,')}`);
      return false;
    }
    return true;
  }

  converter() {

    if(!this.verificar()) {
      this.mostraConta = false;
      return;
    }

    this.converterDePara();

    this.mostrarConta();

  }

  private converterDePara() {
    if (this.valorDe !== 10) {
      this.decimal = parseInt(this.entrada, this.valorDe)

      this.resultado = this.decimal.toString();

      if (this.valorPara !== 10) {
        this.resultado = Number(this.resultado).toString(this.valorPara);
      }
    }
    else {
      this.decimal = parseInt(this.entrada);
      this.resultado = this.decimal.toString(this.valorPara);
    }
  }

  limpar() {
    this.mostraConta = false;
    this.conta = '';
    this.conversao = [];
    this.resultado = '';
  }

  mostrarConta() {
    this.mostraConta = true;
    if(this.valorDe !== 10) {

      const calculo = this.entrada.split('')
      .reverse()
      .map((value, index) => `${this.verificarLetra(value)} * ${this.valorDe}^${index}`)
      .reverse()
      .join(' + ');

      this.conta = `${calculo} = ${this.decimal}`;
    }

    let decimal = this.decimal;

    this.conversao = [];
    while (decimal > 0) {
      const resto = decimal % this.valorPara;
      this.conversao.push(`${decimal} / ${this.valorPara} com um resto de ${resto}`);
      decimal = Math.floor(decimal / this.valorPara);
    }
  }

  verificarLetra(letra: string){
    letra = letra.toLocaleUpperCase();
    if(this.valorDe === 16 ) {
      const letras: any = {"A": '10', "B": '11', "C": '12', "D": '13', "E": '14', "F": '15'};
      const letraNumero = letras[letra];

      if(!letraNumero) {
        return letra;
      }
      return letraNumero;
    }
    return letra;
  }



}
