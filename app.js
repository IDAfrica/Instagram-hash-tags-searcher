
let userValue = document.querySelector('#userinput');
const btn = document.querySelector('button');
const popper = document.querySelector(".popper");



btn.addEventListener('click', () => {
  generateTags(userValue.value);
});


function generateTags(value) {
  let tags = value.toLowerCase();
 
   if (tags.length == 0) {
     popper.style.display = "block";
     popper.innerHTML = "Input field cannot be empty, Please type in something";
     setTimeout(() => {
       popper.style.display = "none";
     }, 3000);
     return;
   } else if (tags.indexOf("#") > -1) {
     popper.style.display = "block";
     popper.innerHTML = `You should not include <span class="fs-6 fw-bold text-danger">#</span>`;
     setTimeout(() => {
       popper.style.display = "none";
     }, 3000);
     return;
   }
    location.href = `https://www.instagram.com/explore/tags/${value}`; 
}
