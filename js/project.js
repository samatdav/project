// Establish the array which acts as a data source for the list
var list = [
{"type" : "buy", "img" : "img/sun.jpg", "title" : "Hello!", "link" : "#","text" : "blah blah"},
{"type" : "buy", "img" : "img/sun.jpg", "title" : "Hello!", "link" : "#","text" : "blah blah"}
];
// var listImg = ['img/sun.jpg', 'img/sun.jpg', 'img/sun.jpg', 'img/sun.jpg', 'img/sun.jpg', 'img/sun.jpg', ]
// var listHead = ['<a href="">Hello!</a>', '<a href="">Hello!</a>']
// var listText = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed', 
//             'Lorem ipsum dolor sit amet, consectetur adipisi']
// wait for the page to load
function makelist(){
        

           
        // Make a container element for the list - which is a <div>
        // You don't actually need this container to make it work
        var listContainer = document.createElement("div");
        listContainer.className = "item";
	for( var i =  0 ; i < list.length; ++i){   
        // add it to the page
        document.querySelectorAll(".buy")[0].appendChild(listContainer);

        // Make the list itself which is a <ul>
        var listElement = document.createElement("ol");

        // add it to the page
        listContainer.appendChild(listElement);

  
		$('ol').append('<li class="item col-md-12"><img class="image" src="' + list[i].img + '" width="160" height="120"/><a href="'+list[i].link+'">'+list[i].title+'</a><p>'+ list[i].text +'</p></li>');
        }

}
makelist();