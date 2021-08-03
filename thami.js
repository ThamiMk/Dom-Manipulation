document.body.style.backgroundColor = "Thistle";

const footer = document.createElement('div');
footer.classList.add('footers');
footer.textContent = '© Copyright Nonny&Thami';
document.body.appendChild(footer);
document.body.style.backgroundColor = "lavander";

const aside = document.createElement('aside');
aside.classList.add('sides');
document.body.appendChild(aside);

const info = document.createElement('section');
info.classList.add('story');
info.innerHTML = 'About Thamsanqa Kekana'+'<br><br>'+ 'I am an aspiring software engineer. Girlcode has helped'+'<br>'+' me develop a passion to make the world a better.' + '<br>'+'place for woman'
+'<br><br>'+ 'I have a IT degree with the following skills:'+'<br><br>'+ '* Web and Mobile development'+'<br>'+'*Programming (Java,C#,Python)'+'<br>'+'*Databases'+'<br><br>'+ 'Linkedin and GitHub Profile:'+ '<br>';
document.body.appendChild(info);

let img = document.createElement('img');
img.src = 'thami.png';
img.style.cssText = 'width: 450px; height: 450px';
img.style.borderRadius = '50%';
aside.appendChild(img);

const logoA = document.createElement('a');
logoA.href = "https://www.linkedin.com/in/thamsanqa-kekana-97799b19a/";
const logo = document.createElement('i');
logo.className = 'fab fa-linkedin';
logoA.appendChild(logo);
info.appendChild(logoA);

const logoc = document.createElement('a');
logoc.href = "https://github.com/ThamiMk";
const logo1 = document.createElement('i');
logo1.className = 'fab fa-github';
logoc.appendChild(logo1);
info.appendChild(logoc);
