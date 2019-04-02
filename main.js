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