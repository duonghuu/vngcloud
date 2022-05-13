function scrollToElm(elm) {
  const element = document.getElementById(elm);
  
  element.scrollIntoView();
}
$(document).ready(function() {
    $('.homepage-nav li a').click(function(e){
        e.preventDefault()
        
        const elmId = this.attributes.href.value;
        $('.homepage-nav li a').removeClass('active')
        $(this).addClass('active')
        scrollToElm(elmId)
       
    })
});