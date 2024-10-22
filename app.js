console.log("hello world");

// let choixDuPrompt = parseInt(
//   prompt("Choisissez un niveau de difficulté : 1, 2 ou 3")
// );

function choix() {
  let niveau = document.getElementById("niveau").value;
  console.log("niveau", niveau);

  if (niveau === "1") {
    console.log("niveau 1");
    niveau1();
  } else if (niveau === "2") {
    console.log("niveau 2");
    niveau2();
  } else if (niveau === "3") {
    console.log("niveau 3");
    niveau3();
  } else {
    console.log("Vous n'avez pas choisi un niveau correct");
  }
  document.getElementById("niveau").value = "";
}

// if (choixDuPrompt === 1) {
//   niveau1();
// } else if (choixDuPrompt === 2) {
//   niveau2();
// } else if (choixDuPrompt === 3) {
//   niveau3();
// } else {
//   console.log("Vous n'avez pas choisi un niveau correct");
// }

function addNumber(e) {
  e.preventDefault();
  console.log("addNumber");

  let input = document.getElementById("input");
  console.log("input", input);

  let newNumber = document.createElement("p");
  newNumber.textContent = input.value;
  console.log("newNumber", newNumber);

  let listEssais = document.getElementById("tousLesEssais");
  listEssais.appendChild(newNumber);
  console.log("listEssais", listEssais);

  input.value = "";
}

const form = document.getElementById("form");
console.log("form", form);

form.addEventListener("submit", addNumber);

function niveau1() {
  let secretNumber = Math.floor(Math.random() * 20) + 1;
  let essai = 8;
  let userNb = parseInt(prompt("Entrez un nombre entre 1 et 20"));
  console.log("secret number", secretNumber);
  let arrayDesEssais = [];

  while (isNaN(userNb)) {
    userNb = parseInt(prompt("Ce n'est pas un nb !! Entrez un nombre"));
  }

  while (userNb !== secretNumber && essai > 0) {
    arrayDesEssais.push(userNb);
    console.log("arrayDesEssais", arrayDesEssais);
    if (userNb < secretNumber) {
      console.log("Plus grand");
    } else {
      console.log("Plus petit");
    }
    essai--;
    console.log("essai restants", essai);
    userNb = parseInt(prompt("Entrez un nouveau nombre"));
  }

  if (userNb === secretNumber) {
    console.log("Bravo");
    console.log(userNb);
    console.log("secret number", secretNumber);
  } else {
    console.log("Perdu");
    console.log(userNb);
  }
}

function niveau2() {
  let secretNumber = Math.floor(Math.random() * 50) + 1;
  let essai = 5;
  let userNb = parseInt(prompt("Entrez un nombre entre 1 et 50"));
  let arrayDesEssais = [];

  console.log("secret number", secretNumber);

  while (isNaN(userNb)) {
    userNb = parseInt(prompt("Ce n'est pas un nb !! Entrez un nombre"));
  }

  while (userNb !== secretNumber && essai > 0) {
    arrayDesEssais.push(userNb);
    console.log("arrayDesEssais", arrayDesEssais);
    if (userNb < secretNumber) {
      console.log("Plus grand");
    } else {
      console.log("Plus petit");
    }
    essai--;
    userNb = parseInt(prompt("Entrez un nouveau nombre"));
  }

  if (userNb === secretNumber) {
    console.log("Bravo");
    console.log("secret number", secretNumber);
  } else {
    console.log("Perdu");
  }
}

function niveau3() {
  let secretNumber = Math.floor(Math.random() * 100) + 1;
  let essai = 3;
  let userNb = parseInt(prompt("Entrez un nombre entre 1 et 100"));
  console.log("secret number", secretNumber);
  let arrayDesEssais = [];

  while (isNaN(userNb)) {
    userNb = parseInt(prompt("Ce n'est pas un nb !! Entrez un nombre"));
  }

  while (userNb !== secretNumber && essai > 0) {
    arrayDesEssais.push(userNb);
    console.log("arrayDesEssais", arrayDesEssais);
    if (userNb < secretNumber) {
      console.log("Plus grand");
    } else {
      console.log("Plus petit");
    }
    essai--;
    userNb = parseInt(prompt("Entrez un nombre"));
  }

  if (userNb === secretNumber) {
    console.log("Bravo");
    console.log("secret number", secretNumber);
    console.log("arrayDesEssais", arrayDesEssais);
  } else {
    console.log("Perdu");
  }
}
