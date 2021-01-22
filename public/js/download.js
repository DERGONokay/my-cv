$(document).ready(function() {
    $("#download-pdf").click(function() {
        let url = `https://my-curriculum-api.herokuapp.com/api/download/link/pdf`

        fetch(url)
        .then(response => {
            console.log(response)
            window.location = response
        })

    })
})