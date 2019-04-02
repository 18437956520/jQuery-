/******手动轮播*******/
var allButtons = $('#buttons>button')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index() //获取第几个button
        var px = index * -1000 //1000的倍数
        $('#images').css({
            transform: 'translate(' + px + 'px)'
        })
        n = index
        activeButton(allButtons.eq(n))
    })
}

/******自动轮播*******/
var n = 0
var size = allButtons.length
playSlide(n % size)

var timerId = setTimer()

function setTimer() {
    return setInterval(() => {
        n += 1
        playSlide(n % size)
    }, 2000)
}

function playSlide(index) {
    activeButton(allButtons.eq(index).trigger('click'))
}

function activeButton($button) {
    $button.addClass('red').siblings('.red').removeClass('red')
}

/******浮动暂停*******/
$('.window').on('mouseenter', function () {
    window.clearInterval(timerId)
})

/******离开开始*******/
$('.window').on('mouseleave', function () {
    timerId = setTimer()
})