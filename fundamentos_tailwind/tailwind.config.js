/** @type {import('tailwindcss').Config} */

//const { colors } = require('tailwindcss/defaultTheme')

/* A partir do momento que coloca uma regra dentro do theme, sobrescreve tudo
ou seja, é como se agora só tivese a cor black, todas as outras cores foram apagadas */

/* Consigo tambem criar breakpoints, diferente do que o Tailwind nos tras lg, md, etc..
dentro de theme usando a chave screens, mas lembrendo que ao fazer isso, o resto todo é perdido */

/* Para colocar configurações a mais usamos a chave extend */

/* Dentro do extend eu consigo mudar as cores padrão do tailwind, mas sem mudar tudo, na linha 27 eu to
mudando o gray-900 do tailwind, mantendo todas as outras */

/* Alterando o espaçamento
na chave spacing podemos alterar o espaçamento do projeto, podemos definir nossos próprios ou utilizar
o extend para adicionar mais espaçamentos no padrão do Tailwind por rem, por exemplo
ele da uma escala de tamanho para utilizarmos em algumas classes que utilizam números, ex: p- m-*/

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    /* colors: {
      'black': '#010101',
    }, */
    /* screens: {
      'tablet': '640px',
    }, */
    extend: {
      colors: {
        'new-blue': '#243C5A',
        /* gray: {
          ...colors.gray,
          '900': '#999'
        }, */
      },
      spacing: {
        '50': '20rem',
      }
    },
  },
  plugins: [],
}


