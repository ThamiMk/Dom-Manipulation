export const Footer = (() => {

        const footerGC = document.createElement('div');
        footer.classList.add('footers');
        footer.textContent = 'Contact Girlcode: ';
        
        const logoA = document.createElement('a');
        logoA.href = "https://twitter.com/GirlCode_za";
        const logo = document.createElement('i');
        logo.className = 'fab fa-twitter';
        logoA.appendChild(logo);
        footer.appendChild(logoA);

        const logoB = document.createElement('a');
        logoB.href = "https://www.instagram.com/girlcode_za/";
        const logo2 = document.createElement('i');
        logo2.className = 'fab fa-instagram';
        logoB.appendChild(logo2);
        footer.appendChild(logoB);
    
        return {footerGC};
    
})();
