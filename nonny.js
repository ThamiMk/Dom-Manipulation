document.body.style.backgroundColor = "pink";
document.body.style.color = 'black';

const aboutList = document.createElement('h1');
aboutList.style.flex = "auto";
aboutList.style.fontSize = "50px";
aboutList.style.marginTop = '30px';
aboutList.style.marginLeft = '150px';
aboutList.style.color = 'black';

const nav = document.createElement('nav');
nav.style.marginLeft = '150px';
nav.style.marginTop = '-55px';


const unOrdered = document.createElement('ul');
unOrdered.style.display = "flex";
unOrdered.style.alignContent = "center";
unOrdered.style.listStyleType = "none";

const prof = document.createElement('h4');
prof.textContent = '(Graduate)';
prof.style.flex = 'auto';



const homeList = document.createElement('a');
homeList.href = "index.html"; 
homeList.style.textDecoration = "none";
homeList.style.color = 'white';
homeList.style.flex = "auto";
homeList.style.textAlign = "center";

let img = document.createElement('img');
img.src = 'girlcode.png';
img.style.cssText = 'width: 90px; height: 50px';
img.style.marginTop = '-15px';


homeList.setAttribute('class', 'tab');
aboutList.setAttribute('class', 'tab');

aboutList.textContent = 'Noncedo Madwe';
homeList.textContent = 'Home';


nav.classList = 'navbar';

unOrdered.appendChild(prof);
unOrdered.appendChild(homeList);
unOrdered.appendChild(img);
nav.appendChild(unOrdered);


const nonny = document.createElement('img');
nonny.src = 'img.jpg';
nonny.style.cssText = 'width: 600px; height: 450px';
nonny.style.marginLeft = '10px';
nonny.style.borderRadius = '50%';

const text = document.createElement('h1');
text.classList.add("bg-text2");
text.style.fontFamily = "Copperplate";
text.style.fontSize = '50px';
text.innerHTML= "Hello,";

const text2 = document.createElement('h2');
text2.classList.add("bg-text3");
text2.style.fontFamily = "Lucida console";
text2.innerHTML= "a bit about me:"

const resume = document.createElement('a');
resume.href = 'resume.pdf';
resume.target = '_blank';
resume.style.textDecoration = "none";
resume.classList.add("resume");
resume.innerHTML = '<br>'+'<br>'+'My resume';

const projects = document.createElement('a');
projects.classList.add("projects");
projects.href = 'https://github.com/Nonny-Mahao?tab=repositories';
projects.target = '_blank';
projects.style.textDecoration = "none";
projects.innerHTML = '<br>'+'<br>'+'My projects';


const contact = document.createElement('a');
contact.classList.add("contact");
contact.href = 'mailto:noncedomahao@gmail.com';
contact.target = '_blank';
contact.style.textDecoration = "none";
contact.innerHTML = '<br>'+'<br>'+'Contact Me';

const des = document.createElement('h4');
des.classList.add("des");
des.innerHTML = 'I am a Bachelor of Science graduate in Mathematics of finance, from the University of the Witwatersrand. I majored in Computer Science and Economics. I am an individual that believes highly in hard work. I would love to become a data analyst one day. With what I have learned thus far both from the course of my degree and learnership with Girlcode, I believe I am equipped with the necessary skills to adapt to the fast changing world. Through the work experience I have received I am confident that it gave me leadership and relationship building qualities.';

const body = document.querySelector('body');
body.appendChild(aboutList);
body.appendChild(nav);
body.appendChild(nonny);
body.appendChild(text);
body.appendChild(text2);
body.appendChild(resume);
body.appendChild(projects);
body.appendChild(contact);
body.appendChild(des);


