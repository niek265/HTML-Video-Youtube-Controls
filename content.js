// content.js
$(document).ready(function () {
    $(document).on('keypress',function(e) {
        if (e.target.tagName === "VIDEO") {
            if (e.which === 74 || e.which === 106) {
                e.target.currentTime = e.target.currentTime - 10
            }
            else if (e.which === 76 || e.which === 108) {
                e.target.currentTime = e.target.currentTime + 10
            }
            else if (e.which === 75 || e.which === 107) {
                if (e.target.paused) {
                    e.target.play()
                        }
                else {
                    e.target.pause()
                        }
                    }
                }
        else if (e.target.children[0].tagName === "VIDEO") {
            if (e.which === 74 || e.which === 106) {
                e.target.children[0].currentTime = e.target.children[0].currentTime - 10
            }
            else if (e.which === 76 || e.which === 108) {
                e.target.children[0].currentTime = e.target.children[0].currentTime + 10
            }
            else if (e.which === 75 || e.which === 107) {
                if (e.target.children[0].paused) {
                    e.target.children[0].play()
                }
                else {
                    e.target.children[0].pause()
                }
            }
                }
            }
        )
    }
)

