/**
 * Created by star on 2016/8/20.
 */
define(function(require,exports,module){
    require('jquery');
   module.exports = CreateImgList;
    function CreateImgList(className,imgName,num){
        this.element = null;
        this.clsName = className;
        this.imgName = imgName;
        this.num = num;
    }
    CreateImgList.prototype.init = function(){
        var ul = this.element = $("<ul class='"+ this.clsName +" clearfix'></ul>");
        for(var i = 0 ;i<this.num;i++){
            var li = $("<li class='list' data-index='"+ i +"'></li>");
            var img = $("<img src='../img/"+ this.imgName +(i+1) +".jpg' data-index='"+ i +"'>");
            li.append(img).appendTo(ul);
            if(this.clsName == 'bigImgList' && i == 0){
                li.addClass("oneList");
            }
        }

        return ul;
    };
});