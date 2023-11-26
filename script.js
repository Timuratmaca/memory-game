let newgame=document.getElementById("newgame")
let symbols="qwertyuıopğüasdfghjklşizxcvbnmöç.7410,236985"
symbols =symbols.split("")
console.log(symbols);


function down() {
    setInterval(()=> {
        let letter=document.createElement("span")
        letter.innerHTML=Math.floor(Math.random()*10);
        document.body.appendChild(letter)
        let t=Math.floor(Math.random()*5+1);
        letter.style.transition=t+"s"
        letter.style.left=Math.random()*window.innerWidth+"px";
        letter.style.bottom=window.innerHeight+"px";
        setTimeout(()=>{
            letter.style.bottom=-50+"px"
            setTimeout(()=> {
                letter.remove()
            },t)
        },1000);
    },1000);
}
down();


// newgame.onclick=function (event){
//     event.preventDefault();
//     for(let i=10;i<110;i=i+10){
//         console.log("planet:"+i);
//     }
// }
for(let o=2;o<2000;o=o*2){
    console.log(o)
}







// for (let o=1000;o>100;o=o-300){
//     console.log(o);
// }






// for(let i=-100;i<10;i=i+1){
//     console.log(i);
// }
