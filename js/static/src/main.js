/**
 * Created by star on 2016/8/20.
 */
define(function(require,exports,module){
   var createImgList =  require('./createImgList');
   require('jquery');
    var smallImgList = new createImgList("smallImgList","small_",4);
    var bigImgList = new createImgList("bigImgList","big_",4);
    var bigUl = bigImgList.init();
    var smallUl = smallImgList.init();
    var warp = $("<div class='warp'></div>").append(bigUl).append(smallUl);
    $('body').append(warp);
});