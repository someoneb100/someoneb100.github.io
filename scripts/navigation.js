var items = [{name : "home", description : "Bio"}
            ,{name : "database", description : "Projects"}
            ,{name : "mail", description : "Contacts"}];

var tabs = items.map(item => item.name);
var currentTab = tabs[0];

function findDescription(itemName) {
    return items.find(item => item.name == itemName).description
}

function createInfo() {
    var info = document.createElement('div');
    info.className = 'background-mangenta';
    info.id = 'navigation-container'
    
    info.appendChild(createHeader());
    info.appendChild(createNav());
    return info
}

function getTab(elem){
    var name = elem.id;
    return name.substring(name.indexOf('-') + 1);
}

function createHeader() {
    var nameField = document.createElement('header');
    nameField.className = 'navigation-item background-blue text-mangenta';
    var nameText = document.createTextNode('Petar Đorđević');
    nameField.appendChild(nameText);
    return nameField;
};

function createNav() {
    var navigationList = document.createElement('nav');
    navigationList.className = 'background-mangenta';
    items.forEach(item => {
        var field = document.createElement('div');
        field.className = 'navigation-item tooltip';

        var image = document.createElement('img');
        image.className = 'navigation-icon';
        image.src = 'img/navigation_icons/' + item.name + '.png';
        image.id = 'navigation-' + item.name;
        field.appendChild(image);

        var tooltip = document.createElement('span');
        tooltip.innerText = item.description;
        tooltip.className = "tooltiptext background-mangenta text-white";
        field.appendChild(tooltip);

        navigationList.appendChild(field);
    });
    
    return navigationList;
}