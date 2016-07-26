var pageHeader = document.getElementById("mainHeader");
pageHeader.textContent = "Java sports water";

var sandwichImagesElems = document.getElementsByClassName("sandwichpic");
console.log(sandwichImagesElems);


var myButtons = document.getElementsByTagName("button");
console.log(myButtons);

myButtons[0].addEventListener("click", function () {
	// alert("You Clicked Me!")
	sandwichImagesElems[0].src = "http://www.powerade.co.za/content/dam/GO/powerade/south-africa/home/Powerade-SA-featured-products.jpgs" ;
});

