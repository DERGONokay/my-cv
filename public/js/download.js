$(document).ready(function() {
    $("#download-pdf").click(function() {
        let url = `https://my-curriculum-api.herokuapp.com/api/download/link/pdf`

        fetch(url, {mode: "cors"})
        .then(response => {
            console.log(response)
            console.log(response.body)
            console.log(response.status)
        })

    })

    $("#download-docx").click(function() {
        let url = `https://my-curriculum-api.herokuapp.com/api/download/link/docx`

        fetch(url)
        .then(response => {
            console.log(response)
            console.log(response.body)
            console.log(response.status)
        })

    })
})