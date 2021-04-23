console.log('test 1...2...1...2');

const hercule = {
    name: "Hercule",
    job: ["Demi-Dieu"],
    age: 35,
    department: 75,
    arm: 60.5,
    /* [{
        armSize: 60.5,
        armUnit: [cm, undefined],
    }],*/
    inRelationship: true
};

base.fillProfil(hercule);

friends = ["Jupiter", "Junon", "Alcmène", "Déjanire"];

base.printFriends(friends);
console.log(friends);

base.setBestFriend("Jupiter");


const banner__title = document.createElement('h1');
    banner__title.textContent = '"Vous consultez le profil de Hercule"';
    // const banner__title = document.querySelector('h1');
    const headerBanner = document.querySelector('header-banner');
    console.log(headerBanner);
    headerBanner.appendChild(banner__title);