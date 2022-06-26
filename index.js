
function showNav(){
    
    setTimeout(function(){
        document.getElementById("navigationBar").style.display = "block";
    } , 550);
    
}
function closeNav(){

    setTimeout(function(){
        document.getElementById("navigationBar").style.display = "none";
    } , 550);
    
}

function clipBoardClicked(){

    navigator.clipboard.writeText("forfindingjob020826@gmail.com");
    alert("Copied the email");
}

//Toggle to dark mode/normal mode
function checkBox(){
    var checkbox = document.getElementById("check");
    var checkImg = document.getElementById("checkImg");
    var infoContainer = document.getElementById("container1");

    //Dark mode on
    if (checkbox.checked){
        checkImg.src = "Pictures/sunIcon.webp";
        document.body.style.background = "linear-gradient(105deg, #382780, #48077c)";
        setToDarkModeText();
        document.querySelectorAll(".skillIcons").forEach(function (element)
        {
            element.style.filter = "invert(0.8)";
        })
        
        infoContainer.style.background = "#2e2a2a";
    }


    //Light mode on
    else{
        checkImg.src = "Pictures/moonIcon.png";
        document.body.style.background = "linear-gradient(105deg, #fbda61, #ff5acd)";
        setToBrightModeText();
        document.querySelectorAll(".skillIcons").forEach(function (element)
        {
            element.style.filter = "invert(0)";
        })
        infoContainer.style.background = "white";
    }
   
}

//Setting the smooth transition when click the anchor element
document.querySelectorAll('a[href^="#"]').forEach(
    anchor => {
        anchor.addEventListener("click", function(e){
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView(
                {
                    behavior: "smooth"
                }
            )
        });
    }
)


function setToDarkModeText(){
    document.getElementById("codeSampleLink").style.color = "#dbd6d3";

    document.querySelectorAll("p").forEach(function (element){
        element.style.color = "#dbd6d3";
    })
    document.querySelectorAll("h1").forEach(function (element){
        element.style.color = "#dbd6d3";
    })
    document.querySelectorAll("h2").forEach(function (element){
        element.style.color = "#dbd6d3";
    })
    document.querySelectorAll("h4").forEach(function (element){
        element.style.color = "#dbd6d3";
    })

    document.querySelectorAll(".smallTitles").forEach(function (element){
        element.style.color = "#dbd6d3";
    })

    document.querySelectorAll(".experienceGrid").forEach(function (element){
        element.style.color = "#dbd6d3";
    })
    document.querySelectorAll(".info").forEach(function (element){
        element.style.color = "black";
    })
}

function setToBrightModeText(){
    document.getElementById("codeSampleLink").style.color = "black";

    document.querySelectorAll("p").forEach(function (element){
        element.style.color = "black";
    })
    document.querySelectorAll("h1").forEach(function (element){
        element.style.color = "black";
    })
    document.querySelectorAll("h2").forEach(function (element){
        element.style.color = "black";
    })
    document.querySelectorAll("h4").forEach(function (element){
        element.style.color = "black";
    })
    document.querySelectorAll(".smallTitles").forEach(function (element){
        element.style.color = "black";
    })
    document.querySelectorAll(".info").forEach(function (element){
        element.style.color = "black";
    })
    document.querySelectorAll(".experienceGrid").forEach(function (element){
        element.style.color = "black";
    })
}
