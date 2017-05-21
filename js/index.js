$(function () {
    $.ajax({
        type: 'GET',
        url: 'data.json',
        dataType: 'json',
        async: false,
        success: function (data) {
            var str = ''
            for (var i = 0; i < data.length; i++) {
                str += '<div class="s-title">'
                str += '<h3 class="fl">' + data[i].title.city + '</h3>'
                str += '<a href="" class="fr">挑更多></a>'
                str += '</div>'

                if (data[i].type === 1) {
                str+='<div class="s-content1">'
                    str+='<div class="s-div">'
                    str+='<img src="'+data[i].goods[0].img+'" alt="">'
                    str+='</div>'
                    str+='<div class="clearfix s-text">'
                    str+='<div class="s-left clearfix fl">'
                    str+='<span class="text1">'+data[i].goods[0].bq[0].name+'</span>'
                    str+='<span class="text2">'+data[i].goods[0].bq[1].name+'</span>'
                    str+='<p>'+data[i].goods[0].title+'</p>'
                    str+='</div>'
                    str+='<div class="s-right fr">'
                    str+='<s>原价：RMB '+data[i].goods[0].yj+'/位</s>'
                    str+='<br>'
                    str+='<i>挑食价：RMB '+data[i].goods[0].xj+'/位</i>'
                    str+='</div>'
                    str+='</div>'
                    str+='<div class="s-bottom">'
                    str+='<i class="icon"></i>'
                    str+='<span>'+data[i].goods[0].jd+'</span>'
                    str+='</div>'
                    str+='</div>'
                } else if (data[i].type === 2) {
                str+='<div class="s-content2 clearfix">'
                    str+='<!--左-->'
                    str+='<div class="fl s2-left">'
                    str+='<div class="s2-img">'
                    str+='<img src="'+data[i].goods[0].img+'" alt="">'
                    str+='</div>'
                    str+='<div class="b-background">'
                    str+='<span class="tiao text1">'+data[i].goods[0].bq[0].name+'</span>'
                    str+='<!--<i style="color:#000;font-size: 1px;margin: 0;">23456</i>-->'
                    str+='<i class="text2" style="font-size: 10px;color: #000">'+data[i].goods[0].title+'</i>'
                    str+='<s>原价：'+data[i].goods[0].yj+'/位</s>'
                    str+='<i>挑食价：'+data[i].goods[0].xj+'/位</i>'
                    str+='</div>'
                    str+='<div class="s-icon s-bottom clearfix">'
                    str+='<i class="icon icon1 fl"></i>'
                    str+='<span class="fl">'+data[i].goods[0].jd+'</span>'
                    str+='</div>'
                    str+='</div>'
                    str+='<!--右-->'
                    str+='<div class="fr s2-left s2-right">'
                    str+='<div class="s2-img">'
                    str+='<img src="'+data[i].goods[1].img+'" alt="">'
                    str+='</div>'
                    str+='<span class="tiao text1 fr-text1" style="border: 2px solid #b7895f;color: #b7895f">'+data[i].goods[1].bq[0].name+'</span>'
                    str+='<i class="text2">'+data[i].goods[1].title+'</i>'
                    str+='<s>原价：'+data[i].goods[1].yj+'/位</s>'
                    str+='<i>挑食价：'+data[i].goods[1].xj+'/位</i>'
                    str+='<div class="s-icon s-bottom clearfix">'
                    str+='<i class="icon icon1 fl"></i>'
                    str+='<span class="fl">'+data[i].goods[1].jd+'</span>'
                    str+='</div>'
                    str+='</div>'
                    str+='</div>'
                } else if (data[i].type === 3) {
                    str+='<div class="s-content1">'
                    str+='<div class="s-div">'
                    str+='<img src="'+data[i].goods[0].img+'" alt="">'
                    str+='</div>'
                    str+='<div class="clearfix s-text">'
                    str+='<div class="s-left clearfix fl">'
                    str+='<span class="text1">'+data[i].goods[0].bq[0].name+'</span>'
                    str+='<span class="text2">'+data[i].goods[0].bq[1].name+'</span>'
                    str+='<p>'+data[i].goods[0].title+'</p>'
                    str+='</div>'
                    str+='<div class="s-right fr">'
                    str+='<s>原价：RMB '+data[i].goods[0].yj+'/位</s>'
                    str+='<br>'
                    str+='<i>挑食价：RMB '+data[i].goods[0].xj+'/位</i>'
                    str+='</div>'
                    str+='</div>'
                    str+='<div class="s-bottom">'
                    str+='<i class="icon"></i>'
                    str+='<span>'+data[i].goods[0].jd+'</span>'
                    str+='</div>'
                    str+='</div>'

                    str+='<div class="s-content2 clearfix">'
                    str+='<!--左-->'

                    str+='<div class="fl s2-left">'
                    str+='<div class="s2-img">'
                    str+='<img src="'+data[i].goods[2].img+'" alt="">'
                    str+='</div>'
                    str+='<span class="tiao text1">'+data[i].goods[2].bq[0].name+'</span>'
                    str+='<i class="text2">'+data[i].goods[1].title+'</i>'
                    str+='<s>原价：'+data[i].goods[1].xj+'/位</s>'
                    str+='<i>挑食价：'+data[i].goods[1].xj+'/位</i>'
                    str+='<div class="s-icon s-bottom clearfix">'
                    str+='<i class="icon icon1 fl"></i>'
                    str+='<span class="fl">'+data[i].goods[1].jd+'</span>'
                    str+='</div>'
                    str+='</div>'

                    str+='<!--右-->'
                    str+='<div class="fr s2-left s2-right">'
                    str+='<div class="s2-img">'
                    str+='<img src="'+data[i].goods[2].img+'" alt="">'
                    str+='</div>'
                    str+='<span class="tiao text1 fr-text1" style="border: 2px solid #b7895f;color: #b7895f">'+data[i].goods[2].bq[0].name+'</span>'
                    str+='<i class="text2">'+data[i].goods[2].title+'</i>'
                    str+='<s>原价：'+data[i].goods[2].yj+'/位</s>'
                    str+='<i>挑食价：'+data[i].goods[2].xj+'/位</i>'
                    str+='<div class="s-icon s-bottom clearfix">'
                    str+='<i class="icon icon1 fl"></i>'
                    str+='<span class="fl">'+data[i].goods[2].jd+'</span>'
                    str+='</div>'
                    str+='</div>'
                    str+='</div>'
                }
            }
            $('.shs').html(str)
        }
    })
    $.ajax({
        type:'GET',
        url:'list.json',
        syanc:false,
        dataType:'json',
        success:function(data){
            var str=''
            for(var i=0;i<data.length;i++){
            str+='<li class="color">'+data[i].tick+'</li>'
                for(var j=0;j<data[i].city.length;j++){
                    str+='<li><a href="'+data[i].city[j].link+'">'+data[i].city[j].name+'</a></li>'
                }
            }
            $('ul').html(str)
        }

    })

});