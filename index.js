// document.querySelector(".button").addEventListener('click',()=>{
//            document.querySelector(".h").innerHTML="<h1>MERN stack</h1>"
// })
// document.getElementsByTagName("h1")


// function replace(){
//     document.querySelector(".change").textContent=`"Welcome to Elevation academy"`
// }l

// function hide(){
//     document.querySelector(".hide").style.display="none"
// }

setInterval(() => {
   const date= new Date()
     let hr=date.getHours();
     let mi=date.getMinutes();
     let sec=date.getSeconds();
     if(hr>12){
      hr= hr-12;
    }
    document.querySelector(".hr").textContent=hr
    document.querySelector(".min").textContent=mi
    document.querySelector(".sec").textContent=sec
    
}, 1000);
