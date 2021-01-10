function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

window.onload = function trendVid(){
    // prepare the request
    var request = gapi.client.youtube.search.list({
        part: ["snippet"],
        type: "video",
        q: encodeURIComponent("trending music").replace(/%20/g, "+"),
        maxResults: 20,
        mine: true,
        order: "viewCount",
        publishedAfter: "2020-01-01T00:00:00Z"
    }); 
    // execute the request
    request.execute(function(response) {
        var results = response.result;
        //console.log(results);
        $("#results").html("");
        $.each(results.items, function(index, item) {
            $.get("item.html", function(data) {
                $("#results").append(tplawesome(data, [{"title":item.snippet.title, "videoid":item.id.videoId, "description":item.snippet.description,"channeltitle":item.snippet.channelTitle,"channelid":item.snippet.channelId}]));
                //console.log(data);
            });
        });
        resetVideoHeight();
    });
    $(window).on("resize", resetVideoHeight);
}

$(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();
        // prepare the request
        var request = gapi.client.youtube.search.list({
            part: "snippet",
            type: "video",
            q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
            maxResults: 20,
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
    gapi.client.setApiKey("AIzaSyCv8NWGdjRsOHW2olmKayLqqvoxG_fG4EA");
    gapi.client.load("youtube", "v3", function() {
        // yt api is ready
    });
}