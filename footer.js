export const Footer = (() => {
 
    
        const footerGC = document.createElement('nav');
        footerGC.classList = "footers";
        


        // creating location section

        const logoC = document.createElement('a');
        logoC.href = "https://www.google.com/maps/place/676+Gallagher+Ave,+Halfway+House,+Midrand,+1685/@-26.0020036,28.1248066,17z/data=!3m1!4b1!4m5!3m4!1s0x1e956e08d57b99c1:0x92af70bd643549d4!8m2!3d-26.0020084!4d28.1269953";
        logoC.target = '_blank';
        const logo3 = document.createElement('i');
        logo3.className = 'fas fa-map-marker-alt';
        logo3.style.color = 'red';
        logo3.style.fontSize = "70px";
        logoC.style.marginRight = "10px"
        logo3.style.textAlign = "center";
        logoC.appendChild(logo3);
        footerGC.appendChild(logoC);

        const name = document.createElement('p');
        name.innerHTML = 'Location'+'<br>'+'676 Gallagher Ave'+'<br>'+'Midrand'+'<br>'+'1685';
        name.style.marginRight = "300px"
        footerGC.appendChild(name);

        //Creating Contact us section
        const logo4 = document.createElement('i');
        logo4.className = "fas fa-phone-square";
        logo4.style.fontSize = '70px';
        footerGC.appendChild (logo4);
        logo4.style.marginRight = "10px"
        const phone  = document.createElement('p');
        phone.innerHTML = 'Call: '+'<br>'+'+27 614 441 737'+'<br>'+'Or Email: '+'<br>'+'info@girlcode.co.za';
        phone.style.marginRight = "300px"
        footerGC.appendChild(phone)

        //Creating Social Media accounts

        const social  = document.createElement('p');
        social.innerHTML = 'Follow GirlCode'+'<br>'+'on Twitter'+'<br>'+'and Instagram';
        social.style.marginRight = "10px"
        footerGC.appendChild(social)

        const logoA = document.createElement('a');
        logoA.classList.add('log1');
        logoA.href = "https://twitter.com/GirlCode_za";
        const logo = document.createElement('i');
        logo.className = 'fab fa-twitter';
        logo.style.fontSize = '70px'
        logo.style.marginRight = "10px"
        logo.target = '_blank';
        logoA.appendChild(logo);
        footerGC.appendChild(logoA);

        const logoB = document.createElement('a');
        logoB.href = "https://www.instagram.com/girlcode_za/";
        const logo2 = document.createElement('i');
        logo2.className = 'fab fa-instagram';
        logo2.style.color = 'white';
        logo2.style.fontSize = '70px';
        logo2.target = '_blank';
        
        logoB.appendChild(logo2);
        footerGC.appendChild(logoB);
    
        return { footerGC };
    
})();
