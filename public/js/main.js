// import { get } from "https"

$(document).ready(function() {
    console.log(`gettting favorites for user: ${localStorage.getItem('userID')}`)
    var id = JSON.parse(localStorage.getItem('userID'))
    console.log(id.toString())
    console.log('33')
    $.ajax({
        url: "/api/favorites",
        type: "POST",
        data: {
            userID: id.toString()
        }
    }).then(function(response) {
        console.log(response)
        var horoscopes = response.data.horoscopes
        for (var i = 0; i < horoscopes.length; i++) {
            makeHoroscopes(horoscopes[i])
        }
    })


    function horoscope() {
        var sign;
        $.ajax({
            type: "GET",
            url: "/api/getsign"
        }).then(function(data) {
            sign = data.sign.split(" ")
            sign = sign[0].toLowerCase()
        }).then(function() {
            $.ajax({
                // headers: {
                //     "Content-Type": "application/json"
                // },
                type: "GET",
                url: "http://sandipbgt.com/theastrologer/api/horoscope/" + sign + "/today/"
                    // data: console.log(JSON.stringify(data))
            }).then(function(data) {
                var parseData = JSON.parse(data)
                var horoscopeDisplay = $("#today")
                var newDiv = $("<div>")
                var newText = $("<p>")
                var newDate = $("<p>")

                newText.text(parseData.horoscope)
                newText.addClass("today-horoscope")
                newDate.text(parseData.date)
                newDiv.append(newText)
                    // newDiv.append(newDate)
                horoscopeDisplay.append(newDiv)

            })
        })
    }

    $("#heart").on("click", function() {
        console.log("Saving: ", $(".today-horoscope").text())
        saveHoroscope($(".today-horoscope").text())

    })

    function saveHoroscope(horoscope) {
        var userID = localStorage.getItem('userID')
        console.log('in api call: ', horoscope)
        $.post("/api/horoscope", {
            userID,
            horoscope
        }).then(response => {
            console.log(response)
            makeHoroscopes(horoscope)
        }).catch((err) => {
            console.log(err)
        })
    }

    function makeHoroscopes(horoscope) {
        var savedHoroscope = $("<p>")
        savedHoroscope.text(horoscope)
        $('#saved-scopes').append(savedHoroscope)
    }

    horoscope();
})