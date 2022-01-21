var index = 0;
var index2 = 1;
var index3 = 2;
var index4 = 3;
var index5 = 4;
$.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function(data) {
        // console.log(data.rss.channel.item)
        $('#first').on('click', '#prev', function (event) {
            event.preventDefault();
            if (index < 8){
                index = 0
            }else{
                index-=8
            }
        });
        $('#second').on('click', '#prev2', function (event) {
            event.preventDefault();
            if (index2 < 8){
                index2 = 1
            }else{
                index2 -=8
            }
        });
        $('#third').on('click', '#prev3', function (event) {
            event.preventDefault();
            if (index3 < 8){
                index3 = 2
            }else{
                index3 -=8
            }
        });
        $('#four').on('click', '#prev4', function (event) {
            event.preventDefault();
            if (index4 < 8){
                index4 = 3
            }else{
                index4 -=8
            }
        });
        $('#five').on('click', '#prev5', function (event) {
            event.preventDefault();
            if (index5 < 8){
                index5 = 4
            }else{
                index5 -=8
            }
        });
        var item = data.rss.channel.item
        var parseData = getData(item)
        var printData = $('<h1 class="display-5 fw-normal">'+ parseData.title+'</h1><p class="lead fw-normal">'+parseData.des+'</p><a href="'+ parseData.link+'" type="button" class="btn btn-outline-secondary">Read More</a><div class="my-3 d-flex justify-content-between"> <a id="prev" class="pointer previousb round">&#8249;</a> <a id="next" class="pointer nextb round">&#8250;</a> </div>')
        var cat = $('<cite class="text-secondary">Category: '+ parseData.category+'</cite>')
        $(printData).hide().appendTo("#first").fadeIn(1000);
        $(cat).hide().appendTo("#category").fadeIn(1000);
        index+=5
        var print = setInterval(function() {
            document.getElementById("first").innerHTML = "";
            document.getElementById("category").innerHTML = "";
            var parseData = getData(item)
            var printData = $('<h1 class="display-5 fw-normal">'+ parseData.title+'</h1><p class="lead fw-normal">'+parseData.des+'</p><a href="'+ parseData.link+'" type="button" class="btn btn-outline-secondary">Read More</a><div class="my-3 d-flex justify-content-between"> <a id="prev" class="pointer previousb round">&#8249;</a> <a id="next" class="pointer nextb round">&#8250;</a> </div>')
            var cat = $('<cite class="text-secondary" >Category: '+ parseData.category+'</cite>')
            $(printData).hide().appendTo("#first").fadeIn(1000);
            $(cat).hide().appendTo("#category").fadeIn(1000);
            index+=5
            if(index+5 > item.length){
                index = 0
            }
        }, 3000);
        var parseData = getData2(item)
        var printData = $('  <h4 class="display-06">'+ parseData.title+'</h4> <p class="lead display-10">'+parseData.des+'</p> <a href="'+ parseData.link+'" type="button" class="btn btn-outline-light">Read More</a> <div class="my-3 d-flex justify-content-between"> <a id="prev2" class="pointer previous round">&#8249;</a><a href="next" class="pointer next round">&#8250;</a></div>')
        var cat = $('<cite class="text-secondary">Category: '+ parseData.category+'</cite>')
        $(printData).hide().appendTo("#second").fadeIn(1000);
        $(cat).hide().appendTo("#category2").fadeIn(1000);
        index2+=5
        var print = setInterval(function() {
            document.getElementById("second").innerHTML = "";
            document.getElementById("category2").innerHTML = "";
            var parseData = getData2(item)
            var printData = $(' <h5 class="display-06">'+ parseData.title+'</h5> <p class="lead">'+parseData.des+'</p> <a href="'+ parseData.link+'" type="button" class="btn btn-outline-light">Read More</a> <div class="my-3 d-flex justify-content-between"> <a id="prev2" class="pointer previous round">&#8249;</a><a href="next" class="pointer next round">&#8250;</a></div>')
            var cat = $('<cite class="text-secondary" >Category: '+ parseData.category+'</cite>')
            $(printData).hide().appendTo("#second").fadeIn(1000);
            $(cat).hide().appendTo("#category2").fadeIn(1000);
            index2+=5
            if(index2+5 > item.length){
                index2 = 1
            }
        }, 4000);
        var parseData = getData3(item)
        var printData = $('  <h4 class="display-06">'+ parseData.title+'</h4> <p class="lead display-10">'+parseData.des+'</p> <a href="'+ parseData.link+'" type="button" class="btn btn-outline-secondary">Read More</a> <div class="my-3 d-flex justify-content-between"> <a id="prev3" class="pointer previousb round">&#8249;</a><a href="next" class="pointer nextb round">&#8250;</a></div>')
        var cat = $('<cite class="text-secondary">Category: '+ parseData.category+'</cite>')
        $(printData).hide().appendTo("#third").fadeIn(1000);
        $(cat).hide().appendTo("#category3").fadeIn(1000);
        index3+=5
        var print = setInterval(function() {
            document.getElementById("third").innerHTML = "";
            document.getElementById("category3").innerHTML = "";
            var parseData = getData3(item)
            var printData = $(' <h5 class="display-06">'+ parseData.title+'</h5> <p class="lead">'+parseData.des+'</p> <a href="'+ parseData.link+'" type="button" class="btn btn-outline-secondary">Read More</a> <div class="my-3 d-flex justify-content-between"> <a id="prev3" class="pointer previousb round">&#8249;</a><a href="next" class="pointer nextb round">&#8250;</a></div>')
            var cat = $('<cite class="text-secondary" >Category: '+ parseData.category+'</cite>')
            $(printData).hide().appendTo("#third").fadeIn(1000);
            $(cat).hide().appendTo("#category3").fadeIn(1000);
            index3+=5
            if(index3+5 > item.length){
                index3 = 2
            }
        }, 3000);
        var parseData = getData4(item)
        var printData = $('  <h4 class="display-06">'+ parseData.title+'</h4> <p class="lead display-10">'+parseData.des+'</p> <a href="'+ parseData.link+'" type="button" class="btn btn-outline-secondary">Read More</a> <div class="my-3 d-flex justify-content-between"> <a id="prev4" class="pointer previousb round">&#8249;</a><a href="next" class="pointer nextb round">&#8250;</a></div>')
        var cat = $('<cite class="text-secondary">Category: '+ parseData.category+'</cite>')
        $(printData).hide().appendTo("#four").fadeIn(1000);
        $(cat).hide().appendTo("#category4").fadeIn(1000);
        index4+=5
        var print = setInterval(function() {
            document.getElementById("four").innerHTML = "";
            document.getElementById("category4").innerHTML = "";
            var parseData = getData4(item)
            var printData = $(' <h5 class="display-06">'+ parseData.title+'</h5> <p class="lead">'+parseData.des+'</p> <a href="'+ parseData.link+'" type="button" class="btn btn-outline-secondary">Read More</a> <div class="my-3 d-flex justify-content-between"> <a id="prev4" class="pointer previousb round">&#8249;</a><a href="next" class="pointer nextb round">&#8250;</a></div>')
            var cat = $('<cite class="text-secondary" >Category: '+ parseData.category+'</cite>')
            $(printData).hide().appendTo("#four").fadeIn(1000);
            $(cat).hide().appendTo("#category4").fadeIn(1000);
            index4+=5
            if(index4+5 > item.length){
                index4 = 3
            }
        }, 4000);
        var parseData = getData5(item)
        var printData = $('  <h4 class="display-06">'+ parseData.title+'</h4> <p class="lead display-10">'+parseData.des+'</p> <a href="'+ parseData.link+'" type="button" class="btn btn-outline-light">Read More</a> <div class="my-3 d-flex justify-content-between"> <a id="prev5" class="pointer previous round">&#8249;</a><a href="next" class="pointer next round">&#8250;</a></div>')
        var cat = $('<cite class="text-secondary">Category: '+ parseData.category+'</cite>')
        $(printData).hide().appendTo("#five").fadeIn(1000);
        $(cat).hide().appendTo("#category5").fadeIn(1000);
        index5+=5
        var print = setInterval(function() {
            document.getElementById("five").innerHTML = "";
            document.getElementById("category5").innerHTML = "";
            var parseData = getData5(item)
            var printData = $(' <h5 class="display-06">'+ parseData.title+'</h5> <p class="lead">'+parseData.des+'</p> <a href="'+ parseData.link+'" type="button" class="btn btn-outline-light">Read More</a> <div class="my-3 d-flex justify-content-between"> <a id="prev5" class="pointer previous round">&#8249;</a><a href="next" class="pointer next round">&#8250;</a></div>')
            var cat = $('<cite class="text-secondary" >Category: '+ parseData.category+'</cite>')
            $(printData).hide().appendTo("#five").fadeIn(1000);
            $(cat).hide().appendTo("#category5").fadeIn(1000);
            index5+=5
            if(index5+5 > item.length){
                index5 = 4
            }
        }, 3000);
        
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
});
function News(title, des, link, category) {
    this.title = title;
    this.des = des;
    this.link = link;
    this.category =category
  }
function getData(item){
    title = item[index].title
    des = item[index].description
    link = item[index].link
    cat = item[index].category
    console.log(link)
    const n = new News(title,des,link,cat)
    console.log(n)
    return n
}
function getData2(item){
    title = item[index2].title
    des = item[index2].description
    link = item[index2].link
    cat = item[index2].category
    console.log(link)
    const n = new News(title,des,link,cat)
    console.log(n)
    return n
}
function getData3(item){
    title = item[index3].title
    des = item[index3].description
    link = item[index3].link
    cat = item[index3].category
    console.log(link)
    const n = new News(title,des,link,cat)
    console.log(n)
    return n
}
function getData4(item){
    title = item[index4].title
    des = item[index4].description
    link = item[index4].link
    cat = item[index4].category
    console.log(link)
    const n = new News(title,des,link,cat)
    console.log(n)
    return n
}
function getData5(item){
    title = item[index5].title
    des = item[index5].description
    link = item[index5].link
    cat = item[index5].category
    console.log(link)
    const n = new News(title,des,link,cat)
    console.log(n)
    return n
}



