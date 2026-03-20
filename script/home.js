const form = document.getElementById("searchbox");
const input = form.querySelector("input");

form.addEventListener("submit", function(e){
    e.preventDefault(); // يمنع الصفحة من إعادة التحميل

    const value = input.value.toLowerCase();

    if(value.includes("course")){
        document.getElementById("courses").scrollIntoView({behavior:"smooth"});
    } else if(value.includes("track")){
        document.getElementById("tracks").scrollIntoView({behavior:"smooth"});
    } else if(value.includes("start")){
        document.getElementById("howToStart").scrollIntoView({behavior:"smooth"});
    } else {
        alert("Section not found");
    }
});