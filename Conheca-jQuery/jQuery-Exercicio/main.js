$(document).ready(function() {
  $('button').click( (e) => {
    e.preventDefault();
    $('ul').append(`<li>${$('input').val()} </li>`)
    $('input').val('');
  });

  $('ul').on('click', 'li', function (e) {
    $(e.target).toggleClass('done');
  });
})