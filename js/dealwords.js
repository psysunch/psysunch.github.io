$(document).ready(function(){
  btns='<button type="button" name="tg-en">en</button><button type="button" name="tg-ipa">ipa</button><button type="button" name="tg-meaning">meaning</button><button type="button" name="tg-remember">remember</button><button type="button" name="tg-example">example</button><button type="button" name="tg-detail">detail</button>';
  $(".control-box").append(btns);
  $("button[name=tg-en]").click(function(){
    $(".word_title-wrap").toggleClass("hide");
  });
  $("button[name=tg-ipa]").click(function(){
    $(".word_ipa").toggleClass("hide");
  });
  $("button[name=tg-meaning]").click(function(){
    $(".word_meaning-list").toggleClass("hide");
  });
  $("button[name=tg-remember]").click(function(){
    $(".word_remember-list").toggleClass("hide");
  });
  $("button[name=tg-example]").click(function(){
    $(".word_example-list").toggleClass("hide");
  });
  $("button[name=tg-detail]").click(function(){
    $(".word_detail").toggleClass("hide");
  });
  $(".word_title-wrap").click(function(){
    w = $(this).children(".word_title").text();
    s = "#word-"+w;
    d = $(s).find(".word_detail");
    d.toggleClass("hide");
    //d.find(".hide").removeClass("hide");
  });
});