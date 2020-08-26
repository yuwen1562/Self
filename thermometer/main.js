function cto() {
    debugger;
    var C = Number(document.getElementById("inputC").value);
    if (!C || C < -273.15) {
        document.getElementById("inputF").value = '';
        document.getElementById("inputK").value = '';
        document.getElementById("inputR").value = '';
    } else {
        F = C * 9 / 5 + 32;
        F = F.toFixed(2);
        document.getElementById("inputF").value = F;

        K = C + 273.15;
        K = K.toFixed(2);
        document.getElementById("inputK").value = K;

        R = (C + 273.15) * 9 / 5;
        R = R.toFixed(2);
        document.getElementById("inputR").value = R
    }
}

function fto() {
    debugger;
    var F = Number(document.getElementById("inputF").value);
    if (!F || F < -459.67) {
        document.getElementById("inputC").value = '';
        document.getElementById("inputK").value = '';
        document.getElementById("inputR").value = '';
    } else {
        C = (F - 32) * 5 / 9;
        C = C.toFixed(2);
        document.getElementById("inputC").value = C;

        K = (F + 459.67) * 5 / 9;
        K = K.toFixed(2);
        document.getElementById("inputK").value = K;

        R = F + 459.67;
        R = R.toFixed(2);
        document.getElementById("inputR").value = R
    }
}

function kto() {
    debugger;
    var K = Number(document.getElementById("inputK").value);
    if (!K || K < 0) {
        document.getElementById("inputC").value = '';
        document.getElementById("inputF").value = '';
        document.getElementById("inputR").value = '';
    } else {
        C = K - 273.15;
        C = C.toFixed(2);
        document.getElementById("inputC").value = C;

        F = K * 9 / 5 - 459.67;
        F = F.toFixed(2);
        document.getElementById("inputF").value = F;

        R = K * 9 / 5;
        R = R.toFixed(2);
        document.getElementById("inputR").value = R
    }

}

function rto() {
    debugger;
    var R = Number(document.getElementById("inputR").value);
    if (!R || R < 0) {
        document.getElementById("inputC").value = '';
        document.getElementById("inputF").value = '';
        document.getElementById("inputK").value = '';
    } else {
        C = (R - 491.67) * 5 / 9;
        C = C.toFixed(2);
        document.getElementById("inputC").value = C;

        F = R - 459.67;
        F = F.toFixed(2);
        document.getElementById("inputF").value = F;

        K = R * 5 / 9;
        K = K.toFixed(2);
        document.getElementById("inputK").value = K;
    }
}