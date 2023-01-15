// -------1------

const categoriesOfUl = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesOfUl.length);

// -------2--------


const headOfCategory = [...categoriesOfUl].map(category => {
    console.log('Category:', category.firstElementChild.textContent);
    console.log('Elements:', category.lastElementChild.children.length);
});