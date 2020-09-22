//Sticky Navbar

window.onscroll = function() {
    myFunction()
  };
  
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      document.getElementById("stickyimg").style.display = "flex";
    } else {
      navbar.classList.remove("sticky");
      document.getElementById("stickyimg").style.display = "none";
    }
  }

/* Mobile Navbar */

$("#toggle").click(function() {
    $(this).toggleClass('expanded').siblings('div').slideToggle();
  });


 /* Read More */
 
 function readMore(){
     if(document.getElementById("moreinfo").style.display === "none"){
        document.getElementById("moreinfo").style.display = "flex";
        document.getElementById("close").style.display = "flex";
        document.getElementById("read").style.display = "none";
    } else {
        document.getElementById("moreinfo").style.display = "none";
        document.getElementById("close").style.display = "none";
        document.getElementById("read").style.display = "flex";
    }
 };

  /*expand venn */

  function expandVenn(){
      if(document.getElementById("imageid").style.width === "50%"){
          document.getElementById("imageid").style.width = "100%";
          document.getElementById("imageid").style.paddingBottom = "10%";
      } else {
          document.getElementById("imageid").style.width = "50%";
          document.getElementById("imageid").style.paddingBottom = "10px";
      }
  };

  /* Show more/Less of a specific testimonial*/

  $(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 100;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Read more";
    var lesstext = "Read less";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

