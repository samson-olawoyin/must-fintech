

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

// Get select checkbox
const tickCheckBox = document.getElementsByClassName("tick-checkbox");


// All investment items checkbox
const allInvestmentCheckbox = document.querySelectorAll("input[type='checkbox-custom']");

// Denield modal
const deniedModal = document.getElementById("modal-denied");

// Already approved modal
const alreadApprovedModal = document.getElementById("modal-already-approved");

// Show rejection box additional details
const rejectionAdditionalDetails = document.getElementById("attach-box-visible");

// Rejection Attached box details
const attachedBox = document.getElementById("attached-table"); 

// Fileupload item counter
const fileUploadCounter = document.getElementsByClassName("span-fileupload");


// Modal rejection reason
const rejectionModal = document.getElementById("modal-rejection-reason");
// Handle new investment modal box
newInvestBtn.addEventListener("click", (e) => {
  registrationBox.classList.remove("off-display");

  // Call the overlay background for the modal display
  overlay.style.display = "block";
  //registrationBox.className.remove("off-display");
})


// Upload btn
const uploadBtn = document.querySelector(".fileupload");

// Upload input
const upload = document.getElementById("upload-input");

uploadBtn.addEventListener("click", handleUploadClick)

// Upload files name box
const uploadFileName = document.getElementById("upload-name");

// File upload type modal
const fileUploadType = document.getElementById("modal-file-upload-type"); 

// File upload limit alert
const fileUploadLimit = document.getElementById("modal-file-upload-limit");

// View upload file modal
const viewUploadedFile = document.getElementById("view-uploaded-file");

//file viewer div
const fileViewer = document.getElementById("view-files");

// File Upload size limit
const fileSizeLimit = document.getElementById("modal-file-upload-file-size");


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
    if(tickCheckBox.length == 1){
      const checkStatus = tickCheckBox[0].getAttribute("status");
      switch(checkStatus){
        case "approved":
          overlay.style.display = "block";
          alreadApprovedModal.classList.remove("off-display");
        break;
        case 'denied':
        overlay.style.display = "block";
        deniedModal.classList.remove("off-display");
        break;
        default:
          overlay.style.display = "block";
          saveModal.classList.remove("off-display");           
      }
    }
     
  }
}

function handleModalClose(modal, closeOverlay = true){
  const elem = document.getElementById(modal);
  elem.classList.add("off-display");
  if(closeOverlay){
    overlay.style.display = "none";
  }
}

// Handle change approval modal
function handleApprovalChange(){
  const value = this.value;
  const counter = parseInt(itemCounter.innerHTML);

  if(counter != 0){
    if(tickCheckBox.length == 1){
      const checkStatus = tickCheckBox[0].getAttribute("status");
      switch(checkStatus){
        case "approved":
          overlay.style.display = "block";
          alreadApprovedModal.classList.remove("off-display");
          break;
          case "waiting":
            if(value == 0 && value != ""){
              changeApprovalModal.classList.remove("off-display");
              overlay.style.display = "block";
            }else if(value == 1){
              rejectionModal.classList.remove("off-display");
              overlay.style.display = "block";
            }            
            break;
            default:
              overlay.style.display = "block";
              deniedModal.classList.remove("off-display");
      }
    }
  }else{
    if(value != ""){
      overlay.classList.remove("off-display");
      modalItemNotSelected.classList.remove("off-display");
    }
  }

}

rejectionAdditionalDetails.addEventListener("change",handleAttachBox);

function handleAttachBox(){
  const modal = document.getElementById("rejection-modal");
  const btn = document.querySelector(".btn-reject");

  switch(this.checked){
    case true:
      // Increase the modal height
      modal.style.height = "830px";
      attachedBox.classList.remove("off-display");
      btn.classList.add("off-display");
      break;
      default:
        attachedBox.classList.add("off-display");
        // set the modal height to default
        modal.style.height = "750px";
        btn.classList.remove("off-display");
  }
}

function handleUploadClick(){
  upload.click();
}

upload.addEventListener("change", handleUploadFile);

function handleUploadFile(e){
  const elId = Math.floor (Math.random() * 100000);
  const fileName = getFileName(this.value);
  const fileExt = fileName.split(".")[1];
  const ext = ['jpg','jpeg','png','pdf'];
  const match = ext.find( f => f == fileExt);
  const fileSize = this.files[0].size / 1020 / 1024;

  if(match != undefined){
    if(fileSize > 100){
      fileSizeLimit.classList.remove("off-display");
    }else{
      if(fileUploadCounter.length < 10){
        const span = document.createElement("span");
        const img = document.createElement("img");
        img.setAttribute("src" , "assets/images/x-round.svg");
        img.setAttribute("key" , elId);
        span.setAttribute("id" , elId);
        span.setAttribute("file",this.value);
        span.addEventListener("click", handleViewFileUpload);     
        img.classList.add("close-fileupload");
        span.classList.add("span-fileupload");
        span.innerHTML = fileName;
        span.appendChild(img);
        uploadFileName.appendChild(span);
      }else {
        fileUploadLimit.classList.remove("off-display");
      }
    }
  }else {
    fileUploadType.classList.remove("off-display");
  }
}

function getFileName(file){
  return file.split("\\").pop();
}

function handleViewFileUpload(){
  const file = this.getAttribute("file");
  //close current modal
  registrationBox.classList.add("off-display");
  viewUploadedFile.classList.remove("off-display");

  // Load file viewer
  buildFileViewFrame();
}

function buildFileViewFrame(){
  console.log(fileUploadCounter);
  const len = fileUploadCounter.length;

  for(let k =0 ; k < len ; k++){
    const frame = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("alt","img");
    img.setAttribute("src",fileUploadCounter[k].getAttribute("file"));
    img.classList.add("uploaded-img");
    frame.classList.add("file-frame");
    frame.appendChild(img);
    fileViewer.appendChild(frame);
  }
}






