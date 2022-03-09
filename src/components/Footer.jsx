import React from "react";


var options = { year: 'numeric', month: 'long', day: 'numeric' };
const createdApp = new Date();
const day = createdApp.toLocaleDateString("en-US", options);

function Footer() {
    return (<footer>
        <p>Copyright &copy; {day}</p>
        <p> Made with love by Matheus! ❤️</p>
    </footer>
    );
}

export default Footer;