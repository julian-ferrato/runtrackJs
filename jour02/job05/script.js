function updateFooterColor() {
    const scrollPercentage = ((window.scrollY + window.innerHeight) / document.body.clientHeight) * 100;
    const footer = document.querySelector('footer');
    footer.className = '';
    footer.classList.add(`color-${Math.floor(scrollPercentage / 10) * 10}`);
}

window.addEventListener('scroll', updateFooterColor);

updateFooterColor();
