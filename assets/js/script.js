

const newInvestBtn = document.getElementById("registration-btn");

const registrationBox = document.querySelector("#new_investment_box");

const newInvestmentClose = document.getElementById("btn-cancel");

const newInvestmentClose2 = document.getElementById("btn-cancel2");

const overlay = document.getElementById("overlay");

const itemCounter = document.getElementById("item-counter");


// All investment items checkbox
const allInvestmentCheckbox = document.getElementsByClassName("check-investment");

// Handle new investment modal box
newInvestBtn.addEventListener("click", (e) => {
  registrationBox.classList.remove("off-display");

  // Call the overlay background for the modal display
  overlay.style.display = "block";
  //registrationBox.className.remove("off-display");
})

//Close new investment modal box
newInvestmentClose.addEventListener("click", handleCloseModal);

newInvestmentClose2.addEventListener("click", handleCloseModal);

function handleCloseModal(){
    registrationBox.classList.add("off-display");
  
    //close the page overlay after modal been closed
    overlay.style.display = "none";
}



function handleAllCheckBox(dis){
  if(dis.checked === true){
    for(let k =0; k<allInvestmentCheckbox.length; k++){
      allInvestmentCheckbox[k].checked = true;
    }
    //update item selection counter
    itemCounter.innerHTML = 50;
  }else{
    for(let k =0; k<allInvestmentCheckbox.length; k++){
      allInvestmentCheckbox[k].checked = false;
      //update item selection counter
      itemCounter.innerHTML = 0;
    }
  }

}


function handleCheckboxCounter(dis){
  let counter = parseInt(itemCounter.innerHTML);
  if(dis.checked === true){
    counter++;
    itemCounter.innerHTML = counter;
  }else{
    counter == 0 ? 0 : counter--;
    itemCounter.innerHTML = counter;
  }
}




