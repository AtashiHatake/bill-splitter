function calc() {
  let amt = parseFloat(document.querySelector("#amount").value);
  let people = parseFloat(document.querySelector("#people").value);

  let AmtPerPerson = amt / people;
  let par = document.createElement("p");

  console.log(
    (par.textContent = `This is amount per person : ${AmtPerPerson}`)
  );
  par.textContent = `Amount per person is : ₹${AmtPerPerson}/person`;

  let cardBody = document.querySelector(".card-body");
  cardBody.appendChild(par);

  document.querySelector("#amount").value = "";
  document.querySelector("#people").value = "";
}

document.querySelector("#amtForm").addEventListener("submit", function (evt) {
  evt.preventDefault();
  calc();
});
