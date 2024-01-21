let newgame=document.getElementById("newgame")
let symbols="qwertyuıopğüasdfghjklşizxcvbnmöç.7410,236985"
symbols =symbols.split("")
console.log(symbols);
let images=[]
let game=document.getElementById("game")
let time=document.getElementById("time")
let tanks=["BT-7","BT-5","BT-7M","Cy-76M","T-28e","3NC-30","BT-34","BT-343"]
let speed=["30 km/S",] 
// todo etot masiv derjet atkrıtıye kartoçki
let opencards=[]
let loading=document.getElementById("loading")
let otk=0


// todo çerez 1s zagruzka prpodayet
setTimeout(() => {
    loading.style.opacity="0"
    loading.style.pointerEvents="none"
}, 1000);
// todo masiv imges zapalnayetsa nazvanyami kartinak
for (let x=0;x<8;x=x+1){
    images.push("image ("+x+").png")
    images.push("image ("+x+").png")
    console.log(images);
}
for (let i =images.length-1;i>0;i--){
    let randomnumber=Math.floor(Math.random()*(i+1))
    let slot=images[i]
    images[i]=images[randomnumber]
    images[randomnumber]=slot
}
// todo sazdayot kartinki 
for(let u=0;u<16;u=u+1){
    let card=document.createElement("img")
    card.src="card.jpg"
    game.appendChild(card)
    card.style.height=(card.offsetWidth+"px")
    card.onclick=function (event) {
        card.style.pointerEvents="none"
        // console.log("BT7num"+(u+1));
        opencards.push(card)
        card.style.transform="scaleX(0)"
        setTimeout(() => {
            card.src=images[u]
            card.style.transform="scaleX(1)"
            if (opencards.length==2) {
                // console.log(opencards[0].src,opencards[1].src);
                if (opencards[0].src==opencards[1].src) {
                    console.log("yes");
                    opencards=[];
                    otk=otk+2
                    if (otk==16){
                        clearInterval(gametimer)
                    }
                }
                else{
                    console.log("no");
                    let cards=game.children
                    for(let c of cards){
                        c.style.pointerEvents="none"
                    }
                    game.classList.add("shake")
                    setTimeout(()=> {
                        opencards[0].style.transform="scaleX(0)"
                        opencards[1].style.transform="scaleX(0)"
                        setTimeout(()=>{
                            opencards[0].src="card.jpg"
                            opencards[1].src="card.jpg"
                            opencards[0].style.transform="scaleX(1)"  
                            opencards[1].style.transform="scaleX(1)"  
                            opencards=[];
                            game.classList.remove("shake");
                            for(let c of cards){
                               if(c.src.includes("card.jpg") ){  c.style.pointerEvents="auto"}
                            }
                        },300)
                    },1000)
                }
            }
        }, 300);
        console.log(opencards);
        }
        card.ondragstart=function (event) {
            return false;
        }
}
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

 let t = 0;

    let gametimer=setInterval(() => {
        t=t+1
        time.innerHTML=t

    }, 1000);


newgame.onclick=function (event) {
    let cards=game.children
    for(let c of cards ){
        c.style.transform="scaleX(0)"
        setTimeout(()=>{
            c.src="card.jpg"
            c.style.transform="scaleX(1)"
            c.style.pointerEvents="auto"
        },1000)
    }
}
// newgame.onclick=function (event){
//     event.preventDefault();
//     for(let i=10;i<110;i=i+10){
//         console.log("planet:"+i);
//     }
// }
for(let o=2;o<2000;o=o*2){
    console.log(o)
}



for (let t=0 ;t<9; t=t+1){
    let tanksscore=tanks[t]+speed[0]
    console.log(tanksscore)
}



// for (let o=1000;o>100;o=o-300){
//     console.log(o);
// }






// for(let i=-100;i<10;i=i+1){
//     console.log(i);
// }
