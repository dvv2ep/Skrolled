/* carosoule dragging functionality*/
var isDragging = false;
var startPosition=0;
var endPosition=0;
$(".carousel")
.mousedown(function(event) {
    isDragging = false;
    startPosition=event.originalEvent.screenX
})
.mousemove(function(event) {
    isDragging = true;
    endPosition=event.originalEvent.screenX
})
.mouseup(function(event) {
    var wasDragging = isDragging;
    if (wasDragging) {   
        const sensitivityInPx = 5;
        if( Math.floor(startPosition - endPosition) > sensitivityInPx ){
            $(this).carousel('next');
        }
        else if( Math.floor(startPosition - endPosition) < -sensitivityInPx ){
            $(this).carousel('prev');
        }
    }
}
); 
/* dragging functionality for mobiles */
$('.carousel').on('touchstart', function(event){
    const xClick = event.originalEvent.touches[0].pageX;
    $(this).one('touchmove', function(event){
        const xMove = event.originalEvent.touches[0].pageX;
        const sensitivityInPx = 5;
        if( Math.floor(xClick - xMove) > sensitivityInPx ){
            $(this).carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
            $(this).carousel('prev');
        }
    });
    $(this).on('touchend', function(){
        $(this).off('touchmove');
    });
});
/* aos animatin */
AOS.init({
    offset: 100, // offset (in px) from the original trigger point
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});  
//splide fliping
$(".splide__front_flip_button").on("click",function(e){ 
    var current=e.target
    while(current.className!="flip-card-inner"){
        current=current.parentNode
    }
    current.classList.toggle("rotate")
})
$(".splide__back_flip_button").on("click",function(e){
    var current=e.target  
    while(current.className!="flip-card-inner rotate"){
        current=current.parentNode
    }
    current.classList.toggle("rotate")
})