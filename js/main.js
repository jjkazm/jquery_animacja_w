'use strict';

$(function () {
            var index = 0;
            var allSlides = $(".single-slide");
            $('.single-slide').eq(0).css({
                left: '0'
            })
            $('.slide-caption').eq(0).css({
                opacity: '1'
            })
                $('button.prev-slide').on({
                    'click': function () {
                        if (index > 0) {
                            index--;
                        }
                        $('.single-slide').eq(index).animate({
                            left: '0'
                        }, 800, caption)
                        $('.single-slide').eq(index + 1).animate({
                            left: '100%'
                        }, 800)

                    }
                });
                $('button.next-slide').on({
                    'click': function () {
                        if (index < allSlides.length - 1) {
                            index++;
                        }
                        $('.single-slide').eq(index - 1).animate({
                            left: '-100%'
                        }, 800, caption)
                        $('.single-slide').eq(index).animate({
                            left: '0'
                        }, 800)
                    }
                })

                function caption() {
                    $('.slide-caption').css({
                        opacity: '0'
                    })
                    $('.slide-caption').eq(index).animate({
                        opacity: '1'
                    }, 1500)
                }
            })