let deplacement = []
$(document).on('mousemove', function(e) {
    setTimeout(function() {
        $('#cursor').css({
            left: e.pageX,
            top: e.pageY
        });
    }, 50);
});
$(document).ready(function () {
    $('#presentation').css({
        transform: 'translate(-50%, -50%)',
        left: '50%',
        top: '50%'
    })
})