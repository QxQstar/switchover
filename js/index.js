/**
 * Created by Administrator on 2016/8/18.
 */

$(document).ready(function(){
    function Component(big,small){
        this.small = small;
        this.big = big;
        this.smallImgList = null;
        this.warp = null;
        this.bigImgList = null;
        this.index = 0;
        this.timer =  undefined
    }
    Component.prototype.createdSmallImg = function(){
        var smallImgList = this.smallImgList = $("<ul class='smallImgList clearfix'></ul>");
        var li;
        for(var i = 0;i<4;i++){
            li = $("<li class='list' data-index="+ i +"></li>");
            li.append($("<img src='../img/"+ this.small + (i+1) +".jpg' data-index="+ i +">"));
            if(i == 0){
                li.css('opacity','1');
            }else{
                li.css('opacity','0.4')
            }
            this.smallImgList.append(li);
        }
        this.warp.append(smallImgList);
        return this;
    };
    Component.prototype.createdWarp = function(){
        this.warp = $("<div class='warp'></div>");
        return this;
    };
    Component.prototype.createdBigImg = function(){
        var bigImgList = this.bigImgList = $("<ul class='bigImgList clearfix'></ul>");
        var li;
        for(var i = 0;i<4;i++){
            li = $("<li class='list' data-index="+ i +"></li>").css("z-index",4-i);
            li.append($("<img src='../img/"+this.big +  (i+1) +".jpg'>"));
            this.bigImgList.append(li);
        }
        this.bigImgList.find('li').first().addClass("oneList");
        this.warp.append(bigImgList);
        return this;
    };
    //将生产的元素插入文档
    Component.prototype.insertDocument = function(){
        this.createdWarp()
            .createdBigImg()
            .createdSmallImg()
            .warp.appendTo($('body'));
        return this;
    };
    Component.prototype.addEvent = function(){
        this.smallImgList.find('li').mouseenter(enterCallBack)
                                    .end().mouseleave(this.autoPlay);
        return this;
    };
    function enterCallBack(event){
        var $target = event.target;
        var $index = listObj.index= $($target).attr("data-index");
        listObj.stop().Animated($index);
    }
    //执行动画
    Component.prototype.Animated = function($index){
        var smallImgList = this.smallImgList;
        var $smallLi = smallImgList.find("li");
        var $bigImgList = this.bigImgList;
        var $bigLi = $bigImgList.find("li");
        $bigLi.each(function(index,ele){
            if($(ele).attr('data-index') === $index){
                $(ele).stop().animate({"opacity":"1"},350);
            }else{
                $(ele).stop().animate({"opacity":"0"},350);
            }
        });
        $smallLi.each(function(index,ele){
            if($(ele).attr('data-index') === $index){
                $(ele).stop().animate({"opacity":"1"},350);
            }else{
                $(ele).stop().animate({"opacity":"0.4"},350);
            }
        });
        return this;
    };
    //自动执行
    Component.prototype.autoPlay = function(){
        var $this = listObj;
        $this.timer = setTimeout(function(){
            $this.index = Number($this.index);
            if($this.index == 3){
                $this.index = 0;
            }else{
                $this.index ++;
            }
            $this.index = $this.index.toString();
            $this.Animated($this.index )
                 .autoPlay();
        },4000);

    };
    //清除定时器
    Component.prototype.stop = function(){
        clearInterval(listObj.timer);
        return this;
    };
    var listObj = new Component("big_","small_");
    listObj
            .insertDocument()
            .addEvent()
            .autoPlay();
});
