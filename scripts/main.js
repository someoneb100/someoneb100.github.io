$(document).ready(function(){
    var body = $('body')[0];
    body.appendChild(createInfo());

    body.appendChild(createContents());
    $('section').hide();
    changeTab();

    $('.navigation-icon').click(function(){
        changeTab(this);
    });

    $('a.project').hover(function()
    {
        $(this).removeClass('text-white');
        $(this).addClass('text-mangenta');
        $(this).parent().removeClass('text-white');
        $(this).parent().addClass('text-mangenta');
    },
    function()
    {
        $(this).removeClass('text-mangenta');
        $(this).addClass('text-white');
        $(this).parent().removeClass('text-mangenta');
        $(this).parent().addClass('text-white');
    });
});
