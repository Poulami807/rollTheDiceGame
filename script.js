var target=30
var userScore = 0, compScore = 0
var leading
var button=document.getElementById("btn")
var table=document.getElementById("leader")



function rollDice(){
    var user = Math.floor(Math.random()*6)+1
    var comp = Math.floor(Math.random()*6)+1
    document.getElementById("in").value=user;
    leading=""
     if (userScore <= 30 && compScore  <=30){
        userScore += user
        compScore += comp
        if (userScore>compScore){
            leading = "User"
        }
        else {
            leading="Computer"
        }

        table.innerHTML +=`<tr height="50px">
        <td>${user}</td>
        <td>${comp}</td>
        <td>${leading}</td>
      </tr>`

       if (userScore == 30 || compScore == 30){
           result()   
    }
}
else{
    result()
}
}
function result(){
    if (leading == "User"){
        document.getElementById("out").innerHTML= "YAY! YOU WON"
        button.addEventListener("click", gameOver)
        return
    }
    else{
        document.getElementById("out").innerHTML= "SORRY YOU LOST"
        button.addEventListener("click", gameOver)
        return
    }
}

function gameOver(){
//     console.log("over")
//     userScore=0
//     compScore=0
//     document.getElementById("in").value="";
//     table.innerHTML=`<thead height="50px">
//     <th>User</th>
//     <th>Computer</th>
//     <th>Leading</th>
//   </thead>`
//   document.getElementById("out").innerHTML= ""
  location.reload()
}
