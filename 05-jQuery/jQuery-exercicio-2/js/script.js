$(document).ready(() => {
  $('#kitty-slick').slick({
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 2000,
  })

  $('#tel').mask('(00) 00000-0000'), {
    placeholder: '(00) 00000-0000'
  }

  $('form').validate( {
    rules: {
      nome: {
        required: true,
      },
      tel:{
        required:true,
      },
      email:{
        required: true,
      }
    },
    messages: {
      nome: 'Por favor, insira o seu nome',
    }
  })
});