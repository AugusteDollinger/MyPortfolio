let deplacement = []
$(document).on('mousemove', function(e) {
    setTimeout(function() {
        $('#cursor').css({
            left: e.pageX,
            top: e.pageY
        });
    }, 50);
});
$('#about').draggable()
$(document).ready(function () {
    $('#presentation').css({
        transform: 'translate(-50%, -50%)',
        left: '50%',
        top: '50%'
    })
    $('#about').css({
        right: '70%',
        bottom: '20%',
        transition: 'right 2s ease, bottom 2s ease'
    })
})