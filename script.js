// Toggle class active
const menutoggle = document.querySelector('.navbar-nav ul');
// ketika input diklik
document.querySelector('input').onclick = () => {
    menutoggle.classList.toggle('slide');
};

