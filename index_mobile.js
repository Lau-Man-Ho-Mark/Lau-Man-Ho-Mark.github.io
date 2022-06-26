function itemClick(id){
    document.getElementById(id).className = "selectedNavItem";
    setTimeout(
        function(){
            document.getElementById(id).className = "navItem";
        }, 600
    );
    
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
function clipBoardClicked(){

    navigator.clipboard.writeText("forfindingjob020826@gmail.com");
    alert("Copied the email");
}