let tempInput;
let result;

document.getElementById("selectFtoC").onclick = function() {
    document.getElementById("submitButton").onclick = function() {
        tempInput = document.getElementById("tempInput").value;
        result = FtoC(tempInput);
        document.getElementById("result").innerHTML = `${result}° C`
    }
}

document.getElementById("selectCtoF").onclick = function() {
    document.getElementById("submitButton").onclick = function() {
        tempInput = document.getElementById("tempInput").value;
        result = CtoF(tempInput);
        document.getElementById("result").innerHTML = `${result}° F`
    }
}

function FtoC(f) {
    return (f - 32) * 5/9;
}
function CtoF(c) {
    return c * 9/5 + 32
}