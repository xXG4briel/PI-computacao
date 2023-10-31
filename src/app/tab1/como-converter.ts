const tabelaOctal = `<table>
<thead>
    <tr>
        <th>10</th>
        <th>8</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>0</td>
        <td>0</td>
    </tr>
    <tr>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td>2</td>
        <td>2</td>
    </tr>
    <tr>
        <td>3</td>
        <td>3</td>
    </tr>
    <tr>
        <td>4</td>
        <td>4</td>
    </tr>
    <tr>
        <td>5</td>
        <td>5</td>
    </tr>
    <tr>
        <td>6</td>
        <td>6</td>
    </tr>
    <tr>
        <td>7</td>
        <td>7</td>
    </tr>
    <tr>
        <td>10</td>
        <td>8</td>
    </tr>
    <tr>
        <td>11</td>
        <td>9</td>
    </tr>
    <tr>
        <td>12</td>
        <td>10</td>
    </tr>
</tbody>
</table>`;
const tabelaHexa = `<table>
<thead>
    <th>16</th>
    <th>10</th>
</thead>
<tbody>
    <tr><td>0</td><td>0</td></tr>
    <tr><td>1</td><td>1</td></tr>
    <tr><td>2</td><td>2</td></tr>
    <tr><td>3</td><td>3</td></tr>
    <tr><td>4</td><td>4</td></tr>
    <tr><td>5</td><td>5</td></tr>
    <tr><td>6</td><td>6</td></tr>
    <tr><td>7</td><td>7</td></tr>
    <tr><td>8</td><td>8</td></tr>
    <tr><td>9</td><td>9</td></tr>
    <tr><td>A</td><td>10</td></tr>
    <tr><td>B</td><td>11</td></tr>
    <tr><td>C</td><td>12</td></tr>
    <tr><td>D</td><td>13</td></tr>
    <tr><td>E</td><td>14</td></tr>
    <tr><td>F</td><td>15</td></tr>
</tbody>
</table>`;
const tabelas = `<div class="tabelas">${tabelaOctal}${tabelaHexa}</div>`


const octalParaDecimal = tabelas + `
<li>Separe cada valor e multiplicar por sua base(8). Exemplo: 244 -> 2*8 + 4*8 + 4*8</li>
<li>Multiplique pelo seu indíce iniciando da direita para esquerda e começando em 0. Exemplo -> 2*8^2 + 2*8^1 + 4*8^0(Inicia da direita para esquerda)</li>
<li>Agora temos o valor em decimal = 164.</li>`;

const hexadecimalParaDecimal = tabelas + `
<li>Separe cada valor e multiplicar por sua base(16). Exemplo: A4 -> A*16 + 4*16</li>
<li>Agora convertar para o número correspondente na tabela para decimal. Exemplo: 10*16 + 4*16</li>
<li>Multiplique pelo seu indíce iniciando da direita para esquerda e começando em 0. Exemplo -> 10*16^1 + 2*16^0(Inicia da direita para esquerda)</li>
<li>Agora temos o valor em decimal = 164.</li>`;

const binarioParaDecimal = `<li>Separe cada digito. Exemplo: 1 + 0 + 1 + 0 + 1 + 0</li>
<li>Multiple cada digito por 2 e eleve pelo seu indice iniciando da esquerda em 0. Exemplo: 1*2^5 + 0*2^4 + 1*2^3 + 0*2^2 + 1*2^1 + 0*2^0</li>
<li>Agora calcule e some tudo. Exemplo: 32 + 8 + 2</li>
<li>Agora temos o valor em decimal = 42</li>`

