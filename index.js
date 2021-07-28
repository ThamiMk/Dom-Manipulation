document.body.style.backgroundColor = "#FFF0F5";
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
    
    const homeList = document.createElement('a');
    homeList.href = "index.html"; 
    homeList.style.textDecoration = "none";
    aboutList.style.color = 'white';
    homeList.style.flex = "auto"
    homeList.style.textAlign = "center";

    const aboutList = document.createElement('a');
    aboutList.href = "aboutN.html"; 
    aboutList.style.textDecoration = "none";
    aboutList.style.color = 'white';
    aboutList.style.flex = "auto"
    aboutList.style.textAlign = "center";

    const about2List = document.createElement('a');
    about2List.href = "aboutT.html"; 
    about2List.style.textDecoration = "none";
    about2List.style.color = 'white';
    about2List.style.flex = "auto"
    about2List.style.textAlign = "center";

    homeList.setAttribute('class', 'tab');
    aboutList.setAttribute('class', 'tab');
    about2List.setAttribute('class', 'tab');

    homeList.textContent = 'Home';
    aboutList.textContent = 'About Us';
    about2List.textContent = 'About Thami';

    nav.classList = 'navbar';

    unOrdered.appendChild(homeList);
    unOrdered.appendChild(aboutList);
    unOrdered.appendChild(about2List);
    nav.appendChild(unOrdered);

    return nav;
  };

const body = document.querySelector('body');
const navbar = createNav();
const mainDiv = document.getElementById('content');
body.appendChild(navbar);
