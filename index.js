$(function() {
    $('.hamburger').click(()=> {
    console.log('hamburger was clicked');
    $('#main-menu-nav').toggleClass('hidden')
    });
})

$(function() {
    $('.main > li a').click(function() {
    console.log('list item was clicked');
    console.log($(this).next());
    $(this).next('nav').toggleClass('hidden')
    });
})


// function toggleMenu (){
//  ${}
//     let element = document.getElementById("main-menu-nav");
//     if (element.getAttribute("class")=== "hidden"){
//     element.setAttribute("class", "active");
//     console.log('if block');
//     }
//     else {
//       element.setAttribute("class", "hidden");
//       console.log('else block');
//     }
// }
// function toggleItems(id){
//     let element = document.getElementById(id);
//     if (element.getAttribute("class")=== "hidden"){
//     element.setAttribute("class", "active");
//     console.log('if block');
//     }
//     else {
//       element.setAttribute("class", "hidden");
//       console.log('else block');
//     }
// }