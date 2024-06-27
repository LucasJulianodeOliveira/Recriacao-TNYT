function teste(){
    const aside = document.querySelectorAll(".aside")[0]
    console.log(aside.style.width)

    if(aside.style.width == "0px" || aside.style.width == ""){
        aside.style.width = "100vw"
    }else{
        aside.style.width = "0px"
    }
}