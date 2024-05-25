const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const Message = document.getElementById("Message");
const checkbox = document.getElementById("checkbox");
const isSuccessMessage = document.getElementById("isSuccessMessage");
const fn = document.getElementById("fn");
const ln = document.getElementById("ln");
const e = document.getElementById("e");
const type = document.getElementById("type");
const m = document.getElementById("m");
const ch = document.getElementById("ch");

function isSubmit() {
  if (firstName.value == "") {
    fn.style.display = "block";
  } else {
    fn.style.display = "none";
  }
  if (lastName.value == "") {
    ln.style.display = "block";
  } else {
    ln.style.display = "none";
  }
  if (email.value == "") {
    e.style.display = "block";
  } else {
    e.style.display = "none";
  }
  if (Message.value == "") {
    m.style.display = "block";
  } else {
    m.style.display = "none";
  }
  if (checkbox.checked == false) {
    ch.style.display = "block";
  } else {
    ch.style.display = "none";
  }
  if (
    firstName.value != "" &&
    lastName.value != "" &&
    email.value != "" &&
    Message.value != "" &&
    checkbox.checked != false
  ) {
    isSuccessMessage.style.visibility = "visible";
  }
}
