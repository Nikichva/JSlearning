$('.part').hover (
  function() {
    $('.description').html($(this).attr('description-data'));
    $('.description').fadeIn();
  },
  function() {
    $('.description').fadeOut(50);
  }
)



$('.tab-list').each(function(){                   // Находим список вкладок
  var $this = $(this);                            // Сохраняем этот список
  var $tab = $this.find('li.active');             // Получаем активный элемент списка
  var $link = $tab.find('a');                     // Получаем ссылку из активной вкладки
  var $panel = $($link.attr('href'));             // Получаем активную панель

  $this.on('click', '.tab-control', function(e) { // При щелчке по вкладке
    e.preventDefault();                           // Отменяем действие ссылки
    var $link = $(this),                          // Сохраняем текущую ссылку
        id = this.hash;                           // Получаем href нажатой вкладки

    if (id && !$link.is('.active')) {             // Если уже не активны
      $panel.removeClass('active');               // Деактивируем панель
      $tab.removeClass('active');                 // Деактивируем вкладку

      $panel = $(id).addClass('active');          // Делаем новую панель активной
      $tab = $link.parent().addClass('active');   //  Делаем новую вкладку активной
    }
  });
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




// Set the date we're counting down to
var countDownDate = new Date("Jun 5, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "D " + hours + "G "
  + minutes + "M " + seconds + "S ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


