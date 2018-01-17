'use strict';

$(function(){
    var index = 0;
    var allSlides = $(".single-slide");
    console.log(allSlides.length);
    
    console.log(allSlides[index])
    
    $('.single-slide').eq(index).css("width","100%");
    
    $('button.prev-slide').on({
        'click': function(){
            if(index>0){
                index--;
            }
            $('.single-slide').css("width","0");
            $('.single-slide').eq(index).css("width","100%");
        }
    });
     $('button.next-slide').on({
        'click': function(){
            if(index<allSlides.length-1){
                index++;
            }
            $('.single-slide').css("width","0");
            $('.single-slide').eq(index).css("width","100%");
        }
    })
console.log(index);    
})