export const comoConverter = {
  '10': {
    '16': `<ul><li>Divida o valor em decimal cálculado pela base 16.</li>
    <li>Anote o resto da divisão até o valor do quoficiente for igual a 0.</li>
    <li>Exemplo: 161 / 16 = resto 1 e dividor 10</li>
    <li>           10 / 16 = resto 10, pois não é possível dividir</li>
    <li>Covertar o valor para letra específica que ele corresponde. A(10),B(11),C(12),D(13),E(14) e F(15)</li>
    <li>Ficando 1 = 1, 10 = A</li>
    <li>pegue o restos e organize de baixo para cima ficando assim: A1.</li></ul>`,
    '8': `<ul><li>Divida o valor em decimal cálculado pela base 8.</li>
    <li>Anote o resto da divisão até o valor do quoficiente for igual a 0.</li>
    <li>Exemplo: 10 / 8 = resto 2 e dividor 1 -> </li>
    <li>1 / 8 = resto 1, pois não é possível dividir</li>
    <li>pegue o restos e organizede baixo para cima ficando assim: 12.</li></ul>`,
    '2': `<ul><li>Divida o valor em decimal cálculado pela base 2.</li>
    <li>Anote o resto da divisão até o valor do quoficiente for igual a 0.</li>
    <li>Exemplo: 10 / 2 = resto 0 e dividor 5</li>
    <li>5 / 2 = resto 1 e dividor 2</li>
    <li>2 / 2 = resto 0 e divisor 1</li>
    <li>1 / 2 = resto 1, pois não é possível dividir</li>
    <li>pegue o restos e organize de baixo para cima ficando assim: 1010.</li></ul>`,
  },
  '16': {
    '10': hexadecimalParaDecimal,
    '2': hexadecimalParaDecimal + `<li>Divida o valor em decimal cálculado pela base 2.</li>
<li>Anote o resto da divisão até o valor do quoficiente for igual a 0.</li>
<li>Exemplo: 10 / 2 = resto 0 e dividor 5 -> </li>
<li>5 / 2 = resto 1 e dividor 2 -></li>
<li>2 / 2 = resto 0 e divisor 1 -></li>
<li>1 / 2 = resto 1, pois não é possível dividir</li>
<li>pegue o restos e organizede baixo para cima ficando assim: 1010.</li>`,
    '8': hexadecimalParaDecimal + `<li>Divida o valor em decimal cálculado pela base 8.</li>
<li>Anote o resto da divisão até o valor do quoficiente for igual a 0.</li>
<li>Exemplo: 10 / 8 = resto 2 e dividor 1 -> </li>
<li>1 / 8 = resto 1, pois não é possível dividir</li>
<li>pegue o restos e organizede baixo para cima ficando assim: 12.</li>`,
  },
  '8': {
    '10': '<ul>' + octalParaDecimal + '</ul>',
    '2': '<ul>' + octalParaDecimal + `<li>Divida o valor em decimal cálculado pela base 2.</li>
<li>Anote o resto da divisão até o valor do quoficiente for igual a 0.</li>
<li>Exemplo: 10 / 2 = resto 0 e dividor 5</li>
<li>5 / 2 = resto 1 e dividor 2</li>
<li>2 / 2 = resto 0 e divisor 1</li>
<li>1 / 2 = resto 1, pois não é possível dividir</li>
<li>pegue o restos e organize de baixo para cima ficando assim: 1010.</li>` + '</ul>',
    '16': '<ul>' + octalParaDecimal + `<li>Divida o valor em decimal cálculado pela base 16.</li>
<li>Anote o resto da divisão até o valor do quoficiente for igual a 0.</li>
<li>Exemplo: 161 / 16 = resto 1 e dividor 10</li>
<li>           10 / 16 = resto 10, pois não é possível dividir</li>
<li>Covertar o valor para letra específica que ele corresponde. A(10),B(11),C(12),D(13),E(14) e F(15)</li>
<li>Ficando 1 = 1, 10 = A</li>
<li>pegue o restos e organize de baixo para cima ficando assim: A1.</li>` + '</ul>',
  },
  '2': {
    '10': `<ul>${binarioParaDecimal}</ul>`,
    '8': `<ul>${binarioParaDecimal}<li>Divida o valor em decimal cálculado pela base 8.</li>
    <li>Anote o resto da divisão até o valor do quoficiente for igual a 0.</li>
    <li>Exemplo: 42 / 8 = resto 2 e dividor 5 -> </li>
    <li>2 / 8 = resto 2, pois não é possível dividir</li>
    <li>pegue o restos e organizede baixo para cima ficando assim: 52.</li></ul>`,
    '16': `<ul>${binarioParaDecimal}<li>Divida o valor em decimal cálculado pela base 16.</li>
    <li>Anote o resto da divisão até o valor do quoficiente for igual a 0.</li>
    <li>Exemplo: 42 / 16 = resto 10 e dividor 2</li>
    <li>           10 / 16 = resto 10, pois não é possível dividir</li>
    <li>Covertar o valor para letra específica que ele corresponde. A(10),B(11),C(12),D(13),E(14) e F(15)</li>
    <li>Ficando 2 = 2, 10 = A</li>
    <li>pegue o restos e organize de baixo para cima ficando assim: 2A.</li></ul>`,
  },
};
