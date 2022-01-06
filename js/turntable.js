let go_btn = document.getElementById("go_btn");
let reset_btn = document.getElementById("reset_btn");

let deg = 0; //轉圈後停留的度數
let offOn = true; //是否正在抽獎

reset_btn.onclick = function() {
    debugger;
    go_btn.style.transition = "none";
    go_btn.style.transform = "rotate(0deg)";
}

go_btn.onclick = function() {
    debugger;
    if (go_btn.style.transition != "") {
        go_btn.style.transition = "";
    }
    offOn = !offOn;
    rotating();
}


function rotating() {
    let timer = null;
    let rdm = 0; //隨機度數
    clearInterval(timer);
    timer = setInterval(function() {
        if (Math.floor(rdm / 360) < 4) {
            rdm = Math.floor(Math.random() * 3600);
        } else {
            go_btn.style.transform = "rotate(" + rdm + "deg)";
            clearInterval(timer);
            setTimeout(function() {
                offOn = !offOn;
                deg = rdm % 360;
            }, 4000);
        }
    }, 30)
}