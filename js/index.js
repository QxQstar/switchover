/**
 * Created by Administrator on 2016/8/18.
 */

$(document).ready(function(){
    function Component(big,small){
        this.small = small;
        this.big = big;
        this.smallImgList = null;
        this.warp = null;
        this.bigImgList = null
    }
    Component.prototype.createdSmallImg = function(){
        var smallImgList = this.smallImgList = $("<ul class='smallImgList clearfix'></ul>");
        var li;
        for(var i = 0;i<4;i++){
            li = $("<li class='list' data-index="+ i +"></li>");
            li.append($("<img src='../img/"+ this.small + (i+1) +".jpg' data-index="+ i +">"));
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
            li = $("<li class='list'></li>").css("z-index",4-i);
            li.append($("<img src='../img/"+this.big +  (i+1) +".jpg'>"));
            this.bigImgList.append(li);
        }
        this.bigImgList.find('li').first().addClass("oneList");
        this.warp.append(bigImgList);
        return this;
    };
    Component.prototype.insertDocument = function(){
        this.createdWarp()
            .createdBigImg()
            .createdSmallImg()
            .warp.appendTo($('body'));

    };
    var listObj = new Component("big_","small_");
    listObj.insertDocument();
});
