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

  links = {
    '10': {
      '2': 'https://www.youtube.com/embed/mttrG_kbHN4?si=JHp4rXJdKxjNKrDG',
      '8': 'https://www.youtube.com/embed/3GIAYYCfVPc?si=_-us9Qwgv8E1dcmE',
      '16': 'https://youtu.be/w1sczLF47KE?si=PGZEi3UvAM7zTwFx',
    },
    '2': {
      '10': 'https://youtu.be/zToihF2FE9I?si=crq-xUA3NocfkJrj',
      '8': 'https://youtu.be/U4MQyxIDfhE?si=Lm6e3fGhZUyTuQSN',
      '16': 'https://youtu.be/u2z-iCyLzm4?si=TnBqPCudUv2HEZbh',
    },
    '8': {
      '2': 'https://youtu.be/-qRNJt8Nj5c?si=Tr0jRIGz9_DFkN_u',
      '10': 'https://youtu.be/xfI1rs0RWw0?si=ZGByqgYq8xn5jTh4',
      '16': 'https://youtu.be/BLMTW2MTiD4?si=VoV9XqH-4It_YILM',
    },
    '16': {
      '2': 'https://youtu.be/Vctnbk0RWVY?si=8f8oFGGOEmbdp2Qc',
      '8': 'https://youtu.be/BLMTW2MTiD4?si=VoV9XqH-4It_YILM',
      '10': 'https://youtu.be/Vctnbk0RWVY?si=8f8oFGGOEmbdp2Qc',
    },
  }

  video = `<iframe width="560" height="315" src="https://www.youtube.com/embed/3GIAYYCfVPc?si=_-us9Qwgv8E1dcmE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  src = 'https://www.youtube.com/embed/3GIAYYCfVPc?si=_-us9Qwgv8E1dcmE'
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
