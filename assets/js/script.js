

const newInvestBtn = document.getElementById("registration-btn");

const registrationBox = document.querySelector("#new_investment_box");

const newInvestmentClose = document.getElementById("btn-cancel");

const overlay = document.getElementById("overlay");

const itemCounter = document.getElementById("item-counter");

const saveApplicationBtn = document.getElementById("save-btn");

const changeApprovalModal = document.getElementById("modal-change-approval");

const changeApproval = document.getElementById("change-approval");

changeApproval.addEventListener("change", handleApprovalChange);

const modalItemNotSelected = document.getElementById("modal-not-selected");

saveApplicationBtn.addEventListener("click", handelSaveApplication);

// save modal
const saveModal = document.getElementById("modal-save");


// All investment items checkbox
const allInvestmentCheckbox = document.querySelectorAll("input[type='checkbox-custom']");

// Handle new investment modal box
newInvestBtn.addEventListener("click", (e) => {
  registrationBox.classList.remove("off-display");

  // Call the overlay background for the modal display
  overlay.style.display = "block";
  //registrationBox.className.remove("off-display");
})


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

function handelSaveApplication(){
  let counter  = parseInt(itemCounter.innerHTML);
  if(counter == 0){
    overlay.classList.remove("off-display");
    modalItemNotSelected.classList.remove("off-display");
  }else{
    overlay.style.display = "block";
    saveModal.classList.remove("off-display");    
  }
}

function handleModalClose(modal){
  const elem = document.getElementById(modal);
  elem.classList.add("off-display");
  overlay.style.display = "none";
}

// Handle change approval modal
function handleApprovalChange(){
  const value = this.value;
  if(value == 0 && value != ""){
      changeApprovalModal.classList.remove("off-display");
      overlay.classList.remove("off-display");
  }else{


  }
}




