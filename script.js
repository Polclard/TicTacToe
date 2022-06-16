let choice = document.getElementById("sel-val").value;
function selectChar()
{
    choice = document.getElementById("sel-val").value;
    document.getElementById("text-rp").value = "You've selected: " + choice;
    document.getElementById("text-rp").value.color = "black";
    document.getElementById("sel-val").disabled = true;
    document.getElementById("button-select").disabled = true;


    //console.log(choice);

    document.getElementById("the-container").style.display = "grid";
}


document.addEventListener('click', function(e){

    let selID = e.target.id;

    //console.log(selID);
      if( selID === "i0" ||
          selID === "i1" ||
          selID === "i2" || selID === "i3" ||
          selID === "i4" || selID === "i5" ||
          selID === "i6" || selID === "i7" ||
          selID === "i8")
      {

          let array = [0, 1, 2,
                       3, 4 ,5,
                       6, 7, 8]
                      
            console.log(array);

          let vl = document.getElementById(selID).textContent = choice;
          document.getElementById(selID).classList.remove("testt");
          void document.getElementById(selID).classList.add("testt");
          let selectedDiv = document.getElementById(selID);
        
          //console. log ("Value: " + vl);
          if(choice === "O")
          {
              choice = "X";
              document.getElementById("text-rp").value = "It's " + choice + " turn!";
          }
          else
          {
              choice = "O";
              document.getElementById("text-rp").value = "It's " + choice + " turn!";
          }
          selectedDiv.style.color = "black";
          selectedDiv.style.opacity = 1;
          selectedDiv.style.pointerEvents = "none";

          let element0 = document.getElementById("i0").textContent;
          let element1 = document.getElementById("i1").textContent;
          let element2 = document.getElementById("i2").textContent;
          let element3 = document.getElementById("i3").textContent;
          let element4 = document.getElementById("i4").textContent;
          let element5 = document.getElementById("i5").textContent;
          let element6 = document.getElementById("i6").textContent;
          let element7 = document.getElementById("i7").textContent;
          let element8 = document.getElementById("i8").textContent;


          console.log("Element 0: " + typeof(element0));
          {
            if(element0 === 'X' && element1 === 'X' && element2 === 'X')
            {
                document.getElementById("the-container").style.pointerEvents = "none";
                document.getElementById("the-container").style.backgroundColor = "lightgrey";
                document.getElementById("the-container").children.style.color = "red";
                
            }
            else if(element0 === 'O' && element1 === 'O' && element2 === 'O')
            {
              document.getElementById("the-container").style.pointerEvents = "none";
              document.getElementById("the-container").style.backgroundColor = "lightgrey";
              document.getElementById("the-container").children.style.color = "red";
            }
            else if(element3 === 'O' && element4 === 'O' && element5 === 'O')
            {
              document.getElementById("the-container").style.pointerEvents = "none";
              document.getElementById("the-container").style.backgroundColor = "lightgrey";
              document.getElementById("the-container").children.style.color = "red";
            }
            else if(element3 === 'X' && element4 === 'X' && element5 === 'X')
            {
              document.getElementById("the-container").style.pointerEvents = "none";
              document.getElementById("the-container").style.backgroundColor = "lightgrey";
              document.getElementById("the-container").children.style.color = "red";
            }
            else if(element6 === 'O' && element7 === 'O' && element8 === 'O')
            {
              document.getElementById("the-container").style.pointerEvents = "none";
              document.getElementById("the-container").style.backgroundColor = "lightgrey";
              document.getElementById("the-container").children.style.color = "red";
            }
            else if(element6 === 'X' && element7 === 'X' && element8 === 'X')
            {
              document.getElementById("the-container").style.pointerEvents = "none";
              document.getElementById("the-container").style.backgroundColor = "lightgrey";
              document.getElementById("the-container").children.style.color = "red";
            }
            else if(element0 === 'O' && element4 === 'O' && element8 === 'O')
            {
              document.getElementById("the-container").style.pointerEvents = "none";
              document.getElementById("the-container").style.backgroundColor = "lightgrey";
              document.getElementById("the-container").children.style.color = "red";
            }
            else if(element0 === 'X' && element4 === 'X' && element8 === 'X')
            {
              document.getElementById("the-container").style.pointerEvents = "none";
              document.getElementById("the-container").style.backgroundColor = "lightgrey";
              document.getElementById("the-container").children.style.color = "red";
            }
            else if(element2 === 'X' && element4 === 'X' && element6 === 'X')
            {
              document.getElementById("the-container").style.pointerEvents = "none";
              document.getElementById("the-container").style.backgroundColor = "lightgrey";
              document.getElementById("the-container").children.style.color = "red";
            }
            else if(element2 === 'O' && element4 === 'O' && element6 === 'O')
            {
              document.getElementById("the-container").style.pointerEvents = "none";
              document.getElementById("the-container").style.backgroundColor = "lightgrey";
              document.getElementById("the-container").children.style.color = "red";
            }
            else if(element2 === 'X' && element5 === 'X' && element8 === 'X')
            {
              document.getElementById("the-container").style.pointerEvents = "none";
              document.getElementById("the-container").style.backgroundColor = "lightgrey";
              document.getElementById("the-container").children.style.color = "red";
            }
            else if(element2 === 'O' && element5 === 'O' && element8 === 'O')
            {
              document.getElementById("the-container").style.pointerEvents = "none";
              document.getElementById("the-container").style.backgroundColor = "lightgrey";
              document.getElementById("the-container").children.style.color = "red";
            }
            else if(element1 === 'X' && element4 === 'X' && element7 === 'X')
            {
              document.getElementById("the-container").style.pointerEvents = "none";
              document.getElementById("the-container").style.backgroundColor = "lightgrey";
              document.getElementById("the-container").children.style.color = "red";
            }
            else if(element1 === 'O' && element4 === 'O' && element7 === 'O')
            {
              document.getElementById("the-container").style.pointerEvents = "none";
              document.getElementById("the-container").style.backgroundColor = "lightgrey";
              document.getElementById("the-container").children.style.color = "red";
            }
            else if(element0 === 'X' && element3 === 'X' && element6 === 'X')
            {
              document.getElementById("the-container").style.pointerEvents = "none";
              document.getElementById("the-container").style.backgroundColor = "lightgrey";
              document.getElementById("the-container").children.style.color = "red";
            }
            else if(element0 === 'O' && element3 === 'O' && element6 === 'O')
            {
              document.getElementById("the-container").style.pointerEvents = "none";
              document.getElementById("the-container").style.backgroundColor = "lightgrey";
              document.getElementById("the-container").children.style.color = "red";
            }
          }
      }

}, false);

function refreshPage()
{
    location.reload();
}