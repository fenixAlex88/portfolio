$(function(){

/*FILTER=============*/
let filter = $("[data-filter]");
filter.on("click", function(event) {
   event.preventDefault();
   let cat = $(this).data('filter');
   if (cat == 'all')
   $("[data-cat]").removeClass('hide');
   else {
   $("[data-cat]").each(function(){
      if ($(this).data('cat') != cat) {
         $(this).addClass('hide');
      } else {
         $(this).removeClass('hide');
      }
   });
};
});

/*MODAL=============*/
const modalCall =$("[data-modal]");
const modalClose = $("[data-close]");
modalCall.on("click", function(event){
   event.preventDefault();
   let $this = $(this);
   let modalId = $this.data('modal');
   $(modalId).addClass('show');
   $("body").addClass('no-scroll');
   setTimeout(function(){
       $(modalId).find(".modal__dialog").css({
      transform: "rotateX(0)"
       })
       },200);
       $('#worksSlider').slick('setPosition');
});

modalClose.on("click", function(event){
   event.preventDefault();
   let $this = $(this);
   let modalParent = $this.parents('.modal');
   modalParent.find(".modal__dialog").css({
      transform: "rotateX(90deg)"
       })
   setTimeout(function(){
   modalParent.removeClass('show');
   $("body").removeClass('no-scroll');
   }, 200);
});

$(".modal").on("click", function(){
   let $this = $(this);
   $this.find(".modal__dialog").css({
      transform: "rotateX(90deg)"
       });
   setTimeout(function(){
   $this.removeClass('show');
   $("body").removeClass('no-scroll');
}, 200);
});

$(".modal__dialog").on("click", function(event){
   event.stopPropagation();
});


/*SLIDER https://kenwheeler.github.io/slick/==================*/
$('#worksSlider').slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   fade: true,
   arrows: false,
   dots: true
 });

 $(".slickPrev").on("click", function(event) {
   event.preventDefault();
   $('#worksSlider').slick("slickPrev");
 });

 $(".slickNext").on("click", function(event) {
   event.preventDefault();
   $('#worksSlider').slick("slickNext");
 });

 /*MobileNav========*/
const navTogle = $("#navToggle");
const nav = $("#nav");
navTogle.on("click", function (event){
   event.preventDefault();
   nav.toggleClass("show");
})
})