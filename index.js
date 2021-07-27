document.body.style.backgroundColor = "#4682B4";
document.body.style.color = 'white';


const div = document.createElement('div');    
div.style.color = 'blue'; 
div.textContent = 'Hello World!'
div.innerHTML = '<span>Hello World!</span>'; 


const createNav = () => {
    const nav = document.createElement('nav');
    const unOrdered = document.createElement('ul');
    const homeList = document.createElement('li');
    const aboutList = document.createElement('li');

    homeList.setAttribute('class', 'tab');
    aboutList.setAttribute('class', 'tab');

    homeList.textContent = 'Home';
    aboutList.textContent = 'About Us';

    nav.classList = 'navbar';

    unOrdered.appendChild(homeList);
    unOrdered.appendChild(aboutList);
    nav.appendChild(unOrdered);

    return nav;
  };


const body = document.querySelector('body');
const navbar = createNav();
const mainDiv = document.getElementById('content');
body.appendChild(navbar);
