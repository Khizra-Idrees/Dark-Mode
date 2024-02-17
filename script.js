var isWhiteBackground = true;

function toggleBtn(){

    var body = document.querySelector("body");
    body.style.backgroundColor = "white";
    var heading1 = document.getElementById("headerHeading1");
    var button = document.getElementById("toggleBtn");
    var articlePara = document.querySelectorAll(".articlePara");

    if(isWhiteBackground){
        body.style.backgroundColor="#282c35";
        heading1.style.color="white";
        button.style.color="white";
        articlePara.forEach(function(para) {
            para.style.color = "white";
        })
    }

    else{
        body.style.backgroundColor = "white";
        heading1.style.color="black";
        button.style.color="black";
        articlePara.forEach(function(para) {
            para.style.color = "black";
        })
    }

    // Initially, isWhiteBackground is true.
    // When !isWhiteBackground is evaluated, it becomes !true, which is false.
    // So, isWhiteBackground is now assigned the value false.
    isWhiteBackground = !isWhiteBackground;
}