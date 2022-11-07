// ========================================js for header================================================================


window.onscroll=function(){

    if(window.pageYOffset>=100){
        document.getElementById("header").style.backgroundColor="white";
        document.getElementById("header").style.boxShadow=" 0 1px 1px 0 rgb(65 69 73 / 30%), 0 1px 3px 1px rgb(65 69 73 / 15%)";
        document.getElementById("header_container").style.borderBottom="none";
        document.getElementById("logo").style.backgroundPositionY="-185px";
        document.getElementById("list_link").style.color="black";
        document.getElementById("list_link1").style.color="black";
        document.getElementById("header_search").style.backgroundColor="#e5e5e5";
        document.getElementById("search_logo").style.color="gray";


    }
    else{
        document.getElementById("header").style.backgroundColor="transparent";
        document.getElementById("header").style.boxShadow=" none";
        document.getElementById("header_container").style.borderBottom="1px solid #a0a0a0";
        document.getElementById("logo").style.backgroundPositionY="-157px";
        document.getElementById("list_link").style.color="white";
        document.getElementById("list_link1").style.color="white";
        document.getElementById("header_search").style.backgroundColor="transparent";
        document.getElementById("search_logo").style.color="white";


    }
}


// ========================================js for experiences================================================================

    //   Next button
    let ml = -181;
    let slideCount = 0;

    document.getElementById("next").onclick = function () {

        ml = ml - 90.5

        if (slideCount <= 1) {

            // // console.log(slideCount, ml);

            document.getElementById("carouselSlider").style.marginLeft = ml + "%"
            document.getElementById("carouselSlider").style.transition = ".5s"

            if (slideCount === 1) {

                setTimeout(function () {
                    document.getElementById("carouselSlider").style.marginLeft = "-181%"
                    document.getElementById("carouselSlider").style.transition = "0s"
                    slideCount = 0;
                    ml = -181;
                }, 500)

            }


            slideCount = slideCount + 1

        }


    }



    // Prev Button   

    document.getElementById("prev").onclick = function () {
        ml = ml + 90.5

        if (slideCount >= -1) {
            document.getElementById("carouselSlider").style.marginLeft = ml + "%"
            document.getElementById("carouselSlider").style.transition = ".5s"

            if (slideCount === -1) {
                setTimeout(function () {
                    document.getElementById("carouselSlider").style.marginLeft = "-181%"
                    document.getElementById("carouselSlider").style.transition = "0s"
                    slideCount = 0;
                    ml = -181;
                }, 500)
            }

            slideCount = slideCount - 1
        }

    }


    






















