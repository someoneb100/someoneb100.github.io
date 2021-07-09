var currentTab = null;
var tabs = null;

$(document).ready(function(){
    var body = $('body')[0];
    body.appendChild(createInfo());
    tabs = Array.prototype.slice.call($('nav')[0].childNodes).map(item => item.childNodes[0].id);
    currentTab = tabs[0];

    body.appendChild(createContents());
    $('section').hide();
    makeVisible(currentTab);

    $('.navigation-icon').click(function(){
        makeHidden(currentTab);
        currentTab = this.id;
        makeVisible(currentTab);
    });

});

function createContents() {
    var contents = document.createElement('div');
    contents.id = 'contents';

    contents.appendChild(createArticle(currentTab));
    contents.appendChild(createAside());
    return contents;
}

function createInfo() {
    var info = document.createElement('div');
    info.className = 'background-mangenta';
    
    info.appendChild(createHeader());
    info.appendChild(createNav());
    return info
}