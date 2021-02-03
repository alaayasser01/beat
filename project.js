const navslide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll("nav-links li");
    //togle nav
    burger.addEventListener("click", ()=> {
        nav.classList.toggle("nav-active")
    });
   
}
navslide();
const sponsorSection = document.getElementById('sponsors');
let numSponsors = 0;

const getInput = () => {
    const nameInput = document.getElementById('name-input');
    const srcInput = document.getElementById('src-input');
    const linkInput = document.getElementById('link-input');
    const data = {
        name: nameInput.value,
        src: srcInput.value,
        link: linkInput.value,
    };
    console.log(data);
    return data;
};

const createSponsor = () => {
    const sponsorOrder = numSponsors + 1;
    const inputData = getInput();

    const anchor = document.createElement('a');
    anchor.setAttribute('id', `sponsor-${sponsorOrder}`);
    anchor.setAttribute('href', `${inputData.link}`);

    const img = document.createElement('img');
    img.setAttribute('id', `sponsorImage-${sponsorOrder}`);
    img.setAttribute('alt', `sponsorImage: ${inputData.name}`);
    img.setAttribute('src', `${inputData.src}`);

    anchor.appendChild(img);

    sponsorSection.appendChild(anchor);
    numSponsors++;
};
const addSponsorBtn = document.getElementById('addSponsor');
addSponsorBtn.addEventListener('click', (e) => {
    e.preventDefault();
    createSponsor();
});