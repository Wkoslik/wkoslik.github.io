/*Show more/less testimonials overall */

function showMoreOne(){
        document.getElementById("grp1").style.display = "flex";
        document.getElementById("showmoremore").style.display = "none";
        document.getElementById("showmoreless1").style.display = "flex";
        document.getElementById("moreless1").style.display="flex";
    };

function showLessOne(){
    document.getElementById("grp1").style.display = "none";
    document.getElementById("grp2").style.display="none";
    document.getElementById("grp3").style.display="none";
    document.getElementById("showmoremore").style.display = "flex";
    document.getElementById("showmoreless1").style.display = "none";
}

function showMoreTwo(){
    document.getElementById("grp2").style.display = "flex";
    document.getElementById("moreless1").style.display="none";
    document.getElementById("moreless2").style.display="flex";
};

function showMoreThree(){
    document.getElementById("grp3").style.display = "flex";
    document.getElementById("moreless2").style.display="none";
}

function showLessThree(){
document.getElementById("grp2").style.display = "none";
document.getElementById("moreless1").style.display="flex";
}

function showLessFour(){
    document.getElementById("grp1").style.display ="none";
    document.getElementById("grp2").style.display="none";
    document.getElementById("grp3").style.display="none";
    document.getElementById("showmoremore").style.display = "flex";
    document.getElementById("showmoreless1").style.display = "none";
}