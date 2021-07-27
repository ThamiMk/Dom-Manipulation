document.body.style.backgroundColor = "#4682B4";
document.body.style.color = 'white';


const div = document.createElement('div');    
div.style.color = 'blue'; 
div.textContent = 'Hello World!'
div.innerHTML = '<span>Hello World!</span>'; 



const createNav = () => {
    const nav = document.createElement('nav');
    nav.style.cssText = 'border: 1px solid #ccc; background: pink';
    const unOrdered = document.createElement('ul');
    unOrdered.style.display = "flex";
    unOrdered.style.alignContent = "center";
    unOrdered.style.listStyleType = "none";
    
    const homeList = document.createElement('li');
    homeList.style.flex = "auto"
    homeList.style.textAlign = "center";

    const aboutList = document.createElement('li');
    aboutList.style.flex = "auto"
    aboutList.style.textAlign = "center";

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
