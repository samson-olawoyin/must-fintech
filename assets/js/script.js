

const newInvestBtn = document.getElementById("registration-btn");

const registrationBox = document.querySelector("#new_investment_box");

const newInvestmentClose = document.getElementById("btn-cancel");

const newInvestmentClose2 = document.getElementById("btn-cancel2");

const overlay = document.getElementById("overlay");

const itemCounter = document.getElementById("item-counter");


// All investment items checkbox
const allInvestmentCheckbox = document.querySelectorAll("input[type='checkbox-custom']");

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
  const checked = dis.getAttribute("checked");
  let cName = dis.className;
  cName = cName.split(" ");
  let findC = cName.find(item => item == 'tick-checkbox');
  if(findC == undefined){
    for(let k =0; k<allInvestmentCheckbox.length; k++){
      allInvestmentCheckbox[k].setAttribute("checked",true);
      allInvestmentCheckbox[k].classList.add("tick-checkbox");
    }
    //update item selection counter
    itemCounter.innerHTML = 50;

    // Update current checkbox checked tick
    dis.classList.add("tick-checkbox");
  }else{
    for(let k =0; k<allInvestmentCheckbox.length; k++){
      allInvestmentCheckbox[k].setAttribute("checked",false);
      allInvestmentCheckbox[k].classList.remove("tick-checkbox");
      //update item selection counter
      itemCounter.innerHTML = 0;
    }
    // Update current checkbox checked tick
    dis.classList.remove("tick-checkbox");    
  }

}


function handleCheckboxCounter(dis){
  let counter = parseInt(itemCounter.innerHTML);
  const checked = dis.getAttribute("checked");
  let cName = dis.className;
  cName = cName.split(" ");
  let findC = cName.find(item => item == 'tick-checkbox');

  if(findC == undefined){
    counter++;
    itemCounter.innerHTML = counter;

    // update checkbox tick
    dis.classList.add("tick-checkbox");

    // update checkbox attribute
    dis.setAttribute("checked",true);
  }else{
    counter == 0 ? 0 : counter--;
    itemCounter.innerHTML = counter;

    // update checkbox tick
    dis.classList.remove("tick-checkbox");

    // update checkbox attribute
    dis.setAttribute("checked",false);    
  }
}




