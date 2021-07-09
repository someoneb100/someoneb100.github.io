function createContents() {
    var contents = document.createElement('div');
    contents.id = 'contents';

    contents.appendChild(createArticle(currentTab));
    contents.appendChild(createAside());
    return contents;
}

function changeTab(newItem) {
    if(newItem == undefined){
        $('#section-' + currentTab).show()
    }
    else{
        var name = getTab(newItem);
        if(name == currentTab){
            return;
        }
        $('#section-' + currentTab).slideToggle();
        currentTab = getTab(newItem);
        $('#section-' + currentTab).slideToggle();
    }
    $('title').empty();
    $('title').append(document.createTextNode(`Petar Đorđević - ${findDescription(currentTab)}`));
}

function createArticle(tab) {
    var article = document.createElement('article');

    article.appendChild(createBio());
    article.appendChild(createProjects());
    article.appendChild(createContacts());

    return article;
}

function makeVisible(name){
    $('#section-' + name).show();
}

function makeHidden(name){
    $('#section-' + name).hide();
}

function createSection() {
    var section = document.createElement('section');
    section.className = "background-blue text-white";
    return section;
}

function createBio() {
    var section = createSection();
    section.id = 'section-home';
    section.appendChild(document.createTextNode('Test Bio'));

    return section;
}

function createProjects() {
    var section = createSection();
    section.id = 'section-database';
    section.appendChild(document.createTextNode('Some projects I worked on:'));

    var projects = [
        {tag: 'RS', text: 'Logic Circuit Simulator', href: 'https://gitlab.com/matf-bg-ac-rs/course-rs/projects-2020-2021/21-logic-circuit-simulator'},
        {tag: 'PP', text: 'LeGit', href: 'https://github.com/matf-pp/2021_Matf-Git'},
        {tag: 'KK', text: 'LLVM-OPT tool for finding pure functions', href: 'https://github.com/someoneb100/KK-seminarski-opt-prolazi'},
        {tag: 'PPGR', text: 'Panorama generator and Projective Distortion fixer (and more)', href: 'https://github.com/someoneb100/PPGR_Projektivna_distorzija'}
    ];

    projects.forEach(item => {
        var link = document.createElement('a');
        link.className = "project text-white"
        link.href = item.href;
        link.appendChild(document.createTextNode(`[${item.tag}] ${item.text}`));
        var container = document.createElement('div');
        container.appendChild(link);
        section.appendChild(container);
    });

    return section;
}

function createContacts() {
    var section = createSection();
    section.id = 'section-mail';
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