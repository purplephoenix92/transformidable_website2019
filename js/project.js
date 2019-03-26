$('a[href*="#"]').click(function(event){
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});


var quotes =[
 'You can keep going and your legs might hurt for a week or you can quit and your mind will hurt for a lifetime-Mark Allen',
 ' A Triathlete is a person who does not understand that one sport is enough',
 'Swim like the boat sunk ride like you stole it run for your life',
 'Triathlon does not build character it reveals it',
 'Love peace faith TRI do your best and forget the rest',
 'Dont limit your challenges challenge your limits',
 'This race wont train for itself just lace up your shoes and get moving',
 'Be strong you never know who you are inspiring'
]

function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}







