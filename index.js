const submit = document.getElementById("btn");

const modal = document.getElementById("myModal");

const span = document.getElementsByClassName("close")[0];

let result = document.getElementById("result");

submit.addEventListener("click", function () {
  const inputName = document.getElementById("name");
  name = inputName.value;
  if (!name) {
    const elementClass = [...document.getElementsByClassName("noBorder")];
    elementClass.forEach(function (item) {
      item.className = "borderFail";
    });
    const elementClass1 = [
      ...document.getElementsByClassName("errorMessageOff"),
    ];
    elementClass1.forEach(function (item) {
      item.className = "errorMessageOn";
    });
  } else {
    const elementClass = [...document.getElementsByClassName("noBorder")];
    elementClass.forEach(function (item) {
      item.className = "borderSuccess";
    });
    modal.style.display = "block";
    console.log(name);
  }
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
