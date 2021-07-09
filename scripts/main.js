$(document).ready(function(){
    var body = $('body')[0];
    body.appendChild(createInfo());

    body.appendChild(createContents());
    $('section').hide();
    makeVisible(currentTab);

    $('.navigation-icon').click(function(){
        makeHidden(currentTab);
        var name = this.id;
        currentTab = name.substring(name.indexOf('-') + 1);
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