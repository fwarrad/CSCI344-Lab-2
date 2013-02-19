var main = function() {
  
  var twitter = new ctwitter.CTwitter();
   
      // ctwitter funtion start
      twitter.stream("statuses/filter", { lang:"en", track:["galaxy s3", "htc m7"] }, function (stream) {
         stream.on("data", function (tweet) {

            //feeds out to html file
            $("#twitter").append("<li>"+tweet.text+"</li>");
            $("#twitter-images").append("<img src='"+tweet.profile_image_url+"' />");
           
            // prints 10 tweets at a time
            if($("li").length > 10) {
               
              $("li:first").remove();
            }
            
            // prints 10 user images at a time
            if($("twitter-images").length > 10) {
               
              $("twitter-images:first").remove();
            }
            
            // feeds out to console. 
            console.log(tweet.text);
            
            // swaps tweets for images and vice versa
            $("#twitter").delay(7000).fadeOut(1000);
            $("#twitter-images").delay(8000).fadeIn(1000).delay(2000).fadeOut(800);
            $("#twitter").delay(3500).fadeIn(500);     
         
         }); 
      });

}


$(document).ready(main);