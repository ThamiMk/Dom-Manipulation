//Added background colour 
document.body.style.backgroundColor = "#FFF0F5";

// Creating the navigation bar
const header = document.createElement('div');
header.classList.add('heading');

const li_name = document.createElement('li');
li_name.textContent = "Thamsanqa Kekana";
li_name.style.listStyle ="none";
li_name.style.color= "white"
li_name.style.marginRight ="270px"
header.appendChild(li_name);

const home = document.createElement('a');
home.textContent="Home";
home.href = "index.html";
home.style.textDecoration = "none";
home.style.color ="white";
home.style.fontSize = "40px";
header.appendChild(home);

const image = document.createElement('a');
image.href = "https://girlcode.co.za/"
const img2 = document.createElement('img');
img2.src = "girlcode.png"
image.target = '_blank';
img2.style.cssText = 'width: 90px; height: 50px';
img2.style.marginLeft = "300px"
image.appendChild(img2);
header.appendChild(image); 

document.body.append(header);

// Adding the image on the left
const aside = document.createElement('aside');
aside.classList.add('sides');
document.body.appendChild(aside);

let img = document.createElement('img');
img.src = 'thami.png';
img.style.cssText = 'width: 450px; height: 450px';
img.style.borderRadius = '50%';
aside.appendChild(img);

// Adding a paragraph on the right
const info = document.createElement('section');
info.classList.add('story');
info.innerHTML = 'About Thami'+'<br><br>'+ 'I am an aspiring software engineer. Girlcode has helped'
+'<br>'+' me develop a passion to make the world a better' + '<br>'+'place for woman'+'<br><br>'+ 
'I have an IT degree with the following skills:'+'<br><br>'
document.body.appendChild(info);

// Creating circles for my skills

const dev = document.createElement('Cir');
dev.innerHTML = "Web and Android" +"<br>"+"Development";
info.appendChild(dev);

const pro = document.createElement('cir');
pro.innerHTML = "Programming (Java, C#, C++)";
info.appendChild(pro);

const db = document.createElement('cir');
db.innerHTML = "Databases (mySQL, SQLite)";
info.appendChild(db);


// adding a footer 
const footer = document.createElement('div');
footer.classList.add('footers');

//mail icon that opens prefered mail
const logoB = document.createElement ('a');
logoB.classList.add('log2');
logoB.href = "mailto:thamsanqa.kekana@ymail.com";
logoB.target = '_blank';
const logo2 = document.createElement('i');
logo2.className = "fa fa-envelope-square";
logoB.appendChild(logo2);
footer.appendChild(logoB);

const contact = document.createElement('p');
contact.innerHTML = "Email Me:"+"<br>"+"thamsanqa.kekana@ymail.com";
contact.style.marginLeft ="10px";
contact.style.marginRight = "555px";
contact.style.color = "White";
footer.appendChild(contact);

// Links to my professional accounnts
const prof = document.createElement('p');
prof.innerHTML = "Follow me on LinkedIn"+"<br>"+"and GitHub";
prof.style.color = "White";
footer.appendChild(prof);

const logoA = document.createElement('a');
logoA.classList.add('log1');
logoA.href = "https://www.linkedin.com/in/thamsanqa-kekana-97799b19a/";
logoA.target = '_blank';
const logo = document.createElement('i');
logo.className = 'fab fa-linkedin';
logo.style.marginLeft ="15px";
logoA.appendChild(logo);
footer.appendChild(logoA);

const logoc = document.createElement('a');
logoc.classList.add('logs');
logoc.href = "https://github.com/ThamiMk";
logoc.target = '_blank';
const logo1 = document.createElement('i');
logo1.className = 'fab fa-github';
logoc.appendChild(logo1);
logoc.style.marginLeft ="10px";
footer.appendChild(logoc);

document.body.appendChild(footer);