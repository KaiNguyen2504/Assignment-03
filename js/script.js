"use strict";

// ============================= DISPLAY INFORMATION ======================//
const email = document.getElementById("inputEmail");
const btnSubmit = document.getElementById("btnEmailSubmit");

const infoContainer = document.querySelector(".info-container");
const emailForm = document.querySelector(".email-form");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//===================== check email ================//
const checkEmail = () => {
  if (email.value.match(regex)) {
    // console.log(infoContainer);
    infoContainer.classList.remove("hidden");
    emailForm.classList.add("hidden");
  } else {
    alert("Vui lòng nhập đúng định dạng của Email");
  }
};

btnSubmit.addEventListener("click", checkEmail);

// ============================= DISPLAY INFORMATION ======================//

function displayView(element) {
  const parentEl = element.closest(".box-details");
  const btnViewMore = parentEl.querySelector(".btn-view-more");
  const boxes = parentEl.querySelectorAll(".box");
  // console.log(boxes);

  if (btnViewMore.innerText === "View More") {
    boxes.forEach((element) => {
      element.classList.remove("hidden");
    });
    btnViewMore.innerText = "View Less";
  } else {
    boxes.forEach((element) => {
      element.classList.add("hidden");
    });
    btnViewMore.innerText = "View More";
  }
}

// ============================= MOUSE MOVE ======================//

const handleMouseOver = (element) => {
  const controlGroup = element.querySelector(".control-group");
  controlGroup.classList.remove("hidden");
};

const handleMouseOut = (element) => {
  const controlGroup = element.querySelector(".control-group");
  controlGroup.classList.add("hidden");
};
