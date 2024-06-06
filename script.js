var indexCount = [];
var mainSpots = document.querySelectorAll(".portion");
var leftSpots = document.querySelectorAll(".portion1");
var rightSpots = document.querySelectorAll(".portion2");

var n = Math.floor(Math.random()*3 + 1);

var blackSpace1 =  [0,2,11,20,22,13,4,15,24,26,6,17,8,28,19];
var blackSpace2 = [0,2,3,4,5,6,7,9,11,13,16,18,20,22,23,24,25,26,27,29];
var blackSpace3 = [20,10,0,1,2,22,23,13,3,4,5,6,16,26,7,8,9,29,19,27];

var patterns = [blackSpace1, blackSpace2, blackSpace3]

var count = [0,1,2];
 
var showPattern = document.querySelector(".start");

var pickingNumber =  Math.floor(Math.random()*3 + 1);

var leftBtns = document.querySelectorAll(".btn");
var rightBtns = document.querySelectorAll(".butn");








showPattern.addEventListener("click", () => {

    var selectedPattern = patterns[n -1];

    selectedPattern.forEach((index) => {
  
         var givenPattern = mainSpots[index].classList.add("bcc");

         givenPattern;


    setTimeout( function() {
        mainSpots[index].classList.remove("bcc");
    }, 1000)
       
   })
})



for (let i = 0; i < 3; i++) {
    leftBtns[i].addEventListener("click", () => {
        var selectedPattern = patterns[i];
    
        selectedPattern.forEach((index) => {
      
            var leftPattern = mainSpots[index].classList.add("bcc");

            leftPattern;


             setTimeout( function() {
                mainSpots[index].classList.remove("bcc");
            }, 1000)
           
       })
    })
}

for (let i = 0; i < 3; i++) {
    rightBtns[i].addEventListener("click", () => {
        var selectedPattern = patterns[i];
    
        selectedPattern.forEach((index) => {
      
             var rightPattern = mainSpots[index].classList.add("bcc");

             rightPattern;
          

             setTimeout( function() {
                mainSpots[index].classList.remove("bcc");
            }, 1000)

           
            
       })
    })
    
}

     if (rightPattern === givenPattern ) {
        document.body.style.backgroundColor = "red";
     }      
      


/*leftBtns.forEach((btn,index) => {
    leftBtns[index].addEventListener("click", () => {

        var selectedPattern = patterns[pickingNumber -1];
    
        selectedPattern.forEach((index) => {
      
             mainSpots[index].classList.add("bcc");
        
           
       })
})
}) */

 




/* mainSpots.forEach((box, index) => {
    box.addEventListener("click", () => {
        indexCount.push(index);
        mainSpots[index].style.backgroundColor = "black";
        if (indexCount.length === 15) {
            alert(indexCount);
        }
    })
}) */






/* 

================================First Pattern================================

showPattern.addEventListener("click", () => {
     blackSpace1.forEach((box, index) => {

     for (let i = 0; i < 15; i++) {
          mainSpots[blackSpace1[i]].style.backgroundColor = "black";
     }
        
    })
})

==============================Second Pattern===============================
showPattern.addEventListener("click", () => {
    blackSpace.forEach((box, index) => {

    for (let i = 0; i < 20; i++) {
         mainSpots[blackSpace2[i]].style.backgroundColor = "black";
    }
       
   })
})

============================Third Pattern==============================
showPattern.addEventListener("click", () => {
    blackSpace3.forEach((box, index) => {

    for (let i = 0; i < 20; i++) {
         mainSpots[blackSpace3[i]].style.backgroundColor = "black";
    }
       
   })
})


*/

// 3 patterns -  101 / X / X / 
// main pattern get to include 3 forms.
// let's make each field take one form from those three.



/*

===================================Getting there==============================

-now each pattern requires filling a series of sqaures, so we'll need to come up with the addressed squares.

var patternArray = [0,2,4,6,8,11,13,15,17,19,20,22,24,26,28];


*/
