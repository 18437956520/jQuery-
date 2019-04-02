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
allButtons.eq(n%4).trigger('click')//jQuery.eq 会获取dom然后自动封装为jQuery 4个一组循环
setInterval(()=>{
    n += 1
    allButtons.eq(n%4).trigger('click')
},1000)

