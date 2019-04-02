/******手动轮播*******/
var allButtons = $('#buttons>button')

for(let i=0; i<allButtons.length; i++){
    $(allButtons[i]).on('click', function(x){
        var index = $(x.currentTarget).index()//获取第几个button
        var px = index * -1000//1000的倍数
        $('#images').css({
            transform: 'translate('+px+'px)'
        })
    })
}

/******自动轮播*******/
var n = 0
var size = allButtons.length
allButtons.eq(n%size).trigger('click')//jQuery.eq 会获取dom然后自动封装为jQuery 4个一组循环
    .addClass('red')
    .siblings('.red').removeClass('red')
var timerId = setInterval(()=>{
    n += 1
    allButtons.eq(n%size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')
},1000)

/******浮动暂停*******/
$('.window').on('mouseenter', function(){
    window.clearInterval(timerId)
})
/******离开开始*******/
$('.window').on('mouseleave', function(){
    timerId = setInterval(()=>{
        n += 1
        allButtons.eq(n%size).trigger('click')
        .addClass('red')
        .siblings('.red').removeClass('red')
    },1000)
})