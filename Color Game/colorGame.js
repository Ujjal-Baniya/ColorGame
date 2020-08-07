
var num  = 6;
var colors = [];
var pickedColor;
var body = document.querySelector("h1");
var display = document.getElementById("dis");
var squares = document.querySelectorAll(".square");
var reset = document.querySelector("#reset")
var result = document.querySelector("#result")
var mode = document.querySelectorAll(".mode")

init();

function init(){
// Mode Buttons
    setupMode();

// squares
    setupSquares();
    rese();

}


// easy.addEventListener("click", function(){
//     result.textContent = ""
//     hard.classList.remove("selected")
//     easy.classList.add("selected")
//     num = 3
//     colors = genrateRandomColors(num)
//     pickedColor = pickColor()
//     display.textContent = pickedColor;
//     for(var i = 0; i<squares.length; i++){
//         if(colors[i]){
//         squares[i].style.backgroundColor = colors[i];
//         }
//         else{
//             squares[i].style.display = "none"
//         }
//     }
// 	body.style.background = "steelblue";
// })
// hard.addEventListener("click", function(){
//     result.textContent = ""
//     easy.classList.remove("selected")
//     hard.classList.add("selected")
//     num = 6
//     colors = genrateRandomColors(num)
//     pickedColor = pickColor()
//     display.textContent = pickedColor;
//     for(var i = 0; i<squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block"

//     }
// 	body.style.background = "steelblue";
// })

reset.addEventListener("click",function(){
    rese()
})






function changeColors(color){
    for(var i = 0; i<colors.length; i++){
        squares[i].style.background = color
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function genrateRandomColors(n){
    var arr = [];
    for(var i = 0; i<n; i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    var R = Math.floor(Math.random() * 256)
    var G = Math.floor(Math.random() * 256)
    var B = Math.floor(Math.random() * 256)
    return "rgb(" + R +", " + G +", " + B + ")"

}

function rese(){
    result.textContent = ""
    reset.textContent = "NEW COLORS"
    colors = genrateRandomColors(num);
    pickedColor = pickColor();
    display.textContent = pickedColor;
    for(var i = 0; i<squares.length; i++){
        if(colors[i]){            
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none"
        }
    }
	body.style.background = "steelblue";
}

function setupMode(){
    for(var i =0 ;i<mode.length;i++){
        mode[i].addEventListener("click", function(){
            mode[0].classList.remove("selected")
            mode[1].classList.remove("selected")
            this.classList.add("selected")
            
            this.textContent === "Easy" ? num = 3 : num = 6; 
            console.log(num)
            rese();
        })
    }
}

function setupSquares(){
    for(var i=0; i<squares.length; i++){
        squares[i].addEventListener("click", function(){
            var clickedcolor = this.style.backgroundColor
            if(clickedcolor === pickedColor){
                body.style.background = pickedColor;
                result.textContent = "CORRECT";
                changeColors(clickedcolor);
                reset.textContent = "PLAY AGAIN"
            }
            else{
                this.style.backgroundColor = "#232323";
                result.textContent = "WRONG"
            }
        })
    }
}