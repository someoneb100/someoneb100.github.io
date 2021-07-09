function createArticle(tab) {
    var article = document.createElement('article');

    article.appendChild(createBio());
    article.appendChild(createProjects());
    article.appendChild(createContacts());

    return article;
}

function makeVisible(name){
    $('#' + name + '-section').show();
}

function makeHidden(name){
    $('#' + name + '-section').hide();
}

function createBio() {
    var section = document.createElement('section');
    section.id = 'navigation-home-section';
    section.appendChild(document.createTextNode('Test Bio'));

    return section;
}

function createProjects() {
    var section = document.createElement('section');
    section.id = 'navigation-database-section';
    section.appendChild(document.createTextNode('Test Projects'));

    return section;
}

function createContacts() {
    var section = document.createElement('section');
    section.id = 'navigation-mail-section';
    section.appendChild(document.createTextNode('Test Contacts'));

    return section;
}

function createAside() {
    var aside = document.createElement('aside');

    var image = document.createElement('img');
    image.src = 'img/profile.jpg';
    image.id = 'profile-picture' 

    aside.appendChild(image);
    return aside;
}