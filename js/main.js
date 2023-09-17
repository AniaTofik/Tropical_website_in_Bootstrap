const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const navItems = document.querySelectorAll('.nav__item');

const handleNav = () => {
	nav.classList.toggle('nav--active');

	navItems.forEach((navItem) => {
		navItem.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});

	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	navItems.forEach((navItem) => {
		navItem.classList.toggle('nav-items-animation');
		navItem.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

navBtn.addEventListener('click', handleNav);
