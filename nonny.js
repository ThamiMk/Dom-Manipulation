document.body.style.backgroundColor = "pink";
document.body.style.color = 'black';
//document.body.style.height = '100px';

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


const footer = document.createElement('footer');
footer.classList.add('footer');

const un = document.createElement('ul');
un.style.display = "flex";
un.style.alignContent = "center";
un.style.listStyleType = "none";

const call = document.createElement('a');
call.href = "tel:076234567";
call.style.flex = 'auto';
const logo1 = document.createElement('i');
logo1.className = "fa fa-phone-square fa-rotate-90";
call.style.color = "white";
call.style.fontSize = "50px";
call.appendChild(logo1);
un.appendChild(call);
//footer.appendChild(call);

const list1 = document.createElement('h4');
list1.style.color = 'white';
list1.style.flex = "auto";
list1.innerHTML = 'Call' + '<br>'+ 'T: 076 123 4567' +'<br>'+ 'H: 060 123 4567';
list1.classList.add('list1');
list1.style.textAlign = "center";

const email = document.createElement('a');
email.href = "";
email.style.flex = 'auto';
const logo2 = document.createElement('i');
logo2.className = "fa fa-envelope-square";
email.style.color = "white";
email.style.fontSize = "50px";
email.appendChild(logo2);
un.appendChild(email);
//footer.appendChild(email);

const list2 = document.createElement('h4');
list2.style.color = 'white';
list2.style.flex = "auto";
list2.innerHTML = 'Email' + '<br>' + 'noncedomahao@gmail.com';
list2.classList.add('list2');
list2.style.textAlign = "center";

const follow = document.createElement('a');
follow.href = "";
follow.style.flex = 'auto';
const logo3 = document.createElement('i');
logo3.className = "fa fa-plus-square";
follow.style.color = "white";
follow.style.fontSize = "50px";
follow.appendChild(logo3);
un.appendChild(follow);
//footer.appendChild(follow);

const list3 = document.createElement('h4');
list3.style.color = 'white';
list3.style.flex = "auto";
list3.innerHTML = 'Follow me' +'<br>';
list3.classList.add('list3');
list3.style.textAlign = "center";

const github = document.createElement('a');
github.href = "https://github.com/Nonny-Mahao";
const logoG = document.createElement('i');
logoG.style.color = 'black';
logoG.className = 'fab fa-github';
github.appendChild(logoG);
list3.appendChild(github);

const linkedin = document.createElement('a');
linkedin.href = "https://www.linkedin.com/in/noncedo-madwe-b50002180/";
const logoL = document.createElement('i');
logoL.className = 'fab fa-linkedin';
logoL.style.color = 'blue';
linkedin.appendChild(logoL);
list3.appendChild(linkedin);

const insta = document.createElement('a');
insta.href = "https://www.instagram.com/nonny_mahao/";
const logoI = document.createElement('i');
logoI.className = 'fab fa-instagram-square';
logoI.style.color = '#FF1493';
insta.appendChild(logoI);
list3.appendChild(insta);

const body = document.querySelector('body');

footer.appendChild(un); 
footer.appendChild(list1);
footer.appendChild(list2);
footer.appendChild(list3);




body.appendChild(aboutList);
body.appendChild(nav);
body.appendChild(nonny);
body.appendChild(text);
body.appendChild(text2);
body.appendChild(resume);
body.appendChild(projects);
body.appendChild(contact);
body.appendChild(des);
body.appendChild(footer);

