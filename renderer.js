document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById('getMediaBtn').onclick = ev => {
        navigator.mediaDevices
            .getUserMedia({
                audio: true,
                video: false
            }).then(() => {
            console.log("got audio")
        });
    };

});
