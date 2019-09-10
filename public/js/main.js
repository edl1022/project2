// import { get } from "https"

$(document).ready(function () {
    //   // The API object contains methods for each kind of request we'll make
    //   var sign = $("signs").val().trim()
    //   var API = {
    //     horoscopetoday: function(today) {
    //       return $.ajax({
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //         type: "GET",
    //         url: "http://sandipbgt.com/theastrologer/api/" + sign + "/today/",
    //         data: console.log(JSON.stringify(today))
    //       });
    //     },

    //     horoscopetomorrow: function(tomorrow) {
    //       return $.ajax({
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //         type: "GET",
    //         url: "http://sandipbgt.com/theastrologer/api/" + sign + "/tomorrow/",
    //         data: console.log(JSON.stringify(tomorrow))
    //       });
    //     },

    //     horoscopeyesterday: function(yesterday) {
    //       return $.ajax({
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //         type: "GET",
    //         url: "http://sandipbgt.com/theastrologer/api/" + sign + "/yesterday/",
    //         data: console.log(JSON.stringify(yesterday))
    //       });
    //     }
    //   };
    
    function horoscope() {
        var sign ;
        $.ajax({
            type: "GET",
            url: "/api/getsign"
        }).then(function(data){
            // console log getting sign
            console.log("Astrological Sign: " + data)
        })
        $.ajax({
            // headers: {
            //     "Content-Type": "application/json"
            // },
            type: "GET",
            url: "http://sandipbgt.com/theastrologer/api/horoscope/capricorn/today/"
            // data: console.log(JSON.stringify(data))
        }).then(function (data) {
            var parseData = JSON.parse(data)
            console.log(parseData.horoscope)
            var horoscopeDisplay = $("#today")
            var newDiv = $("<div>")
            var newText = $("<p>")
            var newDate = $("<p>")
            
            newText.text(parseData.horoscope)
            newDate.text(parseData.date)
            newDiv.addClass("today-horoscope")
            newDiv.append(newText)
            newDiv.append(newDate)
            horoscopeDisplay.append(newDiv)

        })
    }

    $("#heart").on("click", function(){
        console.log("Success!")
    })



    horoscope();

})