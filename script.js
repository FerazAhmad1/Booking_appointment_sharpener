"use strict";
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const ncontainer = document.querySelector(".ncontainer");
const submit = document.querySelector(".submit");
let allitems = [];
let idcount = 0;

submit.addEventListener("click", addli);
function addli(e) {
  idcount++;
  if (!input1.value || !input2.value) {
    alert("please fill all input");
    return;
  }

  // const liinput = input1.value + " " + input2.value;
  // input1.value = "";
  // input2.value = "";
  let user = { name: input1.value, email: input2.value, id: "a" + idcount };
  allitems.push(user);
  input1.value = input2.value = "";

  localStorage.setItem(`${user.name}`, JSON.stringify(user));
  show(allitems);
}

function show(arr) {
  console.log("yes");
  ncontainer.innerHTML = "";

  arr.forEach((element) => {
    const addedElement = document.createElement("div");
    addedElement.classList.add("added-element");
    const li = document.createElement("li");
    li.textContent = element.name + " " + element.email;
    const div = document.createElement("div");
    div.classList.add("btn");
    const edit = document.createElement("button");
    edit.textContent = "edit";
    edit.id = element.id;

    const del = document.createElement("button");
    del.classList.add("dt");
    del.textContent = "X";
    div.append(edit, del);
    addedElement.append(li, div);
    ncontainer.append(addedElement);
    const editbutton = document.querySelector(`#${element.id}`);
    editbutton.addEventListener("click", function () {
      input1.value = element.name;
      input2.value = element.email;
      addedElement.remove();
      allitems = allitems.filter((mov) => mov.name !== element.name);
      localStorage.removeItem(`${element.name}`);
    });
    del.addEventListener("click", function () {
      addedElement.remove();
      allitems = allitems.filter((mov) => mov.name !== element.name);
      localStorage.removeItem(`${element.name}`);
    });
  });
}
let storage = [];
for (let i = 0; i < localStorage.length; i++) {
  let stg = JSON.parse(localStorage.getItem(localStorage.key(i)));
  storage.push(stg);
}
show(storage);
// let arr = [1, 2, 3, 4];

// var rotate = function (nums, k) {
//   for (let i = 1; i < nums.length; i++) {
//     let swap = nums[i];
//     nums[i] = nums[i - 1];
//     nums[i - 1] = swap;
//   }
//   console.log(nums);
//   return nums;
// };
// rotate([1, 2, 3, 4, 5, 6, 7], 3);
