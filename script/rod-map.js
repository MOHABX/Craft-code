// function to_front(){
//     document.getElementById("front").style.display="grid"
//     document.getElementsByClassName("map").style.display="none"
// }
// function to_backend(){
//     document.getElementById("back").style.display="grid"
// }
// function to_database(){
//     document.getElementById("database").style.display="grid"
// }
// function to_fulltask(){
//     document.getElementById("fulltask").style.display="grid"
// }
// function to_ai(){
//     document.getElementById("ai").style.display="grid"
// }
// function to_securte(){
//     document.getElementById("securty").style.display="grid"
// }
// function to_network(){
//     document.getElementById("network").style.display="grid"
// }
// function to_os(){
//     document.getElementById("os").style.display="grid"
// }
// function to_cloud(){
//     document.getElementById("cloud").style.display="grid"
// }
// function to_mobileapp(){
//     document.getElementById("mobileapp").style.display="grid"
// }

function hideAll() {
    var maps = document.getElementsByClassName("map");
    for (var i = 0; i < maps.length; i++) {
        maps[i].style.display = "none";
    }
}

function to_front(){
    hideAll(); // أخفِ الكل أولاً
    document.getElementById("front").style.display = "grid"; // أظهر المطلوب
}

function to_backend(){
    hideAll();
    document.getElementById("back").style.display = "grid";
}

function to_database(){
    hideAll();
    document.getElementById("database").style.display = "grid";
}

// كرر نفس النمط (hideAll) لبقية الدوال...
function to_fulltask(){ hideAll(); document.getElementById("fulltask").style.display="grid"; }
function to_ai(){ hideAll(); document.getElementById("ai").style.display="grid"; }
function to_securte(){ hideAll(); document.getElementById("securty").style.display="grid"; }
function to_network(){ hideAll(); document.getElementById("network").style.display="grid"; }
function to_os(){ hideAll(); document.getElementById("os").style.display="grid"; }
function to_cloud(){ hideAll(); document.getElementById("cloud").style.display="grid"; }
function to_mobileapp(){ hideAll(); document.getElementById("mobileapp").style.display="grid"; }
