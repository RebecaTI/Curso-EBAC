$(document).ready(function() {
  $('#carousel-imagens').slick({
      autoplay:true,
  });
  $('.menu-hamburguer').click(function() {
      $('nav').slideToggle();
  })

  //Breve exemplo p qndo há outras opções CELULAR ou TEL-FIXO
  //let mascara = celular ? '(00) 00000-0000' : '(00) 0000-0000' ;

  $('#telefone').mask('(00) 00000-0000', {
      placeholder: '(00) 00000-0000'
  });
  $('#data-nascimento').mask('00/00/0000' , {    //dia / mes / ano
      placeholder: '__/__/____'    //placeholder p mostrar ao usuario um exemplo
  });  
  $('#placa').mask('SSS-0000', {   //O S é p identificar letras, o 0 é p números
      placeholder: 'ABC-1234'
  });

  //Validation
  $('form').validate( {
      rules: {
          nome: {
              required: true,
          },
          email: {
              required: true,
              email: true,
          },
          telefone: {
              required: true,
          },
          mensagem: {
              required: true,
          },
          veiculoDeInteresse:{
              required: false,
          }
      },
      messages: {
          nome: 'Por favor, insira o seu nome',
      },
      submitHandler: function(form){
          console.log(form)
      },
      invalidHandler: function(evento, validador){
          let camposIncorrentos = validador.numberOfInvalids();
          console.log(camposIncorrentos)
          if (camposIncorrentos) {
              alert(`Existem ${camposIncorrentos} campos incorretos`);
          }
      }
  })

  $('.lista-veiculos button').click(function() {
    const destino = $('#contato');
    const nomeVeiculo = $(this).parent().find('h3').text();

    $('#veiculo-interesse').val(nomeVeiculo)

    $('html').animate({
      scrollTop: destino.offset().top
    }, 1000);
  })
})