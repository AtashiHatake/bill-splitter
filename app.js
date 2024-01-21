function calc() {
  const amt = parseFloat(document.querySelector("#amount").value);
  const people = parseFloat(document.querySelector("#people").value);

  const AmtPerPerson = amt / people;
  const par = document.createElement("p");

  // unique id for para
  const uniqueID = "amountPara";
  par.id = uniqueID;

  par.textContent = `Amount per person is : ₹${AmtPerPerson.toFixed(2)}/person`;

  const cardBody = document.querySelector(".card-body");

  // deleting previous paragraph
  const previousParaExists = document.getElementById(uniqueID);
  if (previousParaExists) {
    previousParaExists.remove();
  }

  cardBody.appendChild(par);

  document.querySelector("#amount").value = "";
  document.querySelector("#people").value = "";
}

document.querySelector("#amtForm").addEventListener("submit", function (evt) {
  evt.preventDefault();
  calc();
});
