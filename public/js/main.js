$(document).ready(function() {
    moment().format("DDD DDDD");
    console.log(`gettting favorites for user: ${localStorage.getItem('userID')}`)
    var id = JSON.parse(window.localStorage.getItem('userID'))
    console.log(id.toString())
    $.ajax({
        url: "/api/favorites",
        type: "POST",
        data: {
            userID: id.toString()
        }
    }).then(function(responses) {
        console.log(responses)
        for (var i = 0; i < responses.length; i++) {
            makeHoroscopes(responses[i].horoscope)
        }
    })

    function horoscope() {
        var sign;
        $.ajax({
            type: "GET",
            url: "/api/getsign"
        }).then(function(data) {
            console.log(data)
            sign = data.sign.split(" ")
            console.log(sign)
            sign = sign[0].toLowerCase()
        }).then(function() {
            $.ajax({
                // headers: {
                //     "Content-Type": "application/json"
                // },
                type: "GET",
                url: "https://cors-anywhere.herokuapp.com/http://sandipbgt.com/theastrologer/api/horoscope/" + sign + "/today/"
                    // data: console.log(JSON.stringify(data))
            }).then(function(data) {
                console.log(data)
                console.log(JSON.parse(data))
                    //JSON object that holds data returned from API
                var parseData = JSON.parse(data)
                    //grabs card holding today's horoscope
                var horoscopeDisplay = $("#today")
                    //new div that will append the card on the screen
                var newDiv = $("<div>")
                    //paragraph element that will hold today's horoscope
                var newText = $("<p>")
                    //paragraph element that will hold today's horoscope
                var newDate = $("<p>")
                    //paragraph element that holds today's horoscope and displays on screen
                    //type:object
                newText.text(parseData.horoscope)
                console.log(newText.text(parseData.horoscope))
                console.log(typeof(newText.text(parseData.horoscope)))
                    //adds a class to newText paragraph element that holds today's horoscope
                newText.addClass("today-horoscope")
                    //does the same thing to date
                newDate.text(parseData.date)
                    //appends the div with the paragraph that reads today's horoscope
                newDiv.append(newText)
                    //appends the card with the div, which now displays the horoscope on screen
                horoscopeDisplay.append(newDiv)

                //when the heart button is clicked, run this function 
                $("#heart").on("click", function() {
                    var currentTime = moment().dayOfYear(Number);
                    console.log(currentTime)

                    // console.log(moment().endOf('day'))
                    // $("#heart").hide();
                    console.log("Saving: ", $(".today-horoscope").text())
                        // console.log(moment().endOf('day').fromNow().format('LLL'));
                        //runs the save horoscope function on today's horoscope that's currently being held in the card
                    saveHoroscope($(".today-horoscope").text())

                })
            })
        })
    }



    function saveHoroscope(horoscope) {
        //grabs userID from localStorage
        var userID = localStorage.getItem('userID')
        console.log('in api call: ', horoscope)
            //runs a post request to the api/horoscope route
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
        var savedList = $("<ul>")
        var savedHoroscope = $("<li>")
        savedHoroscope.text(horoscope)
        savedList.append(savedHoroscope)
        $('#saved-scopes').append(savedList)
    }

    horoscope();
})