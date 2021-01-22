$(document).ready(function() {
    $("#download-pdf").click(function() {
        download("pdf")
    })

    $("#download-docx").click(function() {
        download("docx")
    })
})

function download(format) {

    let HOST = "my-curriculum-api.herokuapp.com"

    Swal.fire({
        title: "Submit your email",
        text: "This is optional ;)",
        confirmButtonText: "There you go",
        showCancelButton: true,
        cancelButtonText: "Nah",
        showLoaderOnConfirm: true,
        input: "email",
        preConfirm: (email) => {
            if(email) {
                fetch(`https://${HOST}/api/download/register`, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email: email, docType: format})
                })
            }
        }
    }).then(_ => {
        fetch(`https://${HOST}/api/download/link/${format}`)
        .then(response => {
            response.json().then(downloadResponse => {
                if(downloadResponse.url) {
                    window.open(downloadResponse.url, "_balnk")
                } else {
                    unavailableAlert()
                }
            })
        })
    })
}

function unavailableAlert() { 
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The download url is not available :('
    })
}

function DownloadResponse(url) {
    this.url = url
}