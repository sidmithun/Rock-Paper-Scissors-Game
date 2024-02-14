var usrscore=0;
let compScore=0;
let drawScore=0;
let boxes=document.querySelectorAll(".box");
let msg=document.querySelector("#msg");
let compscorepara=document.querySelector("#comp-score");
let usrscorepara=document.querySelector("#user-score");
let drawscorepara=document.querySelector("#draw-score");
const getCompBox=()=>{
    const options=["Rock","Paper","Scissors"];
   const indexId= Math.floor(Math.random() *3);
   return options[indexId];
};
const drawGame= () =>{
drawScore++;
    console.log("draw Game");
    msg.innerText="Game was Draw.Play Again";
    msg.style.backgroundColor="#081b31";
    drawscorepara.innerText=drawScore;



};
const showWinner=(userWin,userBox,compBox)=>{

   
    if(userWin){
         
         let usrscore=0
        usrscore++;
        console.log("You Win" );
        msg.innerText=`You Win. ${userBox} beats ${compBox} `;
        msg.style.backgroundColor="green";
        console.log(usrscore);
        usrscorepara.innerText=this.usrscore;


        

    }
    else{
        compScore++;
        console.log("you lost");
        msg.innerText=`You Lost. ${compBox} beats ${userBox} `;
        msg.style.backgroundColor="red";
        compscorepara.innerText=compScore;

    }

};
const playGame=(userBox)=>{
    console.log(userBox);
    const compBox=getCompBox();
    console.log(compBox);
    if(userBox===compBox)
    {
    drawGame();   
   }else{
    let userWin=true;
      if(userBox==="Rock")
      {
        if(compBox==="Paper"){userWin=false;}else{userWin=true;}
      }
      else if(userBox==="Paper")
      {
        if(compBox==="Scissors"){userWin=false;}else{userWin=true;}
      }
      else{
        if(compBox==="Rock"){userWin=false;}else{userWin=true;}
      }
      showWinner(userWin,userBox,compBox);
        
      }
   
    

};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        const userBox=box.getAttribute("id");
       // console.log(userBox);
        playGame(userBox);
    })
})