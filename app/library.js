
function StringSplosion (str){
    
        this.str = str;
        this.manipulate = function () {
        temp = '';
        final_str = '';
        for (var i = 0; i < this.str.length; i++) {
            temp += this.str[i];
            final_str += temp;
        }
        return (final_str);
    }
    

}


module.exports= StringSplosion;


//module.exports = {
//    StringSplosion: function (str) {
//        this.str = str;
//        this.manipulate = function (str) {
//        temp = '';
//        final_str = '';
//        for (var i = 0; i < str.length; i++) {
//            temp += str[i];
//            final_str += temp;
//        }
//        return (final_str);
//    }
//    }
//
//    
//
//
//}
//    var stringSplosion = new StringSplosion(str);
