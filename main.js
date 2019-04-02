
$(p1).on('click', function () {
    $(images).addClass('position-1')
    .removeClass('position-2').removeClass('position-3').removeClass('position-4')
})
$(p2).on('click', function () {
    $(images).addClass('position-2').removeClass('position-1').removeClass('position-3').removeClass('position-4')
})
$(p3).on('click', function () {
    $(images).addClass('position-3').removeClass('position-1').removeClass('position-2').removeClass('position-4')
})
$(p4).on('click', function () {
    $(images).addClass('position-4').removeClass('position-1').removeClass('position-2').removeClass('position-3')
})