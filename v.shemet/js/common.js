particlesJS('particles-js', {
<<<<<<< HEAD
  particles: {
    color: '#fff',
    shape: 'circle',
    opacity: 0.6,
    size: 4,
    size_random: true,
    nb: 130,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#fff',
      opacity: 0.7,
      width: 1,
      condensed_mode: {
        enable: true,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 250
    },
    detect_on: 'canvas',
    mode: 'grab',
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push',
        nb: 6
      },
      resize: true
    }
  },
  retina_detect: true
});
new WOW().init();

$(document).on('load', function () {
  $("a.ancLinks").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html,body').animate({scrollTop: destination}, 1000);
    return false;
  });
});

$('#menu-toggle').on('click', function () {
  $(this).toggleClass('open');
});

$('.toggle-icon').on('click', function () {
  $('#nav-container').toggleClass('pushed');
=======
    particles: {
        color: '#fff',
        shape: 'circle',
        opacity: 0.6,
        size: 4,
        size_random: true,
        nb: 130,
        line_linked: {
            enable_auto: true,
            distance: 100,
            color: '#fff',
            opacity: 0.7,
            width: 1,
            condensed_mode: {
                enable: true,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: true,
            speed: 1
        }
    },
    interactivity: {
        enable: true,
        mouse: {
            distance: 250
        },
        detect_on: 'canvas',
        mode: 'grab',
        line_linked: {
            opacity: .5
        },
        events: {
            onclick: {
                enable: true,
                mode: 'push',
                nb: 6
            },
            resize: true
        }
    },
    retina_detect: true
});

new WOW().init();
// Nav
$(document).ready(function () {
    $("a.ancLinks").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate({scrollTop: destination}, 1000);
        return false;
    });
});
$('#menu-toggle').click(function () {
    $(this).toggleClass('open');
});


$('.toggle-icon').click(function() {
    $('#nav-container').toggleClass('pushed');
>>>>>>> 081e824f3222ca1b33c9eb9af415ffc35d17368d
});