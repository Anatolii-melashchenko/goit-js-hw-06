const categoriesEl = document.querySelector("#categories");
const categoriesListEl = categoriesEl.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesListEl.length}`);

// for (let i = 0; i < categoriesListEl.length; i += 1) {
//   console.log(
//     `Categories: ${categoriesListEl[i].firstElementChild.textContent}`
//   );
//   console.log(
//     `Elements: ${categoriesListEl[i].lastElementChild.children.length}`
//   );
// }

// categoriesListEl.forEach((category) => {
//   const { firstElementChild, lastElementChild } = category;

//   console.log(`Category: ${firstElementChild.textContent}`);
//   console.log(`Elements: ${lastElementChild.children.length}`);
// });

categoriesListEl.forEach(({ firstElementChild, lastElementChild }) => {
  console.log(`Category: ${firstElementChild.textContent}`);
  console.log(`Elements: ${lastElementChild.children.length}`);
});
