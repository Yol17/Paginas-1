document.querySelectorAll('.product-grid').forEach((productGrid) => {
    productGrid.addEventListener('wheel', handleWheel);
});

function handleWheel(event) {
    event.preventDefault();
    const scrollAmount = event.deltaY * 5;
    event.currentTarget.scrollLeft += scrollAmount;
}