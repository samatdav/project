// Establish the array which acts as a data source for the list
var list = [
{"type" : "buy", "img" : "img/sun.jpg", "title" : "BDS!", "link" : "http://buydontstudy.ru/","text" : "blah blah"},
{"type" : "sell", "img" : "img/sun.jpg", "title" : "Hello!", "link" : "#","text" : "blah blah"},
{"type" : "buy", "img" : "img/sun.jpg", "title" : "Hello!", "link" : "#","text" : "blah blah"},
{"type" : "sell", "img" : "img/sun.jpg", "title" : "Hello!", "link" : "#","text" : "blah blah"},
{"type" : "buy", "img" : "img/sun.jpg", "title" : "Hello!", "link" : "#","text" : "blah blah"},
{"type" : "sell", "img" : "img/sun.jpg", "title" : "Hello!", "link" : "#","text" : "blah blah"}
];

function makelist(){
        // Make a container element for the list - which is a <div>
        // You don't actually need this container to make it work

	for( var i =  0 ; i < list.length; ++i){   

        // add it to the page       
        var listContainer = document.createElement("div");
        listContainer.className = "item";
        document.querySelectorAll('.' + list[i].type)[0].appendChild(listContainer);

        // Make the list itself which is a <ul>
        var listElement = document.createElement("ol");

        // add it to the page
        listContainer.appendChild(listElement);

  
		$('.' + list[i].type).append(
		'<li class="item col-md-12" onclick="location.href=\'' + list[i].link + 
		'\';"><img class="image" src="' + list[i].img + 
		'" width="90" height="90"/><h3><a href="' + list[i].link + 
		'">'+list[i].title+'</a></h3><p>'+ list[i].text +'</p></li>');
        }

}
makelist();