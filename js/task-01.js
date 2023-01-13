// -------1------

const categoriesOfUl = document.querySelectorAll('.item');

console.log('Number of categories:', categoriesOfUl.length);

// -------2--------


const headOfCategory = [...categoriesOfUl].map(category => {
    console.log('Category:', category.querySelector("h2").textContent);
    console.log('Elements:', category.querySelectorAll('li').length);
});