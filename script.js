
    
 //  var search=$('#search');
 //   var query=$(.'#query');
//var carousel=$('.carousel');
    var content=$('.content');
   var second=$('#second');
    var numberofresults = 20;
    var tweetnumber = 0;
   // var preview=$('.preview');
    function putdata(data){
       var status=data;
       
        
        
       
        
        
     //   $('.carousel').append('<a class="carousel-item" href="#"><center>'+
           //           status.user.screen_name+
             //         '</center><img src="'+
               //       status.user.profile_image_url_https+
                 //     '"><center><a href="'+
                   //   status.link+
                     // '"><i class="fa fa-twitter fa=2x" aria-hidden="true"></i></a></center></a>');
        
     //  $('.preview').append('<a class="carousel-item">'+'<center>'+status.user.screen_name+'</center>'+'<img src="'+status.user.profile_image_url_https+'">'+'<center><a href="'+status.link+'"> <i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></center>'+'</a>');
        if (status.images_count>0){
        content.append('<div class="div1a z-depth-5">'+
                       '<div class="d1a  z-depth-3" >'+
                       '<img height="45px" class="circle" src="'+status.user.profile_image_url_https+'"> &nbsp;'+
                       
                       status.user.screen_name+
                       
                       '<div class="right" > <a href="'+status.link+'"> <i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a></div>'+
                       '</div>'+
                       '<div class="d2a">'+
                       '<img width="100%" src="'+status.images[0]+'">'+
                       '<h5>'+
                       status.user.name+
                       '</h5>'+
                      '<i class="fa fa-quote-left fa-2x fa-pull-left fa-border" aria-hidden="true"></i>'+status.text+
                       
                       
                      '</div></div>');
        }
        else {
            content.append('<div class="div1a z-depth-5">'+
                       '<div class="d1a z-depth-3" >'+
                       '<img height="45px" class="circle" src="'+status.user.profile_image_url_https+'"> &nbsp;'+
                           
                           status.user.screen_name+
                           
                       '<div class="right" > <a href="'+status.link+'"> <i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a></div>'+
                       '</div>'+
                       '<div class="d2a">'+
                           '<h5>'+
                       status.user.name+
                       '</h5>'+
                      '<i class="fa fa-quote-left fa-2x fa-pull-left fa-border" aria-hidden="true"></i>'+status.text+
                      '</div></div>');
        }
      
        
        //content.append('<i class="fa fa-quote-left fa-2x fa-pull-left fa-border" aria-hidden="true"></i>'+status.text);
        
       // content.append('<ul class="collapsible popout" data-collapsible="accordion"> <li><div class="collapsible-header">Timestamp</div> <div class="collapsible-body">'+ status.timestamp +'</div></li>   <li>  <div class="collapsible-header">Language</div> <div class="collapsible-body">'+ status.classifier_language +'</div> </li>    <li>     <div class="collapsible-header">Country</div>    <div class="collapsible-body">'+status.place_country+'</div> </li> </ul>');
        
       // content.append('</div>'+'</div>');
        
    }
    
    
    function searchTwitter(query) {
    $.ajax({
        
        url:'https://loklak.org/api/search.json?timezoneOffset=-330'+
        '&q='+ query,success:function( result ) {
  
        var result= result;
        console.log(result);
            content.html('');
       
            
            for(var i=0;i<numberofresults;i++)
            {
                tweetnumber = i+1;
                putdata(result.statuses[i]);
                var k=i+1;
               var c=$('#'+k);
               // var c=$('#k');
                c.append('<center>'+result.statuses[i].user.screen_name+'</center>'+'<img src="'+result.statuses[i].user.profile_image_url_https+'">'+'<center><a href="'+result.statuses[1].link+'"> <i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></center>');
                               }
    }});
}
        $(document).ready(function(){
             
    $('.carousel').carousel({
        padding:100
    
    }
    );
           
               autoplay()
           
               
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 1000);
}
  //          $('.carousel-item').hover(function(){
    //            $('.carousel').carousel('next');
//    setTimeout(autoplay, 5000000);
  //       })
            
         //   $('.carousel-item').hover({stop(autoplay)}) ;
            
   //  $('.carousel').carousel();
    
        var params = $('#query').val();
        $('#search').click(function() {
            
           // window.scrollTo(550, 500);
            
           // setTimeout(function(){ window.scrollTo(550, 500);  }, 3000);
            
            
            
            
            
            
             $('html, body').animate({
        scrollTop: $(".second").offset().top
    }, 5000);
          
            tweetnumber = 0;
            params = $('#query').val();
            searchTwitter(params);
            
    });
 
});






