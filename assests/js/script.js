function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 10,
            order: "viewCount",
            publishedAfter: "2020-01-01T00:00:00Z"
       }); 
       // execute the request
       request.execute(function(response) {
          var results = response.result;
          console.log(results);
          $("#results").html("");
          $.each(results.items, function(index, item) {
            $.get("item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId, "description":item.snippet.description,"channeltitle":item.snippet.channelTitle,"channelid":item.snippet.channelId}]));
            });
          });
          resetVideoHeight();
       });
    });
    $(window).on("resize", resetVideoHeight);
});

function resetVideoHeight() {
    $(".video").css("height", $("#results").width() * 9/16);
}

function init() {
    gapi.client.setApiKey("AIzaSyCVOEUTAe2MBknKjo3zkgbYWDPTwmIoqkU");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
    });
}


/*
$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.playlists.list({
            part: ["snippet,contentDetails"],
            maxResults: 25,
            mine: true
       }); 
       // execute the request
       request.execute(function(response) {
          var results = response.result;
          console.log(results);
          $("#results").html("");
          $.each(results.items, function(index, item) {
            $.get("item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId,"channeltitle":item.snippet.channelTitle, "description":item.snippet.description,"id":item.id}]));
            });
            
          });
          resetVideoHeight();
       });
       
    });
    
    $(window).on("resize", resetVideoHeight);
});
*/

/*
$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.playlistItems.list({
            part: 'snippet',
            maxResults: 3,
            playlistId: 'PL2fnLUTsNyq7A335zB_RpOzu7hEUcSJbB'
       }); 
       // execute the request
       request.execute(function(response) {
          var results = response.result;
          console.log(results);
          $("#results").html("");
          $.each(results.items, function(index, item) {
            $.get("item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId,"channeltitle":item.snippet.channelTitle, "description":item.snippet.description,"playlistid":item.snippet.resourceId.videoId}]));
            });
            
          });
          resetVideoHeight();
       });
       
    });
    
    $(window).on("resize", resetVideoHeight);
});
*/

/*
$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.playlists.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 10,
            order: "viewCount",
            publishedAfter: "2020-01-01T00:00:00Z"
       }); 
       // execute the request
       request.execute(function(response) {
          var results = response.result;
          console.log(results);
          $("#results").html("");
          $.each(results.items, function(index, item) {
            $.get("item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId,"channeltitle":item.snippet.channelTitle, "description":item.snippet.description,"channelid":item.snippet.channelId}]));
            });
            
          });
          resetVideoHeight();
       });
       
    });
    
    $(window).on("resize", resetVideoHeight);
});
/*


/*
$(function() {
    $("form").on("submit", function(e) {
       e.preventDefault();
       // prepare the request
       var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            relatedToVideoId: "Ks-_Mh1QhMc",
            type: "video",
            maxResults: 3,
            order: "viewCount",
            publishedAfter: "2020-01-01T00:00:00Z",
       }); 
       // execute the request
       request.execute(function(response) {
          var results = response.result;
          console.log(results);
          $("#results").html("");
          $.each(results.items, function(index, item) {
            $.get("item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId,"channeltitle":item.snippet.channelTitle, "description":item.snippet.description}]));
                
            });
            
          });
          resetVideoHeight();
       });
       
    });
    
    $(window).on("resize", resetVideoHeight);
});
*/
