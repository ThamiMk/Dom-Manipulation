document.body.style.backgroundColor = "#FFF0F5";
document.body.style.color = 'white';
document.body.style.padding = "0";
document.body.style.margin = "0";

import {Footer} from './footer.js';

const createNav = () => {
    const nav = document.createElement('nav');
    nav.style.cssText = 'border: 1px solid #ccc; background: pink; height: 55px';
    
    const unOrdered = document.createElement('ul');
    unOrdered.style.display = "flex";
    unOrdered.style.alignContent = "center";
    unOrdered.style.listStyleType = "none";

    const image = document.createElement('a');
    image.href = "https://girlcode.co.za/"
    image.target = '_blank';
    let img = document.createElement('img');
    img.src = 'images/girlcode.png';
    img.style.cssText = 'width: 90px; height: 50px';
    img.style.marginTop = '-15px';
    image.appendChild(img)
    
    const homeList = document.createElement('a');
    homeList.href = "index.html"; 
    homeList.style.textDecoration = "none";
    homeList.style.color = 'white';
    homeList.style.flex = "auto";
    homeList.style.fontSize = "22px";
    homeList.style.textAlign = "center";

    const aboutList = document.createElement('a');
    aboutList.href = "aboutN.html"; 
    aboutList.style.textDecoration = "none";
    aboutList.style.color = 'white';
    aboutList.style.flex = "auto";
    aboutList.style.fontSize = "22px";
    aboutList.style.textAlign = "center";

    const about2List = document.createElement('a');
    about2List.href = "aboutT.html"; 
    about2List.style.textDecoration = "none";
    about2List.style.color = 'white';
    about2List.style.flex = "auto";
    about2List.style.fontSize = "22px";
    about2List.style.textAlign = "center";

    homeList.setAttribute('class', 'tab');
    aboutList.setAttribute('class', 'tab');
    about2List.setAttribute('class', 'tab');

    homeList.textContent = 'Home';
    aboutList.textContent = 'About Nonny';
    about2List.textContent = 'About Thami';

    nav.classList = 'navbar';

    unOrdered.appendChild(image);
    unOrdered.appendChild(homeList);
    unOrdered.appendChild(aboutList);
    unOrdered.appendChild(about2List);
    nav.appendChild(unOrdered);

    return nav;
  };

  const image2 = document.createElement('img');
  image2.src = 'images/flower.jpg';
  image2.style.cssText = 'width: 100%; height: 500px';
  image2.style.filter = "blur(4px)";

  const image3 = document.createElement('img');
  image3.src = 'images/girls.png';
  image3.classList.add("bg-image");
  image3.style.cssText = 'width: 400px; height: 200px';
  //image3.style.filter = "blur(3px)";

  const text = document.createElement('h4');
  text.classList.add("bg-text");
  text.style.fontFamily = "Lucida handwriting";
  text.innerHTML= "HOORAY!!!"+'<br>'+"Welcome to the world of " + '<br />' +"GIRLCODERS." + '<br>' + "Find all there is to know about our beautiful girls on their about pages.";

  
const body = document.querySelector('body');
const navbar = createNav();
//const mainDiv = document.getElementById('content');
body.appendChild(navbar);
body.appendChild(image2);
body.appendChild(image3);
body.appendChild(text);

const container = document.querySelector('#container');
container.appendChild(Footer.footerGC);