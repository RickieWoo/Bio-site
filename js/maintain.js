$(document).ready(function(){
  // document.getElementById("img1").hover();

  $("#img1").hover(function(){
    $(".m-img").css("background-image","url(./img/1.jpg)");
  });
  $("#img2").hover(function(){
    $(".m-img").css("background-image","url(./img/2.jpg)");
  });
  $("#img3").hover(function(){
    $(".m-img").css("background-image","url(./img/3.jpg)");
  });
  $("#img4").hover(function(){
    $(".m-img").css("background-image","url(./img/4.jpg)");
  });
  $("#img5").hover(function(){
    $(".m-img").css("background-image","url(./img/5.jpg)");
  });


});

var mySwiper = new Swiper('.swiper-container', {
  autoplay: 3000,//可选选项，自动滑动
  pagination : '.swiper-pagination',
  paginationClickable :true,
  // loop: true
});
// function check_number(){
//   var value = $("#login").value;
//   function check_validate1(value){
//     var reg = /^[UM]+\d+$/;
//     if( value.constructor === String ){
//     var re = value.match( reg );
    
//   }
//     $("#notice").text = "wrong";
//   }
// }
function isNumber(){
 isNum = /^[0-9]*$/;
 alert(isNum.test($("#login").value));
}