$(document).ready(function() {
    $("#download-pdf").click(function() {
        let url = `https://my-curriculum-api.herokuapp.com/api/download/link/pdf`

        Swal.fire({
            title: "Submit your email",
            text: "This is optional ;)",
            confirmButtonText: "There you go",
            cancelButtonText: "Nah",
            preConfirm: (email) => {
                if(email) {
                    fetch(`https://my-curriculum-api.herokuapp.com/api/download/register`, {
                        method: "POST",
                        body: JSON.stringify({email: email, docRype: "pdf"})
                    })
                }
            }
        }).then(_ => {
            fetch(url)
            .then(response => {
                response.json().then(downloadResponse => {
                    if(downloadResponse.url) {
                        window.location = downloadResponse.url
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'The download url is not available :('
                          })
                    }
                })
            })
        })


    })

    $("#download-docx").click(function() {
        let url = `https://my-curriculum-api.herokuapp.com/api/download/link/docx`

        Swal.fire({
            title: "Submit your email",
            text: "This is optional ;)",
            confirmButtonText: "There you go",
            cancelButtonText: "Nah",
            preConfirm: (email) => {
                if(email) {
                    fetch(`https://my-curriculum-api.herokuapp.com/api/download/register`, {
                        method: "POST",
                        body: JSON.stringify({email: email, docRype: "docx"})
                    })
                }
            }
        }).then(_ => {
            fetch(url)
            .then(response => {
                response.json().then(downloadResponse => {
                    if(downloadResponse.url) {
                        window.location = downloadResponse.url
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'The download url is not available :('
                          })
                    }
                })
            })
        })

    })
})

function DownloadResponse(url) {
    this.url = url
}