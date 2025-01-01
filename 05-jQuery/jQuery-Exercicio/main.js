$(document).ready(function() {
  $('button').click( (e) => {
    e.preventDefault();
    $('ul').append(`<li>${$('input').val()} </li>`)
  });

  $('ul').on('click', 'li', function (e) {
    $(e.target).toggleClass('done');
  });
})